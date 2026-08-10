// let employee = {
//     taxcal () {
//         console.log("tax rate is 10%");
//             }
// }

// let AryaStark = {
//     salary : 50000,
//     taxcal () {
//         console.log("tax rate is 20%");
//             }
// }

// AryaStark.__proto__ = employee;


// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


// class ToyotaCar {
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand = "fortuner";


// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


// class ToyotaCar {
//     constructor(brand){
//         this.brand = brand;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let lexus = new ToyotaCar("lexus");

// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


class User {
     constructor(name,email) {
        this.name = name;
        this.email = email;
     }
     viewData() {
        console.log("website data");
    }
}

let student = new User("Arya Stark","arya.stark@gmail.com") ;

 
// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


class Admin extends User { 
      constructor(name,email){
          super(name,email)
      } 
      editData() {
        super.viewData();
         console.log("edited data");
      }
    
}

let Admin1 = new Admin("admin","admin@123.com");
