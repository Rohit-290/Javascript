let employee = {
    taxcal () {
        console.log("tax rate is 10%");
            }
}

let AryaStark = {
    salary : 50000,
    taxcal () {
        console.log("tax rate is 20%");
            }
}

AryaStark.__proto__ = employee;


// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


class ToyotaCar {
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand = "fortuner";


// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


class ToyotaCar {
    constructor(brand){
        this.brand = brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let lexus = new ToyotaCar("lexus");