# Blueprint unificado de Employee Experience — Skandia Moments

**Versión:** v1 · **Fecha:** 2026-09-18 · **Autor:** Equipo UX Skandia
**Continuación de:** `b2link\conocimiento\skandia-moments-brief.md` (análisis de contexto,
sin gate de aprobación formal aún) y de
`experimentos\siempre-skandia\investigacion\siempre-skandia-benchmark-y-propuesta-v2.md`
(sección *"El journey completo — de onboarding a embajador"*, aprobado) — este
documento **extiende** esa tabla de 7 momentos, no la sustituye. Las filas 4–7 deben
coincidir literalmente con el original; cualquier discrepancia es un error de este
documento, no una actualización de lo ya aprobado.

**Vista complementaria:** `diseno\skandia-moments-blueprint.html` — el mismo contenido
en un lienzo navegable con pan & zoom, con las conexiones cruzadas entre carriles
dibujadas como flechas (mecánica tomada de
`UX_conversacional\host-telefonico-sami\guion-visual-retiro-mfund.html`).

---

## 1. Por qué un blueprint y no solo un journey

En la sesión de ideación la pregunta se formuló como *"qué debería vivir el empleado,
qué debería vivir el de Recursos Humanos y qué debería vivir el comercial"* — tres
actores con intereses distintos en el mismo momento. Un journey de un solo carril no
puede responder eso. Este documento es un **service blueprint de tres carriles
principales** (Empleado · Recursos Humanos · FP/Comercial), más dos carriles de
soporte (Datos y sistemas · Vacíos y riesgos).

## 2. Convenciones

**Madurez de cada celda:**
- 🟢 **Existe hoy** — construido, aprobado o dato ya disponible en Skandia.
- 🟡 **Concepto sin validar** — prototipable, pero no llevable a producción sin
  confirmar.
- 🔴 **Riesgo alto** — bloquea el resto si no se resuelve.

**Trazabilidad:** cada celda de las etapas 1–3 cita su origen en
`sesion-ideacion-skandia-moments.md`. Ninguna celda se rellena por simetría; lo que no
tiene respaldo textual se marca 🟡 y se dice explícitamente.

**Las 7 etapas** (eje horizontal, heredadas del benchmark v2, sin renombrar):
Ingreso → Onboarding financiero → Colaborador activo → Retiro → Siempre Skandia →
Cliente → Embajador.

---

## 3. El blueprint completo

### Carril EMPLEADO — qué vive

| Etapa | Qué vive la persona | Madurez |
|---|---|---|
| 1 · Ingreso | Llega a la empresa. Hoy: *"lo que me dijeron fue: elige un fondo de pensión. Nadie me explicó las modalidades de pensión."* Con Skandia Moments: registro con 3 datos obligatorios (salario, género, edad) y explicación transparente de para qué se piden; correo **personal**, no corporativo, para que el dato sobreviva a la salida de la empresa | 🟡 |
| 2 · Onboarding financiero | Sesión con coach financiero digital, sin venta directa. Diagnóstico que precarga la radiografía con cédula (obligatorio, cesantías). Contenido en píldoras de ley 100, modalidades de pensión, cesantías, plan institucional de su empresa. Salida: ruta de aprendizaje personalizada (Skandia Shaman) | 🟡 |
| 3 · Colaborador activo | Pulso de recalibración cada ~3 meses. Simuladores por objetivo de vida (hijo, maestría, vivienda, vivir en el exterior) con cifras concretas vía IA. Momentos de vida declarados por el propio usuario | 🟡 |
| 4 · Retiro | Renuncia o es desvinculado — 🟢 ya resuelto por Siempre Skandia (ver benchmark v2) | 🟢 |
| 5 · Siempre Skandia | Recibe reconocimiento, comunidad, orientación — 🟢 ya resuelto | 🟢 |
| 6 · Cliente | Decide si se queda — 🟢 ya resuelto | 🟢 |
| 7 · Embajador | Recomienda Skandia — 🟢 ya resuelto | 🟢 |

**↳ Detalle / emoción** (capa secundaria, citas literales):
- E1: *"A mí nunca nadie… lo que me dijeron fue: elige un fondo de pensión."*
- E2: *"Ay, quiero hacer una charla de impuestos, piensen Skandia."* — el contenido
  como forma de posicionamiento, no de venta.
- E3: *"Llevas un año en la compañía, eso es lo que has construido."* (Workiversary)

### Carril RECURSOS HUMANOS — qué gana

| Etapa | Qué gana RH | Madurez |
|---|---|---|
| 1 · Ingreso | Un paso menos en su checklist de bienvenida. Etapa del journey B2B: **Conexión/Presencia** — RH todavía está siendo convencido de que el índice de bienestar financiero vale la pena | 🟡 |
| 2 · Onboarding financiero | En orden de fuerza: **(a) mitigación de riesgo laboral** — log con fecha y hora de qué benefició se explicó y cuándo, evidencia ante una eventual demanda; **(b) horas de formación obligatoria cubiertas** (educación financiera, ley 100, seguridad social); **(c) adopción digital** de la intranet que RH ya paga y nadie usa. Etapa B2B: **Diagnóstico** — el curso de ley 100 alimenta el índice de bienestar financiero | 🟡 |
| 3 · Colaborador activo | Ve el índice agregado y anónimo de su población, nunca el perfil individual. Etapa B2B: **Comercial / Plataforma RH** — con datos reales, el canal comercial ya puede entrar | 🟡 |
| 4–7 | Sin cambios respecto al journey ya aprobado de Siempre Skandia | 🟢 |

**Regla dura de gobernanza** (declarada en la sesión, no como sistema): *"lo que a
recursos humanos les servirá... es lo que va a disparar al comercial"* — pero el perfil
financiero individual se queda entre la persona y su FP; RH ve solo agregado.

**🔴 Vacío no resuelto:** *"tienes Skandia People, esto se integra en un módulo de
Skandia People"* — pero Skandia People es la intranet **de Skandia**. En Cemex o
Mercado Libre sería otra (*"que le llaman en México Intranet"*). Ninguna fuente resuelve
si Skandia Moments se integra en N HRIS distintos o es un portal propio al que RH
enlaza. Este documento no lo resuelve — lo deja marcado para que se decida antes de
prototipar la integración técnica.

### Carril FP / COMERCIAL — cuándo entra

| Etapa | Cuándo se activa | Por qué canal | Madurez |
|---|---|---|---|
| 1 · Ingreso | **Ausente, por decisión.** *"El comercial no debe estar presente en el onboarding"* — garantiza estandarización sin depender de qué agencia atiende la cuenta | — | 🟢 (decisión, no vacío) |
| 2 · Onboarding financiero | **Ausente, por decisión** — el coach financiero digital no vende | — | 🟢 (decisión) |
| 3 · Colaborador activo | **Aquí sí entra**, activado por alerta: IBC sostenido (3 lecturas consecutivas al alza, no una — evita el falso positivo de un mes sin cotizar seguido de pago doble), workiversary, o momento de vida declarado | Segmentación por salario: rangos bajos → SAC/digital · medios → FP virtual · altos → contacto humano directo. Filosofía: *"entre menos importante el cliente, más digital; entre más importante, más humano"* | 🟡 |
| 4 · Retiro | PAC de desvinculación, solo dentro de la Ventana 1 (0–10 días) | Heredado de Siempre Skandia | 🟢 |
| 5–7 | Sin cambios respecto al journey ya aprobado | 🟢 |

### Carril DATOS Y SISTEMAS

| Etapa | Qué dato se captura | Qué dispara | Madurez |
|---|---|---|---|
| 1 · Ingreso | Salario, género, edad, correo personal | Define el canal de comunicación de TODAS las etapas siguientes | 🟡 |
| 2 · Onboarding financiero | Cédula → precarga obligatorio y cesantías. Log de contenido visto (fecha/hora) | Alimenta el índice de bienestar financiero (B2B). El log alimenta el argumento de riesgo laboral ante RH | 🟡 |
| 3 · Colaborador activo | IBC histórico (ya existe en el dato del obligatorio, hoy no le llega al FP). Momentos de vida declarados | Regla: 3 lecturas consecutivas de IBC al alza → alerta al FP. *"Hay muchos que piensan que su cliente sigue siendo ese profesional que entró chiquito"* | 🔴 (dato existe, pipeline hacia el FP no) |
| 4 · Retiro | Tipo de retiro → ruta (heredado) | Heredado de Siempre Skandia | 🟢 |

### Carril VACÍOS Y RIESGOS

| # | Vacío | Etapa donde muerde | Madurez |
|---|---|---|---|
| 1 | ¿Cuál es la plataforma anfitriona — Skandia People, el HRIS de cada empresa, o un portal propio? | 1–3, arquitectura completa | 🔴 |
| 2 | ¿Acepta un VP de RH la puerta de entrada? (H1 del brief) | 1–2 | 🔴 |
| 3 | Gobernanza del dato — declarada como principio, no como regla de sistema | 2–3 | 🟡 |
| 4 | Volumen de población de onboarding en las 347 empresas — el mismo vacío que Siempre Skandia nunca cerró | 1–3 | 🟡 |
| 5 | Accesibilidad real del dato de IBC para construir la alerta — el dato existe, el pipeline hacia el FP no | 3 | 🔴 |

---

## 4. Momentos de verdad y flechas cruzadas

Estas son las conexiones que el blueprint tiene que hacer visibles — hoy solo existen
como prosa dispersa en varios documentos:

1. **Salario (E1) → canal del FP (E3).** El dato que se pide en el registro, el primer
   día, es el que define por qué canal se atiende a la persona años después.
2. **Diagnóstico (E2) → índice que ve RH (E3).** El onboarding financiero del empleado
   es lo que alimenta el índice de bienestar financiero que abre la puerta B2B.
   *"Para construir tu índice de bienestar financiero necesitas que tu gente haga el
   curso de ley 100."*
3. **Contenido visto + log (E2) → mitigación de riesgo laboral (carril RH).** Es el
   argumento de venta más fuerte y el menos desarrollado.
4. **IBC sostenido (E3) → alerta al FP (E3).** Con el nodo de decisión de 3 lecturas
   consecutivas, no una.
5. **Onboarding financiero (E2) → credibilidad del contacto de salida (E5).** La tesis
   central del benchmark v2: *"sin el momento 2, el contacto del momento 5 se lee como
   venta oportunista."* Es la razón de ser de todo este documento.
6. **Fondo de emergencia (E2–E3) → liquidación (E4)** y **PAC → Ventana 1 (0–10 días)**
   — ya documentadas en el benchmark v2, deben quedar visibles aquí como costura entre
   Skandia Moments y Siempre Skandia.

---

## 5. Lo que este blueprint NO resuelve (a propósito)

No define la arquitectura técnica de integración con el HRIS de la empresa cliente, no
valida con un VP de RH real si acepta el módulo, no dimensiona la población de
onboarding, y no diseña pantallas. Es la base común para que, cuando el paso 2 del plan
de activación del brief dé señal, el equipo pueda entrar directo a research/content/PRD
sin tener que reconstruir el journey desde cero.

## 6. Registro de cambios

- **v1 (2026-09-18):** primera versión. Extiende las filas 1–3 del journey de 7
  momentos del benchmark v2 con el material completo de la sesión de ideación de
  Skandia Moments, en formato de blueprint de 5 carriles.
