"use strict";

var refreshTime = localStorage.getItem("refreshTime") || 30000;

window.onload = function () {
  impostaValoriRefreshTime();
  impostaValoriSimulazione();
};

function impostaValoriRefreshTime () {
  // Imposta il tempo di aggiornamento della mappa in base alla scelta dell'utente
  if (refreshTime != null) {
    document.getElementById("refreshSetting").value = msToSec(refreshTime);
  } else {
    localStorage.setItem("refreshTime", 30000);
    document.getElementById("refreshSetting").value = 30;
  }
}

function salvaRefreshTime () {
  // Prende il valore numerico dall'input nella pagina
  var temp = parseInt(document.getElementById("refreshSetting").value);

  // Controllo del tempo di aggiornamento
  if (temp >= 3 && temp <= 259200) {
    // Salva il tempo di aggiornamento
    refreshTime = temp;
    localStorage.setItem("refreshTime", secToMs(refreshTime));
  }
}

function impostaValoriSimulazione () {
  if (localStorage.getItem("api") != null) {
    document.getElementById("simulationBox").checked = true;
  } else {
    document.getElementById("simulationBox").checked = false;
  }
}

function salvaSimulazione () {
  // Imposta il server da cui prendere i dati
  if (document.getElementById("simulationBox").checked === true) {
    localStorage.setItem("api", "http://api.smarttrash.tk/");
  } else {
    localStorage.removeItem("api");
  };
}

function salvaImpostazioni () {
  salvaRefreshTime();
  salvaSimulazione();

  // Aggiorna la pagina per applicare le modifiche
  window.location.reload();
}

function secToMs (sec) {
  return sec * 1000;
}

function msToSec (ms) {
  return ms / 1000;
}
