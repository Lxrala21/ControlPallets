// API Configuration
// Para producción, cambia BASE_URL a la URL de tu servidor
// Ejemplo: 'http://tu-servidor.com:3001/api' o 'https://api.tu-dominio.com'
const API_CONFIG = {
    // Desarrollo local
    BASE_URL: 'http://localhost:3001/api',

    // Producción (descomenta y modifica según tu servidor)
    // BASE_URL: 'http://TU_IP_SERVIDOR:3001/api',
    // BASE_URL: 'https://api.tu-dominio.com',

    ENDPOINTS: {
        PALLETS: '/pallets',
        UBICACIONES: '/ubicaciones',
        HEALTH: '/health'
    }
};
