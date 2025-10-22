    function logo() {
      location.reload();
    }

    function logo2(){
        window.location.href = "inicio.html";
    }

let indiceSet = 0;

const nombresSetsLeftBehind = [
  ["CUCHILLO", "PISTOLA"],
  ["REVÓLVER", "ARCO"],
  ["CÓCTEL MOLOTOV", "BOMBA CASERA"]
];

const caracteristicasSetsLeftBehind = [
  [
    `Tipo: Arma cuerpo a cuerpo<br><br>
    Ventajas: Permanente, silenciosa, ideal para asesinatos sigilosos<br><br>
    Desventajas: Solo para combate cercano`,

    `Calibre: 9mm<br><br>
    Capacidad inicial: 6 balas<br><br>
    Ventajas: Precisa, rápida, munición común<br><br>
    Desventajas: Daño moderado, recarga algo lenta`
  ],
  [
    `Calibre: .38<br><br>
    Capacidad inicial: 6 balas<br><br>
    Ventajas: Mucho daño, preciso<br><br>
    Desventajas: Lento de recargar`,

    `Tipo: Flechas estándar<br><br>
    Capacidad: 1 flecha<br><br>
    Ventajas: Silenciosa, buena precisión<br><br>
    Desventajas: Carga lenta`
  ],
  [
    `Tipo: Explosivo incendiario<br><br>
    Ventajas: Daño en área, quema enemigos<br><br>
    Desventajas: Riesgo si se lanza mal`,

    `Tipo: Explosivo<br><br>
    Ventajas: Gran daño en área, efectivo contra grupos de enemigos o infectados, puede detonar trampas a distancia<br><br>
    Desventajas: Riesgo de autolesión si se usa demasiado cerca`,
  ]
];

const imagenesSetsLeftBehind = [
  ["url('cuchillo.png')", "url('pistola.png')"],
  ["url('revolver.png')", "url('arco.png')"],
  ["url('coctel molotov.png')", "url('bomba casera.png')"]
];

function updateCardsLeftBehind(index) {
  // Cambiar nombres
  document.querySelector(".card-arma3 .nombre-arma").textContent = nombresSetsLeftBehind[index][0];
  document.querySelector(".card-arma4 .nombre-arma").textContent = nombresSetsLeftBehind[index][1];

  // Cambiar características
  document.querySelector(".card-arma3").nextElementSibling.innerHTML = `<ul class="caracteristicas" style="color: white; font-family: Arial;">${caracteristicasSetsLeftBehind[index][0].split('<br><br>').map(item => `<li>${item}</li>`).join("")}</ul>`;
  document.querySelector(".card-arma4").nextElementSibling.innerHTML = `<ul class="caracteristicas" style="color: white; font-family: Arial;">${caracteristicasSetsLeftBehind[index][1].split('<br><br>').map(item => `<li>${item}</li>`).join("")}</ul>`;

  // Cambiar fondo de las armas
  document.querySelector(".card-arma3").style.backgroundImage = imagenesSetsLeftBehind[index][0];
  document.querySelector(".card-arma4").style.backgroundImage = imagenesSetsLeftBehind[index][1];
  document.querySelector(".card-arma3").style.backgroundSize = "cover";
  document.querySelector(".card-arma4").style.backgroundSize = "cover";
}

// Inicializar al cargar
window.addEventListener('load', function() {
  window.leftBehindIndex = 0;
  updateCardsLeftBehind(window.leftBehindIndex);
});

// Navegación
document.getElementById("flecha_der").onclick = function () {
  window.leftBehindIndex = (window.leftBehindIndex + 1) % nombresSetsLeftBehind.length;
  updateCardsLeftBehind(window.leftBehindIndex);
};

document.getElementById("flecha_izq").onclick = function () {
  window.leftBehindIndex = (window.leftBehindIndex - 1 + nombresSetsLeftBehind.length) % nombresSetsLeftBehind.length;
  updateCardsLeftBehind(window.leftBehindIndex);
};

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