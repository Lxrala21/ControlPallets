-- Create database
CREATE DATABASE IF NOT EXISTS controlpallets_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE controlpallets_db;

-- Table: ubicaciones
CREATE TABLE IF NOT EXISTS ubicaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    es_bin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_codigo (codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: pallets
CREATE TABLE IF NOT EXISTS pallets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pallet_id VARCHAR(100) NOT NULL UNIQUE,
    piezas VARCHAR(255) NOT NULL,
    condicion ENUM('Bueno', 'Dañado', 'Reparación', 'Obsoleto') NOT NULL,
    area VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL,
    turno ENUM('Matutino', 'Vespertino', 'Nocturno') NOT NULL,
    ubicacion VARCHAR(100) NOT NULL,
    qty INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_pallet_id (pallet_id),
    INDEX idx_fecha (fecha),
    INDEX idx_condicion (condicion),
    INDEX idx_area (area),
    INDEX idx_turno (turno)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default ubicaciones
INSERT INTO ubicaciones (codigo, es_bin) VALUES
('312578-0014', 0),
('A01-F001-001', 1),
('A01-F001-002', 1),
('A01-F001-003', 1),
('A01-F001-004', 1),
('A01-F001-005', 1),
('A01-F001-006', 1),
('A01-F001-007', 1),
('A01-F001-008', 1),
('A01-F001-009', 1),
('A01-F001-010', 1),
('A01-F001-011', 1),
('A01-F001-012', 1),
('A01-F001-013', 1),
('A01-F001-014', 1),
('A01-F001-015', 1),
('A01-F001-016', 1),
('A01-F001-017', 1),
('A01-F001-018', 1),
('A01-F001-019', 1),
('A01-F001-020', 1),
('A01-F002-001', 1),
('A01-F002-002', 1),
('A01-F002-003', 1),
('A01-F002-004', 1),
('A01-F002-005', 1),
('A01-F002-006', 1),
('A01-F002-007', 1),
('A01-F002-008', 1),
('A01-F002-009', 1),
('A01-F002-010', 1),
('A01-F002-011', 1),
('A01-F002-012', 1),
('A01-F002-013', 1),
('A01-F002-014', 1),
('A01-F002-015', 1),
('A01-F002-016', 1),
('A01-F002-017', 1),
('A01-F002-018', 1),
('A01-F002-019', 1),
('A01-F002-020', 1)
ON DUPLICATE KEY UPDATE codigo=codigo;

SELECT 'Database and tables created successfully!' AS message;
