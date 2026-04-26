const express = require("express");
const mysql = require("mysql2");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "compumundo"
});

db.connect(err => {
  if (err) {
    console.error("Error al conectar a MySQL:", err);
    return;
  }
  console.log("Conectado a MySQL");
});


const path = require('path');

// Primero la raíz (index.html)
app.use(express.static(__dirname));

// Después la carpeta public
app.use(express.static(path.join(__dirname, 'public')));



app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.get("/productos", (req, res) => {
  db.query("SELECT * FROM productos", (err, result) => {
    if (err) return res.status(500).json({ error: "Error al obtener productos" });
    res.json(result);
  });
});

app.get("/producto/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM productos WHERE Cod_Producto = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Error al obtener producto" });
    if (result.length === 0) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(result[0]);
  });
});

app.get("/buscar", (req, res) => {
  const { q } = req.query;
  if (!q || q.trim() === "") {
    return res.status(400).json({ error: "Ingresá un nombre para buscar." });
  }
  db.query(
    "SELECT Cod_Producto, Producto, Precio, Descripcion, Imagen, Categoria FROM productos WHERE Producto LIKE ? OR Categoria LIKE ?",
    [`%${q.trim()}%`, `%${q.trim()}%`],
    (err, result) => {
      if (err) return res.status(500).json({ error: "Error al buscar." });
      if (result.length === 0) return res.status(404).json({ error: "Producto no encontrado." });
      res.json(result);
    }
  );
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});