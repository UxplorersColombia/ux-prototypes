# Reglamento de uso de los Canales Digitales — vista aislada

Versión TYC del prototipo **Rediseño App Skandia v3**. Muestra únicamente el modal
del Reglamento de uso de los Canales Digitales, fuera del flujo completo.

**Ver:** https://uxplorerscolombia.github.io/ux-prototypes/projects/rediseno-app-skandia/tyc/

## Dónde aparece en el flujo real

Tras ingresar con contraseña como **cliente actual**. Es un bottom sheet al 92% de
la altura de pantalla, sobre el dashboard recién autenticado. En esta vista aislada
el fondo es neutro a propósito — no simula el dashboard.

## Qué se puede probar

| Interacción | Comportamiento |
|---|---|
| Desplazar el texto hasta el final | Oculta el chip "Lee y desplázate hasta abajo para continuar" |
| Marcar la casilla de aceptación | Habilita "Aceptar y continuar" (gris → verde) |
| Aceptar y continuar | Estado de confirmación |
| Rechazar | Estado de no aceptación |
| Ver el modal de nuevo | Reinicia para volver a recorrerlo |

## Fidelidad — leer antes de revisar

Esta vista se extrajo del archivo fuente `Skandia App Rediseño v3.dc.html` del
proyecto de diseño `V3_Login_DashApp`.

**Idéntico al original:** todo el markup del modal, el texto completo del Reglamento,
tipografías (Montserrat / Open Sans), colores, medidas, animaciones de entrada
(`skscrim`, `sksheet`) y el marco de dispositivo (416×858, pantalla 390×832).
El texto legal no se transcribió a mano: se extrajo programáticamente del fuente.

**Reconstruido para esta vista aislada:**

- **La lógica de interacción.** El prototipo original corre sobre el runtime
  `support.js` con directivas `sc-if` y handlers (`toggleTyc`, `onTycScroll`,
  `acceptTyc`, `rejectTyc`). Aquí es JS plano equivalente. El comportamiento se
  derivó del markup, no del código original — ese bloque no estaba disponible.
- **Las pantallas de "aceptado" y "rechazado".** No existen en el prototipo: allí
  `acceptTyc` simplemente cierra el modal y revela el dashboard. Se agregaron para
  que la vista aislada tenga un cierre visible. **No son diseño aprobado.**

**Pendientes conocidos:**

- El botón "Descargar el reglamento completo" es inerte, igual que en el prototipo
  (allí está mapeado a `noop`). No hay archivo asociado todavía.
- El modal muestra **6 de las ~21 secciones** del Reglamento (1, 3, 8, 10, 16, 21).
  Es el recorte curado del prototipo, no el documento completo. Si esta vista se
  usa para revisión legal, hay que reemplazarlo por el texto íntegro.
- La casilla de aceptación es marcable sin haber llegado al final del texto. Es el
  comportamiento del prototipo — el markup no condiciona la casilla al scroll.
  Si el requisito legal es forzar la lectura, hay que cambiarlo.

## Fuente

- Proyecto de diseño: `V3_Login_DashApp` (Claude Design) — autoría: Isa
- Reglamento: Versión 1 — 22 de julio de 2026
