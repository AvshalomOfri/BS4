const widthOutput = document.querySelector("#width");
function widthMonitor() {
  widthOutput.textContent = window.innerWidth;
}
window.onresize = widthMonitor;
