//This is a js file on operators

/*This is a multi
line comment*/

let a = 7;
let b = 5;
let c = a + b;
let d = a - b;
let e = a % b;
let f = a * b;
let g = a / b;
let h = a ** b;
let z = 2;
let x = 1;
let y = 7;


console.log("a+b=" , c);
console.log("a-b=" , d);
console.log("a%b=" , e);
console.log("a*b=" , f);
console.log("a/b=" , g);

console.log("a**b=" , h);
console.log("a++=" , a++);
console.log("b--=" , b--);
console.log("++a=" , a);
console.log("--a=" , a);

console.log(a);
console.log("a+=6" , a=a+6);
console.log("b-=1" , b=b-1);
console.log("a*=6" , a=a*6);
console.log("a%=2" , a=a/2);
console.log("a**=3" , a=a**3);

console.log("a==x" , a==x);
console.log("a===z" , a===z);
console.log("a!=" , a!=z);
console.log("a!==x" , a!==x);
console.log("a>z" , a>z);
console.log("a>=z" , a>=z);
console.log("a<x" , a<x);
console.log("a<=x" , a<=x);



let cond1 = a>b;
let cond2 = a===b;
console.log(cond1 && cond2);

let cond3 = a>b;
let cond4 = a===b;
console.log(cond3 || cond4);

let cond5 = a===y;
console.log(!a===y);

// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x


let age = 25;
if(age >= 18);{
    
    console.log("You can vote");

}

let Age = 16;
if(Age >= 18){
    
    console.log("You can vote");

} else{

    console.log("You cannot vote");

}

// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x


 let mode = "violet";
 let color;

 if(mode === "dark"){
    color = "black";
 } else if(mode === "light"){
    color =  "white";
 } else if(mode === "green"){
    color = "green";
 } else if(mode === "blue"){
    color = "blue";
 } else if(mode === "yellow"){
    color = "yellow";
 } else if(mode === "grey"){
    color = "grey";
 } else { 
    console.log("No match found");
 }
  console.log(color);
 
// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x

let birthYear = 1978;

birthYear>=1978 ? console.log("Eligible for govt beneficiary") : console.log("Not eligible for govt beneficiary");
 


  



