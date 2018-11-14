"use strict";

var apiEndpoint = localStorage.getItem("api") || "https://cloud.arest.io/";

var devices = {
  "dev_STB01": [43.238613, 13.644356],
  "dev_STB02": [43.238283, 13.643857],
  "dev_STB03": [43.238184, 13.644847],
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