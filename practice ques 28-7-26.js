for(let i=2; i<=100; i++){

    if(i%2 === 0){
        
        console.log(i);
    } 

}



let num = prompt("Enter the number you have guessed");
let ans = 47897 ;

while(num != ans){

    num = prompt("You have guessed the wrong number.Please guess the number again.");

}

console.log("Congratulations! You have guessed the correct answer");


let name="Goofy Dog";
let student= {
    Name : "Road Runner",
    age : 25,
    cgpa : 8.5,
    ispass : true
};

for(let val of name){

   console.log(val);

}

for(let key in student){
    console.log("key=",key,student[key]);
}








let i=6
do {

    console.log(i);
    i++;

} while(i<=5)
