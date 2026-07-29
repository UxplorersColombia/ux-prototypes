# Correo + SMS de incentivo — Migración al nuevo Portal Skandia

**Objetivo:** invitar a usuarios activos del portal legado a probar el nuevo portal, llevándolos al **gate de validación** (`/migrar`) donde confirman identidad y descubren si ya tienen acceso.

**Tono:** cercano, claro, seguro. Beneficios reales del nuevo portal (según las capturas): interfaz más ágil e intuitiva, navegación lateral simplificada (Inicio, Transacciones, Inversiones, Documentos), vista consolidada *"Lo que has logrado"*, acciones rápidas y acceso a **INVEST-ED** (inversiones automatizadas gestionadas por expertos).

> ⚠️ **Nota de seguridad del copy:** el CTA lleva al **gate de validación**, no directo al portal. El correo **no** debe afirmar "ya tienes acceso" (aún no lo sabemos y varía por cohorte). El mensaje correcto es *"ver si ya tienes acceso"*, que fija bien la expectativa.

---

## 1. Asunto — 3 alternativas para A/B testing

| # | Asunto | Ángulo |
|---|--------|--------|
| **A** | Valeria, tu nuevo Portal Skandia ya casi está listo para ti | Personalización + anticipación |
| **B** | Descubre el nuevo Portal Skandia: más ágil, más simple, 100% tuyo | Beneficio directo |
| **C** | ¿Ya puedes entrar al nuevo Portal Skandia? Averígualo en 30 segundos | Curiosidad + baja fricción |

*Recomendación: A (personalizado) vs C (curiosidad/rapidez) suelen ser los dos extremos más informativos para un A/B. Mantener B como control.*

**Preheader sugerido:** *"Verifica tu identidad y estrena una experiencia más rápida para gestionar tus inversiones."*

---

## 2. Cuerpo del correo (HTML / texto)

> **Asunto:** Descubre el nuevo Portal Skandia: más ágil, más simple, 100% tuyo

---

**¡Hola, [Nombre]! 👋**

Estamos estrenando el **nuevo Portal Clientes de Skandia** y queremos que seas de los primeros en probarlo.

Lo rediseñamos pensando en ti para que gestionar tus productos sea más rápido y simple:

- ⚡ **Más ágil e intuitivo** — encuentra todo en menos clics.
- 📊 **Todo en una vista** — mira *"Lo que has logrado"* y el estado de tus inversiones de un vistazo.
- 🧭 **Navegación simple** — Inicio, Transacciones, Inversiones y Documentos siempre a la mano.
- 🤖 **INVEST-ED** — inversiones automatizadas gestionadas por expertos, ajustadas a tu perfil.

El acceso se está habilitando por etapas. Para saber si tu cuenta ya está lista, solo necesitas **verificar tu identidad** — te toma menos de un minuto.

<p align="center">
  <a href="https://portal.skandia.com.co/migrar" style="display:inline-block;background:#00C73D;color:#ffffff;font-weight:700;font-family:Montserrat,Arial,sans-serif;font-size:16px;text-decoration:none;padding:15px 34px;border-radius:10px">🔒 Ver si ya tengo acceso</a>
</p>

🔒 **Tu seguridad es lo primero.** Validamos tu identidad con un código de un solo uso enviado a tu celular. Skandia nunca te pedirá tu contraseña por correo, SMS ni teléfono, y tus datos viajan siempre cifrados.

¿Prefieres seguir en el portal actual por ahora? Puedes hacerlo con total normalidad; te avisaremos cuando tu nuevo acceso esté listo.

Un abrazo,
**El equipo de Skandia**

---
<sub>Este correo se envía a clientes activos de Skandia Colombia. Si no reconoces esta cuenta, ignora este mensaje. Si tienes dudas, escríbenos por los canales oficiales del portal — nunca respondas con datos personales a este correo.</sub>

---

### Notas de maquetación
- **CTA:** botón verde brand `#00C73D`, texto blanco, radio 10px, un verbo claro. El texto *"Ver si ya tengo acceso"* fija la expectativa correcta (no promete acceso garantizado).
- Enlace del botón → `/migrar` (gate de validación de la Tarea 2). Idealmente con parámetro de campaña, p. ej. `?utm_source=email&utm_campaign=migracion`.
- Incluir versión **texto plano** equivalente para deliverability.
- La línea de seguridad ("Skandia nunca te pedirá tu contraseña…") también es una defensa **antiphishing**.

---

## 3. Versiones cortas — SMS / Push

### SMS (≤160 caracteres, sin emojis pesados para compatibilidad)

> **Opción 1 (beneficio):**
> Skandia: estrena tu nuevo Portal Clientes, mas agil y simple. Verifica tu identidad y entra: skandia.co/migrar Nunca pedimos tu clave por SMS.

> **Opción 2 (curiosidad):**
> Skandia: ¿ya tienes acceso al nuevo portal? Averigualo en 30 seg validando tu identidad: skandia.co/migrar Skandia no pide claves por SMS.

*Buenas prácticas SMS:* usar **link corto de dominio propio** (`skandia.co`), no acortadores genéricos (bit.ly) que activan filtros de spam y erosionan la confianza; incluir siempre el recordatorio antiphishing.

### Push notification

> **Título:** Tu nuevo Portal Skandia te espera ✨
> **Cuerpo:** Verifica tu identidad y descubre si ya tienes acceso. Toca para empezar — te toma menos de un minuto.
> **Deep link:** `skandiapp://migrar`

---

## Checklist de campaña

- [ ] Personalizar `[Nombre]` desde el CRM.
- [ ] Enviar **solo a la cohorte activa** habilitada (evita frustración de "aún no tienes acceso" masiva).
- [ ] A/B test de asunto (A vs C), control B.
- [ ] UTM en todos los enlaces para medir clic → validación → migración completada.
- [ ] Versión texto plano + HTML.
- [ ] Revisar copy con Kiki (Content Designer) contra lineamientos de marca antes de enviar.

---

*UXplorers · Skandia Colombia · 2026*
