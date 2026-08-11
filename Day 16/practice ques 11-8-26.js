console.log("hello");
console.log("hello");
setTimeout(()=>{
    console.log("JavaScript");
},4000);
console.log("hello");
console.log("hello");    


// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


function sum(a,b){
    console.log(a+b);
}

function calculator (a,b,setCallback){
    setCallback(a,b);
}


calculator(1,8,sum);

 
// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


function calculator (a,b,setCallback){
    setCallback(a,b);
}

calculator(1,2,(a,b)=>{
    console.log(a+b);
}
);