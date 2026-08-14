const base_URL = "https://v6.exchangerate-api.com/v6/a4857c949060c4ad31e92a7f/latest/";
const nations = document.querySelectorAll(".nat select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector('select[name="from"]');
const toCurr = document.querySelector('select[name="to"]');
const output = document.querySelector("#p1");
const input = document.querySelector("#p2");


//-----------------------------------*-----------------------------------------*----------------------------------------*---------------


for(let select of nations){
    for(con in countryList){
        let newOptions = document.createElement("option"); 
        newOptions.innerText = con;
        newOptions.value = con;
        if(select.name === "from" && con === "USD"){
            newOptions.selected = "selected";
        }else if(select.name === "to" && con === "INR"){
            newOptions.selected = "selected";
        }
        select.append(newOptions);
     }
select.addEventListener("change",(e)=>{
    updateFlag(e.target);
});
}


//-----------------------------------*-----------------------------------------*----------------------------------------*---------------


const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


//-----------------------------------*-----------------------------------------*----------------------------------------*---------------


btn.addEventListener("click", async (e) =>{
    let amount = document.querySelector(".cur-1 input");
    let amtVal = amount.value;
    btn.disabled = true;
    if(amtVal === "" || amtVal<1){
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${base_URL}/${fromCurr.value.toUpperCase()}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.conversion_rates[toCurr.value.toUpperCase()];
    let finalAmount = amtVal * rate ;
    output.value =`${finalAmount}`;
    reset();
});


//-----------------------------------*-----------------------------------------*----------------------------------------*---------------


let reset = () => {
    btn.disabled = false;
    if(input.value = null){
        output.value = null;
    }
}
