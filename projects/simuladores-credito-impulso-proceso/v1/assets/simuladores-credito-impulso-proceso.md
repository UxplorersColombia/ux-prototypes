# Simuladores Crédito Impulso — del diagnóstico a la primera propuesta visual

Piloto de rediseño del ecosistema de simuladores financieros de Skandia: evaluación heurística + research (Dovetail, Databricks, benchmarking externo) + decisiones de diseño. Julio 2026.

---

## 00 · Cómo leer este documento

| Término | Qué significa |
|---|---|
| **Crédito Impulso** | Crédito de libre inversión garantizado con el Fondo Voluntario de Pensiones (FVP) Multifund del cliente. Monto mínimo $10M COP, plazo 360 días, tasa preferencial (~15-17%) frente a un crédito de libre inversión de mercado (~22.4%), garantía bloqueada al 130% del monto. |
| **Evaluación heurística** | Método de diagnóstico UX: un equipo revisa una interfaz ya construida contra una lista de buenas prácticas conocidas ("heurísticas") y califica cada problema por severidad, sin necesitar pruebas con usuarios reales. |
| **Severidad (0-4)** | 0 = fortaleza a mantener, 1 = cosmético, 2 = menor, 3 = mayor (debe corregirse), 4 = catastrófico (bloquea el uso o genera riesgo real). |
| **Dovetail** | Repositorio donde Skandia guarda y analiza entrevistas y hallazgos de investigación de otros proyectos. |
| **Databricks / CDP** | Plataforma de datos de clientes de Skandia, consultada para dimensionar cuántos clientes reales califican hoy para Crédito Impulso. |
| **FVP / PAC** | Un Fondo Voluntario de Pensiones (ahorro flexible) o un Plan de Ahorro Contractual. El simulador compara retirar esa plata vs. tomar Crédito Impulso. |
| **Design System `sk-*`** | Librería oficial de componentes de interfaz de Skandia (Angular). Los simuladores originales no la usan. |
| **Capa asesor / capa cliente** | "Lo que ve el asesor" y "lo que ve el cliente cuando el asesor gira la pantalla", tratados como dos niveles de un mismo motor. |

> ✅ **Estado del piloto:** el diagnóstico (evaluación heurística + research) está completo y ya existe una primera propuesta visual navegable (sección 06). Lo que sigue abierto se detalla en la sección 07.

---

## 01 · Resumen ejecutivo

**Pregunta central:** ¿cómo hacer que los simuladores de Crédito Impulso —hoy piezas sueltas de asesor— se conviertan en el patrón de referencia para todo el ecosistema de simuladores de Skandia?

- **2** prototipos HTML evaluados con evaluación heurística.
- **28** hallazgos identificados en 11 heurísticas aplicadas.
- **1** hallazgo de severidad máxima (4/4) — riesgo normativo.
- **~57.700** clientes reales elegibles para Crédito Impulso (Databricks), ~19% de la base total.

### Hallazgos principales

1. **La interfaz no muestra si la tasa y los parámetros tributarios (UVT, SMLMV) siguen vigentes.** Único hallazgo de severidad 4 del diagnóstico. Estos valores cambian cada año y hoy están escritos en el código sin fecha de corte visible.
2. **El banner de resultado usa "conviene"**, un verbo que la guía de voz de Skandia prohíbe explícitamente. Barato de corregir, de alto impacto de marca.
3. **El salto de Excel a HTML repintó el sistema de diseño, pero no rediseñó la experiencia.** Ningún componente oficial del Design System se usa en los 2 prototipos.
4. **El universo real de clientes elegibles es más chico y concentrado de lo que parecía.** De 131.516 clientes con fondo Multifund, solo ~57.700 (19% de la base total) califican al mínimo, concentrados en 649 asesores, con adopción digital baja-media (26% app, 6% Invested).
5. **La calidad del momento de decisión ya tiene evidencia histórica de que predice si el cliente vuelve a confiar en Skandia** (investigación previa sobre retiros de Fondos Voluntarios de Pensiones).

### Recomendaciones clave (detalle en sección 03)

- Mostrar en la interfaz —no solo en el disclaimer final— la vigencia de tasas y parámetros tributarios, con fecha de corte visible.
- Reescribir el copy de los banners de resultado quitando "conviene" por un dato objetivo con interpretación abierta.
- Adoptar los componentes oficiales del Design System como primer paso de consistencia de plataforma.
- Separar la pregunta de origen de la plata (FVP o PAC) al inicio del flujo.
- Indicar con jerarquía visual real que la herramienta es de uso del asesor.

---

## 02 · Origen y metodología

Los simuladores de crédito nacieron de iniciativas puntuales (omnicanalidad, campañas comerciales) sin un dueño único, migrando de Excel a HTML con ayuda de IA generativa. En una reunión de negocio de julio de 2026, el equipo de Producto/Campañas identificó el riesgo de que este patrón se repita en el resto de simuladores financieros sin conectar nunca con el Design System real ni con una revisión de contenido.

> "Él coge nuestro sistema de diseño, lo repinta, seguramente tendrá algunas mejoras en usabilidad" — de la discusión de negocio que originó este piloto.
> — Reunión de negocio, julio 2026

Se decidió usar el paquete de **Crédito Impulso** como **piloto** de una nueva forma de trabajar: diagnosticar con evidencia antes de rediseñar.

### Orden del proceso

| Paso | Qué se produjo | Tipo de proyecto (playbook UX Skandia) |
|---|---|---|
| 1 · Diagnóstico | Evaluación heurística de los 2 prototipos HTML existentes | Validar algo ya construido |
| 2 · Research | Dovetail, Databricks, benchmarking externo | Identificar oportunidades y señales |
| 3 · Decisiones de diseño | Riesgo, arquitectura conceptual, contenido, Design System, wireframes | Insumo de trabajo del equipo |
| 4 · Primera propuesta visual | Mockup HTML navegable del simulador de retiro FVP/PAC | Mockup de socialización |

---

## 03 · Evaluación heurística

Se evaluaron los dos prototipos navegables existentes (*consolidación de deudas* y *retiro FVP/PAC vs. Crédito Impulso*) bajo 4 lentes: usabilidad clásica, alineación con el Design System, contenido/tono de marca, y encaje en el ecosistema. 11 heurísticas, 28 hallazgos, escala de severidad 0-4.

### Severidad más alta por heurística

| Heurística | Severidad más alta |
|---|---|
| 1 · Visibilidad del estado | **4** |
| 2 · Coincidencia con el mundo real | 3 |
| 3 · Control y libertad del usuario | 3 |
| 4 · Consistencia y estándares | 3 |
| 5 · Prevención de errores | 3 |
| 6 · Reconocer > recordar | 2 |
| 7 · Estética y minimalismo | 2 |
| 8 · Ayuda y documentación | 3 |
| 9 · Alineación Design System | 3 |
| 10 · Claridad de audiencia | 2 |
| 11 · Cumplimiento normativo y tono | 3 |

### Los 2 hallazgos ancla

**Parámetros tributarios y tasa Skandia sin indicador de vigencia (severidad 4).** UVT y SMLMV cambian cada año y están hardcodeados sin señal de "vigente para [período]". Alimenta un cálculo que informa una decisión de crédito real desde $10M COP.

**El banner de resultado usa el verbo "conviene" (severidad 3).** "Conviene consolidar" / "No conviene consolidar" contradice el posicionamiento de marca Skandia ("no tomamos decisiones por el cliente").

### Recomendaciones priorizadas

1. **Prioridad 1 (riesgo normativo):** mostrar en la interfaz la vigencia de tasas y parámetros tributarios, con fecha de corte visible.
2. **Prioridad 2 (quick wins):** reescribir banners sin "conviene"; confirmación antes de borrar una fila; ayuda inline en términos tributarios críticos; disclaimer reestructurado; adoptar inputs/alertas oficiales del Design System.
3. **Prioridad 3 (rediseño de flujo):** separar pregunta FVP/PAC al inicio; jerarquía visual real de audiencia; función de guardar/exportar.
4. **Prioridad 4 (deuda de plataforma):** tokens de color y tipografía; evaluar promover un componente de pasos transversal.

### Dos ideas de fondo

- **El salto Excel → HTML resolvió fragilidad, no experiencia:** mantuvo el modelo mental de Excel y no adoptó ningún componente del Design System.
- **El copy de resultado nace de la fórmula de negocio, no de content design:** nunca pasó por revisión de contenido.

---

## 04 · Research ampliado

### Investigación histórica de Skandia (Dovetail)

No existe investigación dedicada a "Crédito Impulso", pero sí evidencia histórica sobre el mismo momento de decisión y el mismo producto de garantía (fondo Multifund).

> "El Financial Planner es el sistema de retención más efectivo": el 60-70% de los retiros grandes pasan por el asesor; los pequeños y autogestionados no.
> — Investigación de retención ante retiros de FVP, abril 2026

> "La calidad de la experiencia de salida predice la probabilidad de reenganche": los clientes que retiran "bien" vuelven a ahorrar después.
> — Misma investigación

Los clientes asocian el fondo Multifund solo con "pensión" por su nombre y no comprenden que también es un vehículo de inversión flexible — riesgo directo para Crédito Impulso, que depende de que el cliente entienda ese fondo como garantía.

**Patrón que se repite:** fricción en momentos de decisión sensible, jerga técnica sin capa educativa, ambigüedad sobre para quién es la herramienta — los mismos 3 patrones de la evaluación heurística.

### Datos reales de clientes (Databricks)

- **305.470** clientes totales en la base analizada.
- **131.516** tienen el fondo Multifund (43% de la base).
- **57.737** tienen saldo suficiente para calificar al mínimo del producto (19% de la base).
- **649** asesores distintos gestionan esa cartera elegible (concentración alta: el mayor gestiona 2.723 clientes).

**Adopción digital, base elegible vs. base total:**

| Canal | Base elegible | Base total |
|---|---|---|
| App activa | 25,8% | 13,9% |
| Portal de inversión (Invested) | 6,2% | 2,3% |

> 🟡 **Límite de esta fuente:** Databricks no tiene tabla de originación real de créditos ni de uso/telemetría de estos 2 simuladores — solo analítica de perfil de cliente.

### Benchmarking externo

| Referente | Patrón UX destacado | Relevancia |
|---|---|---|
| Banca colombiana (BBVA, Banco de Bogotá) | Simuladores de crédito en autogestión completa del cliente | El mercado ya resuelve la consolidación de deuda con autogestión — Crédito Impulso hoy solo es herramienta de asesor. |
| FINRA (regulador, EE.UU.) | Disclaimer "informativo y educativo" separado y explícito | Modelo para separar resultado de "esto no es asesoría". |
| Caso Habstash (fintech) | Migró de formulario de una página a flujo por pasos | Mismo problema ya diagnosticado: 9+ campos sin agrupación progresiva. |
| Patrón fintech general | Textos legales en pasos cortos; costo total antes del compromiso | Respalda "mensaje claro + aviso legal breve". |

**Síntesis:** el mercado ya validó patrones (autogestión, flujos por pasos, disclaimers integrados) — pero el dato real de Databricks matiza qué tan rápido moverse hacia la autogestión: la base elegible de Skandia todavía tiene poco hábito digital, así que es una apuesta de mediano plazo, no de lanzamiento inmediato.

---

## 05 · De la evidencia a las decisiones

### Arquitectura del flujo

- Un flujo con una pregunta inicial de ramificación (FVP o PAC), no dos escenarios siempre visibles, sin perder datos ya capturados si el asesor cambia de opción.
- Consolidación de deudas y retiro FVP/PAC se mantienen como simuladores separados.
- Un solo motor de cálculo, dos capas de presentación (asesor / cliente), en vez de duplicar el simulador.

### Contenido y tono

- Promesa central: "Te mostramos cómo se compara tu situación hoy con Crédito Impulso, en tu idioma — la decisión siempre es tuya."
- Banners de veredicto reescritos sin "conviene", mostrando siempre el dato con signo explícito.
- Términos tributarios críticos explicados donde aparecen (concepto + ejemplo + beneficio + qué sigue).
- Disclaimer reestructurado en capas: mensaje principal en lenguaje claro primero, aviso legal breve después.

### Diseño de interfaz

- Se verificó el Design System real contra el código: 12 componentes oficiales (no 81 como se asumía por defecto). No existen todavía componentes de pasos, modal, tabla ni tooltip.
- Se definieron soluciones concretas para cada vacío sin bloquear el diseño: un componente de pasos de otro proyecto interno se promueve para este piloto; el banner de resultado usa la alerta "informativa" (neutra) en vez de "éxito"/"error"; confirmación de borrado en línea sin modal; ayuda tributaria con elemento HTML nativo expandible; tabla semántica estándar con los inputs oficiales dentro de cada celda.

---

## 06 · Primera propuesta visual

Se eligió **retiro FVP/PAC vs. Crédito Impulso** para construir la primera propuesta visual, por ser el que tiene más cambios de arquitectura que mostrar. Es un mockup HTML de un solo archivo para socializar con el equipo — no es el simulador en producción.

Implementa: la pregunta de ramificación inicial, un indicador de pasos, el indicador de vigencia junto a los campos tributarios, los banners reescritos sin "conviene", ayuda tributaria inline expandible, el disclaimer en capas (asesor/cliente), y la capa cliente en dos actos ("Así está tu situación hoy" → "Así se compara con Crédito Impulso").

El motor de cálculo se reutilizó tal cual del prototipo original y se validó contra las cifras exactas de la reunión de negocio (costo retiro FVP ≈ $49M, costo consolidar PAC ≈ $108,7M, ahorro PAC ≈ $66,7M).

**Prototipo navegable:** https://uxplorerscolombia.github.io/ux-prototypes/projects/simulador-retiro-fvp-pac/v1/

---

## 07 · Qué sigue

- 🟡 **Validación legal:** qué nivel de indicador de vigencia es normativamente suficiente; si un veredicto de sistema necesita tratamiento adicional de disclaimer por riesgo de asesoría no licenciada.
- 🟡 **Gobernanza de actualización normativa:** quién mantiene vigentes los parámetros tributarios y la tasa, y con qué mecanismo.
- 🟡 **Si y cuándo se invierte en la capa cliente:** los datos de Databricks dimensionan el universo elegible, pero no hay telemetría real de uso del simulador todavía.
- 🟡 **Orquestación del ecosistema completo de simuladores:** quién centraliza el inventario y cómo se conecta cada simulador a la campaña comercial vigente.
- 🟡 **Prioridad de inversión en los componentes de plataforma que faltan** (pasos, tabla, ayuda contextual).

---

**Fuentes:** Evaluación heurística de los 2 prototipos HTML de Crédito Impulso (metodología UOC + heurísticas de Nielsen), julio 2026. Research ampliado: Dovetail (retiros de FVP, fondo Multifund), Databricks (`data_prd.cdp.analiticaclientesux`), benchmarking externo (banca colombiana, FINRA, casos fintech). Decisiones de diseño: documentos internos del piloto. Reunión de negocio que originó el piloto, julio 2026.

Elaborado por el equipo UX (#UXplorers) · Piloto Crédito Impulso · julio 2026.
