
// ============================================================================
// GESTIÓN DE DUPLICADOS
// ============================================================================

// Variables globales para duplicados
let duplicadosData = [];
let duplicadosFiltered = [];

// Detectar todos los duplicados en el sistema
function detectarDuplicados() {
    const duplicadosMap = new Map();

    // Agrupar pallets por PalletID + Fecha (del mes activo)
    palletManager.activePallets.forEach(pallet => {
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

    const now = new Date();
    const fechaArchivo = now.toISOString().split('T')[0];
    const hoy = `${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()}`;

    // ── Paleta de colores (consistente con Dashboard) ──
    const C_DARK   = '1F3864';
    const C_BLUE   = '2E75B6';
    const C_ORANGE = 'C55A11';  // color especial para duplicados
    const C_LIGHT  = 'FCE4D6';  // fondo claro naranja
    const C_WHITE  = 'FFFFFF';
    const C_BLACK  = '000000';
    const C_GRAY   = 'F2F2F2';
    const C_BORDER = 'D0D0D0';

    const bThin = {
        top: { style: 'thin', color: { rgb: C_BORDER } }, bottom: { style: 'thin', color: { rgb: C_BORDER } },
        left: { style: 'thin', color: { rgb: C_BORDER } }, right: { style: 'thin', color: { rgb: C_BORDER } }
    };
    const bHdr = {
        top: { style: 'thin', color: { rgb: C_BLACK } }, bottom: { style: 'thin', color: { rgb: C_BLACK } },
        left: { style: 'thin', color: { rgb: C_BLACK } }, right: { style: 'thin', color: { rgb: C_BLACK } }
    };

    function mkS(bg, fc, bold, sz, ha) {
        return {
            font: { bold: !!bold, sz: sz || 10, color: { rgb: fc || C_BLACK } },
            fill: { patternType: 'solid', fgColor: { rgb: bg || C_WHITE } },
            alignment: { horizontal: ha || 'left', vertical: 'center' }
        };
    }
    function mkSB(bg, fc, bold, sz, ha) { return { ...mkS(bg, fc, bold, sz, ha), border: bHdr }; }
    function mkSD(bg, ha) {
        return {
            font: { sz: 10, color: { rgb: C_BLACK } },
            fill: { patternType: 'solid', fgColor: { rgb: bg || C_WHITE } },
            border: bThin, alignment: { horizontal: ha || 'left', vertical: 'center' }
        };
    }

    const sTitle  = mkS(C_DARK,   C_WHITE, true, 15, 'center');
    const sSub    = mkS(C_ORANGE, C_WHITE, false, 10, 'center');
    const sHdrB   = mkSB(C_DARK,   C_WHITE, true,  11, 'center');  // headers oscuros (resumen)
    const sHdrO   = mkSB(C_ORANGE, C_WHITE, true,  11, 'center');  // headers naranjas (duplicados)
    const sSec    = mkS(C_BLUE,   C_WHITE, true,  12, 'center');

    const wb = XLSX.utils.book_new();

    // ══════════════════════════════════════════════════
    //  HOJA 1 — RESUMEN
    // ══════════════════════════════════════════════════
    const totalReg    = duplicadosData.reduce((s, d) => s + d.count, 0);
    const totalIds    = new Set(duplicadosData.map(d => d.palletId)).size;
    const totalFechas = new Set(duplicadosData.map(d => d.fecha)).size;
    const totalGrupos = duplicadosData.length;

    const aoaRes = [
        [],  // 1 — título
        [],  // 2 — subtítulo
        [],  // 3 — vacía
        ['Métrica', 'Valor'],                          // 4 — headers
        ['Total de Registros Duplicados', totalReg],
        ['Pallet IDs Afectados',          totalIds],
        ['Fechas con Duplicados',         totalFechas],
        ['Grupos de Duplicados',          totalGrupos]
    ];

    const wsRes = XLSX.utils.aoa_to_sheet(aoaRes);
    wsRes['A1'] = { v: 'CONTROL DE PALLETS — REPORTE DE DUPLICADOS', t: 's', s: sTitle };
    wsRes['A2'] = { v: `Generado: ${hoy}  |  Grupos: ${totalGrupos}  |  Registros afectados: ${totalReg}`, t: 's', s: sSub };
    wsRes['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } },
        { s: { r: 1, c: 0 }, e: { r: 1, c: 1 } }
    ];
    ['A4','B4'].forEach(ref => { if (wsRes[ref]) wsRes[ref].s = sHdrB; });
    for (let r = 4; r < aoaRes.length; r++) {
        const isGray = (r - 4) % 2 === 1;
        const bg = isGray ? C_GRAY : C_WHITE;
        ['A','B'].forEach((col, ci) => {
            const ref = col + (r + 1);
            if (wsRes[ref]) wsRes[ref].s = mkSD(bg, ci === 0 ? 'left' : 'center');
        });
    }
    wsRes['!cols'] = [{ wch: 35 }, { wch: 15 }];
    wsRes['!rows'] = [{ hpt: 26 }, { hpt: 16 }, { hpt: 6 }, { hpt: 20 }];
    XLSX.utils.book_append_sheet(wb, wsRes, 'Resumen');

    // ══════════════════════════════════════════════════
    //  HOJA 2 — DUPLICADOS DETALLADOS
    // ══════════════════════════════════════════════════
    const HDR_DUP = ['Grupo', 'Registro #', 'Pallet ID', 'Piezas', 'Condición', 'Área', 'Fecha', 'Turno', 'Ubicación', 'QTY', 'Total en Grupo'];
    const aoaDup = [[], [], HDR_DUP];
    duplicadosData.forEach((dup, gi) => {
        dup.registros.forEach((reg, ri) => {
            aoaDup.push([gi+1, ri+1, reg.palletId||'', reg.piezas||'', reg.condicion||'', reg.area||'', reg.fecha||'', reg.turno||'', reg.ubicacion||'', reg.qty||0, dup.count]);
        });
    });

    const wsDup = XLSX.utils.aoa_to_sheet(aoaDup);
    wsDup['A1'] = { v: 'REGISTROS DUPLICADOS — DETALLE COMPLETO', t: 's', s: sTitle };
    wsDup['A2'] = { v: `Generado: ${hoy}  |  Total registros duplicados: ${totalReg}`, t: 's', s: sSub };
    wsDup['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: HDR_DUP.length - 1 } },
        { s: { r: 1, c: 0 }, e: { r: 1, c: HDR_DUP.length - 1 } }
    ];
    // headers fila 3 (índice 2)
    HDR_DUP.forEach((_, ci) => {
        const ref = XLSX.utils.encode_cell({ r: 2, c: ci });
        if (wsDup[ref]) wsDup[ref].s = sHdrO;
    });
    // datos desde fila 4 (índice 3)
    for (let r = 3; r < aoaDup.length; r++) {
        const isGray = (r - 3) % 2 === 1;
        const bg = isGray ? C_GRAY : C_WHITE;
        for (let c = 0; c < HDR_DUP.length; c++) {
            const ref = XLSX.utils.encode_cell({ r, c });
            if (wsDup[ref]) wsDup[ref].s = mkSD(bg, (c === 0 || c === 1 || c === 9 || c === 10) ? 'center' : 'left');
        }
    }
    wsDup['!cols'] = [
        { wch: 8 }, { wch: 11 }, { wch: 18 }, { wch: 28 }, { wch: 14 },
        { wch: 18 }, { wch: 12 }, { wch: 9 }, { wch: 25 }, { wch: 7 }, { wch: 18 }
    ];
    wsDup['!rows'] = [{ hpt: 26 }, { hpt: 16 }, { hpt: 20 }];
    XLSX.utils.book_append_sheet(wb, wsDup, 'Duplicados');

    // ══════════════════════════════════════════════════
    //  HOJA 3 — GRUPOS
    // ══════════════════════════════════════════════════
    const HDR_GRP = ['Grupo', 'Pallet ID', 'Fecha', 'Cantidad de Registros', 'Ubicaciones'];
    const aoaGrp = [[], [], HDR_GRP];
    duplicadosData.forEach((dup, i) => {
        aoaGrp.push([
            i + 1,
            dup.palletId,
            dup.fecha,
            dup.count,
            [...new Set(dup.registros.map(r => r.ubicacion))].join(', ')
        ]);
    });

    const wsGrp = XLSX.utils.aoa_to_sheet(aoaGrp);
    wsGrp['A1'] = { v: 'GRUPOS DE DUPLICADOS', t: 's', s: sTitle };
    wsGrp['A2'] = { v: `Generado: ${hoy}  |  Total grupos: ${totalGrupos}`, t: 's', s: sSub };
    wsGrp['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: HDR_GRP.length - 1 } },
        { s: { r: 1, c: 0 }, e: { r: 1, c: HDR_GRP.length - 1 } }
    ];
    HDR_GRP.forEach((_, ci) => {
        const ref = XLSX.utils.encode_cell({ r: 2, c: ci });
        if (wsGrp[ref]) wsGrp[ref].s = sHdrB;
    });
    for (let r = 3; r < aoaGrp.length; r++) {
        const isGray = (r - 3) % 2 === 1;
        const bg = isGray ? C_GRAY : C_WHITE;
        for (let c = 0; c < HDR_GRP.length; c++) {
            const ref = XLSX.utils.encode_cell({ r, c });
            if (wsGrp[ref]) wsGrp[ref].s = mkSD(bg, (c === 0 || c === 3) ? 'center' : 'left');
        }
    }
    wsGrp['!cols'] = [{ wch: 8 }, { wch: 18 }, { wch: 12 }, { wch: 22 }, { wch: 45 }];
    wsGrp['!rows'] = [{ hpt: 26 }, { hpt: 16 }, { hpt: 20 }];
    XLSX.utils.book_append_sheet(wb, wsGrp, 'Grupos');

    // ── Descargar ──
    XLSX.writeFile(wb, `Duplicados_${fechaArchivo}.xlsx`);
    showNotification('✅ Duplicados exportados exitosamente', 'success');
}

// Exportar Dashboard a Excel - Formato ControlPallets_Updated_Dashboard
function exportDashboardToExcel() {
    try {
        if (!palletManager || !palletManager.activePallets || palletManager.activePallets.length === 0) {
            alert('No hay pallets registrados para exportar');
            return;
        }

        const pallets        = palletManager.activePallets;
        const ubicacionesBin = ubicacionManager.getUbicaciones().filter(u => u.esBin).map(u => u.codigo);
        const wb             = XLSX.utils.book_new();

        // ═══════════════════════════════════════════════════════════
        //  PALETA DE COLORES (extraída del archivo de referencia)
        // ═══════════════════════════════════════════════════════════
        const C_DARK  = '1F3864'; // Azul oscuro  — título
        const C_BLUE  = '2E75B6'; // Azul medio   — secciones / periodo
        const C_LIGHT = 'D6E4F0'; // Azul claro   — headers de columnas
        const C_WHITE = 'FFFFFF';
        const C_BLACK = '000000';
        const C_GREEN = '00B050'; // Verde — diff positivo
        const C_RED   = 'FF0000'; // Rojo  — diff negativo
        const C_GRAY  = 'F2F2F2'; // Gris claro — filas alternadas

        // ═══════════════════════════════════════════════════════════
        //  BORDES
        // ═══════════════════════════════════════════════════════════
        const THIN   = { style: 'thin' };
        const MEDIUM = { style: 'medium' };

        function brd(top, bottom, left, right) {
            const b = {};
            if (top)    b.top    = top;
            if (bottom) b.bottom = bottom;
            if (left)   b.left   = left;
            if (right)  b.right  = right;
            return b;
        }

        const bThinAll = brd(THIN, THIN, THIN, THIN);
        const bMedTB   = brd(MEDIUM, MEDIUM, null, null);
        const bMedBot  = brd(null,   MEDIUM, null, null);

        // ═══════════════════════════════════════════════════════════
        //  CONSTRUCTOR DE ESTILOS
        // ═══════════════════════════════════════════════════════════
        function mkStyle(bg, fc, bold, sz, ha, border) {
            const s = {};
            if (bg)     s.fill   = { patternType: 'solid', fgColor: { rgb: bg } };
            s.font = {};
            if (fc)     s.font.color = { rgb: fc };
            if (bold)   s.font.bold  = true;
            if (sz)     s.font.sz    = sz;
            s.alignment = { vertical: 'center' };
            if (ha)     s.alignment.horizontal = ha;
            if (border) s.border = border;
            return s;
        }

        // Estilos fijos del Dashboard
        const sTitle    = mkStyle(C_DARK,  C_WHITE, true,  18, 'center',  null);
        const sPeriod   = mkStyle(C_BLUE,  C_WHITE, false, 10, 'center',  null);
        const sSection  = mkStyle(C_BLUE,  C_WHITE, true,  12, 'center',  null);
        const sColHdr   = mkStyle(C_LIGHT, C_WHITE, true,  10, 'center',  bThinAll);
        const sColHdrSm = mkStyle(C_LIGHT, null,    true,   9, 'center',  bThinAll);
        const sValBig   = mkStyle(null,    C_BLACK, true,  14, 'center',  bThinAll);
        const sDataC    = mkStyle(null,    C_BLACK, false, 10, 'center',  bThinAll);
        const sDataBold = mkStyle(null,    C_BLACK, true,  10, 'center',  bThinAll);
        const sEvHdr    = mkStyle(null,    null,    false, 11, null,      bMedTB);
        const sEvData   = mkStyle(null,    null,    false, 11, 'center',  null);
        const sEvLast   = mkStyle(null,    null,    false, 11, 'center',  bMedBot);

        // Estilo dinámico según signo del diff (verde/rojo)
        function sDiff(val) {
            return mkStyle(null, val < 0 ? C_RED : C_GREEN, true, 11, 'center', bThinAll);
        }

        // Estilos para filas alternadas en la tabla de ubicaciones
        function sRow(isGray)      { return mkStyle(isGray ? C_GRAY : C_WHITE, C_BLACK, false, 9, 'center', bThinAll); }
        function sRowBold(isGray)  { return mkStyle(isGray ? C_GRAY : C_WHITE, C_BLACK, true,  9, 'center', bThinAll); }
        function sRowLeft(isGray)  { return mkStyle(isGray ? C_GRAY : C_WHITE, C_BLACK, false, 9, 'left',   bThinAll); }

        // ═══════════════════════════════════════════════════════════
        //  CÁLCULOS DE DATOS
        // ═══════════════════════════════════════════════════════════
        const fechasMap = new Map();
        pallets.forEach(p => {
            if (!fechasMap.has(p.fecha)) fechasMap.set(p.fecha, { total: 0, totalQty: 0, bin: 0, normal: 0 });
            const fx = fechasMap.get(p.fecha);
            fx.total++;
            fx.totalQty += (p.qty || 0);
            if (ubicacionesBin.includes(p.ubicacion)) fx.bin++; else fx.normal++;
        });

        const fechasOrdenadas = Array.from(fechasMap.keys()).sort();
        const numDias      = fechasOrdenadas.length;
        const totalPallets = pallets.length;
        const totalQty     = pallets.reduce((s, p) => s + (p.qty || 0), 0);
        const totalBin     = pallets.filter(p => ubicacionesBin.includes(p.ubicacion)).length;
        const totalNormal  = totalPallets - totalBin;
        const ubicUniq     = new Set(pallets.map(p => p.ubicacion)).size;

        const ubDiaMap = new Map();
        pallets.forEach(p => {
            if (!ubDiaMap.has(p.ubicacion)) ubDiaMap.set(p.ubicacion, {});
            const d = ubDiaMap.get(p.ubicacion);
            d[p.fecha] = (d[p.fecha] || 0) + 1;
        });
        const ubicList = Array.from(ubDiaMap.keys()).sort();

        function fmtFull(f)  { if (!f) return ''; const [y,m,d] = f.split('-'); return y ? `${d}/${m}/${y}` : f; }
        function fmtShort(f) { if (!f) return ''; const [,m,d]  = f.split('-'); return `${d}/${m}`; }

        const now  = new Date();
        const hoy  = `${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()}`;
        const hora = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
        const periodoStr = `Periodo: ${fmtFull(fechasOrdenadas[0])} - ${fmtFull(fechasOrdenadas[numDias-1])} | Generado: ${hoy} ${hora}`;
        const numCols    = Math.max(8, numDias + 2);

        // ═══════════════════════════════════════════════════════════
        //  HELPERS PARA CONSTRUIR EL SHEET
        // ═══════════════════════════════════════════════════════════
        const ws         = {};
        const merges     = [];
        const rowHeights = new Map();

        function put(r, c, v) { ws[XLSX.utils.encode_col(c - 1) + r] = v; }
        function mkCell(v, s, t) {
            const c = { v };
            c.t = t || (typeof v === 'number' ? 'n' : 's');
            if (s) c.s = s;
            return c;
        }
        function addMerge(r1, c1, r2, c2) {
            merges.push({ s: { r: r1-1, c: c1-1 }, e: { r: r2-1, c: c2-1 } });
        }
        function setH(r, h) { rowHeights.set(r, h); }

        // ═══════════════════════════════════════════════════════════
        //  ROW 1 — TÍTULO
        // ═══════════════════════════════════════════════════════════
        put(1, 1, mkCell('DASHBOARD DIARIO - CONTROL DE PALLETS', sTitle));
        addMerge(1, 1, 1, numCols);
        setH(1, 40);

        // ═══════════════════════════════════════════════════════════
        //  ROW 2 — PERIODO / GENERADO
        // ═══════════════════════════════════════════════════════════
        put(2, 1, mkCell(periodoStr, sPeriod));
        addMerge(2, 1, 2, numCols);
        setH(2, 20);

        // ROW 3: vacío

        // ═══════════════════════════════════════════════════════════
        //  ROW 4-6 — MÉTRICAS GENERALES
        // ═══════════════════════════════════════════════════════════
        put(4, 1, mkCell('METRICAS GENERALES', sSection));
        addMerge(4, 1, 4, numCols);
        setH(4, 22);

        ['Total Pallets', 'Total Piezas', 'Dias Analizados', 'Ubicaciones'].forEach((h, i) => {
            put(5, i + 1, mkCell(h, sColHdr));
        });
        setH(5, 20);

        [totalPallets, totalQty, numDias, ubicUniq].forEach((v, i) => {
            put(6, i + 1, mkCell(v, sValBig));
        });
        setH(6, 24);

        // ROW 7: vacío

        // ═══════════════════════════════════════════════════════════
        //  ROW 8-14 — ANÁLISIS DÍA A DÍA
        // ═══════════════════════════════════════════════════════════
        put(8, 1, mkCell('ANALISIS DIA A DIA', sSection));
        addMerge(8, 1, 8, 6);
        setH(8, 22);

        ['Fecha', 'Pallets', 'Piezas', 'Diff Pallets', 'Diff Piezas', '% Cambio'].forEach((h, i) => {
            put(9, i + 1, mkCell(h, sColHdr));
        });
        setH(9, 20);

        let prevTotal = 0, prevQty = 0;
        fechasOrdenadas.forEach((fecha, idx) => {
            const fx    = fechasMap.get(fecha);
            const diffP = idx === 0 ? 0 : fx.total    - prevTotal;
            const diffQ = idx === 0 ? 0 : fx.totalQty - prevQty;
            const pct   = idx === 0 ? '0.0%'
                        : (prevTotal > 0 ? `${((diffP / prevTotal) * 100).toFixed(1)}%` : '0.0%');
            const r = 10 + idx;
            put(r, 1, mkCell(fmtFull(fecha), sDataC));
            put(r, 2, mkCell(fx.total,       sDataBold));
            put(r, 3, mkCell(fx.totalQty,    sDataC));
            put(r, 4, mkCell(diffP,          sDiff(diffP)));
            put(r, 5, mkCell(diffQ,          sDataC));
            put(r, 6, mkCell(pct,            sDiff(diffP)));
            setH(r, 18);
            prevTotal = fx.total;
            prevQty   = fx.totalQty;
        });

        let row = 10 + numDias + 1;

        // ═══════════════════════════════════════════════════════════
        //  ANÁLISIS POR TIPO DE ÁREA
        // ═══════════════════════════════════════════════════════════
        put(row, 1, mkCell('ANALISIS POR TIPO DE AREA', sSection));
        addMerge(row, 1, row, 3);
        setH(row, 22);
        row++;

        ['Tipo', 'Pallets', '% del Total'].forEach((h, i) => put(row, i + 1, mkCell(h, sColHdr)));
        setH(row, 20);
        row++;

        const pctBin = totalPallets > 0 ? parseFloat(((totalBin    / totalPallets) * 100).toFixed(1)) : 0;
        const pctWkc = totalPallets > 0 ? parseFloat(((totalNormal / totalPallets) * 100).toFixed(1)) : 0;

        put(row, 1, mkCell('BIN',        sDataBold));
        put(row, 2, mkCell(totalBin,     sDataC));
        put(row, 3, mkCell(pctBin,       sDataC));
        setH(row, 18);
        row++;

        put(row, 1, mkCell('WORKCENTER', sDataBold));
        put(row, 2, mkCell(totalNormal,  sDataC));
        put(row, 3, mkCell(pctWkc,       sDataC));
        setH(row, 18);
        row += 3;

        // ═══════════════════════════════════════════════════════════
        //  EVOLUCIÓN DIARIA DE PALLETS
        // ═══════════════════════════════════════════════════════════
        put(row, 1, mkCell('EVOLUCION DIARIA DE PALLETS', sSection));
        addMerge(row, 1, row, 4);
        setH(row, 22);
        row++;

        put(row, 1, mkCell('Fecha',   sEvHdr));
        put(row, 2, mkCell('Pallets', sEvHdr));
        setH(row, 16);
        row++;

        fechasOrdenadas.forEach((fecha, idx) => {
            const isLast = idx === numDias - 1;
            const sEv    = isLast ? sEvLast : sEvData;
            put(row, 1, mkCell(fmtShort(fecha),              sEv));
            put(row, 2, mkCell(fechasMap.get(fecha).total,   sEv));
            if (isLast) setH(row, 16);
            row++;
        });
        row++; // fila vacía

        // ═══════════════════════════════════════════════════════════
        //  PALLETS POR UBICACIÓN Y DÍA
        // ═══════════════════════════════════════════════════════════
        const totalCol = numDias + 2; // columna "Total By Area" (1-indexed)

        put(row, 1, mkCell('PALLETS POR UBICACION Y DIA', sSection));
        addMerge(row, 1, row, numDias + 1);
        put(row, totalCol, mkCell('Total By Area', mkStyle(C_BLUE, C_WHITE, true, 12, 'center', null)));
        setH(row, 22);
        row++;

        // Headers: Ubicacion | fecha1 | fecha2 | ... | Total
        put(row, 1, mkCell('Ubicacion', sColHdrSm));
        fechasOrdenadas.forEach((fecha, i) => put(row, i + 2, mkCell(fmtFull(fecha), sColHdrSm)));
        put(row, totalCol, mkCell('Total', sColHdrSm));
        setH(row, 18);
        row++;

        // Datos con filas alternadas gris/blanco
        ubicList.forEach((ub, ubIdx) => {
            const isGray  = ubIdx % 2 === 0;
            const dayData = ubDiaMap.get(ub);
            put(row, 1, mkCell(ub, sRowLeft(isGray)));
            let rowSum = 0;
            fechasOrdenadas.forEach((fecha, i) => {
                const v = dayData[fecha] || 0;
                put(row, i + 2, mkCell(v, sRow(isGray)));
                rowSum += v;
            });
            // Columna total con fórmula SUM y negrita
            const colEnd = XLSX.utils.encode_col(numDias); // última col de fechas
            ws[XLSX.utils.encode_col(totalCol - 1) + row] = {
                t: 'n', v: rowSum,
                f: `SUM(B${row}:${colEnd}${row})`,
                s: sRowBold(isGray)
            };
            setH(row, 16);
            row++;
        });

        // ═══════════════════════════════════════════════════════════
        //  METADATOS DEL SHEET
        // ═══════════════════════════════════════════════════════════
        ws['!ref']    = `A1:${XLSX.utils.encode_col(numCols - 1)}${row - 1}`;
        ws['!merges'] = merges;
        ws['!cols']   = [
            { wch: 22 },
            { wch: 14 },
            ...Array(Math.max(0, numDias - 1)).fill({ wch: 14 }),
            { wch: 15 }
        ];
        // Construir !rows: array donde índice i = fila i+1
        ws['!rows'] = Array(row - 1).fill(null).map((_, i) => {
            const h = rowHeights.get(i + 1);
            return h ? { hpt: h } : null;
        });

        XLSX.utils.book_append_sheet(wb, ws, 'Dashboard');

        // ═══════════════════════════════════════════════════════════
        //  HOJA Control[Mes] — datos crudos
        // ═══════════════════════════════════════════════════════════
        const meses     = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const sheetName = `Control${meses[now.getMonth()]}`;

        const wsControl = XLSX.utils.json_to_sheet(pallets.map(p => ({
            'PalletID'  : p.palletId,
            'Piezas'    : p.piezas    || '',
            'Condicion' : p.condicion || '',
            'Area'      : p.area      || '',
            'Fecha'     : fmtFull(p.fecha),
            'Turno'     : p.turno     || '',
            'Ubicacion' : p.ubicacion || '',
            'qty'       : p.qty       || 1
        })));

        wsControl['!cols'] = [
            { wch: 20 }, { wch: 14 }, { wch: 14 }, { wch: 22 },
            { wch: 12 }, { wch: 10 }, { wch: 27 }, { wch: 6 }
        ];

        // Headers con color azul oscuro, texto blanco, negrita
        const sCtrlHdr = mkStyle(C_DARK, C_WHITE, true, 11, 'center', bThinAll);
        ['A','B','C','D','E','F','G','H'].forEach(col => {
            const ref = col + '1';
            if (wsControl[ref]) wsControl[ref].s = sCtrlHdr;
        });
        wsControl['!rows'] = [{ hpt: 22 }];

        XLSX.utils.book_append_sheet(wb, wsControl, sheetName);

        // ═══════════════════════════════════════════════════════════
        //  DESCARGAR
        // ═══════════════════════════════════════════════════════════
        const fechaArchivo = now.toISOString().split('T')[0];
        XLSX.writeFile(wb, `ControlPallets_Dashboard_${fechaArchivo}.xlsx`);
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
