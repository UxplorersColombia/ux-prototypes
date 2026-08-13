# Benchmark — Host telefónico con IA para la línea de servicio de Skandia

**Proyecto:** Host telefónico SAMI (evolución de Génesis)
**Etapa:** 1 — Benchmark de concepto
**Fecha:** 11 de agosto de 2026 · *versión 2*
**Responsable:** Javier Alemán · Equipo UX Conversacional
**Insumo base:** [Sami_telefonico_resumen_transcripcion.md](Sami_telefonico_resumen_transcripcion.md) — kick-off del 10 de agosto de 2026
**Metodología:** [Guía de benchmarking · UOC Design Toolkit](https://design-toolkit.recursos.uoc.edu/es/guia/benchmarking/) (3 fases)
**Tipo de proyecto (playbook Skandia):** IDENTIFICAR — benchmarking / análisis competitivo

> **Alcance de este benchmark.** Skandia ya cuenta con **Genesys** como plataforma de contact center. Este documento **no evalúa proveedores ni contempla dimensión económica**: no hay precios, tarifas, modelos de costo ni recomendaciones de compra. El objetivo es identificar **qué están haciendo bien los referentes del mercado** y traducirlo en decisiones de diseño y configuración aplicables sobre Genesys.

---

## Resumen ejecutivo

1. **El "qué" está resuelto en todo el mercado; la diferencia está en el "cómo se configura".** Las 17 plataformas revisadas ofrecen capacidades equivalentes (STT + agente + TTS, conocimiento, acciones, handoff). Lo que las separa es la disciplina de configuración: estructura del prompt, política de interrupciones, gobernanza de versiones y testing previo. Ahí es donde el equipo de UX Conversacional decide, y donde Genesys nos da o nos limita las palancas.

2. **Hallazgo crítico a verificar: en Genesys Virtual Agent, la búsqueda en base de conocimiento está documentada como "solo canales digitales".** Si esto sigue vigente, el plan del kick-off de reutilizar el entrenamiento escrito de SAMI como base de conocimiento del host **no funciona igual en voz que en chat**. Es la pregunta técnica más importante del proyecto y hay que resolverla antes de diseñar flujos.

3. **"Que sea capaz de accionar, no solo informar" es el criterio que separa un host de un IVR disfrazado.** El antipatrón mejor documentado del sector es el agente que solo lee datos y nunca escribe en el sistema de registro. En Genesys el mecanismo son los **AI Guides de AI Studio** conectados al flujo de Virtual Agent.

4. **La latencia tiene números y deben entrar como requisito de la troncal de prueba.** Por encima de ~800 ms el usuario nota pausas; por encima de ~1.500 ms la conversación se siente rota; el umbral práctico para español natural es **<1.200 ms**; ceder el turno ante una interrupción debe tomar **<150 ms**. En Genesys, el `Max Speech Timeout` cambia según el motor ASR configurado (Nuance 22 s, Google 5 min, Azure 10 min), así que saber cuál está activo importa.

5. **El español no se resuelve traduciendo.** Los referentes regionales tratan el acento como producto — voces colombianas nativas, comprensión de modismos locales, *"no traduce: conversa como local"*. Las plataformas globales líderes en calidad de voz tienen el español como idioma secundario. Para una línea colombiana esto es criterio de diseño, no detalle.

6. **"Contención" es una métrica de vanidad en un negocio vigilado.** Un host que resuelve 100 consultas fáciles y enruta la única disputa regulada se ve excelente en el tablero y es un riesgo. La métrica correcta es resolución correcta en llamadas difíciles, con trazabilidad reproducible.

7. **Los roles de agente diferenciados son el modelo mental que nos falta.** El mercado no vende "un bot": vende recepcionista, soporte, cobranzas. Skandia debería definir `host de recepción`, `soporte FP` y `concierge Wealth` como agentes distintos —con alcance, voz, umbrales de confianza y criterio de escalamiento propios— en lugar de un flujo único que intenta ser todo.

8. **El handoff y los caminos infelices se diseñan primero.** La recomendación explícita del sector es bloquear todo lo que mueva dinero o escriba en un sistema, y diseñar el escalamiento antes del flujo feliz. Genesys ya trae el mecanismo: `Conversation summary generation` y `wrap-up codes` disponibles para el agente humano. Para los clientes Wealth que Julián decidió que no se autogestionan, el handoff **es** el producto.

9. **El barge-in de Genesys es un ajuste global, exactamente el antipatrón que documenta la industria.** `Settings > User Input > General > Voice Barge-In` se activa "para todas las acciones Ask for del bot flow". La buena práctica del sector es política por tipo de mensaje. Hay una palanca de diseño para lograrlo: **el barge-in no aplica en acciones `Communicate`**, solo donde el bot espera respuesta. Es decir, la política se implementa eligiendo el tipo de bloque, no el ajuste.

10. **Tres defaults de Genesys hay que revisar antes del piloto.** `Voice No Input Timeout` en 7 segundos es mucho silencio en una llamada de servicio. `Intent Classification Hinting` viene deshabilitado y mejora la precisión del ASR gratis. Y el barge-in se dispara con **cualquier** locución o tono DTMF sin necesidad de que coincida con nada — riesgo alto de interrupciones falsas por ruido en llamadas desde la calle.

---

## Nota de enfoque

Dos reencuadres respecto a la versión inicial del plan:

**No se evalúa la experiencia telefónica de empresas.** El plan original contemplaba analizar las líneas de Celsia, Iberia, Bancolombia, Revolut y Porvenir. Se descartó como eje principal porque el diseño conversacional de una línea telefónica no se publica: Celsia anuncia que Luz I.A. atiende el 01 8000 112 115 y reconoce acentos, pero no publica su árbol de decisión, política de interrupciones ni criterios de escalamiento. Sin llamar, esa matriz habría quedado en `s/d` en todo lo útil. Queda como **ronda de campo recomendada** al cierre.

**No se evalúa ni compara la dimensión económica.** Skandia ya opera sobre Genesys. Los referentes se analizan como **fuentes de práctica**, no como opciones. Cuando un referente aparece con una capacidad interesante, la pregunta no es "¿lo contratamos?" sino "¿cómo logramos ese comportamiento en Genesys?".

---

# FASE 1 · PREPARACIÓN

## Objetivo del benchmark

Identificar qué están haciendo bien las plataformas de agentes de voz telefónicos, y traducirlo en decisiones concretas de diseño y configuración para el host de Skandia sobre Genesys, antes de que el equipo empiece a modelar flujos conversacionales.

## Preguntas que debe responder

1. ¿Cómo se estructura la configuración de un agente de voz en las plataformas más maduras, y qué de eso debe decidir Content Design en lugar de ingeniería?
2. ¿Qué requisitos no funcionales (latencia, interrupciones, silencios) definen la calidad percibida de una llamada, y con qué números?
3. ¿Qué exige el sector financiero regulado a un agente de voz que las plataformas genéricas no traen de fábrica?
4. ¿Cómo se resuelve el español colombiano de forma que no suene traducido?
5. ¿Qué marco de testing y gobernanza usan antes de exponer un agente a clientes reales?
6. ¿Dónde aterriza cada una de esas prácticas en la configuración de Genesys?

## Selección de referentes

**Criterio de inclusión:** plataformas que venden o habilitan agentes de voz telefónicos configurables, con documentación pública suficiente para evaluar criterios de diseño. Tres tiers, porque compiten en categorías distintas y compararlos en una sola tabla sería engañoso.

| Tier | Qué es | Referentes | Qué aprendemos de ellos |
|---|---|---|---|
| **A · Regional hispanohablante** | Foco Latam, español regional como producto | Dapta.ai, Cari AI, Fonema AI, LIWA Tech, Mentora Colombia | Cómo se trata el acento y el modismo local como requisito de diseño; estructura de prompt; modelo de handoff; realidad operativa colombiana y marco legal. |
| **B · Internacional enterprise regulado** | Bancos, aseguradoras, contact centers de alto volumen | Parloa, PolyAI, Cognigy, Kore.ai, Sierra, Decagon, Replicant | El techo de madurez en gobernanza, autenticación, auditoría y ciclo de vida — el estándar al que debería aspirar una vigilada. |
| **C · Internacional de infraestructura** | Capa técnica sobre la que se construyen las demás | Vapi, Retell AI, Bland AI, Synthflow, Telnyx | Datos duros y medidos de latencia y turn-taking; marcos de testing y simulación pre-producción. |

**Referencia obligada aparte: Genesys.** No es un referente a comparar sino **nuestro punto de partida**. Se analiza en sección propia, mapeando la superficie de configuración real contra las prácticas encontradas en los tres tiers.

**Excluidos y por qué:**
- **Aivo Voice** (Argentina): adquirida por Engageware, sitio redirige, estado del producto no verificable.
- **Botmaker, Zenvia, Auronix, Yalo** (Latam): omnicanalidad chat-first, voz secundaria sin detalle público de configuración.
- **Five9, Amazon Connect, Google Gemini Enterprise for CX**: son CCaaS completos, la categoría de Genesys. No aportan práctica que no esté mejor documentada en los tres tiers.
- **ElevenLabs**: motor de voz (TTS), no plataforma de agentes. Aparece como componente dentro de otras.
- **NetVoice, Audara, Beex, Dacartec**: material público comercial sin sustancia técnica evaluable.

## Criterios de análisis

Trece criterios, todos de diseño y capacidad. Cada uno trazable a una necesidad expresada en el kick-off. No se incluye ningún criterio económico ni de modelo de contratación.

| # | Criterio | Trazabilidad al kick-off | Qué evalúa |
|---|---|---|---|
| 1 | **Español regional y acento colombiano** | *"soy Sami, cuéntame cómo te puedo ayudar hoy"* | Voces nativas vs. traducidas; comprensión de modismos locales. |
| 2 | **Latencia** | *"que no genere fricción"* | Tiempo de respuesta declarado o medido. |
| 3 | **Interrupciones y turn-taking** | Conversación telefónica real | Barge-in, backchannels, manejo de silencios. |
| 4 | **Base de conocimiento** | *"usar el mismo entrenamiento que tiene hoy en día el escrito"* | Ingesta de contenido existente; reutilización de los prompts de SAMI. |
| 5 | **Capacidad de acción** | *"que sea capaz de accionar, que no sea solo información"* | Escribir en sistemas, no solo leer. |
| 6 | **Omnicanalidad con contexto** | *"quieres que continuemos por WhatsApp"* | Continuidad a WhatsApp, correo, SMS sin que el cliente repita. |
| 7 | **Handoff con contexto** | *"te voy a dejar con uno de mis compañeros"* | Transferencia con transcripción, resumen e intención interpretada. |
| 8 | **Integración con telefonía e IVR** | *"cómo tomar ese IVR que hoy en día existe"* | Convivencia con el IVR actual, troncal de prueba. |
| 9 | **Estructura de configuración del agente** | *"darle personalidad al bot"* | Cómo se define persona, alcance, plantillas y roles. |
| 10 | **Gobernanza** | *"esto no va a ir de una vez"* | Versionado, guardrails, trazabilidad. |
| 11 | **Testing y simulación pre-producción** | *"Integración técnica"* | Simulaciones, red teaming, regresión. |
| 12 | **Analítica y observabilidad** | Necesidad de medir el piloto | Qué se puede ver y medir por llamada. |
| 13 | **Seguridad y cumplimiento** | Skandia es entidad vigilada | Autenticación, auditoría, certificaciones, Ley 1581. |

**Escala de valoración:** `3` fuerte y documentado · `2` presente · `1` débil o condicionado · `0` ausente · `s/d` sin dato público suficiente.

**Nivel de evidencia por referente:** `D` documentación oficial de producto · `P` prensa o material comercial del proveedor · `T` prueba de terceros con llamadas reales.

---

# FASE 2 · ANÁLISIS POR REFERENTE

## Tier A · Regional hispanohablante

### A1. Dapta.ai — la mejor documentación de configuración del benchmark

**Qué es.** Plataforma de agentes de voz y texto, con sitio y soporte en español, enfocada en pymes. Nivel de evidencia: **D** — es el único referente del tier con documentación técnica pública (`docs.dapta.ai`), y por eso es el más útil, no por su producto.

**Lo que hace bien y nos sirve:**

- **Catálogo de roles de agente en lugar de "un bot".** Agentes con oficio definido: `AI Receptionist` (maneja llamadas, informa, agenda, actualiza CRM), `AI Customer Support`, `AI Lead Qualifier`, `AI Sales Follow Up`, `AI Onboarding Specialist`, `AI Collections Specialist`, `AI HR Candidate Screener`, `Build Your Own`. El `AI Receptionist` es, funcionalmente, el host que Skandia quiere.
- **Estructura de prompt documentada y opinada — siete secciones:** `Header` · `PERSONA` · `OBJECTIVE` · `CONTEXT` · `CONSTRAINTS` · `CONVERSATION FLOW` · `VARIABLES`. Dentro de `CONTEXT` sugiere subsecciones *Company Background, Key Services, Common Customer Scenarios, FAQs*, con una razón explícita: aligera el flujo conversacional y hace las llamadas más fluidas.
- **Reglas de escritura para voz, no para pantalla.** Prohíbe instrucciones técnicas en el diálogo (`[wait]`, `[pause]`); solo se escriben las palabras que el agente va a pronunciar. Condicionales explícitos: `If [condition]: - "línea de diálogo"`.
- **Regla de latencia lingüística.** El prompt se escribe **en el idioma de la llamada**, para evitar la latencia que introduce la traducción interna.
- **Manejo de respuestas tipificado**, con plantillas para respuestas positivas, objeciones y —lo más valioso— **respuestas poco claras**: *"Just to make sure I understand correctly, you're saying…"*. Es el caso más frecuente en voz y el que menos se diseña.
- **Constraints como capa de seguridad.** Ejemplos de su documentación: no cotizar sin verificar región, nunca prometer tiempos de entrega específicos, duración máxima de llamada de 10 minutos, y **verificar identidad antes de compartir detalles de cuenta**.
- **Variables dinámicas** con sintaxis `{{contact_name}}`, `{{current_time}}` (en formato hablado).
- Capacidades: RAG sobre documentos propios, transferencia a humano, analytics en tiempo real, canales de voz, SMS, WhatsApp y chat web, integraciones con CRM.

**Debilidades / advertencias:**
- Construido para **ventas y pymes**, no para servicio en entidad vigilada. Sin evidencia pública de SOC 2, ISO 27001 o PCI DSS, ni de autenticación fuerte del llamante.
- Sus métricas estrella son de conversión comercial y **no aplican al caso de Skandia**, que es servicio.
- No detalla criterios de transferencia a humano; solo menciona *"clear exit points for each conversation path"*.

**Qué nos traemos.** La estructura de prompt de siete secciones, las reglas de escritura para voz, el bloque de respuestas poco claras, los constraints como capa de seguridad, y el modelo de roles diferenciados.

---

### A2. Cari AI — el referente regional más cercano a nuestro caso

**Qué es.** Agentes de IA para llamadas entrantes y salientes, con experiencia declarada en Colombia, México y Perú. Nivel de evidencia: **P**.

**Lo que hace bien y nos sirve:**

- **Posicionamiento explícito contra el IVR**, en los mismos términos del kick-off: *"Un IVR obliga al cliente a navegar menús numéricos ('Marque 1 para ventas'). Nuestros voicebots usan NLU para entender la intención en lenguaje natural y resolver directamente."*
- **Español Latam como producto, no como traducción:** *"Entiende modismos de Colombia, México, Perú y más. No traduce: conversa como local."*
- **El mejor modelo de handoff del benchmark:** *"Cuando el caso escala, el agente humano recibe la transcripción y el contexto en vivo, con copiloto IA de apoyo."* Tres cosas a la vez — transcripción, contexto interpretado y copiloto para el humano. Conecta directo con la *Guía operativa Monitor Copiloto Skandia* que ya existe, y con `Agent Copilot` de Genesys.
- **Acciones reales sobre negocio financiero:** aprobación de microcréditos (caso Bancamía), consultas de saldo, agendamiento con confirmación y reprogramación, registro automático de interacciones.
- **Analítica por llamada con cuatro dimensiones:** motivo, resolución, sentimiento y duración. Es el tablero mínimo que debería tener el host.
- **Credenciales de sector financiero:** clientes declarados incluyen Santander, Zurich, Credibanco, Compartamos Banco, Bancamía, Nueva EPS. Casos: CrediBank *"pasamos de atender 4.000 comercios a más de 42.000, sin aumentar el equipo"*; Comex *"crecimos 56% en inscritos y cerramos el año con 97% de satisfacción"* *(cifras declaradas por el proveedor)*.
- **Cumplimiento:** AWS, ISO 27001, ISO 9001, HIPAA, RGPD.
- **Integraciones con el mundo contact center real:** Avaya, **Genesys**, Enghouse, Glía, además de Salesforce, Zendesk, ServiceNow, Oracle y BI.

**Debilidades:** no publica latencia ni detalle de configuración del agente; la documentación técnica no es pública.

**Qué nos traemos.** El modelo de handoff triple (transcripción + contexto + copiloto), las cuatro dimensiones de analítica por llamada, y el argumento de "conversa como local" como requisito de voz.

---

### A3. Fonema AI — el especialista en español regional

**Qué es.** Plataforma de agentes de voz construida específicamente para mercados hispanohablantes. Nivel de evidencia: **P** — autopublicado y con sesgo comercial evidente: su comparativa concluye que ellos son la mejor opción.

**Lo que hace bien y nos sirve:**

- **+200 voces regionales nativas** con acentos mexicano, **colombiano**, argentino y chileno. Es el único referente que trata el acento como catálogo y no como configuración.
- **Umbral de latencia declarado específicamente para español natural: <1.200 ms.** Es la cifra más útil del benchmark porque está dada para español, no para inglés.
- **Diagnóstico del problema del español en plataformas globales:** las herramientas genéricas multilingües *"suenan robóticas"* o usan pronunciación castellana inadecuada para Latam.
- **Criterio de flujos regionales:** los flujos latinoamericanos *"requieren más que traducción"* — incluyendo verificaciones de identidad locales (CURP/RFC en México; el equivalente colombiano sería cédula).
- **Recomendación de validación:** probar con usuarios reales del país objetivo, y medir latencia en infraestructura real, no en demos controladas.

**Debilidades:** sin evidencia de certificaciones para sector regulado; la comparativa es material de marketing propio.

**Qué nos traemos.** El umbral de <1.200 ms como requisito para español, el acento colombiano como criterio de diseño, y la regla de medir latencia en infraestructura real.

---

### A4. LIWA Tech — el proveedor colombiano con clientes verificables

**Qué es.** Automatización con IA de chat (WhatsApp, Instagram, Facebook, TikTok, Messenger) y voz (línea telefónica), operando en Colombia. Nivel de evidencia: **P**.

**Lo que hace bien y nos sirve:**

- **Un solo cerebro para chat y voz.** Es el mismo argumento que valida reutilizar el entrenamiento de SAMI: un agente que atiende ambos canales, no dos stacks separados.
- **Integración con telefonía real colombiana:** PBX en la nube y **troncales SIP** — lo que Danillo necesita para la troncal de prueba.
- **Acciones concretas:** consulta estados de órdenes, crea tickets automáticos, registra compromisos, y **envía enlaces de pago por WhatsApp**. Es el patrón exacto de "te envío el tutorial por WhatsApp" del kick-off.
- **Validación de identidad por voz** como capacidad listada.
- **Proceso de implementación en cuatro pasos** que sirve de plantilla: demo que analiza el proceso de llamadas → entrenamiento del agente (guion, respuestas, flujos) → conexión a PBX → **monitoreo en tiempo real con optimización mensual continua**. El cuarto paso es el que más se olvida.
- Integraciones CRM amplias: Salesforce, HubSpot, Dynamics 365, Zoho, Pipedrive, Kommo, Zendesk, Bitrix24, Google Calendar, WhatsApp Business, APIs REST.

**Debilidades:**
- La promesa de **"24 horas de implementación"** es incompatible con un caso financiero regulado. Señal de que el producto está calibrado para casos simples.
- No especifica adaptaciones lingüísticas regionales pese a operar en Colombia.
- Métricas declaradas sin atribución a clientes específicos.
- Ningún cliente del sector financiero vigilado en la lista.

**Qué nos traemos.** El proceso de implementación de cuatro pasos con optimización mensual continua, el patrón de acción "enviar tutorial o enlace por WhatsApp", y la confirmación de que troncal SIP + PBX es el camino técnico estándar en Colombia.

---

### A5. Mentora Colombia — la realidad operativa local

**Qué es.** Integrador colombiano de voicebots. Nivel de evidencia: **P**, pero con el material más honesto del tier.

**Lo que hace bien y nos sirve:**

- **Revela el stack real del mercado colombiano:** plataformas **Vapi, Bland o Retell** con voces de **ElevenLabs**. Confirma que el tier C no es teórico: es lo que hay debajo de los proveedores locales.
- **Umbral de latencia operativo:** por debajo de 1 segundo entre la respuesta del usuario y la del bot; por encima *"suena robótico"*.
- **Requisito legal explícito:** grabación de llamadas conforme a **Ley 1581 de 2012**, con aviso de grabación obligatorio. Es el único referente que nombra la norma colombiana.
- **Honestidad sobre límites**, poco común en material comercial: no resuelve negociación compleja, reclamos delicados ni ventas consultivas; en conversaciones largas se nota la diferencia porque el bot es *"demasiado paciente/consistente"*; requiere datos de contacto ordenados para funcionar.
- **Tiempos realistas:** recepcionista IA simple 2–4 semanas; call center multicanal más, incluyendo pruebas operacionales.
- **Checklist de validación** aplicable a nuestra propia implementación: escuchar demo en vivo en español colombiano · verificar transferencia a humano **con contexto** · validar integración real (no solo contestador) · considerar si el cliente escribe más de lo que llama.

**Debilidades:** es integrador, no plataforma; su valor es la transparencia, no la tecnología.

**Qué nos traemos.** El umbral de 1 segundo, el requisito de Ley 1581, los tiempos realistas de implementación, y la lista honesta de lo que un voicebot **no** debe intentar.

---

## Tier B · Internacional enterprise para sectores regulados

### B1. Parloa — el estándar de gobernanza para vigiladas

**Qué es.** Plataforma voice-first en producción desde 2018, usada por bancos, aseguradoras y grandes organizaciones de servicio en sectores regulados. Nivel de evidencia: **P/T**.

**Lo que hace bien y nos sirve:**

- **Ciclo de vida formalizado en cuatro fases: `Define` → `Test` → `Scale` → `Optimize`.** Vale adoptarlo como vocabulario del proyecto.
- **Gobernanza integrada:** versionado de agentes, guardrails de LLM, pruebas pre-lanzamiento y trazabilidad completa. Nada de esto es opcional para una entidad vigilada.
- **Telefonía propia de grado carrier**, sin dependencia de terceros — cada salto de proveedor agrega latencia y un punto de falla.
- **Certificaciones completas:** ISO 27001, SOC 2, PCI DSS, HIPAA, DORA, GDPR. 140+ idiomas, 100+ países.
- **Diagnóstico útil:** *"la latencia es el principal determinante de la calidad percibida porque las conversaciones telefónicas dependen del turn-taking natural"*.

**Debilidades:** orientado a Fortune 500, sin evidencia de especialización en español colombiano.

**Qué nos traemos.** Las cuatro fases como estructura del proyecto, y la lista de gobernanza (versionado + guardrails + pruebas pre-lanzamiento + trazabilidad) como requisito mínimo antes de tocar producción.

---

### B2. PolyAI — el techo de calidad conversacional

**Qué es.** *"The Agentic Dialog Platform"*. Agentes de voz para contact centers inbound de alto volumen. Nivel de evidencia: **D/P**.

**Lo que hace bien y nos sirve:**

- **Dos caminos de construcción sobre el mismo runtime:** `Poly Agent Builder` para equipos no técnicos y `ADK (Agent Development Kit)` para desarrolladores. **Es el patrón organizacional que Skandia necesita**: permite que Content Design y UX Conversacional sean dueños del diálogo sin depender de ingeniería para cada ajuste, mientras Danillo mantiene control del runtime. En Genesys el equivalente es Architect + AI Studio, y hay que definir quién opera cada uno.
- **Modelos propios especializados:** `Dialog-RSN-1` con benchmarks publicados, y `Raven`, entrenado con más de mil millones de conversaciones empresariales de atención al cliente.
- **Reconocimiento de habla libre** para llamadas no guionadas y multi-tema — la capacidad que hace posible el *"cuéntame cómo te puedo ayudar hoy"* sin menú.
- **Manejo de interrupciones** citado como diferenciador, con 45 idiomas.
- **Catálogo de capacidades que es casi el alcance del host de Skandia:** `Account management` · `Authentication` · `Call routing` · `Billing & payments` · `Booking & reservations` · `Order management` · `Troubleshooting` · `FAQ`.
- **`Analyst Agents`:** permiten preguntar en lenguaje natural sobre las interacciones y obtener respuestas al instante, con *"full visibility into every agent decision"*.
- **Guardrails de compliance, marca y experiencia**, con consistencia de marca en cada conversación, canal e idioma.
- **Credenciales financieras reales:** UniCredit, Quicken, Zagrebačka banka, Simplyhealth. Probado *"on the hardest conversations in the world, including fraud, outage, triage, multilingual disputes"*.
- SOC 2, HIPAA, GDPR, PCI DSS por defecto. SLA 99,9%.

**Debilidades:** el inglés es primario y el español no aparece como especialización; las comparativas de terceros lo ubican más fuerte en travel/hospitality que en banca latinoamericana.

**Qué nos traemos.** El patrón de doble camino builder/SDK como modelo de gobierno del proyecto, el catálogo de capacidades como checklist de alcance, y la idea de guardrails de **marca** además de compliance.

---

### B3. Cognigy — orquestación y auditabilidad, con conexión directa a Genesys

**Qué es.** Plataforma de IA conversacional para contact centers, adquirida por NICE en 2025. Nivel de evidencia: **T**.

**Lo relevante:** orquesta workflows complejos multi-paso e integra profundo con CRM, ERP y CCaaS. Elección común en industrias reguladas que necesitan **gobernanza, auditabilidad y orquestación multicanal**. Builder visual, `AIOps Center`, y soporte *bring-your-own-model* con múltiples LLM.

**Lo más relevante para Skandia:** **tiene una solución específica para el ecosistema Genesys.** Es la vía documentada si alguna capacidad que necesitamos no existe nativamente en Genesys.

**Debilidades reportadas por terceros:** dudas post-adquisición sobre integración con CCaaS de tercera generación, trazabilidad limitada, conflictos de edición concurrente. La resolución real depende de cómo se configure la integración con el core.

**Qué nos traemos.** El principio de *bring-your-own-model*, la advertencia de que la trazabilidad hay que verificarla y no asumirla, y la existencia de una ruta de extensión sobre Genesys.

---

### B4. Kore.ai — plantillas bancarias y agent assist

**Qué es.** Plataforma empresarial multicanal con builder visual drag-and-drop para usuarios no técnicos. Nivel de evidencia: **T**.

**Lo relevante:**
- **Plantillas preconstruidas para banca** — punto de partida en lugar de página en blanco.
- **Opción on-premises**, relevante para requisitos de residencia de datos de una vigilada.
- **Módulo `agent assist`** con guía en tiempo real al agente humano durante la llamada. Es el puente natural con el Monitor Copiloto de Skandia y con `Agent Copilot` de Genesys: el mismo conocimiento sirviendo al bot y al humano.

**Debilidades:** las configuraciones avanzadas requieren ingeniería pese al builder visual.

**Qué nos traemos.** El principio de que el mismo conocimiento debe alimentar al host y al asesor humano.

---

### B5. Sierra — simulaciones y una lección sobre incentivos

**Qué es.** Plataforma con modelo de resolución por conversación. Nivel de evidencia: **T**.

**Lo relevante:** `Voice Sims` para stress-testing del agente antes de exponerlo, multi-modelo, y `AgentSDK` para workflows personalizados.

**El hallazgo más valioso es su crítica.** El análisis del sector financiero advierte que su modelo *"gravita hacia las llamadas fáciles y evita las difíciles"*, que son justamente las de riesgo regulatorio. Voz introducida solo en 2025, integraciones telefónicas limitadas, y requiere *"daily fine-tuning"* según terceros.

**Qué nos traemos.** El concepto de simulaciones de stress-testing, y la alerta de que **ninguna métrica del host debe premiar resolver lo fácil y esquivar lo difícil**.

---

### B6. Decagon — configuración en lenguaje llano

**Qué es.** Plataforma de agentes de soporte, con voz desde 2025. Nivel de evidencia: **T**.

**Lo relevante:**
- **`Agent Operating Procedures (AOPs)`: procedimientos de operación del agente escritos sin código, en lenguaje llano.** Es lo más cercano a lo que UX Conversacional debería producir para el host: no un prompt técnico ni un diagrama de flujo, sino un procedimiento operativo legible por cualquiera.
- `Trace View` para observabilidad, `Duet` copilot, `Watchtower` analytics. Sandbox rápido.

**Debilidades:** no está construido para contact centers regulados ni para volumen de voz; *"daily fine-tuning"* reportado; no se ve la plataforma hasta cerrar el proceso comercial.

**Qué nos traemos.** El formato de **AOP en lenguaje llano** como entregable de diseño conversacional del host.

---

### B7. Replicant — resolver, no desviar

**Qué es.** Plataforma de voz enfocada en *"end-to-end issue resolution rather than deflection or routing"*, con voz, SMS y chat integrados. Nivel de evidencia: **T**.

**Lo relevante:** su posicionamiento es la tesis del kick-off en una frase. La diferencia entre desviar y resolver es exactamente la diferencia entre el IVR actual y el host que Skandia quiere.

**Qué nos traemos.** El encuadre: el objetivo del host no es contener llamadas, es **resolver tipos completos de llamada**.

---

## Tier C · Internacional de infraestructura

Este tier aporta los datos duros. Las cifras vienen de una comparativa que probó cada plataforma durante un mes con tres flujos idénticos: calificación de leads, ticket entrante, y **una secuencia de interrupción fuera de guion**.

| Plataforma | Latencia | Fortaleza aprovechable | Advertencia |
|---|---|---|---|
| **Retell AI** | **~600 ms** (la más rápida medida) | **Su `simulation testing` detectó dos edge cases antes de exponer el agente a un llamante real.** Es la práctica, no la herramienta, lo que nos sirve. | Voces en español de terceros, sin biblioteca de acentos Latam. |
| **Vapi** | 800 ms round-trip según su FAQ, "sub-500 ms" en su homepage | Control total: intercambia libremente LLM, STT y TTS. 1.000+ sesiones concurrentes. | **La discrepancia entre su homepage y su FAQ es en sí una lección: la latencia se verifica con pruebas propias, no con la cifra publicada.** |
| **Bland AI** | Sin picos mid-call reportados | **LLM, STT y TTS self-hosted: los datos de la llamada no salen de su infraestructura.** Modelo a considerar para requisitos de residencia de datos. | Curva de aprendizaje empinada en `Conversational Pathways`. |
| **Synthflow** | Infra sub-100 ms | Agente en vivo en menos de una hora sin escribir código. | Voces en español sin regionalizar. |
| **Telnyx** | s/d | Asistente básico en vivo en menos de cinco minutos. Operador de telefonía real. | Servicios de telefonía y LLM se configuran por separado. |

**La capa de QA es un hallazgo en sí mismo.** Existe una categoría completa de herramientas dedicadas solo a probar agentes de voz (Cekura, Hamming). Su existencia dice algo: **el testing de agentes de voz es una disciplina propia**, no una tarea al final del proyecto. Prácticas que aportan:

- **Miles de llamadas simuladas antes del go-live.**
- **Red teaming adversarial** antes de exponer a usuarios reales.
- **Tracking de latencia que identifica dónde se origina cada demora** tras cambiar proveedor, modelo o prompt.
- **Regression testing automático (CI/CD)** ante cualquier cambio de prompt o configuración.
- **Evaluación con puntaje por precisión e intents perdidos.**

## Tier D · Nuestro punto de partida · GENESYS

Luego de analizar los referentes, hay que saber qué palancas tenemos. Esta sección mapea la superficie de configuración documentada de Genesys Cloud CX para bots de voz. Es el marco donde van a aterrizar todas las buenas prácticas del benchmark.

## Arquitectura de bots

| Componente | Qué es |
|---|---|
| **Architect** | Herramienta donde se construyen los flujos. Los bot flows se integran a flujos de llamada, chat y mensaje. |
| **Genesys Dialog Engine Bot Flows** | Motor base de bots. Trabaja con `intents`, `slots`, `utterances`, `confirmations` y aprendizaje. |
| **Genesys Virtual Agent** | Capa de IA generativa sobre un bot flow de voz o digital. Se habilita en Architect. |
| **Genesys Copilot** | Generación asistida de intents y utterances. |
| **AI Studio / AI Guides** | Donde se crean y publican las guías que el Virtual Agent ejecuta. **Es el mecanismo de acción.** |
| **Herramientas de análisis** | `Communication Sequence Builder`, `Flow Insights`, análisis de salud de intents, `Virtual Agent Performance Dashboard`. |

## Qué añade Virtual Agent sobre un bot flow normal

- Generación automática de intents y utterances.
- `AI Powered slot types` y `Free form slot capture` para captura flexible de información.
- **`Knowledge base content search`** — búsqueda y destacado de respuestas desde artículos de base de conocimiento. **Documentado como disponible solo en canales digitales.**
- `Conversation summary generation` — resumen automático de la conversación con el bot.
- `Wrap-up code generation` — códigos de cierre aplicados automáticamente.
- Conexión con `AI Guides` de AI Studio para ejecutar acciones.

## Conocimiento

Dos caminos: el **knowledge workbench** (bases de conocimiento vinculadas a bot flows estándar) y la configuración de conocimiento para flujos con Virtual Agent. Tres tipos de contenido:

| Tipo | Comportamiento |
|---|---|
| `Standard` | Devuelve el artículo completo que coincide. |
| `Highlight` | Extrae la respuesta puntual dentro del artículo. |
| `Generative` | Respuesta generada por LLM a partir de múltiples fuentes. |

Para el host telefónico, `Highlight` es conceptualmente el más adecuado —una llamada no tolera que le lean un artículo completo— pero eso depende de resolver primero si la búsqueda de conocimiento opera en voz.

## Superficie de configuración de un bot flow de voz

Ruta: `Settings > User Input`

| Bloque | Ajustes | Notas relevantes |
|---|---|---|
| **General** | `Voice Barge-In` · `Automatic Quick Reply Buttons` | Barge-in **global**: al activarlo se activa para todas las acciones `Ask for`. Habilitado por defecto en flujos nuevos, deshabilitado en existentes. |
| **No Match Detected** | `Maximum Number of No Match Retries` · `No Match Apology` | Al exceder: dispara `No Intent path` o `Recognition Failure Event`. |
| **No Input Detected** | `Maximum Number of No Input Retries` · **`Voice No Input Timeout`** · `No Input Apology` | **Timeout por defecto: 7 segundos.** Al exceder: `Max No Inputs path`, `No Intent path` o `Recognition Failure Event`. |
| **Confirmation Errors** | `Maximum number of Confirmation Rejections` · `Confirmation Rejection Apology` · `No Match Confirmation Apology` · `No Input Confirmation Apology` | Cuatro mensajes distintos de disculpa — cuatro oportunidades de tono de marca que normalmente quedan en el default. |
| **Confidence Thresholds** | `Normal Low` · `Normal High` · `Confirmation` | `Normal Low`: mínimo para no caer en No Match. `Normal High`: máximo por encima del cual no se pide confirmación. **Es la palanca de "cuándo confirmar antes de actuar".** |
| **Speech Recognition Parameters** | `Speech Detection Sensitivity` (0–1, default 0.5, solo Nuance) · `Max Speech Timeout` (configurable 0–30 s) | Límite del motor según proveedor: Nuance 22 s · Google Cloud STT 5 min · Microsoft Azure 10 min. |
| **Automatic Speech Recognition** | `Intent Classification Hinting` | **Deshabilitado por defecto** en flujos nuevos. Envía pistas contextuales al motor ASR. |
| **DTMF Settings** | `Inter-Digit Timeout` (default 3 s) · `Terminating Character` (solo `#`) | Relevante para captura de cédula. |

## Cómo funciona el barge-in en Genesys — y su implicación de diseño

Esto merece detalle porque es donde más se puede ganar o perder.

- **Es global.** *"When you enable this global setting, you enable it for all 'Ask for' actions in the bot flow."*
- **Solo aplica donde el bot espera respuesta** (por ejemplo `Ask for Intent`). *"A user cannot interrupt at points in the conversation when the bot does not expect an answer, such as in a Communicate action."*
- **En flujos de voz/chat/mensaje** hay una casilla aparte: `Enable Barge-in` en el `Audio Sequence Editor`, esquina inferior izquierda. Habilitada por defecto excepto en música de espera.
- **Se dispara sin validación:** la locución o el tono DTMF *"no tiene que coincidir con nada"* para activar el barge-in.
- **Limitación importante:** al activarse, aborta la reproducción en curso **y descarta el audio que esté en cola**.

**Las tres consecuencias de diseño:**

1. **La política por tipo de mensaje se implementa eligiendo el tipo de bloque.** Contenido no interrumpible (el aviso de grabación de Ley 1581, una divulgación legal) va en acciones `Communicate`. Contenido interrumpible va en acciones `Ask for`. No es un ajuste, es una decisión de arquitectura del flujo.
2. **Riesgo de interrupciones falsas.** Como cualquier sonido dispara el barge-in, una llamada desde la calle o con TV de fondo va a cortar al bot constantemente. Mitigación: ajustar `Speech Detection Sensitivity` y medir la tasa de interrupciones falsas desde el sandbox.
3. **No encolar información crítica detrás de audio interrumpible.** Si el saludo se parte en varias reproducciones, una interrupción se lleva las siguientes. Todo lo esencial va en el primer bloque.

## Idiomas

`Agent Copilot` soporta español entre 14 idiomas. La documentación de Virtual Agent remite al listado general de idiomas soportados de Genesys Cloud sin detallar variantes regionales — **queda como punto a verificar: si existe voz con acento colombiano o solo español neutro.**

## Extensibilidad

Genesys permite integrar motores de terceros —Google Dialogflow CX, Amazon Lex, y Cognigy, que tiene solución específica para el ecosistema Genesys— y orquestar múltiples proveedores y modelos optimizando por latencia y precisión. Es la vía si una capacidad puntual del benchmark no existe nativamente.

Los `AI Agents` con mayor autonomía se anunciaron en septiembre de 2025, con disponibilidad plena declarada para el trimestre noviembre 2025 – enero 2026. **Vale confirmar con Danillo qué versión y qué capacidades tiene habilitadas Skandia hoy.**

---

# FASE 3 · RESULTADOS

## Matriz A — Tier regional hispanohablante

| # | Criterio | Dapta.ai | Cari AI | Fonema AI | LIWA Tech | Mentora |
|---|---|:--:|:--:|:--:|:--:|:--:|
| 1 | Español regional / acento CO | 2 | **3** | **3** | 2 | 2 |
| 2 | Latencia | 2 | s/d | 2 | s/d | 2 |
| 3 | Interrupciones / turn-taking | s/d | s/d | s/d | s/d | s/d |
| 4 | Base de conocimiento | **3** | 2 | s/d | 2 | s/d |
| 5 | Capacidad de acción | **3** | **3** | 2 | **3** | 2 |
| 6 | Omnicanalidad con contexto | **3** | **3** | 2 | **3** | 2 |
| 7 | Handoff con contexto | 1 | **3** | s/d | 2 | 2 |
| 8 | Integración telefonía / IVR | 2 | **3** | s/d | **3** | 2 |
| 9 | Estructura de configuración | **3** | 1 | s/d | 1 | s/d |
| 10 | Gobernanza | 1 | 1 | s/d | 1 | s/d |
| 11 | Testing pre-producción | 1 | s/d | 1 | s/d | 2 |
| 12 | Analítica y observabilidad | 2 | **3** | s/d | 2 | s/d |
| 13 | Seguridad y cumplimiento | 0 | **3** | s/d | 1 | 2 |
| | **Evidencia** | D | P | P | P | P |

## Matriz B — Tier internacional enterprise regulado

| # | Criterio | Parloa | PolyAI | Cognigy | Kore.ai | Sierra | Decagon | Replicant |
|---|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | Español regional / acento CO | 1 | 1 | 1 | 1 | 1 | s/d | s/d |
| 2 | Latencia | **3** | **3** | 2 | s/d | s/d | s/d | s/d |
| 3 | Interrupciones / turn-taking | **3** | **3** | s/d | s/d | s/d | s/d | s/d |
| 4 | Base de conocimiento | **3** | **3** | **3** | **3** | 2 | **3** | 2 |
| 5 | Capacidad de acción | **3** | **3** | **3** | **3** | 2 | 2 | **3** |
| 6 | Omnicanalidad con contexto | 2 | **3** | **3** | **3** | 2 | 2 | **3** |
| 7 | Handoff con contexto | **3** | 2 | 2 | **3** | s/d | 2 | 2 |
| 8 | Integración telefonía / IVR | **3** | **3** | 2 | 2 | 1 | 1 | 2 |
| 9 | Estructura de configuración | **3** | **3** | **3** | **3** | 2 | **3** | s/d |
| 10 | Gobernanza | **3** | **3** | 2 | 2 | 2 | 2 | s/d |
| 11 | Testing pre-producción | **3** | 2 | 2 | s/d | **3** | 2 | s/d |
| 12 | Analítica y observabilidad | 2 | **3** | **3** | 2 | 2 | **3** | s/d |
| 13 | Seguridad y cumplimiento | **3** | **3** | 2 | **3** | 1 | 1 | s/d |
| | **Evidencia** | P/T | D/P | T | T | T | T | T |

## Matriz C — Tier internacional de infraestructura

| # | Criterio | Retell AI | Vapi | Bland AI | Synthflow | Telnyx |
|---|---|:--:|:--:|:--:|:--:|:--:|
| 1 | Español regional / acento CO | 1 | 1 | 1 | 1 | s/d |
| 2 | Latencia | **3** | 2 | 2 | **3** | s/d |
| 3 | Interrupciones / turn-taking | 2 | 2 | 2 | 2 | s/d |
| 4 | Base de conocimiento | 2 | 2 | 2 | 2 | 1 |
| 5 | Capacidad de acción | **3** | **3** | **3** | 2 | 2 |
| 8 | Integración telefonía / IVR | 2 | 2 | **3** | 1 | **3** |
| 9 | Estructura de configuración | 2 | **3** | 2 | **3** | 1 |
| 11 | Testing pre-producción | **3** | 2 | 1 | 2 | 1 |
| 13 | Seguridad y cumplimiento | 1 | 1 | 2 | 1 | 1 |
| | **Evidencia** | T | T | T | T | T |

## Resumen global

### Patrones transversales

**El "qué" está comoditizado; el "cómo se configura" no.** Las tres matrices convergen en las mismas capacidades (criterios 4, 5 y 6 están en `3` casi en todas partes). La dispersión real está en los criterios 9, 10 y 11 — configuración, gobernanza y testing. **Son exactamente los tres criterios donde el equipo de UX Conversacional de Skandia tiene control total, independiente del proveedor.**

**El criterio 3 es el gran punto ciego del mercado.** Casi todos los referentes del tier A y varios del B quedan en `s/d` en interrupciones y turn-taking, pese a que es lo que más determina si una llamada se siente natural. Solo Parloa y PolyAI lo tratan explícitamente; la literatura técnica especializada es la única fuente que lo desarrolla. **Genesys sí expone los ajustes** —barge-in, timeouts, sensibilidad de detección, umbrales de confianza— lo que nos pone en mejor posición que la mayoría del mercado, siempre que decidamos activamente esos valores en lugar de heredar los defaults.

**Ningún referente resuelve simultáneamente español colombiano y cumplimiento para vigiladas.** El tier A tiene el idioma (Cari AI y Fonema en `3`) y el tier B tiene la gobernanza (Parloa, PolyAI, Kore.ai en `3`), y se invierten en el otro criterio. La excepción parcial es **Cari AI**: `3` en español regional, `3` en cumplimiento (ISO 27001/9001, HIPAA, RGPD) y clientes financieros reales en la región — además de integración declarada con Genesys.

**La analítica se está volviendo conversacional.** PolyAI con `Analyst Agents`, Decagon con `Watchtower`, Cari AI con sus cuatro dimensiones por llamada. Genesys tiene su contraparte en `Flow Insights`, análisis de salud de intents y `Virtual Agent Performance Dashboard`. La práctica a copiar es medir por llamada motivo, resolución, sentimiento y duración desde el día uno del sandbox.

### Buenas prácticas: qué nos traemos y dónde aterriza en Genesys

**Diseño conversacional**

| # | Práctica | Fuente | Dónde aterriza en Genesys |
|---|---|---|---|
| 1 | Estructura de prompt en 7 secciones: Persona · Objetivo · Contexto · Constraints · Flujo · Variables | Dapta | Plantilla base del equipo. Cada rol de agente es un prompt con la misma estructura y distinto contenido. |
| 2 | Escribir el prompt **en español**, no traducido | Dapta | Ya lo cumplimos por defecto. |
| 3 | Solo diálogo pronunciable; nunca instrucciones tipo `[pausa]` en el guion | Dapta | Regla de estilo para el equipo de contenido en Architect. |
| 4 | Bloque explícito de **respuestas poco claras** | Dapta | `No Match Apology` + `Maximum Number of No Match Retries`. Los cuatro mensajes de disculpa de Genesys son cuatro oportunidades de tono de marca. |
| 5 | Constraints como capa de seguridad: verificar identidad antes de revelar datos | Dapta | `Confidence Thresholds` + diseño del flujo de autenticación antes de cualquier `Ask for` que exponga datos. |
| 6 | Diseñar **primero** los caminos infelices y el handoff; bloquear todo lo que mueva dinero o escriba en un sistema | Literatura de diseño conversacional | `No Intent path`, `Max No Inputs path`, `Recognition Failure Event`. Diseñarlos antes del flujo feliz, no después. |
| 7 | **AOP en lenguaje llano** como entregable de diseño | Decagon | Formato de lo que UX Conversacional entrega a Danillo, antes de que se construya en Architect. |
| 8 | Roles de agente diferenciados en lugar de un bot único | Dapta, PolyAI | Bot flows separados para `host de recepción`, `soporte FP` y `concierge Wealth`, con umbrales y personalidad propios. |
| 9 | Guardrails de **marca**, además de compliance y experiencia | PolyAI | Conectar con la guía de comunicación omnicanal y los arquetipos Skandia al definir los mensajes de disculpa y confirmación. |
| 10 | Resolver tipos completos de llamada, no desviar | Replicant | Criterio de alcance: elegir un caso del top 4 y resolverlo end-to-end antes de abrir el siguiente. |

**Requisitos no funcionales — para la troncal de prueba**

| # | Requisito | Cifra | Dónde se verifica o configura |
|---|---|---|---|
| 11 | Latencia objetivo para español natural | **< 1.200 ms** | Medición en la troncal de prueba. |
| 12 | Umbral de deterioro perceptible | ~800 ms se nota · > 1.500 ms se siente roto | Criterio de aceptación del sandbox. |
| 13 | Referencia alcanzable en el mercado | ~600 ms | Vara de comparación, no meta inicial. |
| 14 | Ceder el turno ante interrupción | **< 150 ms** | A medir; no es un ajuste expuesto. |
| 15 | Brecha natural de turno humano | ~200 ms | Referencia de diseño. |
| 16 | Silencio antes de reintentar | Revisar el default | **`Voice No Input Timeout` = 7 s por defecto.** Demasiado para una llamada de servicio. |
| 17 | Duración máxima de locución del usuario | Configurable 0–30 s | `Max Speech Timeout`. Límite del motor: Nuance 22 s · Google 5 min · Azure 10 min. |
| 18 | Precisión del ASR | Ganancia gratis | **`Intent Classification Hinting` viene deshabilitado.** Activarlo y medir. |
| 19 | Sensibilidad a ruido | 0–1, default 0.5 | `Speech Detection Sensitivity`. Ajustar contra la tasa de interrupciones falsas. |
| 20 | Captura de cédula | Default 3 s | `Inter-Digit Timeout` y `Terminating Character` (`#`). |
| 21 | Arquitectura | Streaming y solapamiento, no serial | Verificar con Danillo cómo se comporta el pipeline actual. |

**Política de interrupciones — la práctica más accionable**

Barge-in no es un interruptor: es una **política por tipo de mensaje**. En Genesys el ajuste es global, así que **la política se implementa eligiendo el tipo de bloque** — `Communicate` para lo no interrumpible, `Ask for` para lo interrumpible.

| Momento de la llamada | Política deseada | Cómo se logra en Genesys |
|---|---|---|
| Saludo inicial | Interrumpible tras un breve *grace period* | `Ask for Intent` con barge-in activo. El usuario ya sabe para qué llamó. |
| Aviso de grabación (Ley 1581) | **No interrumpible** | Acción `Communicate` — el barge-in no aplica ahí. Requiere prueba de entrega. |
| Divulgación legal o condiciones | **No interrumpible** | Acción `Communicate`. |
| Captura de cédula o número de cuenta | **Endpointing paciente** | Subir `Voice No Input Timeout` y `Max Speech Timeout` para ese paso; ajustar `Inter-Digit Timeout`. La gente pausa mientras lee números. |
| Consulta abierta de soporte | Interrupción permitida | `Ask for Intent`. Ajustar `Normal Low` / `Normal High` para no confirmar de más. |
| Espera mientras se consulta un sistema | Interrumpible y cancelable | Debe poder pedir un humano en medio de la espera. |
| Transferencia | **Siempre permitir intención de escalamiento** | Seguridad por encima del audio en curso. |
| Menú u opciones (si se conserva alguno) | DTMF + voz con validación | `Terminating Character` y umbrales de confianza. |

**Métricas de turn-taking a instrumentar desde el sandbox:** tasa de interrupciones falsas · tasa de interrupciones no atendidas · éxito al reanudar tras interrupción falsa · repetición del usuario (dice lo mismo dos veces) · silencio muerto tras interrupción · completitud de la tarea después de una interrupción.

**Dos advertencias específicas de Genesys:** el barge-in se dispara con cualquier sonido o tono sin validar coincidencia, lo que en llamadas ruidosas produce cortes constantes; y al activarse **descarta el audio en cola**, así que nada esencial debe ir encolado detrás de un bloque interrumpible.

**Gobernanza y despliegue**

| # | Práctica | Fuente |
|---|---|---|
| 22 | Ciclo `Define → Test → Scale → Optimize` como estructura del proyecto | Parloa |
| 23 | Despliegue por etapas: sandbox → piloto acotado → producción. | Práctica general del sector |
| 24 | Miles de llamadas simuladas + red teaming adversarial antes del go-live | Cekura, Sierra (`Voice Sims`) |
| 25 | Regression testing automático ante cada cambio de prompt o configuración | Cekura |
| 26 | Versionado de agentes, guardrails y trazabilidad reproducible por llamada | Parloa |
| 27 | Empezar con **un solo caso de uso acotado**, conectado a sistemas reales, no a datos falsos | Guía de banca |
| 28 | Modelar volumen de **pico**, no promedio | Guía de banca |
| 29 | Optimización mensual continua como parte de la operación, no como proyecto cerrado | LIWA Tech |
| 30 | Revisar 20 llamadas de producción después de cada cambio, con plan de reversión | Runbook de interrupciones |
| 31 | Doble camino de construcción: builder para diseño, SDK para ingeniería | PolyAI → Architect + AI Studio en nuestro caso |
| 32 | Verificar la trazabilidad, no asumirla | Cognigy (advertencia de terceros) |

**Sector financiero regulado**

| # | Requisito | Detalle |
|---|---|---|
| 33 | **Autenticar antes de revelar** | Verificación por conocimiento, OTP, biometría de voz, o escalamiento humano en casos sensibles. |
| 34 | **Grounding obligatorio** | Toda respuesta hablada debe trazar a dato verificado de un sistema de registro en tiempo real. Cero respuestas generadas desde el entrenamiento. Relevante al elegir entre conocimiento `Standard`, `Highlight` y `Generative`. |
| 35 | **Leer y escribir**, no solo leer | El antipatrón es el "IVR disfrazado". En Genesys, los `AI Guides` de AI Studio. |
| 36 | **Motor unificado entre canales** | Antipatrón: stacks separados de voz y chat, cliente repitiendo. Sustenta reutilizar el entrenamiento de SAMI. |
| 37 | **Auditoría reproducible por llamada** | Antipatrón: *"confía en nosotros, usualmente funciona"*. |
| 38 | **Guardrails preventivos** | Límites de monto, divulgaciones obligatorias, simulaciones adversariales pre-lanzamiento. |
| 39 | **Ley 1581 de 2012** | Aviso de grabación obligatorio, en bloque `Communicate` no interrumpible. |
| 40 | **La contención es métrica de vanidad** | Medir resolución correcta en llamadas difíciles, no volumen de llamadas fáciles contenidas. |
| 41 | **Ninguna métrica debe premiar lo fácil** | Lección del modelo de Sierra: los incentivos mal puestos desvían las llamadas de riesgo. |

**Español colombiano**

| # | Práctica | Fuente |
|---|---|---|
| 42 | Voz con acento colombiano nativo, no español neutro traducido | Fonema AI |
| 43 | Comprensión de modismos locales: *"no traduce, conversa como local"* | Cari AI |
| 44 | Probar con usuarios reales del país antes de dar por bueno el resultado | Fonema AI |
| 45 | Escuchar la voz en vivo en español colombiano como paso de validación | Mentora |
| 46 | Medir latencia en infraestructura real, no en demo | Fonema AI, y la discrepancia homepage/FAQ de Vapi |

### Antipatrones a evitar

1. **IVR disfrazado** — agente que solo lee datos y nunca escribe en el sistema.
2. **Contención como métrica de éxito** — 100 llamadas fáciles resueltas y la disputa regulada enrutada.
3. **Barge-in booleano** — activarlo global sin política por tipo de mensaje. **Es el default de Genesys; hay que trabajarlo desde la arquitectura del flujo.**
4. **Heredar los defaults** — 7 segundos de silencio, hinting desactivado, sensibilidad en 0.5 sin medir.
5. **Encolar información crítica detrás de audio interrumpible** — el barge-in de Genesys descarta la cola.
6. **Stacks separados de voz y chat** — sin memoria compartida, cliente repitiendo.
7. **Auditoría opaca** — sin poder reconstruir por qué el agente decidió lo que decidió.
8. **Optimizar el "vibe" de la demo, no el comportamiento de producción.**
9. **Priorizar latencia sobre corrección** en casos complejos.
10. **Mezclar timeouts de silencio con manejo de interrupciones** — son fallas distintas y se diagnostican distinto.
11. **Creer la latencia publicada** — se verifica midiendo.
12. **Intentar que el bot negocie** — negociación compleja, reclamos delicados y asesoría consultiva no son casos de bot.

## Insights

**Insight 1 — El valor del equipo no está en la herramienta, y eso es una buena noticia**

- **Observación:** las 17 plataformas revisadas ofrecen capacidades equivalentes. La dispersión está en configuración, gobernanza y testing.
- **Interpretación:** la tecnología se comoditizó. Lo que diferencia un host excelente de uno mediocre es la calidad del prompt, la política de turnos y el rigor del testing — todo decisión de diseño.
- **Implicación para Skandia:** tener Genesys ya resuelto deja de ser una limitación y pasa a ser el escenario ideal: no hay que gastar tiempo eligiendo, se puede gastar en diseñar bien. La frase de Julián — *"nadie se va a diseñar más como ustedes"* — está bien calibrada.
- **Oportunidad:** producir un AOP en lenguaje llano por rol de agente, con la estructura de prompt de 7 secciones, y volverlo el activo reutilizable del programa Génesis.

**Insight 2 — La búsqueda de conocimiento en voz es el riesgo técnico número uno del proyecto**

- **Observación:** la documentación de Genesys Virtual Agent describe `Knowledge base content search` como disponible **solo en canales digitales**.
- **Interpretación:** el plan del kick-off —reutilizar el entrenamiento escrito de SAMI como base de conocimiento del host telefónico— asume que lo que funciona en chat funciona en voz. La documentación sugiere que no es automático.
- **Implicación:** si se confirma, hay que resolverlo antes de diseñar flujos: o se replantea cómo llega el conocimiento a voz, o se recurre a extensión (Dialogflow CX, Amazon Lex, Cognigy para Genesys), o se acota el alcance inicial a intents con respuesta estructurada en lugar de búsqueda libre.
- **Oportunidad:** llevarlo como primera pregunta al seguimiento del jueves. Es más barato resolverlo ahora que después de haber modelado los flujos.

**Insight 3 — El turn-taking es el punto ciego del mercado, y Genesys nos da las palancas**

- **Observación:** el criterio de interrupciones quedó en `s/d` para la mayoría de los referentes, pese a que la literatura técnica lo identifica como el principal determinante de naturalidad. Genesys, en cambio, expone barge-in, timeouts, sensibilidad de detección y umbrales de confianza.
- **Interpretación:** casi nadie diseña la política de turnos; la deja en el default. Es la razón por la que la mayoría de los voicebots suenan a máquina aunque la voz sea buena.
- **Implicación:** una política de interrupciones diseñada por tipo de mensaje pondría al host por encima del estándar local sin necesidad de tecnología adicional. La restricción de que el barge-in sea global es sorteable eligiendo el tipo de bloque.
- **Oportunidad:** llevar la tabla de política de interrupciones al seguimiento del jueves como decisión de diseño, e instrumentar las seis métricas de turn-taking desde el sandbox.

**Insight 4 — La proactividad tiene un prerrequisito que el kick-off ya identificó**

- **Observación:** ningún referente resuelve la proactividad tipo Revolut ("sabemos que estás bloqueado, ya te mandé el código") de fábrica. Depende de la profundidad de integración con sistemas de registro.
- **Interpretación:** *"para llegar allá primero hay que hacer que la arquitectura nos lo llame"*— coincide con el diagnóstico del sector: la proactividad no es función del bot, es función de la integración.
- **Implicación:** la proactividad es etapa 2. La etapa 1 es que el agente pueda **escribir** en los sistemas, no solo leer.
- **Oportunidad:** medir el éxito del piloto por número de acciones ejecutadas end-to-end, no por consultas respondidas.

**Insight 5 — Los defaults de Genesys están calibrados para un IVR, no para un host**

- **Observación:** `Voice No Input Timeout` en 7 segundos, `Intent Classification Hinting` deshabilitado, barge-in global que se dispara con cualquier ruido y descarta el audio en cola.
- **Interpretación:** los valores por defecto son razonables para un flujo de menú donde el usuario escucha y marca. Para una conversación abierta donde el usuario habla, interrumpe y corrige, cada uno de esos defaults trabaja en contra de la naturalidad.
- **Implicación:** una parte importante de la calidad del host se decide en una pantalla de ajustes que nadie suele revisar. No es diseño conversacional en el sentido tradicional, pero determina el resultado tanto como el guion.
- **Oportunidad:** hacer una **revisión explícita de defaults** como primer entregable técnico conjunto entre UX Conversacional y Danillo, con valores propuestos y justificación por cada ajuste.

## Mapa de oportunidades

| Oportunidad | Impacto | Esfuerzo | Momento |
|---|---|---|---|
| Verificar si la búsqueda de conocimiento opera en voz | **Crítico** | Bajo | Ahora — bloquea el diseño |
| Revisión explícita de defaults de Genesys con valores propuestos | Alto | Bajo | Ahora |
| Política de interrupciones por tipo de bloque (`Communicate` vs. `Ask for`) | Alto | Bajo | Ahora — decisión de diseño |
| Plantilla de prompt de 7 secciones + AOP por rol de agente | Alto | Bajo | Ahora — es el entregable del equipo |
| Requisitos de latencia como criterio de aceptación de la troncal | Alto | Bajo | Antes de la troncal |
| Diseñar handoff y caminos infelices antes del flujo feliz | Alto | Medio | Ahora |
| Redactar los cuatro mensajes de disculpa con tono de marca | Medio | Bajo | Etapa de contenido |
| Suite de simulaciones + red teaming antes del piloto | Alto | Medio | Antes del piloto |
| Roles diferenciados: host de recepción / soporte FP / concierge Wealth | Alto | Medio | Etapa de diseño |
| Un solo caso del top 4 resuelto end-to-end | Alto | Medio | Piloto |
| Tablero por llamada: motivo, resolución, sentimiento, duración | Medio | Medio | Desde el sandbox |
| Auditoría reproducible por llamada + guardrails preventivos | Alto | Alto | Antes de producción |
| Capacidad de escritura vía AI Guides | Alto | Alto | Depende de Danillo |
| Voz con acento colombiano | Medio | s/d | A verificar |
| Personalización por segmento comportamental | Medio | Alto | Etapa 2 |
| Proactividad tipo Revolut | Alto | Muy alto | Etapa 2+ |

## Preguntas de verificación para el equipo técnico

No son preguntas para un proveedor: son las que hay que resolver sobre nuestra propia implementación.

**Sobre conocimiento**
1. ¿La búsqueda en base de conocimiento del Virtual Agent opera en el canal de voz, o está limitada a digital?
2. Si está limitada: ¿replanteamos cómo llega el conocimiento de SAMI a voz, extendemos con un motor de terceros, o acotamos el alcance a intents estructurados?
3. ¿Qué tipo de contenido usamos — `Standard`, `Highlight` o `Generative`— y cómo garantizamos que la respuesta trace a un dato verificado?

**Sobre configuración**
4. ¿Qué motor de ASR está configurado hoy? Define el `Max Speech Timeout` real (Nuance 22 s vs. Google 5 min).
5. ¿Qué valores tienen hoy `Voice No Input Timeout`, `Speech Detection Sensitivity`, `Intent Classification Hinting` y los tres `Confidence Thresholds`?
6. ¿Existe voz con acento colombiano disponible, o solo español neutro?
7. ¿Qué versión de `AI Agents` y `Virtual Agent` tiene habilitada Skandia?

**Sobre acción y handoff**
8. ¿Qué sistemas puede **escribir** el agente vía AI Guides, y cuáles solo leer? Define si el host es un host o un IVR con mejor voz.
9. ¿Qué pasa cuando una integración falla en medio de la llamada?
10. ¿El resumen de conversación y los wrap-up codes llegan efectivamente al asesor humano, y en qué formato?

**Sobre gobernanza**
11. ¿Hay versionado de bot flows y podemos reconstruir por qué el bot decidió lo que decidió en una llamada específica?
12. ¿Podemos correr llamadas simuladas masivas en la troncal de prueba antes del piloto?
13. ¿Quién es dueño del prompt y del flujo en el día a día: diseño (Architect / AI Studio) o ingeniería?

## Limitaciones de este benchmark

- **El eje de experiencia quedó fuera.** No se evaluó ninguna línea telefónica real. Las prácticas de este documento vienen de quienes construyen la tecnología, no de quienes la operan de cara al cliente — y hay diferencia entre lo que una plataforma permite y lo que una empresa efectivamente configuró.
- **Sesgo de fuente comercial.** Buena parte del material es autopublicado. Las comparativas de Parloa favorecen a Parloa y las de Fonema concluyen que Fonema es la mejor opción para español. Se marcaron como declaradas todas las cifras de proveedor y se privilegió la única comparativa con llamadas reales de terceros.
- **La información de Genesys viene de su centro de recursos público**, no de la instancia de Skandia. Los defaults, límites y disponibilidad de features pueden diferir según versión, licenciamiento y configuración actual. Todo lo de esa sección requiere validación con Danillo — está formulado como preguntas de verificación, no como afirmaciones sobre nuestro entorno.
- **`s/d` es un resultado, no un vacío.** Que la mayoría de los referentes no publique nada sobre manejo de interrupciones es en sí un hallazgo.
- **Sin dimensión económica por decisión de alcance.** No se compararon precios, modelos de costo ni condiciones comerciales. Si en algún momento se evalúa extender Genesys con un motor de terceros, esa comparación es un ejercicio aparte.

## Siguiente paso recomendado

Una **ronda de campo corta** que cierre el eje que este documento dejó abierto: llamar a 3 líneas reales con la matriz de criterios y la tabla de política de interrupciones en mano.

| Objetivo | Línea | Qué observar |
|---|---|---|
| **Celsia — Luz I.A.** | 01 8000 112 115 | El único voicebot de voz confirmado en producción en Colombia. Recepción, manejo de acento, comportamiento ante interrupciones, capacidad de acción, escalamiento. |
| **Iberia** | Referencia del kick-off | Calidad de recepción e identificación del llamante. |
| **Un par del sector** — Porvenir, Protección o Bancolombia | — | Piso competitivo real en pensiones y banca colombiana. |

Dos llamadas por línea, una consulta simple del top 4 y una fuera de guion con interrupción deliberada, con la rúbrica ya definida: dos horas de trabajo que convierten este benchmark en evidencia de primera mano.

---

## Fuentes

**Metodología**
1. [Benchmarking — UOC Design Toolkit](https://design-toolkit.recursos.uoc.edu/es/guia/benchmarking/)
2. Playbook Research Skandia — tipo de proyecto IDENTIFICAR, estructura de insight y comunicación de resultados

**Genesys — nuestro punto de partida**
3. [About Genesys Dialog Engine Bot Flows](https://help.genesys.cloud/articles/about-genesys-dialog-engine-bot-flows/)
4. [About Genesys Virtual Agent](https://help.genesys.cloud/articles/about-genesys-virtual-agent/)
5. [Set up user input for a bot flow](https://help.genesys.cloud/articles/set-up-user-input-for-a-bot-flow/)
6. [Barge-in options](https://help.genesys.cloud/articles/about-barge-in-options/)
7. [Add knowledge to your bot flow](https://help.genesys.cloud/articles/add-knowledge-to-your-bot-flow/)
8. [About Architect](https://help.genesys.cloud/articles/about-architect/)
9. [Genesys — Virtual Agents capabilities](https://www.genesys.com/capabilities/virtual-agents)
10. [Genesys — AI Copilot Agents](https://www.genesys.com/capabilities/copilots)
11. [Genesys launches AI Agents with greater autonomy](https://www.genesys.com/company/newsroom/announcements/genesys-launches-ai-agents-with-greater-autonomy-to-drive-enterprise-wide-customer-experience-orchestration)
12. [Cognigy for Genesys](https://www.cognigy.com/solutions/cognigy-for-genesys)

**Tier A · Regional**
13. [Dapta AI — sitio oficial (es)](https://dapta.ai/es/)
14. [Dapta Docs — How to set up your AI Voice Agent](https://docs.dapta.ai/ai-voice-agents/how-to-set-up-your-ai-voice-agent)
15. [Dapta Docs — Prompt Guide](https://docs.dapta.ai/ai-voice-agents/how-to-set-up-your-ai-voice-agent/prompt-guide)
16. [Cari AI — Voicebots para atención al cliente con IA en LATAM](https://cariai.com/content/voicebots-atencion-al-cliente/)
17. [Fonema AI — Best AI Voice Agents for Spanish-Speaking Companies 2026](https://www.fonema.ai/en/guides/best-ai-voice-agents-spanish-2026)
18. [LIWA Tech — Agentes IA Telefónicos](https://liwaempresas.com/agentes-ia-telefonicos/)
19. [Mentora Colombia — Voicebots en Colombia 2026](https://mentoracolombia.com/voicebots-colombia-agentes-ia-telefonicos-precios-2026/)

**Tier B · Enterprise regulado**
20. [Parloa — 12 Best Voice AI Companies for Customer Support](https://www.parloa.com/knowledge-hub/best-voice-ai-companies-customer-support/)
21. [PolyAI — sitio oficial](https://poly.ai/)
22. [Lorikeet — Best Voice AI Platforms That Integrate With Financial Services Systems (2026)](https://www.lorikeetcx.ai/articles/best-voice-ai-financial-services-integration-2026)
23. [Retell AI — 7 Best Voice AI Agents for Banking in 2026](https://www.retellai.com/blog/best-voice-ai-agents-for-banking)

**Tier C · Infraestructura y testing**
24. [Cekura — 8 Best AI Voice Agent Platforms in 2026 (Tested on Real Calls)](https://www.cekura.ai/blogs/best-ai-voice-agent-platforms)
25. [Hamming AI — Voice Agent Interruption Handling: Barge-In, Backchannels, and Turn Detection](https://hamming.ai/resources/voice-agent-interruption-handling-runbook)
26. [QubitTool — Voice AI Engineering 2026: Low-Latency Agent Design](https://qubittool.com/blog/voice-conversation-ai-agent-latency-architecture)
27. [Decagon — What is voice agent barge-in?](https://decagon.ai/glossary/what-is-voice-agent-barge-in)
28. [Voiceflow — Conversational AI Design: A Practitioner's Guide 2026](https://www.voiceflow.com/blog/conversation-design)

**Referentes de experiencia (para la ronda de campo)**
29. [Celsia — Conoce a Luz I.A., nuestra asistente virtual de voz](https://www.celsia.com/es/blog-celsia/conoce-a-luz-i-a-nuestra-asistente-virtual-de-voz/)
30. [Bancolombia — Tabot, asistente virtual](https://www.bancolombia.com/centro-de-ayuda/canales/tabot)

---

## Preguntas abiertas para el seguimiento

1. **¿La búsqueda de conocimiento del Virtual Agent funciona en voz?** Es el riesgo técnico número uno y condiciona todo el diseño de flujos.
2. **¿Cuál es la configuración actual de los defaults?** Timeouts, sensibilidad, hinting y umbrales de confianza definen la naturalidad del host antes de escribir una sola línea de guion.
3. **¿Existe voz con acento colombiano en nuestra instancia?**
4. **¿Qué sistemas puede escribir el agente, no solo leer?** Define si el host es un host o un IVR con mejor voz.
5. **¿Quién será dueño del prompt y del flujo en el día a día?** El patrón builder/SDK requiere definirlo antes de construir.
6. **¿Cómo se relaciona la PoC que hizo Danillo con Genesys?** Si la prueba de concepto se hizo por fuera, hay que decidir si se porta o si sirvió solo para validar el concepto.
7. **¿Qué caso del top 4 elegimos para resolver end-to-end primero?** La recomendación del sector es empezar acotado; información de retiros es el #1.
8. **¿Hay apetito para la ronda de campo?** Dos horas de llamadas cerrarían el eje de experiencia que este documento dejó pendiente.
