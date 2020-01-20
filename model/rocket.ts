
class Rocket {
    code: string;
    speed:number;
    numThrusters:number;
    thrusters:Thruster[]=new Array();

    constructor(code:string, numThrusters:number) {
        this.code = code;
        this.numThrusters = numThrusters;
        this.speed = 0;

    }
    addThruster(thruster:Thruster){
        this.thrusters.push(thruster);
    }

    calcularSpeed(){
		if(this.thrusters != null && this.thrusters.length > 0){
            // this.thrusters.forEach(function(t) => return this.speed += t.currenPower);
            this.thrusters.forEach(element => {
                return this.speed += element.currentPower
            });

		}
    }
}