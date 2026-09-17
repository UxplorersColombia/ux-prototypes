# Testeo sintético — Wealth Builders

**Fecha:** 2026-09-16
**Método:** walkthrough con agentes sintéticos en carácter, contra el prototipo real en UAT (`https://uat.skandia.co/simulador-pensional`)
**Muestra:** acotada a 2 de 5 personas por restricción de presupuesto de tokens — **Sofía la ejecutiva digital** y **Germán el acumulador regional**. Quedaron fuera de esta ronda: Andrés el gerente ascendente, Marcela la profesional liberal, Carlos el heredero en transición.
**Nota metodológica:** walkthrough sintético, no sesión con usuario real. Todas las citas y cifras de Germán fueron verificadas contra texto real de pantalla, incluidas capturas antes/después para el bug de aportes voluntarios.

**Estado: COMPLETO — 2 de 2 personas de la muestra acotada.**

---

## Persona: Germán Alonso Restrepo

41 años, comerciante de insumos agropecuarios con negocio propio en Bucaramanga desde hace 15 años. Ahorra de forma activa y disciplinada (CDTs, un fondo voluntario de pensión, algo de finca raíz), lleva su propio control en Excel, pero es menos digital que un ejecutivo urbano: no revisa su historia laboral en Colpensiones hace años y prefiere resolver trámites de una sola sentada.

**Veredicto rápido:** completó el flujo entero, pero dos fallas de fondo rompen la confianza: (1) un valor de $0 inconsistente en "Mesada pensión RPM" en la tabla Resumen que rompe la progresión gradual de las demás celdas, y (2) el círculo principal de resultado **no se actualiza visualmente** al calcular aportes voluntarios, aunque el cálculo sí cambia en un texto secundario debajo — confirmado con capturas antes/después.

### Hallazgos por paso

**Paso 0:** la explicación de R.A.I.S. aparece sin preguntar antes en qué régimen está el usuario. Como Wealth Builder ya sabe que está en RAIS por su empresa, la explicación es redundante pero no molesta.

**Paso 1:** el datepicker exige ~7 clics para la fecha de nacimiento (década x4 + mes + día). Fricción inesperada: al marcar "Cónyuge" como beneficiario, aparece un mini-formulario completo de la esposa (fecha, género, estado) sin aviso previo. La ayuda "?" de "Estado del Afiliado" **confirma el patrón**: aparece en el panel lateral, lejos del campo, y es una definición ("Válido: capacidad de trabajar..."), no una guía de origen del dato.

**Paso 2 (H1 — el más importante):** duda real al llegar a semanas cotizadas en RPM — trabajó en relación de dependencia años atrás, no memoriza la cifra. La ayuda dice *"Si nunca cotizaste allí, escribe 0"* pero **no indica dónde consultar la cifra real** para quien sí cotizó y no recuerda cuánto. Tuvo que aproximar (100 semanas) sin que el simulador advirtiera que es una estimación no verificada.

**Paso 3 (H4):** confirmado que la distribución se exige **en años, no en porcentajes** — un acumulador con mentalidad de riesgo/rendimiento piensa naturalmente en "% en renta variable vs conservador", y el simulador nunca muestra el equivalente. **Bug adicional de sincronización**: tras escribir una suma correcta (12/8/4 = 24), el mensaje seguía mostrando "Hoy suman 20" y "Simular" permaneció deshabilitado hasta hacer clic fuera del campo — no recalcula en tiempo real mientras se escribe.

**Paso 4:** RAIS $6.984.278 (82% del salario) vs RPM $6.800.000 (80%) — sin $0 en el resultado principal. En la pestaña "Resumen", la fila "Mesada pensión RPM" muestra **$0 en la columna "0 meses"**, rompiendo la secuencia gradual de las otras columnas (6.800.000 → 6.716.224 → 5.951.224 → **$0**) sin ninguna explicación. La tabla además **solo trae "Tasa de reemplazo RAIS"**, sin fila equivalente para RPM — rompe la simetría que se espera de un modo "Comparación entre los dos regímenes". El gráfico de barras sobre la tabla es prácticamente ilegible (una sola barra visible, ejes duales sin relación clara).

Sobre vocabulario: "IBL" se explica inline sin necesidad de ayuda. "Fidelidad" tiene ayuda clara. **"Tasa de reemplazo" nunca tiene ícono de ayuda propio en toda la pantalla de resultados** — solo aparece como encabezado de columna, sin aclaración, siendo el término más técnico de los cuatro.

**Aportes voluntarios — bug confirmado con capturas:** puso $500.000/mes, clic "Calcular". Apareció correctamente un recuadro verde con el nuevo valor y la explicación de que los aportes voluntarios no suman semanas. **El círculo principal de resultado arriba siguió mostrando la cifra vieja ($6.984.278)** — no se actualizó pese al recálculo correcto en el texto secundario. Coincide con el hallazgo de 4/5 sesiones de Financial Explorer.

**Cierre:** descargaría el PDF para revisarlo con calma o llevarlo a su asesor, y buscaría verificar personalmente las semanas RPM porque no confía en el número que tuvo que inventar. No encontró ningún botón de contacto con asesor en el resultado — "justo en el momento de mayor duda/interés".

### Hipótesis

| Hipótesis | Veredicto |
|---|---|
| H1 | **Confirmada** — no memoriza semanas RPM, la ayuda no ofrece dónde consultarlas, fuerza estimación no advertida. |
| H3 | **Confirmada, con precisión nueva** — "Tasa de reemplazo" es el único término sin ayuda propia en toda la pantalla de resultados. |
| H4 | **Confirmada** — distribución en años, no en %, no traduce a la unidad mental del acumulador. Más bug de sincronización nuevo (Simular no refleja suma correcta hasta blur). |
| H5 | **Confirmada** — sin botón de contacto con asesor en el resultado. |
| H6 | **Confirmada, variante nueva** — no es un $0 aislado sin contexto (como en la heurística original): es una **ruptura de progresión** en una serie que decrece gradualmente y de pronto cae a $0, sin explicación. Distinto del hallazgo de Eduardo (RPM con valor completo pese a 0 semanas) — dos manifestaciones del mismo problema de fondo en el cálculo de RPM por escenario de fidelidad. |
| H8 | No evaluado explícitamente en este reporte. |

### Rúbrica Skandia

| Sencillez | Facilidad | Integralidad | Memorabilidad |
|---|---|---|---|
| 2 | 2 | 2 | 3 |

### Hallazgo no anticipado — corrobora con evidencia visual el de Financial Explorer

Dos inconsistencias verificadas con captura, no solo por texto:
1. "Mesada pensión RPM" = $0 en la columna "0 meses" del Resumen, rompiendo la progresión gradual del resto de la fila.
2. El círculo principal de resultado no cambia tras calcular aportes voluntarios — el único indicio del nuevo valor vive en un recuadro secundario, invisible para quien solo mira el número grande.

> **Con esto, el bug del panel de Aportes Voluntarios está confirmado por dos fuentes independientes** (4/5 sesiones de Financial Explorer + Germán de Wealth Builders, con capturas antes/después). Deja de ser un hallazgo "a corroborar" y pasa a ser un defecto que Producto/Desarrollo debería verificar técnicamente con prioridad — ocurre justo en el momento de mayor intención de conversión del flujo.

---

## Persona: Sofía

34 años, ejecutiva de marketing digital en una multinacional de consumo en Bogotá, casada, sin hijos. Ahorra sistemáticamente en un fondo voluntario y usa 2-3 apps financieras. Sabe que está en RAIS pero no tiene sus semanas ni saldo exactos en la cabeza — los consulta cuando los necesita.

**Veredicto rápido:** el flujo es navegable y visualmente claro, pero falla en los dos puntos que más le importan: (1) los íconos de ayuda de Historia Laboral y Resultado **no muestran ningún contenido** al hacer clic, y (2) **los números no cuadran entre sí**. Para un perfil analítico esto no genera confianza, genera sospecha de que el simulador inventa el dato.

### Hallazgos por paso

**Paso 0:** entiende el propósito y sabe que está en RAIS, pero anticipa no saber sus semanas ni el saldo de memoria. Su expectativa era *"que me diga qué datos necesito buscar antes de empezar"* — el simulador no ofrece ese checklist previo; se descubre campo a campo.

**Paso 1:** el datepicker exige 3 clics de "Década anterior" más año, mes y día, repetido completo para el beneficiario. *"Esto lo hago una vez, pero si tuviera que corregir la fecha me daría pereza volver a navegar todo el árbol."* Fricción no anticipada: al marcar "Cónyuge" apareció un sub-formulario pidiendo datos del esposo — *"no esperaba tener que dar datos de mi esposo en un simulador de MI pensión"*.

**Paso 2 (H1) — hallazgo técnico importante:** dudó con las semanas y el saldo (*"esto no me lo sé, tendría que entrar a mi AFP a consultarlo"*) y estimó 570 semanas y $42.000.000. **Probó los 6 íconos "?" de este paso y ninguno mostró contenido** — el botón cambia de estado (`aria-pressed=true`) pero no se renderiza ningún texto de ayuda en el DOM. No dice qué es ni dónde encontrarlo: simplemente no responde. Contraste directo con el ícono del Paso 1, que sí funcionó. Además, el campo de saldo **no aceptó un valor pegado**: quedaba marcado como inválido hasta retipearlo carácter por carácter — riesgo real para quien copia el saldo desde su extracto.

**Paso 3 (H4):** entendió la mecánica sin dificultad (*"es una regla de tres simple"*) — para su perfil **la barrera no es de conocimiento sino de interfaz**: son 3 inputs sueltos sin ningún apoyo visual de reparto. Además, al bajar la edad de pensión, el sistema recalculó "Te faltan 26 años" pero **no reajustó la distribución ya diligenciada** (quedó sumando 28 contra un objetivo nuevo de 26), obligando a corregir a mano. Los íconos de ayuda de los 3 fondos tampoco mostraron contenido.

**Paso 4 — el hallazgo central de este reporte:** resultado inicial RAIS **$4.688.387** (59% del salario) vs RPM **$6.400.000** (80%). No hay ninguna mención de la rentabilidad ni la inflación asumidas — solo el descargo genérico. Desconfianza explícita: *"¿Con qué rentabilidad me están calculando esto? ¿4%? ¿8%? No lo sé y la cifra parece muy precisa para no decírmelo."*

Dos inconsistencias verificadas en la tabla Resumen:

- **Con fidelidad "0 meses", AMBOS regímenes muestran $0**, pese a que ella ya tiene 570 semanas cotizadas y $42.000.000 acumulados — un capital que en teoría debería generar alguna renta aunque deje de aportar.
- **Al bajar la edad de pensión de 62 a 60 años y volver a simular, RAIS cambió correctamente** (de $4.688.387/59% a **$3.899.863**/49%, coherente con menos semanas: 2.026 → 1.922), **pero RPM se mantuvo exactamente igual**: $6.400.000 y 80%, pese a menos semanas cotizadas.

Sumado a que ella había declarado explícitamente **0 semanas cotizadas en RPM** y el resultado usó ~1.900-2.000 semanas de todos modos, su conclusión sería: *"el campo de semanas RPM que llené no sirvió para nada, el sistema calculó las semanas por su cuenta."*

**Aportes voluntarios:** puso $500.000/mes y calculó. El cálculo es correcto ($4.688.387 + $1.987.206 = $6.675.593) pero **el círculo principal siguió mostrando $4.688.387** — el nuevo valor solo vive en un recuadro de texto aparte.

**Cierre:** *"Compararía la cifra de RPM con lo que me dice mi Colpensiones real porque no confío en que el simulador haya usado bien mis datos."* No encontró enlace a asesor, solo "Generar PDF" y "Volver".

### Hipótesis

| Hipótesis | Veredicto |
|---|---|
| H1 (ayuda en los campos difíciles del Paso 2) | **Refutada, por una razón peor que la prevista** — no es que la ayuda defina en vez de instruir: en este paso **no muestra nada**. Y el dato de semanas RPM que sí diligenció fue ignorado por el cálculo, socavando la razón misma de pedirlo. |
| H4 (¿interfaz o conocimiento?) | **Parcial — y responde la pregunta de control del segmento**: la mecánica fue clara para ella, así que **la barrera es de interfaz**, no de conocimiento. Sin apoyo visual de reparto, y sin resincronizar al cambiar la edad. |
| HS5 (desconfía sin ver los supuestos) | **Confirmada, y agravada** — no solo faltan los supuestos: las inconsistencias numéricas verificadas refuerzan activamente la desconfianza. |

### Rúbrica Skandia

| Sencillez | Facilidad | Integralidad | Memorabilidad |
|---|---|---|---|
| 2 | 2 | 3 | 3 |

### Hallazgo no anticipado

**Los íconos de ayuda "?" de toda la pantalla de Historia Laboral y de Resultado no despliegan ningún contenido** — confirmado a nivel de DOM: el botón cambia su estado interno pero no existe ningún elemento de ayuda renderizado. No es un problema de posicionamiento sino de contenido ausente, y ocurre justo en la mitad del flujo donde más se necesita.

> **Nota de contraste:** la evaluación heurística inicial del equipo sí registró contenido de ayuda renderizándose (con captura) para el mismo tipo de campo. La coincidencia con el reporte de Jorge (Capital Investor), que observó lo mismo, sugiere que **el comportamiento de las ayudas es intermitente o depende de estado**, no que estén permanentemente vacías. Requiere verificación técnica dedicada.
