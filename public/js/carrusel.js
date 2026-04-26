let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = document.querySelectorAll('.slide').length;
const indicadoresContainer = document.getElementById('indicadores');

// Crear indicadores
function crearIndicadores() {
  for (let i = 0; i < totalSlides; i++) {
    const indicador = document.createElement('div');
    indicador.classList.add('indicador');
    if (i === 0) indicador.classList.add('active');
    indicador.addEventListener('click', () => {
      currentIndex = i;
      actualizarCarrusel();
    });
    indicadoresContainer.appendChild(indicador);
  }
}

// Actualizar posición del carrusel
function actualizarCarrusel() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  // Actualizar indicadores
  const indicadores = document.querySelectorAll('.indicador');
  indicadores.forEach((ind, index) => {
    ind.classList.toggle('active', index === currentIndex);
  });
}

// Botón Anterior
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  actualizarCarrusel();
});

// Botón Siguiente
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  actualizarCarrusel();
});

// Auto avance cada 5 segundos
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  actualizarCarrusel();
}, 5000);

// Pausar auto-slide al pasar el mouse
const carrusel = document.querySelector('.carrusel');
carrusel.addEventListener('mouseenter', () => clearInterval(autoSlide));
carrusel.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    actualizarCarrusel();
  }, 5000);
});

crearIndicadores(); 