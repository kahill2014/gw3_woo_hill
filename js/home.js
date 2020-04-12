function hide() {
  document.getElementById("intro").className = "hide";
}

window.addEventListener("load",
  function() {
    setTimeout(hide, 2000);
  }, false
);
