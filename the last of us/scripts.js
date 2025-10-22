    function logo() {
      location.reload();
    }

    function logo2(){
        window.location.href = "inicio.html";
    }

let indiceSet = 0;

const nombresSets = [
  ["ESCOPETA", "ARCO"],
  ["EL DIABLO", "LANZALLAMAS"],
  ["FUSIL DE CAZA", "ESCOPETA RECORTADA"],
  ["FUSIL DE ASALTO", "MACHETE"],
  ["BATE DE BÉISBOL", "TUBO DE METAL"],
  ["PALO DE MADERA", "HACHA"],
  ["BOMBA DE HUMO", "CÓCTEL MOLOTOV"],
  ["BOMBA CASERA", "DAGA"],
  ["PISTOLA", "REVÓLVER"]
];

const caracteristicasSets = [
  [
    `Calibre: 12<br><br>
    Capacidad inicial: 4 cartuchos<br><br>
    Ventajas: Alto daño, buena para infectados<br><br>
    Desventajas: Recarga lenta, poco alcance`,

    `Tipo: Flechas estándar<br><br>
    Capacidad: 1 flecha<br><br>
    Ventajas: Silenciosa, buena precisión<br><br>
    Desventajas: Carga lenta`
  ],
  [
    `Calibre: .50<br><br>
    Capacidad inicial: 1 bala<br><br>
    Ventajas: Muy alto daño, mata de un disparo a humanos e infectados grandes<br><br>
    Desventajas: Capacidad mínima`,

    `Combustible: Gasolina<br><br>
    Capacidad inicial: 25 de combustible<br><br>
    Ventajas: Área de efecto, quema a enemigos<br><br>
    Desventajas: Consumo rápido`
  ],
  [
    `Calibre: .270<br><br>
    Capacidad inicial: 1 bala<br><br>
    Ventajas: Altísima precisión, letal con disparo a la cabeza<br><br>
    Desventajas: Recarga tras cada disparo`,

    `Calibre: 12<br><br>
    Capacidad inicial: 2 cartuchos<br><br>
    Ventajas: Muy alto daño en corto alcance, ligera<br><br>
    Desventajas: Alcance corto, recarga constante`
  ],
  [
    `Calibre: 5.56mm<br><br>
    Capacidad inicial: 30 balas<br><br>
    Ventajas: Alta cadencia de fuego, gran daño por segundo, eficaz contra múltiples enemigos<br><br>
    Desventajas: Retroceso elevado, consumo rápido de munición, precisión media a larga distancia`,

    `Tipo: Arma de filo afilado<br><br>
    Ventajas: Daño alto, mejora posible<br><br>
    Desventajas: Durabilidad baja`
  ],
  [
    `Tipo: Arma contundente<br><br>
    Ventajas: Letal, fácil de encontrar, mejora disponible<br><br>
    Desventajas: Durabilidad limitada`,

    `Tipo: Arma metálica contundente<br><br>
    Ventajas: Dura más que madera, daño alto<br><br>
    Desventajas: Algo lenta`
  ],
  [
    `Tipo: Arma improvisada<br><br>
    Ventajas: Ligera, común, silenciosa<br><br>
    Desventajas: Poco resistente`,

    `Tipo: Arma de filo<br><br>
    Ventajas: Letal, muy efectiva<br><br>
    Desventajas: Durabilidad baja`
  ],
  [
    `Tipo: Herramienta táctica<br><br>
    Ventajas: Ciega enemigos, útil para escapar o atacar<br><br>
    Desventajas: No causa daño directo`,

    `Tipo: Explosivo incendiario<br><br>
    Ventajas: Daño en área, quema enemigos<br><br>
    Desventajas: Riesgo si se lanza mal`
  ],
  [
    `Tipo: Explosivo<br><br>
    Ventajas: Gran daño en área, efectivo contra grupos de enemigos o infectados, puede detonar trampas a distancia<br><br>
    Desventajas: Riesgo de autolesión si se usa demasiado cerca`,

    `Tipo: Arma cuerpo a cuerpo<br><br>
    Ventajas: Permite asesinatos sigilosos instantáneos, esencial para abrir ciertas puertas bloqueadas<br><br>
    Desventajas: Uso limitado`
  ],
  [
    `Calibre: 9mm<br><br>
    Capacidad inicial: 6 balas<br><br>
    Ventajas: Precisa, rápida, munición común<br><br>
    Desventajas: Daño moderado, recarga algo lenta`,

    `Calibre: .38<br><br>
    Capacidad inicial: 6 balas<br><br>
    Ventajas: Mucho daño, preciso<br><br>
    Desventajas: Lento de recargar`
  ]
];

const imagenesSets = [
  ["url('escopeta.png')", "url('arco.png')"],
  ["url('diablo.png')", "url('lanzallamas.png')"],
  ["url('fusil de caza.png')", "url('recortada.png')"],
  ["url('fusildeasalto.png')", "url('machete.png')"],
  ["url('bate.png')", "url('tubo.png')"],
  ["url('palo.png')", "url('hacha.png')"],
  ["url('bomba de humo.png')", "url('coctel molotov.png')"],
  ["url('bomba casera.png')", "url('daga.png')"],
  ["url('pistola.png')", "url('revolver.png')"]
];

function updateCards(index) {
  // Cambiar nombres
  document.querySelector(".card-arma1 .nombre-arma").textContent = nombresSets[index][0];
  document.querySelector(".card-arma2 .nombre-arma").textContent = nombresSets[index][1];

  // Cambiar características
  document.querySelector(".card-arma1").nextElementSibling.innerHTML = `<ul class="caracteristicas" style="color: white; font-family: Arial;">${caracteristicasSets[index][0].split('<br><br>').map(item => `<li>${item}</li>`).join("")}</ul>`;
  document.querySelector(".card-arma2").nextElementSibling.innerHTML = `<ul class="caracteristicas" style="color: white; font-family: Arial;">${caracteristicasSets[index][1].split('<br><br>').map(item => `<li>${item}</li>`).join("")}</ul>`;

  // Cambiar fondo de las armas
  document.querySelector(".card-arma1").style.backgroundImage = imagenesSets[index][0];
  document.querySelector(".card-arma2").style.backgroundImage = imagenesSets[index][1];
  document.querySelector(".card-arma1").style.backgroundSize = "cover";
  document.querySelector(".card-arma2").style.backgroundSize = "cover";
}

// Inicializar las tarjetas al cargar la página
window.addEventListener('load', function() {
  window.armasIndex = nombresSets.length - 1; // Estado inicial: ["PISTOLA", "REVÓLVER"]
  updateCards(window.armasIndex);
});

document.getElementById("flecha_der").onclick = function () {
  // Incrementar el índice
  window.armasIndex = (window.armasIndex + 1) % nombresSets.length; // Primer clic muestra ["ESCOPETA", "ARCO"]
  updateCards(window.armasIndex);
};

document.getElementById("flecha_izq").onclick = function () {
  // Decrementar el índice
  window.armasIndex = (window.armasIndex - 1 + nombresSets.length) % nombresSets.length; // Primer clic muestra ["BOMBA CASERA", "DAGA"]
  updateCards(window.armasIndex);
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



