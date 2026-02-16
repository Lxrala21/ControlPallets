# 🔄 Migraciones de Base de Datos

Esta carpeta contiene scripts SQL para modificar la estructura de la base de datos.

## 📋 Cómo Crear una Migración

1. **Crear archivo SQL** con prefijo numérico:
   ```
   001_agregar_campo_observaciones.sql
   002_crear_tabla_reportes.sql
   003_modificar_tipo_condicion.sql
   ```

2. **Escribir SQL válido:**
   ```sql
   -- 001_agregar_campo_observaciones.sql
   USE controlpallets_db;

   ALTER TABLE pallets
   ADD COLUMN observaciones TEXT AFTER qty;

   SELECT 'Migración 001 aplicada correctamente' AS resultado;
   ```

3. **Ejecutar sincronización:**
   ```bash
   # El script SYNC detectará y aplicará automáticamente
   .\SYNC.bat
   ```

## ✅ Buenas Prácticas

- ✅ Usa prefijos numéricos (001, 002, 003...)
- ✅ Nombres descriptivos (`agregar_campo_X`, `crear_tabla_Y`)
- ✅ Incluye `USE controlpallets_db;` al inicio
- ✅ Agrega mensaje de confirmación al final
- ✅ Prueba en desarrollo antes de aplicar en producción

## ❌ Qué NO Hacer

- ❌ No borrar migraciones ya aplicadas
- ❌ No modificar migraciones existentes
- ❌ No usar DROP TABLE sin respaldo
- ❌ No incluir datos sensibles en migraciones

## 📂 Estructura

```
migrations/
├── README.md (este archivo)
├── 001_primera_migracion.sql
├── 002_segunda_migracion.sql
└── 003_tercera_migracion.sql
```

## 🔄 Proceso Automático

Cuando ejecutas `SYNC.bat` o `sync.sh`:

1. Se crea backup de la BD actual
2. Se buscan archivos `.sql` en esta carpeta
3. Se ejecutan en orden alfabético
4. Se registran los resultados

## 🛡️ Rollback

Si una migración falla, puedes hacer rollback:

```bash
# Restaurar desde el backup más reciente
cd backend/backups
mysql -u root -p controlpallets_db < backup_YYYYMMDD_HHMMSS.sql
```

## 📝 Ejemplo Completo

```sql
-- 001_agregar_campos_auditoria.sql
-- Descripción: Agregar campos de auditoría a la tabla pallets
-- Autor: Lxrala21
-- Fecha: 2026-02-16

USE controlpallets_db;

-- Agregar campos
ALTER TABLE pallets
ADD COLUMN created_by VARCHAR(100) DEFAULT 'system',
ADD COLUMN modified_by VARCHAR(100) DEFAULT 'system';

-- Actualizar registros existentes
UPDATE pallets
SET created_by = 'admin',
    modified_by = 'admin'
WHERE created_by = 'system';

-- Verificar
SELECT COUNT(*) as total_actualizado FROM pallets;

-- Mensaje de confirmación
SELECT '✓ Migración 001 aplicada: Campos de auditoría agregados' AS resultado;
```

---

**Tip:** Los backups automáticos se crean en `backend/backups/` antes de cada migración.
