@echo off
REM ================================================
REM Script: Sync Database & GitHub
REM Descripcion: Backup BD + Migraciones + Git Push
REM ================================================

echo.
echo ================================================
echo  SYNC: Database + GitHub
echo ================================================
echo.

set MYSQL_BIN="C:\Program Files\MySQL\MySQL Server 8.4\bin\mysql.exe"
set MYSQLDUMP_BIN="C:\Program Files\MySQL\MySQL Server 8.4\bin\mysqldump.exe"
set DB_USER=root
set DB_PASS=controlpallets2026
set DB_NAME=controlpallets_db
set BACKUP_DIR=backend\backups
set MIGRATIONS_DIR=backend\migrations

REM Crear directorio de backups si no existe
if not exist %BACKUP_DIR% mkdir %BACKUP_DIR%
if not exist %MIGRATIONS_DIR% mkdir %MIGRATIONS_DIR%

REM ================================================
REM 1. BACKUP DE BASE DE DATOS
REM ================================================
echo [1/5] Creando backup de base de datos...

set TIMESTAMP=%date:~-4%%date:~3,2%%date:~0,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set TIMESTAMP=%TIMESTAMP: =0%
set BACKUP_FILE=%BACKUP_DIR%\backup_%TIMESTAMP%.sql

%MYSQLDUMP_BIN% -u %DB_USER% -p%DB_PASS% %DB_NAME% > %BACKUP_FILE% 2>nul
if %errorlevel% equ 0 (
    echo    ✓ Backup creado: %BACKUP_FILE%
) else (
    echo    ✗ Error creando backup
    pause
    exit /b 1
)

REM ================================================
REM 2. APLICAR MIGRACIONES
REM ================================================
echo.
echo [2/5] Aplicando migraciones pendientes...

set FOUND_MIGRATIONS=0
for %%f in (%MIGRATIONS_DIR%\*.sql) do (
    set FOUND_MIGRATIONS=1
    echo    → Ejecutando: %%~nxf
    %MYSQL_BIN% -u %DB_USER% -p%DB_PASS% %DB_NAME% < "%%f" 2>nul
    if %errorlevel% equ 0 (
        echo       ✓ Aplicada exitosamente
    ) else (
        echo       ✗ Error aplicando migracion
    )
)

if %FOUND_MIGRATIONS% equ 0 (
    echo    ℹ No hay migraciones pendientes
)

REM ================================================
REM 3. GIT STATUS
REM ================================================
echo.
echo [3/5] Verificando cambios en Git...

git status --short
if %errorlevel% neq 0 (
    echo    ✗ Error verificando Git
    pause
    exit /b 1
)

REM ================================================
REM 4. GIT ADD & COMMIT
REM ================================================
echo.
echo [4/5] Agregando cambios a Git...

git add .
if %errorlevel% neq 0 (
    echo    ✗ Error agregando archivos
    pause
    exit /b 1
)

REM Usar mensaje personalizado o generar uno automático
set COMMIT_MSG=%~1
if "%COMMIT_MSG%"=="" (
    set COMMIT_MSG=Auto-sync: Actualizacion automatica de BD y codigo %date% %time:~0,5%
)

echo    → Mensaje: %COMMIT_MSG%

git commit -m "%COMMIT_MSG%" -m "" -m "Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
if %errorlevel% equ 0 (
    echo    ✓ Commit creado
) else (
    echo    ℹ No hay cambios para commit
)

REM ================================================
REM 5. GIT PUSH
REM ================================================
echo.
echo [5/5] Subiendo a GitHub...

git push origin master
if %errorlevel% equ 0 (
    echo    ✓ Cambios subidos exitosamente
) else (
    echo    ✗ Error subiendo cambios
    pause
    exit /b 1
)

REM ================================================
REM RESUMEN
REM ================================================
echo.
echo ================================================
echo  ✓ SINCRONIZACION COMPLETA
echo ================================================
echo.
echo  • Backup: %BACKUP_FILE%
echo  • GitHub: Actualizado
echo  • Hora: %date% %time:~0,8%
echo.
echo ================================================
echo.

pause
