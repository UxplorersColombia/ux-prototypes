# Migración Portal Legado → Portal Nuevo · Flujos de validación de identidad

**Contexto:** Migración progresiva de un subconjunto de usuarios activos del portal legado al nuevo Portal Clientes de Skandia. El nuevo portal aún no está liberado para todos.

**Restricciones de diseño:**
- No se puede reutilizar el login/credenciales entre portales (bases de identidad separadas).
- No se puede redirigir solo con la cédula → riesgo de *enumeración de usuarios* y suplantación.
- Hay que **validar identidad** antes de decidir a qué portal enviar al usuario.
- Objetivo: mínima fricción + percepción de proceso seguro.

**Datos disponibles para validar identidad:**
- Cédula + últimos 4 dígitos del celular registrado.
- Cédula + OTP (código de un solo uso) enviado a correo/SMS registrado.

---

## Principio transversal: nunca confiar en la cédula sola

La cédula en Colombia es un dato semi-público (aparece en facturas, contratos, bases filtradas). Tratarla como "algo que el usuario sabe" es débil. Por eso **siempre** se combina con un **segundo factor que el usuario tiene** (acceso al celular/correo registrado) o con una **sesión ya probada** en el portal legado.

Los dos flujos siguientes cubren las dos poblaciones reales:

| Flujo | Población | Punto de partida | Fricción | Seguridad |
|-------|-----------|------------------|----------|-----------|
| **A — Handoff con sesión** | Usuario ya logueado en el portal legado | Banner "Migra antes del cambio" dentro del portal actual | Muy baja (1 clic + set password) | **Alta** — identidad ya probada por sesión activa |
| **B — Gate de validación** | Usuario que llega en frío al portal nuevo (desde correo/SMS, sin sesión) | Landing / gate `/migrar` | Media (cédula + 2º factor) | **Alta** — 2FA real, anti-enumeración |

---

## FLUJO A — Handoff autenticado (mínima fricción)

> Para usuarios que **ya iniciaron sesión** en el portal legado. La identidad ya está probada por la sesión activa, así que no volvemos a pedirla: la "heredamos" de forma segura.

Este es el flujo que dispara el banner **"¡Migra antes del cambio! Entra hoy al nuevo Portal Skandia"** que ya existe en el dashboard legado.

### Paso a paso — Usuario

1. El usuario está navegando el portal legado (sesión activa).
2. Ve el banner **"¡Migra antes del cambio!"** con CTA **"Ingresa aquí"**.
3. Hace clic. Ve una pantalla de transición: *"Estamos preparando tu acceso seguro al nuevo portal…"* con un ícono de candado.
4. Se le pide un **paso de confirmación ligero** (step-up): un OTP a su celular/correo registrado **solo la primera vez**, porque va a crear credenciales nuevas.
5. Aterriza en el nuevo portal en una pantalla **"Crea tu contraseña del nuevo portal"** (no puede reutilizar la del legado).
6. Define contraseña → entra directo al dashboard nuevo. **Listo.**

### Paso a paso — Backend

1. **Verificar cohorte:** al hacer clic, el backend legado consulta si el `user_id` de la sesión pertenece al subconjunto habilitado para migrar. Si no → mensaje "aún no disponible" (ver Flujo B, pantalla 3b).
2. **Step-up OTP (primera vez):** se envía OTP al canal registrado y se valida. Esto eleva la garantía de identidad antes de crear credenciales en un sistema nuevo (evita que una sesión secuestrada genere acceso persistente).
3. **Emitir token de handoff:** el backend legado genera un **token firmado (HMAC/JWT), de un solo uso, TTL corto (~60 s)**, que contiene el `subject_id` mapeado, la cohorte y un `nonce`. **Nunca** viaja la cédula ni datos personales en la URL.
4. **Redirección:** `https://portal-nuevo.skandia.com.co/handoff?token=<jwt>`.
5. **Validación server-side en el portal nuevo:** verifica firma, expiración, `nonce` no usado (anti-replay), y que el `subject_id` mapee a una cuenta provisionada.
6. **Provisión + set password:** crea/vincula la cuenta en el sistema de identidad nuevo y fuerza la creación de contraseña (no se migran hashes entre sistemas).
7. **Sesión nueva:** se emite la sesión del portal nuevo; el token de handoff se invalida.

### Nivel de seguridad: **Alto**
- La identidad ya está probada por la sesión legada + step-up OTP.
- El token es **firmado, single-use, corto y opaco** → no expone datos ni permite enumeración.
- El `nonce` previene replay; la validación es server-side.
- **Riesgo residual:** si la sesión legada estuviera secuestrada, el atacante podría iniciar el handoff — mitigado por el step-up OTP obligatorio antes de crear credenciales.

---

## FLUJO B — Gate de validación (usuario en frío) ⭐ *el que se prototipa*

> Para usuarios **sin sesión** que llegan al portal nuevo desde el correo/SMS de invitación o directamente a `/migrar`. No podemos confiar en nada: hay que validar identidad desde cero con 2FA real.

### Arquitectura de pantallas

```
┌──────────────┐    ┌────────────────────┐    ┌─────────────────────────┐
│  1. Cédula   │ →  │  2. Segundo factor  │ →  │  3a. ✅ Migrado          │
│              │    │  (OTP / últimos 4)  │    │      → nuevo portal      │
└──────────────┘    └────────────────────┘    ├─────────────────────────┤
                                                │  3b. 🕓 Aún sin acceso   │
                                                │      → captura de correo │
                                                └─────────────────────────┘
```

### Paso a paso — Usuario

1. **Pantalla 1 — Cédula:** ingresa su número de documento. Copy de tranquilidad: *"Validamos tu identidad antes de darte acceso. Tus datos están protegidos 🔒"*.
2. **Pantalla 2 — Segundo factor:** ingresa el **código (OTP) de 6 dígitos** enviado a su celular/correo registrado (mostrado enmascarado: *"Enviamos un código a •••• 4821"*). Alternativa de menor seguridad: últimos 4 dígitos del celular registrado.
3. **Resultado:**
   - **3a (migrado + validado):** mensaje de éxito y redirección simulada al nuevo portal, donde definirá su contraseña.
   - **3b (validado pero no migrado):** mensaje amigable *"Aún no habilitamos tu acceso"* + opción de dejar su correo para ser avisado.

### Paso a paso — Backend

1. **Recibe cédula (pantalla 1):** **NO revela si existe o no.** Responde siempre igual (respuesta de tiempo constante) y siempre avanza a la pantalla 2. Así se **elimina la enumeración de usuarios**.
2. **Envío del segundo factor:**
   - Si la cédula existe y tiene canal registrado → envía OTP real.
   - Si no existe → no envía nada, pero la UI muestra igual "te enviamos un código". El intento fallará genéricamente en el paso 3.
3. **Validación del OTP (pantalla 2):**
   - **Rate limiting + intentos limitados** (p. ej. máx. 5 intentos, luego bloqueo temporal). Crítico si se usa "últimos 4 dígitos" (solo 10.000 combinaciones).
   - OTP con TTL corto (5 min) y un solo uso.
4. **Decisión de ruteo:**
   - Identidad válida **y** cohorte habilitada → **3a**: emite token de handoff (igual que Flujo A) → nuevo portal → set password.
   - Identidad válida **pero** no en cohorte → **3b**: registra correo opcional en lista de espera.
   - Identidad inválida → **error genérico** ("No pudimos validar tus datos"), sin decir *qué* falló (ni si la cédula existe).

### Nivel de seguridad: **Alto**
- **2FA real:** algo que sabe (cédula) + algo que tiene (acceso al canal OTP).
- **Anti-enumeración:** la pantalla 1 nunca confirma existencia del usuario; respuestas y tiempos uniformes.
- **Rate limiting + límite de intentos** contra fuerza bruta.
- **Errores genéricos** que no filtran estado de la cuenta.
- **OTP > últimos 4 dígitos:** el OTP es a prueba de adivinación; los últimos 4 dígitos son un fallback aceptable **solo** con límite estricto de intentos. **Recomendación: usar OTP como default.**

---

## Recomendación de implementación

| Escenario | Flujo | Razón |
|-----------|-------|-------|
| Usuario dentro del portal legado | **A** | Ya está autenticado; pedir 2FA de nuevo es fricción innecesaria (basta step-up para set password). |
| Usuario desde correo/SMS/landing | **B** | No hay sesión que heredar; hay que probar identidad desde cero. |
| **Segundo factor recomendado** | **OTP a canal registrado** | Resistente a adivinación; los "últimos 4 dígitos" solo como fallback con rate-limit duro. |

**Ambos flujos convergen en el mismo mecanismo seguro de handoff** (token firmado, single-use, TTL corto) y en el mismo paso final de **creación de contraseña nueva**, respetando la restricción de no reutilizar credenciales entre portales.

---

*UXplorers · Skandia Colombia · 2026*
