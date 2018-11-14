"use strict";

function impostaFiltro (el, state) {
  // Controlla se il filtro è valido
  var filtriValidi = ["tutti", "pieno", "vuoto"];
  if (filtriValidi.indexOf(state) == -1) return false;

  // Imposta il filtro per la mappa
  filtro = state === "tutti" ? undefined : state;

  // Cambia il colore di sfondo del bottone
  resetBackgroundColor();
  el.style.backgroundColor = "#3f4040";

  clearFilteredMarkers(state);
  initMarkers();
}

function resetBackgroundColor () {
  document.getElementById("filtro-tutti").style.backgroundColor = "#838787";
  document.getElementById("filtro-pieni").style.backgroundColor = "#838787";
  document.getElementById("filtro-vuoti").style.backgroundColor = "#838787";
}
