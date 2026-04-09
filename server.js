const express = require("express");
const mysql = require("mysql2");
const app = express();

// Conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",        // tu contraseña
  database: "compumundo"
});

db.connect(err => {
  if (err) {
    console.error("Error al conectar a MySQL:", err);
    return;
  }
  console.log("Conectado a MySQL");
});

// Servir archivos estáticos
app.use(express.static("public"));

// Todos los productos
app.get("/productos", (req, res) => {
  db.query("SELECT * FROM productos", (err, result) => {
    if (err) return res.status(500).json({ error: "Error al obtener productos" });
    res.json(result);
  });
});

// Producto por ID (Cod_Producto)
app.get("/producto/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM productos WHERE Cod_Producto = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Error al obtener producto" });
    if (result.length === 0) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(result[0]);
  });
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});