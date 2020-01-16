"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.thrusters = new Array();
        this.code = code;
        this.currentPower = 0;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    return Rocket;
}());
