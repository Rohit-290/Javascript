let marks = [85,97,44,37,76,60];
let sum = 0;
let avg = 0;
 
for(i=0; i<marks.length; i++){
     sum = sum+marks[i];
}

 avg = sum/marks.length;
     console.log(avg);
    

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x
   

let Price = [250,645,300,900,50];
let i = 0;

for (let val of Price) {
      
    Price[val=val-val/10];
    console.log(`value at ${i} = ${val}`);
    i++;
}

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x

 for (let val of Price) {
    offer=val/10;
    Price[i]=Price[i]-offer;
    console.log(`value at ${i} = ${Price[i]}`);
    i++; 
}

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x 

for(leti=0; i<Price.length; i++){
    offer = items[i]/10;
    items[i]-=offer;
}
console.log(items);

let color = ["red","yellow","blue"];
color.push("white","green","purple") ;
console.log (color);


let veggies = ["Potato","Tomato","Brinjal","Cauliflower","Cabbage"];
deleted = veggies.pop("Cabbage");
console.log(veggies);
console.log(deleted);

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x

let age = [45,12,56,35,75];
Age = age.toString();
console.log(Age);

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x

let countries = ["India","Pakistan","Bangladesh","SriLanka"];
console.log(veggies.concat(countries,age));

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x

age.unshift(11);
console.log(age);

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x

Deleted=countries.shift();
console.log(countries);
console.log(Deleted);

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x

let foodItems = veggies.slice(1,4);
console.log(foodItems);

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x

age.splice(0,4,85,86,87,88);
console.log(age);







