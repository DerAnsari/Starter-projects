let userScore= 0;
let compScore= 0;

const msgPara= document.querySelector("#msgContent");
const choices = document.querySelectorAll(".Choice");
const userScorePara= document.querySelector("#scoreNum1");
const compScorePara= document.querySelector("#scoreNum2");
const resetBtn= document.querySelector("#reset");


const showWinner = (userWin, userChoice, choiceComp)=>{
    if(userWin){
        console.log("You win");
        userScore++;
        userScorePara.innerText= userScore;
        msgPara.innerText = `You Have Won, Your ${userChoice} beats ${choiceComp}`
        msgPara.style.backgroundColor= "#0B6E4F"
    }else{
        console.log("you Lose");
        compScore++
        compScorePara.innerText= compScore;
        msgPara.innerText = `You Have Lost, The comp's ${choiceComp} beats ${userChoice}`
        msgPara.style.backgroundColor= "#721817"
    }
}
const resetgame= ()=>{
    console.log("test 1")
    userScore=0;
    compScore=0;
    compScorePara.innerText= 0;
    userScorePara.innerText= 0;
    msgPara.innerText = "Begin The Game"
    msgPara.style.backgroundColor= "#403D58"

}
const compChoice= ()=>{
    const options= ["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = ()=>{
    console.log("Game was a draw")
    msgPara.innerText = "Game was a draw"
    msgPara.style.backgroundColor= "#685044"
}
const playGame = (userChoice)=>{
    console.log("user choice is", userChoice);
    const choiceComp = compChoice();
    console.log("Comp choice is", choiceComp);

    if(userChoice === choiceComp){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice=== "rock"){
            userWin = choiceComp === "paper"? false : true;
        }else if (userChoice=== "paper") {
            userWin = choiceComp=== "scissors"? false : true;
        }else{
            userWin = choiceComp=== "rock"? false: true;
        }
        showWinner(userWin, userChoice, choiceComp);
    }
}
choices.forEach((Choice) => {
    Choice.addEventListener("click", ()=>{
        const userChoice = Choice.getAttribute("id");
        playGame(userChoice);    
    });
});

resetBtn.addEventListener("click", ()=>{
    resetgame();
})

