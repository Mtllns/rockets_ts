"use strict";
var rocket1;
var thruster;
function createRocket1() {
    var code1 = document.getElementById('rocket_1');
    var rocketBody = document.getElementById('rocket-body');
    var exhaustFlame = document.getElementById('exhaust-flame');
    var exhaustFumes = document.getElementById('exhaust-fumes');
    code1.classList.remove('d-none');
    rocketBody.classList.remove('d-none');
    exhaustFlame.classList.remove('d-none');
    exhaustFumes.classList.remove('d-none');
    rocket1 = new Rocket('32WESSDS', 0);
    rocket1.addThruster(new Thruster([10, 30, 80]));
    document.getElementById('32WESSDS').innerHTML = rocket1.code + '<br>' + ' Current Power: ' + rocket1.currentPower + '<br> Propulsores: ' + rocket1.addThruster.length;
}
function createRocket2() {
    var rocketBody = document.getElementById('rocket-body2');
    var exhaustFlame = document.getElementById('exhaust-flame2');
    var exhaustFumes = document.getElementById('exhaust-fumes2');
    var code2 = document.getElementById('LDSFJA32');
    code2.classList.remove('d-none');
    rocketBody.classList.remove('d-none');
    exhaustFlame.classList.remove('d-none');
    exhaustFumes.classList.remove('d-none');
}
