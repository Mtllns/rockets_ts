"use strict";
var rocket1;
var thruster;
function createRocket1() {
    var code1 = document.getElementById('rocket_1');
    var rocketBody = document.getElementById('rocket-body');
    var exhaustFlame = document.getElementById('exhaust-flame');
    var exhaustFumes = document.getElementById('exhaust-fumes');
    // elimina clase css
    code1.classList.remove('d-none');
    rocketBody.classList.remove('d-none');
    exhaustFlame.classList.remove('d-none');
    exhaustFumes.classList.remove('d-none');
    // Crea rocket y añade 3 thrusters
    rocket1 = new Rocket('32WESSDS');
    rocket1.addThruster(new Thruster(10));
    rocket1.addThruster(new Thruster(30));
    rocket1.addThruster(new Thruster(80));
    document.getElementById('32WESSDS').innerHTML = rocket1.code + '<br>' + ' Current Power: ' + rocket1.currentPower + '<br> Propulsores: ' + rocket1.thrusters.length;
}
function accelerate() {
    document.getElementById('32WESSDS').innerHTML = rocket1.code + '<br>' + ' Current Power: ' + rocket1.currentPower + '<br> Propulsores: ' + rocket1.thrusters.length;
}
// function createRocket2() {
//     let rocketBody:HTMLElement   = <HTMLElement>document.getElementById('rocket-body2');
//     let exhaustFlame:HTMLElement = <HTMLElement>document.getElementById('exhaust-flame2');
//     let exhaustFumes:HTMLElement = <HTMLElement>document.getElementById('exhaust-fumes2');
//     let code2:HTMLElement        = <HTMLElement>document.getElementById('LDSFJA32');
//     code2.classList.remove('d-none');
//     rocketBody.classList.remove('d-none');
//     exhaustFlame.classList.remove('d-none');
//     exhaustFumes.classList.remove('d-none');
// }
