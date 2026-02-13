const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all ubicaciones
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM ubicaciones ORDER BY codigo ASC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching ubicaciones:', error);
        res.status(500).json({ error: 'Error fetching ubicaciones' });
    }
});

// POST create new ubicacion
router.post('/', async (req, res) => {
    try {
        const { codigo, esBin } = req.body;

        if (!codigo || esBin === undefined) {
            return res.status(400).json({ error: 'Codigo and esBin are required' });
        }

        // Check if codigo already exists
        const [existing] = await db.query('SELECT id FROM ubicaciones WHERE codigo = ?', [codigo]);
        if (existing.length > 0) {
            return res.status(409).json({ error: 'Ubicacion already exists' });
        }

        const [result] = await db.query(
            'INSERT INTO ubicaciones (codigo, es_bin) VALUES (?, ?)',
            [codigo, esBin ? 1 : 0]
        );

        res.status(201).json({
            id: result.insertId,
            message: 'Ubicacion created successfully'
        });
    } catch (error) {
        console.error('Error creating ubicacion:', error);
        res.status(500).json({ error: 'Error creating ubicacion' });
    }
});

// DELETE ubicacion
router.delete('/:id', async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM ubicaciones WHERE id = ?', [req.params.id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Ubicacion not found' });
        }

        res.json({ message: 'Ubicacion deleted successfully' });
    } catch (error) {
        console.error('Error deleting ubicacion:', error);
        res.status(500).json({ error: 'Error deleting ubicacion' });
    }
});

module.exports = router;
