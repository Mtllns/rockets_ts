class  Thruster{
    public maxPower:number = 0;
    public currentPower:number;

    constructor(maxPower:number) {
        this.maxPower = maxPower;
        this.currentPower = 0;
    }
}