// API Service for ControlPallets
class APIService {
    constructor() {
        this.baseURL = API_CONFIG.BASE_URL;
    }

    // Helper method for fetch requests
    async request(endpoint, options = {}) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'API request failed');
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // Pallets API
    async getPallets() {
        return await this.request(API_CONFIG.ENDPOINTS.PALLETS);
    }

    async getPallet(id) {
        return await this.request(`${API_CONFIG.ENDPOINTS.PALLETS}/${id}`);
    }

    async createPallet(pallet) {
        return await this.request(API_CONFIG.ENDPOINTS.PALLETS, {
            method: 'POST',
            body: JSON.stringify(pallet)
        });
    }

    async updatePallet(id, pallet) {
        return await this.request(`${API_CONFIG.ENDPOINTS.PALLETS}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(pallet)
        });
    }

    async deletePallet(id) {
        return await this.request(`${API_CONFIG.ENDPOINTS.PALLETS}/${id}`, {
            method: 'DELETE'
        });
    }

    // Ubicaciones API
    async getUbicaciones() {
        return await this.request(API_CONFIG.ENDPOINTS.UBICACIONES);
    }

    async createUbicacion(ubicacion) {
        return await this.request(API_CONFIG.ENDPOINTS.UBICACIONES, {
            method: 'POST',
            body: JSON.stringify(ubicacion)
        });
    }

    async deleteUbicacion(id) {
        return await this.request(`${API_CONFIG.ENDPOINTS.UBICACIONES}/${id}`, {
            method: 'DELETE'
        });
    }

    // Health Check
    async healthCheck() {
        return await this.request(API_CONFIG.ENDPOINTS.HEALTH);
    }
}

// Create global instance
const api = new APIService();
