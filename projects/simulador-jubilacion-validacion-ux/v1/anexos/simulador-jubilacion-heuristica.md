# Simulador Jubilación — Evaluación heurística

**Fecha:** 2026-09-16
**Entorno:** https://uat.skandia.co/simulador-pensional (UAT)
**Método:** recorrido completo del flujo por un evaluador, en desktop 1440×900 y móvil 390×844
**Alcance:** defectos detectables **sin usuarios**

## Por qué este documento existe

Todo lo que está aquí se detecta sin necesidad de una sola sesión de testeo. Conviene corregirlo **antes** de que los agentes testers recorran la herramienta: si no, las sesiones se consumen tropezando con defectos ya conocidos en vez de responder las preguntas que de verdad necesitan usuarios — si la gente entiende el resultado, si sabe de dónde sacar sus semanas cotizadas, si la comparación entre regímenes le sirve para decidir algo.

**Escala de severidad**

| Nivel | Significado |
|---|---|
| **Crítica** | Impide o hace fracasar la tarea para una parte relevante de los usuarios |
| **Alta** | Genera error, bloqueo o desconfianza; se supera con esfuerzo |
| **Media** | Fricción o confusión que no impide terminar |
| **Baja** | Pulido, consistencia, ruido |

---

## Resumen

| # | Hallazgo | Severidad | Dónde |
|---|---|---|---|
| H1 | Campo en estado de error antes de que el usuario lo toque | Alta | Paso 1 |
| H2 | El botón Continuar solo se habilita al perder el foco del último campo | **Crítica** | Pasos 2 y 3 |
| H3 | El datepicker cuesta ~9 interacciones para una fecha de nacimiento | Alta | Pasos 1 y 2 |
| H4 | La ayuda aparece lejos del campo y no responde la pregunta real | **Crítica** | Pasos 2, 3 y 4 |
| H5 | En móvil el formulario arranca a 855px, bajo el pliegue | Alta *(alcance por confirmar)* | Todo el flujo |
| H6 | En móvil las tabs de fidelidad se rompen y truncan | Alta | Paso 4 |
| H7 | Un resultado de $0 sin explicación | Alta | Paso 4 |
| H8 | El flujo no cierra en ninguna acción | **Crítica** | Paso 4 |
| H9 | Contraste insuficiente en los discos de resultado + enlace sin nombre (axe) | Alta | Sidebar y pie |
| H10 | "Ver el alcance de la proyección" duplica el descargo que tiene encima | Baja | Sidebar |
| H11 | Inconsistencia de placeholders entre campos numéricos | Baja | Paso 2 |

---

## H1 · Campo en estado de error antes de que el usuario lo toque
**Severidad: Alta** — *Prevención de errores · Heurística de Nielsen #5*
**Evidencia:** `evidencia/02-desktop-paso1-error-fecha-sin-tocar.png`

Al cargar el paso 1, *Fecha de Nacimiento* ya aparece con **borde rojo y el mensaje "Selecciona la fecha de nacimiento"**, y debajo *"Tu edad hoy: 0 años."* — todo antes de que el usuario haya interactuado con nada.

La primera impresión de la herramienta es un reproche por algo que el usuario no ha tenido ocasión de hacer. Y como el campo ya está en rojo desde el inicio, el rojo deja de significar "corrige esto": cuando más adelante haya un error real, no se va a distinguir.

**Recomendación:** validar en `blur` o en el intento de envío, no en el montaje del componente. Ocultar "Tu edad hoy" hasta que haya una fecha válida.

---

## H2 · El botón Continuar solo se habilita al perder el foco del último campo
**Severidad: Crítica** — *Visibilidad del estado del sistema · #1*
**Evidencia:** `evidencia/06-desktop-paso2-continuar-deshabilitado.png`

Comportamiento verificado en el paso 2: con **todos los campos diligenciados y sin un solo mensaje de error en pantalla**, `Continuar` sigue deshabilitado. Solo se habilita cuando el último campo pierde el foco — en la prueba bastó un `Tab`. La máscara de moneda tiene el mismo comportamiento: el saldo se ve como `250000000` mientras está enfocado y solo se formatea a `$ 250.000.000` al salir del campo.

El usuario que escribe el saldo y lleva el mouse directo al botón encuentra **un botón gris y muerto, un formulario aparentemente completo y ninguna pista de qué falta**. No hay forma de deducir que la solución es hacer clic en cualquier otro lado. Es el candidato número uno a abandono silencioso del flujo, y además es el defecto más barato de corregir de toda la lista.

**Recomendación:** actualizar la validez del formulario en `input`/`valueChanges`, no solo en `blur`. Si el botón debe seguir deshabilitado, decir por qué al lado del botón.

---

## H3 · El datepicker cuesta ~9 interacciones para una fecha de nacimiento
**Severidad: Alta** — *Flexibilidad y eficiencia de uso · #7*
**Evidencia:** `evidencia/03-desktop-datepicker-abre-en-mes-actual.png`

El calendario abre en **el mes actual (septiembre 2026)** — para un campo cuya respuesta siempre está décadas atrás. El encabezado muestra "septiembre 2026" donde mes y año **sí son botones** (`aria-label="Elegir mes"` / `"Elegir año"`), pero están estilizados como texto plano: sin chevron, sin subrayado, sin cambio de color. Nada indica que se puedan pulsar.

Quien no descubre que son clicables solo tiene las flechas de mes: **más de 550 clics** para llegar a 1980. Quien sí las descubre necesita aún abrir el calendario, pulsar el año, retroceder cinco décadas de a una, elegir año, elegir mes y elegir día: **unas 9 interacciones**, repetidas además para la fecha del beneficiario y la fecha en que empezó a cotizar.

Escribir la fecha a mano tampoco resuelve: en la prueba, el valor tecleado quedó en el input pero **el formulario no lo registró** — "Tu edad hoy" siguió en 0 y `Continuar` siguió bloqueado.

**Recomendación:** abrir el calendario en una década razonable según el campo, dar affordance visible a mes/año, y aceptar entrada por teclado enlazada correctamente al control de formulario.

---

## H4 · La ayuda aparece lejos del campo y no responde la pregunta real
**Severidad: Crítica** — *Ayuda y documentación · #10*
**Evidencia:** `evidencia/05-desktop-ayuda-lejos-del-campo.png`

Dos problemas que se agravan mutuamente.

**Dónde aparece.** El "?" está pegado al campo, en la columna izquierda; la respuesta se renderiza **al fondo del sidebar derecho**, a varios cientos de píxeles en diagonal. Nada acompaña la mirada del usuario hasta allá. Es perfectamente posible pulsar el "?", no ver ningún cambio donde se está mirando y concluir que el botón no hace nada.

**Qué dice.** El texto es definicional. Para *semanas cotizadas en RAIS*: *"Semanas cotizadas en el Régimen de Ahorro Individual con Solidaridad, administrado por los fondos privados."* Es decir, **repite la etiqueta con más palabras**.

Pero la pregunta del usuario frente a ese campo no es *qué significa*: es **"¿de dónde saco yo ese número?"**. Y esa pregunta no se responde en ninguna parte de la herramienta. Lo mismo aplica al saldo en cuenta individual. Como estos son justamente los campos que nadie sabe de memoria, la ayuda falla exactamente donde más se necesita.

**Recomendación:** mostrar la ayuda junto al campo (popover anclado) y reescribir el contenido para que diga **dónde encontrar el dato** — historia laboral en Colpensiones, extracto de la AFP, certificado de semanas — con enlace directo cuando exista. Complementar con un camino para quien no tiene el dato a mano (ver nota de cierre).

> **Advertencia sobre esta recomendación, con datos.** El análisis de comportamiento del portal (§1b del research) muestra que enlazar a la historia laboral **no va a bastar**: de 2.031 usuarios que la consultan, solo **528 (26%)** llegan al "Detalle de semanas", el "Filtro de año" acumula 7,5 clics por usuario porque la información está fragmentada por período, y apenas **107 personas (5%)** descargan el documento. El dato existe, pero está a cuatro pasos y hay que reconstruirlo. Un enlace traslada el problema; no lo resuelve.

---

## H5 · En móvil el formulario arranca a 855px, bajo el pliegue
**Severidad: Alta** *(alcance por confirmar)* — *Visibilidad del estado del sistema · #1*
**Evidencia:** `evidencia/11-movil-paso1-formulario-bajo-el-pliegue.png`

En viewport de 390×844 las columnas se apilan y **el sidebar queda arriba**. El usuario que llega en celular ve primero el indicador de pasos, los dos círculos de régimen, el párrafo explicativo del RAIS, el descargo completo de rentabilidades, el enlace a la Superintendencia y el desplegable de alcance de la proyección.

El encabezado "INFORMACIÓN PERSONAL" está a **855px de scroll** (medido). El primer campo queda **más de una pantalla completa por debajo del pliegue**: quien abre el simulador en su celular no ve nada que se parezca a un simulador, sino un muro de texto legal.

El defecto está verificado y medido. Lo que **no** está establecido es a qué proporción de usuarios golpea: el análisis del portal autenticado (§1b del research) resulta ~82% escritorio, pero ese portal es transaccional y no sirve de proxy del sitio público. **Antes de priorizar esto contra los demás hallazgos, conviene mirar la analítica del sitio público** — hay Google Analytics cargando en la página, así que el reparto de dispositivo debería estar a mano.

**Recomendación:** en móvil, el formulario va primero. El bloque de régimen y los descargos van después del formulario o en un acordeón colapsado. La corrección es barata y no depende de resolver el alcance primero.

---

## H6 · En móvil las tabs de fidelidad se rompen y truncan
**Severidad: Alta** — *Estética y diseño minimalista · #8*
**Evidencia:** `evidencia/10-movil-resultado-tabs-rotas.png`

Las seis tabs del paso 4 se comprimen en 390px hasta quedar ilegibles y superpuestas: **"12 mese"**, **"9 mese"**, **"6 mese"**, **"0 mese"**, **"Prop"**, **"Resum"**. Los rótulos se cortan a media palabra y las áreas táctiles quedan por debajo del mínimo recomendado.

Estas tabs son el control principal del resultado — lo que permite comparar escenarios de aporte, que es donde está el valor analítico de la herramienta. En móvil, ese control queda inutilizable.

**Recomendación:** scroll horizontal con indicación de desbordamiento, o un `select` en móvil. Abreviar a "12m / 9m / 6m / 0m" si se conserva el formato de tabs.

---

## H7 · Un resultado de $0 sin explicación
**Severidad: Alta** — *Ayuda a reconocer y recuperarse de errores · #9*
**Evidencia:** `evidencia/08-desktop-paso4-resultado.png`

En la tabla Resumen, el escenario "0 meses" arroja **Mesada RPM: $ 0**. La causa real es que con 1.100 semanas no se alcanza el mínimo exigido en prima media — pero la tabla no lo dice en ninguna parte.

Un $0 sin explicación en una proyección de pensión no se lee como "no cumples el requisito de semanas". Se lee como **"el simulador se dañó"** o, peor, como **"te vas a quedar sin pensión"**. Ambas lecturas erosionan la confianza en el resto de las cifras, que sí son correctas.

Conviene notar el contraste: la pantalla de detalle sí informa "Semanas faltantes para el régimen de prima media", pero la tabla Resumen — que es donde aparece el $0 — no arrastra esa explicación.

**Recomendación:** sustituir el $0 por una marca explicativa ("No aplica — no alcanza las semanas mínimas") o anotar la celda al pie de la tabla. Añadir la tasa de reemplazo de RPM, hoy ausente mientras sí se muestra la de RAIS.

---

## H8 · El flujo no cierra en ninguna acción
**Severidad: Crítica** — *Hallazgo de negocio, no de usabilidad*
**Evidencia:** `evidencia/09-desktop-aportes-voluntarios-sin-cta.png`

El recorrido termina en `Volver` y `Generar PDF`. **No hay ninguna ruta hacia Skandia**: ni hablar con un asesor, ni abrir un producto, ni dejar datos de contacto, ni siquiera un enlace a información relacionada.

Lo más llamativo es dónde ocurre: el panel de **aportes voluntarios** deja al usuario en el momento de máxima intención de toda la experiencia — acaba de ver, con su propio salario y su propio saldo, cuánto sube su mesada si aporta más. Y ahí la herramienta se detiene y le ofrece descargar un PDF.

Para una herramienta del sitio público, esto significa que **el simulador no tiene forma de convertir**. Si el objetivo de negocio es captación o generación de leads (supuesto 1 del teardown), el flujo no lo cumple; si el objetivo es puramente educativo, conviene que esté declarado, porque cambia por completo cómo se mide el éxito de la herramienta.

**Recomendación:** decidir explícitamente el objetivo de negocio y, si es captación, cerrar el flujo con una acción proporcional al momento — agendar asesoría, simular un aporte voluntario real, dejar correo para recibir la proyección.

---

## H9 · Accesibilidad: violaciones confirmadas por auditoría automatizada
**Severidad: Alta** — *Accesibilidad*

Auditoría **axe-core 4.12.1** sobre el paso 1, reglas `wcag2a` + `wcag2aa`: **2 violaciones serias, 1 incompleta, 26 reglas aprobadas.**

### Verificado por axe

**`color-contrast` — serio, 8 nodos.** No alcanzan el ratio mínimo de contraste:
- `.panel-simulador__titulo-parte1` y `.panel-simulador__subtitulo`
- el texto del paso activo del indicador de progreso
- **`.panel-simulador__disco--rais` y `.panel-simulador__disco--rpm`** — etiquetas y leyenda
- el `<strong>` del bloque de régimen y el enlace a la Superintendencia

Que los discos RAIS y RPM estén en la lista es lo más grave: **son los elementos que comunican el resultado principal de la herramienta**. Si el contraste falla ahí, falla en lo único que el usuario vino a ver.

**`link-name` — serio, 1 nodo.** `.footer-toggle` es un enlace sin texto discernible: un lector de pantalla lo anuncia como "enlace" y nada más.

**6 nodos adicionales en revisión manual**, entre ellos los círculos numerados del indicador de pasos.

### Observado, pendiente de confirmar

Con el calendario abierto, el snapshot del árbol de accesibilidad **no expuso ninguna celda de día** — los días parecían alcanzables solo por clic directo en el DOM. Sumado a H3, donde la entrada por teclado no queda registrada por el formulario, apuntaría a que el campo de fecha no tiene una ruta de entrada accesible completa.

**Esto no está confirmado por axe** (la auditoría corrió con el calendario cerrado) y conviene verificarlo antes de darlo por hallazgo. Si se confirma, la consecuencia es seria: la fecha de nacimiento es obligatoria en el paso 1, así que un usuario que dependa de lector de pantalla o navegación por teclado **no podría completar el primer paso**, quedando fuera de toda la herramienta.

**Recomendación:** corregir contraste y `link-name`, que ya están confirmados. Re-correr la auditoría con el calendario abierto para cerrar la parte pendiente. Dado que Skandia es entidad vigilada por la Superintendencia Financiera y esto va al sitio público, conviene una revisión WCAG 2.1 AA formal del componente de fecha antes de producción — verificando roles `grid`/`gridcell`, foco por teclado y anuncio del mes en curso.

---

## H10 · "Ver el alcance de la proyección" duplica el descargo que tiene encima
**Severidad: Baja** — *Estética y diseño minimalista · #8*
**Evidencia:** `evidencia/12-desktop-alcance-proyeccion-duplicado.png`

El desplegable revela un texto **casi palabra por palabra idéntico** al descargo de rentabilidades ya visible justo encima. El usuario que lo abre esperando detalle adicional encuentra lo mismo que acaba de leer.

Duplicar el descargo no lo hace más claro: diluye ambos y le enseña al usuario que ese bloque no vale la pena leerlo — justo el efecto contrario al que busca un aviso regulatorio.

**Recomendación:** dejar un solo texto, o que el desplegable aporte el detalle real de los supuestos de la proyección (rentabilidades usadas, inflación, densidad de cotización).

---

## H11 · Inconsistencia de placeholders entre campos numéricos
**Severidad: Baja** — *Consistencia y estándares · #4*
**Evidencia:** `evidencia/04-desktop-paso2-historia-laboral.png`

En el paso 2, los campos de semanas muestran **`0`** como valor visible, mientras salario y saldo aparecen vacíos. Los tres son numéricos y del mismo bloque.

El `0` es ambiguo: no se distingue si es un valor ya diligenciado o un marcador de posición. Un usuario podría dejarlo tal cual creyendo que está respondido.

**Recomendación:** unificar el tratamiento — o todos vacíos con placeholder gris, o todos con valor inicial explícito.

---

## Lo que esta evaluación no puede responder

Los once hallazgos anteriores se arreglan con decisiones de diseño y no necesitan usuarios. Pero la pregunta de fondo de esta herramienta **sí los necesita**, y queda abierta para la etapa de testeo:

> El paso 2 pide **semanas cotizadas en RAIS, semanas cotizadas en RPM y saldo en cuenta individual**. El paso 3 pide **distribuir el saldo entre tres fondos en número de años que sumen exacto**.

Arreglar H4 mejora la ayuda, pero no cambia el hecho de que la herramienta le exige a un visitante anónimo datos que probablemente no tiene a mano y una operación que probablemente no sabe hacer. Si el testeo confirma que la gente se detiene ahí, el problema no se resuelve con microcopy: se resuelve **cambiando lo que la herramienta pide** — estimar las semanas a partir de la fecha de inicio de cotización, ofrecer rangos en vez de cifras exactas, o proponer perfiles de riesgo predefinidos en lugar de una asignación manual de años.

Esa decisión es de producto, no de diseño de detalle, y por eso necesita evidencia de usuarios antes de tomarse.
