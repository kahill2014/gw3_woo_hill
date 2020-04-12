function hide() {
  document.getElementById("intro").className = "hide";
}

window.addEventListener("load",
  function() {
    setTimeout(hide, 2500);
  }, false
);
