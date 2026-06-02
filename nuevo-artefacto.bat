@echo off
:: nuevo-artefacto.bat — Crea la estructura para un nuevo artefacto UX
:: Usa PowerShell internamente (disponible en Windows 10+)
:: Ejecutar desde la raiz del repo: nuevo-artefacto.bat

chcp 65001 > nul 2>&1
setlocal enabledelayedexpansion

echo.
echo   Nuevo artefacto -- Skandia UX
echo   ================================
echo.

:: ── Recopilar datos ──────────────────────────────────────────────────────────

set /p "NAME=  Nombre del prototipo (ej: Onboarding Digital): "
if "!NAME!"=="" (
  echo   Error: el nombre es obligatorio.
  pause
  exit /b 1
)

:: Convertir a kebab-case via PowerShell
for /f "usebackq delims=" %%s in (`powershell -NoProfile -Command ^
  "$n = '!NAME!'.ToLower();" ^
  "$n = $n -replace 'a|a|a','a' -replace 'e|e','e' -replace 'i|i','i' -replace 'o|o','o' -replace 'u|u|u','u' -replace 'n','n';" ^
  "$n = $n.Normalize([System.Text.NormalizationForm]::FormD);" ^
  "$n = [System.Text.RegularExpressions.Regex]::Replace($n,'[\p{M}]','');" ^
  "$n = [System.Text.RegularExpressions.Regex]::Replace($n,'[^a-z0-9]+','-').Trim('-');" ^
  "Write-Host $n -NoNewline"`) do set SLUG=%%s

echo   -^> carpeta: !SLUG!
echo.

set /p "AUTHOR=  Autor (tu nombre): "
set /p "PROJECT=  Proyecto o iniciativa: "
set /p "DESCRIPTION=  Descripcion breve: "
set /p "STATUS_INPUT=  Status [en revision]: "
if "!STATUS_INPUT!"=="" (set STATUS=en revision) else (set STATUS=!STATUS_INPUT!)

:: ── Detectar version ─────────────────────────────────────────────────────────

set PROJECT_DIR=projects\!SLUG!
set MAX_V=0

if exist "!PROJECT_DIR!\" (
  for /d %%v in ("!PROJECT_DIR!\v*") do (
    set VNAME=%%~nxv
    set VNUM=!VNAME:v=!
    if "!VNUM!" neq "" (
      set /a CHECK=!VNUM! 2>nul
      if !VNUM! GTR !MAX_V! set MAX_V=!VNUM!
    )
  )
)
set /a NEXT_V=!MAX_V!+1
set VERSION=v!NEXT_V!
set TARGET_DIR=!PROJECT_DIR!\!VERSION!

if "!NEXT_V!"=="1" (
  echo   Proyecto nuevo -^> se creara !SLUG!\v1\
) else (
  echo   Proyecto existente -^> version siguiente: !VERSION!
)

echo.
set /p "CONFIRM=  Confirmar? [S/n]: "
if /i "!CONFIRM!"=="n" (
  echo   Cancelado.
  pause
  exit /b 0
)

:: ── Crear estructura ──────────────────────────────────────────────────────────

if not exist "!TARGET_DIR!" mkdir "!TARGET_DIR!"

:: Fecha actual via PowerShell
for /f "usebackq delims=" %%d in (`powershell -NoProfile -Command "Get-Date -Format yyyy-MM-dd"`) do set TODAY=%%d

:: Preservar created_at si meta.json ya existe
set CREATED_AT=!TODAY!
if exist "!PROJECT_DIR!\meta.json" (
  for /f "usebackq delims=" %%c in (`node -e ^
    "try{var m=require('./!PROJECT_DIR!/meta.json');process.stdout.write(m.created_at||'!TODAY!')}catch(e){process.stdout.write('!TODAY!')}"`) do (
    set CREATED_AT=%%c
  )
)

:: meta.json
(
echo {
echo   "name": "!NAME!",
echo   "author": "!AUTHOR!",
echo   "project": "!PROJECT!",
echo   "description": "!DESCRIPTION!",
echo   "status": "!STATUS!",
echo   "created_at": "!CREATED_AT!",
echo   "updated_at": "!TODAY!"
echo }
) > "!PROJECT_DIR!\meta.json"

:: index.html vacio
(
echo ^<!DOCTYPE html^>
echo ^<html lang="es"^>
echo ^<head^>
echo   ^<meta charset="UTF-8"^>
echo   ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>
echo   ^<title^>Prototipo en construccion^</title^>
echo ^</head^>
echo ^<body^>
echo   ^<!-- Pega aqui el HTML generado por el agente --^>
echo ^</body^>
echo ^</html^>
) > "!TARGET_DIR!\index.html"

:: ── Resultado ─────────────────────────────────────────────────────────────────

echo.
echo   Listo. Archivos creados:
echo   projects\!SLUG!\meta.json
echo   projects\!SLUG!\!VERSION!\index.html  ^<-- pega tu HTML aqui
echo.
echo   Abre el archivo, reemplaza el contenido y luego ejecuta:
echo.
echo     git add .
echo     git commit -m "feat: !SLUG! !VERSION! - !AUTHOR!"
echo     git push
echo.
echo   URL publica (~2 min despues del push):
echo   https://uxplorerscolombia.github.io/ux-prototypes/projects/!SLUG!/!VERSION!/
echo.
pause
