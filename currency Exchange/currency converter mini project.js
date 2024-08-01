const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const swap = document.querySelector(".fa-arrow-right-arrow-left");

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption= document.createElement("option");
        newOption.innerText = currCode;
        newOption.value= currCode;
        if(select.name === "from" && currCode=== "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode=== "PKR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    });
}

function updateExchangerate(){
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .msg");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/8046449dd633c5145ca303bd/latest/${fromCurr.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurr.value]; 
        let totalExRate = (amountVal * exchangeRate).toFixed(2); 
        exchangeRateTxt.innerText = `${amountVal} ${fromCurr.value} = ${totalExRate} ${toCurr.value}`;
    }).catch(() =>{ 
        exchangeRateTxt.innerText = "Something went wrong";
    });
}

const updateFlag= (element) => {
    let currCode= element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    updateExchangerate()
});

swap.addEventListener("click",()=>{
    let tempCurr = fromCurr.value;
    fromCurr.value= toCurr.value;
    toCurr.value= tempCurr;
    updateFlag(fromCurr);
    updateFlag(toCurr);
    updateExchangerate();
})

window.addEventListener("load", ()=>{
    updateExchangerate();
})








