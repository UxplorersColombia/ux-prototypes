#!/usr/bin/env bash
# Uso: ./nuevo-artefacto.sh
# Requiere: bash, node (ya instalado en el proyecto)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECTS_DIR="$SCRIPT_DIR/projects"
TODAY=$(date +%Y-%m-%d)

# ── Utilidades ────────────────────────────────────────────────────────────────

to_kebab() {
  printf '%s' "$1" \
    | sed 's/[áÁ]/a/g;s/[éÉ]/e/g;s/[íÍ]/i/g;s/[óÓ]/o/g;s/[úÚüÜ]/u/g;s/[ñÑ]/n/g' \
    | tr '[:upper:]' '[:lower:]' \
    | tr -cs 'a-z0-9' '-' \
    | sed 's/^-*//;s/-*$//'
}

detect_next_version() {
  local dir="$1"
  local max=0
  if [[ -d "$dir" ]]; then
    for d in "$dir"/v*/; do
      [[ -d "$d" ]] || continue
      local num
      num=$(basename "$d"); num="${num#v}"
      [[ "$num" =~ ^[0-9]+$ ]] && (( num > max )) && max=$num
    done
  fi
  echo $((max + 1))
}

# ── Bienvenida ────────────────────────────────────────────────────────────────

echo ""
echo "  ┌──────────────────────────────────────────┐"
echo "  │   Nuevo artefacto — Skandia UX            │"
echo "  └──────────────────────────────────────────┘"
echo ""

# ── Recopilar datos ───────────────────────────────────────────────────────────

read -rp "  Nombre del prototipo (ej: Onboarding Digital): " NAME
if [[ -z "${NAME:-}" ]]; then
  echo "  Error: el nombre es obligatorio." >&2
  exit 1
fi

SLUG=$(to_kebab "$NAME")
echo "  → carpeta: $SLUG"
echo ""

read -rp "  Autor (tu nombre): " AUTHOR
read -rp "  Proyecto o iniciativa: " PROJECT
read -rp "  Descripción breve: " DESCRIPTION
read -rp "  Status [en revisión]: " STATUS_INPUT
STATUS="${STATUS_INPUT:-en revisión}"

# ── Detectar versión ──────────────────────────────────────────────────────────

PROJECT_DIR="$PROJECTS_DIR/$SLUG"
NEXT_V=$(detect_next_version "$PROJECT_DIR")
VERSION="v$NEXT_V"
TARGET_DIR="$PROJECT_DIR/$VERSION"

if [[ "$NEXT_V" -eq 1 ]]; then
  echo ""
  echo "  Proyecto nuevo → se creará $SLUG/v1/"
else
  echo ""
  echo "  Proyecto existente → versión siguiente: $VERSION"
fi

echo ""
read -rp "  ¿Confirmar? [S/n]: " CONFIRM
CONFIRM="${CONFIRM:-S}"
if [[ "$CONFIRM" =~ ^[Nn] ]]; then
  echo "  Cancelado."
  exit 0
fi

# ── Crear estructura ──────────────────────────────────────────────────────────

mkdir -p "$TARGET_DIR"

# meta.json: preservar created_at si ya existe
META_FILE="$PROJECT_DIR/meta.json"
CREATED_AT="$TODAY"
if [[ -f "$META_FILE" ]]; then
  CREATED_AT=$(node -e "
    try {
      const m = require('$META_FILE');
      process.stdout.write(m.created_at || '$TODAY');
    } catch(e) {
      process.stdout.write('$TODAY');
    }
  " 2>/dev/null || echo "$TODAY")
fi

cat > "$META_FILE" << JSON
{
  "name": "$NAME",
  "author": "$AUTHOR",
  "project": "$PROJECT",
  "description": "$DESCRIPTION",
  "status": "$STATUS",
  "created_at": "$CREATED_AT",
  "updated_at": "$TODAY"
}
JSON

# index.html vacío listo para pegar el HTML
cat > "$TARGET_DIR/index.html" << 'HTML'
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prototipo en construcción</title>
</head>
<body>
  <!-- Pega aquí el HTML generado por el agente -->
</body>
</html>
HTML

# ── Resultado ─────────────────────────────────────────────────────────────────

echo ""
echo "  ✓ Listo. Archivos creados:"
echo "  ├── projects/$SLUG/meta.json"
echo "  └── projects/$SLUG/$VERSION/index.html  ← pega tu HTML aquí"
echo ""
echo "  Abre el archivo, reemplaza el contenido y luego ejecuta:"
echo ""
echo "    git add ."
echo "    git commit -m \"feat: $SLUG $VERSION - $AUTHOR\""
echo "    git push"
echo ""
echo "  URL pública (~2 min después del push):"
echo "  https://uxplorerscolombia.github.io/ux-prototypes/projects/$SLUG/$VERSION/"
echo ""
