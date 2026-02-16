const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all pallets
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM pallets ORDER BY fecha DESC, id DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching pallets:', error);
        res.status(500).json({ error: 'Error fetching pallets' });
    }
});

// GET single pallet by ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM pallets WHERE id = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Pallet not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Error fetching pallet:', error);
        res.status(500).json({ error: 'Error fetching pallet' });
    }
});

// POST create new pallet
router.post('/', async (req, res) => {
    try {
        const { palletId, piezas, condicion, area, fecha, turno, ubicacion, qty } = req.body;

        // Validate required fields
        if (!palletId || !piezas || !condicion || !area || !fecha || !turno || !ubicacion || qty === undefined) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // PERMITIR DUPLICADOS: No validar si el pallet_id existe
        // Los duplicados se manejan en la pestaña "Duplicados" del frontend

        const [result] = await db.query(
            'INSERT INTO pallets (pallet_id, piezas, condicion, area, fecha, turno, ubicacion, qty) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [palletId, piezas, condicion, area, fecha, turno, ubicacion, qty]
        );

        res.status(201).json({
            id: result.insertId,
            message: 'Pallet created successfully'
        });
    } catch (error) {
        console.error('Error creating pallet:', error);
        res.status(500).json({ error: 'Error creating pallet' });
    }
});

// PUT update pallet
router.put('/:id', async (req, res) => {
    try {
        const { palletId, piezas, condicion, area, fecha, turno, ubicacion, qty } = req.body;

        const [result] = await db.query(
            'UPDATE pallets SET pallet_id = ?, piezas = ?, condicion = ?, area = ?, fecha = ?, turno = ?, ubicacion = ?, qty = ? WHERE id = ?',
            [palletId, piezas, condicion, area, fecha, turno, ubicacion, qty, req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Pallet not found' });
        }

        res.json({ message: 'Pallet updated successfully' });
    } catch (error) {
        console.error('Error updating pallet:', error);
        res.status(500).json({ error: 'Error updating pallet' });
    }
});

// DELETE pallet
router.delete('/:id', async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM pallets WHERE id = ?', [req.params.id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Pallet not found' });
        }

        res.json({ message: 'Pallet deleted successfully' });
    } catch (error) {
        console.error('Error deleting pallet:', error);
        res.status(500).json({ error: 'Error deleting pallet' });
    }
});

module.exports = router;
