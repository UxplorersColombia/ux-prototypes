# Simulador Jubilación — Ficha del prototipo

**Fecha de levantamiento:** 2026-09-16
**Entorno:** https://uat.skandia.co/simulador-pensional (UAT, protegido con HTTP Basic Auth)
**Levantado por:** equipo de UX, mediante recorrido completo del flujo con automatización de navegador
**Autoría de la herramienta:** equipo de Operaciones
**Estado:** documento de reconstrucción — levanta la herramienta desde el prototipo en vivo, para tener una base común antes de evaluarla.

---

## 1. Qué es, técnicamente

| | |
|---|---|
| **Tipo** | Microfrontend Angular publicado como Web Component |
| **Custom element** | `<skco-pension-simulator>` |
| **Proyecto** | `SkCo.PensionSimulatorPublic.Angular` |
| **Librería UI** | PrimeNG (clases `p-datepicker`, `p-button`, `p-dialog`) |
| **Host** | Portal público Liferay (tema `SkandiaCo-public-theme`) |
| **Bundle** | Azure Blob Storage — `skcodevblobresources.blob.core.windows.net/skco-pensionsimulatorpublic-angular/` |
| **Gráficas** | ECharts 5 (cargado por el tema desde CDN) |

> El bundle de UAT se sirve desde el contenedor **`skcodevblobresources`** — el blob de *desarrollo*. Vale la pena confirmar con el equipo si es intencional o un apuntamiento de ambiente mal configurado.

### Nota de acceso — leer antes de volver a abrir el prototipo

El bundle Angular en Azure Blob **devuelve 403 ante cualquier request que lleve cabecera `Authorization`**. Si se autentica el navegador con credenciales globales (el método habitual para Basic Auth), la cabecera se envía también a Azure, el bundle no carga y **la página abre prácticamente en blanco, con el componente montado pero vacío** — sin ningún error visible que explique por qué.

La forma que funciona es embeber las credenciales en la URL, que Chrome limita al origen `uat.skandia.co`:

```
https://<usuario>:<contraseña>@uat.skandia.co/simulador-pensional
```

Síntoma de que se cayó en la trampa: `document.querySelector('skco-pension-simulator').children.length === 0`.

---

## 2. Estructura de la pantalla

Dos columnas en desktop:

- **Columna izquierda (principal):** el formulario del paso activo.
- **Columna derecha (sidebar):** título "Simulador Jubilación", indicador de progreso de 4 pasos, selector de Régimen (R.A.I.S / R.P.M) con su texto explicativo, descargo de rentabilidades, enlace a la Superintendencia Financiera y el desplegable "Ver el alcance de la proyección".

En móvil las dos columnas se apilan y **el sidebar queda arriba** (ver heurística H5).

---

## 3. El flujo, paso a paso

### Paso 1 — INFORMACIÓN PERSONAL

| Campo | Tipo | Obligatorio | Notas |
|---|---|---|---|
| Nombre | Texto libre | Sí | Placeholder "Nombre y apellido" |
| Fecha de Nacimiento | Datepicker PrimeNG | Sí | Alimenta "Tu edad hoy: N años." |
| Género | Radio icónico | Sí | Hombre / Mujer. Binario, sin otras opciones |
| Estado del Afiliado | Radio | Sí | Válido / Inválido, con ayuda "?" |
| Tipo de Beneficiario (Principal) | Radio icónico | Sí | Cónyuge / Hijo / Padres / Hermanos / No tiene beneficiarios |

Elegir cualquier beneficiario distinto de "No tiene" **despliega progresivamente** un sub-formulario *Datos del beneficiario principal*: fecha de nacimiento, género y estado (válido/inválido) del beneficiario.

Nota al pie: *"La simulación corresponde a la modalidad de pensión de retiro programado, calculada con base en las cotizaciones obligatorias, y no incluye aportes voluntarios futuros. En ninguno de los regímenes la pensión puede ser inferior al salario mínimo mensual legal vigente."*

### Paso 2 — HISTORIA LABORAL

| Campo | Tipo | Notas |
|---|---|---|
| ¿Qué tipo de proyección deseas realizar? | Radio | *Proyección del régimen de ahorro individual* · *Comparación entre los dos regímenes* |
| Salario actual o último recibido | Moneda enmascarada | Formato `$ 8.000.000`; la máscara se aplica **al perder el foco** |
| Tu salario es | Radio | Ordinario / Integral |
| Fecha en que empezó a cotizar | Datepicker | |
| **Semanas cotizadas en RAIS** | Numérico | Placeholder `0` |
| **Semanas cotizadas en RPM** | Numérico | Placeholder `0` |
| **Saldo actual en cuenta de ahorro individual** | Moneda enmascarada | |

Los tres campos en negrita son el punto crítico de la herramienta: **datos que el usuario no tiene en la cabeza**. Cada uno tiene ayuda "?", pero el contenido es definicional — explica *qué es* el dato, no *dónde encontrarlo* (ver heurística H4).

La fecha en que empezó a cotizar **no se usa para estimar las semanas**: se pide igual, por separado y a mano.

### Paso 3 — EDAD DE PENSIÓN

- **Slider de edad de pensión.** Por defecto 67. Informa: *"La edad mínima de ley en tu caso es 62 años. Te faltan 21 años."*
- **Distribución del saldo entre tres fondos** — Mayor Riesgo, Moderado, Conservador — expresada **en número de años, que deben sumar exactamente los años que faltan**. Contador en vivo: *"Deben sumar 21, los años que te faltan. Hoy suman 0."* y alerta bloqueante mientras no cuadre.
- Nota al pie sobre la **regla de convergencia**: al cumplir 51 años las mujeres y 57 los hombres, los recursos se trasladan año tras año al fondo conservador hasta el 100%; el simulador lo calcula automáticamente.

Es el paso de mayor carga cognitiva del flujo: pide a una persona corriente **asignar años, no porcentajes**, entre tres perfiles de riesgo, y que la suma cuadre exacto.

### Paso 4 — RESULTADO DE LA SIMULACIÓN

**Tabs de "Fidelidad"** — cuántos meses al año se asume que la persona cotiza: `12 meses` · `9 meses` · `6 meses` · `0 meses` · `Propia` · `Resumen`.

**Resultado** (con *Comparación entre los dos regímenes*): dos círculos enfrentados.

| | RAIS | RPM |
|---|---|---|
| Mesada | $ 7.348.351 | $ 6.400.000 |
| Tasa de reemplazo | 92% del salario | 80% del salario |
| Base | Modalidad de retiro programado | Calculada sobre el IBL y las semanas alcanzadas |

**Detalle:** edad de pensión, semanas cotizadas al momento de pensionarse, semanas faltantes para RPM, IBL, capital acumulado en cuenta individual.

**Tab "Resumen":** tabla comparativa de los cinco escenarios de fidelidad. Ejemplo del caso levantado:

| | 12 meses | 9 meses | 6 meses | 0 meses | Propia |
|---|---|---|---|---|---|
| Semanas cotizadas | 2.192 | 1.919 | 1.646 | 1.100 | 2.010 |
| Mesada RAIS | $ 7.348.351 | $ 6.717.781 | $ 6.087.210 | $ 4.826.069 | $ 6.927.971 |
| Mesada RPM | $ 6.400.000 | $ 6.400.000 | $ 5.735.202 | **$ 0** | $ 6.400.000 |
| Tasa de reemplazo RAIS | 92% | 84% | 76% | 60% | 87% |

El `$ 0` de RPM en el escenario "0 meses" **no se explica** — es por no alcanzar las semanas mínimas, pero la tabla no lo dice. La tabla tampoco muestra tasa de reemplazo de RPM, solo de RAIS.

**Aportes voluntarios:** panel con *Valor del aporte único* y *Valor del aporte periódico (al mes)* → botón `Calcular` / `Sin aportes voluntarios`. Recalcula la mesada.

**Cierre:** `Volver` · `Generar PDF`. **No hay ninguna acción comercial** — ni asesor, ni apertura de producto, ni dejar datos de contacto (ver heurística H8).

---

## 4. Caso de prueba usado para el levantamiento

Hombre, 15/04/1980 (46 años), válido, beneficiario cónyuge mujer 22/09/1982 válida. Comparación entre los dos regímenes. Salario $8.000.000 ordinario. Empezó a cotizar 01/03/2005. 900 semanas RAIS, 200 semanas RPM, saldo $250.000.000. Pensión a los 67 años, distribución 10 años mayor riesgo / 8 moderado / 3 conservador.

Los resultados de las tablas anteriores corresponden a este caso.

---

## 5. Supuestos declarados

Al reconstruir la herramienta desde el prototipo, el equipo de UX asume lo siguiente. **Son supuestos, no hechos verificados**, y conviene confirmarlos con el equipo de Operaciones — sin que ello bloquee el trabajo.

1. **El objetivo de negocio es captación de aportes voluntarios y generación de leads.** Se infiere del panel de aportes voluntarios, que es el único módulo con intención comercial. Lo contradice el hecho de que el flujo no cierra en ninguna acción: si el objetivo fuera captar, faltaría el paso final.

2. **El público objetivo es el visitante anónimo del sitio público, no el cliente autenticado.** Se infiere de que pide a mano semanas cotizadas y saldo — datos que Skandia ya posee de sus propios afiliados y podría autocompletar. Si el público real fuera el afiliado logueado, buena parte del paso 2 sobra.

3. **La herramienta asume el marco pensional de dos regímenes en competencia (RAIS vs RPM).** Toda la propuesta de valor del simulador — compararlos — depende de que esa comparación siga siendo una decisión vigente para el usuario. Es el supuesto de mayor riesgo del producto y se analiza en la base de investigación.

4. **El simulador no considera aportes voluntarios futuros en la proyección base**, según su propia nota al pie; el panel de aportes voluntarios del paso 4 es un recálculo posterior y separado.

---

## Documentos relacionados

- `simulador-jubilacion-heuristica.md` — defectos de usabilidad detectables sin usuarios
- `simulador-jubilacion-research.md` — base de investigación para el testeo
- `evidencia/` — capturas del recorrido completo
