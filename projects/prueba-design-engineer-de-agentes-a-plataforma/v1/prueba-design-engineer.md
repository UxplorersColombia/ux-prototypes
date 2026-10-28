# De agentes a plataforma

**Prueba técnica · Design Engineer · Equipo UX Skandia**

Este documento tiene todo lo que necesitas para hacer la prueba. Va acompañado del **kit** (`kit-plataforma.zip`), donde están el catálogo de capacidades, los componentes del Design System, las fichas de las personas y la guía de voz.

Todo lo que necesitas está en este documento y en el kit. Evaluamos tus decisiones a partir de esa información.

> **Fechas y contacto**
> - Recibes la prueba: [fecha]
> - Entregas: [fecha y hora límite]
> - Canal de entrega: [correo o formulario]
> - Sesión en vivo: [se agenda contigo]
> - Contacto: [nombre y correo]

---

## 1. Lo que ya existe

En el último año, el equipo UX de Skandia construyó un conjunto de capacidades con IA que ya usa en su trabajo diario:

| Capacidad | Agente | Qué hace | Recibe | Entrega |
|---|---|---|---|---|
| **Investigación** | Mike | Cruza investigación cualitativa, datos cuantitativos y benchmarking externo | Una pregunta de negocio | Síntesis de hallazgos con fuentes |
| **Contenido** | Kiki | Define la arquitectura de mensajes y el microcopy según la guía de voz | Hallazgos + objetivo | Estrategia de contenido y textos |
| **Estrategia** | Harvey | Clasifica el riesgo, define la arquitectura de información y la estructura del flujo | Hallazgos + contenido | Documento de producto (PRD) |
| **Prototipado** | Rachel | Construye pantallas con el Design System | PRD | Prototipo navegable |
| **Validación sintética** | — | Simula la reacción de 5 perfiles de cliente de un segmento | Prototipo o mensaje + segmento | Informe de reacciones |

Hoy cada capacidad funciona como un agente separado. Una persona del equipo UX es quien decide cuál usar, pasa el resultado de uno al siguiente, revisa la calidad y decide cuándo seguir.

Por eso el resto de la compañía (producto, comercial, mercadeo, cumplimiento) solo puede usarlas pidiéndoselo al equipo UX, que se volvió un cuello de botella.

El kit trae el contrato de cada capacidad (entradas, salidas, duración típica, si necesita revisión humana) y respuestas de ejemplo para simularlas.

---

## 2. El reto

**Diseña y construye la primera versión de una plataforma donde cualquier persona de Skandia, sin saber de UX ni de IA, llegue con una necesidad y salga con un resultado útil construido con esas capacidades.**

No es poner cada agente detrás de un botón. Es que la plataforma haga lo que hoy hace la persona del equipo UX:

1. **Encuadrar.** Convertir una necesidad vaga en un encargo claro y preguntar lo que falta en vez de adivinar.
2. **Orquestar.** Proponer qué capacidades encadenar y en qué orden, y pasar el contexto de una a otra.
3. **Controlar.** Saber cuándo una salida necesita revisión humana antes de seguir, y dejar claro qué es evidencia real y qué es generado o sintético.

---

## 3. Para quién

| Persona | Su necesidad | Lo que no sabe |
|---|---|---|
| **A. Product Owner de un producto de inversión** *(construye para esta persona)* | "Quiero saber si vale la pena un simulador de aportes antes de pedirle un sprint a desarrollo" | No sabe qué es un PRD ni cómo se valida un concepto |
| **B. Ejecutivo comercial** | "Necesito explicarle un producto nuevo a clientes que están por pensionarse" | No sabe qué capacidad usar ni qué es un segmento |
| **C. Analista de cumplimiento** | "Tengo que revisar que un flujo comunique bien los riesgos antes de que salga" | Necesita saber de dónde sale cada afirmación |

Construye el flujo completo para **A**. Para **B** y **C**, explica en `DECISIONES.md` cómo los atendería tu plataforma **sin pantallas nuevas**. Si necesitas pantallas nuevas para ellos, también es una respuesta válida, pero justifícala.

Cada persona tiene una ficha más completa en `kit-plataforma/personas/`.

---

## 4. Alcance: máximo tres vistas

1. **Encargo.** La persona describe su necesidad, la plataforma pide lo que falta y propone un plan de capacidades que la persona puede editar.
2. **Ejecución.** El avance del plan, las salidas intermedias y **al menos un punto de revisión humana** (aprobar, ajustar o rehacer).
3. **Resultado.** El entregable consolidado, con trazabilidad (qué capacidad produjo qué, con qué evidencia, qué es sintético) y el siguiente paso sugerido.

### Estados que no pueden faltar

- La necesidad es ambigua y la plataforma pide precisión en vez de adivinar.
- El encargo trae datos sensibles de clientes (por ejemplo, una cédula o un nombre con su saldo): la plataforma los detecta y no los envía.
- Una capacidad falla o se demora más de lo esperado.
- La persona rechaza una salida intermedia y pide un ajuste.
- El resultado tiene evidencia débil (pocas fuentes o solo usuarios sintéticos) y se comunica sin esconderlo.
- Éxito.

En `kit-plataforma/encargos-de-ejemplo.json` tienes encargos para probar cada uno de estos casos.

---

## 5. La IA dentro del producto

- **Al menos una capacidad debe estar conectada a un LLM real** de punta a punta. Tú eliges cuál y lo justificas. Sugerencia: el encuadre (necesidad → encargo + plan) es donde más se nota la inteligencia de la plataforma, pero no es obligatorio.
- La salida de esa capacidad debe ser **estructurada y validada** (un esquema que tu interfaz consume), no texto pegado en pantalla.
- Las demás capacidades pueden usar las respuestas simuladas del kit.
- **Usa el proveedor y el modelo que quieras, con tu propia cuenta.** No evaluamos qué tan bueno es el modelo. Una capa gratuita o un modelo local son válidos. Evaluamos cómo lo integras, cómo lo diriges y cómo manejas cuando falla.
- **Nunca subas tu llave de API al repositorio.** La URL desplegada puede correr en modo simulado; la capacidad real la muestras en la defensa o en un video de máximo 3 minutos.
- **Usa solo los datos sintéticos del kit.** No pongas datos reales de Skandia ni de clientes en ningún servicio de IA externo.

---

## 6. El kit

| Archivo | Qué es |
|---|---|
| `README.md` | Cómo usar el kit y sus reglas |
| `capacidades.json` | El contrato de las 5 capacidades y 3 respuestas simuladas por cada una: normal, con evidencia débil y con error |
| `encargos-de-ejemplo.json` | Necesidades de ejemplo para probar los estados obligatorios |
| `personas/` | Una ficha por persona (A, B y C) |
| `design-system/` | Los componentes `sk-*` que puedes usar, los tokens y una plantilla HTML para empezar |
| `guia-voz-y-tono.md` | Lo necesario de la guía de comunicación de Skandia para escribir el microcopy |

**Sobre el Design System.** Los componentes `sk-*` vienen como *custom elements*, así que funcionan con el framework que elijas o sin ninguno. Usa los componentes que lista `design-system/componentes.md`. Si necesitas algo que no está, decide si es un token, una variante o un componente nuevo, y explícalo en `DECISIONES.md`.

---

## 7. Qué entregas

- La implementación funcionando y una URL de preview desplegada (Vercel, Netlify o StackBlitz).
- El repositorio con un historial de commits legible.
- `DECISIONES.md`, de máximo una página y con estas cinco secciones:
  1. Decisiones de diseño y qué descartaste.
  2. Cómo modelaste las capacidades (el contrato que usa tu interfaz) y qué extendiste del Design System: token, variante o componente nuevo, y por qué.
  3. Dónde se equivocó la IA, tanto la que usaste para construir como la capacidad real dentro del producto, y qué corregiste.
  4. Cómo atendería la plataforma a las personas B y C.
  5. Qué dejaste fuera y qué harías con dos días más.
- El log o la transcripción de tus sesiones de IA (obligatorio).
- Exploración visual en Figma o capturas, opcional. Diseñar directamente en código no se penaliza.

### Lista para revisar antes de entregar

- [ ] La URL de preview abre sin iniciar sesión.
- [ ] El repositorio no tiene llaves de API ni archivos `.env` con secretos.
- [ ] Solo hay datos del kit; nada real de Skandia ni de clientes.
- [ ] Están las 3 vistas y los 6 estados obligatorios.
- [ ] Al menos una capacidad usa un LLM real, con salida estructurada y validada.
- [ ] `DECISIONES.md` tiene las cinco secciones y cabe en una página.
- [ ] Incluiste el log de tus sesiones de IA.
- [ ] Si la capacidad real no corre en la URL, tienes el video (máximo 3 minutos) o la muestras en la sesión.

---

## 8. Cómo evaluamos

Cinco dimensiones, el mismo peso:

| Dimensión | Peso | Qué miramos |
|---|---|---|
| Craft de interacción y pulido | 20% | Transiciones entre pasos, streaming, estados de carga y error, el punto de revisión |
| Criterio dirigiendo la IA | 20% | Tu log de IA y la capacidad real: prompt, esquema, validación y manejo de fallas |
| Pensamiento de sistemas y Design System | 20% | Cómo modelaste las capacidades y qué extendiste del Design System |
| Confianza y control para no expertos | 20% | Trazabilidad, señal de evidencia, manejo de datos sensibles y lenguaje sin jerga |
| Comunicación, autonomía y ambigüedad | 20% | `DECISIONES.md`, cómo resolviste B y C y la sesión en vivo |

**Lo que no evaluamos:**

- La calidad del modelo o del proveedor que elijas.
- Usar un modelo pequeño, local o gratuito.
- Que la URL desplegada corra en modo simulado.

---

## 9. Sesión en vivo: 60 minutos sobre lo que construiste

Después de tu entrega nos reunimos contigo para que nos muestres tu trabajo y conversemos sobre tus decisiones.

1. Nos muestras tu entrega.
2. Conversamos sobre tus decisiones.
3. Trabajamos juntos sobre tu código.
4. Haces tus preguntas al equipo.

Ten tu entorno de desarrollo y tus herramientas de IA listos.

---

## 10. Reglas

1. **Usar IA es obligatorio y debes declararlo.** No usarla es una señal negativa, y usarla sin criterio también.
2. **El trabajo es tuyo.** Skandia no usará tu entrega para construir la plataforma real sin un acuerdo explícito contigo.

Además:

- El kit es confidencial y lo recibes bajo el acuerdo de confidencialidad de la prueba. No lo publiques ni lo compartas.
- Usa solo los datos sintéticos del kit.
- Nunca subas tu llave de API al repositorio.

---

## Preguntas frecuentes

**¿Qué framework uso?**
El que prefieras. Recomendamos TypeScript. Los componentes `sk-*` funcionan con cualquier framework porque son *custom elements*.

**¿Tengo que diseñar en Figma?**
No. La exploración visual es opcional y diseñar directamente en código no se penaliza.

**¿Qué modelo de IA uso para la capacidad real?**
El que quieras, con tu propia cuenta. Una capa gratuita o un modelo local son válidos.

**¿Mi URL tiene que llamar al LLM real?**
No. Puede correr en modo simulado. La capacidad real la muestras en la sesión o en un video de máximo 3 minutos.

**Windows bloquea archivos al descomprimir el kit. ¿Qué hago?**
Windows marca los archivos descargados de internet y, en algunos equipos, bloquea lo que sale de un `.zip` marcado. Haz clic derecho sobre `kit-plataforma.zip` → **Propiedades** → marca **Desbloquear** → **Aceptar**, y vuelve a descomprimir.

**¿Puedo usar un componente `sk-*` que no esté en la lista del kit?**
El kit define con qué componentes cuentas. Si te falta algo, decide cómo resolverlo (token, variante o componente nuevo) y explícalo en `DECISIONES.md`.
