let modoActual = "abby2";

function AnimatedToggle2() {
// Selección del toggle de coleccionables
const toggle2 = document.querySelector('.toggle2');

let modoActual = "abby2";

function AnimatedToggle2() {
  toggle2.classList.toggle("active");

  if (modoActual === "abby2") {
    modoActual = "ellie";
    actualizarSwiper(imagenesEllie);
  } else {
    modoActual = "abby2";
    actualizarSwiper(imagenesAbby);
  }
    }
}

// Imágenes de Abby
const imagenesAbby = [
  { src: "coleccionable3-2.png", texto: "Cromos" },
  { src: "coleccionable3-1.png", texto: "Diario" },
  { src: "coleccionable3-5.png", texto: "Mapa Seattle" },
  { src: "coleccionable3-3.png", texto: "Infografía" },
  { src: "coleccionable3-4.png", texto: "Manuales" },
  { src: "coleccionable3-6.png", texto: "Cartas / Notas" },
  { src: "coleccionable3-7.png", texto: "Anillo" },
  { src: "coleccionable3-8.png", texto: "Foto de Leah" },
  { src: "coleccionable3-9.png", texto: "Llave" },
];

// Imágenes de Ellie (ejemplo, cámbialas por las que necesites)
const imagenesEllie = [
  { src: "ellie1.png", texto: "Dibujo" },
  { src: "ellie2.png", texto: "Cuchillo" },
  { src: "ellie3.png", texto: "Guitarra" },
  { src: "ellie4.png", texto: "Mapa" },
  { src: "ellie5.png", texto: "Cinta" },
];



var swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  speed: 600,         // <-- van aquí
  spaceBetween: 50,   // <-- y aquí

  coverflowEffect: {
    rotate: 15,       // te recomiendo subirlo para que se note bien
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
});

function actualizarSwiper(imagenes) {
  const slides = document.querySelectorAll('.swiper-slide');

  slides.forEach((slide, i) => {
    if (imagenes[i]) {
      const img = slide.querySelector('img');
      const p = slide.querySelector('p');

      img.src = imagenes[i].src;
      img.alt = imagenes[i].texto;
      p.textContent = imagenes[i].texto;
    }
  });

  swiper.update(); // actualiza Swiper
}

