# Simulador Jubilación — Informe consolidado de validación

**Para:** equipo de Operaciones
**De:** equipo de UX
**Fecha:** 16 de septiembre de 2026
**Decisión que soporta este informe:** publicar o no el Simulador Jubilación en el sitio web público de Skandia

---

## 1. Resumen ejecutivo

El Simulador Jubilación funciona: las 13 personas evaluadas completaron el flujo de punta a punta sin quedar bloqueadas de forma irrecuperable. La estructura de 4 pasos es clara y el nivel de detalle del resultado es sólido. El problema no es que la herramienta no sirva — es que **hay cuatro cosas que conviene resolver antes de exponerla al público**, y tres de ellas son verificables y corregibles en días.

> ### Recomendación: no publicar en el estado actual.
> No es un "no va". Es un "todavía no": las correcciones bloqueantes son acotadas y no requieren rediseñar la herramienta.

**Los cuatro hechos que sostienen esa recomendación:**

**1. Hay que verificar la exactitud del cálculo de prima media.** Tres evaluaciones independientes encontraron síntomas distintos que apuntan a lo mismo: la mesada de RPM parece no usar correctamente las semanas que el usuario declara. Una persona que escribió "0 semanas en RPM" recibió igual una mesada de $11.200.000 en ese régimen. Otra cambió su edad de pensión y la cifra de RPM no se movió un peso. Para una entidad vigilada que publica proyecciones de pensión al público, esto se verifica antes, no después.

**2. El único mecanismo de conversión no comunica su resultado.** El panel de Aportes Voluntarios —el momento de mayor intención de toda la herramienta— no actualiza la cifra principal al pulsar "Calcular". Se confirmó **7 veces de forma independiente**, en 4 de los 5 segmentos. En 2 sesiones el botón directamente no recalculó nada.

**3. Prácticamente toda simulación se corre sobre datos estimados.** De 13 personas, **solo una** tenía a mano las semanas cotizadas y el saldo — un cliente con asesor patrimonial y registros propios. Las demás los estimaron para poder avanzar, o declararon que tendrían que salir del flujo a buscarlos. Esto significa que la mayoría de los resultados que entregue la herramienta se calcularán sobre datos que el propio usuario aproximó.

**4. El flujo no tiene salida hacia Skandia.** Integralidad promedio **1,8 sobre 4**, y **1,0 sobre 4 sin una sola excepción** en el segmento de mayor volumen. Toda persona interesada termina en "Generar PDF" y, si quiere hacer algo con lo que acaba de ver, tiene que buscar el canal por su cuenta.

---

## 2. Qué se evaluó y cómo

**La herramienta.** Simulador público de pensión en 4 pasos: información personal y del beneficiario → historia laboral (salario, semanas cotizadas en cada régimen, saldo) → edad de pensión y distribución del saldo entre tres fondos → resultado, con comparación entre régimen de ahorro individual (RAIS) y prima media (RPM), escenarios por fidelidad de aporte, panel de aportes voluntarios y generación de PDF.

**El método**, en tres capas:

| Capa | Qué se hizo |
|---|---|
| **Evaluación heurística** | Recorrido completo del flujo por un evaluador en escritorio y móvil, más auditoría automatizada de accesibilidad. Detecta defectos que no requieren usuarios. |
| **Investigación** | Evidencia previa de Skandia sobre vocabulario pensional, comportamiento real de clientes en el portal, benchmark de simuladores de la competencia y contexto normativo vigente. |
| **Testeo con panel sintético** | **13 recorridos** sobre el prototipo real, cubriendo los 5 segmentos comportamentales, con guion estructurado, preguntas por paso y rúbrica de evaluación. |

> **Sobre el panel sintético.** Los 13 recorridos se ejecutaron en vivo contra la aplicación real: cada persona navegó el flujo, llenó campos y leyó cifras calculadas por la herramienta. Son **agentes actuando en carácter, no usuarios reales**. Los hallazgos de comprensión y reacción emocional deben leerse como señal direccional; los hallazgos técnicos que se repitieron en varias sesiones independientes ameritan verificación directa por Desarrollo (ver §11).

---

## 3. Recomendación de publicación

### No publicar en el estado actual

Separan a la herramienta de poder salir: **una verificación** y **tres correcciones acotadas**.

#### Verificación bloqueante

**V1 · Exactitud del cálculo de prima media.** Antes que cualquier otra cosa. Si el cálculo es correcto y los síntomas se explican por otra razón, se documenta y se cierra. Si no lo es, es la razón más seria para no publicar. Criterio de cierre sugerido: validación con Actuaría de tres casos — historia 100% RAIS, historia mixta, y cambio de edad de pensión sobre el mismo perfil.

#### Correcciones bloqueantes

**C1 · El panel de Aportes Voluntarios debe reflejar su propio recálculo** en la cifra principal que el usuario está mirando, no solo en un recuadro secundario más abajo.

**C2 · El campo "fecha en que empezó a cotizar" no acepta fechas anteriores al 31/12/1969.** Excluye por completo a quien empezó a trabajar antes de esa fecha — una porción real de la población objetivo de una herramienta de pensión.

**C3 · El mensaje "Te faltan N años" no recalcula** al mover el control de edad de pensión. Se verificó en cuatro valores distintos (57, 62, 67 y 75 años): el mensaje se mantuvo idéntico.

#### Condición de negocio

**N1 · Definir la ruta de atención antes de publicar.** Hoy la herramienta genera intención y no la recoge. Quien termina la simulación y quiere actuar no tiene a dónde ir dentro de la pantalla — y quien decida llamar llegará a un canal que no sabe que viene del simulador. Publicar sin resolver esto traslada la demanda a Operaciones sin trazabilidad ni preparación (ver §9).

#### Recomendado, no bloqueante

Las correcciones de experiencia del §5 (el muro de datos del Paso 2, el vocabulario del resultado, el $0 sin explicar) mejoran sustancialmente la herramienta pero no impiden publicarla. Se pueden abordar en una segunda iteración.

---

## 4. Hallazgos bloqueantes

### 4.1 El cálculo de prima media no parece usar las semanas declaradas

Tres síntomas distintos, en tres sesiones independientes de segmentos diferentes:

| Evidencia | Qué se observó |
|---|---|
| Persona con **0 semanas declaradas en RPM** | La tabla Resumen mostró una mesada de RPM de **$11.200.000, idéntica en las 5 columnas** de fidelidad — no $0, ni un campo vacío |
| Persona que **bajó su edad de pensión de 62 a 60 años** | La mesada de RAIS cambió correctamente (de $4.688.387 a $3.899.863); **la de RPM se mantuvo exactamente igual** ($6.400.000 / 80%), pese a que las semanas bajaron de 2.026 a 1.922 |
| Persona con **semanas reales en ambos regímenes** | En la fila de RPM, la progresión decrece gradualmente (6.800.000 → 6.716.224 → 5.951.224) y de pronto cae a **$0** en la última columna, sin explicación |

La lectura más plausible es que, en modo "Comparación entre los dos regímenes", el cálculo de RPM se hace sobre un escenario hipotético —qué pasaría si toda la carrera hubiera sido en prima media— sin que ningún texto en pantalla lo advierta. Para el usuario, ese número se lee como un resultado real.

Una de las evaluadoras lo dijo directamente: *"el campo de semanas RPM que llené no sirvió para nada, el sistema calculó las semanas por su cuenta."*

**Por qué es bloqueante:** una proyección de pensión publicada al público por una entidad vigilada debe poder defenderse. Hoy no sabemos si la cifra de RPM es correcta, contrafactual sin etiquetar, o errónea.

### 4.2 El panel de Aportes Voluntarios no comunica su recálculo

El hallazgo mejor corroborado de todo el estudio: **7 confirmaciones independientes** en 4 de los 5 segmentos.

Se presenta en dos variantes:
- **En 2 sesiones**, pulsar "Calcular" no cambió absolutamente nada — ni la mesada ni el capital acumulado.
- **En 5 sesiones**, el cálculo sí ocurrió y es correcto, pero el resultado nuevo apareció en un recuadro pequeño más abajo, mientras el círculo grande —lo primero que el usuario mira— se quedó con la cifra vieja.

En ambas variantes el efecto práctico es el mismo: *"le di clic y no pasó nada"*.

> *"Le pedí explícitamente que sumara plata a mi proyección y la cifra ni se movió un peso. Si esto es lo que se supone que me convence de meter plata extra, hizo justo lo contrario."*

**Por qué es bloqueante:** es el único punto de la herramienta donde el usuario manifiesta intención de aportar más. Si ahí la herramienta parece rota, se pierde la conversión y se gana desconfianza en el resto de las cifras.

### 4.3 El campo de inicio de cotización tiene un piso fijo en 1969

Verificado: los años 1960-1968 aparecen deshabilitados; dentro de 1969 solo diciembre está habilitado; dentro de diciembre, solo el día 31. La fecha mínima aceptada es literalmente **31/12/1969**.

Cualquier persona que haya empezado a cotizar antes de esa fecha no puede representar su historia laboral real. Para una herramienta de pensión, esto excluye precisamente a quienes están más cerca de pensionarse.

### 4.4 "Te faltan N años" no responde al control de edad

Probado en cuatro posiciones del control (57, 62, 67 y 75 años): el mensaje se mantuvo idéntico en los cuatro casos, igual que el bloque de distribución de fondos que depende de ese número. En el caso evaluado —una persona de 84 años ya pensionada— el mensaje decía "Te faltan 1 años".

Adicionalmente, el control permite seleccionar edades **por debajo del mínimo legal que el propio texto declara**, sin ninguna advertencia.

---

## 5. Hallazgos de experiencia

### 5.1 El Paso 2 pide datos que la gente no tiene

**Es el hallazgo más consistente del estudio.** De las 13 personas evaluadas, **solo una** —un cliente de alto patrimonio con asesor y registros propios— tenía a mano las semanas cotizadas y el saldo. Las demás aproximaron las cifras para poder avanzar, o dijeron explícitamente que tendrían que interrumpir el flujo para ir a buscarlas.

> *"Eso ya sé qué es, lo que no sé es cuántas tengo yo. ¿Y esto de dónde lo saco? ¿Tengo que llamar a alguien?"*

> *"Tengo 138 millones ahí y ahora me toca a mí calcular cuántas semanas he cotizado, como si yo fuera la que lleva la contabilidad de Skandia."*

La ayuda contextual "?" agrava el problema en vez de resolverlo: **explica qué es el dato, no dónde conseguirlo.** Para "semanas cotizadas en RAIS" el texto repite la etiqueta con más palabras. Como lo resumió una de las personas: *"Eso no es ayuda, es un diccionario."*

**Un dato que matiza la solución obvia:** enlazar a la Historia Laboral no basta. El comportamiento real en el portal de clientes muestra que, de 2.031 personas que consultan su historia laboral, **solo el 26% llega al detalle de semanas** y **apenas el 5% la descarga**. El dato existe, pero está a varios pasos y fragmentado por año. Un enlace traslada el problema; no lo resuelve.

### 5.2 El vocabulario del resultado no se decodifica

"Tasa de reemplazo", "IBL" y "Fidelidad" no se entendieron en ninguna de las 5 sesiones del segmento de mayor volumen, y solo se decodificaron por deducción en los perfiles más analíticos. **"Tasa de reemplazo" no tiene ícono de ayuda en ninguna parte de la pantalla de resultados** — aparece únicamente como encabezado de columna.

Esto conecta con evidencia previa de Skandia: en pruebas anteriores, 4 de 5 usuarios desconocían el concepto de "brecha pensional". El vocabulario técnico pensional ya había fallado antes con clientes reales.

### 5.3 Un resultado de $0 sin explicación donde más se ve

En la tabla Resumen, la mesada de RPM aparece en $0 en algunos escenarios sin ninguna nota. La explicación **sí existe** ("semanas insuficientes: recibirías indemnización sustitutiva") pero solo en la vista de detalle individual, no en la tabla que la mayoría mira.

El efecto: *"¿$0? ¿O sea que si no cotizo nada no me daría nada de nada? Eso asusta, parece que la página se dañó o que de verdad no me van a dar nada."*

### 5.4 El formulario muestra errores antes de que el usuario lo toque

Al cargar el Paso 1, el campo de fecha de nacimiento ya aparece en rojo con "Selecciona la fecha de nacimiento" y "Tu edad hoy: 0 años". Cuatro de cinco personas del panel principal reaccionaron con alguna variante de *"¿ya hice algo mal?"* o *"¿ya lo dañé y ni he hecho nada?"*.

Relacionado: los botones "Continuar" y "Simular" solo se habilitan cuando el último campo pierde el foco. Quien escribe el último dato y va directo al botón lo encuentra gris, sin ninguna pista de qué falta.

### 5.5 La distribución entre fondos se resuelve al azar

Se pide repartir los años que faltan entre tres fondos de riesgo, que deben sumar exacto. **Las 5 personas del segmento principal lo resolvieron "a ojo"** para que el contador cuadrara, sin criterio de riesgo real.

> *"No tengo ni idea de qué fondo es más arriesgado de verdad, solo puse números hasta que cuadró."*

Incluso los perfiles con formación financiera cuestionaron la unidad: piden años cuando la gente piensa en porcentajes.

---

## 6. Lo que sí funciona

Es importante no sobre-corregir lo que está bien:

- **El flujo se completa.** Las 13 personas llegaron al resultado. No hay bloqueos irrecuperables.
- **La estructura de 4 pasos es clara y memorable.** El indicador de progreso con nombres explícitos ayuda a ubicarse y retomar.
- **El nivel de detalle del resultado es sólido.** IBL, capital acumulado, semanas al momento de pensionarse y tabla por escenarios de fidelidad dan trazabilidad real. Un perfil analítico de alto patrimonio calificó la Integralidad en **4 sobre 4** — la nota más alta del estudio — precisamente por esto.
- **Las ayudas que cargan son correctas en su contenido.** La de "Estado del Afiliado" y la de "Fidelidad" explican bien lo que explican; el problema es dónde aparecen y qué pregunta responden, no su exactitud.
- **El formateo de moneda y la validación de sumas funcionan** una vez se dispara.
- **La nota sobre la regla de convergencia entre fondos** fue valorada explícitamente como un gesto de transparencia.

---

## 7. Resultados por segmento

### Rúbrica Skandia (escala 1–4)

| Segmento | Personas | Sencillez | Facilidad | Integralidad | Memorabilidad |
|---|---|---|---|---|---|
| Financial Explorer | 5 | 2,2 | 2,0 | **1,0** | 2,2 |
| Wealth Builders | 2 | 2,0 | 2,0 | 2,5 | 3,0 |
| Family Guardians | 2 | 2,5 | 2,0 | 2,0 | 2,0 |
| Capital Investor | 2 | 2,5 | 2,0 | **3,5** | 2,5 |
| Stability Seekers | 2 | 1,5 | 2,0 | 1,5 | 2,0 |
| **Total (13)** | **13** | **2,2** | **2,0** | **1,8** | **2,3** |

Dos lecturas de esta tabla:

**Facilidad es 2,0 de forma casi uniforme.** No hay un solo segmento que supere el 2 — la fricción de uso es transversal, no un problema de un perfil específico.

**Integralidad tiene el rango más amplio, y ahí está el hallazgo más revelador del estudio.**

> ### La herramienta sirve mejor al segmento que menos la necesita, y falla más duro en el de mayor volumen.
> **Capital Investor**, cuyo patrimonio hace que la pensión obligatoria sea marginal, le da **3,5/4** en Integralidad — valoran la trazabilidad y el detalle numérico. **Financial Explorer**, el segmento de mayor volumen y mayor ansiedad financiera, le da **1,0/4 en las cinco personas, sin una sola excepción.**

### Lo específico de cada segmento

**Financial Explorer** — el más afectado por todo. Ninguna de las 5 tenía los datos del Paso 2; ninguna decodificó el vocabulario del resultado; las 5 terminaron preguntando cómo contactar a alguien. Es también donde el panel lateral que muestra "R.A.I.S" resaltado desde el inicio genera más confusión: 4 de 5 no saben en qué régimen están y leyeron ese resaltado como si la herramienta ya se lo estuviera afirmando.

**Wealth Builders** — completan el flujo con más soltura, pero desconfían del resultado por una razón concreta: **no se muestran los supuestos** (rentabilidad, inflación) detrás de una cifra que se presenta con precisión de peso exacto. *"¿Con qué rentabilidad me están calculando esto? ¿4%? ¿8%? No lo sé y la cifra parece muy precisa para no decírmelo."*

**Family Guardians** — el segmento con el desencuentro más claro entre lo que la herramienta pide y lo que devuelve. El Paso 1 solicita el tipo de beneficiario y despliega un sub-formulario completo con los datos del cónyuge; **el resultado nunca vuelve a mencionarlo.** Ni siquiera se pide el nombre del beneficiario.

> *"Les di hasta la fecha de nacimiento de mi esposa y ni la mencionan al final... ¿entonces para qué me la pidieron?"*

**Capital Investor** — el contraste interno más interesante. El perfil conservador cercano a la edad de pensión la valora como "chequeo de piso mínimo" y le da la nota más alta del estudio. El perfil ejecutivo de alto patrimonio la encuentra marginal y la califica de *"funcional pero amateur en los detalles que importan"*, señalando la fricción de captura y el panel de aportes que no actualiza.

**Stability Seekers** — el segmento donde la herramienta muestra un desajuste de fondo: **le habla en tiempo futuro a gente que ya se pensionó.** El resultado dice "si aportas en los próximos años" y "te pensionarías a los 67" a una persona de 63 ya jubilada, y a una de 84 le dice "te faltan 1 años".

> *"Esto es para el Eduardo de hace tres años, no para el de ahora."*

La persona de mayor edad del panel no habría completado el flujo sola: *"Yo solo no. Ni de riesgos. Le pediría a mi hija que se siente conmigo."* El datepicker le exigió 13 interacciones distintas solo para su fecha de nacimiento.

---

## 8. Accesibilidad y cumplimiento

### Auditoría automatizada

Se corrió una auditoría automatizada (axe-core, criterios WCAG 2.0 A y AA) sobre el primer paso: **2 violaciones serias**, 26 reglas aprobadas.

- **Contraste insuficiente en 8 elementos** — incluyendo, de forma notable, **las etiquetas y leyendas de los dos círculos de resultado**. Son los elementos que comunican el resultado principal de la herramienta.
- **Un enlace sin texto discernible** en el pie de página: un lector de pantalla lo anuncia como "enlace" y nada más.

### Operabilidad para adultos mayores

Independiente de la auditoría automatizada, el recorrido con el perfil de mayor edad mostró que el selector de fecha es **en la práctica inoperable sin ayuda** para ese usuario. Sumado al piso de fecha de 1969 (§4.3), la herramienta presenta barreras de acceso reales para una porción de la población que sí tiene interés legítimo en una proyección de pensión.

Siendo Skandia una entidad vigilada publicando en su sitio público, conviene una revisión formal de accesibilidad antes de salir a producción.

### Punto normativo a revisar con Legal

La herramienta ofrece como función destacada la comparación entre los dos regímenes pensionales. **La ventana para trasladarse entre regímenes venció el 16 de julio de 2026**, y el nuevo marco del sistema entra en vigencia el 1 de abril de 2027.

En el recorrido, una persona en la edad exacta para haberse interesado en ese traslado llegó por sí sola a la conclusión equivocada:

> *"Viendo esto pensaría que sí, que como me sale mejor Prima Media me podría pasar. Pero la pantalla en ningún momento me dice si puedo o no, ni hasta cuándo."*

Se revisó el texto completo de las pantallas de resultado —las cinco pestañas de escenarios, el resumen, ambas descripciones de régimen y el desplegable de alcance de la proyección— y **no aparece ninguna mención a plazos, traslados ni fechas límite**.

Vale la pena señalar que **un competidor ya resolvió esto**: Colfondos declara explícitamente en su simulador qué marco legal aplica al usuario.

**Esto no es una decisión de Operaciones sola.** Conviene llevarlo a Legal y Cumplimiento para definir qué advertencia debe llevar la herramienta antes de publicarse.

---

## 9. Qué absorbe Operaciones si se publica tal cual

Cada hallazgo tiene una consecuencia operativa concreta. Esta sección la hace explícita.

| Hallazgo | Qué llega a Operaciones |
|---|---|
| **Sin ruta de atención** (§3-N1) | Toda persona con intención de actuar tiene que buscar el canal por su cuenta. Llegarán llamadas y mensajes **sin ninguna trazabilidad** de que vienen del simulador — no habrá forma de dimensionar el volumen ni de atribuir la demanda. |
| **Cálculo de RPM sin verificar** (§4.1) | Llamadas del tipo *"el simulador me dijo que con Colpensiones me daba el doble"*. La línea de frente tendría que explicar o defender una cifra cuya exactitud no está confirmada. En una entidad vigilada, una queja formal sobre una proyección publicada tiene ruta de atención obligatoria. |
| **Datos estimados por el usuario** (§5.1) | Consultas sobre resultados que el cliente cree suyos, calculados sobre cifras que él mismo estimó. Explicar esto por teléfono es incómodo y erosiona confianza. |
| **$0 sin explicación** (§5.3) | Llamadas con carga emocional alta — gente asustada creyendo que su pensión será cero, o que el sitio está dañado. |
| **Botón de aportes que parece no funcionar** (§4.2) | Reportes de "la página no sirve" justo en el momento de mayor intención comercial. Conversión perdida que además genera ticket. |
| **Barreras para adultos mayores** (§4.3, §8) | Demanda de atención asistida: clientes mayores que no pueden completarlo solos y llaman o van a oficina para que alguien lo haga por ellos. |
| **Punto normativo abierto** (§8) | Solicitudes de traslado de régimen que ya no son posibles. La línea de frente tendría que dar una mala noticia que la herramienta insinuó como disponible. |
| **Datos del beneficiario que no se usan** (§7) | Preguntas sobre por qué se solicitaron datos del cónyuge que luego no aparecen en ningún resultado. |

**El patrón de fondo:** la herramienta genera intención y preguntas, y hoy no tiene forma de recogerlas. Todo lo que no resuelva en pantalla se convierte en volumen de contacto no dimensionado.

---

## 10. Puntos a cerrar antes de publicar

Cuatro definiciones que el testeo no puede tomar por el equipo, y que conviene resolver antes de la publicación:

**1. Objetivo y métrica de éxito.** ¿Qué se considera que la herramienta funcionó — simulaciones completadas, contactos generados, aportes voluntarios abiertos? Sin esto no hay forma de saber después si valió la pena, ni de priorizar mejoras.

**2. Revisión normativa.** El punto del §8, con Legal y Cumplimiento.

**3. Verificación técnica de los cálculos.** Idealmente con Actuaría, al menos para el cálculo de RPM (§4.1). El research valida comprensión, no exactitud — si las cifras estuvieran mal, el testeo solo mide la reacción a un dato incorrecto.

**4. Relación con los simuladores que ya existen.** Skandia ya opera simuladores pensionales con audiencia real: el de la app móvil registra **10.013 usuarios únicos** en 17 meses. Conviene definir si el nuevo los reemplaza, los duplica o convive con ellos — y por qué este se publica en el sitio público cuando el uso actual vive en la app.

---

## 11. Recomendaciones priorizadas

| # | Acción | Criticidad | Tipo |
|---|---|---|---|
| 1 | Verificar el cálculo de la mesada de RPM con casos controlados | **Bloqueante** | Técnica |
| 2 | Hacer que el panel de Aportes Voluntarios actualice la cifra principal | **Bloqueante** | Técnica |
| 3 | Corregir el piso de fecha de 31/12/1969 en inicio de cotización | **Bloqueante** | Técnica |
| 4 | Corregir "Te faltan N años" para que recalcule con el control de edad | **Bloqueante** | Técnica |
| 5 | Definir la ruta de atención al cierre del flujo (asesor, agendamiento, contacto) | **Bloqueante** | Negocio |
| 6 | Revisar con Legal la advertencia sobre marco normativo aplicable | **Alta** | Cumplimiento |
| 7 | Reescribir las ayudas "?" para decir **dónde** conseguir cada dato, y anclarlas junto al campo | **Alta** | Experiencia |
| 8 | Llevar la explicación del $0 a la tabla Resumen, donde hoy no está | **Alta** | Experiencia |
| 9 | Validar el formulario al escribir, no solo al perder el foco | **Alta** | Técnica |
| 10 | Quitar el estado de error del campo de fecha antes de la primera interacción | **Media** | Experiencia |
| 11 | Corregir contraste de las etiquetas de los círculos de resultado y el enlace sin nombre | **Media** | Accesibilidad |
| 12 | Exponer los supuestos del cálculo (rentabilidad, inflación) junto al resultado | **Media** | Confianza |
| 13 | Permitir distribuir entre fondos en porcentaje, o mostrar el equivalente | **Media** | Experiencia |
| 14 | Devolver el dato del beneficiario en el resultado, o no pedirlo | **Media** | Experiencia |
| 15 | Ajustar el copy para contemplar a quien ya está pensionado | **Media** | Experiencia |
| 16 | Mejorar el selector de fecha (apertura en década razonable, entrada por teclado) | **Media** | Accesibilidad |
| 17 | Revisión formal de accesibilidad WCAG 2.1 AA antes de producción | **Media** | Cumplimiento |

---

## 12. Alcance y limitaciones de este estudio

Para que las conclusiones se usen con la confianza que corresponde:

- **El panel de testeo es sintético**, no usuarios reales. Los hallazgos de comprensión, emoción e intención son **señal direccional**, no evidencia de campo. Lo que sí es directamente verificable —y se repitió en múltiples sesiones independientes— son los hallazgos técnicos del §4.
- **Los datos de historia laboral usados en cada recorrido son plausibles pero estimados** por cada persona sintética. Las cifras de resultado que aparecen en este informe son las que la herramienta calculó en vivo a partir de esos datos, no cifras de ningún cliente real.
- **La muestra por segmento es desigual**: 5 personas en Financial Explorer (el segmento de mayor volumen, priorizado) y 2 en cada uno de los otros cuatro. Las conclusiones de los segmentos con 2 personas son más frágiles.
- **No se evaluó la audiencia de no-clientes.** Siendo una herramienta del sitio público, su audiencia primaria es gente que aún no es cliente de Skandia. Los 5 segmentos disponibles están construidos sobre la base instalada. Este vacío queda abierto.
- **No se evaluó la exactitud de los cálculos**, solo su comprensión y su coherencia interna. De ahí la recomendación #1.
- **El alcance móvil no está dimensionado.** El defecto de diseño móvil está verificado, pero no se pudo establecer qué proporción de la audiencia del sitio público lo sufriría. La analítica del sitio (Google Analytics ya está cargando en la página) resolvería esto rápidamente.

---

## Documentos de soporte

Este informe consolida el trabajo de validación completo. El detalle vive en:

| Documento | Contenido |
|---|---|
| `simulador-jubilacion-teardown.md` | Ficha completa del prototipo: los 4 pasos, cada campo, el modelo de cálculo |
| `simulador-jubilacion-heuristica.md` | 11 hallazgos de usabilidad con severidad, evidencia y recomendación |
| `simulador-jubilacion-research.md` | Evidencia previa, benchmark competitivo, contexto normativo e hipótesis |
| `simulador-jubilacion-instrumento-testeo.md` | Guion de sesión, rúbrica y formato de reporte usados en el testeo |
| `testeo-financial-explorer.md` y 4 más | Los 13 recorridos completos, persona por persona |
| `evidencia/` | 12 capturas del recorrido en escritorio y móvil |
