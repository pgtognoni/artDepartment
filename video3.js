
const sound = document.getElementById('sound-on-off');
const iframe =  document.getElementById('vimeo-player-9');
const vimeoPlayer = new Vimeo.Player(iframe)

  let isMuted = true
vimeoPlayer.setVolume(0);
// Function to toggle mute/unmute state
function toggleMute() {
  // Get current mute state
      
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
sound.addEventListener('click', toggleMute);