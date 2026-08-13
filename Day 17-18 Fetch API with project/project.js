const base_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies" ;

const nations = document.querySelectorAll(".nat select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from1");
const toCurr = document.querySelector(".to1");

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

const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (e) =>{
    let amount = document.querySelector(".cur-1");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal<1){
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${base_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase];

    let finalAmount = amtVal * rate ;
    toCurr.innerText = `${finalAmount}`;
});