
// ============================================================================
// GESTIÓN DE DUPLICADOS
// ============================================================================

// Variables globales para duplicados
let duplicadosData = [];
let duplicadosFiltered = [];

// Detectar todos los duplicados en el sistema
function detectarDuplicados() {
    const duplicadosMap = new Map();

    // Agrupar pallets por PalletID + Fecha
    palletManager.pallets.forEach(pallet => {
        const key = `${pallet.palletId}_${pallet.fecha}`;
        if (!duplicadosMap.has(key)) {
            duplicadosMap.set(key, []);
        }
        duplicadosMap.get(key).push(pallet);
    });

    // Filtrar solo los que tienen más de una ocurrencia
    const duplicados = [];
    duplicadosMap.forEach((pallets, key) => {
        if (pallets.length > 1) {
            duplicados.push({
                key: key,
                palletId: pallets[0].palletId,
                fecha: pallets[0].fecha,
                count: pallets.length,
                registros: pallets
            });
        }
    });

    return duplicados;
}

// Actualizar estadísticas de duplicados
function updateDuplicadosStats() {
    duplicadosData = detectarDuplicados();

    // Calcular estadísticas
    const totalDuplicados = duplicadosData.reduce((sum, dup) => sum + dup.count, 0);
    const palletIdsUnicos = new Set(duplicadosData.map(d => d.palletId)).size;
    const fechasUnicas = new Set(duplicadosData.map(d => d.fecha)).size;

    // Ubicaciones únicas en los duplicados
    const ubicacionesSet = new Set();
    duplicadosData.forEach(dup => {
        dup.registros.forEach(reg => ubicacionesSet.add(reg.ubicacion));
    });

    // Actualizar UI
    document.getElementById('totalDuplicados').textContent = totalDuplicados;
    document.getElementById('palletIdsDuplicados').textContent = palletIdsUnicos;
    document.getElementById('fechasDuplicadas').textContent = fechasUnicas;
    document.getElementById('ubicacionesDuplicadas').textContent = ubicacionesSet.size;

    // Aplicar filtros
    applyDuplicadosFilters();
}

// Aplicar filtros a duplicados
function applyDuplicadosFilters() {
    const filterPalletId = document.getElementById('filterDupPalletId')?.value.toLowerCase() || '';
    const filterFecha = document.getElementById('filterDupFecha')?.value || '';
    const filterUbicacion = document.getElementById('filterDupUbicacion')?.value || '';

    duplicadosFiltered = duplicadosData.filter(dup => {
        // Filtro por Pallet ID
        if (filterPalletId && !dup.palletId.toLowerCase().includes(filterPalletId)) {
            return false;
        }

        // Filtro por Fecha
        if (filterFecha && dup.fecha !== filterFecha) {
            return false;
        }

        // Filtro por Ubicación
        if (filterUbicacion) {
            const tieneUbicacion = dup.registros.some(reg => reg.ubicacion === filterUbicacion);
            if (!tieneUbicacion) return false;
        }

        return true;
    });

    // Actualizar contador
    const resultCount = document.getElementById('duplicadosFilterResultCount');
    if (resultCount) {
        if (duplicadosFiltered.length === duplicadosData.length) {
            resultCount.textContent = `Mostrando todos los ${duplicadosData.length} grupos de duplicados`;
        } else {
            resultCount.textContent = `Mostrando ${duplicadosFiltered.length} de ${duplicadosData.length} grupos`;
        }
    }

    // Renderizar
    renderDuplicados();
}

// Renderizar tabla de duplicados agrupados
function renderDuplicados() {
    const contentDiv = document.getElementById('duplicadosContent');

    if (duplicadosFiltered.length === 0) {
        contentDiv.innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <div style="font-size: 4rem; margin-bottom: 16px;">✅</div>
                <h3 style="color: var(--text-primary); margin-bottom: 8px;">No hay duplicados</h3>
                <p style="color: var(--text-secondary); font-size: 0.875rem;">
                    ${duplicadosData.length === 0 ? 'No se encontraron pallets duplicados en el sistema.' : 'No hay duplicados que coincidan con los filtros aplicados.'}
                </p>
            </div>
        `;
        renderDuplicadosDetalle([]);
        return;
    }

    let html = '<div style="display: grid; gap: 16px;">';

    duplicadosFiltered.forEach((dup, index) => {
        const colorIndex = index % 5;
        const colors = ['#dbeafe', '#fce7f3', '#fef3c7', '#dcfce7', '#e0e7ff'];
        const borderColors = ['#3b82f6', '#ec4899', '#f59e0b', '#22c55e', '#6366f1'];

        html += `
            <div style="border: 2px solid ${borderColors[colorIndex]}; border-radius: 4px; overflow: hidden; background-color: white;">
                <div style="background-color: ${colors[colorIndex]}; padding: 12px 16px; border-bottom: 1px solid ${borderColors[colorIndex]};">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <div>
                            <h3 style="margin: 0; font-size: 1rem; font-weight: 600; color: var(--text-primary);">
                                ${dup.palletId}
                            </h3>
                            <p style="margin: 4px 0 0 0; font-size: 0.8125rem; color: var(--text-secondary);">
                                Fecha: ${formatDate(dup.fecha)} | Registros: ${dup.count}
                            </p>
                        </div>
                        <span style="background-color: ${borderColors[colorIndex]}; color: white; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">
                            GRUPO ${index + 1}
                        </span>
                    </div>
                </div>
                <div style="padding: 0;">
                    <table style="width: 100%; font-size: 0.8125rem; border-collapse: collapse;">
                        <thead style="background-color: var(--bg-secondary);">
                            <tr>
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid var(--border-color); font-weight: 600;">#</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid var(--border-color); font-weight: 600;">Piezas</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid var(--border-color); font-weight: 600;">Condición</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid var(--border-color); font-weight: 600;">Área</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid var(--border-color); font-weight: 600;">Turno</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid var(--border-color); font-weight: 600;">Ubicación</th>
                                <th style="padding: 10px; text-align: center; border-bottom: 1px solid var(--border-color); font-weight: 600;">QTY</th>
                                <th style="padding: 10px; text-align: center; border-bottom: 1px solid var(--border-color); font-weight: 600;">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${dup.registros.map((reg, idx) => `
                                <tr style="border-bottom: 1px solid var(--border-light); ${idx % 2 === 0 ? 'background-color: var(--surface-elevated);' : ''}">
                                    <td style="padding: 10px; font-weight: 600;">${idx + 1}</td>
                                    <td style="padding: 10px;">${reg.piezas}</td>
                                    <td style="padding: 10px;">${reg.condicion}</td>
                                    <td style="padding: 10px;">${reg.area}</td>
                                    <td style="padding: 10px;">${reg.turno}</td>
                                    <td style="padding: 10px;">${reg.ubicacion}</td>
                                    <td style="padding: 10px; text-align: center;">${reg.qty}</td>
                                    <td style="padding: 10px; text-align: center;">
                                        <button onclick="editPallet('${reg.id}')" class="btn-icon" title="Editar">✏️</button>
                                        <button onclick="deletePallet('${reg.id}')" class="btn-icon" title="Eliminar">🗑️</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    });

    html += '</div>';
    contentDiv.innerHTML = html;

    // Renderizar también la tabla detallada
    const todosLosRegistros = [];
    duplicadosFiltered.forEach((dup, grupoIndex) => {
        dup.registros.forEach(reg => {
            todosLosRegistros.push({
                ...reg,
                grupoIndex: grupoIndex + 1
            });
        });
    });
    renderDuplicadosDetalle(todosLosRegistros);
}

// Renderizar tabla detallada de duplicados
function renderDuplicadosDetalle(registros) {
    const tbody = document.getElementById('duplicadosDetalleTableBody');

    if (registros.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="10" style="text-align: center; padding: 40px; color: var(--text-secondary);">
                    No hay registros duplicados para mostrar
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = registros.map(reg => `
        <tr>
            <td>${reg.palletId}</td>
            <td>${reg.piezas}</td>
            <td>${reg.qty}</td>
            <td>${reg.condicion}</td>
            <td>${reg.area}</td>
            <td>${formatDate(reg.fecha)}</td>
            <td>${reg.turno}</td>
            <td>${reg.ubicacion}</td>
            <td style="text-align: center;">
                <span style="background-color: var(--info-color); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">
                    ${reg.grupoIndex}
                </span>
            </td>
            <td style="text-align: center;">
                <button onclick="editPallet('${reg.id}')" class="btn-icon" title="Editar">✏️</button>
                <button onclick="deletePallet('${reg.id}')" class="btn-icon" title="Eliminar">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// Refrescar vista de duplicados
function refreshDuplicados() {
    updateDuplicadosStats();
    populateDuplicadosFilters();
    showNotification('✅ Duplicados actualizados', 'success');
}

// Poblar filtros de ubicaciones en duplicados
function populateDuplicadosFilters() {
    const filterUbicacion = document.getElementById('filterDupUbicacion');
    if (!filterUbicacion) return;

    // Obtener ubicaciones únicas de duplicados
    const ubicaciones = new Set();
    duplicadosData.forEach(dup => {
        dup.registros.forEach(reg => ubicaciones.add(reg.ubicacion));
    });

    const currentValue = filterUbicacion.value;
    filterUbicacion.innerHTML = '<option value="">Todas</option>';

    Array.from(ubicaciones).sort().forEach(ub => {
        const option = document.createElement('option');
        option.value = ub;
        option.textContent = ub;
        filterUbicacion.appendChild(option);
    });

    filterUbicacion.value = currentValue;
}

// Limpiar filtros de duplicados
function clearDuplicadosFilters() {
    document.getElementById('filterDupPalletId').value = '';
    document.getElementById('filterDupFecha').value = '';
    document.getElementById('filterDupUbicacion').value = '';
    applyDuplicadosFilters();
}

// Exportar duplicados a Excel
function exportDuplicadosToExcel() {
    if (duplicadosData.length === 0) {
        alert('No hay duplicados para exportar');
        return;
    }

    // Preparar datos para exportar
    const exportData = [];

    duplicadosData.forEach((dup, grupoIndex) => {
        dup.registros.forEach((reg, regIndex) => {
            exportData.push({
                'Grupo': grupoIndex + 1,
                'Registro #': regIndex + 1,
                'Pallet ID': reg.palletId,
                'Piezas': reg.piezas,
                'Condición': reg.condicion,
                'Área': reg.area,
                'Fecha': reg.fecha,
                'Turno': reg.turno,
                'Ubicación': reg.ubicacion,
                'QTY': reg.qty,
                'Total Duplicados en Grupo': dup.count
            });
        });
    });

    // Preparar resumen
    const resumen = [
        {
            'Métrica': 'Total de Registros Duplicados',
            'Valor': duplicadosData.reduce((sum, dup) => sum + dup.count, 0)
        },
        {
            'Métrica': 'Pallet IDs Afectados',
            'Valor': new Set(duplicadosData.map(d => d.palletId)).size
        },
        {
            'Métrica': 'Fechas con Duplicados',
            'Valor': new Set(duplicadosData.map(d => d.fecha)).size
        },
        {
            'Métrica': 'Grupos de Duplicados',
            'Valor': duplicadosData.length
        }
    ];

    // Crear libro de Excel
    const wb = XLSX.utils.book_new();

    // Hoja de Resumen
    const wsResumen = XLSX.utils.json_to_sheet(resumen);
    wsResumen['!cols'] = [
        { wch: 35 },
        { wch: 15 }
    ];
    XLSX.utils.book_append_sheet(wb, wsResumen, 'Resumen');

    // Hoja de Duplicados Detallados
    const wsDuplicados = XLSX.utils.json_to_sheet(exportData);
    wsDuplicados['!cols'] = [
        { wch: 8 },   // Grupo
        { wch: 12 },  // Registro #
        { wch: 18 },  // Pallet ID
        { wch: 30 },  // Piezas
        { wch: 15 },  // Condición
        { wch: 20 },  // Área
        { wch: 12 },  // Fecha
        { wch: 10 },  // Turno
        { wch: 25 },  // Ubicación
        { wch: 8 },   // QTY
        { wch: 25 }   // Total Duplicados en Grupo
    ];
    XLSX.utils.book_append_sheet(wb, wsDuplicados, 'Duplicados');

    // Hoja de Grupos
    const grupos = duplicadosData.map((dup, index) => ({
        'Grupo': index + 1,
        'Pallet ID': dup.palletId,
        'Fecha': dup.fecha,
        'Cantidad de Registros': dup.count,
        'Ubicaciones': [...new Set(dup.registros.map(r => r.ubicacion))].join(', ')
    }));

    const wsGrupos = XLSX.utils.json_to_sheet(grupos);
    wsGrupos['!cols'] = [
        { wch: 8 },
        { wch: 18 },
        { wch: 12 },
        { wch: 22 },
        { wch: 40 }
    ];
    XLSX.utils.book_append_sheet(wb, wsGrupos, 'Grupos');

    // Descargar archivo
    const fecha = new Date().toISOString().split('T')[0];
    XLSX.writeFile(wb, `Duplicados_${fecha}.xlsx`);

    showNotification('✅ Duplicados exportados exitosamente', 'success');
}

// Exportar Dashboard a Excel (Versión Simplificada)
function exportDashboardToExcel() {
    try {
        // Verificar que hay datos
        if (!palletManager || !palletManager.pallets || palletManager.pallets.length === 0) {
            alert('No hay pallets registrados para exportar');
            return;
        }

        console.log('Iniciando exportación del dashboard...');
        const pallets = palletManager.pallets;
        const wb = XLSX.utils.book_new();

        // Obtener todas las ubicaciones BIN
        const ubicacionesBin = ubicacionManager.getUbicaciones().filter(u => u.esBin).map(u => u.codigo);

        // 1. HOJA DE REGISTRO COMPLETO DE PALLETS
        const registroPallets = pallets.map(p => ({
            'Pallet ID': p.palletId,
            'Piezas': p.piezas,
            'Condición': p.condicion,
            'Área': p.area,
            'Fecha': p.fecha,
            'Turno': p.turno,
            'Ubicación': p.ubicacion,
            'QTY': p.qty,
            'Tipo': ubicacionesBin.includes(p.ubicacion) ? 'BIN' : 'NORMAL'
        }));

        const wsRegistro = XLSX.utils.json_to_sheet(registroPallets);
        wsRegistro['!cols'] = [
            { wch: 18 },  // Pallet ID
            { wch: 30 },  // Piezas
            { wch: 15 },  // Condición
            { wch: 20 },  // Área
            { wch: 12 },  // Fecha
            { wch: 10 },  // Turno
            { wch: 25 },  // Ubicación
            { wch: 8 },   // QTY
            { wch: 10 }   // Tipo
        ];
        XLSX.utils.book_append_sheet(wb, wsRegistro, 'Registro de Pallets');

        // 2. HOJA DE TOTALES POR DÍA
        const fechasMap = new Map();

        pallets.forEach(p => {
            if (!fechasMap.has(p.fecha)) {
                fechasMap.set(p.fecha, { total: 0, bin: 0, normal: 0, totalQty: 0 });
            }
            const stats = fechasMap.get(p.fecha);
            stats.total += 1;
            stats.totalQty += p.qty || 0;

            if (ubicacionesBin.includes(p.ubicacion)) {
                stats.bin += 1;
            } else {
                stats.normal += 1;
            }
        });

        const totalesPorDia = Array.from(fechasMap.entries())
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([fecha, stats]) => ({
                'Fecha': fecha,
                'Total Pallets': stats.total,
                'Pallets en BIN': stats.bin,
                'Pallets Normales': stats.normal,
                'Total QTY': stats.totalQty
            }));

        const wsTotales = XLSX.utils.json_to_sheet(totalesPorDia);
        wsTotales['!cols'] = [
            { wch: 12 },  // Fecha
            { wch: 15 },  // Total Pallets
            { wch: 18 },  // Pallets en BIN
            { wch: 18 },  // Pallets Normales
            { wch: 12 }   // Total QTY
        ];
        XLSX.utils.book_append_sheet(wb, wsTotales, 'Totales por Día');

        // 3. HOJA DE PALLETS EN BIN
        const palletsBin = pallets
            .filter(p => ubicacionesBin.includes(p.ubicacion))
            .map(p => ({
                'Pallet ID': p.palletId,
                'Piezas': p.piezas,
                'Fecha': p.fecha,
                'Turno': p.turno,
                'Ubicación': p.ubicacion,
                'QTY': p.qty
            }));

        if (palletsBin.length > 0) {
            const wsBin = XLSX.utils.json_to_sheet(palletsBin);
            wsBin['!cols'] = [
                { wch: 18 },
                { wch: 30 },
                { wch: 12 },
                { wch: 10 },
                { wch: 25 },
                { wch: 8 }
            ];
            XLSX.utils.book_append_sheet(wb, wsBin, 'Pallets en BIN');
        }

        // 4. HOJA DE PALLETS NORMALES
        const palletsNormales = pallets
            .filter(p => !ubicacionesBin.includes(p.ubicacion))
            .map(p => ({
                'Pallet ID': p.palletId,
                'Piezas': p.piezas,
                'Fecha': p.fecha,
                'Turno': p.turno,
                'Ubicación': p.ubicacion,
                'QTY': p.qty
            }));

        if (palletsNormales.length > 0) {
            const wsNormales = XLSX.utils.json_to_sheet(palletsNormales);
            wsNormales['!cols'] = [
                { wch: 18 },
                { wch: 30 },
                { wch: 12 },
                { wch: 10 },
                { wch: 25 },
                { wch: 8 }
            ];
            XLSX.utils.book_append_sheet(wb, wsNormales, 'Pallets Normales');
        }

        // 5. HOJA DE RESUMEN GENERAL
        const totalPallets = pallets.length;
        const totalBin = pallets.filter(p => ubicacionesBin.includes(p.ubicacion)).length;
        const totalNormales = totalPallets - totalBin;
        const totalQty = pallets.reduce((sum, p) => sum + (p.qty || 0), 0);

        const resumen = [
            { 'Métrica': 'Total de Pallets', 'Valor': totalPallets },
            { 'Métrica': 'Pallets en BIN', 'Valor': totalBin },
            { 'Métrica': 'Pallets Normales (Workcenter)', 'Valor': totalNormales },
            { 'Métrica': 'Total QTY', 'Valor': totalQty },
            { 'Métrica': 'Fechas Registradas', 'Valor': fechasMap.size },
            { 'Métrica': 'Ubicaciones Únicas', 'Valor': new Set(pallets.map(p => p.ubicacion)).size }
        ];

        const wsResumen = XLSX.utils.json_to_sheet(resumen);
        wsResumen['!cols'] = [{ wch: 35 }, { wch: 15 }];
        XLSX.utils.book_append_sheet(wb, wsResumen, 'Resumen');

        // Descargar archivo
        const fecha = new Date().toISOString().split('T')[0];
        const hora = new Date().toTimeString().split(' ')[0].replace(/:/g, '-');
        XLSX.writeFile(wb, `Dashboard_${fecha}_${hora}.xlsx`);

        console.log('Dashboard exportado exitosamente');
        showNotification('✅ Dashboard exportado exitosamente', 'success');

    } catch (error) {
        console.error('Error al exportar dashboard:', error);
        alert('Error al exportar el dashboard: ' + error.message);
    }
}

// Event listeners para filtros de duplicados
document.addEventListener('DOMContentLoaded', () => {
    const filterDupPalletId = document.getElementById('filterDupPalletId');
    const filterDupFecha = document.getElementById('filterDupFecha');
    const filterDupUbicacion = document.getElementById('filterDupUbicacion');

    if (filterDupPalletId) {
        filterDupPalletId.addEventListener('input', applyDuplicadosFilters);
    }
    if (filterDupFecha) {
        filterDupFecha.addEventListener('change', applyDuplicadosFilters);
    }
    if (filterDupUbicacion) {
        filterDupUbicacion.addEventListener('change', applyDuplicadosFilters);
    }
});
