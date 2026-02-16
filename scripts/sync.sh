#!/bin/bash
# ================================================
# Script: Sync Database & GitHub
# Descripción: Backup BD + Migraciones + Git Push
# ================================================

echo ""
echo "================================================"
echo " SYNC: Database + GitHub"
echo "================================================"
echo ""

# Configuración
DB_USER="root"
DB_PASS="controlpallets2026"
DB_NAME="controlpallets_db"
BACKUP_DIR="backend/backups"
MIGRATIONS_DIR="backend/migrations"

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Crear directorios si no existen
mkdir -p "$BACKUP_DIR"
mkdir -p "$MIGRATIONS_DIR"

# ================================================
# 1. BACKUP DE BASE DE DATOS
# ================================================
echo "[1/5] Creando backup de base de datos..."

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/backup_$TIMESTAMP.sql"

mysqldump -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" > "$BACKUP_FILE" 2>/dev/null
if [ $? -eq 0 ]; then
    echo -e "   ${GREEN}✓${NC} Backup creado: $BACKUP_FILE"
else
    echo -e "   ${RED}✗${NC} Error creando backup"
    exit 1
fi

# ================================================
# 2. APLICAR MIGRACIONES
# ================================================
echo ""
echo "[2/5] Aplicando migraciones pendientes..."

FOUND_MIGRATIONS=0
if [ -d "$MIGRATIONS_DIR" ]; then
    for migration_file in "$MIGRATIONS_DIR"/*.sql; do
        if [ -f "$migration_file" ]; then
            FOUND_MIGRATIONS=1
            echo "   → Ejecutando: $(basename "$migration_file")"
            mysql -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" < "$migration_file" 2>/dev/null
            if [ $? -eq 0 ]; then
                echo -e "      ${GREEN}✓${NC} Aplicada exitosamente"
            else
                echo -e "      ${RED}✗${NC} Error aplicando migración"
            fi
        fi
    done
fi

if [ $FOUND_MIGRATIONS -eq 0 ]; then
    echo -e "   ${BLUE}ℹ${NC} No hay migraciones pendientes"
fi

# ================================================
# 3. GIT STATUS
# ================================================
echo ""
echo "[3/5] Verificando cambios en Git..."

git status --short
if [ $? -ne 0 ]; then
    echo -e "   ${RED}✗${NC} Error verificando Git"
    exit 1
fi

# ================================================
# 4. GIT ADD & COMMIT
# ================================================
echo ""
echo "[4/5] Agregando cambios a Git..."

git add .
if [ $? -ne 0 ]; then
    echo -e "   ${RED}✗${NC} Error agregando archivos"
    exit 1
fi

# Usar mensaje personalizado o generar uno automático
COMMIT_MSG="${1:-Auto-sync: Actualización automática de BD y código $(date '+%Y-%m-%d %H:%M')}"

echo "   → Mensaje: $COMMIT_MSG"

git commit -m "$COMMIT_MSG" -m "" -m "Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>" 2>/dev/null
if [ $? -eq 0 ]; then
    echo -e "   ${GREEN}✓${NC} Commit creado"
else
    echo -e "   ${BLUE}ℹ${NC} No hay cambios para commit"
fi

# ================================================
# 5. GIT PUSH
# ================================================
echo ""
echo "[5/5] Subiendo a GitHub..."

git push origin master
if [ $? -eq 0 ]; then
    echo -e "   ${GREEN}✓${NC} Cambios subidos exitosamente"
else
    echo -e "   ${RED}✗${NC} Error subiendo cambios"
    exit 1
fi

# ================================================
# RESUMEN
# ================================================
echo ""
echo "================================================"
echo " ✓ SINCRONIZACIÓN COMPLETA"
echo "================================================"
echo ""
echo "  • Backup: $BACKUP_FILE"
echo "  • GitHub: Actualizado"
echo "  • Hora: $(date '+%Y-%m-%d %H:%M:%S')"
echo ""
echo "================================================"
echo ""
