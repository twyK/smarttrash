"use strict";

var map;
var markers = new Array();

// Ogni x secondi ricarica i markers
setInterval(ricaricaMarkers, 10000);

function initMap() {
    var myLatLng = { lat: 43.238517, lng: 13.644644 };

    // Mostra la mappa all'utente
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: myLatLng,
      disableDefaultUI: true,
    });

    // Carica i markers
    initMarkers();
}

function initMarkers() {
  console.log("Markers caricati:");
  // Itera tutti i devices
  Object.keys(devices).forEach(function(device) {
    getDeviceStatus(device, function (cestino) {
      // Controlla se il cestino è connesso
      if (!cestino.connected) {
        console.log(device, "- Cestino Offline");
        addMarker(device, "offline", devices[device]);

        return;
      }
    
      // Controlla se il cestino è pieno o vuoto
      switch (cestino.return_value) {
        case 0: {
          console.log(device, "- Cestino Vuoto");
          addMarker(device, "vuoto", devices[device]);

          break;
        }
        case 1: {
          console.log(device, "- Cestino Pieno");
          addMarker(device, "pieno", devices[device]);

          break;
        }
      }
    });
  });
}

function addMarker(device, state, location) {
  var icon = getIcon(state);
  if (!icon) throw new Error("Stato invalido del device \"" + device + "\"");

  // Mostra un nuovo marker sulla mappa
  var marker = new google.maps.Marker({
    position: { lat: location[0], lng: location[1] },
    map: map,
    title: device,
    state: state,
    icon: icon
  });

  // Salva il marker in memoria
  markers.push(marker);
}

function clearMarkers() {
  // Salva il numero di marker vecchi
  var numMarkerVecchi = (markers.length / 2);

  // Rimuove i vecchi marker dalla mappa
  for (var i = 0; i < numMarkerVecchi; i++) {
    markers[i].setMap(null);
  }

  // Rimuove i vecchi marker dalla memoria
  markers.splice(0, numMarkerVecchi);
}

function getIcon(state) {
  // In base allo stato prende l'icona del colore corrispondente
  switch (state) {
    case "offline": {
      return "img/marker-blue.png";
    }
    case "pieno": {
      return "img/marker-red.png";
    }
    case "vuoto": {
      return "img/marker-green.png";
    }
    default: {
      return false;
    }
  }
}

function ricaricaMarkers() {
  // Carica i nuovi marker
  initMarkers();

  // Non mostrare l'eliminazione dei marker sulla mappa all'utente
  setTimeout(function () {
    clearMarkers();
  }, 300);
}
