let number = prompt("Enter a number");
console.log(number);
if(number%5 === 0){

    console.log("Number is a multiple of 5");

}

else {
    console.log("Invalid input");
}

// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x

let score = prompt("Enter your score");
console.log(score);

if(score>=80 && score<=100){

    console.log("Your grade is A");
}

else if(score>=70 && score<=79){

    console.log("Your grade is B");
}

else if(score>=60 && score<=69){

    console.log("Your grade is C");
}

else if(score>=50 && score<=59) {

    console.log("Your grade is D");
}

else if(score>=0 && score<=49){

    console.log("Your grade is E");
}

else {
    console.log("Invalid input")
}

// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x

let score = prompt("Enter your score");
console.log(score);
let Grade;

if(score>=80 && score<=100){

    Grade = "A";

}

else if(score>=70 && score<=79){

    Grade = "B";

}

else if(score>=60 && score<=69){

    Grade = "C";

}

else if(score>=50 && score<=59) {

    Grade = "D";

}

else if(score>=0 && score<=49){

    Grade = "E";

}

else {

    console.log("Invalid input")
}

console.log("Your grade is" ,Grade);

// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x

for (let i=1; i<=100000 ; i++){

     console.log("Loops & Strings");

}

// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x

 let sum = 0 ;
 for (let i=0; i<=5;i++) {

    sum = sum+i;

 }

 console.log("sum =",sum);
 console.log("loop has ended");