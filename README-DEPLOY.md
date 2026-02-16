# 🚀 Guía de Despliegue - ControlPallets

Sistema de Control de Pallets con MySQL y Node.js listo para múltiples usuarios.

---

## ✅ Cambios Recientes

### 🔄 Soporte para Pallets Duplicados
- ✅ **Sistema permite duplicados**: Ahora puedes registrar el mismo Pallet ID en diferentes fechas/ubicaciones
- ✅ **Restricción UNIQUE removida**: La base de datos ya no bloquea IDs duplicados
- ✅ **Backend actualizado**: Validación de duplicados eliminada
- ✅ **Pestaña Duplicados funcional**: El frontend detecta y muestra duplicados correctamente

---

## 📋 Requisitos del Servidor

### Software Necesario:
- **Node.js** v14+ (recomendado v18 o superior)
- **MySQL** 8.0+ (o MariaDB 10.5+)
- **Sistema Operativo**: Windows Server, Linux, o macOS

### Puertos Requeridos:
- **3001**: Backend API (Node.js)
- **3306**: MySQL (solo si usas MySQL en el mismo servidor)
- **80/443**: Servidor web (Nginx/Apache) para servir el frontend

---

## 🛠️ Instalación en Servidor

### 1️⃣ Clonar el Proyecto

```bash
# En el servidor
git clone https://github.com/Lxrala21/ControlPallets.git
cd ControlPallets
```

### 2️⃣ Configurar Backend

```bash
cd backend

# Instalar dependencias
npm install

# Crear archivo .env con las credenciales de tu servidor
cp .env.example .env
nano .env  # O usa tu editor favorito
```

**Editar `.env` con la configuración de tu servidor:**

```env
# MySQL Database Configuration
DB_HOST=localhost           # O IP de tu servidor MySQL
DB_PORT=3306
DB_USER=root               # Usuario MySQL
DB_PASSWORD=TU_PASSWORD    # Contraseña MySQL
DB_NAME=controlpallets_db

# Server Configuration
PORT=3001                  # Puerto del backend
```

### 3️⃣ Crear Base de Datos

```bash
# Ejecutar script de base de datos
mysql -u root -p < database.sql

# Verificar que se creó correctamente
mysql -u root -p -e "USE controlpallets_db; SHOW TABLES;"
```

**Deberías ver:**
- pallets
- ubicaciones

### 4️⃣ Iniciar Backend

**Opción A: Desarrollo/Pruebas**
```bash
cd backend
npm start
```

**Opción B: Producción (con PM2)**
```bash
# Instalar PM2 globalmente
npm install -g pm2

# Iniciar servidor con PM2
cd backend
pm2 start server.js --name controlpallets-api

# Ver logs
pm2 logs controlpallets-api

# Configurar PM2 para reinicio automático
pm2 startup
pm2 save
```

### 5️⃣ Configurar Frontend

Editar `config.js` en la raíz del proyecto:

```javascript
const API_CONFIG = {
    // Cambiar a la IP/dominio de tu servidor
    BASE_URL: 'http://TU_IP_SERVIDOR:3001/api',

    // O si tienes dominio:
    // BASE_URL: 'https://api.tu-dominio.com',

    ENDPOINTS: {
        PALLETS: '/pallets',
        UBICACIONES: '/ubicaciones',
        HEALTH: '/health'
    }
};
```

### 6️⃣ Servir Frontend

**Opción A: Con Nginx (Recomendado)**

```nginx
# /etc/nginx/sites-available/controlpallets
server {
    listen 80;
    server_name tu-dominio.com;  # O tu IP
    root /ruta/al/ControlPallets;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy para API (opcional si usas proxy reverso)
    location /api {
        proxy_pass http://localhost:3001/api;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activar configuración:
```bash
sudo ln -s /etc/nginx/sites-available/controlpallets /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**Opción B: Con Apache**

```apache
# /etc/apache2/sites-available/controlpallets.conf
<VirtualHost *:80>
    ServerName tu-dominio.com
    DocumentRoot /ruta/al/ControlPallets

    <Directory /ruta/al/ControlPallets>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # Proxy para API
    ProxyPass /api http://localhost:3001/api
    ProxyPassReverse /api http://localhost:3001/api
</VirtualHost>
```

Activar:
```bash
sudo a2ensite controlpallets
sudo a2enmod proxy proxy_http
sudo systemctl reload apache2
```

**Opción C: Desarrollo rápido (http-server)**

```bash
# Instalar http-server globalmente
npm install -g http-server

# En la carpeta del proyecto
http-server -p 8080
```

---

## 🔒 Seguridad

### Firewall
```bash
# Permitir solo puertos necesarios
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw allow 3001/tcp  # Backend API (opcional, si no usas proxy)
sudo ufw enable
```

### SSL/HTTPS (Recomendado para producción)
```bash
# Con Certbot (Let's Encrypt)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tu-dominio.com
```

### Variables de Entorno
- ❌ **NUNCA** subir el archivo `.env` a Git
- ✅ Usar `.env.example` como plantilla
- ✅ Cambiar las contraseñas por defecto en producción

---

## 🧪 Verificar Instalación

### 1. Backend funcionando:
```bash
curl http://localhost:3001/api/health
# Respuesta: {"status":"OK","message":"ControlPallets API is running"}
```

### 2. Frontend cargando:
```bash
# Abrir en navegador
http://tu-servidor.com
# O
http://TU_IP:8080
```

### 3. Crear pallet de prueba:
```bash
curl -X POST http://localhost:3001/api/pallets \
  -H "Content-Type: application/json" \
  -d '{
    "palletId": "TEST-001",
    "piezas": "Prueba",
    "condicion": "Bueno",
    "area": "Almacen",
    "fecha": "2026-02-16",
    "turno": "Dia",
    "ubicacion": "A01-F001-001",
    "qty": 10
  }'
```

### 4. Verificar duplicados:
```bash
# Crear otro pallet con el mismo ID
curl -X POST http://localhost:3001/api/pallets \
  -H "Content-Type: application/json" \
  -d '{
    "palletId": "TEST-001",
    "piezas": "Prueba 2",
    "condicion": "Bueno",
    "area": "Produccion",
    "fecha": "2026-02-17",
    "turno": "Noche",
    "ubicacion": "A01-F001-002",
    "qty": 20
  }'

# Debería crearse sin error ✓
```

---

## 📊 Monitoreo

### Ver logs del backend (PM2):
```bash
pm2 logs controlpallets-api --lines 100
```

### Reiniciar backend:
```bash
pm2 restart controlpallets-api
```

### Estado del sistema:
```bash
pm2 status
pm2 monit
```

---

## 🔄 Actualizar el Sistema

```bash
# En el servidor
cd /ruta/al/ControlPallets

# Hacer backup de la base de datos
mysqldump -u root -p controlpallets_db > backup_$(date +%Y%m%d).sql

# Actualizar código
git pull origin master

# Actualizar dependencias del backend
cd backend
npm install

# Reiniciar backend
pm2 restart controlpallets-api

# Limpiar caché del navegador para ver cambios en frontend
```

---

## 🐛 Solución de Problemas

### Backend no inicia:
```bash
# Ver logs
pm2 logs controlpallets-api --err

# Verificar MySQL
sudo systemctl status mysql
mysql -u root -p -e "SELECT 1"

# Verificar puerto 3001
sudo netstat -tulpn | grep 3001
```

### Frontend no conecta con backend:
1. Verificar que `config.js` tenga la IP/dominio correcto
2. Verificar firewall: `sudo ufw status`
3. Probar endpoint: `curl http://TU_IP:3001/api/health`

### Error de permisos MySQL:
```sql
-- Crear usuario específico para la aplicación
CREATE USER 'controlpallets'@'localhost' IDENTIFIED BY 'password_seguro';
GRANT ALL PRIVILEGES ON controlpallets_db.* TO 'controlpallets'@'localhost';
FLUSH PRIVILEGES;
```

---

## 📱 Acceso Multi-Usuario

Una vez desplegado, los usuarios pueden acceder desde:
- **Red Local**: `http://IP_SERVIDOR` o `http://IP_SERVIDOR:8080`
- **Internet**: `http://tu-dominio.com` o `https://tu-dominio.com`

Cada usuario verá la misma base de datos en tiempo real. ✅

---

## 📚 Recursos

- **Repositorio**: https://github.com/Lxrala21/ControlPallets
- **Node.js**: https://nodejs.org/
- **PM2 Docs**: https://pm2.keymetrics.io/
- **Nginx Docs**: https://nginx.org/en/docs/
- **MySQL Docs**: https://dev.mysql.com/doc/

---

## 📞 Soporte

Si encuentras problemas:
1. Revisar logs: `pm2 logs controlpallets-api`
2. Verificar conectividad: `curl http://localhost:3001/api/health`
3. Revisar documentación de MySQL y Node.js

---

**© 2026 Lxrala21** - Sistema Control de Pallets v1.0
