const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 🔥 Pool de conexiones (estable)
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'compumundo',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 🧪 Ruta test
app.get('/', (req, res) => {
  res.send('✅ API funcionando');
});

// Servir archivos estáticos
app.use(express.static("public"));


// 🔥 TRAER TODOS LOS PRODUCTOS
app.get('/index', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM productos');
    res.json(rows);
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({
      error: 'Error en la base de datos',
      mensaje: error.message
    });
  }
});

// 🚀 Levantar servidor
app.listen(PORT, () => {
  console.log(`🚀 http://localhost:${PORT}`);
});