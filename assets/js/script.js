// Obtener los elementos
const overlay = document.getElementById("overlay");
const button = document.getElementById("button");
const whySoSound = document.getElementById("jonkler-why-so-serious");
const getOutSound = document.getElementById("getout-sound");
const jonklertxt = document.getElementById("jonkler-txt");
const jonklerImg = document.getElementById("jonkler-img");

// Agregar listener de eventos al botón
button.addEventListener("click", handleButtonClick);

// Función para manejar el clic del botón
function handleButtonClick() {
  // Alternar pantalla completa
  toggleFullScreen();

  // Alternar visibilidad del overlay
  overlay.style.display = "none";

  // Reproducir WHY SO SERIOUS? con tasa de reproducción modificada
  whySoSound.playbackRate = 1.5;
  whySoSound.play();

  // Cambiar el texto a "WHY SO SERIOUS?"
  changeJonklerText();

  // Mostrar la imagen de Jonkler
  setTimeout(showJonklerImage, 1050);

  // Reproducir GET OUT y cerrar pestaña
  setTimeout(playGetOutSound, 6900);
}

// Función para alternar pantalla completa
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    // Solicitar pantalla completa
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    // Salir de pantalla completa
    document.exitFullscreen();
  }
}

// Función para cambiar el texto a "WHY SO SERIOUS?"
function changeJonklerText() {
  const jonklertxt = document.getElementById("jonkler-txt");

  let contador = 0;
  const arrayTextos = ["why", "why so", "why so serious?"]; // array de textos a cambiar
  let intervalId = null;

  intervalId = setInterval(function () {
    jonklertxt.textContent = arrayTextos[contador];
    contador++;
    if (contador >= arrayTextos.length) {
      clearInterval(intervalId);
    }
  }, 200); // Cambiar cada 0.2 segundos
}

// Función para mostrar al Jonkler
function showJonklerImage() {
  jonklerImg.classList.remove("hide");
}

// Función para reproducir GET OUT y luego cerrar la ventana
function playGetOutSound() {
  getOutSound.play();
  setTimeout(close, 400);
}
