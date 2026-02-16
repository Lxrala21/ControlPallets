@echo off
REM ================================================
REM SYNC - Acceso Directo
REM Ejecuta el script de sincronizacion completo
REM ================================================

cd /d "%~dp0"
call scripts\sync.bat %*
