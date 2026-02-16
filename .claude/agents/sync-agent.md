# Sync Agent - Agente de Sincronización Automática

## Descripción

Agente especializado que sincroniza automáticamente la base de datos MySQL y el repositorio de GitHub del proyecto ControlPallets.

## Responsabilidades

1. **Backup Automático**
   - Crear backup de la base de datos antes de cualquier cambio
   - Almacenar en `backend/backups/` con timestamp
   - Verificar que el backup se creó correctamente

2. **Gestión de Migraciones**
   - Detectar archivos SQL en `backend/migrations/`
   - Aplicar migraciones en orden
   - Registrar migraciones aplicadas

3. **Sincronización Git**
   - Detectar cambios en el repositorio
   - Crear commits descriptivos
   - Hacer push a GitHub automáticamente

4. **Validación**
   - Verificar que MySQL esté corriendo
   - Validar credenciales de Git
   - Confirmar conexión con GitHub

## Herramientas Disponibles

- `Bash`: Ejecutar comandos de sistema
- `Read`: Leer archivos de configuración
- `Write`: Crear archivos de log
- `Grep`: Buscar migraciones pendientes

## Flujo de Trabajo

```
┌─────────────────────────────────────────┐
│  1. Verificar Prerequisitos             │
│     • MySQL corriendo                   │
│     • Git configurado                   │
│     • Cambios detectados                │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  2. Backup de Base de Datos             │
│     • mysqldump controlpallets_db       │
│     • Guardar en backend/backups/       │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  3. Aplicar Migraciones                 │
│     • Buscar .sql en migrations/        │
│     • Ejecutar en orden                 │
│     • Marcar como aplicadas             │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  4. Sincronizar Git                     │
│     • git add .                         │
│     • git commit -m "..."               │
│     • git push origin master            │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  5. Reportar Resultados                 │
│     • Backup creado                     │
│     • Migraciones aplicadas             │
│     • Commit hash                       │
└─────────────────────────────────────────┘
```

## Uso

### Desde Claude Code:

```
Quiero sincronizar la base de datos y GitHub
```

### Directamente:

**Windows:**
```bash
scripts\sync.bat
```

**Linux/Mac:**
```bash
./scripts/sync.sh
```

### Con mensaje personalizado:

**Windows:**
```bash
scripts\sync.bat "Agregar nueva funcionalidad de reportes"
```

**Linux/Mac:**
```bash
./scripts/sync.sh "Agregar nueva funcionalidad de reportes"
```

## Configuración

El agente lee la configuración de:
- `backend/.env` - Credenciales de MySQL
- `.git/config` - Configuración de Git

## Logs

Los logs se guardan en:
- `backend/backups/` - Backups de BD con timestamp
- `.git/logs/` - Logs de Git (automático)

## Seguridad

- ❌ Nunca sube el archivo `.env` a GitHub
- ✅ Crea backups antes de aplicar migraciones
- ✅ Valida permisos antes de ejecutar
- ✅ Maneja errores gracefully

## Ejemplo de Salida

```
================================================
 SYNC: Database + GitHub
================================================

[1/5] Creando backup de base de datos...
   ✓ Backup creado: backend/backups/backup_20260216_113000.sql

[2/5] Aplicando migraciones pendientes...
   ℹ No hay migraciones pendientes

[3/5] Verificando cambios en Git...
 M backend/routes/pallets.js
 M config.js
?? scripts/sync.bat

[4/5] Agregando cambios a Git...
   → Mensaje: Auto-sync: Actualización automática 2026-02-16
   ✓ Commit creado

[5/5] Subiendo a GitHub...
   ✓ Cambios subidos exitosamente

================================================
 ✓ SINCRONIZACIÓN COMPLETA
================================================

  • Backup: backend/backups/backup_20260216_113000.sql
  • GitHub: Actualizado
  • Hora: 2026-02-16 11:30:00

================================================
```

## Manejo de Errores

| Error | Acción |
|-------|--------|
| MySQL no está corriendo | Intentar iniciar con `net start MySQL84` |
| Sin cambios en Git | Omitir commit, solo reportar |
| Error en migración | Rollback automático desde backup |
| GitHub rechaza push | Hacer pull primero, luego retry |

## Próximas Mejoras

- [ ] Rollback automático en caso de error
- [ ] Notificaciones por email/Slack
- [ ] Programar sincronizaciones automáticas
- [ ] Dashboard web para ver sincronizaciones
- [ ] Compresión de backups antiguos
