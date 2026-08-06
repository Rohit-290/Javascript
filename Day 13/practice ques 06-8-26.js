let heading = document.querySelector("#one");
console.dir(heading);

heading.innerText = heading.innerText + " from Mutant Turtle";      //concatenate

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x 

// let div = document.querySelectorAll(".two");
// console.dir(div);

// div[0].innerText = "UNIQUE 1" ;
// div[1].innerText = "UNIQUE 2" ;
// div[2].innerText = "UNIQUE 3" ;

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x 

let div = document.querySelectorAll(".two");

let idx = 1;
for (div of div){
    div.innerText = `UNIQUE ${idx}`;
    idx++;
}

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x 

let nButton = document.createElement("Button");

nButton.innerText = "click me";
nButton.style.backgroundColor = "red";
nButton.style.color = "white";

document.querySelector("body").prepend(nButton);
 

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------x 

let para = document.querySelector(".content");
console.log(para);

// para.getAttribute("class");
// para.setAttribute("class","ncontent");
para.classList.add("ncontent");