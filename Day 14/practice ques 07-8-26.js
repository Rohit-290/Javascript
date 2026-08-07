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

let btn = document.querySelector("button");
btn.onclick = (e) => {
    console.log("My name is Son");
//     console.log(e);
//     console.log(e.type);
}

// // -----x--------------------------------x----------------------------------x---------------------------------------x--------------------------

