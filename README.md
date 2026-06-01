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
    ├── index.html          ← archivo principal (obligatorio)
    └── meta.json           ← metadata del artefacto (obligatorio)
```

**Convención de nombres:** usa kebab-case, sin espacios ni mayúsculas.  
Ejemplos: `onboarding-digital`, `simulador-flujo-caja`, `menu-hub-mobile`

---

### 2. Llena el archivo `meta.json`

```json
{
  "title": "Nombre legible del prototipo",
  "description": "Qué hace y para qué sirve",
  "author": "Tu nombre",
  "date": "2026-06-01",
  "status": "draft",
  "tags": ["onboarding", "mobile"]
}
```

Valores posibles para `status`: `draft`, `review`, `approved`

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
