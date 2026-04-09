import { supabase } from './config.js';

async function cargarCatalogo() {
  // 1. Pedimos los datos a la tabla 'productos' en la nube
  const { data: productos, error } = await supabase
    .from('productos')
    .select('*');

  if (error) return console.error("Error:", error);

  const contenedor = document.getElementById('contenedor');
  
  // 2. Generamos las cards automáticamente
  productos.forEach(p => {
    contenedor.innerHTML += `
      <a href="detalle.html?id=${p.id}">
        <div class="card">
          <img src="${p.imagen_url}" width="200">
          <h3>${p.nombre}</h3>
          <p>$${p.precio}</p>
        </div>
      </a>`;
  });
}

cargarCatalogo();