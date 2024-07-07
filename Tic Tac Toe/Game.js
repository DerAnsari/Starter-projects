let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".newOne");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let Para = document.getElementById("msg");
let turnO = true; // Initial turn
let count= 0

const winCombo = [ // 2D array that has win conditions
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

document.getElementById("turnIndicator1").style.visibility = "visible";    //circle goes first so player 1 is visible

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("cne");
        if(turnO){
            box.innerText= "O";
            document.getElementById("turnIndicator2").style.visibility = "visible";
            document.getElementById("turnIndicator1").style.visibility = "hidden";
            count ++;
            turnO= false;
        }else{
            box.innerText= "X";
            document.getElementById("turnIndicator1").style.visibility = "visible";
            document.getElementById("turnIndicator2").style.visibility = "hidden";
            count++
            turnO= true;
        }
        let isWinner= winnerCheck();
        if(count===9 && !isWinner){
            drawCheck();
        }
        box.disabled= true;
        winnerCheck();
    });
});
const drawCheck = () => {
    modal.style.display = "block";
    Para.innerHTML = `Game was a Draw.`;
    disableBox();
};
const winnerCheck= ()=>{               //FOR THE WINNER
    for(let pattern of winCombo){
        let poss1= boxes[pattern[0]].innerText;
        let poss2= boxes[pattern[1]].innerText;
        let poss3= boxes[pattern[2]].innerText;
    if (poss1!=""&&poss2!= "" && poss3!= ""){
        if(poss1===poss2 && poss2===poss3){
            modal.style.display = "block";   
            showWinner(poss1);
            disableBox();
        }
    }
    }
}

span.onclick = ()=> {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal || event.target == newBtn) {
        modal.style.display = "none";
    }
}
const disableBox= ()=>{
    for(let box of boxes){
        box.disabled= true
    }
}
const enableBox= ()=>{
    for(let box of boxes){
        box.disabled= false
        box.innerText= ""
    }
}
const showWinner = (winner) =>{
    Para.innerHTML= `Congragulations, winner is ${winner}`; 
}
const resetGame= ()=>{
    turnO= true
    document.getElementById("turnIndicator1").style.visibility = "visible";
    document.getElementById("turnIndicator2").style.visibility = "hidden";
    enableBox();
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);