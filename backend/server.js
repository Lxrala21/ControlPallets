const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const palletsRoutes = require('./routes/pallets');
const ubicacionesRoutes = require('./routes/ubicaciones');

// Use routes
app.use('/api/pallets', palletsRoutes);
app.use('/api/ubicaciones', ubicacionesRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'ControlPallets API is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📊 API endpoints:`);
    console.log(`   - GET    /api/health`);
    console.log(`   - GET    /api/pallets`);
    console.log(`   - POST   /api/pallets`);
    console.log(`   - PUT    /api/pallets/:id`);
    console.log(`   - DELETE /api/pallets/:id`);
    console.log(`   - GET    /api/ubicaciones`);
    console.log(`   - POST   /api/ubicaciones`);
});
