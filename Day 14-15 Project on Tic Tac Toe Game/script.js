let three = document.querySelectorAll(".one");       
let bn = document.querySelector(".re-btn");
let bn1 = document.querySelector(".new-btn");              
let win = document.querySelector(".sWin");
let wPat = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] ;
let player0 = true;

        
//-----------------------------------*-----------------------------------------*----------------------------------------*---------------


three.forEach((one) => {
    one.addEventListener("click", () =>{  
    
    
    if(player0){
    one.innerText= "O";
    one.style.color = "#FF204E";
    bn.style.backgroundColor = "#000000";
    player0 = false;
    }else{
    one.innerText = "X";
    one.style.color = "#2F58CD" 
    player0 = true;
    }
    one.disabled = true;
        
    
    checkWinner ()
})
})


//-----------------------------------*-----------------------------------------*----------------------------------------*---------------

const resetButton = () => {
    player0 = true;
    enableBoxes ();
    win.classList.add("hide");
}

//-----------------------------------*-----------------------------------------*----------------------------------------*---------------

const disableBoxes= () => {
    for(let box of three){
        box.disabled = true;
    }  
 }

 //-----------------------------------*-----------------------------------------*----------------------------------------*---------------
  
 const enableBoxes= () => {
    for(let box of three){
        box.disabled = false;
        box.innerText = "";
        bn.style.backgroundColor = "#9E4784";
    }  
 }

 //-----------------------------------*-----------------------------------------*----------------------------------------*---------------
  
const showWinner = (winner)  => {
    win.innerText = `Congratulations on winning the game ${winner}`;
    win.classList.remove("hide");
    disableBoxes();
}

//-----------------------------------*-----------------------------------------*----------------------------------------*---------------


const checkWinner = () => {
    for(let pattern of wPat){
        let pos1v = three[pattern[0]].innerText;
        let pos2v = three[pattern[1]].innerText;
        let pos3v = three[pattern[2]].innerText;
        
        if(pos1v != "" && pos2v != "" && pos3v != "" )
            {
           if(pos1v === pos2v && pos2v == pos3v)
            {
            console.log("winner")
            showWinner(pos1v);
            }
        }
        
        }      
    }


//-----------------------------------*-----------------------------------------*----------------------------------------*---------------

 bn.addEventListener("click",resetButton);
 bn1.addEventListener("click",resetButton);