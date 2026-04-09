// En producto.js
const params = new URLSearchParams(window.location.search);
const idSeleccionado = params.get('id');

console.log("El usuario quiere ver el producto:", idSeleccionado);

// Ahora podrías hacer un fetch filtrando por ese ID
// const producto = arrayProductos.find(p => p.id == idSeleccionado);