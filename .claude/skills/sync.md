# Sync Database & GitHub

Sincroniza automáticamente la base de datos y sube cambios a GitHub.

## Descripción

Esta skill automatiza el proceso de:
1. Hacer backup de la base de datos MySQL
2. Aplicar migraciones pendientes (si existen)
3. Agregar cambios a Git
4. Crear commit con mensaje automático
5. Hacer push a GitHub

## Uso

```
/sync
```

O con mensaje personalizado:

```
/sync "mensaje del commit"
```

## Requisitos

- MySQL corriendo
- Git configurado
- Repositorio con remote origin

## Proceso

1. **Backup**: Crea backup de controlpallets_db
2. **Migraciones**: Ejecuta scripts SQL pendientes en backend/migrations/
3. **Git**: Add, commit y push automático
4. **Verificación**: Confirma que todo se subió correctamente
