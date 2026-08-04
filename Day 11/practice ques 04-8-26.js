let n = prompt("Please enter any number");
let arr = []

for (i=1; i<=n;  i++){
    arr[i-1]=i;
}

let sum = arr.reduce((res,curr)=>{
    return res + curr ;
})

console.log("sum =",sum);

let factorial = arr.reduce((res,curr)=>{
    return res * curr ;
})

console.log("factorial =",factorial);

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x 

let marks = [67,86,98,54,92,99,100,77,56,83];

let topperm = marks.filter((val)=>{
    return val>90;
})
console.log(topperm);