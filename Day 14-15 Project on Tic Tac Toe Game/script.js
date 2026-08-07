let three = document.querySelectorAll(".one");
let bn = document.querySelector(".alpha");
let wPat = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] ;
let player0 = true;


three.forEach((one) => {
    one.addEventListener("click", () =>{  
     
    if(player0){
    one.innerText = "O";
    player0 = false;
    }else{
    one.innerText = "X";
    player0 = true;
    }
    one.disabled = true;

    checkWinner()
})
})


const checkWinner = () => {
    for(let pattern of wPat){
        let pos1v = (three[pattern[0]].innerText);
        let pos2v = (three[pattern[1]].innerText);
        let pos3v = (three[pattern[2]].innerText);
        
        if(pos1v != "" && pos2v != "" && pos3v != "" ){
           if(pos1v==pos2v && pos2v==pos3v);
           console.log ("winner");
        }
        
        }      
    }




