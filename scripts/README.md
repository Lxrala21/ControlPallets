# 🤖 Scripts de Automatización - ControlPallets

Scripts para automatizar tareas comunes del sistema.

---

## 📁 Archivos

### `sync.bat` / `sync.sh`
**Sincronización Automática de BD y GitHub**

Ejecuta el proceso completo de:
1. Backup de base de datos
2. Aplicar migraciones pendientes
3. Commit y push a GitHub

**Uso:**

```bash
# Windows
scripts\sync.bat

# Linux/Mac
./scripts/sync.sh

# Con mensaje personalizado
scripts\sync.bat "Agregar nueva funcionalidad"
./scripts/sync.sh "Agregar nueva funcionalidad"
```

---

## 🚀 Acceso Rápido

Desde la raíz del proyecto:

```bash
# Windows - Doble clic en:
SYNC.bat

# O desde terminal:
.\SYNC.bat
.\SYNC.bat "mi mensaje de commit"
```

---

## 📋 Proceso Detallado

### 1️⃣ Backup de Base de Datos
- Crea backup en `backend/backups/`
- Formato: `backup_YYYYMMDD_HHMMSS.sql`
- Incluye todas las tablas y datos

### 2️⃣ Aplicar Migraciones
- Busca archivos `.sql` en `backend/migrations/`
- Los ejecuta en orden alfabético
- Registra errores si los hay

### 3️⃣ Git Commit
- Detecta archivos modificados
- Crea commit con mensaje descriptivo
- Incluye co-author de Claude

### 4️⃣ Git Push
- Sube cambios a `origin master`
- Verifica que se haya subido correctamente

---

## 📊 Ejemplo de Salida

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
```

---

## 🔧 Configuración

Los scripts leen la configuración de:

**Windows (`sync.bat`):**
```batch
set MYSQL_BIN="C:\Program Files\MySQL\MySQL Server 8.4\bin\mysql.exe"
set DB_USER=root
set DB_PASS=controlpallets2026
set DB_NAME=controlpallets_db
```

**Linux/Mac (`sync.sh`):**
```bash
DB_USER="root"
DB_PASS="controlpallets2026"
DB_NAME="controlpallets_db"
```

**Editar estas variables según tu configuración.**

---

## 🛡️ Seguridad

- ✅ Crea backup antes de cualquier cambio
- ✅ No sube archivos `.env` a GitHub (están en .gitignore)
- ✅ Valida errores en cada paso
- ✅ Detiene ejecución si hay errores críticos

---

## 📂 Estructura de Backups

```
backend/
└── backups/
    ├── backup_20260216_093000.sql
    ├── backup_20260216_113000.sql
    ├── backup_20260216_153000.sql
    └── ...
```

**Tip:** Puedes eliminar backups antiguos manualmente para liberar espacio.

---

## 🔄 Migraciones

Para agregar una migración:

1. Crea un archivo SQL en `backend/migrations/`
2. Nómbralo con prefijo numérico: `001_agregar_campo.sql`
3. Ejecuta `SYNC.bat` y se aplicará automáticamente

**Ejemplo:**

```sql
-- backend/migrations/001_agregar_campo_observaciones.sql
ALTER TABLE pallets ADD COLUMN observaciones TEXT;
```

La próxima vez que ejecutes `sync.bat`, se aplicará automáticamente.

---

## 🐛 Solución de Problemas

### Error: MySQL no está corriendo
```bash
# Windows
net start MySQL84

# Linux
sudo systemctl start mysql
```

### Error: Git no configurado
```bash
git config user.name "Tu Nombre"
git config user.email "tu@email.com"
```

### Error: Sin permisos en GitHub
```bash
# Verificar remote
git remote -v

# Si es HTTPS, cambiar a SSH o configurar token
git remote set-url origin https://TU_TOKEN@github.com/Lxrala21/ControlPallets.git
```

---

## 📅 Automatización

### Windows Task Scheduler

Para ejecutar cada hora automáticamente:

1. Abrir Task Scheduler
2. Crear nueva tarea
3. Trigger: Cada 1 hora
4. Acción: `C:\Users\User\Documents\ControlPallets\SYNC.bat`

### Linux Cron

Agregar a crontab:

```bash
# Cada hora
0 * * * * cd /ruta/a/ControlPallets && ./scripts/sync.sh >> logs/sync.log 2>&1

# Cada 6 horas
0 */6 * * * cd /ruta/a/ControlPallets && ./scripts/sync.sh
```

---

## 🎯 Casos de Uso

### 1. Al terminar el día de trabajo
```bash
.\SYNC.bat "Fin de jornada - cambios del día"
```

### 2. Después de agregar funcionalidad
```bash
.\SYNC.bat "Agregar módulo de reportes"
```

### 3. Sincronización rápida
```bash
.\SYNC.bat
# Usa mensaje automático con fecha/hora
```

### 4. Antes de desplegar a producción
```bash
.\SYNC.bat "Pre-deploy: versión 1.1.0"
```

---

## 📚 Archivos Relacionados

- `.claude/skills/sync.md` - Definición de la skill
- `.claude/agents/sync-agent.md` - Documentación del agente
- `SYNC.bat` - Acceso directo desde raíz

---

**© 2026 Lxrala21** - ControlPallets Automation Scripts
