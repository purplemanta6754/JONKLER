// Get elements
const overlay = document.getElementById("overlay");
const button = document.getElementById("button");
const whySoSound = document.getElementById("jonkler-why-so-serious");
const getOutSound = document.getElementById("getout-sound");
const jonklertxt = document.getElementById("jonkler-txt");
const jonklerImg = document.getElementById("jonkler-img");

// Add event listener to button
button.addEventListener("click", handleButtonClick);

// Function to handle button click
function handleButtonClick() {
  // Toggle full screen
  toggleFullScreen();

  // Toggle overlay visibility
  overlay.style.display = "none";

  // Play WHY SO SERIOUS? with modified playback rate
  whySoSound.playbackRate = 1.5;
  whySoSound.play();

  // Change Jonkler text
  changeJonklerText();

  // Show Jonkler image
  setTimeout(showJonklerImage, 1050);

  // Play GET OUT and close tab
  setTimeout(playGetOutSound, 6900);
}

// Function to set full screen
function toggleFullScreen() {
  if (!document.fullscreenElement || document.fullscreenEnabled == true) {
    document.documentElement.requestFullscreen();
  }
}

// Function to hide the cursor while the browser is in fullscreen mode
function handleFullscreenChange() {
  document.documentElement.style.cursor = document.fullscreenElement ? "none" : "auto";
}

document.addEventListener("fullscreenchange", handleFullscreenChange);

// Function to change Jonkler text
function changeJonklerText() {
  const texts = ["why", "why so", "why so serious?"];
  let counter = 0;

  const intervalId = setInterval(() => {
    jonklertxt.textContent = texts[counter];
    counter++;
    if (counter >= texts.length) {
      clearInterval(intervalId);
    }
  }, 200);
}

// Function to show Jonkler image
function showJonklerImage() {
  jonklerImg.classList.remove("hide");
}

// Function to play GET OUT and close tab
function playGetOutSound() {
  getOutSound.play();
  setTimeout(closeTab, 400);
}

// Function to close tab
function closeTab() {
  window.close();
}