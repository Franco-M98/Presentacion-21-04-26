document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) return;

  fetch(`http://localhost:3000/producto/${id}`)
    .then(res => res.json())
    .then(data => {
      const cont = document.getElementById("producto");
      if (!cont) return;

      if (data.error) {
        cont.innerHTML = data.error;
      } else {
        cont.innerHTML = `
          <div class="breadcrumb-bar">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a class="text-dark" href="index.html">Inicio</a></li>
                <li class="breadcrumb-item">${data.Categoria}</li>
                <li class="breadcrumb-item active" aria-current="page">${data.Producto}</li>
              </ol>
            </nav>
          </div>
          <div class="tarjeta">
            <div class="tarjeta-imagen"> 
              <img src="${data.Imagen}" alt="${data.Producto}">
            </div>
            <div class="tarjeta-content">
              <span class="badge1">${data.Categoria}</span>
              <h3 class="producto-title">${data.Producto}</h3>
              <p class="producto-description">${data.Descripcion || 'Sin descripción disponible'}</p>
              <hr class="divider">
              <div class="precio-row">
                <p class="precio">$${parseFloat(data.Precio).toLocaleString('es-AR')}</p>
                <button class="boton-add">Comprar</button>
              </div>
            </div>
          </div>
        `;
      }
    })
    .catch(err => console.error("Error fetch producto:", err));
});

async function cargarProductos() {
  const grid = document.getElementById('catalogo');

  // ✅ Si no existe el elemento, esta no es la página de productos
  if (!grid) return;

  try {
    const response = await fetch('http://localhost:3000/productos');
    if (!response.ok) throw new Error('Error al obtener productos');

    const productos = await response.json();
    grid.innerHTML = '';

    productos.forEach(producto => {
      grid.innerHTML += `
        <a href="detalleproductos.html?id=${producto.Cod_Producto}" class="tarjeta">
          <img src="${producto.Imagen || 'img/menu/compumundologo.jpg'}">
          <div class="tarjeta-content">
            <span class="badge-categoria card-category">${producto.Categoria || 'Producto'}</span>
            <h3>${producto.Producto || 'Sin nombre'}</h3>
            <p>${producto.Descripcion || 'Sin descripción'}</p>
            <div class="price">$${parseFloat(producto.Precio).toLocaleString('es-AR')}</div>
          </div>
        </a>
      `;
    });

  } catch (error) {
    console.error("Error:", error);
    const grid = document.getElementById('catalogo');
    if (grid) {
      grid.innerHTML = `
        <p style="grid-column: 1 / -1; text-align: center; color: red;">
          Error al cargar los productos.
        </p>`;
    }
  }
}

window.onload = cargarProductos;
