# Sistema de Control de Pallets - Versión MySQL 📦🗄️

Aplicación web para el registro y control de pallets con backend MySQL y API REST.

## 🎯 Nuevas Características

- ✅ **Base de datos MySQL** para persistencia de datos
- ✅ **API REST** con Node.js y Express
- ✅ **Acceso multi-dispositivo** - los datos se sincronizan
- ✅ **Backend robusto** con validaciones
- ✅ **Escalable** - fácil de expandir

## 📋 Requisitos

- Node.js 18+ (instalado: v24.13.0)
- MySQL 8.4+ (instalado y configurado)
- Navegador web moderno

## 🚀 Instalación y Configuración

### 1. Base de Datos MySQL

La base de datos ya está configurada con:
- **Nombre:** controlpallets_db
- **Usuario:** root
- **Contraseña:** controlpallets2026
- **Puerto:** 3306

### 2. Iniciar el Backend

```bash
cd backend
npm start
```

El servidor se iniciará en http://localhost:3001

### 3. Abrir la Aplicación

Abre el archivo `index-mysql.html` en tu navegador.

## 📂 Estructura del Proyecto

```
ControlPallets/
├── backend/                    # Backend API
│   ├── server.js              # Servidor Express
│   ├── db.js                  # Conexión MySQL
│   ├── routes/                # Rutas de la API
│   │   ├── pallets.js
│   │   └── ubicaciones.js
│   ├── database.sql           # Script SQL inicial
│   ├── .env                   # Variables de entorno
│   └── package.json
├── index-mysql.html           # Frontend MySQL (NUEVO)
├── app-mysql.js               # Lógica con API (NUEVO)
├── api.js                     # Cliente API (NUEVO)
├── config.js                  # Configuración API (NUEVO)
├── index.html                 # Frontend localStorage (ORIGINAL)
├── app.js                     # Lógica localStorage (ORIGINAL)
├── styles.css
└── README-MYSQL.md            # Este archivo
```

## 🔄 Diferencias entre Versiones

### Versión LocalStorage (Original)
- **Archivos:** index.html + app.js
- **Almacenamiento:** Navegador (localStorage)
- **Ventaja:** Simple, sin servidor
- **Desventaja:** Datos locales, no compartidos

### Versión MySQL (Nueva)
- **Archivos:** index-mysql.html + app-mysql.js
- **Almacenamiento:** Base de datos MySQL
- **Ventaja:** Datos centralizados, multi-dispositivo
- **Desventaja:** Requiere servidor backend

## 📊 API Endpoints

### Pallets
- `GET /api/pallets` - Obtener todos los pallets
- `GET /api/pallets/:id` - Obtener un pallet
- `POST /api/pallets` - Crear nuevo pallet
- `PUT /api/pallets/:id` - Actualizar pallet
- `DELETE /api/pallets/:id` - Eliminar pallet

### Ubicaciones
- `GET /api/ubicaciones` - Obtener todas las ubicaciones
- `POST /api/ubicaciones` - Crear nueva ubicación
- `DELETE /api/ubicaciones/:id` - Eliminar ubicación

### Health Check
- `GET /api/health` - Verificar estado de la API

## 🔧 Configuración

### Cambiar Puerto del Backend

Edita `backend/.env`:
```env
PORT=3001  # Cambiar a otro puerto si es necesario
```

### Cambiar Credenciales de MySQL

Edita `backend/.env`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=controlpallets_db
```

### Cambiar URL de la API (si usas otro servidor)

Edita `config.js`:
```javascript
const API_CONFIG = {
    BASE_URL: 'http://localhost:3001/api',  // Cambiar aquí
    ...
};
```

## 🐛 Solución de Problemas

### Error: "No se puede conectar con el servidor"

1. Verifica que el backend esté corriendo:
   ```bash
   cd backend
   npm start
   ```

2. Verifica que MySQL esté activo:
   ```bash
   net start MySQL84
   ```

### Error: "Access denied for user"

Verifica las credenciales en `backend/.env`

### La tabla está vacía

Los datos se almacenan en MySQL, no en localStorage. Si migras desde la versión localStorage, los datos no se transferirán automáticamente.

## 🔄 Migración de Datos

Si tienes datos en localStorage y quieres migrarlos a MySQL:

1. Abre `index.html` (versión localStorage)
2. Abre la consola del navegador (F12)
3. Ejecuta:
   ```javascript
   console.log(localStorage.getItem('pallets'));
   ```
4. Copia los datos
5. Importa manualmente o usa la API para agregar cada pallet

## 📝 Scripts Útiles

### Iniciar servidor en modo desarrollo
```bash
cd backend
npm run dev  # Con nodemon (pendiente de instalar)
```

### Resetear base de datos
```bash
mysql -u root -pcontrolpallets2026 < backend/database.sql
```

### Ver logs del servidor
Los logs aparecen en la terminal donde ejecutaste `npm start`

## 🚀 Próximas Mejoras

- [ ] Autenticación de usuarios
- [ ] Roles y permisos
- [ ] Historial de cambios
- [ ] Reportes avanzados
- [ ] Exportación a PDF
- [ ] Notificaciones en tiempo real
- [ ] App móvil

## 👨‍💻 Información Técnica

- **Frontend:** HTML5, CSS3, JavaScript ES6+
- **Backend:** Node.js v24.13.0
- **Framework:** Express.js v5.2.1
- **Base de Datos:** MySQL 8.4.8
- **Cliente MySQL:** mysql2 v3.17.1
- **Gráficas:** Chart.js
- **CORS:** Habilitado para desarrollo

## 📄 Licencia

ISC

---

**Versión MySQL:** 2.0.0
**Última actualización:** 2026-02-13
**Desarrollado con ❤️ y Claude Sonnet 4.5**
