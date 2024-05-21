// LOADER FUNCTION FOR CUSTOM MSDOS LOADER 

let count = 0;
const percent = document.getElementById("percent");
const bar = document.getElementById("bar");
const loading = document.getElementById("loading");
const complete = document.getElementById("complete");
const container = document.getElementById("loader-container")
const loader = document.getElementById("loader")

complete.style.opacity = 0;

function startLoader() {
  percent.textContent = "/ " + count + "%";
  nextLoader();
}
function nextLoader() {
 	bar.style.width = count + "%";
  if (count < 100) {
    count++;
    setTimeout(startLoader, 20);
  } else {
  	loading.style.opacity = 0;
    complete.style.opacity = 1;
    container.style.transition = "opacity 800ms 500ms";
    container.style.opacity = 0;
    loader.style.transition = "opacity 1200ms 1500ms";
    loader.style.opacity = 0;
   	setTimeout(() => {
    	loader.style.display = "none";
    }, 2000)
  }
}

startLoader()

// CUSTOM FUNCTION TO PLAY SOUND - ON / OFF

// Get the Vimeo iframe element
const sound = document.getElementById('sound-on-off');
const on = document.querySelector('.sound-on');
let onClasses;
if (on) {
  onClasses = on.classList;
  on.classList.add('hidden');
}
const off = document.querySelector('.sound-off');
let offClasses;
if (off) {
  offClasses = off.classList;
}

const iframe1 =  document.getElementById('vimeo-player-1');
let vimeoPlayer = null;
if (iframe1) {
  vimeoPlayer = new Vimeo.Player(iframe)
  if (vimeoPlayer) {
     vimeoPlayer.setVolume(0);
  }
  }
  let isMuted = true

// Function to toggle mute/unmute state
function toggleMute() {
      onClasses.toggle('hidden');
  offClasses.toggle('hidden');
  // Toggle mute state
  if (isMuted === true) {
    // If muted, unmute the video
    vimeoPlayer.setVolume(0.5);
    isMuted = false
  } else {
    // If not muted, mute the video
    vimeoPlayer.setVolume(0);
    isMuted = true
  }
}
// Add click event listener to the Vimeo iframe
if (sound) {
    sound.addEventListener('click', toggleMute);
}