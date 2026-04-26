document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");

  const tituloEl = document.getElementById("resultado-titulo");
  const searchInput = document.getElementById("search-input");

  // Si no están los elementos, no es la página de búsqueda — salir
  if (!tituloEl) return;

  if (!q) {
    tituloEl.textContent = "No se ingresó ningún término de búsqueda.";
    return;
  }

  if (searchInput) searchInput.value = q;
  buscar(q);
});

async function buscar(q) {
  try {
    const res  = await fetch(`http://localhost:3000/buscar?q=${encodeURIComponent(q)}`);
    const data = await res.json();

    const titulo = document.getElementById("resultado-titulo");
    const grid   = document.getElementById("grid");

    if (!titulo || !grid) return;

    if (!res.ok || data.error) {
      titulo.innerHTML = `No se encontraron resultados para <strong>"${q}"</strong>`;
      grid.innerHTML   = `<div class="col-12 text-center text-muted py-5">Intentá con otro término.</div>`;
      return;
    }

    titulo.innerHTML = `${data.length} resultado${data.length !== 1 ? 's' : ''} para <strong>"${q}"</strong>`;

    grid.innerHTML = data.map(p => `
      <a href="detalleproductos.html?id=${p.Cod_Producto}" class="tarjeta">
        <img src="${p.Imagen || 'img/menu/compumundologo.jpg'}">
        <div class="tarjeta-content">
          <span class="badge-categoria card-category">${p.Categoria || 'Producto'}</span>
          <h3>${p.Producto || 'Sin descripción'}</h3>
          <p>${p.Descripcion || 'Sin descripción'}</p>
          <div class="price">$${parseFloat(p.Precio).toLocaleString('es-AR')}</div>
        </div>
      </a>
    `).join('');

  } catch (err) {
    console.error("Error al buscar:", err);
  }
}

async function buscarProducto(e) {
  e.preventDefault();
  const q = document.getElementById("search-input").value.trim();
  if (!q) return;
  window.location.href = `buscador.html?q=${encodeURIComponent(q)}`;
}