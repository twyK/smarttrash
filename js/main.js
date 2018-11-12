"use strict";

getDeviceStatus("dev_STB03", function (device) {
	// Se il device è offline, esce dalla funzione 
	if (!device.connected) {
		console.log("Device offline");
		return 1;
	}

	switch (device.return_value) {
		case 0: console.log("Il cestino è vuoto");break;
		case 1: console.log("Il cestino è pieno");break;
	}
});

// Invia una richiesta per lo stato di un dispositivo (Es: "dev_STB01")
function getDeviceStatus(device, callback) {
	var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        	var deviceReturn = JSON.parse(xmlHttp.responseText);
        	callback(deviceReturn);
        }
    }

    xmlHttp.open("GET", "http://localhost:3000/" + device + "/digital/4", true);
    xmlHttp.send(null);
}
