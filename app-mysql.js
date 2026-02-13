// ControlPallets - MySQL Version
// Este archivo usa la API REST en lugar de localStorage

// Clase para gestionar ubicaciones con API
class UbicacionManager {
    constructor() {
        this.ubicaciones = [];
        this.init();
    }

    async init() {
        await this.loadUbicaciones();
    }

    async loadUbicaciones() {
        try {
            this.ubicaciones = await api.getUbicaciones();
            console.log(`✅ Loaded ${this.ubicaciones.length} ubicaciones from API`);
        } catch (error) {
            console.error('Error loading ubicaciones:', error);
            alert('Error al cargar ubicaciones desde el servidor');
            this.ubicaciones = [];
        }
    }

    async addUbicacion(codigo, esBin) {
        try {
            await api.createUbicacion({ codigo, esBin });
            await this.loadUbicaciones();
            return true;
        } catch (error) {
            console.error('Error adding ubicacion:', error);
            throw error;
        }
    }

    async deleteUbicacion(id) {
        try {
            await api.deleteUbicacion(id);
            await this.loadUbicaciones();
        } catch (error) {
            console.error('Error deleting ubicacion:', error);
            throw error;
        }
    }

    getUbicaciones() {
        return this.ubicaciones;
    }

    getUbicacionesBin() {
        return this.ubicaciones.filter(u => u.es_bin);
    }
}

// Clase para gestionar pallets con API
class PalletManager {
    constructor() {
        this.pallets = [];
        this.ubicacionManager = new UbicacionManager();
        this.init();
    }

    async init() {
        await this.loadPallets();
    }

    async loadPallets() {
        try {
            const data = await api.getPallets();
            // Convertir formato de API al formato del frontend
            this.pallets = data.map(p => ({
                id: p.id.toString(),
                palletId: p.pallet_id,
                piezas: p.piezas,
                condicion: p.condicion,
                area: p.area,
                fecha: p.fecha,
                turno: p.turno,
                ubicacion: p.ubicacion,
                qty: p.qty
            }));
            console.log(`✅ Loaded ${this.pallets.length} pallets from API`);
        } catch (error) {
            console.error('Error loading pallets:', error);
            alert('Error al cargar pallets desde el servidor');
            this.pallets = [];
        }
    }

    async addPallet(pallet) {
        try {
            // Convertir formato del frontend al formato de la API
            await api.createPallet({
                palletId: pallet.palletId,
                piezas: pallet.piezas,
                condicion: pallet.condicion,
                area: pallet.area,
                fecha: pallet.fecha,
                turno: pallet.turno,
                ubicacion: pallet.ubicacion,
                qty: parseInt(pallet.qty)
            });
            await this.loadPallets();
            return true;
        } catch (error) {
            console.error('Error adding pallet:', error);
            if (error.message.includes('already exists')) {
                throw new Error('El ID del pallet ya existe');
            }
            throw error;
        }
    }

    async deletePallet(id) {
        try {
            await api.deletePallet(id);
            await this.loadPallets();
        } catch (error) {
            console.error('Error deleting pallet:', error);
            throw error;
        }
    }

    getPalletById(id) {
        return this.pallets.find(p => p.id === id);
    }

    async updatePallet(id, updatedData) {
        try {
            await api.updatePallet(id, {
                palletId: updatedData.palletId,
                piezas: updatedData.piezas,
                condicion: updatedData.condicion,
                area: updatedData.area,
                fecha: updatedData.fecha,
                turno: updatedData.turno,
                ubicacion: updatedData.ubicacion,
                qty: parseInt(updatedData.qty)
            });
            await this.loadPallets();
            return true;
        } catch (error) {
            console.error('Error updating pallet:', error);
            return false;
        }
    }

    searchPallets(query) {
        const lowerQuery = query.toLowerCase();
        return this.pallets.filter(p =>
            p.palletId.toLowerCase().includes(lowerQuery) ||
            p.piezas.toLowerCase().includes(lowerQuery) ||
            p.condicion.toLowerCase().includes(lowerQuery) ||
            p.area.toLowerCase().includes(lowerQuery) ||
            p.turno.toLowerCase().includes(lowerQuery) ||
            p.ubicacion.toLowerCase().includes(lowerQuery)
        );
    }

    async clearAll() {
        if (confirm('¿Estás seguro de eliminar todos los pallets? Esta acción no se puede deshacer.')) {
            try {
                for (const pallet of this.pallets) {
                    await api.deletePallet(pallet.id);
                }
                await this.loadPallets();
            } catch (error) {
                console.error('Error clearing pallets:', error);
                alert('Error al eliminar pallets');
            }
        }
    }

    getStats() {
        const total = this.pallets.length;
        const totalQty = this.pallets.reduce((sum, p) => sum + parseInt(p.qty || 0), 0);

        const fechasUnicas = new Set(this.pallets.map(p => p.fecha));
        const totalDias = fechasUnicas.size;

        const ubicacionesUnicas = new Set(this.pallets.map(p => p.ubicacion));
        const totalUbicaciones = ubicacionesUnicas.size;

        const condiciones = {};
        this.pallets.forEach(p => {
            const cond = p.condicion;
            condiciones[cond] = (condiciones[cond] || 0) + 1;
        });

        const sortedCondiciones = Object.entries(condiciones).sort((a, b) => b[1] - a[1]);
        const topCondicion1 = sortedCondiciones[0] || ['N/A', 0];
        const topCondicion2 = sortedCondiciones[1] || ['N/A', 0];

        return {
            total,
            totalQty,
            totalDias,
            totalUbicaciones,
            topCondicion1: { name: topCondicion1[0], count: topCondicion1[1] },
            topCondicion2: { name: topCondicion2[0], count: topCondicion2[1] }
        };
    }

    getCondicionesData() {
        const condiciones = {};
        this.pallets.forEach(p => {
            condiciones[p.condicion] = (condiciones[p.condicion] || 0) + 1;
        });
        return condiciones;
    }

    getAreasData() {
        const areas = {};
        this.pallets.forEach(p => {
            areas[p.area] = (areas[p.area] || 0) + 1;
        });
        return areas;
    }

    getTurnosData() {
        const turnos = {};
        this.pallets.forEach(p => {
            turnos[p.turno] = (turnos[p.turno] || 0) + 1;
        });
        return turnos;
    }

    getUbicacionesBin() {
        return this.ubicacionManager.getUbicacionesBin();
    }
}

// Inicializar manager global
let palletManager;

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 Initializing ControlPallets MySQL version...');

    // Verificar conexión con API
    try {
        const health = await api.healthCheck();
        console.log('✅ API Health:', health);
    } catch (error) {
        console.error('❌ API not available:', error);
        alert('No se puede conectar con el servidor. Asegúrate de que el backend esté corriendo en http://localhost:3001');
        return;
    }

    // Inicializar manager
    palletManager = new PalletManager();

    // Esperar a que se carguen los datos iniciales
    await palletManager.init();
    await palletManager.ubicacionManager.init();

    // Inicializar UI
    initializeUI();
});

function initializeUI() {
    // Configurar tabs
    setupTabs();

    // Configurar formulario de registro
    setupRegistroForm();

    // Configurar tabla de pallets
    setupPalletsTable();

    // Configurar dashboard
    setupDashboard();

    // Cargar datos iniciales
    renderPalletsTable();
    renderDashboard();
}

function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');

            if (targetTab === 'dashboard') {
                renderDashboard();
            }
        });
    });
}

function setupRegistroForm() {
    const form = document.getElementById('pallet-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            palletId: document.getElementById('pallet-id').value.trim(),
            piezas: document.getElementById('piezas').value.trim(),
            condicion: document.getElementById('condicion').value,
            area: document.getElementById('area').value.trim(),
            fecha: document.getElementById('fecha').value,
            turno: document.getElementById('turno').value,
            ubicacion: document.getElementById('ubicacion').value,
            qty: document.getElementById('qty').value
        };

        try {
            await palletManager.addPallet(formData);
            alert('✅ Pallet registrado exitosamente');
            form.reset();
            renderPalletsTable();
        } catch (error) {
            alert('❌ Error: ' + error.message);
        }
    });
}

function setupPalletsTable() {
    const searchInput = document.getElementById('search-pallets');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            renderPalletsTable(query);
        });
    }
}

function renderPalletsTable(searchQuery = '') {
    const tbody = document.getElementById('pallets-tbody');
    if (!tbody) return;

    const pallets = searchQuery ?
        palletManager.searchPallets(searchQuery) :
        palletManager.pallets;

    tbody.innerHTML = '';

    if (pallets.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align: center;">No hay pallets registrados</td></tr>';
        return;
    }

    pallets.forEach(pallet => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pallet.palletId}</td>
            <td>${pallet.piezas}</td>
            <td><span class="badge badge-${pallet.condicion.toLowerCase()}">${pallet.condicion}</span></td>
            <td>${pallet.area}</td>
            <td>${pallet.fecha}</td>
            <td>${pallet.turno}</td>
            <td>${pallet.ubicacion}</td>
            <td>${pallet.qty}</td>
            <td>
                <button class="btn-delete" onclick="deletePallet('${pallet.id}')">Eliminar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

async function deletePallet(id) {
    if (confirm('¿Estás seguro de eliminar este pallet?')) {
        try {
            await palletManager.deletePallet(id);
            renderPalletsTable();
            alert('✅ Pallet eliminado');
        } catch (error) {
            alert('❌ Error al eliminar pallet');
        }
    }
}

function setupDashboard() {
    // Dashboard se renderiza cuando se activa la pestaña
}

function renderDashboard() {
    const stats = palletManager.getStats();

    // Actualizar tarjetas de estadísticas
    updateStatCard('total-pallets', stats.total);
    updateStatCard('total-qty', stats.totalQty);
    updateStatCard('total-dias', stats.totalDias);
    updateStatCard('total-ubicaciones', stats.totalUbicaciones);

    // Renderizar gráficas
    renderCondicionesChart();
    renderAreasChart();
    renderTurnosChart();
}

function updateStatCard(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

let condicionesChart, areasChart, turnosChart;

function renderCondicionesChart() {
    const ctx = document.getElementById('condiciones-chart');
    if (!ctx) return;

    const data = palletManager.getCondicionesData();

    if (condicionesChart) {
        condicionesChart.destroy();
    }

    condicionesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: ['#4CAF50', '#f44336', '#ff9800', '#9e9e9e']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function renderAreasChart() {
    const ctx = document.getElementById('areas-chart');
    if (!ctx) return;

    const data = palletManager.getAreasData();

    if (areasChart) {
        areasChart.destroy();
    }

    areasChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'Pallets por Área',
                data: Object.values(data),
                backgroundColor: '#2196F3'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function renderTurnosChart() {
    const ctx = document.getElementById('turnos-chart');
    if (!ctx) return;

    const data = palletManager.getTurnosData();

    if (turnosChart) {
        turnosChart.destroy();
    }

    turnosChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: ['#FFC107', '#FF5722', '#3F51B5']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

console.log('✅ app-mysql.js loaded');
