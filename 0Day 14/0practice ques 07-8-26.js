let alpha = document.createElement("button");

alpha.innerText =  "Themes" ;
alpha.style.backgroundColor =  "#6db5cf";
alpha.style.height = "40px";
alpha.style.width = "90px";
alpha.style.color =  "#221f24";

let beta = document.querySelector("body");
beta.prepend(alpha);

let toggle = "dark";
alpha.addEventListener("click",() => {
  if (toggle ==="dark") {
    toggle = "light";
    document.querySelector("body").style.backgroundColor = "#d7abeb";
  }
  else{
    toggle = "dark"; 
    document.querySelector("body").style.backgroundColor = "#000000";
}
console.log(toggle);
})  

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------


let toggle = "dark";
alpha.addEventListener("click",() => {
  if (toggle ==="dark") {
    toggle = "light";
    beta.classList.add("light");
    beta.classList.remove("dark"); //it should be removed also otherwise style will override due use of CSS
  }
  else{
    toggle = "dark"; 
    beta.classList.add("dark");
    beta.classList.remove("light");
}
console.log(toggle);
})  