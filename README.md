# UX Prototypes — Skandia

Repositorio centralizado de prototipos HTML del equipo UX de Skandia Colombia.  
Cada artefacto vive en su propia carpeta dentro de `projects/`, se versiona con git y se publica automáticamente en el catálogo.

---

## ¿Cómo agregar un prototipo nuevo?

### 1. Crea la carpeta del proyecto

Dentro de `projects/`, crea una carpeta con el nombre del artefacto en **kebab-case**:

```
projects/
└── onboarding-digital/     ← así se nombra
    ├── v1/                 ← primera versión (obligatorio)
    │   └── index.html      ← archivo principal
    └── meta.json           ← metadata del artefacto (obligatorio)
```

**Convención de nombres:** usa kebab-case, sin espacios ni mayúsculas.  
Ejemplos: `onboarding-digital`, `simulador-flujo-caja`, `menu-hub-mobile`

---

### 2. Llena el archivo `meta.json`

```json
{
  "name": "Nombre legible del prototipo",
  "author": "Tu nombre",
  "project": "Nombre del proyecto o iniciativa",
  "description": "Qué resuelve este prototipo",
  "status": "en revisión",
  "created_at": "2026-06-01",
  "updated_at": "2026-06-01"
}
```

Valores posibles para `status`: `en revisión`, `en iteración`, `aprobado`, `handoff`

---

### 3. Haz commit y push

```bash
git add projects/nombre-del-prototipo/
git commit -m "feat: agrega prototipo nombre-del-prototipo"
git push
```

El catálogo se actualiza automáticamente con cada push a `main`.

---

## Estructura del repositorio

```
ux-prototypes/
├── .github/
│   └── workflows/
│       └── deploy.yml      ← pipeline de CI/CD (GitHub Actions)
├── projects/               ← aquí van los prototipos
├── catalog/                ← catálogo generado automáticamente (no editar)
└── README.md
```

---

## Equipo

Equipo UX — Skandia Colombia  
Organización: [UxplorersColombia](https://github.com/UxplorersColombia)
