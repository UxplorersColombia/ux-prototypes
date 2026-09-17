# Testeo sintético — Capital Investor

**Fecha:** 2026-09-16
**Método:** walkthrough con agentes sintéticos en carácter, contra el prototipo real en UAT (`https://uat.skandia.co/simulador-pensional`)
**Muestra:** acotada a 2 de 5 personas por restricción de presupuesto de tokens — **Jorge el jubilado conservador** y **Ricardo el ejecutivo elite**. Quedaron fuera: Andrés el profesional digital activo, Carolina la profesional consolidada, Valentina la joven emergente.
**Nota metodológica:** walkthrough sintético, no sesión con usuario real.

## Persona: Jorge

59 años, ex-vicepresidente financiero de una manufacturera colombiana, ya retirado del cargo ejecutivo pero administra personalmente un portafolio diversificado (finca raíz, fiduciaria, algo en RAIS) con sus propias hojas de cálculo. Perfil de riesgo bajo pese al patrimonio alto — *"lo que ya gané no lo vuelvo a arriesgar"*. Meticuloso hasta la obsesión con las cifras.

**Veredicto rápido:** el simulador cumple lo básico y da comparación real entre regímenes con buen nivel de detalle, pero exige datos históricos precisos que un usuario meticuloso no siempre trae a la mano en el momento, y dos fallas de refinamiento (tooltips vacíos, aportes voluntarios que no actualizan el círculo principal) le restan la sensación de pulido y trazabilidad total que este segmento exige.

### Hallazgos por paso

**Paso 0:** entiende de inmediato el propósito — comparador RAIS vs RPM — y valida las definiciones contra su propio conocimiento, incluyendo el umbral de semanas de RPM.

**Paso 1:** completó todo sin dificultad, verificando activamente que el cálculo de edad fuera exacto.

**Paso 2 (H1 / HS9 — pregunta clave: ¿rigor legítimo o fricción innecesaria?):** su lectura es **mixta**. En principio le parece rigor legítimo *("si van a comparar dos regímenes de verdad, necesitan mi historia real")*, pero admite honestamente que las semanas por régimen y el saldo exacto **no los trae de memoria** — tuvo que estimarlos. **Hallazgo verificado a nivel de DOM: ninguno de los 4 íconos de ayuda del Paso 2 (fecha, semanas RAIS, semanas RPM, saldo) mostró contenido** al hacer clic o hover — solo existe un wrapper `lfr-tooltip-scope` vacío, sin texto cargado.

**Paso 3:** cómodo con la mecánica, valoró la nota de transparencia sobre la regla de convergencia. Detalle técnico: el contador "Hoy suman X años" **no se actualiza al escribir, solo al perder el foco** — mismo patrón de validación-solo-en-blur ya visto en la heurística (H2) y en otras sesiones.

**Paso 4 (HS8):** revisó el detalle completo y la tabla Resumen — exactamente el nivel de trazabilidad que pide antes de confiar en un número. **Su lectura sobre HS8**: no ve la pensión obligatoria como irrelevante frente a su patrimonio; la ve como *"el piso mínimo garantizado que no puedo mover, así que prefiero conocerlo con precisión"* — el simulador sí le aporta ese chequeo de piso, gracias al detalle numérico.

**Aportes voluntarios:** el cálculo apareció correctamente en un recuadro nuevo, pero **el círculo principal de "Régimen de ahorro individual" no se actualizó** — cuarta confirmación independiente de este defecto (tras Financial Explorer 4/5, Germán y Sofía de Wealth Builders).

### Hipótesis

| Hipótesis | Veredicto |
|---|---|
| H1 (rigor percibido del proceso) | **Parcial** — valida el enfoque como serio, pero la ejecución (sin ayuda funcional, campos que exigen precisión que no siempre se tiene) le resta puntos |
| HS9 (¿rigor legítimo o fricción?) | **Parcial/Confirmada con matiz** — confirmada en el "por qué", refutada en el "cómo" |
| HS8 (¿pensión marginal o piso útil?) | **Confirmada** — la trata como chequeo de piso mínimo confiable, no como dato descartable |

### Rúbrica Skandia

| Sencillez | Facilidad | Integralidad | Memorabilidad |
|---|---|---|---|
| 3 | 2 | 4 | 3 |

*Integralidad en 4/4* — la nota más alta de todo el testeo hasta ahora: comparación real, tabla por fidelidad, IBL, capital acumulado, tasa de reemplazo y aportes voluntarios con delta explícito cubren lo que un perfil analítico necesita para decidir.

### Hallazgo no anticipado — corrobora con una tercera fuente el problema de las ayudas

**Ningún ícono de ayuda mostró contenido** en Pasos 2 y 4, verificado a nivel de DOM (wrapper de tooltip vacío) en 3 íconos distintos de forma consistente. Coincide con el hallazgo de Sofía (Wealth Builders). **Nota importante para Producto:** esto contradice lo observado directamente por el equipo humano en la evaluación heurística inicial, donde el mismo tipo de ayuda (semanas cotizadas RAIS) sí renderizó contenido con captura de pantalla. Esto sugiere que **el comportamiento de las ayudas es intermitente o depende de estado/timing**, no que estén permanentemente rotas — hay que verificarlo manualmente con un humano antes de escalarlo como defecto confirmado. Ver también el bug de re-render que encontró Hernando (Family Guardians) en la misma zona de la interfaz.

---

## Persona: Ricardo Fernández Uribe

44 años, Vicepresidente de Banca de Inversión en un banco multilatino / ex-socio de fondo de private equity, casado, patrimonio muy alto (acciones, fondos privados, inmuebles). La pensión obligatoria es una fracción menor de su riqueza total. Muy poco tiempo disponible, compara todo contra estándares de banca privada internacional, cero tolerancia a fricción.

**Veredicto rápido:** el simulador es informativo y con buen contenido, pero tropieza justo donde Ricardo es más exigente: captura de datos lenta (calendarios sin escritura libre) y el botón "Calcular" de aportes voluntarios **no actualiza el número principal**, solo un texto secundario. Lo calificaría de *"funcional pero amateur en los detalles que importan"*.

### Hallazgos por paso

**Paso 0:** ve el simulador como algo secundario frente a su portafolio desde el arranque — *"para mí la pensión obligatoria es un colchón menor, no mi estrategia de retiro"*. No hay copy que reposicione la herramienta para un perfil de alto patrimonio.

**Paso 1:** el campo de fecha **no acepta el valor tecleado** en el formato que su propio placeholder pide ("dd/mm/aaaa") — mantiene el error hasta usar el widget de calendario, décadas atrás. Se repitió para la fecha del beneficiario. *"Tener que navegar un selector de década en década para escribir una fecha que ya sé de memoria es fricción pura, no rigor."*

**Paso 2 (HS8/HS9):** completó salario $45.000.000, semanas RAIS 1.150, semanas RPM 0, saldo $850.000.000. **Hallazgo verificado y reproducible**: tras diligenciar el último campo, "Continuar" permaneció deshabilitado pese al valor correcto en pantalla — solo se habilitó tras perder el foco. Confirma que la validación no se dispara con el evento de input, solo al blur — mismo patrón sistémico ya visto en otras sesiones y en la heurística original.

**Paso 3:** mismo bug de validación tardía, ahora en la distribución de fondos: el spinbutton mostraba "2" visualmente pero el sistema seguía marcando "Te faltan 2 años por distribuir" hasta un blur adicional. Confirma que es un patrón del formulario, no un evento aislado.

**Paso 4 (HS8):** RAIS $23.680.287 (53%) vs RPM $25.200.000 (56%). Capital acumulado: $4.572.405.743. Pregunta directa: *"Comparado con mi patrimonio, $23 a $25 millones mensuales [...] es completamente marginal [...] Le daría los 5 minutos extra solo por curiosidad técnica; si esto fuera una decisión real, ya habría cerrado la pestaña."*

**Aportes voluntarios (verificado con captura antes/después):** aporte único $100M + $5M/mes, clic "Calcular". Apareció correctamente el nuevo valor en un recuadro de texto, pero **el círculo principal y el "Capital acumulado" no se actualizaron** — séptima confirmación independiente del mismo defecto. *"Dos números distintos conviviendo en la misma pantalla sin reconciliarse [...] amateur para alguien acostumbrado a plataformas de banca privada."*

### Hipótesis

| Hipótesis | Veredicto |
|---|---|
| HS8 (¿relevante o marginal frente al patrimonio?) | **Confirmada** — percibido como marginal; el bug del círculo refuerza la percepción de herramienta poco profesional |
| HS9 (fricción de captura para este segmento) | **Confirmada** — fechas sin escritura libre y validación solo-en-blur generan irritación, no la sensación de "rigor" que sí toleró Jorge |

### Rúbrica Skandia

| Sencillez | Facilidad | Integralidad | Memorabilidad |
|---|---|---|---|
| 2 | 2 | 3 | 2 |

### Nota — un hallazgo de Family Guardians fue descartado

Una observación inicial de Hernando (Family Guardians) sobre valores inesperados en el formulario se investigó cruzando este reporte y se descartó: fue un artefacto del proceso de evaluación, no un comportamiento del prototipo. Ver la corrección aplicada en `testeo-family-guardians.md`.

---

## Convergencia transversal — el bug de "Aportes voluntarios"

Con Ricardo, el defecto de que el círculo principal de resultado no se actualiza tras "Calcular" en el panel de aportes voluntarios queda confirmado de forma independiente **7 veces** a lo largo de todo el testeo: Financial Explorer (4/5 personas), Germán y Sofía (Wealth Builders), Jorge y Ricardo (Capital Investor), y Hernando y Roberto (Family Guardians) — prácticamente en cada segmento y cada sesión donde se probó el panel. Deja de ser un hallazgo puntual: es un defecto sistémico del componente, verificable y reproducible en cualquier escenario.

---

**Estado: COMPLETO — 2 de 2 personas de la muestra acotada.**
