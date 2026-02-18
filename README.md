# ControlPallets

Sistema de control y seguimiento de pallets en almacén, con registro por área, turno, condición y ubicación.

## Acceso

| Entorno | URL |
|---------|-----|
| Producción (red interna) | http://192.168.80.103:8089 |
| Admin BINs | http://192.168.80.103:8089/bins-admin.html |

## Tecnología

- **Frontend:** HTML + CSS + JavaScript (sin frameworks)
- **Backend:** PHP 8.3 + MySQLi
- **Base de datos:** MySQL 8.0 — `controlpallets_db`
- **Servidor:** IIS en Windows 11 Pro (`DESKTOP-AJPKA4F`)
- **Gráficas:** Chart.js (CDN)
- **Excel:** xlsx-js-style (CDN)

## Arquitectura

```
Navegador (cualquier equipo en red)
    │
    ▼
IIS :8089  ──► index.html / bins-admin.html
    │
    ▼
api.php  ──► MySQL 8.0 (controlpallets_db)
```

## Archivos principales

| Archivo | Descripción |
|---------|-------------|
| `index.html` | App principal — registro, tabla, dashboard, importar/exportar |
| `app.js` | Lógica completa: clases `UbicacionManager` y `PalletManager`, CRUD via API, filtros, gráficas |
| `api.php` | REST API PHP+MySQLi — todos los endpoints |
| `config.js` | `BASE_URL` apuntando al servidor |
| `bins-admin.html` | Administración visual de ubicaciones BIN |
| `styles.css` | Estilos globales |
| `duplicados_functions.js` | Detección y análisis de pallets duplicados |
| `web.config` | Configuración IIS — headers CORS |
| `migrate-data.html` | Herramienta de migración localStorage → MySQL (uso único) |

## API — Endpoints

Todos los endpoints usan `http://192.168.80.103:8089/api.php?action=<accion>`

| Acción | Método | Descripción |
|--------|--------|-------------|
| `health` | GET | Estado del servidor y conexión DB |
| `getPallets` | GET | Todos los pallets |
| `createPallet` | POST | Crear pallet |
| `updatePallet` | POST | Actualizar pallet por `id` |
| `deletePallet` | POST | Eliminar pallet por `id` |
| `getUbicaciones` | GET | Todas las ubicaciones |
| `createUbicacion` | POST | Crear ubicación |
| `deleteUbicacion` | POST | Eliminar ubicación por `codigo` |
| `seedUbicaciones` | POST | Insertar ubicaciones en bloque (primera ejecución) |

## Base de datos

**Base de datos:** `controlpallets_db`
**Servidor:** localhost (MySQL 8.0, servicio `MySQL80`)
**Usuario:** root

```sql
-- Pallets
CREATE TABLE pallets (
  id VARCHAR(50) PRIMARY KEY,
  palletId VARCHAR(100) NOT NULL,
  piezas VARCHAR(200),
  qty INT DEFAULT 0,
  condicion VARCHAR(50),
  area VARCHAR(100),
  fecha DATE,
  turno VARCHAR(50),
  ubicacion VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Ubicaciones
CREATE TABLE ubicaciones (
  codigo VARCHAR(100) PRIMARY KEY,
  esBin TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Importar Excel

El sistema acepta archivos `.xlsx` con los siguientes encabezados (sin importar mayúsculas/minúsculas):

| Columna requerida | Alternativas aceptadas |
|-------------------|----------------------|
| `PalletID` | `Pallet ID`, `ID`, `pallet_id` |
| `Piezas` | `Pieza`, `Descripcion` |
| `Condicion` | `Condición`, `Estado` |
| `Area` | `Área`, `Zona` |
| `Fecha` | `fecha` — formatos: `YYYY-MM-DD`, `DD/MM/YYYY` |
| `Turno` | `turno` |
| `Ubicacion` | `Ubicación` |
| `qty` | `QTY`, `Cantidad` |

> Si el archivo tiene múltiples hojas, el sistema detecta automáticamente la hoja con datos de pallets.

## Funcionalidades

- Registro de pallets con validación
- Tabla con filtros por condición, área, turno, mes y búsqueda
- Dashboard con gráficas (condición, área, turno, BIN vs normal, evolución diaria)
- Importar desde Excel (`.xlsx`) — soporte multi-hoja
- Exportar a Excel con estilos
- Análisis de duplicados
- Administración de ubicaciones BIN (`bins-admin.html`)
- Datos compartidos en red — multiusuario via MySQL

## Servidor — Configuración IIS

```
Sitio:        ControlPallets
Puerto:       8089
Ruta física:  C:\inetpub\wwwroot\controlpallets\
App Pool:     DefaultAppPool
PHP handler:  PHP_via_FastCGI
Firewall:     Puerto 8089 abierto (regla: ControlPallets-HTTP-8089)
```

## Historial de versiones

| Versión | Descripción |
|---------|-------------|
| v3.0.0 | Migración completa a IIS + MySQL — multiusuario en red |
| v2.x | Backend Node.js + Express + MySQL (local) |
| v1.x | Frontend puro con localStorage |
