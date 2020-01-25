
let rocket: Rocket;
let rocket1: Rocket = new Rocket("32WESSDS", 3);
let rocket2: Rocket = new Rocket("LDSFJA32", 6);


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

    let valorThrusters1:number[] = [];
    let valorThrusters2:number[] = [];

    for (var i = 0; i < rocket1.thrusters.length; i++) {
		valorThrusters1.push(rocket1.thrusters[i].maxPower);
	}

    for (var i = 0; i < rocket2.thrusters.length; i++) {
		valorThrusters2.push(rocket2.thrusters[i].maxPower);
    }
    
    let rocketsInfo = document.getElementById("infoRockets");


    // asigna id de html a variables
    let code1:HTMLElement        = <HTMLElement>document.getElementById('rockets');
    let rocketBody:HTMLElement   = <HTMLElement>document.getElementById('rocket-body');
    let exhaustFlame:HTMLElement = <HTMLElement>document.getElementById('exhaust-flame');
    let exhaustFumes:HTMLElement = <HTMLElement>document.getElementById('exhaust-fumes');
    
    // elimina clase css de las id asignadas a las variables
    code1.classList.remove('d-none');
    rocketBody.classList.remove('d-none');
    exhaustFlame.classList.remove('d-none');
    exhaustFumes.classList.remove('d-none');


    (<HTMLElement>document.getElementById('infoRockets')).innerHTML = rocket1.code +'<br>'+' Current Power: '+ rocket1.speed + '<br> Propulsores: ' +rocket1.thrusters.length;
    // remover atributo onclick en boton create para que no se pueda volver a crear un rocket despues del 1º
    (<HTMLElement>document.getElementById("create")).removeAttribute("onclick");
}

function accelerate() {

    

    (<HTMLElement>document.getElementById('infoRockets')).innerHTML = rocket1.code +'<br>'+' Current Power: '+ rocket1.speed + '<br> Propulsores: ' +rocket1.thrusters.length;
}







