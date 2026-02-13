// Clase para gestionar ubicaciones
class UbicacionManager {
    constructor() {
        this.ubicaciones = this.loadUbicaciones();
        this.initDefaultUbicaciones();
    }

    loadUbicaciones() {
        const data = localStorage.getItem('ubicaciones');
        return data ? JSON.parse(data) : [];
    }

    saveUbicaciones() {
        localStorage.setItem('ubicaciones', JSON.stringify(this.ubicaciones));
    }

    initDefaultUbicaciones() {
        if (this.ubicaciones.length === 0) {
            // Ubicaciones por defecto
            const defaults = [
                { codigo: '312578-0014', esBin: false },
                { codigo: 'A01-F001-001', esBin: true },
                { codigo: 'A01-F001-002', esBin: true },
                { codigo: 'A01-F001-003', esBin: true },
                { codigo: 'A01-F001-004', esBin: true },
                { codigo: 'A01-F001-005', esBin: true },
                { codigo: 'A01-F001-006', esBin: true },
                { codigo: 'A01-F001-007', esBin: true },
                { codigo: 'A01-F001-008', esBin: true },
                { codigo: 'A01-F001-009', esBin: true },
                { codigo: 'A01-F001-010', esBin: true },
                { codigo: 'A01-F001-011', esBin: true },
                { codigo: 'A01-F001-012', esBin: true },
                { codigo: 'A01-F001-013', esBin: true },
                { codigo: 'A01-F001-014', esBin: true },
                { codigo: 'A01-F001-015', esBin: true },
                { codigo: 'A01-F001-016', esBin: true },
                { codigo: 'A01-F001-017', esBin: true },
                { codigo: 'A01-F001-018', esBin: true },
                { codigo: 'A01-F001-019', esBin: true },
                { codigo: 'A01-F001-020', esBin: true },
                { codigo: 'A01-F002-001', esBin: true },
                { codigo: 'A01-F002-002', esBin: true },
                { codigo: 'A01-F002-003', esBin: true },
                { codigo: 'A01-F002-004', esBin: true },
                { codigo: 'A01-F002-005', esBin: true },
                { codigo: 'A01-F002-006', esBin: true },
                { codigo: 'A01-F002-007', esBin: true },
                { codigo: 'A01-F002-008', esBin: true },
                { codigo: 'A01-F002-009', esBin: true },
                { codigo: 'A01-F002-010', esBin: true },
                { codigo: 'A01-F002-011', esBin: true },
                { codigo: 'A01-F002-012', esBin: true },
                { codigo: 'A01-F002-013', esBin: true },
                { codigo: 'A01-F002-014', esBin: true },
                { codigo: 'A01-F002-015', esBin: true },
                { codigo: 'A01-F002-016', esBin: true },
                { codigo: 'A01-F002-017', esBin: true },
                { codigo: 'A01-F002-018', esBin: true },
                { codigo: 'A01-F002-019', esBin: true },
                { codigo: 'A01-F002-020', esBin: true },
                { codigo: 'A01-F002-021', esBin: true },
                { codigo: 'A01-F002-022', esBin: true },
                { codigo: 'A01-F003-001', esBin: true },
                { codigo: 'A01-F003-002', esBin: true },
                { codigo: 'A01-F003-003', esBin: true },
                { codigo: 'A01-F003-004', esBin: true },
                { codigo: 'A01-F003-005', esBin: true },
                { codigo: 'A01-F003-006', esBin: true },
                { codigo: 'A01-F003-007', esBin: true },
                { codigo: 'A01-F003-008', esBin: true },
                { codigo: 'A01-F003-009', esBin: true },
                { codigo: 'A01-F003-010', esBin: true },
                { codigo: 'A01-F003-011', esBin: true },
                { codigo: 'A01-F003-012', esBin: true },
                { codigo: 'A01-F003-013', esBin: true },
                { codigo: 'A01-F003-014', esBin: true },
                { codigo: 'A01-F003-015', esBin: true },
                { codigo: 'A01-F003-016', esBin: true },
                { codigo: 'A01-F003-017', esBin: true },
                { codigo: 'A01-F003-018', esBin: true },
                { codigo: 'A01-F003-019', esBin: true },
                { codigo: 'A01-F003-020', esBin: true },
                { codigo: 'A01-F003-021', esBin: true },
                { codigo: 'A01-F003-022', esBin: true },
                { codigo: 'A01-F004-001', esBin: true },
                { codigo: 'A01-F004-002', esBin: true },
                { codigo: 'A01-F004-003', esBin: true },
                { codigo: 'A01-F004-004', esBin: true },
                { codigo: 'A01-F004-005', esBin: true },
                { codigo: 'A01-F004-006', esBin: true },
                { codigo: 'A01-F004-007', esBin: true },
                { codigo: 'A01-F004-008', esBin: true },
                { codigo: 'A01-F004-009', esBin: true },
                { codigo: 'A01-F004-010', esBin: true },
                { codigo: 'A01-F004-011', esBin: true },
                { codigo: 'A01-F004-012', esBin: true },
                { codigo: 'A01-F004-013', esBin: true },
                { codigo: 'A01-F004-014', esBin: true },
                { codigo: 'A01-F004-015', esBin: true },
                { codigo: 'A01-F004-016', esBin: true },
                { codigo: 'A01-F004-017', esBin: true },
                { codigo: 'A01-F004-018', esBin: true },
                { codigo: 'A01-F004-019', esBin: true },
                { codigo: 'A01-F004-020', esBin: true },
                { codigo: 'A01-F004-021', esBin: true },
                { codigo: 'A01-F004-022', esBin: true },
                { codigo: 'A01-F005-001', esBin: true },
                { codigo: 'A01-F005-002', esBin: true },
                { codigo: 'A01-F005-003', esBin: true },
                { codigo: 'A01-F005-004', esBin: true },
                { codigo: 'A01-F005-005', esBin: true },
                { codigo: 'A01-F005-006', esBin: true },
                { codigo: 'A01-F005-007', esBin: true },
                { codigo: 'A01-F005-008', esBin: true },
                { codigo: 'A01-F005-009', esBin: true },
                { codigo: 'A01-F005-010', esBin: true },
                { codigo: 'A01-F005-011', esBin: true },
                { codigo: 'A01-F005-012', esBin: true },
                { codigo: 'A01-F005-013', esBin: true },
                { codigo: 'A01-F005-014', esBin: true },
                { codigo: 'A01-F005-015', esBin: true },
                { codigo: 'A01-F005-016', esBin: true },
                { codigo: 'A01-F005-017', esBin: true },
                { codigo: 'A01-F005-018', esBin: true },
                { codigo: 'A01-F005-019', esBin: true },
                { codigo: 'A01-F005-020', esBin: true },
                { codigo: 'A01-F006-001', esBin: true },
                { codigo: 'A01-F006-002', esBin: true },
                { codigo: 'A01-F006-003', esBin: true },
                { codigo: 'A01-F006-004', esBin: true },
                { codigo: 'A01-F006-005', esBin: true },
                { codigo: 'A01-F006-006', esBin: true },
                { codigo: 'A01-F006-007', esBin: true },
                { codigo: 'A01-F006-008', esBin: true },
                { codigo: 'A01-F006-009', esBin: true },
                { codigo: 'A01-F006-010', esBin: true },
                { codigo: 'A01-F006-011', esBin: true },
                { codigo: 'A01-F006-012', esBin: true },
                { codigo: 'A01-F006-013', esBin: true },
                { codigo: 'A01-F006-014', esBin: true },
                { codigo: 'A01-F006-015', esBin: true },
                { codigo: 'A01-F006-016', esBin: true },
                { codigo: 'A01-F006-017', esBin: true },
                { codigo: 'A01-F006-018', esBin: true },
                { codigo: 'A01-F006-019', esBin: true },
                { codigo: 'A01-F006-020', esBin: true },
                { codigo: 'A01-F006-021', esBin: true },
                { codigo: 'A01-F006-022', esBin: true },
                { codigo: 'A01-F007-001', esBin: true },
                { codigo: 'A01-F007-002', esBin: true },
                { codigo: 'A01-F007-003', esBin: true },
                { codigo: 'A01-F007-004', esBin: true },
                { codigo: 'A01-F007-005', esBin: true },
                { codigo: 'A01-F007-006', esBin: true },
                { codigo: 'A01-F007-007', esBin: true },
                { codigo: 'A01-F007-008', esBin: true },
                { codigo: 'A01-F007-009', esBin: true },
                { codigo: 'A01-F007-010', esBin: true },
                { codigo: 'A01-F007-011', esBin: true },
                { codigo: 'A01-F007-012', esBin: true },
                { codigo: 'A01-F007-013', esBin: true },
                { codigo: 'A01-F007-014', esBin: true },
                { codigo: 'A01-F007-015', esBin: true },
                { codigo: 'A01-F007-016', esBin: true },
                { codigo: 'A01-F007-017', esBin: true },
                { codigo: 'A01-F007-018', esBin: true },
                { codigo: 'A01-F007-019', esBin: true },
                { codigo: 'A01-F007-020', esBin: true },
                { codigo: 'A01-F007-021', esBin: true },
                { codigo: 'A01-F007-022', esBin: true },
                { codigo: 'A01-F008-002', esBin: true },
                { codigo: 'A01-F008-003', esBin: true },
                { codigo: 'A01-F008-004', esBin: true },
                { codigo: 'A01-F008-005', esBin: true },
                { codigo: 'A01-F008-006', esBin: true },
                { codigo: 'A01-F008-007', esBin: true },
                { codigo: 'A01-F008-008', esBin: true },
                { codigo: 'A01-F008-009', esBin: true },
                { codigo: 'A01-F008-010', esBin: true },
                { codigo: 'A01-F008-011', esBin: true },
                { codigo: 'A01-F008-012', esBin: true },
                { codigo: 'A01-F008-013', esBin: true },
                { codigo: 'A01-F008-014', esBin: true },
                { codigo: 'A01-F008-015', esBin: true },
                { codigo: 'A01-F008-016', esBin: true },
                { codigo: 'A01-F008-017', esBin: true },
                { codigo: 'A01-F008-018', esBin: true },
                { codigo: 'A01-F008-019', esBin: true },
                { codigo: 'A01-F008-020', esBin: true },
                { codigo: 'A01-F008-021', esBin: true },
                { codigo: 'A01-F008-022', esBin: true },
                { codigo: 'A01-F008-023', esBin: true },
                { codigo: 'A01-F008-024', esBin: true },
                { codigo: 'A01-F008-025', esBin: true },
                { codigo: 'A01-F008-026', esBin: true },
                { codigo: 'A01-F009-001', esBin: true },
                { codigo: 'A01-F009-002', esBin: true },
                { codigo: 'A01-F009-003', esBin: true },
                { codigo: 'A01-F009-004', esBin: true },
                { codigo: 'A01-F009-005', esBin: true },
                { codigo: 'A01-F009-006', esBin: true },
                { codigo: 'A01-F009-007', esBin: true },
                { codigo: 'A01-F009-008', esBin: true },
                { codigo: 'A01-F009-009', esBin: true },
                { codigo: 'A01-F009-010', esBin: true },
                { codigo: 'A01-F010-001', esBin: true },
                { codigo: 'A01-F010-002', esBin: true },
                { codigo: 'A01-F010-003', esBin: true },
                { codigo: 'A01-F010-004', esBin: true },
                { codigo: 'A01-F010-005', esBin: true },
                { codigo: 'A01-F010-006', esBin: true },
                { codigo: 'A01-F010-007', esBin: true },
                { codigo: 'A01-F010-008', esBin: true },
                { codigo: 'A01-F010-009', esBin: true },
                { codigo: 'A01-F010-010', esBin: true },
                { codigo: 'A01-F011-001', esBin: true },
                { codigo: 'A01-F011-002', esBin: true },
                { codigo: 'A01-F011-003', esBin: true },
                { codigo: 'A01-F011-004', esBin: true },
                { codigo: 'A01-F011-005', esBin: true },
                { codigo: 'A01-F011-006', esBin: true },
                { codigo: 'A01-F011-007', esBin: true },
                { codigo: 'A01-F011-008', esBin: true },
                { codigo: 'A01-F011-009', esBin: true },
                { codigo: 'A01-F011-010', esBin: true },
                { codigo: 'A01-F012-001', esBin: true },
                { codigo: 'A01-F012-002', esBin: true },
                { codigo: 'A01-F012-003', esBin: true },
                { codigo: 'A01-F012-004', esBin: true },
                { codigo: 'A01-F012-005', esBin: true },
                { codigo: 'A01-F012-006', esBin: true },
                { codigo: 'A01-F012-007', esBin: true },
                { codigo: 'A01-F012-008', esBin: true },
                { codigo: 'A01-F012-009', esBin: true },
                { codigo: 'A01-F012-010', esBin: true },
                { codigo: 'A01-F013-001', esBin: true },
                { codigo: 'A01-F013-002', esBin: true },
                { codigo: 'A01-F013-003', esBin: true },
                { codigo: 'A01-F013-004', esBin: true },
                { codigo: 'A01-F013-005', esBin: true },
                { codigo: 'A01-F013-006', esBin: true },
                { codigo: 'A01-F013-007', esBin: true },
                { codigo: 'A01-F013-008', esBin: true },
                { codigo: 'A01-F013-009', esBin: true },
                { codigo: 'A01-F013-010', esBin: true },
                { codigo: 'A01-F014-001', esBin: true },
                { codigo: 'A01-F014-002', esBin: true },
                { codigo: 'A01-F014-003', esBin: true },
                { codigo: 'A01-F014-004', esBin: true },
                { codigo: 'A01-F014-005', esBin: true },
                { codigo: 'A01-F014-006', esBin: true },
                { codigo: 'A01-F014-007', esBin: true },
                { codigo: 'A01-F014-008', esBin: true },
                { codigo: 'A01-F014-009', esBin: true },
                { codigo: 'A01-F014-010', esBin: true },
                { codigo: 'A01-F015-001', esBin: true },
                { codigo: 'A01-F015-002', esBin: true },
                { codigo: 'A01-F015-003', esBin: true },
                { codigo: 'A01-F015-004', esBin: true },
                { codigo: 'A01-F015-005', esBin: true },
                { codigo: 'A01-F015-006', esBin: true },
                { codigo: 'A01-F015-007', esBin: true },
                { codigo: 'A01-F015-008', esBin: true },
                { codigo: 'A01-F015-009', esBin: true },
                { codigo: 'A01-F015-010', esBin: true },
                { codigo: 'A01-F016-001', esBin: true },
                { codigo: 'A01-F016-002', esBin: true },
                { codigo: 'A01-F016-003', esBin: true },
                { codigo: 'A01-F016-004', esBin: true },
                { codigo: 'A01-F016-005', esBin: true },
                { codigo: 'A01-F016-006', esBin: true },
                { codigo: 'A01-F016-007', esBin: true },
                { codigo: 'A01-F016-008', esBin: true },
                { codigo: 'A01-F016-009', esBin: true },
                { codigo: 'A01-F016-010', esBin: true },
                { codigo: 'A01-F016-011', esBin: true },
                { codigo: 'A01-F016-012', esBin: true },
                { codigo: 'A01-F016-013', esBin: true },
                { codigo: 'A01-F016-014', esBin: true },
                { codigo: 'A01-F016-015', esBin: true },
                { codigo: 'A01-F016-016', esBin: true },
                { codigo: 'A01-F016-017', esBin: true },
                { codigo: 'A01-F016-018', esBin: true },
                { codigo: 'A01-F017-001', esBin: true },
                { codigo: 'A01-F017-002', esBin: true },
                { codigo: 'A01-F017-003', esBin: true },
                { codigo: 'A01-F017-004', esBin: true },
                { codigo: 'A01-F017-005', esBin: true },
                { codigo: 'A01-F017-006', esBin: true },
                { codigo: 'A01-F017-007', esBin: true },
                { codigo: 'A01-F017-008', esBin: true },
                { codigo: 'A01-F017-009', esBin: true },
                { codigo: 'A01-F017-010', esBin: true },
                { codigo: 'A01-F017-011', esBin: true },
                { codigo: 'A01-F017-012', esBin: true },
                { codigo: 'A01-F017-013', esBin: true },
                { codigo: 'A01-F017-014', esBin: true },
                { codigo: 'A01-F017-015', esBin: true },
                { codigo: 'A01-F017-016', esBin: true },
                { codigo: 'A01-F017-017', esBin: true },
                { codigo: 'A01-F017-018', esBin: true },
                { codigo: 'A01-F018-001', esBin: true },
                { codigo: 'A01-F018-002', esBin: true },
                { codigo: 'A01-F018-003', esBin: true },
                { codigo: 'A01-F018-004', esBin: true },
                { codigo: 'A01-F018-005', esBin: true },
                { codigo: 'A01-F018-006', esBin: true },
                { codigo: 'A01-F018-007', esBin: true },
                { codigo: 'A01-F018-008', esBin: true },
                { codigo: 'A01-F018-009', esBin: true },
                { codigo: 'A01-F018-010', esBin: true },
                { codigo: 'A01-F018-011', esBin: true },
                { codigo: 'A01-F018-012', esBin: true },
                { codigo: 'A01-F018-013', esBin: true },
                { codigo: 'A01-F018-014', esBin: true },
                { codigo: 'A01-F018-015', esBin: true },
                { codigo: 'A01-F018-016', esBin: true },
                { codigo: 'A01-F018-017', esBin: true },
                { codigo: 'A01-F018-018', esBin: true },
                { codigo: 'A01-F019-001', esBin: true },
                { codigo: 'A01-F019-002', esBin: true },
                { codigo: 'A01-F019-003', esBin: true },
                { codigo: 'A01-F019-004', esBin: true },
                { codigo: 'A01-F019-005', esBin: true },
                { codigo: 'A01-F019-006', esBin: true },
                { codigo: 'A01-F019-007', esBin: true },
                { codigo: 'A01-F019-008', esBin: true },
                { codigo: 'A01-F019-009', esBin: true },
                { codigo: 'A01-F019-010', esBin: true },
                { codigo: 'A01-F019-011', esBin: true },
                { codigo: 'A01-F019-012', esBin: true },
                { codigo: 'A01-F019-013', esBin: true },
                { codigo: 'A01-F019-014', esBin: true },
                { codigo: 'A01-F019-015', esBin: true },
                { codigo: 'A01-F019-016', esBin: true },
                { codigo: 'A01-F019-017', esBin: true },
                { codigo: 'A01-F019-018', esBin: true },
                { codigo: 'A01-F020-001', esBin: true },
                { codigo: 'A01-F020-002', esBin: true },
                { codigo: 'A01-F020-003', esBin: true },
                { codigo: 'A01-F020-004', esBin: true },
                { codigo: 'A01-F020-005', esBin: true },
                { codigo: 'A01-F020-006', esBin: true },
                { codigo: 'A01-F020-007', esBin: true },
                { codigo: 'A01-F020-008', esBin: true },
                { codigo: 'A01-F020-009', esBin: true },
                { codigo: 'A01-F020-010', esBin: true },
                { codigo: 'A01-F020-011', esBin: true },
                { codigo: 'A01-F020-012', esBin: true },
                { codigo: 'A01-F020-013', esBin: true },
                { codigo: 'A01-F020-014', esBin: true },
                { codigo: 'A01-F020-015', esBin: true },
                { codigo: 'A01-F020-016', esBin: true },
                { codigo: 'A01-F020-017', esBin: true },
                { codigo: 'A01-F020-018', esBin: true },
                { codigo: 'A01-F021-001', esBin: true },
                { codigo: 'A01-F021-002', esBin: true },
                { codigo: 'A01-F021-003', esBin: true },
                { codigo: 'A01-F021-004', esBin: true },
                { codigo: 'A01-F021-005', esBin: true },
                { codigo: 'A01-F021-006', esBin: true },
                { codigo: 'A01-F021-007', esBin: true },
                { codigo: 'A01-F021-008', esBin: true },
                { codigo: 'A01-F021-009', esBin: true },
                { codigo: 'A01-F021-010', esBin: true },
                { codigo: 'A01-F021-011', esBin: true },
                { codigo: 'A01-F021-012', esBin: true },
                { codigo: 'A01-F021-013', esBin: true },
                { codigo: 'A01-F021-014', esBin: true },
                { codigo: 'A01-F021-015', esBin: true },
                { codigo: 'A01-F021-016', esBin: true },
                { codigo: 'A01-F021-017', esBin: true },
                { codigo: 'A01-F021-018', esBin: true },
                { codigo: 'A01-F022-001', esBin: true },
                { codigo: 'A01-F022-002', esBin: true },
                { codigo: 'A01-F022-003', esBin: true },
                { codigo: 'A01-F022-004', esBin: true },
                { codigo: 'A01-F022-005', esBin: true },
                { codigo: 'A01-F022-006', esBin: true },
                { codigo: 'A01-F022-007', esBin: true },
                { codigo: 'A01-F022-008', esBin: true },
                { codigo: 'A01-F022-009', esBin: true },
                { codigo: 'A01-F022-010', esBin: true },
                { codigo: 'A01-F022-011', esBin: true },
                { codigo: 'A01-F022-012', esBin: true },
                { codigo: 'A01-F022-013', esBin: true },
                { codigo: 'A01-F022-014', esBin: true },
                { codigo: 'A01-F022-015', esBin: true },
                { codigo: 'A01-F022-016', esBin: true },
                { codigo: 'A01-F022-017', esBin: true },
                { codigo: 'A01-F022-018', esBin: true },
                { codigo: 'A01-F023-001', esBin: true },
                { codigo: 'A01-F023-002', esBin: true },
                { codigo: 'A01-F023-003', esBin: true },
                { codigo: 'A01-F023-004', esBin: true },
                { codigo: 'A01-F023-005', esBin: true },
                { codigo: 'A01-F023-006', esBin: true },
                { codigo: 'A01-F023-007', esBin: true },
                { codigo: 'A01-F023-008', esBin: true },
                { codigo: 'A01-F023-009', esBin: true },
                { codigo: 'A01-F023-010', esBin: true },
                { codigo: 'A01-F023-011', esBin: true },
                { codigo: 'A01-F023-012', esBin: true },
                { codigo: 'A01-F023-013', esBin: true },
                { codigo: 'A01-F023-014', esBin: true },
                { codigo: 'A01-F023-015', esBin: true },
                { codigo: 'A01-F023-016', esBin: true },
                { codigo: 'A01-F023-017', esBin: true },
                { codigo: 'A01-F023-018', esBin: true },
                { codigo: 'A01-F024-001', esBin: true },
                { codigo: 'A01-F024-002', esBin: true },
                { codigo: 'A01-F024-003', esBin: true },
                { codigo: 'A01-F024-004', esBin: true },
                { codigo: 'A01-F024-005', esBin: true },
                { codigo: 'A01-F024-006', esBin: true },
                { codigo: 'A01-F024-007', esBin: true },
                { codigo: 'A01-F024-008', esBin: true },
                { codigo: 'A01-F024-009', esBin: true },
                { codigo: 'A01-F024-010', esBin: true },
                { codigo: 'A01-F024-011', esBin: true },
                { codigo: 'A01-F024-012', esBin: true },
                { codigo: 'A01-F024-013', esBin: true },
                { codigo: 'A01-F024-014', esBin: true },
                { codigo: 'A01-F024-015', esBin: true },
                { codigo: 'A01-F024-016', esBin: true },
                { codigo: 'A01-F024-017', esBin: true },
                { codigo: 'A01-F024-018', esBin: true },
                { codigo: 'A01-F025-001', esBin: true },
                { codigo: 'A01-F025-002', esBin: true },
                { codigo: 'A01-F025-003', esBin: true },
                { codigo: 'A01-F025-004', esBin: true },
                { codigo: 'A01-F025-005', esBin: true },
                { codigo: 'A01-F025-006', esBin: true },
                { codigo: 'A01-F025-007', esBin: true },
                { codigo: 'A01-F025-008', esBin: true },
                { codigo: 'A01-F025-009', esBin: true },
                { codigo: 'A01-F025-010', esBin: true },
                { codigo: 'A01-F025-011', esBin: true },
                { codigo: 'A01-F025-012', esBin: true },
                { codigo: 'A01-F025-013', esBin: true },
                { codigo: 'A01-F025-014', esBin: true },
                { codigo: 'A01-F025-015', esBin: true },
                { codigo: 'A01-F025-016', esBin: true },
                { codigo: 'A01-F025-017', esBin: true },
                { codigo: 'A01-F025-018', esBin: true },
                { codigo: 'A01-F026-001', esBin: true },
                { codigo: 'A01-F026-002', esBin: true },
                { codigo: 'A01-F026-003', esBin: true },
                { codigo: 'A01-F026-004', esBin: true },
                { codigo: 'A01-F026-005', esBin: true },
                { codigo: 'A01-F026-006', esBin: true },
                { codigo: 'A01-F026-007', esBin: true },
                { codigo: 'A01-F026-008', esBin: true },
                { codigo: 'A01-F026-009', esBin: true },
                { codigo: 'A01-F026-010', esBin: true },
                { codigo: 'A01-F026-011', esBin: true },
                { codigo: 'A01-F026-012', esBin: true },
                { codigo: 'A01-F026-013', esBin: true },
                { codigo: 'A01-F026-014', esBin: true },
                { codigo: 'A01-F026-015', esBin: true },
                { codigo: 'A01-F026-016', esBin: true },
                { codigo: 'A01-F026-017', esBin: true },
                { codigo: 'A01-F026-018', esBin: true },
                { codigo: 'A01-F027-001', esBin: true },
                { codigo: 'A01-F027-002', esBin: true },
                { codigo: 'A01-F027-003', esBin: true },
                { codigo: 'A01-F027-004', esBin: true },
                { codigo: 'A01-F027-005', esBin: true },
                { codigo: 'A01-F027-006', esBin: true },
                { codigo: 'A01-F027-007', esBin: true },
                { codigo: 'A01-F027-008', esBin: true },
                { codigo: 'A01-F027-009', esBin: true },
                { codigo: 'A01-F027-010', esBin: true },
                { codigo: 'A01-F027-011', esBin: true },
                { codigo: 'A01-F027-012', esBin: true },
                { codigo: 'A01-F027-013', esBin: true },
                { codigo: 'A01-F027-014', esBin: true },
                { codigo: 'A01-F027-015', esBin: true },
                { codigo: 'A01-F027-016', esBin: true },
                { codigo: 'A01-F027-017', esBin: true },
                { codigo: 'A01-F027-018', esBin: true },
                { codigo: 'A01-F028-001', esBin: true },
                { codigo: 'A01-F028-002', esBin: true },
                { codigo: 'A01-F028-003', esBin: true },
                { codigo: 'A01-F028-004', esBin: true },
                { codigo: 'A01-F028-005', esBin: true },
                { codigo: 'A01-F028-006', esBin: true },
                { codigo: 'A01-F028-007', esBin: true },
                { codigo: 'A01-F028-008', esBin: true },
                { codigo: 'A01-F028-009', esBin: true },
                { codigo: 'A01-F028-010', esBin: true },
                { codigo: 'A01-F028-011', esBin: true },
                { codigo: 'A01-F028-012', esBin: true },
                { codigo: 'A01-F028-013', esBin: true },
                { codigo: 'A01-F028-014', esBin: true },
                { codigo: 'A01-F028-015', esBin: true },
                { codigo: 'A01-F028-016', esBin: true },
                { codigo: 'A01-F028-017', esBin: true },
                { codigo: 'A01-F028-018', esBin: true },
                { codigo: 'A01-F029-001', esBin: true },
                { codigo: 'A01-F029-002', esBin: true },
                { codigo: 'A01-F029-003', esBin: true },
                { codigo: 'A01-F029-004', esBin: true },
                { codigo: 'A01-F029-005', esBin: true },
                { codigo: 'A01-F029-006', esBin: true },
                { codigo: 'A01-F029-007', esBin: true },
                { codigo: 'A01-F029-008', esBin: true },
                { codigo: 'A01-F029-009', esBin: true },
                { codigo: 'A01-F029-010', esBin: true },
                { codigo: 'A01-F029-011', esBin: true },
                { codigo: 'A01-F029-012', esBin: true },
                { codigo: 'A01-F029-013', esBin: true },
                { codigo: 'A01-F029-014', esBin: true },
                { codigo: 'A01-F029-015', esBin: true },
                { codigo: 'A01-F029-016', esBin: true },
                { codigo: 'A01-F029-017', esBin: true },
                { codigo: 'A01-F029-018', esBin: true },
                { codigo: 'A01-F030-001', esBin: true },
                { codigo: 'A01-F030-002', esBin: true },
                { codigo: 'A01-F030-003', esBin: true },
                { codigo: 'A01-F030-004', esBin: true },
                { codigo: 'A01-F030-005', esBin: true },
                { codigo: 'A01-F030-006', esBin: true },
                { codigo: 'A01-F030-007', esBin: true },
                { codigo: 'A01-F030-008', esBin: true },
                { codigo: 'A01-F030-009', esBin: true },
                { codigo: 'A01-F030-010', esBin: true },
                { codigo: 'A01-F030-011', esBin: true },
                { codigo: 'A01-F030-012', esBin: true },
                { codigo: 'A01-F030-013', esBin: true },
                { codigo: 'A01-F030-014', esBin: true },
                { codigo: 'A01-F030-015', esBin: true },
                { codigo: 'A01-F030-016', esBin: true },
                { codigo: 'A01-F030-017', esBin: true },
                { codigo: 'A01-F030-018', esBin: true },
                { codigo: 'A01-F031-001', esBin: true },
                { codigo: 'A01-F031-002', esBin: true },
                { codigo: 'A01-F031-003', esBin: true },
                { codigo: 'A01-F031-004', esBin: true },
                { codigo: 'A01-F031-005', esBin: true },
                { codigo: 'A01-F031-006', esBin: true },
                { codigo: 'A01-F031-007', esBin: true },
                { codigo: 'A01-F031-008', esBin: true },
                { codigo: 'A01-F031-009', esBin: true },
                { codigo: 'A01-F031-010', esBin: true },
                { codigo: 'A01-F031-011', esBin: true },
                { codigo: 'A01-F031-012', esBin: true },
                { codigo: 'A01-F031-013', esBin: true },
                { codigo: 'A01-F031-014', esBin: true },
                { codigo: 'A01-F031-015', esBin: true },
                { codigo: 'A01-F031-016', esBin: true },
                { codigo: 'A01-F031-017', esBin: true },
                { codigo: 'A01-F031-018', esBin: true },
                { codigo: 'A01-F032-001', esBin: true },
                { codigo: 'A01-F032-002', esBin: true },
                { codigo: 'A01-F032-003', esBin: true },
                { codigo: 'A01-F032-004', esBin: true },
                { codigo: 'A01-F032-005', esBin: true },
                { codigo: 'A01-F032-006', esBin: true },
                { codigo: 'A01-F032-007', esBin: true },
                { codigo: 'A01-F032-008', esBin: true },
                { codigo: 'A01-F032-009', esBin: true },
                { codigo: 'A01-F032-010', esBin: true },
                { codigo: 'A01-F032-011', esBin: true },
                { codigo: 'A01-F032-012', esBin: true },
                { codigo: 'A01-F032-013', esBin: true },
                { codigo: 'A01-F032-014', esBin: true },
                { codigo: 'A01-F032-015', esBin: true },
                { codigo: 'A01-F032-016', esBin: true },
                { codigo: 'A01-F032-017', esBin: true },
                { codigo: 'A01-F032-018', esBin: true },
                { codigo: 'A01-F033-001', esBin: true },
                { codigo: 'A01-F033-002', esBin: true },
                { codigo: 'A01-F033-003', esBin: true },
                { codigo: 'A01-F033-004', esBin: true },
                { codigo: 'A01-F033-005', esBin: true },
                { codigo: 'A01-F033-006', esBin: true },
                { codigo: 'A01-F033-007', esBin: true },
                { codigo: 'A01-F033-008', esBin: true },
                { codigo: 'A01-F033-009', esBin: true },
                { codigo: 'A01-F033-010', esBin: true },
                { codigo: 'A01-F033-011', esBin: true },
                { codigo: 'A01-F033-012', esBin: true },
                { codigo: 'A01-F033-013', esBin: true },
                { codigo: 'A01-F033-014', esBin: true },
                { codigo: 'A01-F033-015', esBin: true },
                { codigo: 'A01-F033-016', esBin: true },
                { codigo: 'A01-F033-017', esBin: true },
                { codigo: 'A01-F033-018', esBin: true },
                { codigo: 'A01-F034-001', esBin: true },
                { codigo: 'A01-F034-002', esBin: true },
                { codigo: 'A01-F034-003', esBin: true },
                { codigo: 'A01-F034-004', esBin: true },
                { codigo: 'A01-F034-005', esBin: true },
                { codigo: 'A01-F034-006', esBin: true },
                { codigo: 'A01-F034-007', esBin: true },
                { codigo: 'A01-F034-008', esBin: true },
                { codigo: 'A01-F034-009', esBin: true },
                { codigo: 'A01-F034-010', esBin: true },
                { codigo: 'A01-F034-011', esBin: true },
                { codigo: 'A01-F034-012', esBin: true },
                { codigo: 'A01-F034-013', esBin: true },
                { codigo: 'A01-F034-014', esBin: true },
                { codigo: 'A01-F034-015', esBin: true },
                { codigo: 'A01-F034-016', esBin: true },
                { codigo: 'A01-F034-017', esBin: true },
                { codigo: 'A01-F034-018', esBin: true },
                { codigo: 'A01-F035-001', esBin: true },
                { codigo: 'A01-F035-002', esBin: true },
                { codigo: 'A01-F035-003', esBin: true },
                { codigo: 'A01-F035-004', esBin: true },
                { codigo: 'A01-F035-005', esBin: true },
                { codigo: 'A01-F035-006', esBin: true },
                { codigo: 'A01-F035-007', esBin: true },
                { codigo: 'A01-F035-008', esBin: true },
                { codigo: 'A01-F035-009', esBin: true },
                { codigo: 'A01-F035-010', esBin: true },
                { codigo: 'A01-F035-011', esBin: true },
                { codigo: 'A01-F035-012', esBin: true },
                { codigo: 'A01-F035-013', esBin: true },
                { codigo: 'A01-F035-014', esBin: true },
                { codigo: 'A01-F035-015', esBin: true },
                { codigo: 'A01-F035-016', esBin: true },
                { codigo: 'A01-F035-017', esBin: true },
                { codigo: 'A01-F035-018', esBin: true },
                { codigo: 'A01-F036-001', esBin: true },
                { codigo: 'A01-F036-002', esBin: true },
                { codigo: 'A01-F036-003', esBin: true },
                { codigo: 'A01-F036-004', esBin: true },
                { codigo: 'A01-F036-005', esBin: true },
                { codigo: 'A01-F036-006', esBin: true },
                { codigo: 'A01-F036-007', esBin: true },
                { codigo: 'A01-F036-008', esBin: true },
                { codigo: 'A01-F036-009', esBin: true },
                { codigo: 'A01-F036-010', esBin: true },
                { codigo: 'A01-F036-011', esBin: true },
                { codigo: 'A01-F036-012', esBin: true },
                { codigo: 'A01-F036-013', esBin: true },
                { codigo: 'A01-F036-014', esBin: true },
                { codigo: 'A01-F036-015', esBin: true },
                { codigo: 'A01-F036-016', esBin: true },
                { codigo: 'A01-F036-017', esBin: true },
                { codigo: 'A01-F036-018', esBin: true },
                { codigo: 'A01-F037-001', esBin: true },
                { codigo: 'A01-F037-002', esBin: true },
                { codigo: 'A01-F037-003', esBin: true },
                { codigo: 'A01-F037-004', esBin: true },
                { codigo: 'A01-F037-005', esBin: true },
                { codigo: 'A01-F037-006', esBin: true },
                { codigo: 'A01-F037-007', esBin: true },
                { codigo: 'A01-F037-008', esBin: true },
                { codigo: 'A01-F037-009', esBin: true },
                { codigo: 'A01-F037-010', esBin: true },
                { codigo: 'A01-F037-011', esBin: true },
                { codigo: 'A01-F037-012', esBin: true },
                { codigo: 'A01-F037-013', esBin: true },
                { codigo: 'A01-F037-014', esBin: true },
                { codigo: 'A01-F037-015', esBin: true },
                { codigo: 'A01-F037-016', esBin: true },
                { codigo: 'A01-F037-017', esBin: true },
                { codigo: 'A01-F037-018', esBin: true },
                { codigo: 'A01-F038-001', esBin: true },
                { codigo: 'A01-F038-002', esBin: true },
                { codigo: 'A01-F038-003', esBin: true },
                { codigo: 'A01-F038-004', esBin: true },
                { codigo: 'A01-F038-005', esBin: true },
                { codigo: 'A01-F038-006', esBin: true },
                { codigo: 'A01-F038-007', esBin: true },
                { codigo: 'A01-F038-008', esBin: true },
                { codigo: 'A01-F038-009', esBin: true },
                { codigo: 'A01-F038-010', esBin: true },
                { codigo: 'A01-F038-011', esBin: true },
                { codigo: 'A01-F038-012', esBin: true },
                { codigo: 'A01-F038-013', esBin: true },
                { codigo: 'A01-F038-014', esBin: true },
                { codigo: 'A01-F038-015', esBin: true },
                { codigo: 'A01-F038-016', esBin: true },
                { codigo: 'A01-F038-017', esBin: true },
                { codigo: 'A01-F038-018', esBin: true },
                { codigo: 'A01-F039-001', esBin: true },
                { codigo: 'A01-F039-002', esBin: true },
                { codigo: 'A01-F039-003', esBin: true },
                { codigo: 'A01-F039-004', esBin: true },
                { codigo: 'A01-F039-005', esBin: true },
                { codigo: 'A01-F039-006', esBin: true },
                { codigo: 'A01-F039-007', esBin: true },
                { codigo: 'A01-F039-008', esBin: true },
                { codigo: 'A01-F039-009', esBin: true },
                { codigo: 'A01-F039-010', esBin: true },
                { codigo: 'A01-F039-011', esBin: true },
                { codigo: 'A01-F039-012', esBin: true },
                { codigo: 'A01-F039-013', esBin: true },
                { codigo: 'A01-F039-014', esBin: true },
                { codigo: 'A01-F039-015', esBin: true },
                { codigo: 'A01-F039-016', esBin: true },
                { codigo: 'A01-F039-017', esBin: true },
                { codigo: 'A01-F039-018', esBin: true },
                { codigo: 'A01-F040-001', esBin: true },
                { codigo: 'A01-F040-002', esBin: true },
                { codigo: 'A01-F040-003', esBin: true },
                { codigo: 'A01-F040-004', esBin: true },
                { codigo: 'A01-F040-005', esBin: true },
                { codigo: 'A01-F040-006', esBin: true },
                { codigo: 'A01-F040-007', esBin: true },
                { codigo: 'A01-F040-008', esBin: true },
                { codigo: 'A01-F040-009', esBin: true },
                { codigo: 'A01-F040-010', esBin: true },
                { codigo: 'A01-F040-011', esBin: true },
                { codigo: 'A01-F040-012', esBin: true },
                { codigo: 'A01-F040-013', esBin: true },
                { codigo: 'A01-F040-014', esBin: true },
                { codigo: 'A01-F040-015', esBin: true },
                { codigo: 'A01-F040-016', esBin: true },
                { codigo: 'A01-F040-017', esBin: true },
                { codigo: 'A01-F040-018', esBin: true },
                { codigo: 'A01-F041-001', esBin: true },
                { codigo: 'A01-F041-002', esBin: true },
                { codigo: 'A01-F041-003', esBin: true },
                { codigo: 'A01-F041-004', esBin: true },
                { codigo: 'A01-F041-005', esBin: true },
                { codigo: 'A01-F041-006', esBin: true },
                { codigo: 'A01-F041-007', esBin: true },
                { codigo: 'A01-F041-008', esBin: true },
                { codigo: 'A01-F041-009', esBin: true },
                { codigo: 'A01-F041-010', esBin: true },
                { codigo: 'A01-F041-011', esBin: true },
                { codigo: 'A01-F041-012', esBin: true },
                { codigo: 'A01-F041-013', esBin: true },
                { codigo: 'A01-F041-014', esBin: true },
                { codigo: 'A01-F041-015', esBin: true },
                { codigo: 'A01-F041-016', esBin: true },
                { codigo: 'A01-F041-017', esBin: true },
                { codigo: 'A01-F041-018', esBin: true },
                { codigo: 'A01-F042-001', esBin: true },
                { codigo: 'A01-F042-002', esBin: true },
                { codigo: 'A01-F042-003', esBin: true },
                { codigo: 'A01-F042-004', esBin: true },
                { codigo: 'A01-F042-005', esBin: true },
                { codigo: 'A01-F042-006', esBin: true },
                { codigo: 'A01-F042-007', esBin: true },
                { codigo: 'A01-F042-008', esBin: true },
                { codigo: 'A01-F042-009', esBin: true },
                { codigo: 'A01-F042-010', esBin: true },
                { codigo: 'A01-F042-011', esBin: true },
                { codigo: 'A01-F042-012', esBin: true },
                { codigo: 'A01-F042-013', esBin: true },
                { codigo: 'A01-F042-014', esBin: true },
                { codigo: 'A01-F042-015', esBin: true },
                { codigo: 'A01-F042-016', esBin: true },
                { codigo: 'A01-F042-017', esBin: true },
                { codigo: 'A01-F042-018', esBin: true },
                { codigo: 'A01-F043-001', esBin: true },
                { codigo: 'A01-F043-002', esBin: true },
                { codigo: 'A01-F043-003', esBin: true },
                { codigo: 'A01-F043-004', esBin: true },
                { codigo: 'A01-F043-005', esBin: true },
                { codigo: 'A01-F043-006', esBin: true },
                { codigo: 'A01-F043-007', esBin: true },
                { codigo: 'A01-F043-008', esBin: true },
                { codigo: 'A01-F043-009', esBin: true },
                { codigo: 'A01-F043-010', esBin: true },
                { codigo: 'A01-F043-011', esBin: true },
                { codigo: 'A01-F043-012', esBin: true },
                { codigo: 'A01-F043-013', esBin: true },
                { codigo: 'A01-F043-014', esBin: true },
                { codigo: 'A01-F043-015', esBin: true },
                { codigo: 'A01-F043-016', esBin: true },
                { codigo: 'A01-F043-017', esBin: true },
                { codigo: 'A01-F043-018', esBin: true },
                { codigo: 'A01-F044-001', esBin: true },
                { codigo: 'A01-F044-002', esBin: true },
                { codigo: 'A01-F044-003', esBin: true },
                { codigo: 'A01-F044-004', esBin: true },
                { codigo: 'A01-F044-005', esBin: true },
                { codigo: 'A01-F044-006', esBin: true },
                { codigo: 'A01-F044-007', esBin: true },
                { codigo: 'A01-F044-008', esBin: true },
                { codigo: 'A01-F044-009', esBin: true },
                { codigo: 'A01-F044-010', esBin: true },
                { codigo: 'A01-F044-011', esBin: true },
                { codigo: 'A01-F044-012', esBin: true },
                { codigo: 'A01-F044-013', esBin: true },
                { codigo: 'A01-F044-014', esBin: true },
                { codigo: 'A01-F044-015', esBin: true },
                { codigo: 'A01-F044-016', esBin: true },
                { codigo: 'A01-F044-017', esBin: true },
                { codigo: 'A01-F044-018', esBin: true },
                { codigo: 'A01-F045-001', esBin: true },
                { codigo: 'A01-F045-002', esBin: true },
                { codigo: 'A01-F045-003', esBin: true },
                { codigo: 'A01-F045-004', esBin: true },
                { codigo: 'A01-F045-005', esBin: true },
                { codigo: 'A01-F045-006', esBin: true },
                { codigo: 'A01-F045-007', esBin: true },
                { codigo: 'A01-F045-008', esBin: true },
                { codigo: 'A01-F045-009', esBin: true },
                { codigo: 'A01-F045-010', esBin: true },
                { codigo: 'A01-F045-011', esBin: true },
                { codigo: 'A01-F045-012', esBin: true },
                { codigo: 'A01-F045-013', esBin: true },
                { codigo: 'A01-F045-014', esBin: true },
                { codigo: 'A01-F045-015', esBin: true },
                { codigo: 'A01-F045-016', esBin: true },
                { codigo: 'A01-F045-017', esBin: true },
                { codigo: 'A01-F045-018', esBin: true },
                { codigo: 'A01-F046-001', esBin: true },
                { codigo: 'A01-F046-002', esBin: true },
                { codigo: 'A01-F046-003', esBin: true },
                { codigo: 'A01-F046-004', esBin: true },
                { codigo: 'A01-F046-005', esBin: true },
                { codigo: 'A01-F046-006', esBin: true },
                { codigo: 'A01-F046-007', esBin: true },
                { codigo: 'A01-F046-008', esBin: true },
                { codigo: 'A01-F046-009', esBin: true },
                { codigo: 'A01-F046-010', esBin: true },
                { codigo: 'A01-F046-011', esBin: true },
                { codigo: 'A01-F046-012', esBin: true },
                { codigo: 'A01-F046-013', esBin: true },
                { codigo: 'A01-F046-014', esBin: true },
                { codigo: 'A01-F046-015', esBin: true },
                { codigo: 'A01-F046-016', esBin: true },
                { codigo: 'A01-F046-017', esBin: true },
                { codigo: 'A01-F046-018', esBin: true },
                { codigo: 'A01-F047-001', esBin: true },
                { codigo: 'A01-F047-002', esBin: true },
                { codigo: 'A01-F047-003', esBin: true },
                { codigo: 'A01-F047-004', esBin: true },
                { codigo: 'A01-F047-005', esBin: true },
                { codigo: 'A01-F047-006', esBin: true },
                { codigo: 'A01-F047-007', esBin: true },
                { codigo: 'A01-F047-008', esBin: true },
                { codigo: 'A01-F047-009', esBin: true },
                { codigo: 'A01-F047-010', esBin: true },
                { codigo: 'A01-F047-011', esBin: true },
                { codigo: 'A01-F047-012', esBin: true },
                { codigo: 'A01-F047-013', esBin: true },
                { codigo: 'A01-F047-014', esBin: true },
                { codigo: 'A01-F047-015', esBin: true },
                { codigo: 'A01-F047-016', esBin: true },
                { codigo: 'A01-F047-017', esBin: true },
                { codigo: 'A01-F047-018', esBin: true },
                { codigo: 'A01-F048-001', esBin: true },
                { codigo: 'A01-F048-002', esBin: true },
                { codigo: 'A01-F048-003', esBin: true },
                { codigo: 'A01-F048-004', esBin: true },
                { codigo: 'A01-F048-005', esBin: true },
                { codigo: 'A01-F048-006', esBin: true },
                { codigo: 'A01-F048-007', esBin: true },
                { codigo: 'A01-F048-008', esBin: true },
                { codigo: 'A01-F048-009', esBin: true },
                { codigo: 'A01-F048-010', esBin: true },
                { codigo: 'A01-F048-011', esBin: true },
                { codigo: 'A01-F048-012', esBin: true },
                { codigo: 'A01-F048-013', esBin: true },
                { codigo: 'A01-F048-014', esBin: true },
                { codigo: 'A01-F048-015', esBin: true },
                { codigo: 'A01-F048-016', esBin: true },
                { codigo: 'A01-F048-017', esBin: true },
                { codigo: 'A01-F048-018', esBin: true },
                { codigo: 'A01-F050-001', esBin: true },
                { codigo: 'A01-F050-002', esBin: true },
                { codigo: 'A01-F050-003', esBin: true },
                { codigo: 'A01-F050-004', esBin: true },
                { codigo: 'A01-F050-005', esBin: true },
                { codigo: 'A01-F050-006', esBin: true },
                { codigo: 'A01-F050-007', esBin: true },
                { codigo: 'A01-F050-008', esBin: true },
                { codigo: 'A01-F050-009', esBin: true },
                { codigo: 'A01-F050-010', esBin: true },
                { codigo: 'A01-F050-011', esBin: true },
                { codigo: 'A01-F050-012', esBin: true },
                { codigo: 'A01-F050-013', esBin: true },
                { codigo: 'A01-F050-014', esBin: true },
                { codigo: 'A01-F050-015', esBin: true },
                { codigo: 'A01-F050-016', esBin: true },
                { codigo: 'A01-F050-017', esBin: true },
                { codigo: 'A01-F050-018', esBin: true },
                { codigo: 'A01-F050-019', esBin: true },
                { codigo: 'A01-F050-020', esBin: true },
                { codigo: 'A01-F051-001', esBin: true },
                { codigo: 'A01-F051-002', esBin: true },
                { codigo: 'A01-F051-003', esBin: true },
                { codigo: 'A01-F051-004', esBin: true },
                { codigo: 'A01-F051-005', esBin: true },
                { codigo: 'A01-F051-006', esBin: true },
                { codigo: 'A01-F051-007', esBin: true },
                { codigo: 'A01-F051-008', esBin: true },
                { codigo: 'A01-F051-009', esBin: true },
                { codigo: 'A01-F051-010', esBin: true },
                { codigo: 'A01-F051-011', esBin: true },
                { codigo: 'A01-F051-012', esBin: true },
                { codigo: 'A01-F051-013', esBin: true },
                { codigo: 'A01-F051-014', esBin: true },
                { codigo: 'A01-F051-015', esBin: true },
                { codigo: 'A01-F051-016', esBin: true },
                { codigo: 'A01-F051-017', esBin: true },
                { codigo: 'A01-F051-018', esBin: true },
                { codigo: 'A01-F051-019', esBin: true },
                { codigo: 'A01-F051-020', esBin: true },
                { codigo: 'A01-F052-001', esBin: true },
                { codigo: 'A01-F052-002', esBin: true },
                { codigo: 'A01-F052-003', esBin: true },
                { codigo: 'A01-F052-004', esBin: true },
                { codigo: 'A01-F052-005', esBin: true },
                { codigo: 'A01-F052-006', esBin: true },
                { codigo: 'A01-F052-007', esBin: true },
                { codigo: 'A01-F052-008', esBin: true },
                { codigo: 'A01-F052-009', esBin: true },
                { codigo: 'A01-F052-010', esBin: true },
                { codigo: 'A01-F052-011', esBin: true },
                { codigo: 'A01-F052-012', esBin: true },
                { codigo: 'A01-F052-013', esBin: true },
                { codigo: 'A01-F052-014', esBin: true },
                { codigo: 'A01-F052-015', esBin: true },
                { codigo: 'A01-F052-016', esBin: true },
                { codigo: 'A01-F052-017', esBin: true },
                { codigo: 'A01-F052-018', esBin: true },
                { codigo: 'A01-F052-019', esBin: true },
                { codigo: 'A01-F052-020', esBin: true },
                { codigo: 'A01-F053-001', esBin: true },
                { codigo: 'A01-F053-002', esBin: true },
                { codigo: 'A01-F053-003', esBin: true },
                { codigo: 'A01-F053-004', esBin: true },
                { codigo: 'A01-F053-005', esBin: true },
                { codigo: 'A01-F053-006', esBin: true },
                { codigo: 'A01-F053-007', esBin: true },
                { codigo: 'A01-F053-008', esBin: true },
                { codigo: 'A01-F053-009', esBin: true },
                { codigo: 'A01-F053-010', esBin: true },
                { codigo: 'A01-F053-011', esBin: true },
                { codigo: 'A01-F053-012', esBin: true },
                { codigo: 'A01-F053-013', esBin: true },
                { codigo: 'A01-F053-014', esBin: true },
                { codigo: 'A01-F053-015', esBin: true },
                { codigo: 'A01-F053-016', esBin: true },
                { codigo: 'A01-F053-017', esBin: true },
                { codigo: 'A01-F053-018', esBin: true },
                { codigo: 'A01-F053-019', esBin: true },
                { codigo: 'A01-F053-020', esBin: true },
                { codigo: 'A01-F054-001', esBin: true },
                { codigo: 'A01-F054-002', esBin: true },
                { codigo: 'A01-F054-003', esBin: true },
                { codigo: 'A01-F054-004', esBin: true },
                { codigo: 'A01-F054-005', esBin: true },
                { codigo: 'A01-F054-006', esBin: true },
                { codigo: 'A01-F054-007', esBin: true },
                { codigo: 'A01-F054-008', esBin: true },
                { codigo: 'A01-F054-009', esBin: true },
                { codigo: 'A01-F054-010', esBin: true },
                { codigo: 'A01-F054-011', esBin: true },
                { codigo: 'A01-F054-012', esBin: true },
                { codigo: 'A01-F054-013', esBin: true },
                { codigo: 'A01-F054-014', esBin: true },
                { codigo: 'A01-F054-015', esBin: true },
                { codigo: 'A01-F054-016', esBin: true },
                { codigo: 'A01-F054-017', esBin: true },
                { codigo: 'A01-F054-018', esBin: true },
                { codigo: 'A01-F054-019', esBin: true },
                { codigo: 'A01-F054-020', esBin: true },
                { codigo: 'A01-F055-001', esBin: true },
                { codigo: 'A01-F055-002', esBin: true },
                { codigo: 'A01-F055-003', esBin: true },
                { codigo: 'A01-F055-004', esBin: true },
                { codigo: 'A01-F055-005', esBin: true },
                { codigo: 'A01-F055-006', esBin: true },
                { codigo: 'A01-F055-007', esBin: true },
                { codigo: 'A01-F055-008', esBin: true },
                { codigo: 'A01-F055-009', esBin: true },
                { codigo: 'A01-F055-010', esBin: true },
                { codigo: 'A01-F055-011', esBin: true },
                { codigo: 'A01-F055-012', esBin: true },
                { codigo: 'A01-F055-013', esBin: true },
                { codigo: 'A01-F055-014', esBin: true },
                { codigo: 'A01-F055-015', esBin: true },
                { codigo: 'A01-F055-016', esBin: true },
                { codigo: 'A01-F055-017', esBin: true },
                { codigo: 'A01-F055-018', esBin: true },
                { codigo: 'A01-F055-019', esBin: true },
                { codigo: 'A01-F055-020', esBin: true },
                { codigo: 'A01-F056-001', esBin: true },
                { codigo: 'A01-F056-002', esBin: true },
                { codigo: 'A01-F056-003', esBin: true },
                { codigo: 'A01-F056-004', esBin: true },
                { codigo: 'A01-F056-005', esBin: true },
                { codigo: 'A01-F056-006', esBin: true },
                { codigo: 'A01-F056-007', esBin: true },
                { codigo: 'A01-F056-008', esBin: true },
                { codigo: 'A01-F056-009', esBin: true },
                { codigo: 'A01-F056-010', esBin: true },
                { codigo: 'A01-F056-011', esBin: true },
                { codigo: 'A01-F056-012', esBin: true },
                { codigo: 'A01-F056-013', esBin: true },
                { codigo: 'A01-F056-014', esBin: true },
                { codigo: 'A01-F056-015', esBin: true },
                { codigo: 'A01-F056-016', esBin: true },
                { codigo: 'A01-F056-017', esBin: true },
                { codigo: 'A01-F056-018', esBin: true },
                { codigo: 'A01-F056-019', esBin: true },
                { codigo: 'A01-F056-020', esBin: true },
                { codigo: 'A01-F057-001', esBin: true },
                { codigo: 'A01-F057-002', esBin: true },
                { codigo: 'A01-F057-003', esBin: true },
                { codigo: 'A01-F057-004', esBin: true },
                { codigo: 'A01-F057-005', esBin: true },
                { codigo: 'A01-F057-006', esBin: true },
                { codigo: 'A01-F057-007', esBin: true },
                { codigo: 'A01-F057-008', esBin: true },
                { codigo: 'A01-F057-009', esBin: true },
                { codigo: 'A01-F057-010', esBin: true },
                { codigo: 'A01-F057-011', esBin: true },
                { codigo: 'A01-F057-012', esBin: true },
                { codigo: 'A01-F057-013', esBin: true },
                { codigo: 'A01-F057-014', esBin: true },
                { codigo: 'A01-F057-015', esBin: true },
                { codigo: 'A01-F057-016', esBin: true },
                { codigo: 'A01-F057-017', esBin: true },
                { codigo: 'A01-F057-018', esBin: true },
                { codigo: 'A01-F057-019', esBin: true },
                { codigo: 'A01-F057-020', esBin: true },
                { codigo: 'A01-F058-001', esBin: true },
                { codigo: 'A01-F058-002', esBin: true },
                { codigo: 'A01-F058-003', esBin: true },
                { codigo: 'A01-F058-004', esBin: true },
                { codigo: 'A01-F058-005', esBin: true },
                { codigo: 'A01-F058-006', esBin: true },
                { codigo: 'A01-F058-007', esBin: true },
                { codigo: 'A01-F058-008', esBin: true },
                { codigo: 'A01-F058-009', esBin: true },
                { codigo: 'A01-F058-010', esBin: true },
                { codigo: 'A01-F058-011', esBin: true },
                { codigo: 'A01-F058-012', esBin: true },
                { codigo: 'A01-F058-013', esBin: true },
                { codigo: 'A01-F058-014', esBin: true },
                { codigo: 'A01-F058-015', esBin: true },
                { codigo: 'A01-F058-016', esBin: true },
                { codigo: 'A01-F058-017', esBin: true },
                { codigo: 'A01-F058-018', esBin: true },
                { codigo: 'A01-F058-019', esBin: true },
                { codigo: 'A01-F058-020', esBin: true },
                { codigo: 'A01-F059-001', esBin: true },
                { codigo: 'A01-F059-002', esBin: true },
                { codigo: 'A01-F059-003', esBin: true },
                { codigo: 'A01-F059-004', esBin: true },
                { codigo: 'A01-F059-005', esBin: true },
                { codigo: 'A01-F059-006', esBin: true },
                { codigo: 'A01-F059-007', esBin: true },
                { codigo: 'A01-F059-008', esBin: true },
                { codigo: 'A01-F059-009', esBin: true },
                { codigo: 'A01-F059-010', esBin: true },
                { codigo: 'A01-F059-011', esBin: true },
                { codigo: 'A01-F059-012', esBin: true },
                { codigo: 'A01-F059-013', esBin: true },
                { codigo: 'A01-F059-014', esBin: true },
                { codigo: 'A01-F059-015', esBin: true },
                { codigo: 'A01-F059-016', esBin: true },
                { codigo: 'A01-F059-017', esBin: true },
                { codigo: 'A01-F059-018', esBin: true },
                { codigo: 'A01-F059-019', esBin: true },
                { codigo: 'A01-F059-020', esBin: true },
                { codigo: 'A01-F062-001', esBin: true },
                { codigo: 'A01-F062-002', esBin: true },
                { codigo: 'A01-F062-003', esBin: true },
                { codigo: 'A01-F062-004', esBin: true },
                { codigo: 'A01-F062-005', esBin: true },
                { codigo: 'A01-F062-006', esBin: true },
                { codigo: 'A01-F062-007', esBin: true },
                { codigo: 'A01-F062-008', esBin: true },
                { codigo: 'A01-F062-009', esBin: true },
                { codigo: 'A01-F062-010', esBin: true },
                { codigo: 'A01-F062-011', esBin: true },
                { codigo: 'A01-F062-012', esBin: true },
                { codigo: 'A01-F062-013', esBin: true },
                { codigo: 'A01-F062-014', esBin: true },
                { codigo: 'A01-F062-015', esBin: true },
                { codigo: 'A01-F062-016', esBin: true },
                { codigo: 'A01-F062-017', esBin: true },
                { codigo: 'A01-F062-018', esBin: true },
                { codigo: 'A01-F063-001', esBin: true },
                { codigo: 'A01-F063-002', esBin: true },
                { codigo: 'A01-F063-003', esBin: true },
                { codigo: 'A01-F063-004', esBin: true },
                { codigo: 'A01-F063-005', esBin: true },
                { codigo: 'A01-F063-006', esBin: true },
                { codigo: 'A01-F063-007', esBin: true },
                { codigo: 'A01-F063-008', esBin: true },
                { codigo: 'A01-F063-009', esBin: true },
                { codigo: 'A01-F063-010', esBin: true },
                { codigo: 'A01-F063-011', esBin: true },
                { codigo: 'A01-F063-012', esBin: true },
                { codigo: 'A01-F063-013', esBin: true },
                { codigo: 'A01-F063-014', esBin: true },
                { codigo: 'A01-F063-015', esBin: true },
                { codigo: 'A01-F063-016', esBin: true },
                { codigo: 'A01-F063-017', esBin: true },
                { codigo: 'A01-F063-018', esBin: true },
                { codigo: 'A01-F064-001', esBin: true },
                { codigo: 'A01-F064-002', esBin: true },
                { codigo: 'A01-F064-003', esBin: true },
                { codigo: 'A01-F064-004', esBin: true },
                { codigo: 'A01-F064-005', esBin: true },
                { codigo: 'A01-F064-006', esBin: true },
                { codigo: 'A01-F064-007', esBin: true },
                { codigo: 'A01-F064-008', esBin: true },
                { codigo: 'A01-F064-009', esBin: true },
                { codigo: 'A01-F064-010', esBin: true },
                { codigo: 'A01-F064-011', esBin: true },
                { codigo: 'A01-F064-012', esBin: true },
                { codigo: 'A01-F064-013', esBin: true },
                { codigo: 'A01-F064-014', esBin: true },
                { codigo: 'A01-F064-015', esBin: true },
                { codigo: 'A01-F064-016', esBin: true },
                { codigo: 'A01-F064-017', esBin: true },
                { codigo: 'A01-F064-018', esBin: true },
                { codigo: 'A01-F065-001', esBin: true },
                { codigo: 'A01-F065-002', esBin: true },
                { codigo: 'A01-F065-003', esBin: true },
                { codigo: 'A01-F065-004', esBin: true },
                { codigo: 'A01-F065-005', esBin: true },
                { codigo: 'A01-F065-006', esBin: true },
                { codigo: 'A01-F065-007', esBin: true },
                { codigo: 'A01-F065-008', esBin: true },
                { codigo: 'A01-F065-009', esBin: true },
                { codigo: 'A01-F065-010', esBin: true },
                { codigo: 'A01-F065-011', esBin: true },
                { codigo: 'A01-F065-012', esBin: true },
                { codigo: 'A01-F065-013', esBin: true },
                { codigo: 'A01-F065-014', esBin: true },
                { codigo: 'A01-F065-015', esBin: true },
                { codigo: 'A01-F065-016', esBin: true },
                { codigo: 'A01-F065-017', esBin: true },
                { codigo: 'A01-F065-018', esBin: true },
                { codigo: 'A01-F066-001', esBin: true },
                { codigo: 'A01-F066-002', esBin: true },
                { codigo: 'A01-F066-003', esBin: true },
                { codigo: 'A01-F066-004', esBin: true },
                { codigo: 'A01-F066-005', esBin: true },
                { codigo: 'A01-F066-006', esBin: true },
                { codigo: 'A01-F066-007', esBin: true },
                { codigo: 'A01-F066-008', esBin: true },
                { codigo: 'A01-F066-009', esBin: true },
                { codigo: 'A01-F066-010', esBin: true },
                { codigo: 'A01-F066-011', esBin: true },
                { codigo: 'A01-F066-012', esBin: true },
                { codigo: 'A01-F066-013', esBin: true },
                { codigo: 'A01-F066-014', esBin: true },
                { codigo: 'A01-F066-015', esBin: true },
                { codigo: 'A01-F066-016', esBin: true },
                { codigo: 'A01-F066-017', esBin: true },
                { codigo: 'A01-F066-018', esBin: true },
                { codigo: 'A01-F067-001', esBin: true },
                { codigo: 'A01-F067-002', esBin: true },
                { codigo: 'A01-F067-003', esBin: true },
                { codigo: 'A01-F067-004', esBin: true },
                { codigo: 'A01-F067-005', esBin: true },
                { codigo: 'A01-F067-006', esBin: true },
                { codigo: 'A01-F067-007', esBin: true },
                { codigo: 'A01-F067-008', esBin: true },
                { codigo: 'A01-F067-009', esBin: true },
                { codigo: 'A01-F067-010', esBin: true },
                { codigo: 'A01-F067-011', esBin: true },
                { codigo: 'A01-F067-012', esBin: true },
                { codigo: 'A01-F067-013', esBin: true },
                { codigo: 'A01-F067-014', esBin: true },
                { codigo: 'A01-F067-015', esBin: true },
                { codigo: 'A01-F067-016', esBin: true },
                { codigo: 'A01-F067-017', esBin: true },
                { codigo: 'A01-F067-018', esBin: true },
                { codigo: 'A01-F068-001', esBin: true },
                { codigo: 'A01-F068-002', esBin: true },
                { codigo: 'A01-F068-003', esBin: true },
                { codigo: 'A01-F068-004', esBin: true },
                { codigo: 'A01-F068-005', esBin: true },
                { codigo: 'A01-F068-006', esBin: true },
                { codigo: 'A01-F068-007', esBin: true },
                { codigo: 'A01-F068-008', esBin: true },
                { codigo: 'A01-F068-009', esBin: true },
                { codigo: 'A01-F068-010', esBin: true },
                { codigo: 'A01-F068-011', esBin: true },
                { codigo: 'A01-F068-012', esBin: true },
                { codigo: 'A01-F068-013', esBin: true },
                { codigo: 'A01-F068-014', esBin: true },
                { codigo: 'A01-F068-015', esBin: true },
                { codigo: 'A01-F068-016', esBin: true },
                { codigo: 'A01-F068-017', esBin: true },
                { codigo: 'A01-F068-018', esBin: true },
                { codigo: 'A01-F069-001', esBin: true },
                { codigo: 'A01-F069-002', esBin: true },
                { codigo: 'A01-F069-003', esBin: true },
                { codigo: 'A01-F069-004', esBin: true },
                { codigo: 'A01-F069-005', esBin: true },
                { codigo: 'A01-F069-006', esBin: true },
                { codigo: 'A01-F069-007', esBin: true },
                { codigo: 'A01-F069-008', esBin: true },
                { codigo: 'A01-F069-009', esBin: true },
                { codigo: 'A01-F069-010', esBin: true },
                { codigo: 'A01-F069-011', esBin: true },
                { codigo: 'A01-F069-012', esBin: true },
                { codigo: 'A01-F069-013', esBin: true },
                { codigo: 'A01-F069-014', esBin: true },
                { codigo: 'A01-F069-015', esBin: true },
                { codigo: 'A01-F069-016', esBin: true },
                { codigo: 'A01-F069-017', esBin: true },
                { codigo: 'A01-F069-018', esBin: true },
                { codigo: 'A02-F033-001', esBin: true },
                { codigo: 'A02-F033-002', esBin: true },
                { codigo: 'A02-F033-003', esBin: true },
                { codigo: 'A02-F033-004', esBin: true },
                { codigo: 'A02-F033-005', esBin: true },
                { codigo: 'A02-F033-006', esBin: true },
                { codigo: 'A02-F033-007', esBin: true },
                { codigo: 'A02-F033-008', esBin: true },
                { codigo: 'A02-F033-009', esBin: true },
                { codigo: 'A02-F033-010', esBin: true },
                { codigo: 'A02-F033-011', esBin: true },
                { codigo: 'A02-F033-012', esBin: true },
                { codigo: 'A02-F033-013', esBin: true },
                { codigo: 'A02-F033-014', esBin: true },
                { codigo: 'A02-F033-015', esBin: true },
                { codigo: 'A02-F033-016', esBin: true },
                { codigo: 'A02-F033-017', esBin: true },
                { codigo: 'A02-F033-018', esBin: true },
                { codigo: 'A02-F034-001', esBin: true },
                { codigo: 'A02-F034-002', esBin: true },
                { codigo: 'A02-F034-003', esBin: true },
                { codigo: 'A02-F034-004', esBin: true },
                { codigo: 'A02-F034-005', esBin: true },
                { codigo: 'A02-F034-006', esBin: true },
                { codigo: 'A02-F034-007', esBin: true },
                { codigo: 'A02-F034-008', esBin: true },
                { codigo: 'A02-F034-009', esBin: true },
                { codigo: 'A02-F034-010', esBin: true },
                { codigo: 'A02-F034-011', esBin: true },
                { codigo: 'A02-F034-012', esBin: true },
                { codigo: 'A02-F034-013', esBin: true },
                { codigo: 'A02-F034-014', esBin: true },
                { codigo: 'A02-F034-015', esBin: true },
                { codigo: 'A02-F034-016', esBin: true },
                { codigo: 'A02-F034-017', esBin: true },
                { codigo: 'A02-F034-018', esBin: true },
                { codigo: 'A02-F035-001', esBin: true },
                { codigo: 'A02-F035-002', esBin: true },
                { codigo: 'A02-F035-003', esBin: true },
                { codigo: 'A02-F035-004', esBin: true },
                { codigo: 'A02-F035-005', esBin: true },
                { codigo: 'A02-F035-006', esBin: true },
                { codigo: 'A02-F035-007', esBin: true },
                { codigo: 'A02-F035-008', esBin: true },
                { codigo: 'A02-F035-009', esBin: true },
                { codigo: 'A02-F035-010', esBin: true },
                { codigo: 'A02-F035-011', esBin: true },
                { codigo: 'A02-F035-012', esBin: true },
                { codigo: 'A02-F035-013', esBin: true },
                { codigo: 'A02-F035-014', esBin: true },
                { codigo: 'A02-F035-015', esBin: true },
                { codigo: 'A02-F035-016', esBin: true },
                { codigo: 'A02-F035-017', esBin: true },
                { codigo: 'A02-F035-018', esBin: true },
                { codigo: 'A02-F036-001', esBin: true },
                { codigo: 'A02-F036-002', esBin: true },
                { codigo: 'A02-F036-003', esBin: true },
                { codigo: 'A02-F036-004', esBin: true },
                { codigo: 'A02-F036-005', esBin: true },
                { codigo: 'A02-F036-006', esBin: true },
                { codigo: 'A02-F036-007', esBin: true },
                { codigo: 'A02-F036-008', esBin: true },
                { codigo: 'A02-F036-009', esBin: true },
                { codigo: 'A02-F036-010', esBin: true },
                { codigo: 'A02-F036-011', esBin: true },
                { codigo: 'A02-F036-012', esBin: true },
                { codigo: 'A02-F036-013', esBin: true },
                { codigo: 'A02-F036-014', esBin: true },
                { codigo: 'A02-F036-015', esBin: true },
                { codigo: 'A02-F036-016', esBin: true },
                { codigo: 'A02-F036-017', esBin: true },
                { codigo: 'A02-F036-018', esBin: true },
                { codigo: 'A03-F033-001', esBin: true },
                { codigo: 'A03-F033-002', esBin: true },
                { codigo: 'A03-F033-003', esBin: true },
                { codigo: 'A03-F033-004', esBin: true },
                { codigo: 'A03-F033-005', esBin: true },
                { codigo: 'A03-F033-006', esBin: true },
                { codigo: 'A03-F033-007', esBin: true },
                { codigo: 'A03-F033-008', esBin: true },
                { codigo: 'A03-F033-009', esBin: true },
                { codigo: 'A03-F033-010', esBin: true },
                { codigo: 'A03-F033-011', esBin: true },
                { codigo: 'A03-F033-012', esBin: true },
                { codigo: 'A03-F033-013', esBin: true },
                { codigo: 'A03-F033-014', esBin: true },
                { codigo: 'A03-F033-015', esBin: true },
                { codigo: 'A03-F033-016', esBin: true },
                { codigo: 'ALMM2', esBin: false },
                { codigo: 'MAXX-PackoutBin02', esBin: false },
                { codigo: 'MAXX-Shipping Out', esBin: false },
                { codigo: 'MTG2AT0200', esBin: false },
                { codigo: 'MTY-MAXX-FFT-AREA04', esBin: false },
                { codigo: 'MTY-MAXX-FFT-AREA05', esBin: false },
                { codigo: 'MTY-SALE04', esBin: false },
                { codigo: 'P01-F055-01', esBin: false },
                { codigo: 'P01-F069-001', esBin: true },
                { codigo: 'P01-F070-001', esBin: true },
                { codigo: 'REFM2', esBin: false },
                { codigo: 'SHIPB2BM2', esBin: false },
                { codigo: 'TRG-RETU05', esBin: false }
            ];
            this.ubicaciones = defaults;
            this.saveUbicaciones();
        }
    }

    addUbicacion(codigo, esBin) {
        if (this.ubicaciones.some(u => u.codigo === codigo)) {
            return false;
        }
        this.ubicaciones.push({ codigo, esBin });
        this.ubicaciones.sort((a, b) => a.codigo.localeCompare(b.codigo));
        this.saveUbicaciones();
        return true;
    }

    deleteUbicacion(codigo) {
        this.ubicaciones = this.ubicaciones.filter(u => u.codigo !== codigo);
        this.saveUbicaciones();
    }

    getUbicaciones() {
        return this.ubicaciones.sort((a, b) => a.codigo.localeCompare(b.codigo));
    }

    getUbicacionesBin() {
        return this.ubicaciones
            .filter(u => u.esBin)
            .map(u => u.codigo)
            .sort((a, b) => a.localeCompare(b));
    }

    getStats() {
        const total = this.ubicaciones.length;
        const bin = this.ubicaciones.filter(u => u.esBin).length;
        const normales = total - bin;
        return { total, bin, normales };
    }
}

// Clase para gestionar los pallets
class PalletManager {
    constructor(ubicacionManager) {
        this.ubicacionManager = ubicacionManager;
        this.pallets = this.loadPallets();
        this.condicionChart = null;
        this.areaChart = null;
        this.turnoChart = null;
        this.binVsNormalChart = null;
        this.ubicacionesChart = null;
        this.palletsPorDiaChart = null;
    }

    get ubicacionesBin() {
        return this.ubicacionManager.getUbicacionesBin();
    }

    // Cargar pallets desde localStorage
    loadPallets() {
        const data = localStorage.getItem('pallets');
        return data ? JSON.parse(data) : [];
    }

    // Guardar pallets en localStorage
    savePallets() {
        localStorage.setItem('pallets', JSON.stringify(this.pallets));
    }

    // Agregar nuevo pallet
    addPallet(pallet) {
        pallet.id = Date.now().toString();
        this.pallets.push(pallet);
        this.savePallets();
        return true;
    }

    // Eliminar pallet
    deletePallet(id) {
        this.pallets = this.pallets.filter(p => p.id !== id);
        this.savePallets();
    }

    // Obtener pallet por ID
    getPalletById(id) {
        return this.pallets.find(p => p.id === id);
    }

    // Actualizar pallet
    updatePallet(id, updatedData) {
        const index = this.pallets.findIndex(p => p.id === id);
        if (index !== -1) {
            this.pallets[index] = { ...this.pallets[index], ...updatedData };
            this.savePallets();
            return true;
        }
        return false;
    }

    // Buscar pallets
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

    // Limpiar todos los pallets
    clearAll() {
        this.pallets = [];
        this.savePallets();
    }

    // Obtener estadísticas
    getStats() {
        const total = this.pallets.length;
        const totalQty = this.pallets.reduce((sum, p) => sum + parseInt(p.qty || 0), 0);

        // Contar días únicos
        const fechasUnicas = new Set(this.pallets.map(p => p.fecha));
        const totalDias = fechasUnicas.size;

        // Contar ubicaciones únicas usadas
        const ubicacionesUnicas = new Set(this.pallets.map(p => p.ubicacion));
        const totalUbicaciones = ubicacionesUnicas.size;

        // Contar condiciones dinámicamente
        const condiciones = {};
        this.pallets.forEach(p => {
            const cond = p.condicion;
            condiciones[cond] = (condiciones[cond] || 0) + 1;
        });

        // Encontrar las dos condiciones más comunes
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

    // Obtener datos para gráfica de condiciones
    getCondicionesData() {
        const condiciones = {};
        this.pallets.forEach(p => {
            condiciones[p.condicion] = (condiciones[p.condicion] || 0) + 1;
        });
        return condiciones;
    }

    // Obtener datos para gráfica de áreas
    getAreasData() {
        const areas = {};
        this.pallets.forEach(p => {
            areas[p.area] = (areas[p.area] || 0) + 1;
        });
        return areas;
    }

    // Obtener datos para gráfica de turnos
    getTurnosData() {
        const turnos = {};
        this.pallets.forEach(p => {
            turnos[p.turno] = (turnos[p.turno] || 0) + 1;
        });
        return turnos;
    }

    // Obtener cantidad de pallets en ubicaciones BIN
    getPalletsEnBin() {
        return this.pallets.filter(p => this.ubicacionesBin.includes(p.ubicacion)).length;
    }

    // Obtener cantidad de pallets en Workcenter (ubicaciones normales)
    getPalletsWorkcenter() {
        return this.pallets.filter(p => !this.ubicacionesBin.includes(p.ubicacion)).length;
    }

    // Obtener cantidad de pallets sin asignar
    getPalletsSinAsignar() {
        return this.pallets.filter(p => p.ubicacion === 'SIN-ASIGNAR').length;
    }

    // Obtener datos de pallets en BIN por día
    getBinPorDiaData() {
        const palletsBin = this.pallets.filter(p => this.ubicacionesBin.includes(p.ubicacion));

        const porDia = {};
        palletsBin.forEach(p => {
            const fecha = p.fecha;
            porDia[fecha] = (porDia[fecha] || 0) + 1;
        });

        // Ordenar por fecha
        const fechasOrdenadas = Object.keys(porDia).sort((a, b) => new Date(a) - new Date(b));
        const datos = fechasOrdenadas.map(fecha => porDia[fecha]);

        return { fechas: fechasOrdenadas, datos: datos };
    }

    // Obtener pallets en BIN con detalles por fecha
    getBinDetailsPerDay() {
        const palletsBin = this.pallets.filter(p => this.ubicacionesBin.includes(p.ubicacion));

        const porDia = {};
        palletsBin.forEach(p => {
            const fecha = p.fecha;
            if (!porDia[fecha]) {
                porDia[fecha] = {
                    cantidad: 0,
                    pallets: []
                };
            }
            porDia[fecha].cantidad++;
            porDia[fecha].pallets.push(p);
        });

        return porDia;
    }

    // Obtener datos de pallets por ubicación
    getPalletsPorUbicacion() {
        const porUbicacion = {};
        this.pallets.forEach(p => {
            porUbicacion[p.ubicacion] = (porUbicacion[p.ubicacion] || 0) + 1;
        });
        return porUbicacion;
    }

    // Obtener datos de todos los pallets por día
    getTodosPalletsPorDia() {
        const porDia = {};
        this.pallets.forEach(p => {
            const fecha = p.fecha;
            porDia[fecha] = (porDia[fecha] || 0) + 1;
        });

        const fechasOrdenadas = Object.keys(porDia).sort((a, b) => new Date(a) - new Date(b));
        const datos = fechasOrdenadas.map(fecha => porDia[fecha]);

        return { fechas: fechasOrdenadas, datos: datos };
    }

    // Obtener análisis día a día completo
    getAnalisisDiaPorDia() {
        const analisis = {};

        this.pallets.forEach(p => {
            const fecha = p.fecha;
            if (!analisis[fecha]) {
                analisis[fecha] = {
                    fecha: fecha,
                    total: 0,
                    bin: 0,
                    normal: 0,
                    qty: 0
                };
            }

            analisis[fecha].total++;
            analisis[fecha].qty += parseInt(p.qty || 0);

            if (this.ubicacionesBin.includes(p.ubicacion)) {
                analisis[fecha].bin++;
            } else {
                analisis[fecha].normal++;
            }
        });

        // Convertir a array y ordenar por fecha (más reciente primero)
        return Object.values(analisis).sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    }

    // Obtener datos comparativos BIN vs Normal por día
    getBinVsNormalPorDia() {
        const porDia = {};

        this.pallets.forEach(p => {
            const fecha = p.fecha;
            if (!porDia[fecha]) {
                porDia[fecha] = { bin: 0, normal: 0 };
            }

            if (this.ubicacionesBin.includes(p.ubicacion)) {
                porDia[fecha].bin++;
            } else {
                porDia[fecha].normal++;
            }
        });

        const fechasOrdenadas = Object.keys(porDia).sort((a, b) => new Date(a) - new Date(b));
        const datosBin = fechasOrdenadas.map(fecha => porDia[fecha].bin);
        const datosNormal = fechasOrdenadas.map(fecha => porDia[fecha].normal);

        return { fechas: fechasOrdenadas, bin: datosBin, normal: datosNormal };
    }
}

// Instancias de los gestores
const ubicacionManager = new UbicacionManager();
const palletManager = new PalletManager(ubicacionManager);

// Gestión de pestañas
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.dataset.tab;

        // Actualizar botones
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        // Actualizar contenido
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');

        // Si cambiamos a dashboard, actualizar datos
        if (tabName === 'dashboard') {
            updateDashboard();
        }

        // Si cambiamos a duplicados, actualizar datos
        if (tabName === 'duplicados') {
            if (typeof updateDuplicadosStats === 'function') {
                updateDuplicadosStats();
                populateDuplicadosFilters();
            }
        }
    });
});

// Formulario de registro
document.getElementById('palletForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const pallet = {
        palletId: document.getElementById('palletId').value.trim(),
        piezas: document.getElementById('piezas').value.trim(),
        condicion: document.getElementById('condicion').value.trim(),
        area: document.getElementById('area').value.trim(),
        fecha: document.getElementById('fecha').value,
        turno: document.getElementById('turno').value,
        ubicacion: document.getElementById('ubicacion').value.trim(),
        qty: document.getElementById('qty').value
    };

    // Verificar si el PalletID ya existe
    if (palletManager.pallets.some(p => p.palletId === pallet.palletId)) {
        alert('Ya existe un pallet con ese ID');
        return;
    }

    palletManager.addPallet(pallet);
    e.target.reset();

    // Restablecer fecha actual
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('fecha').value = today;

    // Actualizar filtros y tabla
    populateFilters();
    applyFilters();
    updateDashboard(); // Actualizar dashboard con el nuevo pallet
    if (typeof updateDuplicadosStats === 'function') {
        updateDuplicadosStats(); // Actualizar duplicados
    }

    // Mostrar mensaje de éxito
    showNotification('Pallet registrado exitosamente', 'success');
});

// Renderizar tabla de pallets
function renderPalletsTable(palletsToShow = null) {
    const tbody = document.getElementById('palletsTableBody');
    const pallets = palletsToShow || palletManager.pallets;

    if (pallets.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" class="empty-state">
                    <p>No hay pallets registrados</p>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = pallets.map(pallet => `
        <tr>
            <td><strong>${pallet.palletId}</strong></td>
            <td>${pallet.piezas}</td>
            <td><strong>${pallet.qty}</strong></td>
            <td>
                <span class="status-badge status-${getStatusClass(pallet.condicion)}">
                    ${pallet.condicion}
                </span>
            </td>
            <td>${pallet.area}</td>
            <td>${formatDate(pallet.fecha)}</td>
            <td><span class="turno-badge turno-${pallet.turno}">${pallet.turno}</span></td>
            <td>${pallet.ubicacion}</td>
            <td class="action-buttons">
                <button class="btn btn-edit btn-small" onclick="openEditModal('${pallet.id}')">
                    Editar
                </button>
                <button class="btn btn-danger btn-small" onclick="deletePallet('${pallet.id}')">
                    Eliminar
                </button>
            </td>
        </tr>
    `).join('');
}

// Función para abrir el modal de edición
function openEditModal(id) {
    const pallet = palletManager.getPalletById(id);
    if (!pallet) {
        alert('Pallet no encontrado');
        return;
    }

    // Llenar el formulario con los datos del pallet
    document.getElementById('editPalletInternalId').value = pallet.id;
    document.getElementById('editPalletId').value = pallet.palletId;
    document.getElementById('editPiezas').value = pallet.piezas;
    document.getElementById('editCondicion').value = pallet.condicion;
    document.getElementById('editArea').value = pallet.area;
    document.getElementById('editFecha').value = pallet.fecha;
    document.getElementById('editTurno').value = pallet.turno;
    document.getElementById('editUbicacion').value = pallet.ubicacion;
    document.getElementById('editQty').value = pallet.qty;

    // Mostrar el modal
    document.getElementById('editModal').classList.add('active');
}

// Función para cerrar el modal
function closeEditModal() {
    document.getElementById('editModal').classList.remove('active');
    document.getElementById('editPalletForm').reset();
}

// Función para eliminar pallet
function deletePallet(id) {
    if (confirm('¿Estás seguro de eliminar este pallet?')) {
        palletManager.deletePallet(id);
        populateFilters();
        applyFilters();
        updateDashboard(); // Actualizar dashboard después de eliminar
    if (typeof updateDuplicadosStats === 'function') {
        updateDuplicadosStats(); // Actualizar duplicados
    }
        showNotification('Pallet eliminado', 'error');
    }
}

// Variables para filtros
let currentFilters = {
    search: '',
    turno: '',
    condicion: '',
    area: '',
    ubicacion: '',
    fechaDesde: '',
    fechaHasta: ''
};

// Aplicar todos los filtros
function applyFilters() {
    let filteredPallets = palletManager.pallets;

    // Filtro de búsqueda
    if (currentFilters.search) {
        const query = currentFilters.search.toLowerCase();
        filteredPallets = filteredPallets.filter(p =>
            p.palletId.toLowerCase().includes(query) ||
            p.piezas.toLowerCase().includes(query) ||
            p.condicion.toLowerCase().includes(query) ||
            p.area.toLowerCase().includes(query) ||
            p.turno.toLowerCase().includes(query) ||
            p.ubicacion.toLowerCase().includes(query)
        );
    }

    // Filtro por turno
    if (currentFilters.turno) {
        filteredPallets = filteredPallets.filter(p => p.turno === currentFilters.turno);
    }

    // Filtro por condición
    if (currentFilters.condicion) {
        filteredPallets = filteredPallets.filter(p => p.condicion === currentFilters.condicion);
    }

    // Filtro por área
    if (currentFilters.area) {
        filteredPallets = filteredPallets.filter(p => p.area === currentFilters.area);
    }

    // Filtro por ubicación
    if (currentFilters.ubicacion) {
        filteredPallets = filteredPallets.filter(p => p.ubicacion === currentFilters.ubicacion);
    }

    // Filtro por fecha desde
    if (currentFilters.fechaDesde) {
        filteredPallets = filteredPallets.filter(p => p.fecha >= currentFilters.fechaDesde);
    }

    // Filtro por fecha hasta
    if (currentFilters.fechaHasta) {
        filteredPallets = filteredPallets.filter(p => p.fecha <= currentFilters.fechaHasta);
    }

    // Actualizar contador
    const totalPallets = palletManager.pallets.length;
    const filteredCount = filteredPallets.length;
    const filterCountEl = document.getElementById('filterResultCount');

    if (filteredCount === totalPallets) {
        filterCountEl.textContent = `Mostrando todos los pallets (${totalPallets})`;
        filterCountEl.style.color = 'var(--text-secondary)';
    } else {
        filterCountEl.textContent = `Mostrando ${filteredCount} de ${totalPallets} pallets`;
        filterCountEl.style.color = 'var(--primary-color)';
        filterCountEl.style.fontWeight = '600';
    }

    renderPalletsTable(filteredPallets);
}

// Poblar filtros dinámicamente
function populateFilters() {
    // Obtener valores únicos
    const condiciones = [...new Set(palletManager.pallets.map(p => p.condicion))].sort();
    const areas = [...new Set(palletManager.pallets.map(p => p.area))].sort();
    const ubicaciones = [...new Set(palletManager.pallets.map(p => p.ubicacion))].sort();

    // Poblar select de condiciones
    const filterCondicion = document.getElementById('filterCondicion');
    filterCondicion.innerHTML = '<option value="">Todas</option>' +
        condiciones.map(c => `<option value="${c}">${c}</option>`).join('');

    // Poblar select de áreas
    const filterArea = document.getElementById('filterArea');
    filterArea.innerHTML = '<option value="">Todas</option>' +
        areas.map(a => `<option value="${a}">${a}</option>`).join('');

    // Poblar select de ubicaciones
    const filterUbicacion = document.getElementById('filterUbicacion');
    filterUbicacion.innerHTML = '<option value="">Todas</option>' +
        ubicaciones.map(u => `<option value="${u}">${u}</option>`).join('');
}

// Event listeners para filtros
document.getElementById('searchInput').addEventListener('input', (e) => {
    currentFilters.search = e.target.value.trim();
    applyFilters();
});

document.getElementById('filterTurno').addEventListener('change', (e) => {
    currentFilters.turno = e.target.value;
    applyFilters();
});

document.getElementById('filterCondicion').addEventListener('change', (e) => {
    currentFilters.condicion = e.target.value;
    applyFilters();
});

document.getElementById('filterArea').addEventListener('change', (e) => {
    currentFilters.area = e.target.value;
    applyFilters();
});

document.getElementById('filterUbicacion').addEventListener('change', (e) => {
    currentFilters.ubicacion = e.target.value;
    applyFilters();
});

document.getElementById('filterFechaDesde').addEventListener('change', (e) => {
    currentFilters.fechaDesde = e.target.value;
    applyFilters();
});

document.getElementById('filterFechaHasta').addEventListener('change', (e) => {
    currentFilters.fechaHasta = e.target.value;
    applyFilters();
});

// Limpiar filtros
document.getElementById('clearFiltersBtn').addEventListener('click', () => {
    currentFilters = {
        search: '',
        turno: '',
        condicion: '',
        area: '',
        ubicacion: '',
        fechaDesde: '',
        fechaHasta: ''
    };

    document.getElementById('searchInput').value = '';
    document.getElementById('filterTurno').value = '';
    document.getElementById('filterCondicion').value = '';
    document.getElementById('filterArea').value = '';
    document.getElementById('filterUbicacion').value = '';
    document.getElementById('filterFechaDesde').value = '';
    document.getElementById('filterFechaHasta').value = '';

    applyFilters();
});

// Limpiar todos los pallets
document.getElementById('clearAllBtn').addEventListener('click', () => {
    if (confirm('¿Estás seguro de eliminar TODOS los pallets? Esta acción no se puede deshacer.')) {
        palletManager.clearAll();
        populateFilters();
        applyFilters();
        updateDashboard(); // Actualizar dashboard después de limpiar todo
    if (typeof updateDuplicadosStats === 'function') {
        updateDuplicadosStats(); // Actualizar duplicados
    }
        showNotification('Todos los pallets han sido eliminados', 'error');
    }
});

// Actualizar dashboard
function updateDashboard() {
    const stats = palletManager.getStats();
    const palletsEnBin = palletManager.getPalletsEnBin();
    const palletsWorkcenter = palletManager.getPalletsWorkcenter();
    const palletsSinAsignar = palletManager.getPalletsSinAsignar();

    // Actualizar estadísticas
    document.getElementById('palletsEnBin').textContent = palletsEnBin;
    document.getElementById('palletsWorkcenter').textContent = palletsWorkcenter;
    document.getElementById('totalPallets').textContent = stats.total;
    document.getElementById('palletsSinAsignar').textContent = palletsSinAsignar;

    // Actualizar gráficas
    updateBinVsNormalChart();
    updateUbicacionesChart();
    updatePalletsPorDiaChart();
    updateCondicionChart();
    updateAreaChart();
    updateTurnoChart();

    // Actualizar tablas
    updateUbicacionesPorDiaTable();
    updateAnalisisDiaTable();

    // Actualizar resumen
    updateResumen();
}

// Gráfica comparativa BIN vs Normal por día
function updateBinVsNormalChart() {
    const ctx = document.getElementById('binVsNormalChart').getContext('2d');
    const data = palletManager.getBinVsNormalPorDia();

    if (palletManager.binVsNormalChart) {
        palletManager.binVsNormalChart.destroy();
    }

    // Formatear fechas
    const fechasFormateadas = data.fechas.map(fecha => {
        const date = new Date(fecha + 'T00:00:00');
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
    });

    palletManager.binVsNormalChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fechasFormateadas,
            datasets: [{
                label: 'Pallets en BIN',
                data: data.bin,
                backgroundColor: 'rgba(63, 81, 181, 0.1)',
                borderColor: '#5a6c7d',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }, {
                label: 'Pallets Normales',
                data: data.normal,
                backgroundColor: 'rgba(108, 117, 125, 0.1)',
                borderColor: '#adb5bd',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    },
                    title: {
                        display: true,
                        text: 'Cantidad de Pallets'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Fecha'
                    }
                }
            }
        }
    });
}

// Gráfica de pallets por ubicación
function updateUbicacionesChart() {
    const ctx = document.getElementById('ubicacionesChart').getContext('2d');
    const data = palletManager.getPalletsPorUbicacion();

    if (palletManager.ubicacionesChart) {
        palletManager.ubicacionesChart.destroy();
    }

    const ubicaciones = Object.keys(data).sort((a, b) => data[b] - data[a]).slice(0, 10);
    const valores = ubicaciones.map(u => data[u]);

    const colors = generateColors(ubicaciones.length);

    palletManager.ubicacionesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ubicaciones,
            datasets: [{
                label: 'Cantidad de Pallets',
                data: valores,
                backgroundColor: colors,
                borderWidth: 0,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Gráfica de total de pallets por día
function updatePalletsPorDiaChart() {
    const ctx = document.getElementById('palletsPorDiaChart').getContext('2d');
    const data = palletManager.getTodosPalletsPorDia();

    if (palletManager.palletsPorDiaChart) {
        palletManager.palletsPorDiaChart.destroy();
    }

    const fechasFormateadas = data.fechas.map(fecha => {
        const date = new Date(fecha + 'T00:00:00');
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
    });

    palletManager.palletsPorDiaChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: fechasFormateadas,
            datasets: [{
                label: 'Pallets Totales',
                data: data.datos,
                backgroundColor: '#5a6c7d',
                borderColor: '#5a6c7d',
                borderWidth: 0,
                borderRadius: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    },
                    title: {
                        display: true,
                        text: 'Cantidad de Pallets'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Fecha'
                    }
                }
            }
        }
    });
}

// Tabla de pallets por ubicación y día
function updateUbicacionesPorDiaTable() {
    const thead = document.getElementById('ubicacionesPorDiaTableHead');
    const tbody = document.getElementById('ubicacionesPorDiaTableBody');

    if (palletManager.pallets.length === 0) {
        thead.innerHTML = '<tr><th>Ubicación</th></tr>';
        tbody.innerHTML = `
            <tr>
                <td class="empty-state">
                    <p>No hay datos para mostrar</p>
                </td>
            </tr>
        `;
        return;
    }

    // Obtener todas las fechas únicas ordenadas
    const fechasSet = new Set(palletManager.pallets.map(p => p.fecha));
    const fechas = Array.from(fechasSet).sort((a, b) => new Date(a) - new Date(b));

    // Obtener todas las ubicaciones únicas ordenadas
    const ubicacionesSet = new Set(palletManager.pallets.map(p => p.ubicacion));
    const ubicaciones = Array.from(ubicacionesSet).sort();

    // Crear encabezado de la tabla
    const fechasFormateadas = fechas.map(fecha => {
        const date = new Date(fecha + 'T00:00:00');
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
    });

    thead.innerHTML = `
        <tr>
            <th style="position: sticky; left: 0; background: var(--bg-secondary); z-index: 10;">Ubicación</th>
            ${fechasFormateadas.map(fecha => `<th>${fecha}</th>`).join('')}
            <th style="background-color: var(--bg-secondary); font-weight: 700;">Total</th>
        </tr>
    `;

    // Crear matriz de datos: ubicacion -> fecha -> cantidad
    const matriz = {};
    ubicaciones.forEach(ubicacion => {
        matriz[ubicacion] = {};
        fechas.forEach(fecha => {
            matriz[ubicacion][fecha] = 0;
        });
    });

    // Llenar la matriz con los datos
    palletManager.pallets.forEach(pallet => {
        matriz[pallet.ubicacion][pallet.fecha]++;
    });

    // Verificar si la ubicación es BIN
    const ubicacionesBin = palletManager.ubicacionesBin;

    // Generar filas de la tabla
    tbody.innerHTML = ubicaciones.map(ubicacion => {
        const totalesPorFecha = fechas.map(fecha => matriz[ubicacion][fecha]);
        const totalUbicacion = totalesPorFecha.reduce((sum, val) => sum + val, 0);
        const esBin = ubicacionesBin.includes(ubicacion);

        return `
            <tr>
                <td style="position: sticky; left: 0; background-color: white; font-weight: 500; z-index: 5;">
                    ${esBin ? '<span class="ubicacion-badge bin" style="margin-right: 8px;">BIN</span>' : ''}
                    ${ubicacion}
                </td>
                ${totalesPorFecha.map(cantidad => `
                    <td style="text-align: center; ${cantidad > 0 ? 'font-weight: 600; color: var(--text-primary);' : 'color: var(--text-tertiary);'}">
                        ${cantidad > 0 ? cantidad : '-'}
                    </td>
                `).join('')}
                <td style="text-align: center; font-weight: 600; background-color: var(--bg-color); color: var(--text-primary);">
                    ${totalUbicacion}
                </td>
            </tr>
        `;
    }).join('');
}

// Tabla de análisis día a día
function updateAnalisisDiaTable() {
    const tbody = document.getElementById('analisisDiaTableBody');
    const analisis = palletManager.getAnalisisDiaPorDia();

    if (analisis.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="empty-state">
                    <p>No hay datos para mostrar</p>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = analisis.map(dia => `
        <tr>
            <td><strong>${formatDate(dia.fecha)}</strong></td>
            <td><strong>${dia.total}</strong></td>
            <td><span class="status-badge" style="background-color: #e8eaf6; color: #3f51b5; border: 1px solid #9fa8da;">${dia.bin}</span></td>
            <td><span class="status-badge" style="background-color: #f5f5f5; color: #616161; border: 1px solid #bdbdbd;">${dia.normal}</span></td>
            <td><strong>${dia.qty}</strong></td>
        </tr>
    `).join('');
}

// Gráfica de Pallets en BIN por día (mantenida para compatibilidad)
function updateBinPorDiaChart() {
    const ctx = document.getElementById('binPorDiaChart').getContext('2d');
    const binData = palletManager.getBinPorDiaData();

    if (palletManager.binPorDiaChart) {
        palletManager.binPorDiaChart.destroy();
    }

    // Formatear fechas para mostrar
    const fechasFormateadas = binData.fechas.map(fecha => {
        const date = new Date(fecha + 'T00:00:00');
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
    });

    palletManager.binPorDiaChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: fechasFormateadas,
            datasets: [{
                label: 'Pallets en BIN',
                data: binData.datos,
                backgroundColor: '#1e3a8a',
                borderColor: '#0f172a',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            const index = context[0].dataIndex;
                            return binData.fechas[index];
                        },
                        label: function(context) {
                            return 'Cantidad: ' + context.parsed.y + ' pallets';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    },
                    title: {
                        display: true,
                        text: 'Cantidad de Pallets'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Fecha'
                    }
                }
            }
        }
    });
}

// Gráfica de condiciones
function updateCondicionChart() {
    const ctx = document.getElementById('condicionChart').getContext('2d');
    const data = palletManager.getCondicionesData();

    if (palletManager.condicionChart) {
        palletManager.condicionChart.destroy();
    }

    palletManager.condicionChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: [
                    '#5a6c7d',
                    '#78909c',
                    '#90a4ae',
                    '#607d8b',
                    '#546e7a',
                    '#455a64'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Gráfica de áreas
function updateAreaChart() {
    const ctx = document.getElementById('areaChart').getContext('2d');
    const data = palletManager.getAreasData();

    if (palletManager.areaChart) {
        palletManager.areaChart.destroy();
    }

    const colors = generateColors(Object.keys(data).length);

    palletManager.areaChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'Cantidad de Pallets',
                data: Object.values(data),
                backgroundColor: colors,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Gráfica de turnos
function updateTurnoChart() {
    const ctx = document.getElementById('turnoChart').getContext('2d');
    const data = palletManager.getTurnosData();

    if (palletManager.turnoChart) {
        palletManager.turnoChart.destroy();
    }

    palletManager.turnoChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: [
                    '#78909c',  // DIA - Gris medio
                    '#546e7a'   // NOCHE - Gris oscuro
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Actualizar resumen general
function updateResumen() {
    const container = document.getElementById('resumenGeneral');
    const stats = palletManager.getStats();

    if (stats.total === 0) {
        container.innerHTML = '<p class="empty-state">No hay datos para mostrar</p>';
        return;
    }

    const promedioQty = (stats.totalQty / stats.total).toFixed(1);

    // Obtener datos adicionales
    const condicionesData = palletManager.getCondicionesData();
    const areasData = palletManager.getAreasData();
    const turnosData = palletManager.getTurnosData();

    const areaMasActiva = Object.keys(areasData).length > 0 ?
        Object.keys(areasData).reduce((a, b) => areasData[a] > areasData[b] ? a : b) : 'N/A';
    const turnoMasActivo = Object.keys(turnosData).length > 0 ?
        Object.keys(turnosData).reduce((a, b) => turnosData[a] > turnosData[b] ? a : b) : 'N/A';

    // Crear lista de condiciones con porcentajes
    let condicionesHTML = '';
    Object.entries(condicionesData).forEach(([condicion, count]) => {
        const porcentaje = ((count / stats.total) * 100).toFixed(1);
        condicionesHTML += `
            <div class="resumen-item">
                <strong>${condicion}:</strong> ${count} pallets (${porcentaje}%)
            </div>
        `;
    });

    // Información de pallets en BIN
    const palletsEnBin = palletManager.getPalletsEnBin();
    const binPorDia = palletManager.getBinDetailsPerDay();
    const cantidadDiasConBin = Object.keys(binPorDia).length;

    let binDetailsHTML = '';
    Object.entries(binPorDia).sort((a, b) => new Date(b[0]) - new Date(a[0])).forEach(([fecha, info]) => {
        const fechaFormateada = formatDate(fecha);
        binDetailsHTML += `
            <div class="resumen-item">
                <strong>${fechaFormateada}:</strong> ${info.cantidad} pallets en BIN
            </div>
        `;
    });

    container.innerHTML = `
        <div class="resumen-item">
            <strong>Total de pallets registrados:</strong> ${stats.total}
        </div>
        <div class="resumen-item">
            <strong>Total de piezas (QTY):</strong> ${stats.totalQty}
        </div>
        <div class="resumen-item">
            <strong>Promedio de QTY por pallet:</strong> ${promedioQty}
        </div>

        <h3 style="margin-top: 20px; margin-bottom: 10px; color: var(--primary-color);">📦 Pallets en BIN</h3>
        <div class="resumen-item" style="background-color: #f5f5f5; border-left-color: var(--primary-color);">
            <strong>Total de pallets en ubicaciones BIN:</strong> ${palletsEnBin}
        </div>
        <div class="resumen-item">
            <strong>Días con registros en BIN:</strong> ${cantidadDiasConBin}
        </div>
        ${binDetailsHTML || '<div class="resumen-item"><em>No hay pallets en ubicaciones BIN</em></div>'}

        <h3 style="margin-top: 20px; margin-bottom: 10px; color: var(--primary-color);">Distribución por Condición</h3>
        ${condicionesHTML}
        <h3 style="margin-top: 20px; margin-bottom: 10px; color: var(--primary-color);">Otros Datos</h3>
        <div class="resumen-item">
            <strong>Área más activa:</strong> ${areaMasActiva} ${areaMasActiva !== 'N/A' ? `(${areasData[areaMasActiva]} pallets)` : ''}
        </div>
        <div class="resumen-item">
            <strong>Turno más activo:</strong> ${turnoMasActivo} ${turnoMasActivo !== 'N/A' ? `(${turnosData[turnoMasActivo]} pallets)` : ''}
        </div>
    `;
}

// Funciones auxiliares
function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function getStatusClass(condicion) {
    // Normalizar la condición para generar un nombre de clase consistente
    const normalized = condicion.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Mapeo de condiciones comunes a clases predefinidas
    const commonConditions = {
        'bueno': 'bueno',
        'danado': 'danado',
        'dañado': 'danado',
        'reparacion': 'reparacion',
        'reparación': 'reparacion',
        'obsoleto': 'fuera',
        'malo': 'danado',
        'excelente': 'bueno',
        'regular': 'reparacion'
    };

    // Si la condición está en el mapeo, usar esa clase, sino usar un hash del nombre
    if (commonConditions[normalized]) {
        return commonConditions[normalized];
    }

    // Para condiciones personalizadas, generar una clase basada en hash
    return 'custom-' + Math.abs(hashCode(condicion) % 4);
}

// Función auxiliar para generar hash de string
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}

function generateColors(count) {
    const baseColors = [
        '#5a6c7d', '#7d8a98', '#8a99a8', '#6c757d',
        '#495057', '#78909c', '#90a4ae', '#607d8b',
        '#546e7a', '#37474f'
    ];

    const colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(baseColors[i % baseColors.length]);
    }
    return colors;
}

function showNotification(message, type = 'success') {
    const color = type === 'success' ? '#10b981' : '#ef4444';
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${color};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Formulario de edición
document.getElementById('editPalletForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('editPalletInternalId').value;
    const originalPallet = palletManager.getPalletById(id);
    const newPalletId = document.getElementById('editPalletId').value.trim();

    // Verificar si el nuevo PalletID ya existe (excepto si es el mismo)
    if (newPalletId !== originalPallet.palletId) {
        if (palletManager.pallets.some(p => p.palletId === newPalletId && p.id !== id)) {
            alert('Ya existe un pallet con ese ID');
            return;
        }
    }

    const updatedData = {
        palletId: newPalletId,
        piezas: document.getElementById('editPiezas').value.trim(),
        condicion: document.getElementById('editCondicion').value.trim(),
        area: document.getElementById('editArea').value.trim(),
        fecha: document.getElementById('editFecha').value,
        turno: document.getElementById('editTurno').value,
        ubicacion: document.getElementById('editUbicacion').value.trim(),
        qty: document.getElementById('editQty').value
    };

    if (palletManager.updatePallet(id, updatedData)) {
        closeEditModal();
        populateFilters();
        applyFilters();
        updateDashboard(); // Actualizar dashboard después de editar
    if (typeof updateDuplicadosStats === 'function') {
        updateDuplicadosStats(); // Actualizar duplicados
    }
        showNotification('Pallet actualizado exitosamente', 'success');
    } else {
        alert('Error al actualizar el pallet');
    }
});

// Cerrar modal con el botón X
document.querySelector('.close-modal').addEventListener('click', closeEditModal);

// Cerrar modal con el botón Cancelar
document.getElementById('cancelEdit').addEventListener('click', closeEditModal);

// Cerrar modal al hacer clic fuera de él
document.getElementById('editModal').addEventListener('click', (e) => {
    if (e.target.id === 'editModal') {
        closeEditModal();
    }
});

// Gestión de ubicaciones
function renderUbicacionesList() {
    const container = document.getElementById('ubicacionesList');
    const ubicaciones = ubicacionManager.getUbicaciones();

    if (ubicaciones.length === 0) {
        container.innerHTML = '<p class="empty-state">No hay ubicaciones registradas</p>';
        return;
    }

    container.innerHTML = ubicaciones.map(ubicacion => `
        <div class="ubicacion-item ${ubicacion.esBin ? 'bin' : ''}">
            <div class="ubicacion-info">
                <span class="ubicacion-badge ${ubicacion.esBin ? 'bin' : 'normal'}">
                    ${ubicacion.esBin ? 'BIN' : 'NORMAL'}
                </span>
                <span>${ubicacion.codigo}</span>
            </div>
            <button class="ubicacion-delete" onclick="deleteUbicacion('${ubicacion.codigo}')">
                Eliminar
            </button>
        </div>
    `).join('');

    // Actualizar estadísticas
    const stats = ubicacionManager.getStats();
    document.getElementById('totalUbicaciones').textContent = stats.total;
    document.getElementById('totalUbicacionesBin').textContent = stats.bin;
    document.getElementById('totalUbicacionesNormales').textContent = stats.normales;
}

function updateUbicacionSelects() {
    const ubicaciones = ubicacionManager.getUbicaciones();
    const selects = [
        document.getElementById('ubicacion'),
        document.getElementById('editUbicacion')
    ];

    selects.forEach(select => {
        if (!select) return;

        const currentValue = select.value;
        select.innerHTML = '<option value="">Seleccione una ubicación</option>' +
            ubicaciones.map(u => `<option value="${u.codigo}">${u.codigo}</option>`).join('');

        if (currentValue) {
            select.value = currentValue;
        }
    });
}

function deleteUbicacion(codigo) {
    // Verificar si hay pallets usando esta ubicación
    const palletsEnUbicacion = palletManager.pallets.filter(p => p.ubicacion === codigo);

    if (palletsEnUbicacion.length > 0) {
        if (!confirm(`Hay ${palletsEnUbicacion.length} pallet(s) usando esta ubicación. ¿Desea eliminarla de todos modos?`)) {
            return;
        }
    }

    if (confirm(`¿Está seguro de eliminar la ubicación "${codigo}"?`)) {
        ubicacionManager.deleteUbicacion(codigo);
        renderUbicacionesList();
        updateUbicacionSelects();
        showNotification('Ubicación eliminada', 'success');
    }
}

// Formulario de agregar ubicación (desde configuración)
document.getElementById('ubicacionForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const codigo = document.getElementById('nuevaUbicacion').value.trim().toUpperCase();
    const esBin = document.getElementById('esUbicacionBin').value === 'true';

    if (ubicacionManager.addUbicacion(codigo, esBin)) {
        e.target.reset();
        renderUbicacionesList();
        updateUbicacionSelects();
        showNotification('Ubicación agregada exitosamente', 'success');
    } else {
        alert('Ya existe una ubicación con ese código');
    }
});

// Modal rápido de nueva ubicación
function openQuickUbicacionModal() {
    document.getElementById('quickUbicacionModal').classList.add('active');
    document.getElementById('quickNuevaUbicacion').focus();
}

function closeQuickUbicacionModal() {
    document.getElementById('quickUbicacionModal').classList.remove('active');
    document.getElementById('quickUbicacionForm').reset();
}

// Formulario de agregar ubicación rápida
document.getElementById('quickUbicacionForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const codigo = document.getElementById('quickNuevaUbicacion').value.trim().toUpperCase();
    const esBin = document.getElementById('quickEsUbicacionBin').value === 'true';

    if (ubicacionManager.addUbicacion(codigo, esBin)) {
        renderUbicacionesList();
        updateUbicacionSelects();

        // Seleccionar automáticamente la nueva ubicación
        const ubicacionSelect = document.getElementById('ubicacion');
        const editUbicacionSelect = document.getElementById('editUbicacion');

        if (ubicacionSelect) ubicacionSelect.value = codigo;
        if (editUbicacionSelect) editUbicacionSelect.value = codigo;

        closeQuickUbicacionModal();
        showNotification('Ubicación creada y seleccionada', 'success');
    } else {
        alert('Ya existe una ubicación con ese código');
    }
});

// Cerrar modal rápido con click fuera
document.getElementById('quickUbicacionModal').addEventListener('click', (e) => {
    if (e.target.id === 'quickUbicacionModal') {
        closeQuickUbicacionModal();
    }
});

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Establecer fecha actual por defecto
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('fecha').value = today;

    // Poblar filtros y renderizar tabla inicial
    populateFilters();
    applyFilters();

    // Renderizar ubicaciones
    renderUbicacionesList();
    updateUbicacionSelects();
});

// Estilos para animaciones de notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== IMPORTAR/EXPORTAR EXCEL ====================

let importedData = [];
let newUbicaciones = {}; // Para almacenar nuevas ubicaciones detectadas

// Función para normalizar valores de turno
function normalizeTurno(turno) {
    if (!turno) return 'Dia'; // Valor por defecto

    const turnoStr = String(turno).trim().toLowerCase();

    // Normalizar a "Dia"
    if (turnoStr === 'dia' ||
        turnoStr === 'day' ||
        turnoStr === 'matutino' ||
        turnoStr === 'morning' ||
        turnoStr === 'mañana' ||
        turnoStr === 'diurno' ||
        turnoStr === '1') {
        return 'Dia';
    }

    // Normalizar a "Noche"
    if (turnoStr === 'noche' ||
        turnoStr === 'night' ||
        turnoStr === 'nocturno' ||
        turnoStr === 'evening' ||
        turnoStr === 'tarde' ||
        turnoStr === '2') {
        return 'Noche';
    }

    // Si no coincide con ningún patrón, capitalizar la primera letra
    return turno.charAt(0).toUpperCase() + turno.slice(1).toLowerCase();
}

// Función para normalizar condiciones
function normalizeCondicion(condicion) {
    if (!condicion) return 'Pendiente'; // Valor por defecto

    const condStr = String(condicion).trim().toLowerCase();

    // Normalizar variaciones comunes
    const normalizaciones = {
        'bueno': 'Bueno',
        'good': 'Bueno',
        'ok': 'Bueno',
        'bien': 'Bueno',

        'malo': 'Dañado',
        'bad': 'Dañado',
        'danado': 'Dañado',
        'dañado': 'Dañado',
        'damaged': 'Dañado',

        'regular': 'Regular',
        'medio': 'Regular',
        'medium': 'Regular',

        'reparacion': 'Reparación',
        'reparación': 'Reparación',
        'repair': 'Reparación',

        'obsoleto': 'Obsoleto',
        'obsolete': 'Obsoleto',

        'pendiente': 'Pendiente',
        'pending': 'Pendiente'
    };

    // Si existe una normalización, usarla
    if (normalizaciones[condStr]) {
        return normalizaciones[condStr];
    }

    // Si no, capitalizar la primera letra
    return condicion.charAt(0).toUpperCase() + condicion.slice(1).toLowerCase();
}

// Manejar selección de archivo Excel
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('excelFileInput');
    if (fileInput) {
        fileInput.addEventListener('change', handleExcelFile);
    }
});

// Leer archivo Excel
function handleExcelFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Mostrar indicador de carga
    const previewDiv = document.getElementById('importPreview');
    const contentDiv = document.getElementById('importPreviewContent');
    previewDiv.style.display = 'block';
    contentDiv.innerHTML = '<p style="text-align: center; padding: 20px; color: var(--text-secondary);">📂 Leyendo archivo Excel...</p>';

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Leer la primera hoja
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];

            // Convertir a JSON
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            console.log('📊 Datos leídos del Excel:', jsonData.length, 'filas');
            console.log('📋 Primera fila:', jsonData[0]);

            if (jsonData.length === 0) {
                contentDiv.innerHTML = `
                    <div style="padding: 20px; text-align: center;">
                        <h3 style="color: var(--danger-color); margin-bottom: 12px;">❌ Archivo vacío</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 16px;">
                            El archivo Excel no contiene datos o no tiene el formato correcto.
                        </p>
                        <div style="text-align: left; background-color: var(--bg-color); padding: 12px; border-radius: 2px; font-size: 0.8125rem;">
                            <strong>Verifica que:</strong>
                            <ul style="margin: 8px 0; padding-left: 20px;">
                                <li>El archivo tenga una fila de encabezados</li>
                                <li>Haya al menos una fila de datos</li>
                                <li>Las columnas tengan nombres</li>
                            </ul>
                        </div>
                        <button class="btn btn-secondary" onclick="cancelImport()" style="margin-top: 16px;">Cerrar</button>
                    </div>
                `;
                return;
            }

            // Mostrar columnas detectadas
            const columnas = Object.keys(jsonData[0]);
            console.log('📋 Columnas detectadas:', columnas);

            // Procesar y validar datos
            processImportedData(jsonData, columnas);

        } catch (error) {
            console.error('Error al leer el archivo:', error);
            contentDiv.innerHTML = `
                <div style="padding: 20px; text-align: center;">
                    <h3 style="color: var(--danger-color); margin-bottom: 12px;">❌ Error al leer el archivo</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 16px;">
                        No se pudo leer el archivo Excel. Asegúrate de que sea un archivo válido (.xlsx o .xls).
                    </p>
                    <div style="text-align: left; background-color: #fff5f5; padding: 12px; border: 1px solid #feb2b2; border-radius: 2px; font-size: 0.75rem; margin-bottom: 16px;">
                        <strong>Error técnico:</strong><br>
                        <code>${error.message}</code>
                    </div>
                    <button class="btn btn-secondary" onclick="cancelImport()">Cerrar</button>
                </div>
            `;
        }
    };

    reader.onerror = function(error) {
        console.error('Error al leer el archivo:', error);
        contentDiv.innerHTML = `
            <div style="padding: 20px; text-align: center;">
                <h3 style="color: var(--danger-color); margin-bottom: 12px;">❌ Error al cargar el archivo</h3>
                <p style="color: var(--text-secondary);">No se pudo cargar el archivo. Intenta nuevamente.</p>
                <button class="btn btn-secondary" onclick="cancelImport()" style="margin-top: 16px;">Cerrar</button>
            </div>
        `;
    };

    reader.readAsArrayBuffer(file);

    // Limpiar el input para permitir cargar el mismo archivo de nuevo
    e.target.value = '';
}

// Procesar datos importados
function processImportedData(data, columnas) {
    importedData = [];
    newUbicaciones = {};
    const errors = [];
    const warnings = [];
    const duplicados = []; // Nueva variable para almacenar duplicados
    const ubicacionesExistentes = new Set(ubicacionManager.getUbicaciones().map(u => u.codigo));

    // Crear un mapa de pallets existentes con PalletID + Fecha como clave
    const palletsExistentesMap = new Map();
    palletManager.pallets.forEach(p => {
        const key = `${p.palletId}_${p.fecha}`;
        if (!palletsExistentesMap.has(key)) {
            palletsExistentesMap.set(key, []);
        }
        palletsExistentesMap.get(key).push(p);
    });

    console.log('🔍 Procesando', data.length, 'registros...');
    console.log('📋 Columnas disponibles:', columnas);

    data.forEach((row, index) => {
        const rowNum = index + 2; // +2 porque Excel empieza en 1 y tiene header

        // Mapear nombres de columnas (flexible para diferentes formatos)
        let pallet = {
            palletId: row['Pallet ID'] || row['PalletID'] || row['ID'] || row['pallet_id'],
            piezas: row['Piezas'] || row['Pieza'] || row['piezas'] || row['Descripcion'],
            condicion: row['Condición'] || row['Condicion'] || row['Estado'] || row['condicion'],
            area: row['Área'] || row['Area'] || row['area'] || row['Zona'],
            fecha: row['Fecha'] || row['fecha'],
            turno: row['Turno'] || row['turno'],
            ubicacion: row['Ubicación'] || row['Ubicacion'] || row['ubicacion'],
            qty: row['QTY'] || row['Cantidad'] || row['qty'] || row['cantidad']
        };

        // Asignar valores predeterminados para campos faltantes
        const missingFields = [];
        const today = new Date().toISOString().split('T')[0];

        if (!pallet.palletId) {
            pallet.palletId = `PLT-${Date.now()}-${index}`;
            missingFields.push('Pallet ID (generado automáticamente)');
        }
        if (!pallet.piezas) {
            pallet.piezas = 'Sin especificar';
            missingFields.push('Piezas');
        }
        if (!pallet.condicion) {
            pallet.condicion = 'Pendiente';
            missingFields.push('Condición');
        }
        if (!pallet.area) {
            pallet.area = 'Sin asignar';
            missingFields.push('Área');
        }
        if (!pallet.fecha) {
            pallet.fecha = today;
            missingFields.push('Fecha (se usó fecha actual)');
        }
        if (!pallet.turno) {
            pallet.turno = 'Dia';
            missingFields.push('Turno');
        }
        if (!pallet.ubicacion) {
            pallet.ubicacion = 'SIN-ASIGNAR';
            missingFields.push('Ubicación');
        }
        if (!pallet.qty) {
            pallet.qty = 1;
            missingFields.push('QTY');
        }

        // Registrar advertencia si faltaron campos
        if (missingFields.length > 0) {
            warnings.push(`Fila ${rowNum}: Campos faltantes completados con valores predeterminados: ${missingFields.join(', ')}`);
        }

        // Normalizar datos
        pallet.palletId = String(pallet.palletId).trim();
        pallet.piezas = String(pallet.piezas).trim();
        pallet.condicion = normalizeCondicion(pallet.condicion);
        pallet.area = String(pallet.area).trim();
        pallet.turno = normalizeTurno(pallet.turno);
        pallet.ubicacion = String(pallet.ubicacion).trim().toUpperCase(); // Ubicaciones en mayúsculas
        pallet.qty = parseInt(pallet.qty);

        // Validar fecha
        if (pallet.fecha) {
            // Si es un número de Excel (fecha serial), convertir
            if (typeof pallet.fecha === 'number') {
                const excelDate = XLSX.SSF.parse_date_code(pallet.fecha);
                pallet.fecha = `${excelDate.y}-${String(excelDate.m).padStart(2, '0')}-${String(excelDate.d).padStart(2, '0')}`;
            } else {
                // Intentar parsear fecha en diferentes formatos
                const dateStr = String(pallet.fecha);
                let parsedDate = null;

                // Formato YYYY-MM-DD
                if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
                    parsedDate = dateStr;
                }
                // Formato DD/MM/YYYY
                else if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
                    const [day, month, year] = dateStr.split('/');
                    parsedDate = `${year}-${month}-${day}`;
                }
                // Formato MM/DD/YYYY
                else if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateStr)) {
                    const parts = dateStr.split('/');
                    if (parts[0] > 12) {
                        // Es DD/MM/YYYY
                        parsedDate = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
                    } else {
                        // Es MM/DD/YYYY
                        parsedDate = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
                    }
                }

                if (!parsedDate) {
                    errors.push(`Fila ${rowNum}: Formato de fecha inválido`);
                    return;
                }

                pallet.fecha = parsedDate;
            }
        }

        // Validar QTY
        if (isNaN(pallet.qty) || pallet.qty < 1) {
            errors.push(`Fila ${rowNum}: QTY debe ser un número mayor a 0`);
            return;
        }

        // Verificar si el Pallet ID + Fecha ya existe (marcar como duplicado)
        const palletKey = `${pallet.palletId}_${pallet.fecha}`;
        if (palletsExistentesMap.has(palletKey)) {
            const existentes = palletsExistentesMap.get(palletKey);
            duplicados.push({
                nuevo: pallet,
                existentes: existentes,
                fila: rowNum
            });
            // Marcar el pallet como duplicado pero seguir procesándolo
            pallet.esDuplicado = true;
        }

        // Registrar nuevas ubicaciones (sin crearlas aún)
        if (!ubicacionesExistentes.has(pallet.ubicacion) && pallet.ubicacion !== 'SIN-ASIGNAR') {
            if (!newUbicaciones[pallet.ubicacion]) {
                // Detectar si es BIN por el nombre (varios patrones)
                const nombreUpper = pallet.ubicacion.toUpperCase();
                const esBin = nombreUpper.includes('BIN') ||
                              nombreUpper.includes('F0') ||  // Patrón común en ubicaciones BIN
                              nombreUpper.match(/[A-Z]\d{2}-F\d{3}/); // Ej: A01-F058-001

                newUbicaciones[pallet.ubicacion] = {
                    codigo: pallet.ubicacion,
                    esBin: esBin,
                    count: 1
                };
            } else {
                newUbicaciones[pallet.ubicacion].count++;
            }
            // Agregar temporalmente para validación
            ubicacionesExistentes.add(pallet.ubicacion);
        }

        importedData.push(pallet);
    });

    // Asegurar que existe la ubicación SIN-ASIGNAR
    if (!ubicacionesExistentes.has('SIN-ASIGNAR')) {
        ubicacionManager.addUbicacion('SIN-ASIGNAR', false);
    }

    console.log('✅ Registros procesados:', importedData.length);
    console.log('❌ Errores:', errors.length);
    console.log('⚠️ Advertencias:', warnings.length);
    console.log('🔄 Duplicados encontrados:', duplicados.length);

    // Mostrar resultados
    if (importedData.length === 0) {
        // Mostrar mensaje detallado de por qué falló
        const previewDiv = document.getElementById('importPreview');
        const contentDiv = document.getElementById('importPreviewContent');

        let html = `
            <div style="padding: 20px;">
                <h3 style="color: var(--danger-color); margin-bottom: 16px;">❌ No se pudo importar ningún registro</h3>

                <div style="background-color: var(--bg-color); padding: 16px; border-radius: 2px; margin-bottom: 16px;">
                    <h4 style="font-size: 0.9375rem; margin-bottom: 12px; font-weight: 600;">📊 Resumen:</h4>
                    <ul style="margin: 0; padding-left: 20px; font-size: 0.875rem; line-height: 1.8;">
                        <li>Filas en el archivo: <strong>${data.length}</strong></li>
                        <li>Registros válidos: <strong style="color: var(--danger-color);">0</strong></li>
                        <li>Registros omitidos: <strong>${errors.length}</strong></li>
                    </ul>
                </div>

                <div style="background-color: var(--bg-color); padding: 16px; border-radius: 2px; margin-bottom: 16px;">
                    <h4 style="font-size: 0.9375rem; margin-bottom: 12px; font-weight: 600;">🔍 Diagnóstico:</h4>
                    <p style="font-size: 0.875rem; margin-bottom: 12px; color: var(--text-secondary);">
                        Columnas detectadas en el archivo:
                    </p>
                    <div style="background-color: white; padding: 10px; border: 1px solid var(--border-color); border-radius: 2px; font-family: monospace; font-size: 0.75rem;">
                        ${columnas.join(', ')}
                    </div>
                    <p style="font-size: 0.8125rem; margin-top: 12px; color: var(--text-secondary);">
                        ℹ️ El sistema busca columnas con nombres como: <strong>Pallet ID, Piezas, Condición, Área, Fecha, Turno, Ubicación, QTY</strong>
                    </p>
                </div>
        `;

        if (errors.length > 0) {
            html += `
                <div style="max-height: 300px; overflow-y: auto; background-color: #fff5f5; padding: 12px; border: 1px solid #feb2b2; border-radius: 2px; margin-bottom: 16px;">
                    <h4 style="color: var(--danger-color); margin-bottom: 10px; font-size: 0.875rem;">Errores encontrados:</h4>
                    <ul style="margin: 0; padding-left: 20px; color: var(--text-secondary); font-size: 0.8125rem;">
                        ${errors.map(error => `<li style="margin-bottom: 4px;">${error}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        html += `
                <div style="background-color: #fffbeb; padding: 12px; border: 1px solid #fde68a; border-radius: 2px; margin-bottom: 16px;">
                    <strong style="font-size: 0.875rem;">💡 Recomendaciones:</strong>
                    <ul style="margin: 8px 0 0 0; padding-left: 20px; font-size: 0.8125rem; line-height: 1.8;">
                        <li>Descarga la plantilla de Excel y úsala como referencia</li>
                        <li>Verifica que la primera fila tenga los nombres de las columnas</li>
                        <li>Asegúrate de que los Pallet IDs no estén duplicados con los ya registrados</li>
                        <li>Si el problema persiste, abre la consola del navegador (F12) para ver más detalles</li>
                    </ul>
                </div>

                <button class="btn btn-secondary" onclick="cancelImport()">Cerrar</button>
            </div>
        `;

        contentDiv.innerHTML = html;
        previewDiv.style.display = 'block';
        return;
    }

    if (errors.length > 0 || warnings.length > 0 || duplicados.length > 0) {
        showImportErrors(errors, warnings, importedData.length, duplicados);
        // Mostrar también la vista previa si hay datos válidos
        if (importedData.length > 0) {
            showImportPreview(importedData, warnings, duplicados);
        }
    } else {
        showImportPreview(importedData, [], []);
    }
}

// Mostrar errores y advertencias de importación
function showImportErrors(errors, warnings, successCount, duplicados = []) {
    const previewDiv = document.getElementById('importPreview');
    const contentDiv = document.getElementById('importPreviewContent');

    let html = `
        <div style="margin-bottom: 16px;">
            <p style="color: var(--text-primary); font-weight: 600; margin-bottom: 8px;">
                ✅ ${successCount} registros listos para importar
                ${errors.length > 0 ? `| ❌ ${errors.length} registros omitidos` : ''}
                ${warnings.length > 0 ? `| ⚠️ ${warnings.length} advertencias` : ''}
                ${duplicados.length > 0 ? `| 🔄 ${duplicados.length} duplicados detectados` : ''}
            </p>
        </div>
    `;

    if (errors.length > 0) {
        html += `
            <div style="max-height: 200px; overflow-y: auto; background-color: #fff5f5; padding: 12px; border: 1px solid #feb2b2; border-radius: 2px; margin-bottom: 12px;">
                <h4 style="color: var(--danger-color); margin-bottom: 10px; font-size: 0.875rem;">❌ Registros Omitidos (${errors.length}):</h4>
                <ul style="margin: 0; padding-left: 20px; color: var(--text-secondary); font-size: 0.8125rem;">
                    ${errors.map(error => `<li style="margin-bottom: 4px;">${error}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (warnings.length > 0) {
        html += `
            <div style="max-height: 250px; overflow-y: auto; background-color: #fffbeb; padding: 12px; border: 1px solid #fde68a; border-radius: 2px; margin-bottom: 12px;">
                <h4 style="color: #d97706; margin-bottom: 10px; font-size: 0.875rem;">⚠️ Advertencias (${warnings.length}):</h4>
                <p style="color: var(--text-secondary); font-size: 0.8125rem; margin-bottom: 8px;">
                    Estos registros se importarán con valores predeterminados. Puedes editarlos después desde la aplicación.
                </p>
                <ul style="margin: 0; padding-left: 20px; color: var(--text-secondary); font-size: 0.8125rem;">
                    ${warnings.map(warning => `<li style="margin-bottom: 4px;">${warning}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (duplicados.length > 0) {
        html += `
            <div style="background-color: #f0f9ff; padding: 14px; border: 1px solid #0ea5e9; border-radius: 2px; margin-bottom: 12px;">
                <h4 style="color: #0284c7; margin-bottom: 10px; font-size: 0.875rem; font-weight: 600;">
                    🔄 Duplicados Detectados (${duplicados.length})
                </h4>
                <p style="color: var(--text-secondary); font-size: 0.8125rem; margin-bottom: 12px;">
                    Estos registros tienen el mismo PalletID y Fecha que pallets ya existentes en el sistema.
                    Se importarán de todas formas para llevar un control total de duplicados.
                </p>
                <div style="max-height: 300px; overflow-y: auto; background-color: white; border: 1px solid var(--border-color); border-radius: 2px;">
                    <table style="width: 100%; font-size: 0.75rem; border-collapse: collapse;">
                        <thead style="position: sticky; top: 0; background: #e0f2fe;">
                            <tr>
                                <th style="padding: 8px; text-align: left; border-bottom: 2px solid #0ea5e9; font-weight: 600;">Fila</th>
                                <th style="padding: 8px; text-align: left; border-bottom: 2px solid #0ea5e9; font-weight: 600;">Pallet ID</th>
                                <th style="padding: 8px; text-align: left; border-bottom: 2px solid #0ea5e9; font-weight: 600;">Fecha</th>
                                <th style="padding: 8px; text-align: left; border-bottom: 2px solid #0ea5e9; font-weight: 600;">Piezas (Nuevo)</th>
                                <th style="padding: 8px; text-align: left; border-bottom: 2px solid #0ea5e9; font-weight: 600;">Ubicación (Nuevo)</th>
                                <th style="padding: 8px; text-align: left; border-bottom: 2px solid #0ea5e9; font-weight: 600;">QTY (Nuevo)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${duplicados.map((dup, idx) => `
                                <tr style="border-bottom: 1px solid var(--border-light); ${idx % 2 === 0 ? 'background-color: #f8fafc;' : ''}">
                                    <td style="padding: 8px;">${dup.fila}</td>
                                    <td style="padding: 8px; font-weight: 600;">${dup.nuevo.palletId}</td>
                                    <td style="padding: 8px;">${formatDate(dup.nuevo.fecha)}</td>
                                    <td style="padding: 8px;">${dup.nuevo.piezas}</td>
                                    <td style="padding: 8px;">${dup.nuevo.ubicacion}</td>
                                    <td style="padding: 8px;">${dup.nuevo.qty}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <p style="margin-top: 10px; color: var(--text-secondary); font-size: 0.75rem;">
                    💡 Al confirmar la importación, estos duplicados se agregarán al sistema para mantener un registro completo.
                </p>
            </div>
        `;
    }

    if (successCount > 0) {
        html += `
            <p style="margin-top: 12px; color: var(--text-primary); font-size: 0.875rem; font-weight: 500;">
                💡 Puedes revisar los registros en la vista previa y luego confirmar la importación.
            </p>
        `;
    } else {
        html += `
            <p style="margin-top: 12px; color: var(--danger-color); font-size: 0.875rem;">
                No hay registros válidos para importar. Verifica el archivo y vuelve a intentarlo.
            </p>
        `;
    }

    contentDiv.innerHTML = html;
    previewDiv.style.display = 'block';
}

// Mostrar vista previa de importación
function showImportPreview(data, warnings, duplicados = []) {
    const previewDiv = document.getElementById('importPreview');
    const contentDiv = document.getElementById('importPreviewContent');

    const newUbicacionesCount = Object.keys(newUbicaciones).length;
    const duplicadosCount = duplicados ? duplicados.length : 0;

    let html = `
        <p style="color: var(--text-primary); font-weight: 600; margin-bottom: 12px;">
            ✅ ${data.length} registros listos para importar
            ${warnings && warnings.length > 0 ? `| ⚠️ ${warnings.length} con valores predeterminados` : ''}
            ${duplicadosCount > 0 ? `| 🔄 ${duplicadosCount} duplicados (se importarán)` : ''}
            ${newUbicacionesCount > 0 ? `| 🆕 ${newUbicacionesCount} ubicaciones nuevas` : ''}
        </p>
    `;

    // Mostrar nuevas ubicaciones si existen
    if (newUbicacionesCount > 0) {
        html += `
            <div style="background-color: #f0f9ff; padding: 14px; border: 1px solid #bae6fd; border-radius: 2px; margin-bottom: 16px;">
                <h4 style="color: var(--info-color); margin-bottom: 10px; font-size: 0.875rem; font-weight: 600;">
                    🆕 Nuevas Ubicaciones Detectadas (${newUbicacionesCount})
                </h4>
                <p style="color: var(--text-secondary); font-size: 0.8125rem; margin-bottom: 12px;">
                    Estas ubicaciones no existen en el sistema y se crearán automáticamente.
                    Verifica si son BIN o Workcenter y ajusta si es necesario:
                </p>
                <div style="display: grid; gap: 8px;">
                    ${Object.values(newUbicaciones).map(ub => `
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background-color: white; border: 1px solid var(--border-color); border-radius: 2px;">
                            <div style="flex: 1;">
                                <span style="font-weight: 500; font-size: 0.875rem;">${ub.codigo}</span>
                                <span style="color: var(--text-tertiary); font-size: 0.75rem; margin-left: 8px;">(${ub.count} pallet${ub.count > 1 ? 's' : ''})</span>
                            </div>
                            <div style="display: flex; gap: 8px; align-items: center;">
                                <label style="display: flex; align-items: center; gap: 4px; font-size: 0.8125rem; cursor: pointer;">
                                    <input type="radio" name="ubicacion_${ub.codigo}" value="workcenter" ${!ub.esBin ? 'checked' : ''}
                                           onchange="updateUbicacionType('${ub.codigo}', false)"
                                           style="cursor: pointer;">
                                    <span>Workcenter</span>
                                </label>
                                <label style="display: flex; align-items: center; gap: 4px; font-size: 0.8125rem; cursor: pointer;">
                                    <input type="radio" name="ubicacion_${ub.codigo}" value="bin" ${ub.esBin ? 'checked' : ''}
                                           onchange="updateUbicacionType('${ub.codigo}', true)"
                                           style="cursor: pointer;">
                                    <span style="font-weight: 500;">BIN</span>
                                </label>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    if (warnings && warnings.length > 0) {
        html += `
            <div style="background-color: #fffbeb; padding: 10px 12px; border: 1px solid #fde68a; border-radius: 2px; margin-bottom: 12px;">
                <p style="color: #d97706; font-size: 0.8125rem; font-weight: 500; margin: 0;">
                    ⚠️ Algunos registros tienen campos faltantes y se completaron con valores predeterminados. Puedes editarlos después.
                </p>
            </div>
        `;
    }

    // Mostrar tabla de duplicados si existen
    if (duplicados && duplicados.length > 0) {
        html += `
            <div style="background-color: #f0f9ff; padding: 14px; border: 1px solid #0ea5e9; border-radius: 2px; margin-bottom: 16px;">
                <h4 style="color: #0284c7; margin-bottom: 10px; font-size: 0.875rem; font-weight: 600;">
                    🔄 Duplicados Detectados (${duplicados.length})
                </h4>
                <p style="color: var(--text-secondary); font-size: 0.8125rem; margin-bottom: 12px;">
                    Los siguientes registros tienen el mismo <strong>PalletID + Fecha</strong> que pallets ya existentes.
                    Se importarán todos para llevar un control total.
                </p>
                <div style="max-height: 300px; overflow-y: auto; background-color: white; border: 1px solid var(--border-color); border-radius: 2px;">
                    <table style="width: 100%; font-size: 0.75rem; border-collapse: collapse;">
                        <thead style="position: sticky; top: 0; background: #e0f2fe;">
                            <tr>
                                <th style="padding: 6px 8px; text-align: left; border-bottom: 2px solid #0ea5e9; font-weight: 600;">Pallet ID</th>
                                <th style="padding: 6px 8px; text-align: left; border-bottom: 2px solid #0ea5e9; font-weight: 600;">Fecha</th>
                                <th style="padding: 6px 8px; text-align: left; border-bottom: 2px solid #0ea5e9; font-weight: 600;">Piezas</th>
                                <th style="padding: 6px 8px; text-align: left; border-bottom: 2px solid #0ea5e9; font-weight: 600;">Ubicación</th>
                                <th style="padding: 6px 8px; text-align: center; border-bottom: 2px solid #0ea5e9; font-weight: 600;">QTY</th>
                                <th style="padding: 6px 8px; text-align: left; border-bottom: 2px solid #0ea5e9; font-weight: 600;">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${duplicados.map((dup, idx) => `
                                <tr style="border-bottom: 1px solid var(--border-light); background-color: ${idx % 2 === 0 ? '#f8fafc' : 'white'};">
                                    <td style="padding: 6px 8px; font-weight: 600;">${dup.nuevo.palletId}</td>
                                    <td style="padding: 6px 8px;">${formatDate(dup.nuevo.fecha)}</td>
                                    <td style="padding: 6px 8px;">${dup.nuevo.piezas}</td>
                                    <td style="padding: 6px 8px;">${dup.nuevo.ubicacion}</td>
                                    <td style="padding: 6px 8px; text-align: center;">${dup.nuevo.qty}</td>
                                    <td style="padding: 6px 8px;">
                                        <span style="background-color: #dbeafe; color: #1e40af; padding: 2px 6px; border-radius: 2px; font-size: 0.7rem; font-weight: 500;">
                                            DUPLICADO
                                        </span>
                                    </td>
                                </tr>
                                ${dup.existentes.map(exist => `
                                    <tr style="border-bottom: 1px solid var(--border-light); background-color: #fef9c3;">
                                        <td style="padding: 4px 8px 4px 24px; font-size: 0.7rem; color: var(--text-secondary);">${exist.palletId}</td>
                                        <td style="padding: 4px 8px; font-size: 0.7rem; color: var(--text-secondary);">${formatDate(exist.fecha)}</td>
                                        <td style="padding: 4px 8px; font-size: 0.7rem; color: var(--text-secondary);">${exist.piezas}</td>
                                        <td style="padding: 4px 8px; font-size: 0.7rem; color: var(--text-secondary);">${exist.ubicacion}</td>
                                        <td style="padding: 4px 8px; text-align: center; font-size: 0.7rem; color: var(--text-secondary);">${exist.qty}</td>
                                        <td style="padding: 4px 8px;">
                                            <span style="color: #854d0e; font-size: 0.65rem; font-weight: 500;">
                                                YA EXISTE
                                            </span>
                                        </td>
                                    </tr>
                                `).join('')}
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <p style="margin-top: 10px; color: var(--text-secondary); font-size: 0.75rem;">
                    💡 Los registros con fondo amarillo ya existen en el sistema. Los nuevos duplicados se agregarán al confirmar.
                </p>
            </div>
        `;
    }

    // Función para resaltar valores predeterminados
    const highlightDefault = (value, defaultValues) => {
        if (defaultValues.includes(value)) {
            return `<span style="background-color: #fef3c7; padding: 2px 4px; border-radius: 2px;" title="Valor predeterminado - Edítalo después">${value}</span>`;
        }
        return value;
    };

    html += `
        <div style="max-height: 400px; overflow-y: auto; background-color: white; border: 1px solid var(--border-color); border-radius: 2px;">
            <table style="width: 100%; font-size: 0.8125rem;">
                <thead style="position: sticky; top: 0; background: var(--bg-secondary);">
                    <tr>
                        <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">Pallet ID</th>
                        <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">Piezas</th>
                        <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">Condición</th>
                        <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">Área</th>
                        <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">Fecha</th>
                        <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">Turno</th>
                        <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">Ubicación</th>
                        <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">QTY</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.slice(0, 50).map((pallet, idx) => {
                        const esDuplicado = pallet.esDuplicado;
                        const bgColor = esDuplicado ? '#dbeafe' : (idx % 2 === 0 ? 'var(--surface-elevated)' : '');
                        const palletIdStyle = esDuplicado ? 'font-weight: 600; color: #1e40af;' : '';
                        return `
                        <tr style="border-bottom: 1px solid var(--border-light); ${bgColor ? `background-color: ${bgColor};` : ''}">
                            <td style="padding: 8px; ${palletIdStyle}">
                                ${pallet.palletId.startsWith('PLT-') && pallet.palletId.length > 10 ? highlightDefault(pallet.palletId, ['auto']) : pallet.palletId}
                                ${esDuplicado ? '<span style="margin-left: 6px; background-color: #1e40af; color: white; padding: 2px 5px; border-radius: 2px; font-size: 0.65rem; font-weight: 600;">DUP</span>' : ''}
                            </td>
                            <td style="padding: 8px;">${highlightDefault(pallet.piezas, ['Sin especificar'])}</td>
                            <td style="padding: 8px;">${highlightDefault(pallet.condicion, ['Pendiente'])}</td>
                            <td style="padding: 8px;">${highlightDefault(pallet.area, ['Sin asignar'])}</td>
                            <td style="padding: 8px;">${formatDate(pallet.fecha)}</td>
                            <td style="padding: 8px;">${pallet.turno}</td>
                            <td style="padding: 8px;">${highlightDefault(pallet.ubicacion, ['SIN-ASIGNAR'])}</td>
                            <td style="padding: 8px;">${pallet.qty}</td>
                        </tr>
                    `;}).join('')}
                </tbody>
            </table>
        </div>
        ${data.length > 50 ? `<p style="margin-top: 8px; color: var(--text-secondary); font-size: 0.8125rem;">Mostrando primeros 50 de ${data.length} registros</p>` : ''}
        <div style="margin-top: 10px; padding: 10px; background-color: #f8fafc; border-radius: 2px; font-size: 0.75rem; color: var(--text-secondary);">
            <p style="margin: 0 0 6px 0;">💡 <strong>Leyenda:</strong></p>
            <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                <li>Valores en <span style="background-color: #fef3c7; padding: 1px 3px;">amarillo</span>: Valores predeterminados (puedes editarlos después)</li>
                ${duplicados && duplicados.length > 0 ? '<li>Filas con fondo <span style="background-color: #dbeafe; padding: 1px 3px;">azul</span> y etiqueta <span style="background-color: #1e40af; color: white; padding: 1px 4px; font-weight: 600;">DUP</span>: Pallets duplicados (mismo ID + Fecha). Se importarán todos para control total.</li>' : ''}
            </ul>
        </div>
    `;

    contentDiv.innerHTML = html;
    previewDiv.style.display = 'block';
}

// Confirmar importación
function confirmImport() {
    if (importedData.length === 0) {
        alert('No hay datos para importar');
        return;
    }

    // Crear nuevas ubicaciones primero
    let ubicacionesCreadas = 0;
    Object.values(newUbicaciones).forEach(ub => {
        if (ubicacionManager.addUbicacion(ub.codigo, ub.esBin)) {
            ubicacionesCreadas++;
        }
    });

    // Asegurar que existe SIN-ASIGNAR
    if (!ubicacionManager.getUbicaciones().some(u => u.codigo === 'SIN-ASIGNAR')) {
        ubicacionManager.addUbicacion('SIN-ASIGNAR', false);
    }

    // Agregar todos los pallets
    let successCount = 0;
    importedData.forEach(pallet => {
        if (palletManager.addPallet(pallet)) {
            successCount++;
        }
    });

    // Actualizar UI
    populateFilters();
    applyFilters();
    updateUbicacionSelects();
    renderUbicacionesList();
    updateDashboard(); // Actualizar dashboard con los nuevos datos
    if (typeof updateDuplicadosStats === 'function') {
        updateDuplicadosStats(); // Actualizar duplicados
    }

    // Limpiar vista previa
    cancelImport();

    // Mensaje de éxito con detalles
    let mensaje = `✅ ${successCount} pallets importados exitosamente`;
    if (ubicacionesCreadas > 0) {
        mensaje += `\n🆕 ${ubicacionesCreadas} ubicaciones creadas`;
    }
    mensaje += `\n📊 Dashboard actualizado con los nuevos datos`;
    showNotification(mensaje, 'success');
}

// Actualizar tipo de ubicación
function updateUbicacionType(codigo, esBin) {
    if (newUbicaciones[codigo]) {
        newUbicaciones[codigo].esBin = esBin;
    }
}

// Cancelar importación
function cancelImport() {
    document.getElementById('importPreview').style.display = 'none';
    document.getElementById('importPreviewContent').innerHTML = '';
    importedData = [];
    newUbicaciones = {};
}

// Exportar datos a Excel
function exportToExcel() {
    if (palletManager.pallets.length === 0) {
        alert('No hay datos para exportar');
        return;
    }

    // Preparar datos para exportar
    const exportData = palletManager.pallets.map(pallet => ({
        'Pallet ID': pallet.palletId,
        'Piezas': pallet.piezas,
        'Condición': pallet.condicion,
        'Área': pallet.area,
        'Fecha': pallet.fecha,
        'Turno': pallet.turno,
        'Ubicación': pallet.ubicacion,
        'QTY': pallet.qty
    }));

    // Crear libro de Excel
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(exportData);

    // Ajustar ancho de columnas
    ws['!cols'] = [
        { wch: 15 },  // Pallet ID
        { wch: 30 },  // Piezas
        { wch: 15 },  // Condición
        { wch: 20 },  // Área
        { wch: 12 },  // Fecha
        { wch: 10 },  // Turno
        { wch: 25 },  // Ubicación
        { wch: 8 }    // QTY
    ];

    XLSX.utils.book_append_sheet(wb, ws, 'Pallets');

    // Descargar archivo
    const fecha = new Date().toISOString().split('T')[0];
    XLSX.writeFile(wb, `Pallets_${fecha}.xlsx`);

    showNotification('✅ Datos exportados exitosamente', 'success');
}

// Descargar plantilla de Excel
function downloadExcelTemplate() {
    const templateData = [
        {
            'Pallet ID': 'PLT-001',
            'Piezas': 'Ejemplo de Piezas',
            'Condición': 'Bueno',
            'Área': 'Almacén',
            'Fecha': '2024-01-15',
            'Turno': 'Dia',
            'Ubicación': 'MTY-WAREHOUSE-A1',
            'QTY': 100
        },
        {
            'Pallet ID': 'PLT-002',
            'Piezas': 'Otro Ejemplo',
            'Condición': 'Regular',
            'Área': 'Producción',
            'Fecha': '2024-01-16',
            'Turno': 'Noche',
            'Ubicación': 'A01-F058-001',
            'QTY': 50
        },
        {
            'Pallet ID': 'PLT-003',
            'Piezas': '',
            'Condición': '',
            'Área': '',
            'Fecha': '',
            'Turno': '',
            'Ubicación': '',
            'QTY': ''
        }
    ];

    // Crear hoja de instrucciones
    const instrucciones = [
        ['INSTRUCCIONES DE USO'],
        [''],
        ['1. Los campos pueden estar vacíos, se asignarán valores predeterminados:'],
        ['   - Pallet ID: Se genera automáticamente si está vacío'],
        ['   - Piezas: "Sin especificar"'],
        ['   - Condición: "Pendiente"'],
        ['   - Área: "Sin asignar"'],
        ['   - Fecha: Fecha actual'],
        ['   - Turno: "Dia"'],
        ['   - Ubicación: "SIN-ASIGNAR"'],
        ['   - QTY: 1'],
        [''],
        ['2. NORMALIZACIÓN AUTOMÁTICA:'],
        ['   TURNOS - Todas estas variaciones se unifican:'],
        ['     • "Dia", "Day", "Matutino", "Morning", "Mañana", "1" → "Dia"'],
        ['     • "Noche", "Night", "Nocturno", "Evening", "2" → "Noche"'],
        ['   CONDICIONES - Variaciones comunes se unifican:'],
        ['     • "Bueno", "Good", "OK", "Bien" → "Bueno"'],
        ['     • "Malo", "Bad", "Dañado", "Danado", "Damaged" → "Dañado"'],
        ['     • "Reparacion", "Reparación", "Repair" → "Reparación"'],
        ['   UBICACIONES - Se convierten a mayúsculas automáticamente'],
        [''],
        ['3. Puedes editar los registros después de importarlos desde la aplicación web.'],
        [''],
        ['4. Los nombres de columnas son flexibles (acepta variaciones).'],
        [''],
        ['5. El único error crítico es tener un Pallet ID duplicado.'],
        [''],
        ['6. UBICACIONES NUEVAS:'],
        ['   - Las ubicaciones nuevas se detectan automáticamente'],
        ['   - El sistema intenta identificar si son BIN o Workcenter por el nombre'],
        ['   - Patrones BIN detectados: contiene "BIN", "F0", o formato A##-F###-###'],
        ['   - Antes de importar, podrás revisar y ajustar el tipo de cada ubicación nueva'],
        ['   - Ubicaciones BIN se cuentan en las estadísticas especiales del dashboard'],
        [''],
        ['7. Formatos de fecha aceptados: YYYY-MM-DD, DD/MM/YYYY, o formato Excel.']
    ];

    const wb = XLSX.utils.book_new();

    // Agregar hoja de instrucciones
    const wsInstr = XLSX.utils.aoa_to_sheet(instrucciones);
    wsInstr['!cols'] = [{ wch: 80 }];
    XLSX.utils.book_append_sheet(wb, wsInstr, 'Instrucciones');

    // Agregar hoja de plantilla
    const ws = XLSX.utils.json_to_sheet(templateData);
    ws['!cols'] = [
        { wch: 15 },
        { wch: 30 },
        { wch: 15 },
        { wch: 20 },
        { wch: 12 },
        { wch: 10 },
        { wch: 25 },
        { wch: 8 }
    ];
    XLSX.utils.book_append_sheet(wb, ws, 'Plantilla');

    XLSX.writeFile(wb, 'Plantilla_Pallets.xlsx');

    showNotification('✅ Plantilla descargada con instrucciones', 'success');
}
