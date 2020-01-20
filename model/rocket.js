"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, numThrusters) {
        this.thrusters = new Array();
        this.code = code;
        this.numThrusters = numThrusters;
        this.speed = 0;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    Rocket.prototype.calcularSpeed = function () {
        var _this = this;
        if (this.thrusters != null && this.thrusters.length > 0) {
            // this.thrusters.forEach(function(t) => return this.speed += t.currenPower);
            this.thrusters.forEach(function (element) {
                return _this.speed += element.currentPower;
            });
        }
    };
    return Rocket;
}());
