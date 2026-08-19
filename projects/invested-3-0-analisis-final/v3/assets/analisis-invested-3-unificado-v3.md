# Invested 3.0 — Informe final de investigación
**UXplorers · Investigación mixta Entender + Validar · Julio–Agosto 2026**
*Versión 3.0 · Informe consolidado de las cuatro fuentes de evidencia*

> ✅ **Estado: informe final.** Consolida todo el cuerpo de evidencia del sprint y reemplaza a las versiones anteriores (`analisis-invested-3.md`, `analisis-invested-3-stakeholders.md`, `analisis-invested-3-final.md` v1.1 y `analisis-invested-3-unificado.md` v2.0), que quedan archivadas y consultables.
>
> La investigación se levantó en **cuatro momentos** que responden preguntas distintas y se complementan: una prueba remota a escala, y tres rondas de entrevistas con perfiles que no se solapan —quien usa el servicio, quien lo abandonó y quien lo vende—. Ninguna de las cuatro es concluyente por sí sola; las cinco hipótesis del brief se cierran con la lectura conjunta.

> ### 📌 Qué cambió desde la versión que vieron los stakeholders en julio
> La versión de julio cerró con dos salvedades explícitas: faltaba la voz del cliente que se fue disgustado, y faltaba la del canal comercial. **Las dos están cerradas.** Tres cosas cambiaron con ellas:
> - **El mecanismo de la deserción no era el que suponíamos.** No se van por silencio: se van porque comparan la rentabilidad contra un referente concreto y pierden la comparación (§5.7).
> - **El desempeño comparado dejó de ser un supuesto y pasó a ser una condición.** Cliente y canal llegan a la misma conclusión por caminos independientes (§5.7, §9 · Nivel 0).
> - **Dos recomendaciones de julio se corrigen**, no se refuerzan: la proyección basada en históricos (§4 · H1) y la salvaguarda del desbloqueo progresivo (§4 · H3).
>
> Todo lo demás de julio se sostiene y sale reforzado. Los veredictos de las cinco hipótesis no cambiaron de signo.

---

## Cómo leer este informe

### Las cuatro fuentes de evidencia

| Fuente | Cuándo | Alcance | Qué responde bien | Qué **no** puede responder |
|---|---|---|---|---|
| **① Prueba remota** (Useberry) | Julio 2026 | 53 respuestas · 30 completas | ¿Funciona el flujo? ¿Dónde se abandona? ¿Qué proporción entiende algo? | El porqué, y cualquier cosa sobre el servicio real: se probó un prototipo |
| **② Ronda 1 · clientes** | Julio 2026 | 5 entrevistas (4 activos + 1 inactivo amistoso) | ¿Cómo vive el servicio quien lo usa hoy? ¿Qué espera, y con qué palabras? | Cuánta gente vive lo mismo; y la voz de quien se fue molesto |
| **③ Mini-sprint · detractores** | 5 de agosto 2026 | 3 entrevistas (Bloque 1B) | ¿Cómo y por qué se toma la decisión de salir? ¿Contra qué se compara? | Cuánta gente se va así; y el detractor de baja alfabetización financiera |
| **④ Ronda 3 · asesores (FP's)** | 11–18 de agosto 2026 | 3 entrevistas | ¿Por qué se recomienda o no el producto? ¿Qué pasa **antes** de la venta? | **Lo que siente el cliente**: cuando un asesor reporta a sus clientes, es testimonio indirecto |

**Cómo se citan.** Cada evidencia va atribuida a su fuente con los símbolos ①②③④ y, en las entrevistas, con nombre propio. Los porcentajes provienen **siempre** de la prueba remota; las entrevistas nunca se reportan en porcentaje (§2).

### Glosario

| Término | Qué significa |
|---|---|
| **Useberry** | Plataforma de pruebas remotas: enviamos el prototipo a la comunidad de testers y cada persona lo navega sola, sin moderador, respondiendo tareas y preguntas. |
| **Dovetail** | Repositorio donde guardamos y analizamos las entrevistas y hallazgos de investigación. |
| **Prototipo** | Versión navegable (no real) del nuevo Invested, usada en las tres rondas de entrevistas y en la prueba remota. |
| **SEQ** (*Single Ease Question*) | "Pregunta única de facilidad": al terminar cada tarea, la persona califica qué tan fácil le resultó. |
| **H1 a H5** | Las 5 hipótesis definidas en el brief, que aquí se confirman, se refutan o quedan parciales. |
| **Mezcla** | Nombre que hoy recibe la combinación de portafolios que Invested arma para cada persona. (Como se verá, el nombre es en sí mismo un hallazgo.) |
| **Gamificación** | Usar dinámicas de juego —niveles, logros, recompensas— dentro de un servicio para motivar su uso. |
| **Rebalanceo** | Ajuste que hacen los expertos a la combinación de portafolios cuando cambia el mercado. |
| **Cliente inactivo** | Persona que activó Invested alguna vez y luego lo desactivó. |
| **Detractor** | Cliente insatisfecho. Puede haberse ido ya (*desertor consumado*) o seguir dentro evaluando salir (*detractor en riesgo*). |
| **Referente de comparación** | El producto contra el cual se mide si Invested vale la pena: el Fondo Liquidez de la propia Skandia, un CAT, un fondo individual, un competidor. |
| **Financial Planner (FP)** | Asesor comercial de Skandia. Es quien recomienda —o no— Invested al cliente. |
| **Portal Contigo** | Portal que usan los asesores para gestionar y analizar las carteras de sus clientes. Distinto del portal de clientes. |
| **Contrato autogestionado** | Contrato donde asesor y cliente arman la estrategia manualmente, sin Invested. Es hoy la alternativa que compite con Invested dentro de la propia Skandia. |
| **CAT** | Producto de tasa fija de Skandia. Referente frecuente en el momento de la venta. |
| **Tester** | Persona de la comunidad de pruebas de Skandia que participa en las pruebas remotas. |

---

## 1. Resumen ejecutivo

**Pregunta central de la investigación:** ¿De qué manera podemos demostrar que Invested genera valor para el cliente más allá de las rentabilidades?

**La respuesta, después de todo el campo:** sí se puede, y el rediseño acierta en casi todo lo que se propuso. Pero ese valor adicional funciona como **amplificador de un desempeño aceptable, no como sustituto de uno malo**. El servicio tiene un piso de rentabilidad comparada por debajo del cual ninguna cantidad de acompañamiento, educación o notificaciones sostiene la relación — ni con el cliente que ya está dentro, ni con el asesor que decide si lo ofrece.

### Hallazgos principales

**1 · La activación rediseñada funciona: la fricción ya no está en el flujo, está en la información que falta.**
Las cuatro fuentes coinciden. El 91% de los testers completó la activación y el 81% la calificó "muy fácil" ①; los clientes de la ronda 1 la puntuaron 5/5 —*"facilísimo, muy intuitivo"*— ②; los tres detractores la calificaron 9, 9 y "muy fácil" pese a su insatisfacción con el servicio ③; y los tres asesores la validaron al recorrerla, Alejandra con un *"está muy amigable… permite llevar un paso al otro súper fácil"* ④. Que un mismo flujo reciba nota alta de un usuario satisfecho, de uno que se fue molesto y de un profesional escéptico es la señal más limpia del informe.

**2 · Lo que falta es la información que sostiene la decisión: rentabilidad esperada, proyección y rentabilidad propia.**
Es el vacío más repetido de toda la investigación, y cada fuente lo formula en su propio lenguaje. En la prueba remota: *"esperaba encontrar tasas promedio"*, *"me faltó que me indicara la tasa de rendimiento esperada"*, *"ahorrando el monto que me sale no gana intereses y esto desmotiva el ahorro"* ①. María Angélica lo pide en términos de vida: *"la figurita de yo viejita: a partir de acá, renta mensual de tanto… uno dice, vale la pena"* ②. Humberto lo pide con especificación técnica —período variable *"desde el momento de la activación"* y desglose por fondo— y advierte que tampoco existe en el portal actual ③. Juan Felipe cierra el círculo desde el canal ④. **Cuatro confirmaciones independientes** hacen de la rentabilidad propia con período variable el requisito mejor sustentado del informe.

**3 · La comunicación proactiva en caídas es la palanca más sólida — y ya conocemos su techo y sus fugas.**
El 94% encontró y entendió la notificación con facilidad, y la respuesta dominante es esperar, no retirar ①. Produce el efecto emocional buscado: *"me tranquilizó: dice qué pasó, si es normal, que ya están analizando y me avisarán"* (María Angélica ②), *"te hace sentir que no estás solo"* (Juan Daniel ②). Los detractores reaccionan bien incluso desde el disgusto ③, y los tres asesores hacen hoy, a mano, exactamente lo que la notificación busca producir ④. Sus tres límites: **techo**: evita el retiro impulsivo, no la salida razonada por desempeño ③; **fuga hacia el cliente**: la campanita vive en la aplicación y quien se desenganchó no entra ③; y **fuga hacia el canal**: el asesor no está en el circuito, y dos de tres no saben si el correo de rebalanceo llega a su cliente ④.

**4 · "Mezcla" no se entiende, y la perfilación no se ve.**
Al menos cuatro testers rechazan o no entienden el término ①; Paola creyó que "activos fijos" eran sus ingresos y María Angélica no decodifica "RV" ②; Humberto buscó dónde revisar su perfil y no lo encontró ③. Y el canal lo lleva al extremo: **dos de los tres asesores no logran nombrar su propio perfil de riesgo** —*"son 7 nombres… discreto, audaz. Para mí deberían ser números"*, Juan Felipe ④—. Si el profesional no puede nombrarlos, el cliente no tiene ninguna posibilidad. La pantalla que declara *"tu perfil de inversionista está vigente"* sin decir cuál es acumula cuatro impactos independientes.

**5 · La gamificación motiva, pero no sustituye la rentabilidad — y hay una línea que no se debe cruzar.**
El 86% encuentra motivador el desbloqueo y el 88% valora ver logros ①, pero nadie la compra como sustituto: *"a la hora del té lo importante es que la plata esté moviéndose bien"* (Juan Daniel ②), *"para mí eso es indiferente"* (Julián ③). Y sobre la mecánica concreta de *aprender para desbloquear más riesgo* se acumulan tres objeciones independientes y de distinta naturaleza: **idoneidad** —María Eugenia ③ y Juan José ④ llegan por separado al mismo argumento: el cliente que en las buenas se cree agresivo cambia de perfil y se lleva la sorpresa en la caída—; **mensaje** —*"¿cómo así, entonces yo tenía que perder plata para poder ser de otro perfil?"*, Juan Felipe ④—; y **público** —a quién atrae el mecanismo ④—.

**6 · Lo que predice la reacción al desbloqueo no es la edad ni el conocimiento: es tener un proceso de decisión propio.**
La ronda 1 lo mostró primero, con nombre: los novatos lo reciben como andamiaje —la mezcla desbloqueada genera más confianza porque la entienden— y los conocedores como restricción injustificada ②. Los detractores, todos con criterio construido, lo rechazaron los tres ③. Los asesores —el caso extremo de criterio propio— lo rechazan o lo acotan a otros ④. **Ninguno de ellos pidió que le enseñaran; todos pidieron que les explicaran las decisiones que se toman con el dinero.** Pedagogía no es lo mismo que rendición de cuentas.

**7 · La educación construye tolerancia a la volatilidad, no tolerancia al bajo desempeño sostenido.**
Para María Angélica la educación es el criterio de confianza con el que decide —*"quiero el ABC de las finanzas, con manzanitas, sin sentirme tonta"* ②— y ese valor es real. Pero los tres detractores la valoran en abstracto y **ninguno afirma que habría cambiado su salida**: *"todo realmente lo que uno quiere al final son resultados"* (Julián ③). El único caso donde una explicación sí retuvo fue humana, en conversación y con un compromiso verificable detrás — no una cápsula ③. Los asesores añaden que la pedagogía es también su territorio: *"para eso estamos un poquito nosotros"* ④.

**8 · El rebalanceo es la caja negra más grande del servicio — y es el momento en que el servicio sí está trabajando.**
Tres testers pidieron explicación de los rebalanceos ya hechos ①, los usuarios de la ronda 1 y los Financial Planners de 2025 venían pidiendo lo mismo, y Humberto lo formula sin adornos: *"vamos a rebalancear, vamos a rebalancear… pero no que me diga: ahora pasamos del 2,3% de acciones Colombia al 2,5%. Que te cuenten"* ③. Es la prueba de vida del servicio, y hoy se comunica de una forma que la desperdicia. **Con una advertencia previa que aporta el canal:** antes de rediseñar la pieza hay que saber cuál se envía y a quién ④.

**9 · Quien se va, se va porque comparó y perdió — y el referente que gana suele ser otro producto de Skandia.**
Los tres detractores llegaron a la salida por la misma ruta ③.

| | Rentabilidad de Invested | Referente contra el que comparó |
|---|---|---|
| **María Eugenia Cataño** | 3,55% E.A. desde 2015 (3,20% E.A. en el corte que revisó), con **perfil agresivo** | Índices de renta fija, MSCI, inflación, y los portafolios de Protección |
| **Humberto Cañón** | 3,72% E.A. desde 2021, con perfil **agresivo global** | El **Fondo Liquidez de la propia Skandia**: 5,93% E.A., riesgo casi nulo |
| **Julián Pinzón** | Pérdidas sostenidas durante ~1 año en dos portafolios | El CAT de Skandia y el fondo Impacto, ambos de la casa |

**10 · El canal hace la misma comparación antes de la venta, y por eso el producto no se está ofreciendo.**
A los tres asesores se les preguntó, de forma consistente, qué tan cómodos se sienten recomendando Invested de 1 a 5: **Juan Felipe respondió 2, Alejandra "un 2, 3" y Juan José 3** — y Juan José mantuvo el 3 después de recorrer el prototipo completo ④. Sus referentes son los mismos de la casa: los fondos individuales, Wealth, Ideas de Inversión, Liquidez Colombia, el CAT. Juan José llegó a la sesión con la comparación ya hecha en Portal Contigo. **Los detractores nos enseñaron cómo se pierde un cliente; los asesores, por qué muchos nunca entran.**

**11 · Cliente, canal y research previo nombran el mismo mecanismo: la sobre-diversificación aplana los extremos del perfil.**
Humberto describe Invested como *"una mesa de dinero metiendo mi plata dentro de las mesas de dinero de Skandia"* sin beneficio visible ③. Juan Felipe: *"veo 15 portafolios dentro de una misma estrategia… eso no tiene ningún sentido"*, y los perfiles más arriesgados *"tienen un 40, un 50% en renta fija"* ④. Juan José: *"la más arriesgada de Invested no necesariamente es la más arriesgada"* ④. Es además lo que los Financial Planners ya habían dejado en Dovetail en 2025. Cuatro fuentes convergen en un diagnóstico **falsable con los datos que la organización ya tiene**.

**12 · Dos barreras que ninguna pantalla resuelve, y que solo el canal podía mostrarnos.**
La primera: **Invested es todo-o-nada dentro del contrato.** No se puede tener una parte en Invested y otra en un CAT o en liquidez; los tres asesores lo levantaron sin que se les preguntara ④, y explica retroactivamente por qué Julián tuvo que salirse por completo para diversificar ③. La segunda: **la encuesta de perfilación se manipula por rutina** —*"me toca repetir las respuestas 3 veces hasta que por fin salga la que queremos"* ④—, lo cual invalida la salvaguarda sobre la que se apoyaba la recomendación de desbloqueo progresivo.

**13 · El asesor humano es la red de seguridad transversal — y su ausencia también se siente.**
Ante una duda o una caída, la reacción es "hablo con mi asesor" en las once entrevistas y en ~15 respuestas del test ①②③④. Paola solo pudo actualizar su portafolio porque *"el asesor me guió paso a paso… tenía que mandarme pantallazos"* ②, y Julián nunca activó Invested por sí mismo ③ — lo que ancla el objetivo del rediseño en un problema real. Pero María Eugenia describe el otro lado: *"el asesor dejó de mirarnos hace muchos días, no nos volvió a citar a una reunión de portafolio"* ③. Y nadie gestionó ninguna de las tres salidas.

**14 · La marca sobrevive al producto: hay ventana, y tiene precio declarado.**
Los tres detractores siguen siendo clientes de Skandia y separan con nitidez la marca del servicio ③. Los tres asesores dicen lo mismo en positivo y nombran la condición exacta para cambiar de opinión: *"la idea de Invested es brutal… debería ser nuestra principal opción"* (Juan Felipe, que hoy tiene el 5% de su cartera allí *"y eso debería ser el 80%, el 70%"*), *"si el desempeño yo viera la diferencia, diría que vale 5"* (Juan José) ④. **Es una posición de retirada, no de hostilidad.**

### Recomendaciones clave (detalle en §9)

- **Escalar el desempeño comparado, la sobre-diversificación y la arquitectura del contrato** como decisiones de producto previas al lanzamiento. Son las tres únicas cuyo incumplimiento invalida a las demás.
- **Añadir proyección de crecimiento y rentabilidad esperada** en "Ver mi mezcla", con simulador meta–plazo–cuota — con rangos prospectivos por perfil, **no** extrapolados de históricos.
- **Mostrar la rentabilidad propia acumulada desde el primer aporte**, con selector de período y desglose por portafolio.
- **Completar la notificación de caída y sacarla de la aplicación**; sumar al asesor como destinatario.
- **Convertir el aviso de rebalanceo en una explicación de estrategia** — auditando antes qué pieza se envía y a quién.
- **Renombrar o explicar "mezcla"**, eliminar siglas, sustituir los nombres de perfil por una escala numérica y mostrar cuál es el mío.
- **Desbloqueo progresivo con puerta de salida, nunca atado al cambio de perfil de riesgo** — y con agencia explícita en lugar de un candado que ya está abierto.
- **Mostrar el desempeño contra un referente** dentro del propio material de Invested.
- **Crear un protocolo de salida gestionada.**

---

## 2. Metodología

| Fuente | Planeado | Ejecutado | Instrumento |
|---|---|---|---|
| **① Prueba remota** (Useberry, sin moderador) | 30–50 testers | **53 respuestas · 30 completas (57%)** · 18 min 28 s promedio | Parte 2: encuadre + 3 tareas + concepto + cierre |
| **② Ronda 1 · clientes** (Teams, 45 min) | 9–12 (4–6 activos, 5–6 inactivos) | **5 realizadas**: 4 activos + 1 inactivo de perfil "amistoso" | Parte 1 del instrumento v3.0 |
| **③ Mini-sprint · detractores** (Teams) | 2–3 | **3 realizadas** ✅ | Parte 1B (Bloque Detractor), v3.1 |
| **④ Ronda 3 · asesores** (Teams, 25–36 min) | — | **3 realizadas** ✅ | Sin bloque documentado (ver limitaciones) |
| **Total cualitativo** | 9–12 | **11 entrevistas** | — |
| **Prototipo** | — | Navegable ([shine-style-workbench.lovable.app](https://shine-style-workbench.lovable.app)) | — |
| **Análisis** | Dovetail | *Entrevistas Invest-ed 2.0* · *Invest-ed 3.0 Detractores* (88 highlights) · *Invested 3.0 FP´s* (77 highlights) · informe Useberry | — |

### ② Ronda 1 · clientes (julio 2026)

| Participante | Perfil | Relación con Invested |
|---|---|---|
| **Camilo Zuzunaga** | 26, ingeniero civil. Conocimiento financiero alto | Activo. Activó acompañado de su asesora |
| **María Angélica Hurtado** | 38, enfermera. **Conocimiento financiero bajo** — la voz de quien empieza | Activa |
| **Juan Daniel Fajardo** | 25, docente e ingeniero biomédico. Conocimiento medio-alto | Activo |
| **Paola Andrea Rodríguez** | 26, diseñadora | Activa. Actualizó su portafolio solo con guía del asesor por pantallazos |
| **Sebastián Piedrahita** | 26, médico general, Rionegro–Antioquia | **Inactivo — deserción "amistosa"**: prefiere la gestión manual con su asesor. Sin disgusto |

### ③ Mini-sprint · detractores (5 de agosto de 2026)

| Participante | Perfil | Vínculo | Situación |
|---|---|---|---|
| **María Eugenia Cataño López de Mesa** | Pensionada. **30 años de carrera en bolsa de valores** (22 en Grupo Bancolombia y Valores Bancolombia). Abrió la oficina de la fiduciaria Skandia en Medellín. Perfil agresivo | Desde 2015. Descubrió el desempeño real el 13 de noviembre de 2025; canceló el 25 | **Desertora consumada — hostil** |
| **Humberto Cañón** | 56 años. Vicepresidente de planeación y logística; especialización en finanzas. Cerca de **$1.200 millones** en fondos voluntarios de Skandia. Perfil agresivo global | Entró el 1 de febrero de 2021 con $100 millones | **Detractor en riesgo — sigue dentro** |
| **Julián Pinzón** | 43 años. Ingeniero de sistemas; vendió su empresa y hoy invierte de tiempo completo. Diplomado en bolsa | Dos portafolios durante ~1 año | **Desertor consumado.** Migró a CAT e Impacto |

### ④ Ronda 3 · asesores (11 al 18 de agosto de 2026)

| Participante | Fecha | Perfil y cartera | A quién le ofrece Invested | Comodidad recomendándolo (1–5) |
|---|---|---|---|---|
| **Juan José** | 11 ago | Asesor veterano — *"los que llevamos aquí unos añitos"*. Cartera heterogénea, muchos clientes de PAC institucional. Analiza desempeños en Portal Contigo | Al ahorrador periódico; perfiles del intermedio hacia arriba | **3** (inicialmente *"3 o 2,5"*). Sin cambio tras ver el prototipo |
| **Juan Felipe** | 14 ago | Asesor de agencia. Mayoría en **Mfund autogestionado**; negocios puntuales más que aporte periódico. Dos clientes grandes en Invested desde hace ~2 años | A quien aporta montos pequeños y no justifica gestión manual | **2** |
| **Alejandra** | 18 ago | Asesora; ella y su esposo trabajan con Skandia. Usa Portal Contigo para entender posiciones | A clientes nuevos e inexpertos, conservadores con curiosidad | **"un 2, 3"** |

### ① Muestra de la prueba remota

35 de 40 correos únicos identificados en la base de la Comunidad de Testers. Edades entre 26 y 61 años (mediana ≈ 37), con representación de mayores de 50 —relevante porque el propósito "retiro" les habla distinto—. Mayoría clientes Skandia (FPOB el producto más común; ~8 con MFUND/FIC/CAT); dos declaran *"no sé exactamente qué productos tengo"*, dato en sí mismo. **El 100% se declara "bastante" o "muy" cómoda con herramientas digitales**, y **el 72% no había usado Invested antes** — la muestra remota lee mayormente como *prospecto interno*.

### Jerarquía de evidencia

Mezclar las cuatro fuentes sin distinguirlas produciría conclusiones falsas. Dos reglas gobiernan todo el documento:

1. **Los porcentajes son solo de la prueba remota.** El 91% de activación, el 81% de facilidad, el 88% de logros, el 86% de desbloqueo, el 94% de la notificación, el 90% de comprensión: todos provienen de las 53 respuestas de julio y **no se recalcularon** en ninguna ronda posterior. Las entrevistas se reportan con nombre propio o conteo explícito —"los tres coinciden", "cuatro confirmaciones independientes"—, nunca en porcentaje.
2. **Voz del cliente ≠ voz del canal.** Cuando un asesor reporta lo que dicen sus clientes es **testimonio indirecto**: cuenta como evidencia de lo que el asesor cree —y por tanto de cómo actúa en la venta—, pero no confirma un hallazgo de cliente. Va marcado como tal en el texto.

### ⚠️ Limitaciones vigentes

- **Muestra pequeña en las tres rondas cualitativas.** Cinco, tres y tres entrevistas prueban que algo *existe* y muestran *cómo funciona*; no dicen *a cuánta gente le pasa*. Dimensionar cualquiera de estos hallazgos requiere medición cuantitativa.
- **Las tres calificaciones de comodidad de los asesores (2 / "2,3" / 3) no son una métrica**, sino tres respuestas individuales a una pregunta consistente del moderador.
- **Sesgo digital en la prueba remota.** El 100% de la muestra identificada se declara cómoda con herramientas digitales: **no representa al usuario digitalmente incómodo**, y los SEQ altos deben leerse con ese sesgo.
- **Sesgo hacia alta alfabetización financiera en el segmento detractor.** Los tres son inversionistas sofisticados. **Falta la voz del detractor neófito** (perfil CX-SAC 2025) — la única brecha de evidencia que queda abierta.
- **Uno de los tres detractores no es, técnicamente, un desertor.** Humberto sigue con el servicio activo: su testimonio es el de la decisión en curso, más útil para diseñar retención y menos para entender la salida consumada.
- **Tres asesores no describen al canal.** Juan Felipe reporta lo que oye en su agencia (*"hay unos que ni siquiera tienen ningún cliente, no les gusta, punto"*): sugiere que el patrón excede la muestra, no lo demuestra.
- El SEQ se configuró de 0 a 5 en Useberry (el instrumento preveía 1–7): se reporta como porcentaje en niveles altos y no es comparable con referentes de industria.
- 3 testers reportaron errores técnicos del prototipo (404, "no me dejó volver atrás", cierre de conexión) que pudieron inflar el abandono de la Tarea 2 (15%).

---

## 3. Antecedentes (investigación previa en Dovetail)

La memoria acumulada ya contenía buena parte de la explicación, y esta investigación la confirma en el desenlace y la corrige en la causa.

- **CX-SAC (2025), clientes que salieron:** *"Yo a Invested no volvería ni loco. Ya me tuvieron un año en pérdida"* · *"Éramos completamente neófitos… Invested era una computadora en la que meten un dato y ya"* · *"Salimos súper aburridos casi con la idea de sacar toda nuestra inversión de Skandia"*. Patrón registrado entonces: **entrada sin comprensión + pérdidas sin explicación + silencio = deserción**.
- **Gestión de portafolios con Financial Planners (2025):** Invested *"demasiado diversificado"*, *"reacciona tarde"* en las caídas, portafolios difíciles de entender. Los FP's canalizan tanto la entrada como la salida del servicio.
- **Monitor para Financial Planners (2025):** *"A veces esa gestión tan buena parece que fuera invisible… acaso les llega un correo y no le ponen atención."* — el hallazgo semilla de esta investigación. Los FP's pedían detalle de rebalanceos y simuladores de proyección: **lo mismo que hoy piden los usuarios finales.**
- **Gestión de portafolios con clientes (2025):** proceso de inversión tedioso (~10 min), interfaz poco ágil, rebalanceos que no finalizan por restricciones de horario.

**Qué corrige esta investigación.** El patrón de CX-SAC describía bien la experiencia pero atribuía la causa al eslabón equivocado. La frase *"ya me tuvieron un año en pérdida"* es literalmente la experiencia de Julián ③ — pero el detonante primario es el **desempeño comparado**; el silencio es el agravante que convierte una pérdida en agravio.

**Qué confirma.** Las tres quejas de los FP's de 2025 reaparecen textualmente en agosto de 2026 ④, un año después y sin que nada se haya movido — ahora acompañadas de una consecuencia comercial que en 2025 no se había registrado: el asesor no está llevando clientes al producto. Y la observación de Humberto como cliente ③ —*"una mesa de dinero metiendo mi plata dentro de las mesas de dinero de Skandia"*— es la misma frase que la de Juan Felipe como asesor, dicha desde los dos lados del mostrador.

---

## 4. Análisis por hipótesis

> Cada hipótesis abre con lo que aporta cada una de las cuatro fuentes, y sigue con la lectura conjunta.

---

### H1 · "La forma de mostrar rentabilidades frena la activación" — ✅ CONFIRMADA
*El rediseño resuelve el flujo; el vacío de información sigue abierto y ya está documentado con evidencia suficiente.*

| Fuente | Qué aporta |
|---|---|
| **① Prueba remota** | El flujo funciona: **91% de éxito** en la Tarea 1 (41 de 45), **81% "muy fácil"**. Pero el vacío informativo es el más repetido del test: *"esperaba encontrar tasas promedio"*, *"me faltó que me indicara la tasa de rendimiento esperada"*, *"puse 200 millones y no fue claro cuál es esa proyección"*, *"ahorrando el monto que me sale no gana intereses y esto desmotiva el ahorro"*. Un tester experto pide simular por cuota: *"los ahorradores tenemos más clara la cantidad disponible mensual que una meta y un plazo… esperaba simular el resultado con una cuota a un plazo"*. El aporte sugerido ($555.556) no es modificable ni simulable |
| **② Ronda 1 · clientes** | Activación 5/5 unánime. Y el contraste con el journey real: Paola solo pudo actualizar su portafolio porque *"el asesor me guió paso a paso… tenía que mandarme pantallazos"*; Camilo activó acompañado de su asesora. Piden la proyección en dos lenguajes distintos: Paola, *"faltaría ver cómo va a crecer tu dinero"*; María Angélica, en términos de vida — *"la figurita de yo viejita: a partir de acá, renta mensual de tanto"*. **Sebastián** aporta el primer caso de rentabilidad propia: quiere ver el rendimiento de lo que él específicamente aportó |
| **③ Detractores** | Califican la activación 9, 9 y "muy fácil". Y muestran que el mismo vacío opera **después** de activar: es lo que impide ver si va bien. Humberto especifica el requisito —selector de período *"desde el momento de la activación"*, rentabilidad **por fondo**— y señala que *"ahorita en el portal de Skandia no deja ver cuál ha sido la rentabilidad total de un portafolio desde que inició"*. María Eugenia suma la **comisión**: *"veo cuánto me rentó, cuánto me cobraron de comisión"* es su rutina de revisión en la aplicación de Protección |
| **④ Asesores** | Cuarta confirmación independiente, con la especificación completa (Juan Felipe): *"ver el comportamiento del saldo total, que yo lo pueda filtrar en el periodo que quiera, y la rentabilidad tanto de la estrategia general como de cada uno de los portafolios"*; y confirma que hoy *"para el cliente es muy difícil ver qué rentabilidad ha tenido su portafolio, casi que no encuentra la información en el portal"*. **Y una objeción al *cómo*:** la proyección extrapolada de históricos *"le va a terminar jugando en contra del cliente"*. Juan José detecta dos defectos de consistencia en el prototipo |

**Interpretación.** La hipótesis nació de un diagnóstico correcto: cuando la rentabilidad se muestra mal —pérdidas sin contexto, cifras sin proyección—, frena la activación y alimenta la deserción. El rediseño eliminó la fricción del flujo, pero al omitir la rentabilidad esperada, la personalizada y el costo, deja la decisión a ciegas o directamente desmotiva (*"no gana intereses"*).

Las cuatro fuentes convergen en el mismo requisito, y la última añade su condición: **el dato mal construido es peor que su ausencia.** Si la proyección extrapola un histórico que hoy es pobre, el propio producto entrega al cliente el argumento para no activarlo — *"un cliente arriesgado al 7%, y un CAT me está pagando el 13%"*.

**Oportunidad.** Un paso "Ver mi mezcla" con proyección de capital basada en **rangos prospectivos por perfil**, rentabilidad histórica con su aclaración legal, composición **por portafolio además de por tipo de activo**, y simulador de tres entradas (meta, plazo, cuota — cualquiera despeja la tercera). En el detalle del contrato: curva de saldo con selector de período incluida la opción "desde mi primer aporte", rentabilidad por portafolio y comisión visible. Aplica al prototipo, al portal actual y a Portal Contigo.

---

### H2 · "Una propuesta educativa genera mayor permanencia" — 🟡 PARCIALMENTE CONFIRMADA
*Con frontera acotada: sabemos en qué condiciones funciona y en cuáles no.*

| Fuente | Qué aporta |
|---|---|
| **① Prueba remota** | **88%** califica alto la utilidad de ver logros y aprendizajes; ante *"¿usarías más el servicio tras ver esta idea?"*, **68%** en niveles altos y **30% neutral**. Los contenidos más pedidos son exactamente los que amortiguan la volatilidad: interés compuesto, *"la importancia de entender las caídas y mantenerse en el plan"*, cuándo conviene el rebalanceo. Señal de contraste: *"el componente de educación en InvestED es atractivo"* (usuaria que dejó otra plataforma por falta de información) frente a *"veo el mismo tablero, no veo cuál es el aprendizaje"* |
| **② Ronda 1 · clientes** | Aquí la división por alfabetización aparece con nombre propio. **María Angélica** (conocimiento bajo): la educación es su **criterio de confianza** — *"todas las vías de educación financiera tratan de venderte un producto… quiero el ABC de las finanzas, con manzanitas, sin sentirme tonta"*. **Paola**: *"muchas veces por desconocimiento uno simplemente acepta y ya"* — aprender le daría criterio para validar lo que el sistema propone, y declara que sí usaría más el servicio. **Camilo** (conocedor) encuentra las cápsulas superficiales, *"frases muy puntuales"*, y zanja: *"con ver el desempeño ya es suficiente"*. **Juan Daniel**: útil e interesante, *"pero lo importante es que la plata se mueva"* |
| **③ Detractores** | La frontera dura. Los tres la valoran en abstracto —María Eugenia con entusiasmo: *"esa formación libera de la preocupación de hacer las cosas bien… nada más rico que un cliente conocedor"*— y **ninguno afirma que habría cambiado su salida**. Julián: *"independientemente de que le puedan mostrar a un cliente como yo cómo funciona el tema de las caídas… todo realmente lo que uno quiere al final son resultados."* **El único caso donde una explicación sí retuvo:** a Julián le asustaron los números rojos de su CAT, se sentó con su asesor, le explicaron que la tasa pactada se paga igual, *"y dije: ah bueno, si hay esa seguridad, entonces sí"*. Funcionó porque venía de un humano, en conversación, con un compromiso verificable — no era una cápsula |
| **④ Asesores** | Acotan por curiosidad y edad. Alejandra: *"lo noto más en los chicos que empiezan a ahorrar, el más inquieto, de 'yo quiero aprender más'. Por ahí me parece súper chévere. Cuando es la persona más adulta, que dice 'no tengo ni idea de esto y no me interesa', pensaría que no llegaría hasta este punto. Me parece para jóvenes."* Y un **conflicto de rol**: Juan Felipe reivindica la pedagogía como valor propio — *"chévere tenerlo de cursos, pero no debería ser algo que esté pegado en Invested. Finalmente, para eso estamos un poquito nosotros"* |

**Interpretación.** La educación construye **tolerancia a la volatilidad**: la capacidad de sostener una caída sin retirar, que es el mecanismo exacto de la deserción histórica. No construye **tolerancia al bajo desempeño sostenido**, que es un juicio económico y no una carencia de comprensión. Los detractores no se fueron por no entender — se fueron precisamente **porque entendieron**: María Eugenia comparó contra el MSCI, Humberto contra el Fondo Liquidez con dos decimales. Educar a ese perfil no lo retiene: lo vuelve mejor comparador.

Su valor percibido es máximo donde la ronda 1 lo mostró —el que empieza, donde es criterio de entrada y de confianza— y marginal en el conocedor si el contenido es superficial. Y el matiz del canal conviene incorporarlo al diseño en lugar de discutirlo: si la pedagogía general compite con el asesor, la explicación de *este* rebalanceo, hoy, lo apoya.

**Implicación.** La educación conserva todo su valor para el perfil que empieza y debe seguir en el alcance. Pero **no puede figurar en el caso de negocio como palanca de retención frente al cliente insatisfecho por desempeño**: presentarla así crearía una expectativa que la evidencia no respalda.

**Oportunidad.** Cápsulas ancladas a eventos reales del contrato (*"tu mezcla cayó 3% — entiende por qué"*), con dos profundidades (ABC visual para quien empieza / tesis de inversión para el avanzado) y explicación no tautológica de la mezcla. Y, tomando la lección del CAT: cuando lo que está en juego es la confianza, el canal que funciona es el humano con un compromiso verificable detrás.

---

### H3 · "La gamificación puede sustituir la rentabilidad como motor de retención"
*❌ REFUTADA como sustituto · ✅ válida como complemento · ⛔ con una restricción de idoneidad*

| Fuente | Qué aporta |
|---|---|
| **① Prueba remota** | Como motivador funciona: **43% muy motivador + 43% algo motivador**; solo **3%** lo encuentra frustrante. La mayoría confiaría más en una mezcla desbloqueada que en una entregada de entrada: *"primero adquirí los conocimientos… me daría seguridad para decidir"*. Como sustituto, no: *"en realidad es una gamificación de la plataforma y la verdad ingreso es a ver mi rendimiento… llamarían mi atención si dieran premios o beneficios"*. Y el sistema no es legible: *"estaba en nivel observador pero no vi la escala ni qué se requiere"* |
| **② Ronda 1 · clientes** | Aquí nace el eje que ordena toda la hipótesis. Los novatos lo reciben como andamiaje —modelo "Duolingo": la mezcla desbloqueada genera más confianza porque la entienden—; los conocedores lo leen como restricción injustificada: *"si ya está la perfilación y la advertencia, las mezclas deberían estar desde el inicio"*. **Juan Daniel**: *"directamente no [me haría quedarme]… a la hora del té lo importante es que la plata esté moviéndose bien"*, y señala el riesgo operativo: quien no tiene tiempo y quiere cambiar de mezcla *"pero tiene que hacer esto… incómodo o maluco"*. **Camilo** declara indiferencia total al nuevo visual. El primer dato que busca el 100% de los entrevistados en el tablero es **rendimiento/saldo** |
| **③ Detractores** | Lo confirman en los términos más duros del estudio. Julián: *"para mí eso es indiferente."* Humberto: *"no me hagas perder el tiempo si ya soy un perfil agresivo… no necesito otra vez ganar puntos para decir cámbiame todo a dólares"*, y separa con precisión las dos cosas que hoy vienen unidas: *"como aprendizaje está bien, pero que no sea un aprendizaje necesario para desbloquear perfiles."* **⛔ Y María Eugenia levanta la restricción de idoneidad**, desde treinta años de oficio: *"los perfiles de riesgo van amarrados a la personalidad… es peligrosísimo el cliente que en los buenos momentos se siente agresivo, y cuando el mercado vuelve a su realidad se acuerda que es conservador. Yo no estimularía ese ajuste en perfiles de riesgo"* |
| **④ Asesores** | **Tercera voz independiente sobre idoneidad.** Juan José, sin conocer la entrevista de María Eugenia, reproduce su argumento: *"si lo pongo como algo aspiracional… puede estar cambiando de perfil de riesgo y se va alejando de lo que es su realidad. Y cuando haya una caída, ahí es donde se lleva una sorpresa."* Y dos objeciones que no estaban documentadas: el **mensaje perverso** —*"el cliente se va a sentir incómodo: ¿cómo así, entonces yo tenía que perder plata para poder ser de otro perfil?"* (Juan Felipe)— y el **público** que atrae el mecanismo, frente a un negocio cuyo cliente rentable está por encima de los $30 millones. **Y el hallazgo que rompe la salvaguarda:** la encuesta de perfilación se manipula por rutina (§5.9) |

**Interpretación.** La gamificación no compite con la rentabilidad en la jerarquía de motivos: opera un nivel abajo, dando sensación de progreso y control mientras la rentabilidad hace su trabajo de largo plazo. Los hitos con más tracción no son los de actividad de la aplicación sino los **hitos del dinero**: porcentaje de meta alcanzado, "el primer millón", la primera caída superada sin retirar.

Lo que la evidencia posterior añade no cambia el veredicto: cambia el fundamento de la restricción. La mecánica de *aprender para desbloquear más riesgo* acumula **tres objeciones independientes de distinta naturaleza** —idoneidad ③④, mensaje ④ y público ④—, y **el candado que se proponía como alternativa está abierto**: la encuesta de perfilación, sobre la que el informe de julio hacía descansar la protección, se manipula de forma rutinaria.

**Implicación.** El desbloqueo progresivo se mantiene como andamiaje **para explorar mezclas dentro del perfil ya establecido**, como camino sugerido con puerta de salida, y **desacoplado por completo del cambio de perfil de riesgo**. Pero la protección no puede delegarse en la encuesta: hay que dar **agencia explícita** —mostrar la mezcla recomendada junto al listado completo, con advertencias— y auditar la repetición de la encuesta antes de una activación. Y el hito *"superaste una caída sin retirar"* debe reformularse para no premiar la pérdida.

---

### H4 · "La comunicación proactiva en volatilidad reduce retiros" — ✅ CONFIRMADA
*El hallazgo más sólido de la investigación, hoy con techo y con dos fugas de canal identificadas.*

| Fuente | Qué aporta |
|---|---|
| **① Prueba remota** | **94%** calificó fácil encontrar y entender la notificación, y la respuesta dominante es **esperar, no retirar**: *"entiendo que las fluctuaciones son normales y mi objetivo es de largo plazo, no tomaría decisiones apresuradas"*. Canales preferidos (n=32): **WhatsApp ~19** y **correo ~18** dominan; SMS 4; **nadie pidió llamada**; piden elegir canal desde la aplicación. Dos señales de hallabilidad: un tester no vio la notificación, otro sugiere mover la campanita |
| **② Ronda 1 · clientes** | El mensaje ya produce el efecto emocional buscado: **María Angélica**, *"me tranquilizó: dice qué pasó, si es normal, que ya están analizando y me avisarán"*; **Juan Daniel**, *"nuestro equipo ya está evaluando el rebalanceo… te hace sentir que no estás solo"*. **Aquí se construye la anatomía completa del mensaje** que este informe recomienda: magnitud (*"¿cuánto bajó?, ¿qué portafolio?"*), causa, plazo de decisión, cierre del ciclo y acción disponible — María Angélica llega a proponer opciones A/B/C del mismo nivel de riesgo más botón de asesor. Y la **regla de dosis**: sobre-notificar produce la ansiedad del *"junkie de eToro"*; contactar solo cuando hay algo que saber o decidir |
| **③ Detractores** | Reaccionan bien incluso desde la insatisfacción. María Eugenia: *"esto me parece una machera, porque te desliga de estar haciendo ese seguimiento atento… el inversionista es muy cíclico"*. Humberto: *"yo estaría bien con la notificación, sabiendo que están evaluando si van a hacer algún rebalanceo"*. **Y aportan los dos límites: 🔻 el techo** —Julián: *"una caída se puede soportar, pero con la repetición mes a mes en el año sí va a generar desconfianza y uno cambiar de portafolio"*— **y 🔻 la fuga hacia el cliente** —María Eugenia: *"esa campanita sí es muy chévere, pero eso me implica abrir la cuenta; si no abrí la cuenta no veo la campanita. No sé si ese mismo mensajito se pudiera llegar por SMS"*—. Julián aporta el **contrafactual directo**: no recibía notificaciones, *"lo que yo evaluaba era el extracto"*, y decidió leyendo extractos en silencio |
| **④ Asesores** | **Confirmación conductual:** los tres ejecutan hoy, a mano, exactamente lo que la notificación busca producir. Juan José: *"usualmente cuando caen los portafolios, pues aguante, aguante… es tratar de darle esa tranquilidad"*, y llama de forma proactiva a quien sabe nervioso. Alejandra: *"los dejo antes quietecitos"*. Juan Felipe aporta la **técnica del encuadre en la venta**: a dos clientes que entraron en septiembre de 2024 les dijo *"dele tiempo a la estrategia, no esperen resultados inmediatos"*; cuando llegó la caída y le preguntaron *"¿usted qué hizo?"*, el encuadre sostuvo. **Y 🔻 la segunda fuga:** ninguno mencionó recibir aviso cuando el mercado cae y sus clientes quedan expuestos — el canal no está en el circuito. Además, **dos de los tres no saben si el correo de rebalanceo llega al cliente** (§5.8) |

**Interpretación.** La notificación proactiva convierte la gestión invisible en acompañamiento percibido: es exactamente el "valor más allá de la rentabilidad" que busca esta investigación, y el más barato de implementar. Su función correcta es **evitar el retiro impulsivo y comprar tiempo para que la estrategia trabaje**. Si en ese tiempo la estrategia no entrega, la notificación no salva la relación — y eso es un problema de producto, no de comunicación.

El canal comercial ilustra el techo mejor que nadie: **los mismos asesores que contienen bien a sus clientes en las caídas son los que califican su comodidad recomendando el producto en 2 y 3.** Contener funciona; no gana el argumento.

**Oportunidad.** Anatomía completa del mensaje: qué pasó y cuánto, por qué, qué se está haciendo, cuándo se decide, aviso de cierre con la decisión tomada, y botón "hablar con mi asesor". Entrega **fuera de la aplicación** —correo y WhatsApp, con SMS para el perfil desenganchado— y la campanita como refuerzo, no como canal único. **Con el asesor como destinatario paralelo**, con la lista de sus clientes afectados. Y una regla de dosis: contactar solo cuando hay algo que saber o decidir.

---

### H5 · "La diferenciación entre mezclas es clave para percibir valor" — 🟡 PARCIALMENTE CONFIRMADA
*Es el vehículo correcto del valor percibido; hoy lo bloquean seis puntos.*

| Fuente | Qué aporta |
|---|---|
| **① Prueba remota** | Cuando se entiende, funciona: **90%** calificó fácil entender cómo va su inversión, y la pantalla "¿Por qué esta mezcla?" se lee — *"está la explicación de por qué se seleccionan esos portafolios"*, *"diseñada según mi objetivo, tiempo y perfil"*. Pero el **lenguaje** falla: al menos cuatro testers rechazan o no entienden el término (*"no me gusta ese nombre, un poco rudo… combinación, composición"*, *"no entiendo a qué se refiere con mezcla"*, *"el botón 'Ver mi mezcla' es raro"* ×2). La **perfilación no se registra**: *"no me hizo un análisis de perfil previo"*, *"no hubo parte para crear o cambiar ese perfil"*. Y tres piden **agencia**: *"deberían darme opción de cambiar los porcentajes"* |
| **② Ronda 1 · clientes** | El fallo de lenguaje con sus casos extremos: **Paola** creyó que "activos fijos" eran sus ingresos; **María Angélica** no decodifica "RV". Y la petición que define el estándar de contenido: la explicación tiene que ser **real, no tautológica** — *"no me digas 'la hiciste así porque quieres inversión a largo plazo'… dime por qué estas acciones amortiguan aquellas"*. **Juan Daniel**: cambiar mezcla es *"lo más útil de todo"*. **Camilo** pide **stop-loss configurable** por mezcla, y lo repite tres veces: *"estoy dispuesto a que bajen máximo a 90, 95… y no esperar a que me digan que se perdió"* |
| **③ Detractores** | Validan la composición cuando la leen: María Eugenia la contrastó con su perfil sin ayuda —*"guarda lógica esa relación… sí se acomoda al perfil"*— y elogió la presentación: *"me mostró muy didácticamente la participación; cuando yo trabajo con esas tortas, esas porciones son muy claras."* Humberto confirma la perfilación invisible: buscó dónde cambiar su perfil y no lo encontró en el flujo. **Y añaden el cuarto bloqueo: la opacidad del rebalanceo** — *"vamos a rebalancear, vamos a rebalancear… pero no que me diga: ahora pasamos del 2,3% de acciones Colombia al 2,5%. Que te cuenten"* (§5.8) |
| **④ Asesores** | **El lenguaje falla incluso con profesionales.** Juan José: *"hemos tenido tantas palabras que definen los perfiles de riesgo… los cambian cada cierto tiempo. Ya ni sé cuál es."* Juan Felipe: *"son 7 nombres… discreto, audaz. Eso es para mí muy enredado. Para mí deberían ser números: el 1 el más conservador, el 7 el más arriesgado. Si tú miras grandes gestores, BlackRock, lo trabajan con números."* Ambos tropiezan con la misma pantalla —*"tu perfil de inversionista está vigente"*— y piden lo mismo: decir cuál. **Y dos bloqueos nuevos:** la composición se muestra por tipo de activo y no por portafolio (*"yo no tomaría nunca la decisión sin saber qué portafolios de inversión"*), y **el cliente puede no saber que está en Invested** (§5.10) |

**Interpretación.** La diferenciación de mezclas sí es el vehículo del valor percibido —"fue pensada para mí"—, pero se pierde en **seis puntos**:

| # | Bloqueo | Fuentes |
|---|---|---|
| 1 | **Lenguaje**: "mezcla", siglas RV/RF, nombres de perfil impronunciables | ① ② ③ ④ |
| 2 | **Perfilación invisible**: el flujo no muestra cuál es mi perfil | ① ③ ④ (cuatro impactos independientes en la misma pantalla) |
| 3 | **Falta de agencia**: ver, comparar, ajustar, poner un límite | ① ② ③ |
| 4 | **Opacidad del rebalanceo**: se comunica que ocurrió, no por qué | ① ③ ④ + FP's 2025 |
| 5 | **Composición sin portafolios**: solo por tipo de activo | ④ |
| 6 | **Reconocimiento del servicio**: puede que el cliente no sepa que lo tiene | ④ |

Los cinco primeros presuponen que el cliente sabe qué está mirando; el sexto pone esa premisa en duda, y por eso es el más grave. Sin resolverlos, la mezcla se percibe como caja negra — *"una computadora en la que meten un dato y ya"*, exactamente la frase del research previo.

**Implicación.** Es la hipótesis donde el diseño de contenido tiene más impacto por peso invertido, y la que más se beneficia del cambio estructural del rediseño: al vivir dentro del portal y del contrato, Invested gana una presencia permanente que hoy no tiene.

**Oportunidad.** Renombrar o glosar "mezcla" en su primera aparición; eliminar siglas; **sustituir los nombres de perfil por una escala numérica con descriptor** y mostrar cuál es el vigente en la pantalla que lo declara; composición por portafolio además de por tipo de activo; comparador de mezclas con selección directa tras la perfilación; explicación causal de la composición; y rediseñar la comunicación de rebalanceo tras auditar qué se envía.

---

## 5. Hallazgos transversales (fuera de hipótesis)

### 5.1 Momentos de quiebre en el flujo de activación

El brief pedía identificar al menos tres. Se identificaron **dieciséis**, aportados por las cuatro fuentes.

| # | Momento | Fuente |
|---|---|---|
| 1 | **Entrada: la tarjeta de Invested compite con el contrato "Potenciar mi inversión".** Un tester fue a la opción más resaltada (la equivocada): *"el hecho de estar resaltado Invest-ED más que el contrato me hizo ir a la opción que no era"*. El botón "Gestión experta disponible" *"se veía como texto informativo y no un hipervínculo"* | ① (×2) |
| 2 | **Paso 1: el propósito no se identifica a la primera y "Ver mi mezcla" desconcierta.** *"No esperaba que me preguntaran el propósito, fue valioso pero no lo identifiqué a la primera"* | ① |
| 3 | **Paso 2: la mezcla aparece sin proyección, sin rentabilidad esperada, sin perfilación visible y con siglas.** Percibido como denso por quien empieza: *"formulario impactante, mucha información intimidante… me sentí en un banco digital"* | ① ② |
| 4 | **Paso 3: el aporte sugerido no se puede modificar y las aclaraciones legales angustian a quien empieza.** *"$555.556 sugerido… no vi desde dónde se podía modificar"* (×2). El aviso de que puede desactivar dispara a María Angélica: *"listo, las desactivo ¿y yo qué hago? Más oportunidades tengo de meter la pata yo sola"* | ① ② |
| 5 | **El logotipo con las letras "ED" tachadas confunde.** *"Que tachen la ED del logo me parece contraproducente… se pierde actitud"* | ① (×2) |
| 6 | **"Conocer y activar" es ambiguo:** no se sabe si informa o ejecuta | ③ |
| 7 | **No hay camino visible para revisar o cambiar el perfil de inversionista** dentro del flujo | ③ ④ |
| 8 | **La meta y el plazo configurados no quedan visibles después.** María Eugenia los buscó en "Movimientos" antes de dar con la barra de progreso | ③ |
| 9 | **La sección "Detalles" no se entiende por su nombre** — y al abrirla contenía justo lo que se buscaba | ③ |
| 10 | **"Tu perfil de inversionista está vigente" no dice cuál es.** *"No sé qué significa que esté vigente… pero ¿cuál es?"* (Juan José); *"sería bueno que te apareciera el perfil"* (Juan Felipe) | ④ (×2) |
| 11 | **Inconsistencia numérica entre pantallas:** 8% de rentabilidad esperada en el simulador, 7,5% en "Ver mi mezcla" | ④ |
| 12 | **La proyección supera la meta configurada y no lo explica.** Meta $500M → proyección $1.227M: *"mi esfuerzo debería ser menos"* | ④ |
| 13 | **La composición se muestra por tipo de activo y no por portafolio:** *"yo no tomaría nunca la decisión sin saber qué portafolios de inversión"* | ④ |
| 14 | **La torta de composición usa cinco verdes casi idénticos:** *"tenemos 5 protagonistas con el mismo color"* | ④ |
| 15 | **La pantalla de entrada no orienta la primera acción:** *"¿Qué hago aquí?"* | ④ |
| 16 | **La pantalla de composición es donde muere la venta.** Alejandra lo describe dos veces: *"cuando llegamos a la activación y salen que uno es los portafolios y el otro son los activos… ahí es donde se me retroceden muchos clientes"*, y *"ahí se me devuelven muchos… entonces quedémonos en liquidez o vámonos por un CAT"*. Es el quiebre #3 visto desde el canal, y el único con desenlace comercial observado | ④ (×2) |

### 5.2 Encontrar "Logros y aprendizaje" cuesta trabajo
Solo el **37%** de los testers encontró la sección "muy fácil"; al **31%** le costó; dos nunca llegaron ①. María Angélica intentó entrar por el lugar equivocado: *"las apps te muestran todo en una pantalla… esto de subir y bajar ya no se usa"* ②. La sección vive dentro de "Objetivo", lo cual tiene lógica para quien la encuentra —Juan Daniel: *"está ligado directamente con el objetivo"* ②— pero el camino no es evidente. En las dos rondas posteriores, **los seis entrevistados necesitaron indicación explícita del moderador** para llegar ③④.

### 5.3 El asesor humano es la red de seguridad transversal
Ante una duda o una caída, la reacción es "hablo con mi asesor" en las once entrevistas y en ~15 respuestas del test remoto. Tres matices que aportan fuentes distintas:
- **El asesor es la puerta de entrada real.** Paola solo pudo actualizar su portafolio con guía por pantallazos ②; Julián nunca activó Invested por sí mismo: *"siempre el asesor es el que me ha hecho el favor"* ③. Esto ancla el objetivo del rediseño —reducir la dependencia del asesor para activar— en un problema real y observado.
- **El chatbot no lo sustituye para todos.** Genera rechazo explícito en el perfil que empieza —*"que no sea el chatbot, ese me la vuela"* (María Angélica ②)— aunque tres testers jóvenes sí lo piden ①. El acceso al humano debe permanecer a un clic.
- **Su ausencia es parte de la historia de salida.** María Eugenia: *"el asesor dejó de mirarnos hace muchos días, no nos volvió a citar a una reunión de portafolio"* ③. En contraste, elogia sin reservas al equipo de apoyo —*"las niñas que acompañan a los asesores son muy buenas, son unos fosforitos"*—: la calidad del servicio de apoyo no compensa la ausencia del acompañamiento de portafolio.

### 5.4 Ideas espontáneas de los usuarios que se repiten

| Idea | Quién la pide |
|---|---|
| **Rentabilidad propia desde el primer aporte**, con período variable | Sebastián ②, Humberto ③, María Eugenia ③, Juan Felipe ④ — **cuatro confirmaciones** |
| **Explicar los rebalanceos ya hechos**: qué cambió, cuánto y por qué | ① (×3), ③, ④, y los FP's en 2025 |
| **Gráfica de desempeño en curvas** (aportes vs. valor total) en lugar de barras | ① (×2), Juan Daniel ②, Juan Felipe ④ |
| **Poder cambiar los porcentajes de la mezcla** | ① (×3), Juan Daniel ② |
| **Límite de pérdida configurable** (*stop-loss*) | Camilo ② (×3) |
| **Mensajes de motivación accionables**: *"si incrementas tu cuota en $100.000, el tiempo para tu meta se reduce a X años"* | ① |
| **Rentabilidad desglosada por portafolio** dentro de la mezcla | Humberto ③, Juan Felipe ④ |
| **Comisión visible** junto a la rentabilidad | María Eugenia ③ |
| **Documentos y certificados a la mano** (certificado tributario del FPV) y botones aportar/retirar visibles | ② |
| **Aportes automáticos programados** | ① |
| **Recordatorio de aporte mensual por SMS** | María Eugenia ③ |
| **Acceso rápido tipo aplicación bancaria**: huella o rostro y el dato clave en la primera pantalla | María Eugenia ③ |
| **Bajar la jerarquía de la cuenta contingente** | María Eugenia ③ |
| **Escala numérica de riesgo (1 a 7 o 1 a 10) en lugar de nombres** | Juan Felipe ④ |
| **Elegir la mezcla del listado tras la perfilación**, sin repetir la encuesta | Juan José ④ |
| **Asignación parcial de Invested dentro de un mismo contrato** | Los tres asesores ④ |
| **Paleta con más contraste en la composición** | Juan Felipe ④ |
| **La opción visible de desactivar genera confianza, no fuga** | ① (×2), María Eugenia ③ |

### 5.5 Comportamiento de la prueba remota
De 53 sesiones, 30 completaron el recorrido (57%). Caídas mayores: 4 personas en la Tarea 1 y 6 en la Tarea 2, donde se reportaron los 3 errores técnicos del prototipo. El abandono de la Tarea 2 (15%) debe interpretarse con cautela.

### 5.6 Tipología de clientes: el mapa completo
La investigación arranca con un solo tipo documentado y termina con cuatro.

| Tipo | Evidencia | Cómo se relaciona con el servicio | Qué necesita |
|---|---|---|---|
| **Desertor neófito** | CX-SAC 2025, sin entrevista propia | Entra sin comprender, sufre pérdidas sin explicación, sale molesto y en silencio | Comprensión y acompañamiento. **Único perfil donde la educación puede ser palanca de retención** |
| **Desertor amistoso** | Sebastián Piedrahita ② | Compara la gestión automática con el criterio de su asesor y elige al asesor. No hay daño ni disgusto | Una propuesta que compita con un criterio humano que ya le funciona. **Reactivable**: pidió ver la rentabilidad de sus propios aportes |
| **Detractor sofisticado** | María Eugenia, Humberto, Julián ③ | Mide contra un referente concreto y disponible, y se va cuando pierde la comparación | **Desempeño competitivo y transparencia de estrategia.** No reactivable con comunicación: *"al final el resultado ya se dio como se dio"* |
| **El cliente que nunca entró** | Inferido de las 3 entrevistas de canal ④ | No se va: **nunca llega** — el asesor no abre la conversación, o el cliente se devuelve en la pantalla de composición | Que el canal tenga argumento y que el producto permita convivir con el resto del catálogo. **Es el volumen que la investigación no había mirado** |

### 5.7 Quien se va compara contra un referente — y suele ser un producto de la casa
Los tres detractores construyeron su juicio con un punto de comparación explícito (tabla en §1). Humberto lo hizo con dos decimales contra el **Fondo Liquidez de Skandia**; Julián migró al **CAT** y al fondo **Impacto**, ambos de la casa, y con Impacto está satisfecho —*"si me llaman a una entrevista para Impacto, la entrevista sería diferente"*—; María Eugenia comparó contra índices de mercado y contra Protección ③.

**Y el canal hace la misma comparación antes de la venta** ④, con los mismos referentes internos. Juan José no lo dijo: lo mostró, compartiendo pantalla del Portal Contigo con la mezcla dinámica confrontada al fondo moderado — *"tienen una correlación pero no hay una gran diferencia por estar en Invested que en el moderado. Entonces, ¿qué hago? Yo esperaría que si me meto Invested le gane al moderado, al menos en un par de puntos, y no se ve."*

Tres lecturas de negocio:
- **Invested no compite contra el mercado: compite contra el resto del catálogo de Skandia** — en la cabeza del cliente y en la del asesor.
- **La comparación no ocurre solo a la salida.** Ocurre antes, en la cabeza de quien vende, y decide si la conversación llega a existir.
- **Si el material de Invested no muestra una comparación, el cliente construye la suya** — sin contexto de plazo, riesgo ni composición. Y el asesor ya construyó la suya.

### 5.8 El rebalanceo: la única comunicación regular del servicio, y no sabemos qué dice
Humberto describe la pieza que recibe como un ritual vacío ③: *"básicamente lo único que recibo de Invested son rebalanceos… me llegan correos cada vez que rebalancean, hoy me llegó uno. Pero no que me diga: ahora pasamos del 2,3% de acciones Colombia al 2,5%. Yo lo dejo hacer, pero no estamos cambiando porque pensamos que el dólar va a subir."* Y precisa la dosis que espera: *"no necesito que sea una cosa de 3 páginas. Que te cuenten."* María Eugenia describe lo mismo desde el otro lado: lo que la haría desconfiar es *"esa falta de cercanía para decirle al cliente: venga, esto no es la opción del mercado, ajustarlo a tiempo"* ③. En la prueba remota, tres testers pidieron exactamente eso: no solo la fecha del rebalanceo, sino qué cambió, en qué porcentaje y por qué ①.

**Pero el canal introduce una duda previa que hay que resolver antes de rediseñar nada.** Juan Felipe describe esa comunicación en términos entusiastas y con la razón incluida ④: *"venga, hicimos un rebalanceo de su portafolio por esta, esta y esta razón. Eso me parece bacanísimo que lo hagan. El cliente se siente muy bien acompañado"* — es decir, describe justamente lo que Humberto dice no recibir. Y los otros dos asesores no lo saben: Juan José, *"de hecho no sé si le llega al cliente, creería que sí, pero ese sí no estoy seguro"*; Alejandra se lo preguntó al equipo investigador en plena sesión.

**La contradicción aparente es en realidad un hallazgo mejor:** la organización no tiene claridad interna sobre qué comunica a quién. Lo más probable es que Juan Felipe describa la pieza que llega al asesor, o la conversación que él mismo tiene con su cliente.

**Implicación.** El rebalanceo es el momento en que Invested *sí* está trabajando: es la prueba de vida del servicio, y hoy se comunica de una forma que la desperdicia. Un aviso sin razonamiento no demuestra gestión experta; demuestra actividad. Es la pieza de mayor retorno por esfuerzo del informe —ya existe y ya se envía—, con un paso previo obligatorio: auditar qué se envía y a quién.

### 5.9 La perfilación no es la salvaguarda que suponíamos
Juan José describe, sin que se le pregunte y sin incomodidad, una práctica que trata como parte normal del oficio ④:

> *"A veces, en mi opinión como asesor, me toca llevar al cliente a que responda de X forma para llegar al portafolio Invested que yo quiero que llegue. Porque si él responde las preguntas por su cuenta, puede quedar en un Invested que no aguanta."*

Y sobre el cambio de mezcla: *"me toca repetir las respuestas 3 veces hasta que por fin ya eligió la que queremos."* Su propuesta de solución llegó espontáneamente: *"que al final me diga 'usted dio audaz', pero que me salgan también las otras, para que yo diga: la respuesta me llevó para allá, pero es que yo quiero es la otra."*

**La manipulación no nace de mala fe:** nace de que el asesor no confía en que el resultado de la encuesta produzca una mezcla adecuada — consecuencia directa de la sobre-diversificación (§5.11). Si los extremos están aplanados, responder honestamente lleva a un portafolio que el profesional considera inadecuado, y el profesional corrige el insumo para arreglar el resultado.

**Implicación.** El informe de julio cerraba su recomendación de desbloqueo progresivo con la frase *"el perfil de riesgo sigue dependiendo únicamente de la encuesta de perfilación"*. **Esa salvaguarda no opera hoy.** Dos frentes: de diseño, dar agencia explícita es más honesto y más seguro que un candado abierto; de gobierno, medir cuántas veces se repite la encuesta antes de una activación — es un dato que existe y que nadie mira.

### 5.10 La gestión invisible: ni el cliente ni el asesor tienen certeza de que Invested esté ahí
El hallazgo semilla de esta investigación —*"a veces esa gestión tan buena parece que fuera invisible"* (Monitor FP's 2025)— reaparece en su forma más directa. Juan José, preguntado por la satisfacción de sus clientes ④:

> *"Mi percepción es que yo no sé si ellos captan que al estar en Invested están con una gestión doblemente activa… él responde el cuestionario inicial, le dicen 'estoy aquí', pero sabe que está ya en una serie de fondos, no que está en algo puntual como Invested."*

Y añade el contraste que lo hace verificable: *"no veo que los que lo tengan me digan 'uy, está Invested y es mejor que yo manejar mis portafolios de manera individual'."* La prueba remota ofrece un eco indirecto: dos testers de la base declaran *"no sé exactamente qué productos tengo"* con Skandia ①.

**Implicación.** La pregunta central de esta investigación asume que el cliente sabe que tiene Invested. Si no lo sabe, no hay valor percibido que atribuirle, ni siquiera cuando el servicio hace bien su trabajo. El rediseño ayuda —al vivir dentro del portal y del contrato, Invested gana presencia visual permanente—, pero conviene medirlo explícitamente después del lanzamiento.

### 5.11 La sobre-diversificación: el mecanismo que nombran cliente, canal y research previo
Cuatro fuentes convergen en el mismo diagnóstico técnico, y ninguna atribuye el desempeño al mercado ni a la mesa de inversiones.

- **FP's 2025:** Invested *"demasiado diversificado"*, portafolios difíciles de entender.
- **Humberto ③:** *"para un fondo donde yo esperaba acceder a una estructura que pudiera manejar de una manera inteligente el dinero, lo han colocado de una manera que no entiendo"*, y describe el servicio como *"una mesa de dinero metiendo mi plata dentro de las mesas de dinero de Skandia"* sin beneficio visible.
- **Juan José ④:** *"cuando yo escojo la opción más conservadora ya se le va la mano en ser ultraconservadora. Y la más arriesgada de Invested no necesariamente es la más arriesgada"*; al ver la composición: *"tiene tanto en bonos, o X porcentaje en Liquidez Colombia… de pronto no es agresivo, de pronto es más moderado."*
- **Juan Felipe ④:** *"veo 15 portafolios de inversión dentro de una misma estrategia… eso no tiene ningún sentido"*; *"los niveles más arriesgados tienen un 40, un 50% en renta fija. No debería pasar"*; *"a veces el exceso de diversificación nos quita rentabilidad… casi que necesitamos 3 o 4 portafolios."*
- **Alejandra ④** reporta la objeción de sus clientes en el momento de la activación *(indirecto)*: *"ven, pero ¿por qué sí en liquidez?"* — con desenlace comercial: *"ahí se me devuelven muchos… quedémonos en liquidez o vámonos por un CAT."*

**Implicación.** El diagnóstico es concreto y **falsable con los datos de composición y desempeño que la organización ya tiene**: las mezclas de los extremos no expresan el perfil que dicen expresar. Escala fuera del alcance del rediseño.

### 5.12 Invested es todo-o-nada dentro del contrato
Es el único tema que los tres asesores levantaron de forma espontánea, en momentos distintos y con el mismo remedio propuesto ④.

- **Juan José:** *"cuando quiero poner una parte de Invested acá dentro, me toca hacer una parte operativa súper larga: desactivo Invested, meto al CAT, después cuando el CAT termine y cierre, otra vez vuelvo a meter a Invested. Administrativamente se vuelve un poquito gallo."*
- **Juan Felipe:** *"crear un contrato nuevo de un cliente ya existente es muy largo: la misma validación de identidad, adjuntar la declaración de renta. **No es un clic como inclusive la competencia lo tiene.**"* Su petición: *"yo quiero en Invested tener el 50% de ese contrato, y el otro 50% para CATs o una apuesta puntual, pero dentro del mismo contrato."*
- **Alejandra:** *"seguimos teniendo que solo en ese contrato puede estar Invested. No podemos combinarlo con —no sé— tengo 100 millones, 20 en liquidez y 80 en Invested del mismo contrato."*

**El cliente nunca ve esta fricción: la absorbe el asesor, y el asesor la evita no ofreciendo el producto.** También ilumina retroactivamente el caso de Julián ③: para migrar al CAT y a Impacto tuvo que salirse por completo — la arquitectura del contrato convierte cualquier diversificación fuera de Invested en una salida total.

### 5.13 Invested compite dentro de la casa también por autoridad
Juan Felipe describe una fragmentación del consejo de inversión ④: *"hay muchas recomendaciones para un mismo perfil: desde la mesa, para clientes Wealth, en Ideas de Inversión, y otra estrategia en Invested… no es que un cliente Wealth deba tener una distribución diferente a uno que apenas empieza. Deberían tener la misma distribución; simplemente tienen saldos distintos."* Y lo lleva a la pregunta operativa: *"tú coges un cliente moderado y tiene una recomendación de Invested, una de Ideas y una de Wealth. **¿A quién le hago caso?**"*

Cuando tres áreas de la misma casa emiten recomendaciones distintas para el mismo perfil, ninguna tiene autoridad plena, y el asesor arbitra con su propio criterio — que es exactamente lo que Invested venía a sustituir. Es una barrera de adopción que ninguna mejora del prototipo puede tocar, y una decisión que la organización puede tomar sin nueva investigación.

### 5.14 Nadie gestiona la salida
Ninguno de los tres detractores recibió una llamada, un correo o una pregunta al desactivar ③. María Eugenia lo dice con la autoridad de haber estado del otro lado del escritorio durante 30 años: *"a mí nunca me llamaron a decirme usted por qué se va. Porque yo sabía que ese ejercicio lo hacían las empresas cuando los clientes eran de tantos años."* Julián ya había respondido encuestas de satisfacción con calificaciones negativas —*"me había llegado un par de veces, ¿qué opinan de Invested? Los castigué por escrito"*— sin que nadie diera seguimiento.

Los tres agradecieron la conversación de forma espontánea al cierre. Julián: *"gracias sobre todo por el interés… la oportunidad de que puedan escuchar al cliente. Uno quiere que su proveedor esté muy atento, que no sea solo palabras."* María Eugenia: *"ya lloré, ya me quejé. Para eso era este espacio."*

**Implicación.** Hoy la desactivación es un evento silencioso en ambas direcciones. Ninguna palanca del rediseño lo cubre, y es la más barata de todas: una conversación. Además convierte una salida en información — hoy la organización no sabe por qué se va nadie.

### 5.15 La marca sobrevive al producto
El daño está contenido. Los tres detractores siguen siendo clientes de Skandia ③: Julián — *"Skandia es la confianza de construir el patrimonio a largo plazo… una empresa multinacional que tiene una trayectoria"*; Humberto mantiene allí cerca de $1.200 millones; María Eugenia mantuvo su inversión durante años *"por afecto"* y cierra recordando cuando abrió la oficina de Medellín: *"para mí fue lo máximo."*

Los tres asesores dicen lo mismo en positivo, y nombran la condición exacta ④: *"la idea de Invested es brutal… debería ser nuestra principal opción porque nos quita muchísimo tiempo de gestión de portafolio"* (Juan Felipe); *"tiene un potencial grandísimo… esperemos que Invested se vuelva más amigo de nosotros"* (Alejandra); *"si el desempeño yo viera la diferencia, diría que vale 5"* (Juan José).

**Hay ventana de recuperación, y es más ancha de lo que sugeriría el nivel de disgusto. Pero se sostiene sobre la marca, no sobre Invested — y el crédito de confianza que la marca aporta ya se gastó una vez.**

### 5.16 El costo importa tanto como el rendimiento
María Eugenia no separa una cosa de la otra ③: *"a mí Skandia fue mi primer trabajo, pero es muy caro. Yo sabía la calidad del trabajo de la gente en Skandia, era muy bueno, pero en los malos momentos yo comparaba los portafolios de Protección con los de Skandia, y decía: no se me justifica."* En su rutina de revisión la comisión aparece junto a la rentabilidad, y en el prototipo pidió que el dato de administración delegada esté visible. Es un factor que la investigación no había registrado y que pesa en la ecuación de valor.

---

## 6. Convergencias y divergencias entre las cuatro fuentes

### 6.1 Dónde coinciden las cuatro

Estos son los hallazgos más robustos del informe, porque sobreviven a métodos, momentos y perfiles distintos:

| Hallazgo | ① Remota | ② Ronda 1 | ③ Detractores | ④ Asesores |
|---|:--:|:--:|:--:|:--:|
| La activación rediseñada funciona | ✅ 91% | ✅ 5/5 | ✅ 9, 9, "muy fácil" | ✅ |
| Falta rentabilidad esperada y proyección | ✅ | ✅ | ✅ | ✅ |
| La rentabilidad propia con período variable es un requisito | — | ✅ Sebastián | ✅ ×2 | ✅ |
| "Mezcla" y las siglas no se entienden | ✅ | ✅ | ✅ | ✅ |
| La perfilación no es visible en el flujo | ✅ | — | ✅ | ✅ ×2 |
| La notificación de caída tranquiliza y evita el retiro impulsivo | ✅ 94% | ✅ | ✅ | ✅ conductual |
| La gamificación no sustituye la rentabilidad | ✅ | ✅ | ✅ | ✅ |
| El rebalanceo debe explicarse, no solo avisarse | ✅ ×3 | ✅ | ✅ | ✅ |
| El asesor humano es la red de seguridad | ✅ ~15 | ✅ | ✅ | ✅ |
| "Logros y aprendizaje" cuesta encontrarlo | ✅ 31% | ✅ | ✅ | ✅ |

### 6.2 Dónde se separan — y cómo se resuelve

Ninguna divergencia queda sin explicación. Todas resultan ser segmentación o problema de entrega, no contradicción de fondo.

| Tema | Quién dice qué | Lectura |
|---|---|---|
| **Desbloqueo progresivo** | ① y los novatos de ② lo encuentran motivador; ③ y ④ son indiferentes o lo rechazan | **No es contradicción: es segmentación.** La variable que predice la reacción no es la edad ni el conocimiento, sino tener ya un **proceso de decisión propio** |
| **Comunicación de rebalanceo** | Juan Felipe ④ la elogia con entusiasmo; Humberto ③ la llama ritual vacío | **Describen piezas distintas.** Dos de los tres asesores no saben cuál recibe el cliente (§5.8). La divergencia es la evidencia de un problema de entrega |
| **Educación** | Valor máximo en María Angélica ②; efecto retentivo nulo en ③ | **Frontera de perfil**, no desacuerdo: construye tolerancia a la volatilidad, no al bajo desempeño sostenido |
| **Proyección de rentabilidad** | ① y ② la piden con insistencia; Juan Felipe ④ advierte que mal construida juega en contra | **No se anulan: se complementan.** ①② definen el requisito; ④ define su condición de construcción |
| **Canal SMS** | ① lo deja en último lugar (4 de 32); María Eugenia ③ lo pide explícitamente | La medición se hizo sobre testers **enganchados**; subestima el canal para el perfil desenganchado, que es justamente quien más necesita el mensaje |
| **Chatbot** | Tres testers jóvenes ① lo piden; María Angélica ② lo rechaza de plano | Segmentación por alfabetización digital y financiera; el acceso al humano debe permanecer a un clic |

### 6.3 Qué ve cada fuente que las demás no pueden ver

| Fuente | Su aporte único al conjunto |
|---|---|
| **① Prueba remota** | **Escala y comportamiento sin moderador.** Dónde se abandona de verdad, cuánto cuesta encontrar algo, qué proporción entiende qué. Es la única fuente que produce cifras, y la única que observa a alguien decidiendo sin nadie mirándolo |
| **② Ronda 1 · clientes** | **El porqué de quien usa el servicio hoy, y el lenguaje con el que lo dice.** Es el único lugar donde la **baja alfabetización financiera** aparece con nombre propio y voz completa — María Angélica define buena parte del estándar de contenido de este informe. Y muestra el journey real: hoy activar depende del asesor |
| **③ Mini-sprint · detractores** | **El desenlace.** Cómo se construye la decisión de salir, contra qué se compara, y qué no la habría evitado. Es la única fuente que puede decir qué **no** funciona como retención, porque es la única que observó una retención fallida |
| **④ Ronda 3 · asesores** | **La visión de cartera y de catálogo, y lo que pasa antes de la venta.** La fricción operativa que el cliente nunca ve porque la absorbe el asesor; la competencia interna entre recomendaciones; qué comunicación llega efectivamente a quién; y si el cliente reconoce el servicio que tiene |

---

## 7. Segmentación por perfil

- **Muestra remota ①:** 35 de 40 correos identificados. Edad entre 26 y 61 años (mediana ≈ 37), con representación de mayores de 50 (61, 60, 55 y 50 años) — relevante porque el propósito "retiro" les habla distinto. El 100% de los identificados se declara cómoda con herramientas digitales: **no representa al usuario digitalmente incómodo**. El 72% no había usado Invested antes, así que los resultados leen principalmente como **experiencia de prospecto**.
- **La variable que ordena la tensión de H3 y H5 no es la edad: es el conocimiento financiero y, sobre todo, tener un proceso de decisión propio.** En la muestra remota los perfiles inversores piden agencia y datos técnicos, mientras los ahorradores piden explicación, acompañamiento y proyección de vida ①. La ronda 1 lo confirma con nombre: María Angélica pide el ABC, Camilo pide stop-loss ②. Y las dos rondas de agosto lo llevan al extremo: detractores y asesores, todos con criterio construido, rechazaron el desbloqueo ③④. **Pedagogía no es lo mismo que rendición de cuentas.**

**El eje del segmento que se va:**

| | **Detractor sofisticado** | **Detractor neófito** |
|---|---|---|
| Evidencia | 3 entrevistas, agosto 2026 ③ | CX-SAC 2025, sin entrevista directa |
| Por qué se va | Hizo la cuenta y perdió | No entendió y se sintió solo |
| Qué pide | Datos, transparencia de estrategia, comparación honesta, control del período de análisis | Explicación, cercanía, acompañamiento humano |
| Qué lo retiene | Desempeño competitivo — y rendición de cuentas mientras tanto | Comprensión y presencia |
| Qué **no** funciona | Educación básica, gamificación, insignias | Datos crudos sin contexto |
| Estado de la evidencia | ✅ Cubierto | ⚠️ **Brecha abierta** |

**A quién le ofrece Invested cada asesor ④** — y por qué esto conecta con la brecha anterior:

| | A quién sí | A quién no |
|---|---|---|
| **Juan José** | Ahorrador periódico; perfiles del intermedio hacia arriba | Quien busca una estrategia puntual o un CAT |
| **Juan Felipe** | Quien aporta montos pequeños de forma periódica y no justifica gestión manual | Cliente conocedor, autogestionado, o quien quiere CAT / Bitcoin / apuestas puntuales |
| **Alejandra** | Cliente nuevo e inexperto, conservador pero con ganas de experimentar | Quien ya conoce el mercado e invierte por su cuenta |

**La lectura conjunta es incómoda y vale la pena decirla:** los tres reservan Invested para el cliente de menor saldo y menor criterio — exactamente el **detractor neófito** que sigue sin voz directa en esta investigación, y el perfil que peor terminó en CX-SAC 2025. Es lo que eleva la prioridad de la recomendación 27.

---

## 8. Veredictos de cierre

| Hipótesis | Prioridad | Veredicto final | Cómo se construyó |
|---|---|---|---|
| **H1** · La forma de mostrar rentabilidades frena la activación | Crítica | ✅ **Confirmada.** El rediseño resuelve el flujo; falta incorporar proyección bien construida, rentabilidad esperada, rentabilidad propia con período variable y por portafolio, composición por portafolio y comisión visible | Las cuatro fuentes convergen en el vacío. La rentabilidad propia acumula **4 confirmaciones independientes** ②③③④. La única corrección viene de ④: la proyección no puede extrapolar históricos |
| **H2** · Educación → permanencia | Crítica | 🟡 **Parcial, con condición de frontera.** Construye tolerancia a la volatilidad, no tolerancia al bajo desempeño sostenido. Válida como palanca de retención **solo para el perfil que empieza** | ①② establecen su valor y su público; ③ fija el límite duro —ninguno afirma que habría cambiado su salida—; ④ afina la frontera por curiosidad y señala el conflicto de rol con el canal |
| **H3** · La gamificación sustituye la rentabilidad | Crítica | ❌ **Refutada como sustituto** · ✅ complemento motivacional · ⛔ **prohibido atarla al cambio de perfil de riesgo** | ① mide el atractivo; ② descubre que el eje es el proceso de decisión propio; ③ aporta la restricción de idoneidad; ④ la corrobora de forma independiente, añade dos objeciones — **y muestra que la salvaguarda propuesta en julio no opera** |
| **H4** · Comunicación proactiva en caídas reduce retiros | Alta | ✅ **Confirmada** — el hallazgo más sólido, con reacción positiva en las once entrevistas y confirmación conductual en el canal. Con **techo de efecto** y **dos fugas de canal** documentadas | ① mide; ② construye la anatomía del mensaje y la regla de dosis; ③ aporta el contrafactual, el techo y la fuga hacia el cliente; ④ confirma la conducta y aporta la fuga hacia el asesor |
| **H5** · Diferenciación de mezclas → valor percibido | Alta | 🟡 **Parcial.** Es el vehículo correcto del valor percibido; lo bloquean **seis** puntos: lenguaje, perfilación invisible, falta de agencia, opacidad del rebalanceo, composición sin portafolios y reconocimiento del servicio | ①② identifican los tres primeros bloqueos; ③ añade la opacidad del rebalanceo; ④ añade los dos últimos y muestra que el lenguaje falla incluso con profesionales |

---

## 9. Recomendaciones priorizadas

### Nivel 0 — condición de posibilidad

> Estas tres no las ejecuta el equipo UX. Van primero porque **el cumplimiento de las demás no produce adopción si estas no se resuelven**, y porque las tres tienen evidencia convergente de varias fuentes.

**R0.1 · [Crítica · producto] Escalar el desempeño comparado como decisión previa al lanzamiento.**
Cliente detractor ③ y canal ④ llegan por separado a la misma conclusión: Invested pierde la comparación contra alternativas de la propia casa. Tres asesores califican su comodidad recomendándolo en 2, "2-3" y 3. Es un dato de negocio, no de experiencia, y debe subir al comité correspondiente con las cifras que la organización ya tiene.

**R0.2 · [Crítica · producto] Revisar el número de portafolios por mezcla y la coherencia de los extremos del perfil.**
Evidencia convergente de cuatro fuentes: los FP's de 2025, Humberto ③, y los tres asesores ④. Diagnóstico específico y falsable: *"los niveles más arriesgados tienen un 40, un 50% en renta fija"*; *"la más arriesgada de Invested no necesariamente es la más arriesgada"*. Verificable contra los datos de composición existentes (§5.11).

**R0.3 · [Alta · producto y operaciones] Permitir asignación parcial de Invested dentro de un mismo contrato, y creación de contrato en un clic para cliente ya vinculado.**
Los tres asesores lo levantaron sin que se les preguntara, con el mismo remedio ④. Es la fricción que decide si la conversación de venta existe, y el rediseño no la toca. Con urgencia competitiva declarada: *"no es un clic como inclusive la competencia lo tiene"* (§5.12).

### Tácticas — ajustes al prototipo antes del lanzamiento

1. **[Alta · H1]** Proyección de crecimiento en "Ver mi mezcla" (curva de aportes frente a valor total, rentabilidad histórica con aclaración legal) y simulador meta–plazo–cuota con aporte mensual editable — **con rangos de rentabilidad esperada prospectivos y diferenciados por perfil, no extrapolados de históricos** ④. Corregir los dos defectos de consistencia detectados: la proyección que supera la meta sin explicarlo, y la rentabilidad esperada que cambia entre pantallas (8% → 7,5%).
2. **[Alta · H1]** Rentabilidad propia acumulada **desde el primer aporte**, con **selector de período variable** y **desglose por portafolio**, en curva de saldo y no en barras. Aplica al prototipo, al portal actual y a Portal Contigo. *Cuatro confirmaciones independientes: Sebastián Piedrahita ②, Humberto Cañón ③, María Eugenia Cataño ③ y Juan Felipe ④.*
3. **[Alta · H4]** Sacar la notificación de caída **fuera de la aplicación**: correo y WhatsApp como canales primarios y **SMS para el perfil desenganchado**, campanita como refuerzo, preferencias configurables. Completar la anatomía del mensaje: magnitud, causa, plazo de decisión, aviso de cierre con la decisión tomada y botón "hablar con mi asesor". **Sumar al asesor como destinatario paralelo**, con la lista de sus clientes afectados.
4. **[Alta · H5] Con paso previo obligatorio.** **Rediseñar el correo de rebalanceo** para que explique la lectura de mercado detrás del ajuste, no solo que ocurrió. Es el cambio de mayor retorno por esfuerzo: la pieza ya existe y ya se envía. Extensión sugerida por el propio cliente: *"no necesito que sea una cosa de 3 páginas."* **Paso previo: auditar qué pieza se envía hoy y a quién** (§5.8).
5. **[Alta · H5]** Sustituir o explicar "mezcla" y eliminar las siglas RV y RF; **sustituir los nombres de perfil por una escala numérica con descriptor**; **mostrar cuál es el perfil vigente** en la pantalla que hoy solo declara que lo está; explicación causal —no tautológica— de la composición.
6. **[Alta · H5]** Mostrar la composición **por portafolio además de por tipo de activo**.
7. **[Alta · quiebre #1]** Rediseñar la jerarquía de entrada: un solo camino evidente hacia la activación desde el contrato; que "Gestión experta disponible" parezca botón. Y resolver la desorientación de la primera pantalla (*"¿Qué hago aquí?"*).
8. **[Media]** Mantener meta y plazo visibles después de la activación, en el detalle del contrato.
9. **[Media]** Facilitar el acceso a "Logros y aprendizaje" desde el nivel superior del detalle, no solo dentro de "Objetivo"; escala de niveles visible.
10. **[Media]** Historial de rebalanceos explicado (qué cambió, cuánto y por qué); gráfica de desempeño en curvas en lugar de barras.
11. **[Media]** Comisión de administración delegada visible junto a la rentabilidad; bajar la jerarquía visual de la cuenta contingente.
12. **[Media]** Corregir la paleta de la composición: *"tenemos 5 protagonistas con el mismo color."*
13. **[Baja]** Renombrar "Detalles" y "Conocer y activar"; reevaluar las letras "ED" tachadas del logotipo; carpeta de documentos y certificados; aportes automáticos; recordatorio de aporte mensual por SMS.

### Estratégicas

14. **[H3/H5] Reescrita — su salvaguarda no existe.** El desbloqueo progresivo se mantiene como camino sugerido **con puerta de salida**, y **desacoplado del cambio de perfil de riesgo** ⛔ *(restricción de idoneidad, no de experiencia)*. Pero la protección no puede delegarse en la encuesta de perfilación:
    - **a) Agencia explícita en lugar de candado:** tras la perfilación, mostrar la mezcla recomendada **junto al listado completo**, con advertencias claras.
    - **b) Gobierno:** medir cuántas veces se repite la encuesta antes de una activación. El dato existe y hoy nadie lo mira (§5.9).
15. **[H3]** Reformular el hito *"superaste una caída sin retirar"* para que no premie la pérdida: *"¿cómo así, entonces yo tenía que perder plata para poder ser de otro perfil?"*
16. **[H2] Reformulada.** Educación por niveles, **anclada a eventos del contrato**, con dos profundidades y **dirigida al perfil que empieza**. No debe figurar en el caso de negocio como palanca de retención frente al cliente insatisfecho por desempeño. Diseñarla de forma que el asesor la reconozca como munición propia: la pedagogía general compite con él, la explicación de *este* rebalanceo lo apoya.
17. **[H4]** Política de comunicación por dosis, con preferencias de canal configurables (WhatsApp, correo, SMS). Contactar solo cuando hay algo que saber o decidir; escalar el contacto humano proactivo cuando la caída es severa o prolongada.
18. **[Alta · nueva] Protocolo de salida gestionada.** Que la desactivación dispare una conversación —llamada del asesor o del equipo de servicio dentro de las 72 horas— con una pregunta abierta y sin guion comercial. Beneficio doble: recupera relaciones que hoy se pierden en silencio, y convierte cada salida en información que la organización no tiene. Es la recomendación más barata del informe (§5.14).
19. **[Alta · nueva] Mostrar el desempeño contra un referente** en el material de Invested, con contexto de plazo, riesgo y composición. **Doblemente confirmada**: el cliente construye la comparación por su cuenta cuando el producto no se la da ③, y el asesor ya la construye a mano en Portal Contigo ④. Advertencia que ambos hacen explícita: hoy Invested perdería esa comparación — lo cual convierte a R0.1 y R0.2 en prerrequisito.
20. **[Alta · nueva] Habilitar al canal.** Kit de argumentación con la comparación honesta ya construida, y acceso desde Portal Contigo a la misma vista de rentabilidad por período y por portafolio que verá el cliente. **Condicionada a R0.1**: entregarle al canal una comparación que hoy pierde acelera el abandono en lugar de frenarlo.
21. **[Alta · nueva] Reescribir la promesa de valor del servicio.** *"Gestión experta… rebalanceada por expertos cuando el mercado cambia"* no la sostiene quien tiene que repetirla: *"es una gestión, insisto, como pasiva"* (Juan José ④). O el producto sube al nivel de la promesa, o la promesa se ajusta a lo que el producto entrega —diversificación disciplinada y rebalanceo sistemático—, que es defendible. La distancia actual no.
22. **[Media · nueva] Unificar o jerarquizar las recomendaciones internas.** Invested, Ideas de Inversión y Wealth emiten recomendaciones distintas para el mismo perfil: *"¿a quién le hago caso?"* (§5.13). Excede al equipo de experiencia y no requiere nueva investigación para decidirse.
23. **[Media · nueva] Medir la adopción del canal como indicador de producto.** Porcentaje de la cartera de cada asesor en Invested, antes y después del lanzamiento. Juan Felipe lo dio sin que se le pidiera —5% hoy— y el dato existe.
24. **[Media · nueva] Medir el reconocimiento del servicio.** Qué proporción de clientes activos sabe nombrar Invested como el servicio que tiene (§5.10). Barato de responder, y hoy nadie lo ha preguntado.
25. **⚠️ [H1 · corregida] Campaña de reactivación con rentabilidad personal: válida solo para el perfil amistoso.** En julio se propuso mostrar la rentabilidad personal acumulada a quienes desactivaron. El mini-sprint la **contraindica para el perfil sofisticado**: Julián no volvería (*"al final el resultado ya se dio como se dio"*) y Humberto está evaluando salir. Mostrarle a ese perfil una rentabilidad que ya juzgó insuficiente refuerza el argumento de salida. **Segmentar antes de ejecutar.**
26. **[Explorar]** Límite de pérdida personal (*stop-loss*) como función de confianza para el segmento con experiencia — aparece espontáneamente y con insistencia (Camilo ×3 ②).
27. **[Explorar] ⬆️ Sprint de detractor neófito.** 3–4 entrevistas con clientes de baja alfabetización financiera que desactivaron, usando el Bloque 1B. **Sube de prioridad**: es la única brecha de evidencia abierta, es el perfil donde la educación sí podría funcionar como retención, y —según la ronda de asesores— es precisamente el perfil al que el canal dirige el producto hoy.

---

## 10. Verificación de criterios de éxito del brief

- ✅ **Las 5 hipótesis tienen evidencia y veredicto final**, construido con las cuatro fuentes.
- ✅ **Al menos 3 momentos de quiebre en el flujo de activación** — **16 identificados**, aportados por las cuatro fuentes.
- ✅ **El equipo puede priorizar ajustes sin ambigüedad:** 3 recomendaciones de Nivel 0 y 27 priorizadas en §9.
- ✅ **Muestra cualitativa: cerrada en cobertura de perfiles.** 11 entrevistas frente a las 9–12 planeadas, con clientes activos, un desertor amistoso, tres detractores y tres asesores.
- ✅ **Hallazgos etiquetados en Dovetail** antes de la presentación a stakeholders (165 highlights entre los dos proyectos de agosto, más la ronda de julio).
- 🟡 **Brecha residual documentada:** falta la voz del detractor neófito (recomendación 27).
- ⚠️ **Alcance excedido:** la investigación entrega tres hallazgos de producto —desempeño comparado, sobre-diversificación y arquitectura del contrato— fuera del alcance de un sprint de experiencia, que deben escalarse a las áreas correspondientes.

---

## 11. Anexos

**① Prueba remota (Useberry)**
- *InvestED 2.0 – Prueba de usabilidad por tareas* (53 respuestas · 30 completas) → [Ver informe ↗](https://app.useberry.com/sharing-results/ttIkT0LkY4JbVT/?segmentID=30022375-da37-46d1-a394-a7ec64bf5498)
- Base de testers: `Comunidad_Testers_Skandia_PA.xlsx` (hoja Usuarios, 216 registros)

**② Ronda 1 · clientes (Dovetail · *Entrevistas Invest-ed 2.0*)**
- Camilo Zuzunaga (8 jul) · María Angélica Hurtado (9 jul) · Juan Daniel Fajardo (10 jul) · Paola Andrea Rodríguez · Sebastián Piedrahita

**③ Mini-sprint · detractores (Dovetail)**
- Proyecto [*Invest-ed 3.0 Detractores* ↗](https://uxplorers-skandiacol-xfdn.dovetail.com/projects/6ioeZqeCcYEyQ3vkBEdsKY) — 3 entrevistas, 88 highlights
  - [María Eugenia Cataño López de Mesa ↗](https://uxplorers-skandiacol-xfdn.dovetail.com/data/VQDvDJE6d2YFshJtV2l7f)
  - [Humberto Cañón ↗](https://uxplorers-skandiacol-xfdn.dovetail.com/data/12dC6TosAath6wTIAJxgIK)
  - [Julián Pinzón ↗](https://uxplorers-skandiacol-xfdn.dovetail.com/data/2LI4zYN61lPpEPlAHyL0c5)

**④ Ronda 3 · asesores (Dovetail)**
- Proyecto [*Invested 3.0 FP´s* ↗](https://uxplorers-skandiacol-xfdn.dovetail.com/projects/6hbg2lSgDEqiKJlQVKUWpR) — 3 entrevistas, 77 highlights
  - [Juan José · 11 de agosto ↗](https://uxplorers-skandiacol-xfdn.dovetail.com/data/hWvcAJksUXbt2Y4vhF7jS)
  - [Juan Felipe · 14 de agosto ↗](https://uxplorers-skandiacol-xfdn.dovetail.com/data/3YAGJ0KF0YIou6Lz45CuEp)
  - [Alejandra · 18 de agosto ↗](https://uxplorers-skandiacol-xfdn.dovetail.com/data/4RIOpeIJJlogl4zIII729t)

**Otros**
- **Prototipo testeado:** [shine-style-workbench.lovable.app ↗](https://shine-style-workbench.lovable.app)
- **Instrumento de campo:** `conocimiento/instrumento-invested-3.md` v3.1 — Parte 1 (clientes), Parte 1B (detractores) y Parte 2 (Useberry). Sin bloque para asesores (ver §2).
- **Brief:** `conocimiento/brief-Invested-3.md` v3.0
- **Investigación previa (Dovetail):** CX-SAC · Gestión de portafolios con Financial Planners · Gestión de portafolios con clientes · Monitor para Financial Planners · Taller Invested

---

> **Nota sobre las citas.** Todas son textuales de las transcripciones en Dovetail y de las respuestas abiertas de Useberry. Se normalizan los artefactos de la transcripción automática: "Scandia" / "Scania" → **Skandia**; "Investing" / "Inveset" / "investor" / "invest it" → **Invested**; "CAD" / "Cut" → **CAT**. Son artefactos del transcriptor, no del habla de los participantes. Las transcripciones de la ronda de asesores rotulan a los hablantes como "Participant 1/2/3"; la atribución por nombre se hizo con las menciones directas dentro de cada sesión.

*UXplorers · Invested 3.0 · Informe final consolidado v3.0 · 19 de agosto de 2026.*
