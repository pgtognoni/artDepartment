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