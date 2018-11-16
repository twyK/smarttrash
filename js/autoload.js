"use strict";

window.onload = function () {
    impostaValoriRefreshTime();
    impostaValoriSimulazione();
    impostaStatistiche();
}

setInterval(function () {
    impostaStatistiche();
}, 1000);
