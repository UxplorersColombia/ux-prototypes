# Testeo sintético — Stability Seekers

**Fecha:** 2026-09-16
**Método:** walkthrough con agentes sintéticos en carácter, contra el prototipo real en UAT (`https://uat.skandia.co/simulador-pensional`)
**Muestra:** acotada a 2 de 5 personas por restricción de presupuesto de tokens — **Eduardo el profesional recién jubilado con curiosidad digital** y **Jaime el octogenario asistido**. Quedaron fuera de esta ronda: Alfonso el pensionado tradicional, Gloria la viuda independiente, Martha la pensionada con familia dependiente.
**Nota metodológica:** este es un walkthrough sintético, no una sesión con usuario real. Todas las citas y cifras de Eduardo fueron verificadas contra texto real de pantalla (snapshot/eval del navegador), no inventadas.

## Persona: Eduardo Restrepo

63 años, ingeniero civil recién jubilado, Medellín — uno del 2,2% del segmento con app activa (perfil digital-analítico, no representativo del segmento en ese aspecto).

**Veredicto rápido:** completó el flujo entero (Pasos 1–4, hasta "Generar PDF") sin bloqueos duros. Termina con ánimo mixto: satisfecho de haberlo resuelto solo con sus propios números aproximados, pero con frustración intelectual creciente — *"hice toda esta simulación y al final no sé qué tiene que ver conmigo, si ya me pensioné."*

### Paso 0 — ¿Es esta herramienta para ti?

> *"Por el nombre pensé que era para mí, para revisar mi jubilación. Pero apenas vi que me pregunta 'edad en la que deseas pensionarte' y 'te faltan años', me sonó a alguien que todavía está calculando cuándo pensionarse. Yo ya lo hice. Esto es para el Eduardo de hace tres años, no para el de ahora."*

Sobre hacerlo solo o pedir ayuda:
> *"Solo, sin duda — para eso soy ingeniero, y de hecho así lo hice ahorita. Con la App hago lo mismo, entro yo solito una o dos veces al mes. Lo que sí, si algún dato no lo tengo a la mano, como las semanas cotizadas, ahí sí busco antes de inventar un número."*

### Reflexión de rol especial — ¿llegó tarde a esta herramienta?

> *"Llegué tarde, y la pantalla misma me lo confirma sin querer. En el Paso 3 dice textualmente 'La edad mínima de ley en tu caso es 62 años. Te faltan 4 años' — pero yo ya tengo 63, ya pasé esa edad, ya estoy pensionado. ¿Cómo me van a faltar años si ya me jubilé? [...] Todo el simulador está construido en tiempo futuro, para alguien que decide, no para alguien que ya decidió. Sirve para entender cómo llegué a lo que tengo, como ejercicio retrospectivo, pero como herramienta de decisión para mí ya no aplica."*

**Sobre su MFUND** (verificado por texto completo de las 4 pantallas): las palabras "MFUND" e "inversión residual" **nunca aparecen**. El simulador solo trabaja sobre la cuenta de ahorro individual y el saldo digitado a mano. Su MFUND de $145M —plata que tiene hoy y le importa como pensionado— es invisible para la herramienta. *"Le puse mi saldo de pensión, pero ¿y lo otro qué? Ni lo pregunta."*

### Hallazgos por paso

**Paso 0:** desde el copy de apertura *"La simulación corresponde a la modalidad de pensión de retiro programado... no incluye aportes voluntarios futuros"*, ningún gancho para quien ya está pensionado. *"Esto suena a algo que uno llena antes de jubilarse, no después."*

**Paso 1:** confirmado en vivo el defecto pre-touch (H8): "Selecciona la fecha de nacimiento" y "Tu edad hoy: 0 años" aparecen sin tocar nada. Escribir la fecha a mano mostró el texto pero **no actualizó el cálculo de edad** hasta usar el datepicker con selector de año. *"Como ingeniero esto me choca — el campo dice que tiene mi fecha pero el cálculo de al lado no la usó. Eso no es un error mío, es un bug de ustedes."* La ayuda de "Estado del Afiliado" sí dio una definición clara, pero en el panel lateral, lejos del campo.

**Paso 2 (especial atención — H1):** dudó como se esperaba antes de llenar: *"Las semanas cotizadas en RAIS no me las sé de memoria, esto lo tendría que mirar en la App a ver si coincide."* Usó la ayuda; el texto (verificado literal) solo define qué es RAIS, no dice dónde consultar el número: *"Eso ya lo sé qué es, lo que no sé es cuántas semanas llevo — y la ayuda no me lo resuelve."* El botón Continuar sí habilitó al perder foco, sin bloqueo real en su caso.

**Paso 3:** texto exacto capturado: *"La edad mínima de ley en tu caso es 62 años. Te faltan 4 años."* Distribuir 4 años entre 3 fondos fue mecánicamente trivial para su perfil analítico, pero objetó el sentido: *"Entiendo la suma, no es difícil, soy ingeniero. Lo que no entiendo es por qué tengo que decidir esto [...] si yo ya pasé ese punto."* Notó además que la propia regla de convergencia que el simulador explica (100% conservador a su edad) contradice que le pidan distribuir manualmente.

**Paso 4:** RAIS $2.917.268 (21% del salario) vs RPM $11.200.000 (80% del salario). IBL $14.000.000 (= su salario, fácil de decodificar). Capital acumulado $506.521.958. **Hallazgo no anticipado, ver abajo.** Sobre poder cambiarse de régimen: *"Viendo estos números, cualquiera pensaría 'me cambio a RPM ya', pero yo sé que ya no puedo — la ventana se cerró. El simulador no me lo dice en ningún lado de esta pantalla."* Al cerrar: *"Generé el PDF ¿y ahora qué? [...] no tengo ni un botón ni un teléfono aquí."*

### Hipótesis (H1–H8)

| Hipótesis | Veredicto |
|---|---|
| H1 | **Parcial/Confirmada** — duda real sobre semanas exactas; la ayuda no resuelve el origen del dato. Su perfil digital-analítico no derivó en abandono, pero el mecanismo se confirma. |
| H2 | **Confirmada, con evidencia fuerte** — "Te faltan 4 años" a un pensionado de 63, más la ayuda de "Fidelidad" hablando de "seguirías cotizando", generan la lectura de que aún hay una decisión de régimen pendiente. Él mismo verbalizó la tentación sin que la pantalla la desmienta. |
| H3 | **Confirmada parcialmente** — "Tasa de reemplazo" e "IBL" decodificados por deducción matemática, no porque el simulador los explique. Si el más digital del panel duda, el resto del segmento dudará más. |
| H4 | **Parcial** — aritméticamente trivial, pero objetó la lógica de fondo, no la mecánica. |
| H5 | **Confirmada** — cierre solo en "Volver" / "Generar PDF", sin acción comercial. |
| H6 | **No observada tal como estaba planteada** — no vio $0, vio algo distinto y más preocupante (ver hallazgo no anticipado). |
| H7 | No aplica (desktop). |
| H8 | **Confirmada** — error rojo y "Tu edad hoy: 0 años" antes de tocar el formulario. |

### Rúbrica Skandia

| Sencillez | Facilidad | Integralidad | Memorabilidad |
|---|---|---|---|
| 2 | 3 | 1 | 2 |

*Integralidad en 1*: ignora por completo su MFUND y su situación real de pensionado; no ofrece ninguna vista para quien ya se pensionó.

**Cierre:** *"No lo volvería a usar tal como está, porque ya tomé la decisión que este simulador ayuda a tomar. Si acaso lo recomendaría a mi hijo, que todavía está cotizando [...] A mí lo que me haría volver a la App es algo mucho más simple: cuánto me consignaron este mes, cuándo me llega la próxima mesada, y qué hago con la plata que me queda por fuera de la pensión. Eso no está aquí."*

### Hallazgo no anticipado — el más importante de este reporte

Con **0 semanas cotizadas en RPM** (toda su carrera en RAIS), la tabla Resumen mostró una **"Mesada pensión RPM" de $11.200.000, idéntica en las 5 columnas de fidelidad** — en vez de $0 o de omitir el dato.

Esto sugiere que el modo "Comparación entre los dos regímenes" calcula un escenario **contrafactual** (qué pasaría si todas sus semanas hubieran sido RPM), **sin ningún texto que lo aclare**. Para un usuario con 0 semanas reales en ese régimen, el número se lee como un resultado real y alimenta aún más la falsa sensación de H2 — que todavía podría optar por RPM.

> **Esto es más grave que el $0 sin explicar que ya estaba en la heurística (H6): no es un dato faltante, es un dato presente y creíble que corresponde a una realidad que el usuario no tiene.** El equipo de Producto debería revisar esta lógica de cálculo específicamente para perfiles con historia 100% concentrada en un solo régimen.

## Persona: Jaime Beltrán

84 años, pensionado desde hace más de 22 años (se retiró cerca de los 60-61). Viudo, vive cerca de su hija mayor, quien le ayuda con cualquier trámite que involucre computador o celular inteligente. Nunca ha hecho banca en línea. Prefiere ir en persona a la oficina de Skandia.

**Veredicto rápido:** esta herramienta no es para Jaime. La "completó" solo porque se forzó el recorrido con una paciencia técnica que él no tendría — en la vida real habría abandonado en el selector de año de su fecha de nacimiento y habría llamado a su hija o ido a la oficina. El resultado final le habla de "aportar en los próximos años" y "pensionarte a los 67 años", como si todavía no se hubiera pensionado.

### Paso 0 — preguntas adicionales

> *"Esto es para los que todavía están trabajando, para los que le van a sacar cuentas al futuro. Yo ya pasé por eso hace más de veinte años. No sé qué gano yo llenando esto ahora [...] ya no es una simulación, ya es real."*

> *"Yo solo no. Ni de riesgos. Le pediría a mi hija que se siente conmigo, o directamente le diría que ella lo llene mientras yo le dicto los datos que me acuerde. Lo del calendario ese ya sé que no lo hago yo solo."*

### Hallazgos por paso

**Paso 0:** acrónimos sin explicar a primera vista (R.A.I.S., R.P.M.) — la percibe ajena de entrada.

**Paso 1:** el datepicker de fecha de nacimiento fue el obstáculo real — 8 clics de "Década anterior" para pasar de 2020 a 1940, más año/mes/día: **13 interacciones distintas para una sola fecha**. En carácter, habría abandonado alrededor del tercer o cuarto clic. Marcar "Hijo" como beneficiario desplegó un segundo datepicker completo — carga no anticipada.

**Paso 2:** el tooltip del saldo dice literal *"Aparece en tu extracto"* — Jaime no tiene ningún extracto a la mano ni sabría buscarlo digitalmente, y no recuerda su salario de hace dos décadas. **Hallazgo técnico grave, verificado**: el datepicker de "Fecha en que empezó a cotizar" tiene un **piso fijo en 31/12/1969** — los años 1960-1968 aparecen deshabilitados, dentro de 1969 solo diciembre está habilitado, y dentro de diciembre solo el día 31. Para alguien nacido en 1942 que probablemente empezó a trabajar en los años 60, **el simulador no puede representar su historia laboral real**.

**Paso 3:** texto exacto: *"La edad mínima de ley en tu caso es 62 años. Te faltan 1 años."* **Verificado moviendo el slider a 57, 62, 67 y 75 años: el mensaje se mantuvo idéntico en los cuatro casos** ("Te faltan 1 años"), igual que el bloque de distribución de fondos ("Deben sumar 1"). El texto no reacciona al valor seleccionado ni a que Jaime superó el mínimo legal hace dos décadas. Además, el slider permite bajar a 57 años —por debajo del mínimo de 62 que el propio texto declara— sin ninguna advertencia.

**Paso 4:** *"$1.423.500 — Mesada equivalente al 119% de tu salario"*, *"Si aportas en los próximos años [...] Te pensionarías a los 67 años."* Reacción: *"¿Cómo que me voy a pensionar a los 67? Yo ya me pensioné hace añales. Y eso de 'si aportas en los próximos años' — ¿aportar de dónde, si yo ya no trabajo?"* El resultado asume sin excepción que el usuario es un cotizante activo camino a la pensión.

### Hipótesis (mapeadas por contenido, sin acceso al catálogo formal en esta sesión)

| Hipótesis (equivalente) | Veredicto |
|---|---|
| Autopercepción — "esto no es para mí" | **Confirmada**, explícita en el Paso 0 |
| Preferencia por canal asistido/presencial sobre autoservicio digital | **Confirmada** |
| Datepicker como barrera crítica para adultos mayores (HS10) | **Confirmada con evidencia dura** — 13 interacciones + segundo datepicker |
| Falta de documentación/datos a la mano | **Confirmada** — el copy remite a un extracto que no tiene ni sabe ubicar |
| El simulador no contempla al usuario ya pensionado | **Confirmada** — todo el copy de Pasos 3 y 4 asume cotización activa futura |

### Rúbrica Skandia

| Sencillez | Facilidad | Integralidad | Memorabilidad |
|---|---|---|---|
| 1 | 1 | 2 | 2 |

*Facilidad en 1*: el datepicker de década en década es, en la práctica, inoperable para un usuario de 84 años sin ayuda.

### Reflexión de cierre (HS11 — qué le hubiera gustado saber a los 40)

> *"A los 40 años me hubiera gustado que alguien me dijera, en cristiano y no con estas siglas, cuánto necesitaba ahorrar para no depender solo del mínimo, cuántas semanas me hacían falta de verdad, y qué pasaba si cambiaba de fondo de riesgo a conservador. Y sobre todo, que me dijeran que guardara esos papeles del extracto, porque mire, ahora que los buscan aquí en esta pantalla, yo no tengo ni idea de dónde quedaron."*

### Hallazgo no anticipado

El piso de fecha en 31/12/1969 (arriba) y el hecho de que **"Te faltan N años" es un texto estático que no recalcula** con el slider de edad — probado en 4 valores distintos, siempre igual. Esto último parece un bug funcional real, no solo un problema de copy: el simulador nunca calculó correctamente cuántos años "faltan" para alguien que ya superó, por mucho, la edad mínima.

---

## ¿Es este segmento audiencia de esta herramienta?

**No, no de forma homogénea — y los dos casos de esta muestra lo confirman desde ángulos distintos.**

**Eduardo (63 años, recién jubilado, digitalmente curioso)** representa el borde más favorable del segmento: completó el flujo solo, sin bloqueos duros, y aun así concluyó explícitamente *"llegué tarde [...] esto es para el Eduardo de hace tres años, no para el de ahora"*. Si incluso el perfil más digital y más cercano en edad a la transición real siente que la herramienta ya no le habla a él, el resto del segmento —menos digital, más alejado de esa transición— lo sentirá con más fuerza todavía.

**Jaime (84 años, asistido)** confirma el límite estructural: la herramienta no solo le resulta irrelevante en el mensaje, sino **técnicamente inoperable sin ayuda** (datepicker) y **literalmente incapaz de representar su historia laboral** (piso de fecha en 1969).

**Conclusión:** confirma la lectura que ya planteaba el research — la franja de 50-62 años que aún tiene una decisión pensional real por delante es la única sub-cohorte para la que este simulador tiene trabajo genuino que hacer. Fuera de esa franja, sirve como caso límite de accesibilidad (Jaime, HS10) y como fuente de contenido retrospectivo (ambos, HS11), no como herramienta de decisión. El hallazgo del piso de fecha en 1969 es, además, un defecto concreto y corregible que probablemente afecta a una porción real de clientes mayores que sí intenten usar la herramienta.

---

**Estado: COMPLETO — 2 de 2 personas de la muestra acotada.**
