# Simulador Jubilación — Base de investigación

**Fecha:** 2026-09-16
**Equipo:** UX (con agente UX Research de Skandia) · **Herramienta construida por:** Operaciones
**Tipo de documento:** insumo consolidado previo al instrumento de investigación. **No es un reporte de hallazgos de campo** — todavía no hay sesiones con usuarios.
**Fuentes:** Dovetail (cualitativa) · Analítica de comportamiento (cuantitativa) · Benchmarking externo (WebSearch)

> **Cómo leer este documento.** Todo lo marcado **[Verificado]** tiene fuente comprobable. Todo lo marcado **[Hipótesis]** es una conjetura del equipo que el testeo debe confirmar o refutar.

---

## 1. Fuentes consultadas y sus límites

| Fuente | Estado | Resultado |
|---|---|---|
| **Dovetail** | Activo | Workspace `uxplorers-skandiacol-xfdn`, 111 proyectos. Evidencia indirecta pero transferible (§2) |
| **Analítica de comportamiento** | Activo, parcial | Segmentación de clientes por edad/saldo/canal no disponible este sprint (acceso a `analiticaclientesux` bloqueado por una restricción de plataforma en gestión con el equipo de Datos). Se usó como fuente alterna el registro de comportamiento del portal de clientes — ver §1b |
| **WebSearch** | Activo | Hallazgo regulatorio decisivo, verificado de forma independiente (§3) |
| **Developer Portal (MCP)** | Caído | No se pudo verificar el repositorio del prototipo ni su equipo dueño |

### Lo que la analítica de clientes sí permitió confirmar, aun sin poder consultarla en detalle

**[Verificado] La analítica de clientes de Skandia no registra ninguna variable del mundo pensional obligatorio** — no existe régimen (RAIS/RPM), semanas cotizadas, saldo de cuenta individual de ahorro obligatorio, IBL ni fecha de inicio de cotización. Lo único cercano es la tenencia y saldo del producto FPOB.

> Esto es relevante para el diseño: los tres datos duros que el Paso 2 del prototipo exige teclear a mano (semanas RAIS, semanas RPM, saldo) **no son precargables desde la analítica de cliente de Skandia**. Pedirlos a mano puede no ser una decisión de diseño, sino una restricción de datos heredada — conviene confirmarlo con el equipo de Operaciones (vacío #4).

**[Verificado] La analítica de clientes cubre exclusivamente clientes, no prospectos.** La audiencia de una herramienta del sitio público es, por definición, gente que aún no es cliente, y la segmentación comportamental de Skandia está construida sobre la base instalada.

> Es un problema metodológico de fondo para la etapa de testeo: usar 5 personas sintéticas derivadas de segmentos de clientes asume que los visitantes del sitio público se parecen a los clientes actuales. Esa asunción no está validada y debe tratarse como hipótesis declarada del sprint, no como premisa silenciosa.

---

## 1b. Comportamiento verificado en el portal de clientes

Fuente: registro de eventos del portal de clientes (18.573.952 eventos, dic-2023 a sep-2026). **Es portal autenticado, no el sitio público** — se lee como proxy del comportamiento real de los usuarios de Skandia frente a herramientas similares, no como medición directa de la audiencia del simulador público.

### Dispositivo

| Canal | Escritorio | Móvil |
|---|---|---|
| Portal de clientes (web) | **~82% de los eventos** · 152.573 usuarios | 18% · 63.627 usuarios |
| App móvil | — | 69.445 usuarios (móvil por definición) |

**[Verificado]** El portal web autenticado es mayoritariamente de escritorio. **[No resuelto]** Ninguno de los dos es el sitio público donde vive el prototipo: el portal autenticado es transaccional (retirar, consultar saldos, firmar), un tipo de tarea que atrae escritorio, mientras un sitio de marketing público suele inclinarse más a móvil. **Con esta fuente no se puede establecer el reparto de dispositivo del sitio público** — se recomienda validar con la analítica propia del sitio (Google Analytics, que ya carga en la página; vacío #8).

El defecto de diseño móvil detectado en la heurística (formulario a 855px de scroll, tabs truncadas) **sigue siendo real y verificado**; lo que no puede afirmarse todavía es qué proporción de la audiencia del sitio público lo sufre.

### Historia Laboral: el dato que el Paso 2 exige es difícil de encontrar

Es el módulo del portal donde vive el dato de semanas cotizadas. 2.033 usuarios, jul–sep 2026.

| Pantalla · acción | Eventos | Usuarios | Eventos/usuario |
|---|---|---|---|
| Tab Resumen · Vista | 5.247 | 2.031 | 2,6 |
| Tab Aportes · Clic "Filtro de año" | 3.089 | 411 | **7,5** |
| Tab Aportes · Vista | 2.370 | 1.235 | 1,9 |
| Tab Empleadores · Vista | 1.091 | 753 | 1,4 |
| Tab Bono Pensional · Vista | 821 | 639 | 1,3 |
| Tab Resumen · Clic "Detalle de semanas" | 678 | **528** | 1,3 |
| Tab Aportes · Clic "Descargar Historia Laboral" | 125 | **107** | 1,2 |

**[Verificado] Solo el 26% de quienes abren su historia laboral llega al detalle de semanas** (528 de 2.031). Tres de cada cuatro consultan su historia laboral y nunca ven el número que el simulador les va a pedir.

**[Verificado] El filtro de año concentra fricción**: 411 usuarios, 7,5 clics cada uno — la información está fragmentada por período y hay que reconstruirla manualmente.

**[Verificado] Solo el 5% descarga su historia laboral** (107 de 2.031). La ruta "descarga tu historia laboral y vuelve al simulador con el dato" no es un comportamiento existente que se pueda dar por sentado.

> **Consecuencia para el diseño:** enlazar el Paso 2 a la historia laboral es necesario pero no suficiente. El dato existe, pero está a varios pasos y fragmentado por año; un enlace probablemente traslada el problema en vez de resolverlo.

### Los simuladores existentes tienen audiencia real

**[Verificado]** El evento de entrada a simuladores en la app móvil registra **10.013 usuarios únicos** en ~17 meses (abr-2025 a sep-2026), sin equivalente registrado en el portal web. Confirma que Skandia ya opera simuladores en producción con audiencia real, lo que refuerza la pregunta de si el Simulador Jubilación los reemplaza, duplica o compite (vacío #6) — y por qué el nuevo se publica en el sitio público en vez de la app, donde ya vive el uso (vacío #10).

### Hallazgo colateral: el simulador de Retiros falla para 1 de cada 11 usuarios

No es el simulador pensional, pero es el antecedente de fiabilidad más cercano dentro del mismo ecosistema. **[Verificado]** De 50.214 usuarios que llegan a Retiros → Resumen, **4.474 (8,9%)** encuentran un fallo técnico al cargar la simulación — mayoritariamente errores de servidor (HTTP 500) y de sesión (HTTP 401), con un remanente de timeouts y errores de JavaScript.

**[Hipótesis]** Si el nuevo simulador comparte servicios de cálculo con este ecosistema, hereda ese riesgo. Un error de servidor en una proyección de pensión en el sitio público —sin sesión que recuperar ni asesor a quién llamar— se paga más caro que dentro del portal (vacío #9).

---

## 2. Evidencia previa en Skandia

### Lo que no existe [Verificado]

- **Cero research previo sobre un simulador pensional.** Ninguno de los 111 proyectos de Dovetail testea una calculadora o simulador de este tipo.
- **Cero research sobre herramientas del sitio web público.** Todo el repositorio es app, Portal Contigo, Invest-ed, portal de asesores — entornos autenticados.
- **Cero research con no-clientes en contexto pensional.**

Que no haya antecedentes es, en sí mismo, un hallazgo: esta sería la primera investigación del equipo sobre una herramienta pública no autenticada.

### Lo que sí existe y es transferible

**[Verificado] El vocabulario del prototipo ya falló antes**
> *"4/5 usuarios desconocen el concepto de brecha pensional, por lo que debemos contar de otra forma este concepto"* — Pruebas FPOB, sep 2025

Si "brecha pensional" no se entiende, "tasa de reemplazo", "IBL", "capital acumulado" y "Fidelidad" —todos en la pantalla de Resultado— están en riesgo alto. Es el hallazgo previo más directamente aplicable.

**[Verificado] Los usuarios conocen la reforma, y hablan en su idioma — no en el del prototipo**
> *"5/5 cuentan con un conocimiento base de lo que trata la nueva reforma pensional... 4/5 usuarios tuvieron que gestionar la selección de ACCAI"* — Pruebas FPOB, sep 2025

Los usuarios ya operan con léxico ACCAI/pilares. El prototipo les habla en RAIS/RPM, el léxico de la Ley 100. Hay un desfase de marco mental documentado con evidencia propia.

**[Verificado] La terminología técnica es una barrera recurrente**
> *"Términos como 'cuenta contingente' o 'sin contingente' no son claros para los usuarios finales"*
> *"Los asesores consideran que la mayoría de usuarios no están preparados para procesos de vinculación completamente autónomos"* — Objeciones clientes MFUND pensiones, oct 2025

**[Verificado] Los jóvenes no tienen proyección pensional — les mueve otra cosa**
> *"...jóvenes que no tienen una proyección clara de ahorro para la pensión, sin embargo sí tienen interés por planes de corto o mediano plazo... Es más llamativo para ellos la inversión con resultados inmediatos y el beneficio tributario."*

Tensión directa con el panel de Aportes Voluntarios del Paso 4, que vende horizonte largo y no menciona beneficio tributario.

**[Verificado] Qué genera confianza — patrón positivo reutilizable**
Testeos de Traslados (dic 2025): la confianza vino de "seguridad, claridad y control del proceso"; el desistimiento, de "confusión en el momento de...".

**Material sin explotar:** la nota `Informe Ahorro Futuro` (Investigación Provokers) y el proyecto `Benchmark Rediseño Portal Clientes` son adjuntos que conviene abrir a mano antes del sprint — el primero es el antecedente directo más probable.

---

## 3. Contexto regulatorio 2026 — el hallazgo dominante

Verificado de forma independiente por su alta consecuencia.

| Hecho | Estado |
|---|---|
| **La ventana de traslado entre RPM y RAIS venció el 16 de julio de 2026** (Art. 76 Ley 2381/2024, Decreto 1225/2024) | [Verificado] |
| Sentencia **C-264 de 2026** declara exequible la Ley 2381; texto conocido el 15-sep-2026, 7 votos contra 1 | [Verificado] |
| **Nueva vigencia del sistema: 1 de abril de 2027** | [Verificado] |
| 9 artículos devueltos a Cámara por vicios de trámite; plazo 17-sep → 29-oct-2026 | [Verificado] |
| Arquitectura nueva: pilares, aportes a Colpensiones hasta 2,3 SMLMV, excedente a ACCAI | [Verificado] |
| **Régimen de transición**: quien acredite las semanas al 1-abr-2027 y esté en Colpensiones sigue en Colpensiones; quien esté en una AFP privada permanece en RAIS | [Verificado] |

### La premisa central del prototipo apunta a una decisión que ya no existe

El simulador ofrece como feature destacada la "comparación entre los dos regímenes": dos círculos enfrentando mesada RAIS contra mesada RPM. Comparar dos regímenes solo tiene sentido si hay una decisión que tomar entre ellos —trasladarse— y esa decisión cerró el 16 de julio de 2026, hace dos meses.

**Matiz que abre la salida:** sí queda una pregunta viva para el usuario, pero no es la que el simulador responde. Con el régimen de transición, lo que está en juego ya no es *"¿a cuál me cambio?"* sino *"¿alcanzo las semanas antes del 1 de abril de 2027, y qué significa eso para mí?"*. El simulador tiene el dato en pantalla —"Semanas faltantes para el régimen de prima media: 0"— pero no lo conecta con la fecha de corte ni explica su consecuencia.

**[Verificado] El marco cambia en ~6,5 meses.** Desde el 1-abr-2027 la dicotomía RAIS/RPM deja de ser la arquitectura del sistema.

**[Hipótesis] Tres escenarios posibles**, a resolver con el equipo de Operaciones antes de testear:

1. **El prototipo se construyó antes del cierre y nadie lo actualizó** → se estaría testeando un flujo que no debería publicarse tal cual.
2. **La comparación tiene otro propósito** (pedagógico, soporte a doble asesoría, régimen de transición) → legítimo, pero el diseño no lo comunica en ninguna parte, y esa omisión es en sí misma el hallazgo.
3. **Hay una v2 alineada a pilares en camino** → testear la v1 es esfuerzo perdido.

> **Riesgo adicional, no de usabilidad:** publicar en el sitio público una proyección de mesada bajo un marco legal que se reemplaza el 1-abr-2027, sin fecha de corte visible ni advertencia de marco normativo, tiene exposición reputacional y potencialmente regulatoria. Un competidor ya resolvió esto (§4).

---

## 4. Benchmark

### Colombia

| Referente | Patrón | Relevancia |
|---|---|---|
| **Colpensiones** | Semanas cotizadas es campo opcional, y resuelve el dato en contexto con un enlace "revisar extracto" que lleva a la historia laboral | Antídoto directo al Paso 2, que exige 3 datos duros como obligatorios sin decir dónde obtenerlos |
| **Colfondos** | Declara el marco legal aplicable al usuario: *"Este servicio simula el beneficio pensional según la Ley 100; en tu caso aplica la Ley 2381..."*. Segmenta el flujo ("Simulador Sin Bono") | Un competidor ya resolvió la advertencia normativa que a Skandia le falta. El referente más accionable |
| **Protección** | Nombre planteado como la pregunta del usuario: *"¿Con cuánto voy a pensionarme?"* | Frente a "Simulador Jubilación" — nombre de herramienta, no de necesidad |
| **Porvenir** | Simulador con dominio propio dedicado | Decisión de arquitectura: ¿embebido o destino? |
| **Skandia — ya existente** | "Mi Ahorro A Futuro" y otro simulador pensional (`Pensioneswar2`) ya publicados | Skandia ya tiene al menos 2 simuladores pensionales vivos. ¿Reemplazo, duplicación o competencia interna? |

### Internacional

| Referente | Patrón |
|---|---|
| **Vanguard** (Nest Egg) | 4 inputs, sliders, sin datos personales. Minimización radical |
| **Fidelity** (Retirement Score) | Resultado como rango bajo 3 supuestos de mercado, no cifra única |
| **Boldin / ProjectionLab / Empower** | Monte Carlo completo — el extremo opuesto |
| **Investigación académica** (arXiv 2005.01692) | 6 inputs, y cada campo dice dónde encontrar el dato ("este porcentaje está en tu desprendible de nómina"). Defaults precargados |

*(MoneyHelper UK y NEST no arrojaron resultados sustantivos — vacío documentado, sin conclusiones sobre ellos.)*

### Síntesis

- **Patrón dominante del mercado:** minimizar inputs y precargar supuestos. Skandia pide ~13 campos en 3 pasos — está en el extremo alto.
- **Diferenciador emergente:** resultado como rango. Skandia muestra dos cifras puntuales grandes, proyectando una precisión que el cálculo no tiene.
- **Antipatrón a evitar:** exigir datos oficiales sin ruta para obtenerlos. Skandia lo comete tres veces, y sus textos "?" son definicionales justo donde el benchmark dice que deben ser instruccionales.

> **Convergencia de fuentes independientes.** El hallazgo propio (los "?" solo definen y aparecen al fondo del sidebar) + el patrón académico (cada campo debe decir dónde está el dato) + Colpensiones (enlace al extracto en contexto) + el propio dato de comportamiento (§1b: 74% no llega al detalle de semanas) apuntan a lo mismo. Es el hallazgo mejor sustentado del documento, y no necesita testeo para corregirse — necesita testeo para confirmar cuánta gente abandona por él en este flujo específico.

---

## 5. Hipótesis priorizadas

### Transversales

| # | Hipótesis | Severidad |
|---|---|---|
| **H1** | El Paso 2 es el punto de abandono dominante: exige tres datos oficiales que la mayoría no tiene a mano, la ayuda define en vez de instruir, y el dato de semanas es difícil de encontrar incluso cuando se busca (§1b) | Crítica |
| **H2** | Los usuarios leerán la comparación de regímenes como una decisión que aún pueden tomar, cuando la ventana cerró; y quienes conocen la reforma esperarán léxico de pilares/ACCAI | Crítica |
| **H3** | "Tasa de reemplazo", "IBL", "capital acumulado" y "Fidelidad" no se decodifican, haciendo el Paso 4 ilegible aunque el cálculo sea correcto | Alta |
| **H4** | Distribuir el saldo entre tres fondos en años que sumen exacto es el punto de mayor carga cognitiva; se resolverá al azar o se abandonará | Media-alta |
| **H5** | Terminar en "Generar PDF" sin CTA convierte una herramienta de captación en un callejón sin salida | Crítica (negocio) |
| **H6** | La mesada RPM en $0 sin explicación se leerá como error del simulador o como sentencia personal | Alta |
| **H7** | El formulario bajo el pliegue en móvil (855px de scroll) y las tabs truncadas afectan a una proporción de usuarios aún no dimensionada; el defecto es real, el alcance sobre el sitio público está por confirmar (§1b) | Alta |
| **H8** | El error rojo pre-touch, el "Tu edad hoy: 0 años" y el Continuar que solo se habilita en blur se leerán como fallas del sitio, contaminando la confianza en el cálculo | Media-alta |

**H2 es la de mayor consecuencia de negocio.** **H5** tiene respaldo en evidencia propia: *"la mayoría de usuarios no están preparados para procesos completamente autónomos"* — el usuario llega al momento de máxima ansiedad, ve su mesada proyectada, y no hay nadie al otro lado.

### Por segmento

**Financial Explorer** · *prioridad de testeo #1*
Mayor volumen y el segmento donde la ansiedad financiera es más alta.
- **HS1**: el muro del Paso 2 los detendrá más que a nadie — no tienen relación previa con su historia laboral ni saben que existe.
- **HS2**: ver la mesada proyectada les generará ansiedad sin ruta de salida, y el panel de aportes voluntarios, sin mencionar beneficio tributario, no la alivia.
- **HS3**: el régimen preseleccionado en el sidebar los confundirá — muchos no saben en cuál están.

**Wealth Builders**
Horizonte suficiente para que la simulación mueva decisiones, y capacidad de actuar.
- **HS4**: son los únicos que podrían completar el Paso 3 con criterio → buen grupo de control para aislar si H4 es problema de interfaz o de conocimiento.
- **HS5**: rechazarán la cifra puntual por poco creíble y pedirán supuestos (rentabilidad, inflación) que el prototipo no expone.

**Family Guardians**
**El encaje conceptual más fuerte y el peor servido por el diseño actual.**
- **HS6**: es el único segmento para el que "Tipo de Beneficiario Principal" del Paso 1 es central — pero está enterrado como campo y el resultado nunca vuelve a hablar de los beneficiarios. Se pide el dato y no se devuelve valor.
- **HS7**: por edad, el segmento con más probabilidad de estar en el régimen de transición y el que más pudo tener interés en el traslado ya vencido. Alto riesgo de que la comparación genere una expectativa imposible, con carga emocional.

**Capital Investor**
- **HS8**: la pensión obligatoria es marginal en su patrimonio; el simulador puede resultarles irrelevante. Hipótesis a falsar: quizá lo usen como chequeo de piso mínimo.
- **HS9**: tolerarán más campos si perciben rigor → el grupo donde H1 podría no cumplirse. Contraste valioso.

**Stability Seekers**

El Master de Segmentación Comportamental 2026 define este segmento como 50+ años y le asigna explícitamente un simulador de pensión como herramienta clave, con el JTBD *"visibilidad del futuro claro"* en transición a retiro. Esto encaja con un cliente de 50–55 años, pero no con uno de edad muy avanzada, para quien la pregunta *"te faltan 21 años"* ya no aplica.

**[Hipótesis]** El segmento probablemente no es homogéneo frente a esta herramienta: la franja de 50 a 62 años es la que aún tiene decisión pensional por delante y la más relevante para el testeo; edades muy superiores sirven mejor otros propósitos.

**Recomendación:** incluir una célula de Stability Seekers acotada a 50–62 años como panel principal, y usar el resto del segmento para dos propósitos alternativos que no compiten con el anterior:
- **HS10 (proxy de accesibilidad)**: si el flujo es operable por el cliente de mayor edad, es operable por cualquiera. Dado el riesgo de accesibilidad ya detectado en el datepicker, es el mejor caso límite disponible.
- **HS11 (fuente de contenido, no de usabilidad)**: los clientes de mayor edad ya viven el resultado que el simulador proyecta. Una sesión aparte, sin prototipo —*¿qué habrías querido saber a los 40?*— alimenta el contenido, no la interfaz.

> **Audiencia faltante: los no-clientes.** Es un sitio público. Si el panel son 5 segmentos de clientes, el sprint no cubre su audiencia primaria real. Hay que añadir una célula de no-clientes o declarar la limitación explícitamente.

> **Nota sobre tamaños de segmento.** Existen dos series de referencia para el peso relativo de cada segmento (la ficha de los agentes testers y el Master de Segmentación 2026) que no coinciden entre sí y no pudieron reconciliarse con datos propios este sprint. La priorización anterior se apoya en el encaje conceptual de cada segmento con la herramienta, no en su tamaño relativo — evitar usar cifras de participación de cualquiera de las dos series ante stakeholders hasta reconciliarlas.

---

## 6. Tipo de proyecto

### VALIDAR — con un gate estratégico antes de campo

**Por qué Validar**, según el árbol de decisiones del playbook: *"¿Hay algo ya diseñado que queremos probar o evaluar?"* → Sí, hay un prototipo funcional en UAT. Táctico, rápido, decisiones inmediatas.

**Herramientas del catálogo Validar:**
1. **Evaluación heurística** — ya hecha (`simulador-jubilacion-heuristica.md`). Gastar sesiones confirmando defectos que no necesitan usuarios es desperdiciar el panel.
2. **Test moderado** — para lo que sí requiere usuario: comprensión del resultado, decodificación del vocabulario, la asignación de multifondos y la reacción al vacío de CTA. Es el instrumento de esta etapa.
3. **Test no moderado** (Userbery/Maze) — solo si hace falta dimensionar H1 a escala, en una etapa posterior.

**Rúbrica Skandia (1–4)**: Sencillez, Facilidad, Integralidad, Memorabilidad. Expectativa previa a falsar: Sencillez e Integralidad en zona crítica (1–2) — Integralidad porque el flujo no conecta con ningún otro servicio de Skandia y muere en un PDF.

### El gate, antes de campo

Testear la usabilidad de un flujo cuya premisa legal está vencida es investigación mal invertida. Si la comparación RAIS vs RPM debe desaparecer o reencuadrarse (§3), cambian los Pasos 2 y 4 completos, y con ellos la mitad del guion.

**Recomendación: 1–2 días de bloque Identificar antes de campo** — no con usuarios, sino con Operaciones y Legal, para cerrar las preguntas del §7. Es el Principio #1 del playbook: *ningún sprint sin brief*, y varias de esas preguntas conviene resolverlas antes de definir el alcance.

El testeo con agentes sintéticos que sigue a este documento puede ejecutarse en paralelo a ese gate: no depende de su resultado para producir señal sobre comprensión y usabilidad, pero **el hallazgo sobre la premisa (H2) debe presentarse junto con los resultados de campo, no subordinado a ellos.**

---

## 7. Preguntas de investigación y vacíos

### Pregunta de negocio
*¿Qué impide que un visitante del sitio público complete una simulación pensional y avance hacia una conversación con Skandia, cuánto se pierde en el intento, y qué hay que cambiar para que la herramienta genere leads en vez de PDFs?*

### Objetivo
*Evaluar usabilidad, comprensión y capacidad de conversión del prototipo con usuarios representativos de los segmentos, para decidir qué corregir antes de publicar y si la comparación entre regímenes debe mantenerse bajo el marco normativo vigente.*

### Puntos a confirmar con el equipo de Operaciones

**Bloqueantes — sin respuesta no hay brief**

1. **¿Cuál es el propósito de la comparación RAIS vs RPM, dado que la ventana de traslado venció el 16-jul-2026?** Puede reencuadrar o cancelar el sprint entero.
2. **¿Existe una v2 alineada a la Ley 2381** (pilares / ACCAI / umbral 2,3 SMLMV)? Con vigencia 1-abr-2027, lo que se publique hoy tiene vida útil de ~6 meses.
3. **¿Legal y Cumplimiento revisaron el bloque legal del sidebar contra el marco post-C-264?** Colfondos ya declara la ley aplicable; Skandia no.
4. **¿Por qué se piden semanas y saldo manualmente?** ¿Restricción de datos o decisión de diseño? Determina si H1 es corregible o estructural.
5. **¿Cuál es la métrica de éxito?** No hay ninguna declarada.

**Altos**

6. **¿Qué pasa con "Mi Ahorro A Futuro" y el otro simulador pensional ya existente?** Skandia ya tiene ≥2 simuladores pensionales vivos.
7. **¿La audiencia son clientes o prospectos?** Define si los 5 segmentos son el panel correcto.
8. **¿Existe analítica del sitio público (Google Analytics) con reparto de dispositivo y embudo por paso?** Resolvería el alcance de H7 y daría datos de abandono real, si existe.
9. **¿El nuevo simulador comparte servicios de cálculo con el simulador de Retiros?**, que falla para el 8,9% de sus usuarios (§1b). En el sitio público ese fallo se paga más caro.
10. **Si los simuladores hoy viven en la app móvil** (10.013 usuarios, sin equivalente en portal web), **¿por qué el nuevo va al sitio público y cómo se relacionan?**
11. **¿Qué se hace con el PDF de resultado?** ¿Alguien del lado comercial lo recibe, o muere en el dispositivo del usuario?
12. **¿Cuándo estará disponible la analítica de clientes por segmento** (edad, saldo, canal) para dimensionar el panel de testeo con cifras propias?

**Medios**

13. ¿Se probó accesibilidad formalmente? (ver hallazgos de auditoría automatizada en la heurística).
14. ¿Se validó la fórmula de cálculo con Actuaría? El research valida comprensión, no exactitud — pero si las cifras están mal, el testeo mide la reacción a un dato falso.
15. ¿El apilamiento del sidebar en móvil viene del breakpoint de Liferay o del componente? Cambia a quién se le asigna el fix.
16. Abrir a mano en Dovetail: `Informe Ahorro Futuro` (Provokers) y `Benchmark Rediseño Portal Clientes`.

---

## Síntesis

El prototipo tiene problemas de usabilidad serios y corregibles, pero el hallazgo dominante no es de usabilidad. Su premisa central —comparar RAIS vs RPM para informar una decisión— apunta a una decisión que dejó de existir el 16 de julio de 2026, bajo un marco legal que se reemplaza el 1 de abril de 2027, en un vocabulario que la propia evidencia de Skandia muestra que los usuarios ya abandonaron. El comportamiento real en el portal de clientes confirma además que el dato que el Paso 2 exige es difícil de encontrar incluso para quien lo busca activamente.

Antes de medir si la gente puede usarlo, hay que decidir si debe existir en esta forma. El testeo que sigue a este documento está diseñado para producir esa evidencia sin esperar a que esa decisión se tome.

---

## Fuentes

**Regulatorio** (verificado de forma independiente por el equipo)
- [Corte Constitucional publicó sentencia sobre la reforma pensional — Infobae, 15-sep-2026](https://www.infobae.com/colombia/2026/09/15/corte-constitucional-publico-sentencia-que-avalo-gran-parte-de-la-reforma-pensional-de-petro-congreso-debera-corregir-varios-articulos/)
- [El sistema pensional a partir de la Ley 2381 de 2024 y la Sentencia C-264 de 2026 — Ámbito Jurídico](https://www.ambitojuridico.com/noticias/laboral/analisis-el-sistema-pensional-colombiano-partir-de-la-ley-2381-de-2024-y-la)
- [Reforma pensional: así cambió el plazo para entrar al régimen de transición — El Colombiano](https://www.elcolombiano.com/negocios/regimen-transicion-reforma-pensional-corte-constitucional-FC40352315)
- [Ministerio de Trabajo: el plazo para el traslado vence el 16 de julio de 2026 — El País](https://www.elpais.com.co/economia/traslado-de-regimen-pensional-entra-en-su-recta-final-mas-de-159000-afiliados-ya-solicitaron-el-cambio-1021.html)
- [El 16 de julio es la fecha límite para trasladarse de régimen pensional — Ámbito Jurídico](https://www.ambitojuridico.com/noticias/laboral/el-16-de-julio-es-la-fecha-limite-para-trasladarse-de-regimen-pensional)
- [Ley 2381 de 2024 — Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=246356)

**Benchmark**
- [Simulador Colpensiones](https://sede.colpensiones.gov.co/calculadora_rpm/simulador.html) · [Historia Laboral — Colpensiones](https://www.colpensiones.gov.co/pensiones/publicaciones/127/consultar-y-entender-la-historia-laboral/)
- [Simulador Sin Bono — Colfondos](https://www.colfondos.com.co/dxp/personas/pensiones-obligatorias/simulador-de-pension/simulador-de-pension-sin-bono) · [Reforma pensional Ley 2381 — Colfondos](https://www.colfondos.com.co/dxp/personas/pensiones-obligatorias/ley-2381)
- [¿Con cuánto voy a pensionarme? — Protección](https://www.proteccion.com/contenidos/persona/pension/simulador-con-cuanto-voy-pensionarme/) · [Simulador Pensional — Porvenir](https://www.porvenir.com.co/en/web/simuladorpensional)
- [Mi Ahorro A Futuro — Skandia](https://portal.skandia.com.co/sites/simuladores/simulator.php?simulator=miAhorroAFuturo) · [Historia Laboral — Skandia](https://www.skandia.co/fondo-pensiones-obligatorias/historia-laboral)
- [Retirement Income Calculator — Vanguard](https://investor.vanguard.com/tools-calculators/retirement-income-calculator) · [Retirement Score — Fidelity](https://www.fidelity.com/calculators-tools/fidelity-retirement-score-tool)
- [On Track for Retirement? — arXiv 2005.01692](https://arxiv.org/pdf/2005.01692) · [UX Design for Seniors — NN/g](https://www.nngroup.com/reports/senior-citizens-on-the-web/)
