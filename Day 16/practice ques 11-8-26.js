console.log("hello");
console.log("hello");
setTimeout(() => {
  console.log("JavaScript");
}, 4000);
console.log("hello");
console.log("hello");

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, setCallback) {
  setCallback(a, b);
}

calculator(1, 8, sum);

// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------

function calculator(a, b, setCallback) {
  setCallback(a, b);
}

calculator(1, 2, (a, b) => {
  console.log(a + b);
});

// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------

function getData(dataId,getNewData) {
    setTimeout( () => {
        console.log("Data",dataId);
        if(getNewData){
           getNewData();  
        } 
    },5000
    )
}

getData(1,()=>{
    console.log("Fetching data...");
    getData(2,()=>{
        console.log("Fetching data again...");
        getData(3,()=>{
            console.log("Fetching data again please wait...");
            getData(4)

        })
    })
})


// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


function getData(dataId,getNewData) {
    return new Promise ((resolve,reject) => {
    setTimeout( () => {
        console.log("Data",dataId);
        resolve("success");
        if(getNewData){
           getNewData();  
        } 
    },5000);
    });
}

let result = getData(123);
console.log(result);

// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------
   
let getPromise = () => {
    return new Promise ((resolve,reject) => {
        console.log("I make a promise")
        reject("Network error");
    });
}

let promise = getPromise();
promise.then((res)=>{
    console.log("result =",res);
});
promise.catch((err)=>{
    console.log("result =",err);
});


// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------

function asyncFunc() {
return new Promise((resolve,reject)=>{
     setTimeout(() => {
         console.log("Data",dataId);
         resolve("success");
},4000);
})
}
console.log("fetching data1.....");
let p1 = asyncFunc();
p1.then((res)=>{
    console.log(res);
})