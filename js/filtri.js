"use strict";

function impostaFiltro (el, state) {
  // Controlla se il filtro è valido
  var filtriValidi = ["tutti", "pieno", "vuoto"];
  if (filtriValidi.indexOf(state) == -1) return false;

  // Imposta il filtro per la mappa
  filtro = state === "tutti" ? undefined : state;

  // Cambia il colore di sfondo del bottone
  resetBackgroundColor();
  el.classList.add("btnFilterActive");
  el.classList.remove("btnFilter");

  clearFilteredMarkers(state);
  initMarkers();
}

function resetBackgroundColor () {
  document.getElementById("filtro-tutti").classList.remove("btnFilterActive");
  document.getElementById("filtro-pieni").classList.remove("btnFilterActive");
  document.getElementById("filtro-vuoti").classList.remove("btnFilterActive");

  document.getElementById("filtro-tutti").classList.add("btnFilter");
  document.getElementById("filtro-pieni").classList.add("btnFilter");
  document.getElementById("filtro-vuoti").classList.add("btnFilter");
}
