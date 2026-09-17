# Testeo Financial Explorer — Simulador Jubilación

**Fecha:** 2026-09-16
**Segmento:** Financial Explorer (prioridad de testeo #1 del sprint — mayor volumen, mayor ansiedad financiera)
**Método:** walkthrough con 5 agentes sintéticos en carácter, uno por persona del segmento, cada uno operando el prototipo real en vivo (UAT) en una sesión de navegación aislada
**Prototipo:** `https://uat.skandia.co/simulador-pensional` — Simulador Jubilación (comparación RAIS vs RPM), 4 pasos
**Instrumento:** `simulador-jubilacion-instrumento-testeo.md`
**Insumos previos:** `simulador-jubilacion-teardown.md` · `simulador-jubilacion-heuristica.md` · `simulador-jubilacion-research.md`

> **Honestidad metodológica.** Este es un walkthrough con agentes sintéticos actuando en carácter sobre el prototipo real de UAT — no son sesiones con usuarios reales. Los 5 recorridos sí se ejecutaron en vivo contra la aplicación (no son simulaciones narrativas): cada persona navegó el flujo completo, llenó campos, tocó los defectos conocidos de la heurística y leyó cifras reales calculadas por el prototipo. Los hallazgos de comprensión, reacción emocional y decisión de siguiente paso deben leerse como señal direccional de un panel sintético, no como evidencia de campo. Dos hallazgos técnicos nuevos que aparecieron de forma corroborada en varias personas (ver Síntesis) sí ameritan validación técnica real por Producto/Desarrollo, independientemente de su origen sintético.
>
> **Nota de transcripción.** Los reportes de Roberto y Daniel llegaron con un artefacto de repetición de texto en un tramo puntual (glitch de generación del agente, no un hallazgo). Se limpiaron esos fragmentos parafraseando el contenido recuperable sin alterar la sustancia; se señala en el punto correspondiente.

---

## Resumen ejecutivo

Las 5 personas completaron el flujo de punta a punta (Paso 0 a Paso 4, incluido el panel de Aportes Voluntarios), ninguna abandonó de forma irrecuperable. Aun así, el veredicto es consistentemente débil: **Integralidad quedó en 1/4 en las 5 personas** — todas llegan a "Volver" / "Generar PDF" sintiendo que no hay ningún camino hacia Skandia. **H1, H5 y H8 se confirman en el panel completo (5/5)**; **H3 y H4 se confirman en 5/5**; **H2 y H6 se confirman con matices** (parcial en varias, por razones distintas — ver detalle). La hipótesis de segmento **HS1 se confirma con fuerza en las 5 personas** y **HS2 también en las 5**, agravada por un hallazgo técnico no anticipado: el panel de "Aportes voluntarios" del Paso 4 —el momento de mayor intención de compra de todo el flujo— no refleja el recálculo en el resultado principal que el usuario está mirando, en 4 de las 5 sesiones (y en la sesión de Andrés directamente no recalculó nada). Esto convierte el momento de mayor oportunidad comercial del simulador en el momento de mayor desconfianza técnica.

---

## 1. Carolina — Financial Explorer, la Contadora Ansiosa

```
Persona: Carolina Ramírez, Financial Explorer — contadora de 34 años, organizada en el trabajo pero perdida con sus propias finanzas, le da vergüenza preguntar cosas básicas.

Veredicto rápido: Completó el flujo completo (Pasos 1 a 4, incluyendo Resumen y aportes voluntarios), pero llega al final más confundida que tranquila — con dos cifras en pantalla que no sabe interpretar del todo y sin nadie a quien preguntarle ahí mismo.

Hallazgos por paso:
- Paso 0: Antes de tocar nada, la pantalla ya mostraba el campo de fecha con borde rojo, "Selecciona la fecha de nacimiento" y "Tu edad hoy: 0 años", y en el panel derecho "R.A.I.S" aparecía resaltado en verde con su definición ya desplegada. "Uy, ¿ya hice algo mal? Ni siquiera he puesto nada... y esto de ahí a la derecha, ¿ya me está diciendo en cuál estoy? Yo la verdad no sé si tengo RAIS o el otro, tengo algo de pensión obligatoria en Skandia pero nunca me puse a mirar cuál es cuál."
- Paso 1: Llenó nombre, género y fecha (15/06/1992) sin mayor drama una vez encontró que el encabezado del calendario ("2026") se podía hacer clic para saltar años — antes de eso pensó en darle a la flechita como 30 veces. El ícono de ayuda de "Estado del Afiliado" abrió su explicación abajo en el panel derecho, lejos del campo. "Ah, o sea que 'Válido' es que yo puedo trabajar y 'Inválido' es que ya no. Ya, eso sí lo entendí, pero me tocó ir a buscarlo por allá abajo, casi ni lo veo." En "Tipo de Beneficiario" dudó un segundo antes de marcar "No tiene beneficiarios": "¿Debería poner a mis papás ahí? No, no, si no me han dicho nada, dejo que no tengo beneficiarios."
- Paso 2 (especial atención): Aquí fue donde más se le notó la inseguridad. Salario y tipo de salario los puso sin problema. Pero al llegar a semanas cotizadas en RAIS, semanas cotizadas en RPM y saldo en la cuenta individual, se quedó en blanco. Le dio clic a la ayuda de "semanas cotizadas en RAIS" esperando que le dijera dónde conseguir el dato, y solo le repitió la definición ("Semanas cotizadas en el Régimen de Ahorro Individual con Solidaridad, administrado por los fondos privados"). "Eso ya sé qué es, lo que no sé es cuántas tengo yo. ¿Y esto de dónde lo saco? ¿Tengo que llamar a alguien?" Terminó poniendo 500 semanas en RAIS, 0 en RPM y $17.800.000 de saldo, todo "a ojo": "La verdad no tengo ni idea si esto está bien, pero pongo algo para poder seguir, si no me quedo atascada aquí toda la tarde."
- Paso 3: El slider ya traía 62 años por defecto con el mensaje "la edad mínima de ley en tu caso es 57 años, te faltan 28 años". Repartió esos 28 años entre los tres fondos como 10/10/8 sin entender bien el porqué. "¿Fondo de mayor riesgo, moderado, conservador? Yo no sé cuál me conviene, puse un poco en cada uno para que me cuadre el numerito de abajo, que eso sí lo entendí: tiene que sumar 28."
- Paso 4: Vio los dos círculos — Régimen de ahorro individual $2.288.364 (51% del salario) y Régimen de prima media $3.600.000 (80% del salario) — y el detalle: se pensionaría a los 62, con 1.956 semanas cotizadas, 0 semanas faltantes para RPM, IBL de $4.500.000 y capital acumulado de $469.398.525. "Ay, ¿entonces con Colpensiones me daría casi el doble? Eso sí me preocupa, ¿será que estoy en el que no me conviene?" En la pestaña Resumen vio que en el escenario "6 meses" la mesada RPM aparece en $0 y en "0 meses" ambas mesadas en $0, sin ninguna nota en la tabla misma: "¿$0? ¿O sea que si no cotizo nada no me daría nada de nada? Eso asusta, parece que la página se dañó o que de verdad no me van a dar nada." Probó "Agregar aportes voluntarios", puso $100.000 mensuales y le dio "Calcular" dos veces — la mesada de RAIS se quedó exactamente igual en $2.288.364, sin cambiar ni un peso. "¿Le di bien? ¿Pasó algo? No veo que haya cambiado nada, qué raro." No vio mención de ningún beneficio tributario por el aporte voluntario. Al final solo encontró "Volver" y "Generar PDF": "¿Y ya? ¿No hay un botón para hablar con alguien? Si yo quisiera hacer algo con esto no sabría ni por dónde arrancar, tocaría que yo misma busque el chat o llame."

Hipótesis (H1–H8):
- H1 (Crítica): Confirmada. El Paso 2 fue el punto de mayor fricción — semanas RAIS, semanas RPM y saldo son datos que Carolina no tiene de memoria, la ayuda del ícono "?" solo redefinió el término sin decir dónde conseguir el dato, y terminó inventando números para poder avanzar.
- H2 (Crítica): Parcial. Carolina escogió "Comparación entre los dos regímenes" precisamente porque no sabe en cuál está y esperaba que la herramienta se lo aclarara — la lee como si la decisión siguiera abierta. No se pudo confirmar la parte de vocabulario "pilares/ACCAI" porque su perfil no la lleva a usar esos términos espontáneamente (sí aparece "ACCAI" pero como razón social de Skandia AFP en el pie de página, no como término explicado al usuario).
- H3 (Alta): Confirmada. "Tasa de reemplazo", "IBL" y "capital acumulado" aparecen en el detalle sin ningún ícono de ayuda ni decodificación — Carolina los lee pero no los procesa, solo reacciona a las cifras en pesos. "Fidelidad" sí tenía un "?" pero, consistente con su personaje, prefirió intentar entender sola antes de usarlo.
- H4 (Media-alta): Confirmada. Repartir los 28 años entre tres fondos fue un ejercicio de "cuadrar el número" sin entender la lógica de riesgo detrás — lo resolvió a ojo, tal como predice la hipótesis.
- H5 (Crítica, negocio): Confirmada. El flujo termina en "Volver" / "Generar PDF" sin ningún llamado a hablar con un asesor o abrir un producto — Carolina lo nota explícitamente y pregunta cómo seguiría.
- H6 (Alta): Confirmada. En la tabla Resumen, la mesada RPM en $0 (escenarios "6 meses" y "0 meses") aparece sin ninguna nota explicativa en la tabla misma, y Carolina lo interpreta como error del sitio o como una sentencia personal alarmante.
- H7: No aplica (sesión de escritorio, segmento cubierto por otra fuente).
- H8 (Alta): Confirmada. El borde rojo y "Tu edad hoy: 0 años" aparecieron antes de tocar el campo, generando una duda inicial de "¿ya hice algo mal?" que contamina la primera impresión antes incluso de empezar a llenar el formulario.

Sub-hipótesis del segmento:
- HS1: Confirmada — el muro del Paso 2 la detuvo tal como predice: no tiene relación previa con su historia laboral, no sabe que esos datos existen en un extracto, y tuvo que inventar cifras para continuar.
- HS2: Confirmada — ver $2.288.364 vs $3.600.000 le generó ansiedad ("¿estoy en el que no me conviene?") sin ninguna ruta de salida; el panel de aportes voluntarios no menciona beneficio tributario y, además, en esta sesión el botón "Calcular" no reflejó ningún cambio en la mesada tras dos intentos, lo que habría dejado a Carolina con más frustración, no menos.
- HS3: Confirmada — el panel de "Régimen" en el sidebar muestra R.A.I.S resaltado en verde con su definición desplegada desde antes de que ella interactúe, lo cual para alguien que no sabe en qué régimen está es fácil de leer como una afirmación no pedida ("¿ya me está diciendo en cuál estoy yo?").

Rúbrica: Sencillez 2 · Facilidad 2 · Integralidad 1 · Memorabilidad 2

Hallazgo no anticipado: Al usar el panel de "Aportes voluntarios" en el Paso 4 (Fidelidad 12 meses), se ingresó un aporte periódico de $100.000 mensuales y se hizo clic en "Calcular" dos veces (incluyendo un intento con blur previo del campo) — la mesada de Régimen de ahorro individual permaneció exactamente igual ($2.288.364) sin ningún cambio visible en pantalla ni error de consola capturado. Esto es un fallo NUEVO no descrito en los defectos conocidos: el botón "Calcular" del panel de aportes voluntarios parece no recalcular la mesada mostrada, lo cual — desde el personaje — se leería como "le di clic y no pasó nada", agravando exactamente la ansiedad sin salida que describe HS2.
```

---

## 2. Roberto — Financial Explorer, el Ingeniero Leal

```
Persona: Roberto Martinez, segmento Financial Explorer, ingeniero civil de Barranquilla, 41 años, 10 años en Skandia por productos voluntarios (PAC + Fondos Mutuos), papá de dos hijos, competitivo.

Veredicto rápido: Completó el flujo completo hasta el resultado y hasta "Aportes voluntarios", pero llegó con más preguntas que las que tenía al empezar. Termina con la sensación de haber llenado un formulario largo para un número que igual no sabe si es el suyo.

Hallazgos por paso:
- Paso 0: Antes de tocar nada, la Fecha de Nacimiento ya estaba en rojo con "Selecciona la fecha de nacimiento" y "Tu edad hoy: 0 años", y en el panel de la derecha ya aparecía R.A.I.S en verde, como seleccionado, contra R.P.M en gris. "Yo ni he dicho nada y ya me están mostrando un resultado en verde. ¿Ese es en el que yo estoy? Porque mi plata obligatoria de pensión está en otro fondo, no en Skandia — aquí en Skandia tengo es lo que yo decidí meter por mi cuenta. ¿Esto es de lo de Skandia o de lo del otro fondo?"
- Paso 1: Lo del beneficiario generó una duda real: eligió Cónyuge y le pidió los datos de su esposa, pero en ningún lado le preguntó por sus hijos. "Mis hijos son mi motivación principal y el formulario ni los menciona. Uno pensaría que si estoy pensando en el futuro de mi familia, ellos también entran en la ecuación." La fecha de nacimiento le tocó buscarla año por año — por suerte descubrió que el encabezado del calendario es clicable para saltar por década.
- Paso 2 (especial atención): Aquí fue donde más se trabó. Semanas cotizadas en RAIS: puso 800 pero fue un tiro al aire — "creo que es como 800, algo así, pero la verdad no podría jurarlo." Semanas en RPM las puso en 0 porque siempre ha estado en fondo privado, hasta donde recuerda. El saldo en la cuenta de ahorro individual lo puso en $180.000.000 pero es pura especulación — "llevo casi 20 años cotizando, debe ser plata, pero no tengo cómo confirmar ese número aquí mismo, y eso me frustra." Le dio clic al ícono de ayuda de "semanas cotizadas" y solo le explicó qué es el término, no dónde consultar su número real. "¿Y entonces para qué me pone el signo de interrogación si no me dice dónde busco el dato?"
- Paso 3: Bajó la edad de pensión a 65 porque quiere jubilarse un poco antes por sus hijos. Al llegar a la distribución de fondos en años, no entendió bien la lógica: "¿Esto es como el riesgo de mis inversiones o qué es? ¿Por qué tengo que repartir años y no plata?" Terminó poniendo 8-8-8 porque sumaban los 24 que pedían, no porque entendiera qué significa meterle más años al "Mayor Riesgo" versus al "Conservador" — fue adivinar para que el contador cuadrara.
- Paso 4: Vio $7.475.773 en RAIS (62% de su salario) contra $9.600.000 en RPM (80% de su salario) con fidelidad de 12 meses. "¿O sea que me conviene más el otro régimen? ¿Y yo puedo cambiarme a ese todavía?" (nadie le dijo que esa ventana ya cerró). En la pestaña "0 meses" del detalle individual sí encontró explicación ("Semanas insuficientes: recibirías indemnización sustitutiva"), pero en "Resumen" la tabla comparativa muestra "Mesada pensión RPM: $0" sin ninguna nota ahí mismo. "Si no hubiera visto la explicación en la otra pestaña, este $0 en la tabla me habría hecho pensar que el simulador se dañó, o peor, que mi pensión en ese régimen sería literalmente cero." Probó "Aportes voluntarios" con $500.000 mensuales: el sistema calculó que subiría a $8.969.386, pero ese número no se lo mostró donde estaba mirando (el círculo de arriba) sino en un recuadro nuevo hasta abajo de la página — "otra vez lo mismo del ícono de ayuda: me dan la respuesta lejos de donde tengo los ojos." Tampoco mencionó ningún beneficio tributario. No entendió bien "IBL" ni "tasa de reemplazo" ni por qué se llama "Fidelidad" a elegir cada cuánto aporto. Al final solo tenía "Volver" y "Generar PDF": "Yo ya llené todo esto, ¿y ahora qué? Si quiero hablar con Ana Clarissa, mi asesora, ¿por dónde le escribo? Aquí no hay ni un botón."

Hipótesis (H1–H8):
- H1 (Crítica): Confirmada. Los tres datos del Paso 2 (semanas RAIS, semanas RPM, saldo) los tuvo que adivinar o especular; la ayuda "?" define el término pero no dice dónde conseguir el dato.
- H2 (Crítica): Confirmada, con un matiz propio de su perfil: no solo leyó la comparación como una decisión abierta ("¿yo puedo cambiarme a ese todavía?"), sino que además no tenía claro si el simulador hablaba de su plata obligatoria (que está en otra AFP) o de su cuenta voluntaria en Skandia — el sidebar preseleccionando RAIS desde el segundo cero no ayudó a aclararlo.
- H3 (Alta): Confirmada. No decodificó "tasa de reemplazo", "IBL", "capital acumulado" ni "Fidelidad" — los usó porque el sitio se los mostraba, no porque los entendiera. *(Nota: este punto llegó con un artefacto de repetición de texto en el reporte original del agente; se conserva aquí la formulación limpia y equivalente en sustancia.)*
- H4 (Media-alta): Confirmada. Repartió los 24 años en partes iguales sin entender la lógica de riesgo/tiempo detrás; fue una forma de "cuadrar el contador", no una decisión informada.
- H5 (Crítica, negocio): Confirmada. Terminó en "Volver" / "Generar PDF" sin ninguna ruta hacia su asesora ni hacia Skandia.
- H6 (Alta): Parcial. En la vista individual por círculo (pestaña "0 meses") sí hay explicación del $0 ("semanas insuficientes, indemnización sustitutiva"). Pero en la tabla del Resumen ese mismo $0 aparece sin ninguna nota — ahí sí se leería como error.
- H7: No aplica (sesión de escritorio).
- H8 (Alta): Confirmada. El error rojo y "Tu edad hoy: 0 años" antes de tocar nada generaron duda del sitio antes de siquiera empezar.

Sub-hipótesis de segmento:
- HS1: Confirmada. El Paso 2 fue su punto de mayor fricción — no tiene relación previa con su historia laboral cotizada y tuvo que especular los tres datos clave.
- HS2: Confirmada. Ver la mesada proyectada (y sobre todo el $0 de RPM en la tabla) le generó ansiedad sin ruta de salida clara; el panel de aportes voluntarios recalculó un número mejor pero no mencionó beneficio tributario y además mostró el nuevo valor lejos de donde miraba, sin actualizar el círculo principal.
- HS3: Confirmada, con una capa extra: el régimen preseleccionado en verde desde el inicio confundió doblemente porque ni siquiera tiene su pensión obligatoria en Skandia.

Rúbrica: Sencillez 2 · Facilidad 2 · Integralidad 1 · Memorabilidad 2

Hallazgo no anticipado: Al usar el panel de "Aportes voluntarios" y darle "Calcular", el nuevo valor de mesada ($8.969.386 con aporte de $500.000/mes) NO actualiza el círculo principal de resultado en la parte superior de la pantalla (que se queda mostrando el valor viejo, $7.475.773) — el nuevo número solo aparece en un recuadro de confirmación aparte, hasta el final de la página, desconectado visualmente del resultado principal. Esto repite, a nivel estructural, el mismo patrón de "la respuesta aparece lejos de donde miro" que ya se sabía para los íconos de ayuda del Paso 2, pero aquí ocurre con el resultado económico más importante de toda la simulación.
```

---

## 3. Andrés — Financial Explorer, el Técnico Desconectado

```
Persona: Andrés, 31 años, ingeniero de sistemas, Medellín — segmento Financial Explorer, "El Técnico Desconectado" (mono-producto FPOB, 4 años sin entrar al portal).

Veredicto rápido: Completó el flujo de punta a punta, sin bloquearse en ningún paso — pero llegó al final con la misma sensación con la que entró: "bien, ¿y ahora qué hago con esto?". Ninguna cifra le genera confianza suficiente para tomar una decisión, y el cierre no le da ningún lugar a dónde ir.

Hallazgos por paso:
- Paso 0: Antes de tocar nada, el campo de Fecha de Nacimiento ya estaba en rojo con "Selecciona la fecha de nacimiento" y "Tu edad hoy: 0 años". "Esto es un formulario validando un campo que nadie ha tocado todavía — eso no es UX, es un bug de timing en el validador." También vio que el sidebar ya mostraba "R.A.I.S" en verde activo y "R.P.M" apagado, antes de decir nada de su historia laboral. "¿Cómo sabe eso todavía? Ah, cierto — mi plata obligatoria está en Skandia, o sea que ya sé que estoy en fondo privado. Pero si no lo hubiera pensado dos segundos, esto me habría confundido."
- Paso 1: El datepicker abre en 2026; usó el encabezado "Elegir año" para saltar en bloques de década en vez de darle clic decenas de veces a "mes anterior" — "eso sí lo hicieron bien, aunque nada en la interfaz me dice que el encabezado es clicable, lo probé por intuición de dev." El verdadero tropiezo fue el beneficiario: vive en unión libre, no casado, y las opciones eran Cónyuge / Hijo / Padres / Hermanos / No tiene. Seleccionó "Cónyuge" para ver si algo aclaraba el tema — no había tooltip ni ayuda ahí, a diferencia de "Estado del Afiliado" que sí tiene su "?". "Este es exactamente el tipo de ambigüedad legal que un formulario no debería dejarme adivinar. ¿Cónyuge es matrimonio civil o aplica unión libre? Nadie me lo dice, así que elegí Cónyuge por lógica, no porque el formulario me lo confirmara."
- Paso 2 (el que más le interesaba): El campo de salario se ve como número plano "9000000" mientras escribe y solo se formatea a "$ 9.000.000" cuando pierde el foco — "eso es un binding sin pipe de formato en el keyup, clásico." Pero lo grave fue lo otro: semanas cotizadas en RAIS, en RPM, y saldo en su cuenta individual — ninguno lo tiene en la cabeza. Le dio clic al ícono de ayuda de semanas RAIS esperando una pista de dónde sacar el dato, y lo que apareció fue solo la definición del término. "Eso no es ayuda, es un diccionario. Yo ya sé qué es RAIS — lo que no sé es dónde consigo el número de semanas. Y esto ya lo tiene Skandia, ¿por qué me toca escribirlo yo a mano?" Terminó metiendo un estimado (520 semanas) y el saldo aproximado que recuerda de su FPOB ($46.100.000), sin ninguna certeza de que sea el dato actual.
- Paso 3: El slider arrancó en 67 años con "la edad mínima de ley es 62 años, te faltan 36 años" — jugó moviéndolo con las flechas del teclado solo para ver cómo reaccionaba (63, luego volvió a 65: "te faltan 34 años"). Distribuyó 20/10/4 entre Mayor Riesgo, Moderado y Conservador para cuadrar los 34 exactos. "Entiendo el concepto de riesgo en dos segundos, soy ingeniero — pero pedir años en vez de porcentaje es una decisión rara. ¿Por qué no simplemente '% en cada fondo'? Y en ningún lado explican qué implica poner más años en 'mayor riesgo' versus menos."
- Paso 4: Eligió "Proyección del régimen de ahorro individual" (no comparación), así que solo vio un círculo, no RAIS vs RPM. Con fidelidad "12 meses": mesada $9.015.861 (100% de su salario), se pensionaría a los 65, semanas cotizadas 2.288, IBL $9.000.000, capital acumulado $1.684.124.276. Cambió a "0 meses" y la mesada cayó a $1.875.879 (21% del salario). En "Resumen" vio la tabla completa: semanas 2.288/1.846/1.404/520/1.993, mesada $9.015.861/$7.230.865/$5.445.870/$1.875.879/$7.825.864, tasa de reemplazo 100%/80%/61%/21%/87%. "Pasar de 100% a 21% solo por dejar de aportar es una caída brutal, y no hay ni una frase que explique qué significa 'Fidelidad' en la práctica — asumo que es constancia de aporte, pero es una suposición mía, no algo que el simulador me confirme." Probó "Aportes voluntarios": puso $200.000 mensuales, le dio "Calcular" dos veces — la mesada y el capital acumulado quedaron exactamente iguales ($9.015.861 / $1.684.124.276), sin cambiar un peso. Terminó en "Volver" / "Generar PDF", sin ningún botón de asesor ni de producto.

Hipótesis (H1–H8):
- H1 (Crítica): Confirmada. Los tres datos del Paso 2 no los tiene a mano, la ayuda define el término en vez de decir dónde buscar el dato, y terminó estimando "a ojo" su historia laboral completa.
- H2 (Crítica): Parcial / no aplica directamente en su recorrido — eligió "Proyección del régimen de ahorro individual" precisamente porque no quería comparar dos regímenes que no entiende, así que nunca vio el encuadre "puedes cambiarte". Pero eso en sí es un hallazgo: el simulador deja esquivar el tema sin resolverlo — si alguien sí elige comparar, el problema de la ventana cerrada sigue intacto.
- H3 (Alta): Confirmada. "Tasa de reemplazo" la dedujo del contexto (es técnico), pero "IBL" y "Fidelidad" aparecen sin ninguna definición visible en el flujo principal — solo las interpretó como constancia de aporte, sin confirmación del sistema.
- H4 (Media-alta): Confirmada. Distribuir años exactos entre tres fondos exige aritmética mental — a él no le costó por perfil, pero es carga cognitiva innecesaria comparado con simplemente pedir porcentajes.
- H5 (Crítica, negocio): Confirmada. Terminó en "Volver" / "Generar PDF". Ni un botón para hablar con Paula (su asesora, a quien nunca ha llamado) ni para abrir nada.
- H6 (Alta): No aplica directamente (su ruta era régimen único, sin RPM en $0), pero el equivalente ocurrió: la mesada cayó de 100% a 21% de un escenario a otro sin ninguna explicación en pantalla — mismo efecto de alarma sin contexto.
- H7: No aplica (escritorio).
- H8 (Alta): Confirmada. "Eso ya me hace dudar de si el cálculo de atrás es tan sólido como se ve, si el formulario de adelante ya tiene bugs de este tipo."
- HS1: Parcial. El muro del Paso 2 es real y lo sintió — pero al ser técnico y tolerar mejor la fricción, no abandonó: estimó los datos y siguió. Confirma que el muro existe, pero no bloquea a todo el mundo por igual — a alguien menos técnico o con menos paciencia sí lo hubiera hecho.
- HS2: Confirmada. Ver la mesada caer de 100% a 21% entre escenarios de fidelidad genera ansiedad real, y el panel de "Aportes voluntarios" — que debería ser la salida — ni siquiera funcionó (ver hallazgo no anticipado), y en ningún momento mencionó beneficio tributario. Cero alivio.
- HS3: Parcial. A él no lo confundió el régimen preseleccionado en el sidebar porque puede deducir que su FPOB implica fondo privado — pero reconoce que esa deducción depende de que el usuario sepa que Skandia es un fondo privado, cosa que la mayoría de su segmento no necesariamente sabe.

Rúbrica: Sencillez 3 · Facilidad 2 · Integralidad 1 · Memorabilidad 3

Hallazgo no anticipado: El panel de "Aportes voluntarios" no recalculó nada. Agregó $200.000 de aporte periódico mensual y le dio clic a "Calcular" dos veces seguidas (el valor sí quedó guardado en el campo, formateado como "$ 200.000"); tanto la mesada ($9.015.861) como el capital acumulado ($1.684.124.276) quedaron exactamente idénticos a los del escenario sin aportes voluntarios, sin ningún error visible en consola. "Esto no es un problema de comunicación, es un botón que no hace nada — le pedí explícitamente que sumara plata a mi proyección y la cifra ni se movió un peso. Si esto es lo que se supone que me convence de meter plata extra, hizo justo lo contrario: ahora no confío en que el cálculo de atrás esté completo."
```

---

## 4. Patricia — Financial Explorer, la Ejecutiva Privilegio

```
Persona: Patricia Gómez, Financial Explorer — segmento Privilegio, ejecutiva de 42 años, saldo más alto del panel ($138.3M), sin tiempo, esperando un trato diferenciado que Skandia no le está dando.

Veredicto rápido: Completó el flujo hasta el final (llegó a "Generar PDF"), pero lo hizo a punta de adivinar datos que no traía consigo y sin que en ningún momento sintiera que esto era "para ella" como cliente Privilegio. Termina con la sensación de "listo, ya lo llené", no con la sensación de haber resuelto algo. Si no fuera porque tenía que completarlo, en el Paso 2 hubiera cerrado la pestaña y llamado a Sandra.

Hallazgos por paso:
- Paso 0: Antes de tocar nada ya veía un panel fijo a la derecha con "R.A.I.S" en verde y "R.P.M" en azul, como si uno de los dos ya estuviera "activo". "¿Ese verde significa que yo estoy ahí? Porque yo la verdad no tengo ni idea en cuál de los dos estoy — sé que mi plata está en un fondo privado con Skandia, pero nadie me ha dicho nunca si eso es 'RAIS' o qué." Para qué sirve la herramienta lo intuyó rápido (comparar su pensión en dos escenarios), pero el vocabulario ya generó ruido desde el segundo cero.
- Paso 1: Llenar sus datos fue lo más fácil de todo el recorrido, aunque tuvo que devolverse cuatro décadas en el calendario para llegar a 1984, lo cual consideró ridículo para un dato de fecha de nacimiento. Lo que sí le molestó fue el beneficiario: "tengo pareja Y tengo un hijo, ¿por qué me toca elegir solo uno? Si es Privilegio, ¿no se supone que deberían poder ver mi situación completa, no la más simple?"
- Paso 2 (especial atención): Aquí fue donde de verdad se frustró. Le pidieron semanas cotizadas en RAIS, semanas en RPM y saldo en su cuenta individual — datos que no trae en la cabeza en este momento. "Tengo 138 millones ahí y ahora me toca a mí calcular cuántas semanas he cotizado, como si yo fuera la que lleva la contabilidad de Skandia." Le dio clic al signo de ayuda de "semanas cotizadas en RAIS" esperando que le dijera dónde conseguir el dato, y lo único que hizo fue repetirle la definición, lejísimos de donde tenía puesto el ojo. Tuvo que inventarse números (800 semanas, saldo de 126 millones) solo para poder avanzar — "eso no es lo que yo haría en la vida real, ahí cierro y llamo a mi asesora." Además el campo de salario se quedó mostrando "18000000" en crudo, sin puntos ni el símbolo de pesos, hasta que le quitó el ojo de encima.
- Paso 3: "¿Cómo así que tengo que repartir 20 años exactos entre tres fondos yo misma?" No tenía idea de qué significa meterle más años al fondo "de mayor riesgo" versus el "conservador" en términos de su plata, y puso números al azar (5, 10 y 5) solo para que cuadrara el contador. "Esto es exactamente lo que le pagaría a mi asesora para que me lo resolviera — no tengo tiempo para simular escenarios de riesgo yo misma."
- Paso 4: Vio los dos círculos: régimen de ahorro individual $4.666.912 (26% de su salario) y régimen de prima media $9.585.360 (53%). "¿Cómo así que en un lado me daría más del doble que en el otro? Eso no me lo explica nadie aquí." En el detalle vio semanas cotizadas 1.840, semanas faltantes para RPM 0, IBL $12.600.000 y capital acumulado $957.296.082 — cifras que ni siquiera sabe si corresponden a la realidad porque inventó las semanas y el saldo. En "Resumen" vio que en la columna "0 meses" la mesada de RPM aparece en "$0" sin ninguna nota — "esto está dañado", pensó, hasta que fue a mirar el detalle individual de esa pestaña, que sí explicaba "semanas insuficientes: recibirías indemnización sustitutiva" — pero esa explicación NO está en la tabla resumen, solo en la vista individual. Probó "Aportes voluntarios": puso $500.000 mensuales y le dio "Calcular" — el resultado apareció en un cuadrito verde más abajo diciendo que su mesada subiría a $5.673.344 ($1.006.432 más), aclarando que "los aportes voluntarios no suman semanas cotizadas, solo aumentan el capital" — pero en ningún lado mencionó beneficio tributario. Para cerrar: solo "Volver" y "Generar PDF". "¿Y ahora yo qué hago con este PDF? ¿Se lo mando a Sandra por WhatsApp?"

Hipótesis (H1–H8):
- H1 (Crítica): Confirmada. No tenía a la mano semanas RAIS, semanas RPM ni saldo; tuvo que inventar cifras para poder seguir, y el ícono de ayuda solo repite la definición sin decir dónde conseguir el dato.
- H2 (Crítica): Confirmada. Leyó "Comparación entre los dos regímenes" como si todavía pudiera decidir a cuál cambiarse, y en ningún momento el simulador le dijo que esa ventana ya cerró.
- H3 (Alta): Confirmada. "Tasa de reemplazo", "IBL" y "Fidelidad" no los entendió sin ayuda externa — solo entendió "capital acumulado" porque es una cifra en pesos que reconoce.
- H4 (Media-alta): Confirmada. Repartió los 20 años entre los tres fondos completamente al azar, sin ningún criterio.
- H5 (Crítica, negocio): Confirmada. El cierre es "Volver" / "Generar PDF", sin ninguna acción para contactar a Skandia o a su asesora.
- H6 (Alta): Parcial/Confirmada. En la tabla "Resumen" el $0 de RPM en el escenario "0 meses" aparece sin explicación. Sí existe una explicación ("indemnización sustitutiva por semanas insuficientes"), pero está escondida en la vista de detalle individual, no en la tabla — así que para quien solo mira el Resumen, sigue leyéndose como error.
- H7: No aplica (sesión de escritorio).
- H8 (Alta): Parcial. No le tocó el borde rojo pre-touch ni el "Continuar" bloqueado tras llenar todo — esos dos no aparecieron en su corrida. Sí confirmó el defecto del campo de salario mostrando el número plano sin formatear hasta perder el foco, lo cual sí le generó un segundo de duda sobre si había digitado bien.

Sub-hipótesis de segmento:
- HS1: Confirmada — como Financial Explorer/Privilegio con saldo alto pero sin relación activa con su historia laboral, el Paso 2 fue su punto de mayor fricción real, y en la vida real ahí abandonaría.
- HS2: Confirmada — ver su mesada le generó ansiedad ("¿eso alcanza o no?") sin ninguna ruta de salida hacia un asesor, y el panel de aportes voluntarios no menciona en ningún momento beneficio tributario, que es justo el argumento que la haría poner más plata ahí.
- HS3: Confirmada — el panel lateral fijo con "R.A.I.S" resaltado en verde desde el inicio le hizo dudar si eso significaba que ya estaba en ese régimen, cuando en realidad no tiene ni idea en cuál está.

Rúbrica: Sencillez 2 · Facilidad 2 · Integralidad 1 · Memorabilidad 2

Hallazgo no anticipado: Cuando calculó los "Aportes voluntarios", el resultado nuevo (mesada con aportes) apareció en un recuadro de texto pequeño DEBAJO del formulario, mientras que los círculos grandes de arriba se quedaron mostrando la cifra vieja sin actualizarse. Si uno no se acuerda de bajar a revisar, puede pensar que el botón "Calcular" no hizo nada — le tocó desplazarse para confirmar que sí había pasado algo. "Con el tiempo contado que tengo, esa clase de '¿pasó algo o no?' es exactamente lo que me hace perder la paciencia con una herramienta."
```

---

## 5. Daniel — Financial Explorer, el Voluntario a Medias

```
Persona: Daniel Osorio, segmento Financial Explorer, El Voluntario a Medias — técnico de logística en Cali, 32 años, solo productos voluntarios en Skandia (PAC + Fondos Mutuos, $1.2M), sin FPOB/FCES, 2 años sin entrar al portal.

Veredicto rápido: Completó el flujo completo (Pasos 1 a 4, incluido el panel de aportes voluntarios) sin quedar bloqueado por ningún botón deshabilitado, pero llegó al final confundido y sin saber qué hacer con la información. Termina la sesión con la sensación de "ya sé el número pero no sé si aplica a mí, y no sé qué sigue".

Hallazgos por paso:
- Paso 0: Antes de tocar nada ya veía el campo de fecha en rojo con "Selecciona la fecha de nacimiento" y "Tu edad hoy: 0 años". "Uy, ¿ya lo dañé y ni he hecho nada?" Sobre el propósito de la herramienta, su primera lectura fue que era algo relacionado con su plata en Skandia; solo al ver "R.A.I.S / R.P.M" en el panel empezó a sospechar que era sobre "la pensión de verdad", esa que ni sabe dónde está. "¿Esto es de lo que yo tengo metido en Skandia o es la otra pensión, la obligatoria? La verdad ni sé en cuál de las dos estoy."
- Paso 1: Llenar sus datos fue fácil y rápido — nombre, fecha (usando el botón de año del calendario), género, "Válido" en Estado del Afiliado sin saber muy bien qué significa ("supongo que es que estoy al día, ¿no?"), y "Padres" como beneficiario porque no tiene pareja ni hijos. El botón Continuar se habilitó solo, sin necesidad de Tab extra. "Estado del Afiliado ni idea qué es, pero puse Válido porque sonaba a que es lo normal."
- Paso 2 (especial atención): Aquí fue donde de verdad se trabó mentalmente. Salario sí lo sabe de memoria, y más o menos la fecha en que empezó a cotizar (2015). Pero "semanas cotizadas en RAIS", "semanas cotizadas en RPM" y "saldo en cuenta de ahorro individual" — esos tres, cero. Le dio clic al "?" de saldo y le dijo "Saldo actual de tu cuenta de ahorro individual, sin incluir aportes voluntarios. Aparece en tu extracto" — y ahí fue cuando de verdad se preguntó si eso era su cuenta de Skandia (su PAC y Fondos Mutuos) o una cuenta obligatoria que ni sabía que tenía en otra parte. Al final inventó números (580 semanas, saldo $8.000.000) solo para poder seguir, sintiendo que estaba "rellenando por rellenar". "Metí plata pero no sé si lo estoy haciendo bien... y ahora esto me pide unos números de una cuenta que ni sabía que tenía. ¿Esto es lo mismo que tengo en Skandia o no?"
- Paso 3: Entendió a medias que le pedía repartir "35 años que le faltan" entre tres fondos, con un contador en vivo. Puso 20/10/5 casi al azar solo para que la alerta amarilla se apagara y el botón "Simular" se activara. "No tengo ni idea de qué fondo es más arriesgado de verdad, solo puse números hasta que cuadró."
- Paso 4: Vio los dos círculos: RAIS $2.430.901 (106% del salario) y RPM $1.840.000 (80% del salario), con capital acumulado de $422.074.554 y IBL de $2.300.000. No entendió "tasa de reemplazo" ni "IBL" ni "Fidelidad" — los leyó como palabras técnicas de banco. En la pestaña "0 meses" sí vio una explicación de por qué el número da $0 ("recibirías devolución de saldos" / "indemnización sustitutiva"), pero en la pestaña "Resumen" (que en su recorrido se presentó como gráfico de barras) la barra de "0 meses" simplemente desaparece sin ningún texto al lado — ahí sí le habría parecido un error del simulador si no hubiera visto antes la otra pestaña. Probó el panel de aportes voluntarios con $50.000 mensuales: dio un nuevo valor ($2.821.886, +$390.986) pero solo apareció en un recuadro de texto pequeño más abajo — el círculo grande de arriba se quedó exactamente igual, como si el clic no hubiera hecho nada. "Le di 'Calcular' y el círculo de arriba ni se movió, pensé que no había pasado nada." Al final solo hay "Volver" y "Generar PDF" — nada de hablar con un asesor ni de abrir algo. "¿Y ya? ¿Me bajo un PDF y ya quedó ahí?"

Hipótesis (H1–H8):
- H1 (Crítica): Confirmada. Los tres datos del Paso 2 (semanas RAIS, semanas RPM, saldo) los inventó porque no los tenía; la ayuda del ícono "?" solo define el término sin decir dónde conseguirlo si no se tiene el extracto a mano.
- H2 (Crítica): Parcial. Daniel no reconocía "RAIS" ni "RPM" hasta verlos en pantalla, y los trató como sinónimos de "mi pensión obligatoria" — no sabía que esa cuenta existía separada de su cuenta voluntaria en Skandia. No queda claro para él si es una decisión que aún puede tomar o si el momento ya pasó, porque el simulador nunca lo aclara. Tampoco usa espontáneamente vocabulario de "pilares" o "ACCAI". *(Nota: este punto llegó con un artefacto de repetición de texto en el reporte original del agente; se conserva aquí la formulación parafraseada equivalente en sustancia, apoyada en los fragmentos recuperables y en la coherencia con el resto de su recorrido.)*
- H3 (Alta): Confirmada. No entendió "tasa de reemplazo", "IBL" ni "Fidelidad" — los vio en pantalla pero nunca le quedó claro qué significaban para su plata, aunque el número final se veía "completo" y creíble.
- H4 (Media-alta): Confirmada. Repartió los 35 años entre los tres fondos casi al azar (20/10/5) solo para que la alerta se apagara; no sintió que estuviera tomando una decisión real de riesgo.
- H5 (Crítica, negocio): Confirmada. Terminó en "Volver" / "Generar PDF" sin ninguna invitación a hablar con alguien de Skandia, ni con su asesora Paola, ni a abrir un producto.
- H6 (Alta): Parcial. En la pestaña "0 meses" el $0 sí vino con una frase explicativa, pero en la pestaña "Resumen" (gráfico de barras en su recorrido) la barra de RPM en "0 meses" simplemente no aparece, sin ningún texto — ahí sí lo hubiera leído como error si no hubiera visto antes la otra pestaña.
- H7: No aplica (escritorio).
- H8 (Alta): Confirmada. El error rojo de fecha antes de tocar nada y "Tu edad hoy: 0 años" lo hicieron pensar por un segundo que algo ya estaba mal en el sitio, antes incluso de empezar a llenar.

Sub-hipótesis de segmento:
- HS1: Confirmada con fuerza. El Paso 2 es justo donde más se nota que nunca tuvo relación con su historia laboral obligatoria; ni sabía que esos tres datos existían como algo separado de su cuenta voluntaria de Skandia.
- HS2: Confirmada. Ver la mesada proyectada le generó más dudas que tranquilidad ("¿eso es mucho o poco para mí?"), y el panel de aportes voluntarios no mencionó ningún beneficio tributario ni ninguna razón concreta para meter más plata — solo mostró la diferencia en pesos, desconectada además del resultado principal.
- HS3: Confirmada. El panel de "Régimen" en el sidebar muestra R.A.I.S resaltado en verde desde el inicio, como si esa fuera "su" respuesta — y él de entrada no tenía idea en cuál de los dos está, así que ese resaltado pudo hacerlo pensar que ya sabían la respuesta por él.

Rúbrica: Sencillez 2 · Facilidad 2 · Integralidad 1 · Memorabilidad 2

Hallazgo no anticipado: El botón "Continuar" del Paso 1 se habilitó automáticamente al completar el último campo del sub-formulario del beneficiario, sin necesitar clic fuera del campo ni Tab (a diferencia de lo que sí le costó a otras personas del panel en el Paso 2). Además, en su recorrido la pestaña "Resumen" se presentó como gráfico de barras (no como tabla), y el hueco de la barra en "0 meses" no tiene ninguna leyenda ni tooltip visible que explique el $0, a diferencia de la vista de tab individual que sí trae la frase explicativa completa.
```

---

## Síntesis del panel — Financial Explorer

### Marcador de hipótesis (5 personas: Carolina, Roberto, Andrés, Patricia, Daniel)

| Hipótesis | Resultado en el panel |
|---|---|
| **H1** — Paso 2 es el muro dominante | **Confirmada en 5/5.** Ninguna de las 5 tenía semanas RAIS, semanas RPM o saldo a mano; las 5 inventaron o especularon cifras para poder avanzar. Es el hallazgo más sólido de todo el testeo. |
| **H2** — comparación leída como decisión abierta / léxico de pilares esperado | **Confirmada en 3/5 (Carolina, Roberto, Patricia), Parcial en 2/5 (Andrés esquivó la comparación eligiendo el otro tipo de proyección; Daniel no distinguió RAIS/RPM de su cuenta voluntaria de Skandia).** Ninguna de las 5 usó espontáneamente vocabulario de "pilares"/"ACCAI" — consistente con el research. El caso de Andrés es clave: el simulador permite *evitar* ver la comparación problemática sin resolver el problema de fondo, lo cual esconde el riesgo regulatorio (H2 del research) para quien no elige comparar, no lo elimina. |
| **H3** — vocabulario de resultado no se decodifica | **Confirmada en 5/5.** "Tasa de reemplazo", "IBL" y "Fidelidad" no se entendieron sin ayuda en ninguna de las 5 sesiones; "capital acumulado" se procesó solo como cifra en pesos, no como concepto. |
| **H4** — carga cognitiva de repartir años entre fondos | **Confirmada en 5/5.** Las 5 resolvieron la distribución "a ojo" o al azar para que el contador cuadrara, sin usar un criterio de riesgo real — incluido Andrés, que entendió el concepto de riesgo pero igual cuestionó por qué se pide en años y no en porcentaje. |
| **H5** — cierre sin CTA comercial | **Confirmada en 5/5.** Las 5 llegaron a "Volver"/"Generar PDF" preguntando explícitamente cómo contactar a Skandia o a su asesora — ninguna encontró una ruta. |
| **H6** — $0 sin explicar | **Confirmada/Parcial en 4/5 (Carolina, Roberto, Patricia, Daniel — Andrés no tuvo este escenario en su ruta).** El patrón más fino: 3 de las 4 personas que sí lo vieron (Roberto, Patricia, Daniel) encontraron que la vista de detalle individual **sí** explica el $0 ("indemnización sustitutiva por semanas insuficientes"), pero la tabla/gráfico de "Resumen" **no** — esto ya estaba anticipado en la heurística (H7 de ese documento) y el panel lo confirma como fricción real en la práctica, no solo como defecto teórico. |
| **H7** — móvil | No aplica — todo el panel operó en escritorio por diseño del sprint. |
| **H8** — errores de validación pre-touch leídos como fallas del sitio | **Confirmada en 4/5 (Carolina, Roberto, Andrés, Daniel), Parcial en 1/5 (Patricia no encontró el error rojo pre-touch en su sesión, aunque sí el defecto de la moneda sin formatear).** El patrón "¿ya hice algo mal?" / "¿ya lo dañé?" apareció de forma casi textual en 3 de las 5 personas. |

### Sub-hipótesis del segmento (HS1–HS3)

- **HS1 (el muro del Paso 2 los detiene más que a nadie): confirmada en 5/5, con la intensidad más alta de las tres.** Incluso Andrés — el más técnico y tolerante a la fricción del panel — sintió el muro con fuerza y solo lo superó por su perfil profesional; su propio reporte marca esto como Parcial precisamente para señalar que su tolerancia no es representativa del segmento.
- **HS2 (ansiedad sin ruta de salida al ver la mesada): confirmada en 5/5**, y agravada por un hallazgo no anticipado consistente (ver abajo): el panel de Aportes Voluntarios, que debería ser la salida emocional y comercial, en la mayoría de las sesiones no comunicó ningún cambio donde el usuario estaba mirando.
- **HS3 (el régimen preseleccionado en el sidebar confunde): confirmada en 4/5 (Carolina, Roberto, Patricia, Daniel), Parcial en 1/5 (Andrés, quien sí pudo deducir su régimen porque tiene FPOB con Skandia — pero él mismo señala que esa deducción no aplicaría a la mayoría del segmento).**

### Rúbrica Skandia — panel completo

| Persona | Sencillez | Facilidad | Integralidad | Memorabilidad |
|---|---|---|---|---|
| Carolina | 2 | 2 | 1 | 2 |
| Roberto | 2 | 2 | 1 | 2 |
| Andrés | 3 | 2 | 1 | 3 |
| Patricia | 2 | 2 | 1 | 2 |
| Daniel | 2 | 2 | 1 | 2 |
| **Promedio** | **2.2** | **2.0** | **1.0** | **2.2** |

**Integralidad en 1/4 sin una sola excepción** es el resultado más contundente del panel: las 5 personas, sin importar saldo, antigüedad o perfil digital, llegaron al mismo veredicto de "callejón sin salida". Esto confirma con evidencia de campo sintético la expectativa previa a falsar que planteaba el research (§6): Integralidad en zona crítica.

### Hallazgo no anticipado transversal — el panel de Aportes Voluntarios no comunica su propio recálculo

Este es el hallazgo más importante que no estaba en la heurística ni en las hipótesis originales, y apareció de forma independiente en **4 de las 5 sesiones** (todas menos la de Andrés, que tuvo una variante más severa):

- **Carolina y Andrés**: el botón "Calcular" no cambió la mesada mostrada en absoluto — la cifra quedó idéntica a la del escenario sin aportes voluntarios, sin error visible.
- **Roberto, Patricia y Daniel**: el cálculo sí ocurrió (la mesada nueva es correcta y distinta), pero se mostró en un recuadro pequeño, separado y más abajo en la página, mientras el círculo grande de resultado — lo primero que el usuario mira — se quedó sin actualizar.

En ambas variantes, el efecto práctico es el mismo: el usuario hace clic en "Calcular" y concluye que "no pasó nada", justo en el momento de mayor intención de compra de todo el simulador (el research ya señalaba esto en H8 del documento de heurística y en la pregunta de negocio del research). Esto no es un hallazgo de comprensión ni de vocabulario — es un problema técnico o de layout que amerita validación directa por Desarrollo, independiente de que el origen de este reporte sea un panel sintético. Vale la pena que Producto confirme si es un bug de re-render tras el clic, una condición de carrera, o un problema de posicionamiento del bloque de resultado recalculado.

### Otros hallazgos no anticipados puntuales

- **Andrés**: la categoría "Cónyuge" en Tipo de Beneficiario Principal no aclara si aplica a unión libre o solo a matrimonio — ambigüedad legal que un usuario en unión libre debe resolver por su cuenta, sin ayuda contextual (a diferencia de "Estado del Afiliado", que sí tiene su "?"). Vale la pena revisar si esto tiene implicación real en el cálculo del beneficio (no solo de etiqueta).
- **Daniel**: riesgo de confusión conceptual entre "pensión obligatoria" (lo que pide el simulador) y "mis ahorros voluntarios en Skandia" (lo único que este perfil de cliente realmente tiene con la compañía) — un riesgo específico del segmento con mono-producto voluntario que no estaba anticipado en las hipótesis del research.
- **Patricia**: como única Privilegio del panel, en ningún momento del recorrido sintió una experiencia diferenciada — su expectativa de trato Privilegio quedó completamente insatisfecha, consistente con el diagnóstico de segmento (19.3% de la base en Privilegio sin experiencia diferenciada).

### Nota sobre el gate regulatorio (H2 del research)

El comportamiento de Andrés — evitar la comparación de regímenes eligiendo "Proyección del régimen de ahorro individual" — no resuelve la premisa vencida que señala el research (§3): la ventana de traslado RAIS/RPM cerró el 16 de julio de 2026. Solo la esconde para quien no elige comparar. Este hallazgo de campo sintético refuerza, sin resolverla, la recomendación del research de tratar la pregunta de la premisa regulatoria como un gate de decisión de Producto/Legal independiente de las correcciones de usabilidad que este testeo sugiere.

---

## Limitaciones de este testeo

- Panel 100% sintético (agentes en carácter), no usuarios reales — todo hallazgo de comprensión, emoción e intención debe tratarse como señal direccional, no como validación de campo.
- Los datos de historia laboral (semanas, saldo) usados por cada persona son plausibles pero inventados por el propio agente en carácter, siguiendo la instrucción del guion; las cifras de resultado mostradas en cada reporte son las que el prototipo calculó en vivo a partir de esos datos, no cifras reales de ningún cliente.
- El hallazgo técnico del panel de Aportes Voluntarios está bien corroborado (4/5 sesiones independientes) pero debe confirmarse con una prueba técnica dedicada, no solo con este testeo.
- No se testeó el caso de "audiencia no-cliente" que el research señala como vacío pendiente (§5): las 5 personas son clientes actuales de Skandia jugando el rol de visitante del sitio público.
