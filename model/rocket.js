"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, currentPower) {
        this.thrusters = new Array();
        this.code = code;
        this.currentPower = currentPower;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    return Rocket;
}());
