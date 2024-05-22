// CUSTOM FUNCTION TO PLAY SOUND - ON / OFF
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

const iframe1 =  document.getElementById('vimeo-player-9');
let vimeoPlayer = null;
if (iframe1) {
  vimeoPlayer = new Vimeo.Player(iframe1)
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