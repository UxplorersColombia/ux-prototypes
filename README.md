# UX Prototypes — Skandia

Repositorio centralizado de prototipos HTML del equipo UX de Skandia Colombia.
Cada artefacto vive en su propia carpeta dentro de `projects/`, se versiona con git y se publica automáticamente en el catálogo.

- **Catálogo:** https://uxplorerscolombia.github.io/ux-prototypes/catalog/
- **Agentes UX:** https://github.com/UxplorersColombia/skandia-ux-agents

---

## Cómo agregar un prototipo

Hay dos caminos. Ambos terminan con los mismos tres comandos de git.

---

### Camino A — Con el agente de Claude Code (recomendado)

El agente se encarga de crear las carpetas, el `meta.json` y depositar el HTML.

**1.** Abre Claude Code en la carpeta `ux-prototypes/`:
```
code .
```
> Claude lee el `CLAUDE.md` de este repo y activa el modo agente de prototipado automáticamente.

**2.** Dile al agente que guarde el artefacto:
```
Guarda este prototipo: [pega el HTML aquí]
```
El agente te preguntará el nombre, autor, proyecto y descripción. Luego crea todo solo.

**3.** Publica:
```bash
git add .
git commit -m "feat: [nombre-proyecto] [vN] - [tu-nombre]"
git push
```

---

### Camino B — Manual (sin agente)

Usa el script interactivo que guía el proceso paso a paso.

**En Windows** (desde la carpeta `ux-prototypes/`):
```
nuevo-artefacto.bat
```

**En Mac / Linux / Git Bash**:
```bash
./nuevo-artefacto.sh
```

El script te pregunta los datos, detecta la versión automáticamente y crea:
- `projects/[nombre-proyecto]/meta.json`
- `projects/[nombre-proyecto]/[vN]/index.html` ← aquí pegas el HTML

**Luego:**

1. Abre `projects/[nombre-proyecto]/[vN]/index.html`
2. Reemplaza el contenido con el HTML de tu prototipo
3. Ejecuta:
```bash
git add .
git commit -m "feat: [nombre-proyecto] [vN] - [tu-nombre]"
git push
```

El catálogo se actualiza automáticamente en ~2 minutos.

---

## Convenciones del equipo

### Nombres de carpetas — kebab-case

Siempre en minúsculas, sin espacios, sin acentos, sin caracteres especiales.

| Nombre del prototipo | Carpeta |
|---------------------|---------|
| Onboarding Digital | `onboarding-digital` |
| Simulador Flujo de Caja | `simulador-flujo-de-caja` |
| Menú Hub Mobile | `menu-hub-mobile` |

### Versiones

Siempre `v1`, `v2`, `v3`... Nunca:
- ~~`final`~~
- ~~`v2_revisado`~~
- ~~`v1-ok`~~
- ~~`nuevo`~~

### Status del meta.json

| Status | Significado |
|--------|-------------|
| `en revisión` | Recién subido, pendiente de feedback |
| `en iteración` | Incorporando cambios tras la revisión |
| `aprobado` | Listo para handoff o referencia |
| `handoff` | Entregado a desarrollo |
| `archivado` | Proyecto inactivo — visible en el catálogo con badge gris, filtrable |

### Mensaje de commit

```
feat: [nombre-carpeta] [vN] - [autor]
```

Ejemplos:
```
feat: onboarding-digital v1 - Laura Torres
feat: simulador-flujo-caja v2 - Carlos Mejía
```

---

## Estructura del repositorio

```
ux-prototypes/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← pipeline CI/CD (no editar)
├── projects/
│   └── [nombre-proyecto]/
│       ├── meta.json           ← metadata del artefacto
│       ├── v1/
│       │   └── index.html
│       └── v2/
│           └── index.html
├── catalog/
│   └── index.html              ← generado automáticamente (no editar)
├── CLAUDE.md                   ← instrucciones del agente de prototipado
├── generate-catalog.js         ← generador del catálogo
├── nuevo-artefacto.sh          ← script para Mac/Linux/Git Bash
├── nuevo-artefacto.bat         ← script para Windows CMD
└── README.md
```

---

## Formato del meta.json

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

---

## Primeros pasos para un integrante nuevo

```bash
# 1. Clonar el repositorio
git clone https://github.com/UxplorersColombia/ux-prototypes.git
cd ux-prototypes

# 2. Abrir en VS Code con Claude Code
code .

# 3. Activar el agente (o usar el script manual)
# Camino A: hablar con el agente en Claude Code
# Camino B: ./nuevo-artefacto.sh  (o nuevo-artefacto.bat en Windows)
```

---

## Equipo

Equipo UX — Skandia Colombia
Organización: [UxplorersColombia](https://github.com/UxplorersColombia)
