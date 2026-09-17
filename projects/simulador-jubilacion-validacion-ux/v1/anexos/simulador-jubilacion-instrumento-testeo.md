# Simulador Jubilación — Instrumento de testeo con agentes sintéticos

**Fecha:** 2026-09-16
**Tipo de proyecto:** VALIDAR (evaluación de un prototipo ya diseñado)
**Método:** test moderado de tarea única, adaptado a ejecución por agente sintético en carácter
**Insumos previos:** `simulador-jubilacion-teardown.md` (qué es) · `simulador-jubilacion-heuristica.md` (defectos ya confirmados sin usuarios) · `simulador-jubilacion-research.md` (hipótesis H1–H8, contexto regulatorio, vacíos)

## Qué prueba este instrumento y qué no

**Prueba:** comprensión del propósito de la herramienta, marco mental sobre regímenes pensionales, capacidad de completar el flujo con datos propios, reacción emocional al resultado, e intención de siguiente paso. Cada tarea está ligada a una hipótesis del research (H1–H8).

**No prueba:** los defectos de interfaz ya confirmados en la heurística (contraste, botón que no habilita, datepicker) — esos no necesitan testeo para corregirse. **Si el agente los encuentra de forma natural durante la tarea, debe anotar su reacción** (confusión, abandono, pérdida de confianza), porque esa reacción en carácter sí es dato nuevo que la heurística no puede producir por sí sola.

**Honestidad metodológica:** esto es un walkthrough con agente sintético en carácter, no una sesión con un usuario real. Todo hallazgo debe reportarse etiquetado como tal — nunca mezclarlo con evidencia de campo real.

---

## Antes de empezar

1. **Actúa en carácter de tu persona** (edad, ocupación, relación con sus finanzas, nivel de familiaridad digital, según tu ficha de segmento). Reacciona como ella reaccionaría, no como un evaluador de UX. Si tu persona no sabe qué es un "régimen pensional" o una "tasa de reemplazo", no lo sepas tú tampoco al narrar.
2. **Piensa en voz alta** en cada paso: qué crees que va a pasar, qué te confunde, qué te tranquiliza, qué abandonarías.
3. **Usa datos plausibles para tu persona**, no datos reales de nadie. Si tu persona no tendría a mano un dato (semanas cotizadas, saldo), **actúa esa duda** en vez de inventar un número con confianza — es exactamente la fricción que H1 quiere observar.
4. **No te detengas ante los defectos conocidos** (heurística) salvo que bloqueen la tarea; si uno te bloquea de verdad (p. ej. el botón Continuar no habilita), regístralo como abandono real, no lo fuerces con inspección técnica.

## Acceso al prototipo

- **URL:** `https://uat.skandia.co/simulador-pensional`
- **Credenciales:** las de acceso UAT ya provistas por Producto para este sprint (Basic Auth).
- **Trampa conocida:** el bundle del simulador se sirve desde Azure Blob y rechaza cualquier request con cabecera `Authorization`. Si autenticas el navegador con credenciales globales, la página carga casi en blanco. **Usa las credenciales embebidas en la URL** (`https://usuario:contraseña@uat.skandia.co/...`), que el navegador limita al dominio correcto.
- Acepta el aviso de cookies antes de empezar; si no, el layout se desplaza y confunde la lectura.

---

## Guion de sesión

### Paso 0 — Primera impresión
**Antes de tocar ningún campo**, mira la pantalla completa (formulario + panel derecho).

- ¿Para qué crees que sirve esta herramienta? ¿Qué esperas obtener al final?
- ¿Sabes en qué régimen pensional estás hoy (RAIS o RPM)? ¿Cómo lo sabes, o cómo lo averiguarías?

*Prueba: marco mental inicial, insumo para H2.*

### Paso 1 — Información personal
Completa tus datos y, si tu persona tiene pareja/hijos, los del beneficiario.

- ¿Algo te generó duda al llenar esto? ¿Elegir "Estado del Afiliado" o el tipo de beneficiario te resultó claro?
- Si el campo de fecha te costó trabajo o mostró un error antes de tocarlo, ¿qué pensaste en ese momento?

*Prueba: H8 (fricciones de entrada leídas como fallas del sitio).*

### Paso 2 — Historia laboral
Intenta completar salario, semanas cotizadas en cada régimen y saldo en tu cuenta individual, como lo haría tu persona con lo que realmente sabe de memoria.

- ¿Tienes estos datos ahora mismo? Si no, ¿qué harías: buscarlos, estimarlos, o cerrar la pestaña y dejarlo para después?
- ¿Usaste el ícono de ayuda "?" en algún campo? ¿Te dijo lo que necesitabas — especialmente **dónde conseguir el dato**?

*Prueba: H1 (el muro de datos duros). Es el paso más importante del guion — no lo apures.*

### Paso 3 — Edad de pensión y distribución de fondos
Ajusta la edad a la que te gustaría pensionarte y distribuye los años entre los tres fondos (Mayor Riesgo, Moderado, Conservador).

- Cuéntame con tus palabras qué te está pidiendo esta pantalla.
- ¿Cómo decidiste cuántos años poner en cada fondo? ¿Tuviste que adivinar?

*Prueba: H4 (carga cognitiva de la asignación por multifondos).*

### Paso 4 — Resultado
Lee el resultado completo: los dos círculos, el detalle, y abre la pestaña "Resumen".

- ¿Qué te está diciendo esta pantalla? Si tuvieras que explicárselo a alguien más, ¿qué le dirías?
- Con lo que ves, ¿sientes que podrías cambiarte de régimen si quisieras? *(no confirmar ni corregir la respuesta — solo registrarla)*
- ¿Entiendes qué significa "tasa de reemplazo"? ¿Y "Fidelidad"? ¿Y "IBL"?
- *(si tu escenario muestra $0 en algún régimen)* ¿Qué piensas al ver eso?
- ¿Qué tan cerca sientes que está esta cifra de tu pensión real?
- Terminaste. **¿Qué haces ahora?** Si quisieras hablar con alguien de Skandia sobre esto, ¿cómo lo harías?

*Prueba: H2 (marco mental de la comparación), H3 (vocabulario), H5 (cierre sin CTA), H6 ($0 sin explicar).*

---

## Cierre — Rúbrica Skandia (escala 1–4)

Califica cada criterio desde tu personaje, con una frase que justifique la nota.

| Criterio | 1 — Crítico | 2 — Deficiente | 3 — Aceptable | 4 — Excelente |
|---|---|---|---|---|
| **Sencillez** | No entendí para qué era ni qué me pedía | Entendí el propósito pero me perdí en el camino | Entendí casi todo, con algún tropiezo | Entendí todo sin esfuerzo |
| **Facilidad** | Abandoné o no pude completar el flujo | Completé, pero con mucha fricción o inventando datos | Completé con fricción menor | Completé sin dificultad |
| **Integralidad** | El resultado no se conecta con nada más de Skandia; siento que llegué a un callejón sin salida | Veo alguna conexión, pero no sé cómo seguir | Hay una ruta de siguiente paso, aunque débil | Queda claro cómo seguir con Skandia a partir de esto |
| **Memorabilidad** | No recuerdo qué me pidió ni qué me mostró | Recuerdo fragmentos sueltos | Recuerdo la idea general | Podría explicarle el resultado a alguien más sin volver a mirarlo |

**Pregunta de cierre:** ¿usarías esta herramienta de nuevo o la recomendarías? ¿Por qué sí o por qué no, en tus palabras?

---

## Formato de reporte

Cada persona sintética reporta con esta estructura, para que los 5 segmentos sean comparables al consolidarse:

```
Persona: [nombre, segmento, 1 línea de perfil]

Veredicto rápido: [1-2 frases — ¿completó el flujo? ¿con qué ánimo termina?]

Hallazgos por paso:
- Paso 0: [observación + cita textual en carácter]
- Paso 1: [observación + cita]
- Paso 2: [observación + cita] ← especial atención aquí
- Paso 3: [observación + cita]
- Paso 4: [observación + cita]

Hipótesis (H1–H8): [para cada una que aplique a esta persona → Confirmada / Refutada / Parcial, con la evidencia que la sostiene]

Rúbrica: Sencillez [1-4] · Facilidad [1-4] · Integralidad [1-4] · Memorabilidad [1-4]

Hallazgo no anticipado: [cualquier cosa fuera de las hipótesis originales, si apareció]
```

## Tags para consolidación posterior

Al etiquetar citas y observaciones para Dovetail, usar el sistema del playbook:

- **Journey:** Discovery · Consideración · Decisión · Uso · Soporte
- **Emociones:** Frustración · Confianza · Ansiedad · Satisfacción · Confusión
- **Comportamientos:** Compara opciones · Evita riesgo · Busca acompañamiento · Optimiza · Delega
- **Pain points:** Complejidad · Falta de tiempo · Desconfianza · Procesos lentos · Falta de orientación
- **Oportunidades:** Educación · Automatización · Personalización · Humanización · Simplificación

---

## Nota para quien consolide los 5 informes de segmento

Este instrumento no vuelve a preguntar por los defectos que la heurística ya confirmó (contraste, datepicker, botón en blur) — si aparecen espontáneamente, ya están validados y no hace falta recontarlos como hallazgo técnico. Lo nuevo que este testeo debe aportar es: **cuál hipótesis (H1–H8) se sostiene por segmento, con qué intensidad, y si aparece algo que el research no anticipó** — en particular, cómo reacciona cada segmento ante la comparación de regímenes (H2) y ante el cierre sin acción comercial (H5), que son los dos hallazgos de mayor consecuencia de negocio.
