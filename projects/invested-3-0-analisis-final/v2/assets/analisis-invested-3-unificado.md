# Invested 3.0 — Análisis unificado de investigación
**UXplorers · Investigación mixta Entender + Validar · Agosto 2026**
*Versión 2.0 — cierre definitivo, incluye el mini-sprint con clientes detractores*

> ✅ **Estado: CIERRE DEFINITIVO.** Este documento reemplaza a `analisis-invested-3-final.md` (v1.1, 21 de julio de 2026) como referencia vigente para el caso de negocio.
>
> La versión de julio cerró con una salvedad explícita: faltaba la voz directa del cliente que se fue disgustado, y de esa voz dependían en buena parte los veredictos de H2 y H4. **Ese vacío está cerrado.** El mini-sprint de agosto sumó 3 entrevistas con clientes detractores y trajo un hallazgo que obliga a corregir el mecanismo que suponíamos: no se fueron por silencio, se fueron porque compararon la rentabilidad contra un referente concreto y perdieron la comparación. Los veredictos de H2 y H4 se actualizan en consecuencia (sección 7).

---

## Cómo leer este informe

| Término | Qué significa |
|---|---|
| **Useberry** | Plataforma de pruebas remotas: enviamos el prototipo a la comunidad de testers y cada persona lo navega sola, sin moderador, respondiendo tareas y preguntas. |
| **Dovetail** | Repositorio donde guardamos y analizamos las entrevistas y hallazgos de investigación. |
| **Prototipo** | Versión navegable (no real) del nuevo Invested, usada tanto en entrevistas como en la prueba remota. |
| **SEQ** (*Single Ease Question*) | "Pregunta única de facilidad": al terminar cada tarea, la persona califica qué tan fácil le resultó. La usamos como termómetro de facilidad percibida. |
| **H1 a H5** | Las 5 hipótesis definidas en el brief de esta investigación, que aquí se confirman, se refutan o quedan parciales. |
| **Mezcla** | Nombre que hoy recibe la combinación de portafolios que Invested arma para cada persona. (Como se verá, este nombre es en sí mismo un hallazgo.) |
| **Gamificación** | Usar dinámicas de juego —niveles, logros, recompensas— dentro de un servicio para motivar su uso. |
| **Rebalanceo** | Ajuste que hacen los expertos a la combinación de portafolios cuando cambia el mercado. |
| **Cliente inactivo** | Persona que activó Invested alguna vez y luego lo desactivó. |
| **Detractor** | Cliente insatisfecho con Invested. Puede haberse ido ya (*desertor consumado*) o seguir dentro y estar evaluando salir (*detractor en riesgo*). El mini-sprint de agosto cubrió ambos. |
| **Bloque 1B** | Guía de entrevista específica para clientes detractores, añadida al instrumento en la versión 3.1. Reemplaza la Parte 1 para este grupo. |
| **Referente de comparación** | El producto contra el cual el cliente mide si Invested vale la pena: el Fondo Liquidez de la propia Skandia, un CDT, un competidor. Concepto que emerge de este mini-sprint. |
| **Tester** | Persona de la comunidad de pruebas de Skandia que participa en las pruebas remotas. |

---

## 1. Resumen ejecutivo

**Pregunta central de la investigación:** ¿De qué manera podemos demostrar que Invested genera valor para el cliente más allá de las rentabilidades?

**La respuesta corta, después de todo el campo:** sí se puede, y el rediseño acierta en casi todo lo que se propuso — pero ese valor adicional funciona como *amplificador* de un desempeño aceptable, no como *sustituto* de uno malo. El mini-sprint con detractores puso un piso a la pregunta: por debajo de cierto umbral de rentabilidad comparada, ninguna cantidad de acompañamiento, educación o notificaciones retiene al cliente.

### Hallazgos principales

1. **La activación rediseñada funciona: la fricción ya no está en el flujo, está en la información que falta.** El 91% de los testers completó la activación y el 81% la calificó como "muy fácil". Las 8 entrevistas coinciden en una nota alta — incluidos los tres detractores, que la calificaron 9, 9 y "muy fácil" pese a su insatisfacción con el servicio. Lo que piden de forma consistente no es un flujo más simple, sino ver **la rentabilidad esperada y una proyección de cómo crecería su dinero** antes de activar, poder **simular a partir de la cuota mensual** disponible, y ver la **rentabilidad de lo que específicamente han aportado**.

2. **Los detractores no se fueron por silencio: se fueron porque compararon y perdieron.** Este es el hallazgo nuevo y el más consecuente del cierre. Los tres detractores entrevistados llegaron a la decisión de salir por la misma ruta: midieron Invested contra un referente concreto y disponible, y Invested quedó abajo.

   | | Rentabilidad de Invested | Referente contra el que comparó |
   |---|---|---|
   | **María Eugenia Cataño** | 3,55% E.A. desde 2015 (3,20% E.A. en el corte que revisó), con **perfil agresivo** | Índices de renta fija, MSCI, inflación, y los portafolios de Protección |
   | **Humberto Cañón** | 3,72% E.A. desde 2021, con perfil **agresivo global** | El **Fondo Liquidez de la propia Skandia**: 5,93% E.A., riesgo casi nulo |
   | **Julián Pinzón** | Pérdidas sostenidas durante ~1 año en dos portafolios | El CAT de Skandia (tasa fija) y el fondo Impacto, ambos de la casa |

   Las tres comparaciones apuntan al mismo sitio incómodo: **el referente que gana suele ser otro producto de Skandia**. Humberto lo formula sin adornos: *"para un fondo donde yo esperaba acceder a una estructura que pudiera manejar de una manera inteligente el dinero, lo han colocado de una manera que no entiendo, porque las rentabilidades han sido muy bajas, la mitad de lo que daría un activo cero riesgo."*

3. **La educación construye tolerancia a la volatilidad, no tolerancia al bajo desempeño sostenido.** Es la corrección más importante a H2. Los tres detractores valoran la educación en abstracto — María Eugenia con entusiasmo (*"nada más rico que un cliente conocedor"*, la formación *"libera de la preocupación de hacer las cosas bien"*) — pero ninguno afirma que un contenido educativo hubiera cambiado su decisión de salida. Julián lo cierra: *"independientemente de que le puedan mostrar a un cliente como yo cómo funciona el tema de las caídas… todo realmente lo que uno quiere al final son resultados."* La educación sigue siendo una palanca válida; ya sabemos contra qué no funciona.

4. **La comunicación proactiva en caídas sigue siendo la palanca más sólida — y ahora conocemos su techo y su fuga.** Los tres detractores reaccionaron bien a la notificación de caída, incluso desde su insatisfacción (María Eugenia: *"esto me parece una machera… uno se puede desligar de esa presión de estar haciendo seguimiento permanente"*). Pero aparecen dos límites nuevos: **el techo** — la notificación evita el retiro impulsivo, no la salida razonada por desempeño (Julián: *"una caída se puede soportar, pero con la repetición mes a mes en el año sí va a generar desconfianza y uno cambiar de portafolio"*); y **la fuga de canal** — la campanita vive dentro de la aplicación, y quien ya se desenganchó no entra: *"si no abrí la cuenta no veo la campanita"*.

5. **La gamificación motiva, pero no sustituye la rentabilidad — y hay una línea que no se debe cruzar.** El 86% encuentra motivador el desbloqueo de mezclas y el 88% valora ver logros y aprendizajes. Pero María Eugenia, con 30 años de carrera en bolsa, levanta una alerta que no estaba documentada y que es de **idoneidad, no de preferencia**: gamificar el cambio de perfil de riesgo es peligroso, porque *"los perfiles de riesgo van amarrados a la personalidad… es peligrosísimo el cliente que en los buenos momentos se siente agresivo, y cuando el mercado vuelve a su realidad se acuerda que es conservador"*. Aprender sí; que aprender desbloquee más riesgo, no.

6. **"Mezcla" no se entiende de forma espontánea, y el rebalanceo es la caja negra más grande del servicio.** Al hallazgo ya conocido sobre el nombre y las siglas, el mini-sprint suma que la comunicación de rebalanceo — el único mensaje que Invested envía hoy con regularidad — se percibe como un ritual vacío. Humberto: *"Vamos a rebalancear, vamos a rebalancear, vamos a rebalancear… pero sí como que le dijeran a uno, oiga, vamos a cambiar la estrategia porque el dólar está subiendo y el euro está bajando."* Pide el *por qué*, no el aviso.

7. **Nadie gestionó la salida.** Ninguno de los tres recibió una llamada, un correo o una pregunta cuando desactivó. María Eugenia, clienta de tres décadas y ex-empleada que abrió la oficina de Skandia en Medellín, lo dice con dolor: *"a mí nunca me llamaron a decirme usted por qué se va."* Julián ya había respondido encuestas negativas antes (*"me había llegado un par de veces, oye, ¿qué opinan de Invested? Los castigué por escrito"*) sin que nadie diera seguimiento. La entrevista de investigación fue, para los tres, la primera vez que alguien preguntó — y los tres lo agradecieron explícitamente.

8. **La marca sobrevive al producto: hay ventana de recuperación.** Los tres siguen siendo clientes de Skandia y separan de forma nítida la marca del servicio. Julián: *"Skandia es la confianza de construir el patrimonio a largo plazo… es una empresa multinacional que tiene una trayectoria."* Humberto mantiene cerca de $1.200 millones en fondos voluntarios de Skandia. María Eugenia mantuvo la inversión durante años *"por afecto"*. El daño está contenido en Invested — es una crisis de producto, no de marca.

### Recomendaciones clave (detalle en la sección 8)
- **Mostrar el desempeño contra un referente** dentro del propio material de Invested. Si no lo hacemos nosotros, el cliente construye la comparación por su cuenta — y hoy la construye contra el Fondo Liquidez de la casa.
- Añadir **proyección de crecimiento y rentabilidad esperada** en el paso "Ver mi mezcla", más un simulador que conecte cuota, plazo y meta.
- Mostrar la **rentabilidad propia acumulada desde el primer aporte**, con selector de período variable. Tres confirmaciones independientes: ya no es hipótesis.
- Completar la **notificación de caída del mercado** y **sacarla de la aplicación**: SMS y correo, no solo campanita.
- Convertir el aviso de rebalanceo en una **explicación de estrategia**: qué cambió, por qué y qué se espera de ese cambio.
- Renombrar o explicar "mezcla" y eliminar las siglas; hacer visible la perfilación dentro del flujo.
- Desbloqueo progresivo **con puerta de salida**, y **nunca atado al cambio de perfil de riesgo**.
- Crear un **protocolo de salida gestionada**: que desactivar dispare una conversación, no un silencio.

---

## 2. Metodología

| | Planeado (brief v3.0 + mini-sprint) | Ejecutado al cierre definitivo |
|---|---|---|
| Entrevistas individuales — ronda principal (Teams, 45 min) | 9–12 (4–6 activos, 5–6 inactivos) | **5 realizadas**: 4 activos + 1 inactivo de perfil "amistoso" |
| Entrevistas individuales — mini-sprint detractores (Teams, Bloque 1B) | 2–3 | **3 realizadas** ✅ |
| **Total del cuerpo de evidencia cualitativa** | — | **8 entrevistas** |
| Prueba remota en Useberry (sin moderador) | 30–50 testers | **53 respuestas · 30 completas (57%)** · tiempo promedio 18 min 28 s |
| Prototipo | — | Prototipo navegable ([shine-style-workbench.lovable.app](https://shine-style-workbench.lovable.app)) |
| Análisis | Dovetail | Dovetail: *Entrevistas Invest-ed 2.0* + *Invest-ed 3.0 Detractores* (88 highlights etiquetados) + informe de Useberry |

**Personas entrevistadas — ronda principal (julio 2026):**
- Camilo Zuzunaga (26, ingeniero civil, cliente activo)
- María Angélica Hurtado (38, enfermera, activa, conocimiento financiero bajo)
- Juan Daniel Fajardo (25, docente e ingeniero biomédico, activo, conocimiento medio-alto)
- Paola Andrea Rodríguez (26, diseñadora, activa)
- Sebastián Piedrahita (26, médico general, Rionegro–Antioquia, Invested desactivado — deserción "amistosa" por preferencia de gestión manual con asesor)

**Personas entrevistadas — mini-sprint de detractores (5 de agosto de 2026, Bloque 1B del instrumento v3.1):**

| Participante | Perfil | Vínculo con Invested | Situación al momento de la entrevista |
|---|---|---|---|
| **María Eugenia Cataño López de Mesa** | Pensionada hace 2 años. **30 años de carrera en bolsa de valores** (22 en Grupo Bancolombia y Valores Bancolombia). Abrió la oficina de la fiduciaria Skandia en Medellín hace ~30 años; Skandia fue su primer trabajo. Perfil de riesgo agresivo. | Invertida desde 2015. Descubrió el desempeño real en reunión de portafolio el **13 de noviembre de 2025**; canceló el **25 de noviembre de 2025**. | **Desertora consumada — hostil.** Sigue vinculada a Skandia a través de las inversiones de su esposo. |
| **Humberto Cañón** | 56 años. Vicepresidente de planeación y logística; especialización en finanzas. Cerca de **$1.200 millones** en fondos voluntarios de Skandia. Perfil agresivo global, horizonte 1,5–4,5 años. | Entró el **1 de febrero de 2021** con $100 millones (el 10% de su capital de entonces). | **Detractor en riesgo — sigue dentro.** *"Estoy pensando sacar lo que tengo de Invested ahora."* |
| **Julián Pinzón** | 43 años. Ingeniero de sistemas; fue gerente y dueño de una empresa de tecnología durante 25 años, la vendió y hoy se dedica de tiempo completo a invertir. Diplomado en bolsa de valores. Perfil conservador-moderado con Skandia, agresivo por fuera. | Dos portafolios en Invested durante aproximadamente un año. | **Desertor consumado.** Canceló ambos y migró a CAT (tasa fija) y al fondo Impacto. *"No volvería, creería que no."* |

**Muestra de la prueba remota:** 35 de 40 correos únicos identificados. Edades entre 26 y 61 años (edad central ≈ 37). El 100% se declara "bastante" o "muy" cómoda con herramientas digitales. **El 72% no había usado Invested antes.**

### El vacío de julio, cerrado

La versión de julio advertía: *"la voz del desertor hostil sigue sin una entrevista directa en esta ronda… los veredictos de H2 y H4 se apoyan en gran parte en ese antecedente indirecto."* El mini-sprint cerró ese vacío con tres voces directas, y el resultado no fue el esperado: confirmó el perfil pero **corrigió el mecanismo**. El patrón de CX-SAC 2025 ("pérdidas sin explicación + silencio = deserción") describía bien la experiencia, pero atribuía la causa al eslabón equivocado. El detonante primario es el **desempeño comparado**; el silencio es el agravante que convierte una pérdida en agravio.

### ⚠️ Limitaciones que siguen vigentes

- **Solo 3 personas en el segmento detractor: los hallazgos se leen como casos, no como cifras.** Con tres entrevistas, cualquier porcentaje engaña: decir "el 67% de los detractores" cuando en realidad son dos de tres personas sugiere una medición que no existe. Por eso, en todo lo que viene del mini-sprint escribimos con nombre propio o con conteo explícito —"los tres coinciden", "María Eugenia señala"— y nunca en porcentaje. **Qué significa esto para decidir:** estas entrevistas prueban que algo *existe* y muestran *cómo funciona* (que el cliente compara Invested contra el Fondo Liquidez, y cómo llega a esa conclusión), pero no dicen *a cuánta gente le pasa*. Para dimensionarlo haría falta una medición cuantitativa sobre la base de detractores.
- **Todos los porcentajes de este informe siguen siendo los de Useberry.** El 91% de activación, el 81% de facilidad, el 88% de logros, el 86% de desbloqueo, el 94% de la notificación: todos provienen de las 53 respuestas de la prueba remota de julio y no se modificaron. El mini-sprint no recalculó ninguna cifra — aportó interpretación y límites. Conviene tenerlo presente porque el documento combina en la misma página dos tipos de evidencia con pesos muy distintos.
- **Sesgo hacia alta alfabetización financiera.** Los tres detractores son inversionistas sofisticados: una con tres décadas en el mercado de valores, uno con especialización en finanzas, uno con diplomado en bolsa y dedicación de tiempo completo. **Falta la voz del detractor neófito** — el perfil de CX-SAC 2025 (*"éramos completamente neófitos"*), que probablemente sale por razones distintas y necesita una respuesta distinta. Esta es la brecha abierta que deja el cierre.
- **Uno de los tres no es, técnicamente, un desertor.** Humberto sigue con el servicio activo. Su testimonio es el de la decisión en curso, no el de la decisión tomada — lo cual lo hace especialmente útil para diseñar retención, y menos útil para entender la salida consumada.
- La pregunta de facilidad (SEQ) se configuró de 0 a 5 en Useberry: se reporta como porcentaje en los niveles altos y no es comparable con referentes de industria.
- 3 testers reportaron errores técnicos del prototipo que pudieron inflar el abandono de la Tarea 2 (15%).

---

## 3. Antecedentes (investigación previa en Dovetail)

- **CX-SAC (2025), clientes que se fueron:** *"Yo a Invested no volvería ni loco. Ya me tuvieron un año en pérdida"* · *"Éramos completamente neófitos… Invested era una computadora en la que meten un dato y ya"* · *"Salimos súper aburridos casi con la idea de sacar toda nuestra inversión de Skandia"*.
- **Gestión de portafolios con Financial Planners (2025):** para los asesores, Invested está "demasiado diversificado", "reacciona tarde" en las caídas y sus portafolios son difíciles de entender.
- **Monitor para Financial Planners (2025):** *"A veces esa gestión tan buena parece que fuera invisible…"* — el hallazgo semilla de esta investigación.
- **Gestión de portafolios con clientes (2025):** proceso de inversión tedioso, interfaz poco ágil, rebalanceos que no finalizan por restricciones de horario.

**Qué cambia el mini-sprint respecto a estos antecedentes.** CX-SAC queda **confirmado en el desenlace y corregido en la causa**. La frase *"ya me tuvieron un año en pérdida"* es literalmente la experiencia de Julián. Pero el mini-sprint muestra que el cliente no se va porque no le explicaron: se va porque hizo la cuenta. La queja de los Financial Planners sobre la sobre-diversificación y la reacción tardía encuentra ahora su eco exacto en la voz del cliente — Humberto describe Invested como *"una mesa de dinero metiendo mi plata dentro de las mesas de dinero de Skandia"* sin beneficio visible, que es la misma observación del asesor formulada desde el otro lado del mostrador.

---

## 4. Análisis por hipótesis

### H1 · "La forma de mostrar rentabilidades frena la activación" — ✅ CONFIRMADA · el rediseño la mitiga, y el vacío que dejó ya está documentado con evidencia suficiente

**Observación.**
- Tarea 1 en la prueba remota: 91% de éxito (41 de 45), 81% la calificó "muy fácil". Las 8 entrevistas coinciden en nota alta. **Los tres detractores incluidos**: Humberto y Julián la calificaron 9 sobre 10; María Eugenia, *"muy fácil"*. Que tres personas insatisfechas con el servicio califiquen bien el flujo es una señal limpia de que el rediseño del flujo funciona.
- El vacío de información más repetido sigue siendo **rentabilidad esperada y proyección**: *"esperaba encontrar tasas promedio"*, *"me faltó que me indicara la tasa de rendimiento esperada"*, *"faltaría ver cómo va a crecer tu dinero"*.
- **La rentabilidad propia desde el primer aporte pasa de un caso a tres.** En julio esto se apoyaba solo en Sebastián Piedrahita y se clasificó como hipótesis a validar. El mini-sprint lo confirma de forma independiente y lo vuelve un requisito con especificación técnica. Humberto: *"acá aparece el de los últimos 365 días, y yo diría que pudiera de alguna manera cambiar cuál ha sido la rentabilidad, de modo que pudiera volver eso variable, incluyendo desde el momento de la activación del fondo hasta cómo va el trimestre, cómo va el mes."* Y añade que es un vacío del portal actual, no solo del prototipo: *"ahorita en el portal de Skandia no deja ver cuál ha sido la rentabilidad total de un portafolio desde que inició."*
- Humberto pide un nivel más de granularidad que no habíamos registrado: **rentabilidad por fondo individual dentro de la mezcla**, no solo la del conjunto.
- María Eugenia añade la **comisión** a la lista de datos que busca: *"veo cuánto me rentó, cuánto me cobraron de comisión"* es literalmente su rutina de revisión en la aplicación de Protección. Y remata: *"a mí Skandia fue mi primer trabajo, pero es muy caro."* La rentabilidad no se juzga sola; se juzga neta de comisión.

**Interpretación.** La hipótesis nació de un diagnóstico correcto. El rediseño eliminó la fricción del flujo, pero al omitir la rentabilidad esperada, la personalizada y el costo, deja la decisión a ciegas. El mini-sprint agrega que ese mismo vacío opera **después** de la activación: es lo que impide al cliente ver si va bien, y lo empuja a construir su propia comparación por fuera del producto.

**Oportunidad.** Un paso "Ver mi mezcla" con proyección de capital, rentabilidad histórica con su aclaración legal y simulador de tres entradas (meta, plazo, cuota). Y en el detalle del contrato: selector de período variable con opción "desde mi primer aporte", rentabilidad por fondo, y comisión visible.

---

### H2 · "Una propuesta educativa genera mayor permanencia" — 🟡 PARCIALMENTE CONFIRMADA, con condición de frontera ahora explícita

> **Cambia respecto a julio.** El veredicto se mantiene en parcial, pero deja de ser una parcialidad por falta de evidencia y pasa a ser una parcialidad **acotada**: sabemos en qué condiciones funciona y en cuáles no.

**Observación.**
- El 88% de los testers calificó alto la utilidad de ver logros y aprendizajes. Ante *"¿usarías más el servicio tras ver esta idea?"*, el 68% respondió en niveles altos y un 30% quedó neutral.
- Los contenidos más pedidos siguen siendo los que amortiguan las caídas: interés compuesto, la importancia de mantenerse en el plan, cuándo conviene el rebalanceo.
- **La educación tiene defensa entusiasta entre los detractores… en abstracto.** María Eugenia: *"esa formación libera de la preocupación de hacer las cosas bien, porque la persona sabe qué está haciendo. Entonces el aprendizaje me parece supremamente valioso. Nada más rico que un cliente conocedor."* Humberto pide contenido de estrategia segmentado por tipo de portafolio: *"que vayan contando ahí específicamente para los que somos Invested en opción observador o Invested agresivos."*
- **Y ninguno de los tres dice que la educación habría cambiado su salida.** La pregunta 1B.2 del instrumento la formula de manera directa, y las respuestas son consistentes. Julián: *"Independientemente de que le puedan mostrar a un cliente como yo cómo funciona el tema de las caídas, o cómo funciona esto, o entiendes el rebalanceo, todo realmente lo que uno quiere al final son resultados."* Y sobre la promesa de mejora: *"ni siquiera la promesa de decir 'se hizo un cambio, se hizo una mejoría en los asesores'… ¿será que les creo? Porque al final el resultado ya se dio como se dio."*
- **Hay un caso donde la explicación sí retuvo, y vale la pena mirarlo de cerca.** A Julián le asustó ver números rojos en su CAT. Se sentó con su asesor, hicieron cuentas, le explicaron que la tasa pactada se paga igual — *"y dije, ah bueno, si hay esa seguridad, entonces pues sí. Ya después de eso ya le generé confianza."* La explicación funcionó porque venía de un humano, en una conversación, y respaldada por un compromiso verificable. No fue una cápsula educativa.

**Interpretación.** La educación construye **tolerancia a la volatilidad**: la capacidad de sostener una caída sin retirar. No construye **tolerancia al bajo desempeño sostenido**, que es un juicio económico, no una carencia de comprensión. Los detractores de este mini-sprint no se fueron por no entender — se fueron precisamente **porque entendieron**. María Eugenia comparó contra el MSCI y los índices de renta fija; Humberto contra el Fondo Liquidez con dos decimales. Educar a este perfil no lo retiene: lo vuelve mejor comparador.

**Implicación.** La educación conserva todo su valor para el perfil que empieza —donde es criterio de confianza y condición de entrada— y debe seguir en el alcance. Pero **no puede figurar en el caso de negocio como palanca de retención frente al cliente insatisfecho por desempeño**. Presentarla así crearía una expectativa que la evidencia no respalda.

**Oportunidad.** Dos profundidades de contenido, ancladas a eventos reales del contrato. Y, tomando la lección del CAT: cuando lo que está en juego es la confianza, el canal que funciona es el humano con un compromiso verificable detrás — no la cápsula.

---

### H3 · "La gamificación puede sustituir la rentabilidad como motor de retención" — ❌ REFUTADA como sustituto · ✅ válida como complemento · ⛔ con una restricción nueva

**Observación.**
- Como motivador funciona: 43% lo encuentra muy motivador y 43% algo motivador; solo el 3% frustrante. La mayoría confiaría más en una mezcla desbloqueada que en una entregada de entrada.
- Como sustituto, nadie lo compra. El mini-sprint lo confirma en los términos más duros del estudio. Julián: *"para mí eso es indiferente."* Humberto: *"no me hagas perder el tiempo si ya soy un perfil agresivo… lo siento como si fuera que tengo que ganar puntos para desbloquear el perfil dinámico. No necesito otra vez ganar puntos para decir cámbiame todo a dólares."*
- **Humberto separa con precisión las dos cosas que hoy vienen unidas:** *"Como aprendizaje está bien, pero que no sea un aprendizaje necesario para desbloquear perfiles."* Le gusta la biblioteca; rechaza la puerta.
- **⛔ Restricción de idoneidad, no de preferencia.** María Eugenia, desde tres décadas de oficio: *"Para mí, los perfiles de riesgo van amarrados a la personalidad, porque es peligrosísimo el cliente que en las buenas, en los buenos momentos se siente agresivo, y cuando el mercado vuelve a su realidad se acuerda que es conservador. Entonces yo no estimularía ese ajuste en perfiles de riesgo."* Cuando se le pregunta si es mejor mantener el perfil según la encuesta, responde que sí, y añade: *"me parece un poquito complejo pretender ajustar el perfil según el momento."*
- Los hitos con más tracción siguen siendo los del dinero, no los de la aplicación: porcentaje de meta alcanzado, "el primer millón", la primera caída superada sin retirar.

**Interpretación.** La gamificación no compite con la rentabilidad: opera un nivel abajo, dando sensación de progreso mientras la rentabilidad hace su trabajo. El aporte nuevo del mini-sprint es que la mecánica de "aprender para desbloquear más riesgo" tiene un problema que va más allá de la experiencia: **puede empujar a un cliente hacia un perfil que no es el suyo, en el momento del ciclo en que menos conviene**. Es un asunto de idoneidad de la inversión.

**Implicación.** El desbloqueo progresivo se mantiene como recurso de andamiaje **para explorar mezclas dentro del perfil ya establecido**, y se desacopla por completo del cambio de perfil de riesgo, que debe seguir dependiendo únicamente de la encuesta de perfilación.

---

### H4 · "La comunicación proactiva en volatilidad reduce retiros" — ✅ CONFIRMADA · el hallazgo más sólido, ahora con techo y con una fuga de canal identificada

> **Cambia respecto a julio.** El veredicto se mantiene confirmado y sale reforzado por tres reacciones positivas más. Lo que se añade es el alcance real del efecto y un problema de entrega que lo puede anular por completo.

**Observación.**
- La respuesta dominante tras leer la notificación sigue siendo **esperar**, no retirar. El 94% calificó como fácil encontrarla y entenderla.
- **Los tres detractores reaccionan bien, incluso desde su insatisfacción.** María Eugenia: *"Esto me parece una machera, porque eso te desliga de tener que estar haciendo ese seguimiento atento… el inversionista es muy cíclico, tiene épocas en que está muy atento con su portafolio y otras veces que se desentiende. Si simplemente me llega una notificación y me dice: vea, no se preocupe, tuvimos una caída generalizada del mercado y por eso su portafolio está rentando negativo. Perfecto, ya estamos al tanto del tema."* Humberto: *"yo estaría bien con la notificación, ya sabiendo que es claro y que están evaluando si van a hacer algún rebalanceo."*
- **🔻 Fuga de canal.** La campanita está dentro de la aplicación, y el cliente desenganchado no entra. María Eugenia lo señala con precisión: *"esa campanita sí es muy chévere, pero eso me implica abrir la cuenta, entrar a mirar, y si no abrí la cuenta no veo la campanita. No sé si ese mismo mensajito se pudiera llegar por SMS."* Es la persona que más necesita el mensaje la que no lo va a ver. En julio el SMS quedó en último lugar con 4 menciones de 32; el mini-sprint muestra que esa medición se hizo sobre testers enganchados y subestima el canal para el perfil en riesgo.
- **🔻 Techo del efecto.** Julián: *"Una caída se puede soportar, se puede manejar, pero no lo voy a negar que con el paso del tiempo, con la repetición del mes a mes en el año, pues sí va a generar más una desconfianza y uno cambiar de portafolio."* La notificación gana tiempo; no gana el argumento.
- **Confirmación del contrafactual.** Julián no recibía notificaciones de caída: *"no llegaban notificaciones así; lo que yo evaluaba era el extracto."* Su decisión se tomó leyendo extractos en silencio. Es exactamente el escenario que la notificación viene a evitar.
- **La ausencia también fue humana.** María Eugenia: *"el asesor dejó de mirarnos hace muchos días, no nos volvió a citar a una reunión de portafolio, no nos volvió a decir absolutamente nada."* El silencio del producto y el del asesor se suman.
- Canales preferidos (32 respuestas de la prueba remota): WhatsApp (~19) y correo (~18); mensajes de texto (4). Nadie pidió llamada. **El mini-sprint sube el SMS**, y confirma el correo: Julián lee juiciosamente el extracto que le llega por ese medio (*"cruzo un extracto con el otro… me tomo mi tiempo de revisar"*).

**Interpretación.** La notificación proactiva convierte la gestión invisible en acompañamiento percibido: sigue siendo el "valor más allá de la rentabilidad" que busca esta investigación, y el más barato de implementar. Su función correcta es **evitar el retiro impulsivo y comprar tiempo para que la estrategia trabaje**. Si en ese tiempo la estrategia no entrega, la notificación no salva la relación — y ese es un problema de producto, no de comunicación.

**Oportunidad.** Anatomía completa del mensaje: qué pasó y cuánto, por qué, qué se está haciendo, cuándo se decide, aviso de cierre con la decisión tomada, y botón "hablar con mi asesor". Entrega **fuera de la aplicación** —SMS y correo, configurables— con la campanita como refuerzo, no como canal único. Y una regla de dosis: contactar solo cuando hay algo que saber o decidir.

---

### H5 · "La diferenciación entre mezclas es clave para percibir valor" — 🟡 PARCIALMENTE CONFIRMADA · el rebalanceo emerge como la caja negra principal

**Observación.**
- Cuando se entiende, funciona: el 90% calificó como fácil entender cómo va su inversión. María Eugenia leyó la composición sin ayuda y la validó contra el perfil: *"guarda lógica esa relación de los últimos porcentajes en renta variable global y local versus ese 55% en renta fija. Sí se acomoda al perfil."* Y sobre la presentación: *"me dio confianza, me mostró muy didácticamente la participación; cuando yo trabajo con esas tortas, esas porciones son muy claras."*
- Pero la comprensión sigue siendo frágil para varios perfiles: el término "mezcla" es rechazado o no entendido, y las siglas RV y RF no se descifran.
- La perfilación no es visible: *"no me hizo un análisis de perfil previo"*. Humberto lo repite en el mini-sprint — buscó dónde cambiar el perfil de inversionista y no lo encontró en el flujo.
- **🆕 El rebalanceo es hoy la única comunicación regular de Invested, y está vacía de contenido.** Humberto: *"Básicamente lo único que recibo de Invested son rebalanceos. Vamos a rebalancear, vamos a rebalancear, vamos a rebalancear… Me llegan correos cada vez que rebalancean, es más, hoy me llegó uno. Pero no que me diga: ahora pasamos del 2,3% de acciones Colombia al 2,5%. Yo lo dejo hacer, pero no estamos cambiando porque pensamos que el dólar va a subir, porque las condiciones del mercado colombiano cambiaron."* Y aclara la dosis exacta que espera: *"no necesito que sea una cosa de 3 páginas. Que te cuenten."*
- **La misma idea desde el otro lado.** María Eugenia describe lo que la haría desconfiar de un servicio de inversión: *"Uno se queda montado en algo que se agotó, que el mercado ya no lo está considerando… esa falta de cercanía para decirle al cliente: venga, esto no es la opción del mercado, ajustarlo a tiempo."* Es la misma petición: no el aviso del ajuste, sino la lectura del mercado que lo justifica.
- Los usuarios con criterio piden **poder actuar sobre la mezcla**: cambiarla, comparar, ajustar porcentajes, definir un límite de pérdida.

**Interpretación.** La diferenciación de mezclas sigue siendo el vehículo del valor percibido, y se pierde en cuatro puntos, no en tres: el lenguaje, la visibilidad de la perfilación, la falta de agencia — y ahora la **opacidad de la gestión**. Este cuarto punto es el más grave, porque el rebalanceo es precisamente el momento en que Invested *está* trabajando: es la prueba de vida del servicio, y hoy se comunica de una forma que la desperdicia. Un aviso de rebalanceo sin razonamiento no demuestra gestión experta; demuestra actividad.

**Implicación.** Es la hipótesis donde el diseño de contenido tiene más impacto por peso invertido. Y el mayor retorno disponible no está en el prototipo: está en reescribir un correo que ya se envía.

**Oportunidad.** Renombrar o explicar "mezcla" en su primera aparición; eliminar siglas; perfilación visible y editable; comparador de mezclas; y **rediseñar la comunicación de rebalanceo** para que cuente la lectura del mercado, el cambio concreto y qué se espera de él.

---

## 5. Hallazgos fuera de hipótesis

### 5.1 Momentos de quiebre en el flujo de activación

| # | Momento | Evidencia |
|---|---|---|
| 1 | **Entrada: la tarjeta de Invested compite con el contrato "Potenciar mi inversión".** Un tester fue directo a la opción más resaltada (la equivocada). | Prueba remota (×2) |
| 2 | **Paso 1: el propósito no se identifica a la primera y "Ver mi mezcla" desconcierta.** | Prueba remota |
| 3 | **Paso 2: la mezcla aparece sin proyección, sin rentabilidad esperada, sin perfilación visible y con siglas.** | Prueba remota · Entrevistas |
| 4 | **Paso 3: el aporte sugerido no se puede modificar y las aclaraciones legales angustian a quien empieza.** | Prueba remota · Entrevistas |
| 5 | **El logotipo con las letras "ED" tachadas confunde.** | Prueba remota (×2) |
| 6 | 🆕 **"Conocer y activar" es ambiguo: no se sabe si informa o ejecuta.** Julián: *"si ahí dice conocer y activar, es porque ahí se puede tanto recibir la información como activar, ¿cierto?"* | Mini-sprint |
| 7 | 🆕 **No hay camino visible para revisar o cambiar el perfil de inversionista dentro del flujo.** Humberto: *"acá me gustaría, por ejemplo, cambiar el perfil de inversionista, pero por acá sería… ¿dónde estaría la opción de activar?"* | Mini-sprint |
| 8 | 🆕 **La meta y el plazo configurados no quedan visibles después: la persona no recuerda qué definió y no lo encuentra.** María Eugenia buscó su plazo en "Movimientos" antes de dar con la barra de progreso: *"Ah, yo no puse 100 millones, yo pensé que había puesto 100 millones… yo pensé que le había puesto 3 años."* | Mini-sprint |
| 9 | 🆕 **La sección "Detalles" no se entiende por su nombre.** María Eugenia: *"Espérate, ¿qué son estos detalles?"* — y al abrirla encontró justo lo que buscaba (comisión de administración delegada, contacto con el asesor). | Mini-sprint |

### 5.2 Encontrar "Logros y aprendizaje" cuesta trabajo
Solo el 37% encontró la sección "muy fácil"; al 31% le costó; 2 testers nunca llegaron. Vive dentro de "Objetivo", lo cual tiene lógica para quien la encuentra, pero el camino no es evidente. En el mini-sprint, los tres necesitaron indicación explícita de la moderadora para llegar.

### 5.3 El asesor humano es la red de seguridad transversal — y su ausencia también se siente
Ante una duda o una caída, la reacción sigue siendo "hablo con mi asesor". El mini-sprint añade dos matices:
- **El asesor es la puerta de entrada real.** Julián nunca activó Invested por sí mismo: *"a mí pues siempre el asesor es el que me ha hecho el favor y me ha ayudado a esas cosas. Él me tuvo que haber ayudado a abrir el Invested."* Esto ancla el objetivo del rediseño — reducir la dependencia del asesor para activar — en un problema real.
- **El abandono del asesor es parte de la historia de salida.** María Eugenia: *"el asesor dejó de mirarnos hace muchos días… no nos volvió a citar a una reunión de portafolio."* En contraste, elogia sin reservas al equipo de apoyo: *"las niñas que acompañan a los asesores son muy buenas, son diligentes, son amables… son unos fosforitos."* La calidad del servicio de apoyo no compensa la ausencia del acompañamiento de portafolio.

### 5.4 Ideas espontáneas de los usuarios que se repiten
- **Límite de pérdida configurable** (*stop-loss*).
- **Explicar los rebalanceos ya hechos**: qué cambió, en qué porcentaje y por qué — y avisar cuando ya se ejecutó, no solo cuando se está evaluando.
- **Gráfica de desempeño en curvas** (lo aportado frente al valor total) en lugar de barras.
- **Mensajes de motivación accionables**: *"si incrementas tu cuota en $100.000, el tiempo para tu meta se reduce a X años"*.
- **Rentabilidad propia desde el aporte inicial**, con período variable — ✅ confirmado por tres personas independientes.
- 🆕 **Recordatorio de aporte mensual por SMS.** María Eugenia: *"recuérdame por favor en el SMS que para tal fecha debo hacer el aporte."*
- 🆕 **Rentabilidad desglosada por fondo** dentro de la mezcla (Humberto).
- 🆕 **Comisión visible** junto a la rentabilidad (María Eugenia).
- 🆕 **Bajar la jerarquía de la cuenta contingente.** María Eugenia: *"uno sí la tiene que tener, pero no es algo que yo pusiera en la parte de arriba. Yo la pondría marginal."*
- 🆕 **Acceso rápido tipo aplicación bancaria**: entrar con huella o rostro y ver el dato clave en la primera pantalla, sin navegar. *"Entro a la app y eso es lo primero que veo: chin, ¿cuánto me gané este mes? Tanto. Salgo y me voy."*
- **La opción visible de desactivar genera confianza, no fuga** — confirmado: *"la desactivación me parece interesante que esté ahí… poderme ir si quiero, sin molestar a nadie."*

### 5.5 Comportamiento de la prueba remota
De 53 sesiones, 30 completaron el recorrido (57%). Caídas mayores: 4 personas en la Tarea 1 y 6 en la Tarea 2, donde se reportaron los 3 errores técnicos del prototipo.

### 5.6 Tipos de cliente inactivo — el mapa completo
La investigación arranca con un solo tipo documentado y termina con tres:

| Tipo | Evidencia | Cómo se va | Qué necesita |
|---|---|---|---|
| **Desertor neófito** (CX-SAC 2025) | Indirecta, sin entrevista propia | Entra sin comprender, sufre pérdidas sin explicación, sale molesto y en silencio | Comprensión y acompañamiento. **Único perfil donde la educación puede ser palanca de retención.** |
| **Desertor amistoso** (Sebastián Piedrahita) | 1 entrevista, julio 2026 | Compara la gestión automática con el criterio de su asesor y elige al asesor. No hay daño ni disgusto | Una propuesta de valor que compita con un criterio humano que ya le funciona. Reactivable: pidió ver la rentabilidad de sus propios aportes |
| **Detractor sofisticado** (María Eugenia, Humberto, Julián) | 3 entrevistas, agosto 2026 | Mide contra un referente concreto y disponible, y se va cuando pierde la comparación | **Desempeño competitivo y transparencia de estrategia.** No es reactivable con comunicación: *"al final el resultado ya se dio como se dio"* |

### 5.7 🆕 Nadie gestiona la salida
Ninguno de los tres recibió contacto al desactivar. María Eugenia lo dice con la autoridad de haber estado del otro lado del escritorio durante 30 años: *"a mí nunca me llamaron a decirme usted por qué se va. Porque yo sabía que ese ejercicio lo hacían las empresas cuando los clientes eran de tantos años… sí se preocupaban por saber, bueno, ¿qué te pasó?"*

Julián agrega que el canal existe pero no cierra el ciclo: había respondido encuestas de satisfacción con calificaciones negativas — *"me había llegado ya un par de veces, oye, ¿qué opinan de Invested? Los castigué por escrito"* — sin que nadie diera seguimiento. Y valora explícitamente la diferencia: *"una entrevista ya así face to face es interesante que se tomen ese trabajo."*

Los tres agradecieron la conversación de forma espontánea al cierre. Julián: *"gracias sobre todo por el interés… la oportunidad de que puedan escuchar al cliente, son muy valiosos. Uno quiere que su proveedor esté muy atento, que no sea solo palabras."* María Eugenia: *"ya lloré, ya me quejé. Para eso era este espacio."*

**Implicación.** Hoy la desactivación es un evento silencioso en ambas direcciones. Ninguna palanca del rediseño lo cubre, y es la más barata de todas: una conversación. Además, convierte una salida en información — hoy la organización no sabe por qué se va nadie.

### 5.8 🆕 El detractor siempre compara contra un referente — y suele ser un producto de la casa
Los tres construyeron su juicio con un punto de comparación explícito. Humberto lo hizo con dos decimales contra el **Fondo Liquidez de Skandia**. Julián migró al **CAT de Skandia** y al fondo **Impacto**, ambos de la casa, y con Impacto está satisfecho: *"si me llaman a una entrevista para Impacto, la entrevista sería diferente porque me ha ido muy bien con ellos."* María Eugenia comparó contra índices de mercado y contra Protección.

Dos lecturas de negocio:
- **Invested no compite contra el mercado en la cabeza del cliente: compite contra el resto del catálogo de Skandia.** El caso de valor tiene que sostenerse dentro de la casa antes que fuera.
- **Si el material de Invested no muestra una comparación, el cliente construye la suya.** Y la construye en el peor escenario posible: sin contexto de plazo, de riesgo asumido ni de composición.

### 5.9 🆕 La marca sobrevive al producto
El daño está contenido. Los tres siguen siendo clientes de Skandia y lo dicen sin ambigüedad. Julián: *"Skandia es la confianza de construir el patrimonio a largo plazo, y esa es la función de Skandia, que me permita una mayor libertad financiera… es una empresa multinacional que tiene una trayectoria, que tiene su gente."* Humberto confía en *"la reputación de Skandia"* y mantiene allí la mayor parte de su patrimonio. María Eugenia mantuvo su inversión durante años *"por afecto"* y cierra la entrevista recordando cuando abrió la oficina de Medellín: *"para mí fue lo máximo."*

Hay una ventana de recuperación, y es más ancha de lo que sugeriría el nivel de disgusto. Pero se sostiene sobre la marca, no sobre Invested — y el crédito de confianza que la marca aporta ya se gastó una vez.

### 5.10 🆕 El costo importa tanto como el rendimiento
María Eugenia no separa una cosa de la otra: *"a mí Skandia fue mi primer trabajo, pero es muy caro. Yo sabía la calidad del trabajo de la gente en Skandia, era muy bueno, pero en los malos momentos yo comparaba los portafolios de Protección con los de Skandia, y decía: no se me justifica."* En su rutina de revisión, la comisión aparece junto a la rentabilidad, y en el prototipo pidió que el dato de administración delegada esté visible. Es un factor que la investigación no había registrado y que pesa en la ecuación de valor del cliente sofisticado.

---

## 6. Segmentación por perfil

- **Identificación (Useberry):** 35 de 40 correos únicos. Edad entre 26 y 61 años, edad central ≈ 37. El 100% de la muestra identificada se declara cómoda con herramientas digitales — **no representa al usuario digitalmente incómodo**. El 72% no había usado Invested antes.
- **Lectura por conocimiento y proceso de decisión.** La tensión de H3 y H5 se explica en parte por el conocimiento financiero, pero la variable que mejor predice la reacción al desbloqueo progresivo es si la persona **ya tiene un proceso de decisión propio**. El mini-sprint refuerza esta lectura de forma nítida: los tres detractores tienen criterio construido, y los tres rechazaron o fueron indiferentes al desbloqueo. Ninguno pidió que le enseñaran; todos pidieron que les explicaran las decisiones que se toman con su dinero. Es una diferencia importante: **pedagogía no es lo mismo que rendición de cuentas.**
- **🆕 El eje que emerge del mini-sprint: sofisticado con referente propio vs. neófito sin referente.** Requieren estrategias opuestas y no deben mezclarse en un mismo plan de retención:

| | **Detractor sofisticado** | **Detractor neófito** |
|---|---|---|
| Evidencia | 3 entrevistas, agosto 2026 | CX-SAC 2025, sin entrevista directa |
| Por qué se va | Hizo la cuenta y perdió | No entendió y se sintió solo |
| Qué pide | Datos, transparencia de estrategia, comparación honesta, control del período de análisis | Explicación, cercanía, acompañamiento humano |
| Qué lo retiene | Desempeño competitivo — y rendición de cuentas mientras tanto | Comprensión y presencia |
| Qué **no** funciona | Educación básica, gamificación, insignias | Datos crudos sin contexto |
| Estado de la evidencia | ✅ Cubierto | ⚠️ **Brecha abierta** |

> **La brecha que queda.** El mini-sprint cerró el vacío que dejó julio, pero abrió uno más pequeño y bien delimitado: el detractor neófito sigue sin voz directa. Todo lo que este informe afirma sobre él proviene de CX-SAC 2025.

---

## 7. Veredictos de cierre

| Hipótesis | Prioridad | Veredicto definitivo | Qué cambió con el mini-sprint |
|---|---|---|---|
| **H1** · La forma de mostrar rentabilidades frena la activación | Crítica | ✅ **Confirmada.** El rediseño resuelve el flujo; falta incorporar proyección, rentabilidad esperada, rentabilidad propia desde el primer aporte con período variable, y comisión visible | Sin cambio de veredicto. La rentabilidad propia desde el aporte inicial pasa de **1 caso a 3 confirmaciones independientes**: sale de "explorar" y entra como requisito. Se añaden el desglose por fondo y la comisión |
| **H2** · Educación → permanencia | Crítica | 🟡 **Parcial, con condición de frontera.** Construye tolerancia a la volatilidad, no tolerancia al bajo desempeño sostenido. Válida como palanca de retención **solo para el perfil neófito** | **Cambia el fundamento del veredicto.** En julio era parcial *por falta de evidencia*; ahora es parcial *con límite conocido*. Los tres detractores valoran la educación y ninguno afirma que habría cambiado su salida |
| **H3** · La gamificación sustituye la rentabilidad | Crítica | ❌ **Refutada como sustituto** · ✅ complemento motivacional · ⛔ **prohibido atarla al cambio de perfil de riesgo** | Se añade una **restricción de idoneidad** con fundamento técnico, no de preferencia. Y se separan dos cosas que hoy vienen unidas: la biblioteca de aprendizaje sí, la puerta de desbloqueo no |
| **H4** · Comunicación proactiva en caídas reduce retiros | Alta | ✅ **Confirmada** — sigue siendo el hallazgo más sólido, con reacción positiva unánime en las 8 entrevistas. Con dos límites documentados: **fuga de canal** y **techo de efecto** | **Reforzada y acotada.** Tres reacciones positivas más, incluido el contrafactual directo (Julián no recibía notificaciones y decidió leyendo extractos). El SMS sube de prioridad; la campanita no basta |
| **H5** · Diferenciación de mezclas → valor percibido | Alta | 🟡 **Parcial.** Es el vehículo correcto; lo bloquean el lenguaje, la perfilación invisible, la falta de agencia y —el punto nuevo— **la opacidad del rebalanceo** | Se añade un cuarto bloqueo y el de mayor retorno inmediato: el correo de rebalanceo ya se envía y hoy comunica actividad en lugar de gestión |

---

## 8. Recomendaciones priorizadas

### Tácticas — ajustes al prototipo antes del lanzamiento

1. **[Alta · H1]** Proyección de crecimiento en "Ver mi mezcla" (curva de aportes frente a valor total, rentabilidad histórica con aclaración legal) y simulador meta–plazo–cuota con aporte mensual editable.
2. **[Alta · H1] ⬆️ Sube de "explorar" a alta.** Rentabilidad propia acumulada **desde el primer aporte**, con **selector de período variable** (mes, trimestre, año, desde la activación). Aplica al prototipo y al portal actual, donde hoy tampoco existe. *Confirmado por Sebastián Piedrahita, Humberto Cañón y María Eugenia Cataño de forma independiente.*
3. **[Alta · H4] ⬆️ Sube.** Sacar la notificación de caída **fuera de la aplicación**: SMS y correo como canales primarios, campanita como refuerzo, preferencias configurables. Completar la anatomía del mensaje: magnitud, causa, plazo de decisión, aviso de cierre con la decisión tomada y botón "hablar con mi asesor".
4. **[Alta · H5] ⬆️ Sube.** **Rediseñar el correo de rebalanceo** para que explique la lectura de mercado detrás del ajuste, no solo que ocurrió. Es el cambio de mayor retorno por esfuerzo de todo el informe: la pieza ya existe, ya se envía y hoy resta en lugar de sumar. Extensión sugerida por el propio cliente: breve — *"no necesito que sea una cosa de 3 páginas."*
5. **[Alta · H5]** Sustituir o explicar "mezcla", eliminar las siglas RV y RF, perfilación visible y editable dentro del flujo, explicación causal de la composición.
6. **[Alta · quiebre #1]** Rediseñar la jerarquía de entrada: un solo camino evidente hacia la activación desde el contrato.
7. **[Media]** 🆕 Mantener meta y plazo visibles después de la activación, en el detalle del contrato — no solo dentro de la barra de progreso.
8. **[Media]** Facilitar el acceso a "Logros y aprendizaje"; escala de niveles visible.
9. **[Media]** Historial de rebalanceos explicado (qué cambió, cuánto y por qué); gráfica de desempeño en curvas en lugar de barras.
10. **[Media]** 🆕 Comisión de administración delegada visible junto a la rentabilidad; bajar la jerarquía visual de la cuenta contingente.
11. **[Baja]** 🆕 Renombrar "Detalles" y "Conocer y activar" por etiquetas que digan qué hay detrás.
12. **[Baja]** Sección transaccional; aportes automáticos; recordatorio de aporte mensual por SMS; reevaluar las letras "ED" tachadas del logotipo.

### Estratégicas

13. **[H3/H5]** Desbloqueo progresivo **como camino sugerido con puerta de salida**, y **desacoplado del cambio de perfil de riesgo**. Quien complete la perfilación y acepte las advertencias puede acceder a cualquier mezcla dentro de su perfil, o hacerlo con su asesor. El perfil de riesgo sigue dependiendo únicamente de la encuesta de perfilación. ⛔ *Restricción de idoneidad, no de experiencia.*
14. **[H2] Reformulada.** Educación por niveles y anclada a eventos del contrato, con dos profundidades. **Dirigida al perfil que empieza.** No debe figurar en el caso de negocio como palanca de retención frente al cliente insatisfecho por desempeño: la evidencia no lo respalda.
15. **[H4]** Política de comunicación por dosis, con preferencias de canal configurables (WhatsApp, correo, SMS). Contactar solo cuando hay algo que saber o decidir.
16. **🆕 [Alta · nueva] Protocolo de salida gestionada.** Que la desactivación dispare una conversación —llamada del asesor o del equipo de servicio dentro de las 72 horas— con una pregunta abierta y sin guion comercial. Beneficio doble: recupera relaciones que hoy se pierden en silencio, y convierte cada salida en información que la organización hoy no tiene. Es la recomendación más barata del informe y la única que atiende un hallazgo unánime en el mini-sprint.
17. **🆕 [Alta · nueva] Mostrar el desempeño contra un referente** en el material de Invested: comparación honesta contra una alternativa relevante del propio catálogo, con contexto de plazo, riesgo y composición. Si Invested no puede sostener esa comparación, es una señal de producto —no de comunicación— que debe escalarse antes del lanzamiento.
18. **⚠️ [H1 · corregida] Campaña de reactivación con rentabilidad personal: válida solo para el perfil amistoso.** En julio se propuso mostrar la rentabilidad personal acumulada a clientes que desactivaron. El mini-sprint la **contraindica para el perfil sofisticado**: Julián no volvería (*"al final el resultado ya se dio como se dio"*), y Humberto —que sigue dentro— está evaluando salir. Mostrarle a este perfil una rentabilidad que él ya juzgó insuficiente refuerza el argumento de salida en lugar de contrarrestarlo. Segmentar antes de ejecutar.
19. **[Explorar]** Límite de pérdida personal (*stop-loss*) como función de confianza para el segmento con experiencia.
20. **[Explorar]** Revisar el número óptimo de portafolios por mezcla. La sobre-diversificación se percibió como sobrecosto en el caso de Sebastián Piedrahita, y Humberto describe el servicio como *"una mesa de dinero metiendo mi plata dentro de las mesas de dinero de Skandia"* sin beneficio visible. Coincide con lo que ya reportaron los Financial Planners en 2025.
21. **🆕 [Explorar] Sprint de detractor neófito.** 3–4 entrevistas con clientes de baja alfabetización financiera que desactivaron, usando el mismo Bloque 1B. Es la única brecha de evidencia que queda abierta, y es el perfil donde la educación sí podría funcionar como retención — hoy asumido a partir de CX-SAC 2025, no verificado.

---

## 9. Verificación de criterios de éxito del brief

- ✅ Las 5 hipótesis tienen evidencia y veredicto definitivo.
- ✅ Se identificaron al menos 3 momentos de quiebre en el flujo de activación — **9 identificados** (5 en la ronda principal, 4 nuevos en el mini-sprint).
- ✅ El equipo puede priorizar ajustes sin ambigüedad: 21 recomendaciones priorizadas en la sección 8.
- ✅ **Muestra cualitativa: cerrada.** 8 entrevistas frente a las 9–12 planeadas, pero con la cobertura de perfiles que el brief buscaba: 4 activos, 1 desertor amistoso y 3 detractores. El vacío de la voz del detractor —motivo de la salvedad de julio— está resuelto.
- 🟡 **Brecha residual documentada:** falta la voz del detractor neófito (recomendación 21).

---

## 10. Anexos

- **Mini-sprint de detractores (Dovetail):** proyecto [*Invest-ed 3.0 Detractores* ↗](https://uxplorers-skandiacol-xfdn.dovetail.com/projects/6ioeZqeCcYEyQ3vkBEdsKY) — 3 entrevistas, 88 highlights etiquetados.
  - [María Eugenia Cataño López de Mesa ↗](https://uxplorers-skandiacol-xfdn.dovetail.com/data/VQDvDJE6d2YFshJtV2l7f)
  - [Humberto Cañón ↗](https://uxplorers-skandiacol-xfdn.dovetail.com/data/12dC6TosAath6wTIAJxgIK)
  - [Julián Pinzón ↗](https://uxplorers-skandiacol-xfdn.dovetail.com/data/2LI4zYN61lPpEPlAHyL0c5)
- **Informe completo de la prueba remota (Useberry):** *InvestED 2.0 – Prueba de usabilidad por tareas* (53 respuestas · 30 completas) → [Ver informe ↗](https://app.useberry.com/sharing-results/ttIkT0LkY4JbVT/?segmentID=30022375-da37-46d1-a394-a7ec64bf5498)
- **Prototipo testeado:** [shine-style-workbench.lovable.app ↗](https://shine-style-workbench.lovable.app)
- **Instrumento de campo:** `conocimiento/instrumento-invested-3.md` v3.1 — Parte 1B (Bloque Detractor) para el mini-sprint.

---

### Fuentes

- **Entrevistas ronda principal (Dovetail · *Entrevistas Invest-ed 2.0*):** Camilo Zuzunaga, María Angélica Hurtado, Juan Daniel Fajardo, Paola Andrea Rodríguez, Sebastián Piedrahita — julio de 2026.
- **Entrevistas mini-sprint (Dovetail · *Invest-ed 3.0 Detractores*):** María Eugenia Cataño López de Mesa, Humberto Cañón, Julián Pinzón — 5 de agosto de 2026.
- **Prueba remota (Useberry):** *InvestED 2.0 – Prueba de usabilidad por tareas* — 53 respuestas al 15 de julio de 2026.
- **Investigación previa (Dovetail):** CX-SAC · Gestión de portafolios con Financial Planners · Gestión de portafolios con clientes · Monitor para Financial Planners · Taller Invested.
- **Documentos que este informe consolida:** `analisis-invested-3.md` (16 de julio), `analisis-invested-3-stakeholders.md` (preliminar, 16 de julio), `analisis-invested-3-final.md` (v1.1, 21 de julio).

> **Nota sobre las citas.** Todas las citas del mini-sprint son textuales de las transcripciones en Dovetail. En el cuerpo del informe se normaliza "Scandia" / "Scania" / "Skanderbeg" a **Skandia** y "Investing" / "Investen" / "Inveset" a **Invested**: son artefactos de la transcripción automática, no del habla de los participantes.

*UXplorers · Invested 3.0 · Análisis unificado v2.0 · 6 de agosto de 2026.*
