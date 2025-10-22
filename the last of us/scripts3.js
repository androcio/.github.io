    function logo() {
      location.reload();
    }

    function logo2(){
        window.location.href = "inicio.html";
    }

    function MostrarColeccionable(){
        open("diario.pdf", "_blank", "width=700,height=500");
    }

let indiceSet = 0;

const nombresSetsLeftBehind = [
  ["CUCHILLO", "PISTOLA"],
  ["REVÓLVER", "ARCO"],
  ["FUSIL DE CERROJO", "ESCOPETA DE BOMBEO"],
  ["SUBFUSIL SILENCIADO", "CÓCTEL MOLOTOV"],
  ["MINA TRAMPA", "BOMBA ATURDIDORA"],
  ["PALO DE MADERA", "HACHA"],
  ["MACHETE", "TUBO DE METAL"]


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
  `Calibre: .308<br><br>Capacidad inicial: 5 balas<br><br>Ventajas: Mucho daño y precisión<br><br>Desventajas: Recarga y cadencia lentas`,

  `Calibre: 12 gauge<br><br>Capacidad inicial: 4 cartuchos<br><br>Ventajas: Daño devastador a corta distancia<br><br>Desventajas: Ineficaz a larga distancia, recarga lenta`
],
[
  `Calibre: 9x19 mm<br><br> Ventajas: Eliminaciones silenciosas a corta distancia; alta cadencia.<br><br> Desventajas: No mata instantáneamente a enemigos blindados; munición limitada.`,
  
  `Tipo: Explosivo<br><br>
    Ventajas: Gran daño en área, efectivo contra grupos de enemigos o infectados, puede detonar trampas a distancia<br><br>
    Desventajas: Riesgo de autolesión si se usa demasiado cerca`,

    
  ],

  [
  `Tipo: Explosivo<br><br> Ventajas: Daño sorpresa en área; ideal para emboscadas y proteger rutas.<br><br> Desventajas: Puede herir aliados/jugador; detectable y uso único.`,
  
  `Tipo: Explosivo<br><br>
Ventajas: Aturde y desorienta en área, facilita neutralizar grupos y escapar.<br><br>
Desventajas: Efecto breve; puede alertar a otros; peligro si se usa muy cerca.`,

    
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
    `Tipo: Arma de filo<br><br>
    Ventajas: Alta potencia, puede eliminar enemigos de un solo golpe<br><br>
    Desventajas: Poca disponibilidad, se deteriora con pocos usos`,

    `Tipo: Arma metálica contundente<br><br>
    Ventajas: Dura más que madera, daño alto<br><br>
    Desventajas: Algo lenta`
  ],


];

const imagenesSetsLeftBehind = [
  ["url('cuchillo.png')", "url('pistola2.png')"],
  ["url('revolver.png')", "url('arco.png')"],
  ["url('fusilcerrojo.png')", "url('escopetabombeo.png')"],
  ["url('subfusil silenciado.png')", "url('coctel molotov2.png')"],
  ["url('mina trampa.png')", "url('bomba aturdidora.png')"],
  ["url('palo.png')", "url('hacha.png')"],
  ["url('machete.png')", "url('tubo.png')"]

];

function updateCardsLeftBehind(index) {
  // Cambiar nombres
  document.querySelector(".card-arma3 .nombre-arma").textContent = nombresSetsLeftBehind[index][0];
  document.querySelector(".card-arma8 .nombre-arma").textContent = nombresSetsLeftBehind[index][1];

  // Cambiar características
  document.querySelector(".card-arma3").nextElementSibling.innerHTML = `<ul class="caracteristicas" style="color: white; font-family: Arial;">${caracteristicasSetsLeftBehind[index][0].split('<br><br>').map(item => `<li>${item}</li>`).join("")}</ul>`;
  document.querySelector(".card-arma8").nextElementSibling.innerHTML = `<ul class="caracteristicas" style="color: white; font-family: Arial;">${caracteristicasSetsLeftBehind[index][1].split('<br><br>').map(item => `<li>${item}</li>`).join("")}</ul>`;

  // Cambiar fondo de las armas
  document.querySelector(".card-arma3").style.backgroundImage = imagenesSetsLeftBehind[index][0];
  document.querySelector(".card-arma8").style.backgroundImage = imagenesSetsLeftBehind[index][1];
  document.querySelector(".card-arma3").style.backgroundSize = "cover";
  document.querySelector(".card-arma8").style.backgroundSize = "cover";
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




const nombresSetsAbby = [
  ["PISTOLA MILITAR", "RIFLE SEMIAUTOMÁTICO"],
  ["PISTOLA DE CAZA", "GRANADA"],
  ["LANZALLAMAS", "BALLESTA"]
];

const caracteristicasSetsAbby = [
  [
    `Calibre: 12<br><br>Capacidad: 5 cartuchos<br><br>Ventajas: Gran daño a corta distancia<br><br>Desventajas: Recarga lenta`,
    `Tipo: Arma cuerpo a cuerpo<br><br>Ventajas: Precisa, sigilosa<br><br>Desventajas: Solo combate cercano`
  ],
  [
    `Calibre: 5.56mm<br><br>Capacidad: 30 balas<br><br>Ventajas: Alcance largo, buen daño<br><br>Desventajas: Retroceso fuerte`,
    `Tipo: Explosivo<br><br>Ventajas: Gran daño en área<br><br>Desventajas: Riesgo de autodaño`
  ],
  [
    `Tipo: Arma incendiaria<br><br>Ventajas: Daño en área, miedo en enemigos<br><br>Desventajas: Munición limitada`,
    `Tipo: Arma cuerpo a cuerpo<br><br>Ventajas: Permanente, silenciosa<br><br>Desventajas: Solo combate cercano`
  ]
];

const imagenesSetsAbby = [
  ["url('pistola militar.png')", "url('rifle semiautomatico.png')"],
  ["url('pistola caza.png')", "url('pistola militar.png')"],
  ["url('lanzallamas.png')", "url('ballesta .png')"]
];


let modoActual = "leftbehind"; // o "abby"


function AnimatedToggle() {
  toggle.classList.toggle("active");

  if (modoActual === "leftbehind") {
    modoActual = "abby";
    nombresSets = nombresSetsAbby;
    caracteristicasSets = caracteristicasSetsAbby;
    imagenesSets = imagenesSetsAbby;
  } else {
    modoActual = "leftbehind";
    nombresSets = nombresSetsLeftBehind;
    caracteristicasSets = caracteristicasSetsLeftBehind;
    imagenesSets = imagenesSetsLeftBehind;
  }

  window.leftBehindIndex = 0;
  updateCardsLeftBehind(window.leftBehindIndex);
}


function updateCardsLeftBehind(index) {
  document.querySelector(".card-arma3 .nombre-arma").textContent = nombresSets[index][0];
  document.querySelector(".card-arma8 .nombre-arma").textContent = nombresSets[index][1];

  document.querySelector(".card-arma3").nextElementSibling.innerHTML = `<ul class="caracteristicas" style="color: white; font-family: Arial;">${caracteristicasSets[index][0].split('<br><br>').map(item => `<li>${item}</li>`).join("")}</ul>`;
  document.querySelector(".card-arma8").nextElementSibling.innerHTML = `<ul class="caracteristicas" style="color: white; font-family: Arial;">${caracteristicasSets[index][1].split('<br><br>').map(item => `<li>${item}</li>`).join("")}</ul>`;

  document.querySelector(".card-arma3").style.backgroundImage = imagenesSets[index][0];
  document.querySelector(".card-arma8").style.backgroundImage = imagenesSets[index][1];
  document.querySelector(".card-arma3").style.backgroundSize = "cover";
  document.querySelector(".card-arma8").style.backgroundSize = "cover";
}


window.addEventListener('load', function() {
  window.leftBehindIndex = 0;
  nombresSets = nombresSetsLeftBehind;
  caracteristicasSets = caracteristicasSetsLeftBehind;
  imagenesSets = imagenesSetsLeftBehind;
  updateCardsLeftBehind(window.leftBehindIndex);
});

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

