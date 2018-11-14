"use strict";

var refreshTime = localStorage.getItem("refreshTime");

window.onload = function () {
  // Imposta il tempo di aggiornamento della mappa in base alla scelta dell'utente
  if (refreshTime != null) {
    document.getElementById("refreshSetting").value = msToSec(refreshTime);
  } else {
    localStorage.setItem("refreshTime", 30000);
    document.getElementById("refreshSetting").value = 30;
  }
};

function secToMs (sec) {
  return sec * 1000;
}

function msToSec (ms) {
  return ms / 1000;
}