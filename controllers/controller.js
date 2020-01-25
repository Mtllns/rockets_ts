"use strict";
var rocket;
var rocket1 = new Rocket("32WESSDS", 3);
var rocket2 = new Rocket("LDSFJA32", 6);
function createRocket() {
    // crea thrusters en rocket1
    rocket1.addThruster(new Thruster(10));
    rocket1.addThruster(new Thruster(30));
    rocket1.addThruster(new Thruster(80));
    // crea thrusters en rocket2
    rocket2.addThruster(new Thruster(30));
    rocket2.addThruster(new Thruster(40));
    rocket2.addThruster(new Thruster(50));
    rocket2.addThruster(new Thruster(50));
    rocket2.addThruster(new Thruster(30));
    rocket2.addThruster(new Thruster(10));
    var valorThrusters1 = [];
    var valorThrusters2 = [];
    for (var i = 0; i < rocket1.thrusters.length; i++) {
        valorThrusters1.push(rocket1.thrusters[i].maxPower);
    }
    for (var i = 0; i < rocket2.thrusters.length; i++) {
        valorThrusters2.push(rocket2.thrusters[i].maxPower);
    }
    var rocketsInfo = document.getElementById("infoRockets");
    // asigna id de html a variables
    var code1 = document.getElementById('rockets');
    var rocketBody = document.getElementById('rocket-body');
    var exhaustFlame = document.getElementById('exhaust-flame');
    var exhaustFumes = document.getElementById('exhaust-fumes');
    // elimina clase css de las id asignadas a las variables
    code1.classList.remove('d-none');
    rocketBody.classList.remove('d-none');
    exhaustFlame.classList.remove('d-none');
    exhaustFumes.classList.remove('d-none');
    document.getElementById('infoRockets').innerHTML = rocket1.code + '<br>' + ' Current Power: ' + rocket1.speed + '<br> Propulsores: ' + rocket1.thrusters.length;
    // remover atributo onclick en boton create para que no se pueda volver a crear un rocket despues del 1º
    document.getElementById("create").removeAttribute("onclick");
}
function accelerate() {
    document.getElementById('infoRockets').innerHTML = rocket1.code + '<br>' + ' Current Power: ' + rocket1.speed + '<br> Propulsores: ' + rocket1.thrusters.length;
}
