"use strict";

var apiEndpoint = localStorage.getItem("api") || "https://cloud.arest.io/";

var devices = {
  "dev_STB01": [43.238613, 13.644356, "Via S. Giovanni"],
  "dev_STB02": [43.238283, 13.643857, "Via S. Giovanni"],
  "dev_STB03": [43.238184, 13.644847, "Via Trinità"],
};

// Invia una richiesta per lo stato di un dispositivo (Es: "dev_STB01")
function getDeviceStatus(device, callback) {
	var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
     	var deviceReturn = JSON.parse(xmlHttp.responseText);
     	callback(deviceReturn);
    }
  }

  xmlHttp.open("GET", apiEndpoint + device + "/digital/4", true);
  xmlHttp.send(null);
}

function impostaStatistiche () {
  document.getElementById("num-totali").innerHTML = parseInt(numCestini[0] + numCestini[1] + numCestini[2]);
  document.getElementById("num-pieni").innerHTML = parseInt(numCestini[0]);
  document.getElementById("num-vuoti").innerHTML = parseInt(numCestini[1]);
  document.getElementById("num-offline").innerHTML = parseInt(numCestini[2]);
}
