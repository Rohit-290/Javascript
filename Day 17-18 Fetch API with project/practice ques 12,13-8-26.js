const URL = 
const factPara = document.querySelector(".para");
const btn = document.querySelector(".bn");

const getFacts = async () => {
   console.log("getting data...");
   let response = await fetch(URL);
   console.log(response);
   let data = await response.json();
   factPara.innerText = data[0].text;
  }

btn.addEventListener("click",getFacts);


// -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


// const URL = "https://cat-fact-herokuapp.com/facts" ;
// const factPara = document.querySelector(".para");
// const btn = document.querySelector(".bn");

// function getFacts() {
//    console.log("getting data...");
//    fetch(URL)
//    .then((response)=>{
//     return response.json();
//    })
//     .then((data)=>{
//     factPara.innerText = data[0].text;
//   })
// }

// btn.addEventListener("click",getFacts);
