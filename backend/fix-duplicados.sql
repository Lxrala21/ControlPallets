-- ================================================
-- Fix: Permitir Pallets Duplicados
-- Descripción: Remover restricción UNIQUE de pallet_id
-- ================================================

USE controlpallets_db;

-- 1. Eliminar la restricción UNIQUE de pallet_id (si existe)
-- Intentar eliminar el índice UNIQUE llamado 'pallet_id'
SET @exist := (SELECT COUNT(*) FROM information_schema.statistics
               WHERE table_schema = 'controlpallets_db'
               AND table_name = 'pallets'
               AND index_name = 'pallet_id');

SET @sqlstmt := IF(@exist > 0, 'ALTER TABLE pallets DROP INDEX pallet_id', 'SELECT "Index pallet_id no existe, continuando..."');
PREPARE stmt FROM @sqlstmt;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- 2. Cambiar tipos de datos para mayor flexibilidad
ALTER TABLE pallets
    MODIFY COLUMN condicion VARCHAR(100) NOT NULL,
    MODIFY COLUMN turno VARCHAR(50) NOT NULL;

-- 3. Verificar cambios
DESCRIBE pallets;

SELECT '✅ Fix aplicado: Se permiten pallets duplicados (mismo ID en diferentes fechas/ubicaciones)' AS mensaje;
