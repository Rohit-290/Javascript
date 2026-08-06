let div = document.querySelector(".two");
div.onclick = () => {
    console.log("JavaScript");
}

let para = document.querySelector(".content");
para.onclick = (e) => {
    console.log("My name is Alfred");
    console.log(e);
    console.log(e.type);
}