
class Rocket {
    code: string;
    currentPower:number;
    thrusters:Thruster[]=new Array();

    constructor(code:string) {
        this.code = code;
        this.currentPower = 0;

    }
    addThruster(thruster:Thruster){
        this.thrusters.push(thruster);
    }
}