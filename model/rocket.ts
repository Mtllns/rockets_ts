
class Rocket {
    code: string;
    currentPower:number;
    thrusters:Thruster[]=new Array();

    constructor(code:string, currentPower:number) {
        this.code = code;
        this.currentPower = currentPower;

    }



    addThruster(thruster:Thruster){
        this.thrusters.push(thruster);
    }
}