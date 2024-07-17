const display = document.getElementById("display");
let calculated= false

function apendToDisplay(input){
    if(calculated){
        display.value= input;
        calculated= false
    }else{
        display.value+= input;
    }
    savedata();
};

function clearDisplay(){
    display.value="";
    savedata();
};

function calculate(){
    try{
        display.value=eval(display.value);
        calculated= true
        savedata();
    }catch{
        display.value= "Math Error";
        calculated= true
        savedata();
    };
};

function savedata(){
    localStorage.setItem("data",display.value);
};

function loaddata() {
    const savedValue = localStorage.getItem("data");
    if (savedValue) {
        display.value = savedValue;
    };
};

window.onload = loaddata;