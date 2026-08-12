function getData(dataId){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },3000);
    });
}

getData(1).then(() => {
  console.log("data recieved");
  console.log("Fetching data..");
  getData(2).then(() => {
    console.log("data recieved");
    console.log("Fetching data..");
    getData(3).then(() => {
      console.log("data recieved");
      console.log("Fetching data..");
        getData(4).then(() => {
        console.log("data recieved");    
        console.log("Fetching data..");
      });
    });
  });
});

// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------

function getData(dataId){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}

getData(1)
.then(() => {
  console.log("data recieved");
  console.log("Fetching data..");
    return getData(2)
    .then(() => {
    console.log("data recieved");
    console.log("Fetching data..");
       return getData(3)
       .then(() => {
       console.log("data recieved");
       console.log("Fetching data..");
          return  getData(4)
          .then(() => {
          console.log("data recieved");    
          console.log("Fetching data..");
          console.log(res);
      });
    });
  });
});


// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


function getData(dataId){
        setTimeout(()=>{
            console.log("data",dataId);
                 console.log("success");
        },2000);  
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
}


// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


function getData(dataId){
        setTimeout(()=>{
            console.log("data",dataId);
                 console.log("success");
        },2000);  
}

(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
})
();