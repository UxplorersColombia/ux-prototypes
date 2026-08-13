---
name: publicar-prototipo
description: Publica un prototipo HTML en el repositorio ux-prototypes de Skandia — recopila datos, crea la carpeta y meta.json, muestra una vista previa del HTML para aprobación, y solo tras confirmación explícita ejecuta git add/commit/push. Úsala cuando el diseñador pida publicar, subir o guardar (definitivamente) un prototipo.
---

# Publicar Prototipo — Skandia UX

Flujo completo para publicar un prototipo en este repositorio: recopila los datos, crea los archivos, te muestra una vista previa para que apruebes, y **solo entonces** publica con git.

A diferencia del agente general de `CLAUDE.md` (que se detiene después de crear los archivos y te entrega los comandos de git para que los corras tú), esta skill se encarga también de la revisión y de ejecutar el push.

---

## Cuándo activarse

Cuando el diseñador diga algo como:
- "Publica este prototipo"
- "Ya lo revisé, publícalo"
- "Sube esto al repo definitivamente"
- "/publicar-prototipo"

---

## Paso 1 — Recopilar datos

Si el proyecto y la versión **ya existen** (archivos creados antes por el agente de `CLAUDE.md`, por el script `nuevo-artefacto`, o a mano), no repitas este paso — ve directo al Paso 4 con la ruta que te indique el diseñador.

Si no, pregunta **uno a uno** los datos que falten:

| Dato | Ejemplo | Límite |
|------|---------|--------|
| Nombre del prototipo | "Onboarding Digital" | 60 caracteres |
| Autor | "Laura Torres" | — |
| Proyecto o iniciativa | "Fondo de pensiones voluntario" | — |
| Descripción breve | "Flujo de vinculación para usuarios nuevos" | 180 caracteres |
| Status | por defecto: **en revisión** | — |

**Status válidos:** `en revisión` · `en iteración` · `aprobado` · `handoff` · `archivado`

Si el nombre o la descripción exceden el límite, pide al diseñador que lo resuma antes de continuar — no lo trunques tú. El límite existe para que todas las tarjetas del catálogo (`catalog/index.html`) se vean parejas (título ≈ 2 líneas, descripción ≈ 4 líneas dentro de la tarjeta).

---

## Paso 2 — Calcular carpeta y versión

Convierte el nombre a kebab-case (sin espacios, mayúsculas, acentos ni caracteres especiales).

Revisa si `projects/[nombre-kebab]/` ya existe:
- **No existe** → crear `v1/`.
- **Existe** → leer las carpetas `v1/`, `v2/`, etc. y crear la siguiente (si hay `v2`, crear `v3`).

---

## Paso 3 — Crear archivos

```
projects/
└── [nombre-kebab]/
    ├── meta.json
    └── [vN]/
        └── index.html
```

`meta.json` (crear si es nuevo; si es una versión nueva del mismo proyecto, actualizar solo `updated_at` y `status`):

```json
{
  "name": "Nombre legible del prototipo",
  "author": "Nombre del autor",
  "project": "Nombre del proyecto o iniciativa",
  "description": "Qué resuelve este prototipo",
  "status": "en revisión",
  "created_at": "YYYY-MM-DD",
  "updated_at": "YYYY-MM-DD"
}
```

`index.html`: deposita el HTML del artefacto tal como fue generado en `projects/[nombre-kebab]/[vN]/index.html`.

Si el diseñador todavía no tiene el HTML, crea la estructura y un `index.html` vacío (plantilla de `CLAUDE.md`), avísale que reemplace el contenido, y **detente aquí** — no hay nada que publicar todavía.

---

## Paso 4 — Vista previa (obligatoria antes de publicar)

Abre `projects/[nombre-kebab]/[vN]/index.html` en el navegador predeterminado, según el sistema operativo:

- **Windows:** `start "" "projects/[nombre-kebab]/[vN]/index.html"`
- **macOS:** `open "projects/[nombre-kebab]/[vN]/index.html"`
- **Linux:** `xdg-open "projects/[nombre-kebab]/[vN]/index.html"`

Dile al diseñador que revise el prototipo en el navegador.

**No continúes al Paso 5 sin una confirmación explícita** ("sí, publica", "dale, publícalo" o equivalente). Si el diseñador pide cambios, vuelve al Paso 3 y repite la vista previa antes de volver a pedir confirmación.

---

## Paso 5 — Publicar (git)

Solo después de la confirmación explícita del Paso 4:

```bash
git add projects/[nombre-kebab]
git commit -m "feat: [nombre-kebab] [vN] - [autor]"
git push
```

- Usa `git add` acotado a la carpeta del proyecto — nunca `git add .` — para no arrastrar cambios sueltos de otras carpetas.
- Si `git push` falla (por ejemplo la rama remota avanzó), reporta el error tal cual al diseñador. No reintentes con `--force` ni saltes hooks (`--no-verify`).

---

## Paso 6 — Informar al diseñador

```
✓ Publicado: projects/[nombre-kebab]/[vN]/index.html

Commit: feat: [nombre-kebab] [vN] - [autor]

URL pública (aparece ~2 minutos después del push):
  https://uxplorerscolombia.github.io/ux-prototypes/projects/[nombre-kebab]/[vN]/
```

---

## Convenciones que nunca debes romper

- Carpetas siempre en **kebab-case**: `onboarding-digital`, no `OnboardingDigital` ni `onboarding digital`.
- Versiones siempre `v1`, `v2`, `v3` — nunca `final`, `v2_revisado`, `v1-ok`.
- El `meta.json` va en la raíz del proyecto (`projects/[nombre]/meta.json`), no dentro de la versión.
- Nunca sobrescribir una versión existente — siempre crear una nueva.
- Nunca saltarte el Paso 4 (vista previa) ni el Paso 5 (confirmación explícita) antes de hacer push.
- Mensaje de commit: `feat: [nombre-kebab] [vN] - [autor]`.
