const inputBox = document.getElementById("text-box");
const listBox = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You Have to Write Something");
    }else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    };
    inputBox.value = "";
    savedData();
};

listBox.addEventListener("click",function(insert){
    if(insert.target.tagName=== "LI"){
        insert.target.classList.toggle("checked")
        savedData()
    }
    else if(insert.target.tagName === "SPAN"){
        insert.target.parentElement.remove()
        savedData()
    }
},false)

function savedData(){
    localStorage.setItem("data",listBox.innerHTML);
}
showTask= ()=>{
    listBox.innerHTML=localStorage.getItem("data");
}
showTask();