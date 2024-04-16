let choices = document.querySelectorAll(".choice");
let result = document.querySelector("#result");
let userScoreDisplay = document.querySelector("#user-score-display");
let computerScoreDisplay = document.querySelector("#computer-score-display");
let userScore = 0;
let computerScore = 0;

let showWinner = (userWin, userChoice, computerChoice)=>{
    if(userWin){

        //console.log("You WIN!")
        result.innerText = `You WIN!, Your ${userChoice} beats ${computerChoice}`;
        result.style.backgroundColor = "#41B06E";
        result.style.color = "#392467";
        userScoreDisplay.innerText = ++userScore;
        

    }else{

        //console.log("You LOOSE!!!!!")
        result.innerText = `You LOST!, ${computerChoice} beats your ${userChoice}`;
        result.style.backgroundColor = "#FF204E";
        result.style.color = "#FFD1E3";
        computerScoreDisplay.innerText = ++computerScore;
    }
}

let playGame = (userChoice, computerChoice)=>{

    let userWin = true;

    //Draw Condition
    if(userChoice === computerChoice){

        //console.log("It's a DRAW!");
        result.innerText = "It's a DRAW, Try again!";
        result.style.backgroundColor = "#A367B1";
        result.style.color = "#392467";

    }else{
        if(userChoice === "rock"){
            // computerChoice might be either - paper/scissor.
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            // computerChoice might be either - rock/scissor.
            userWin = computerChoice === "rock" ? true : false;
        }else{
            // userChoise is scissor.
            // computerChoice might be either - rock/paper.
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

let findUserChoise = (choice)=>{
    let id = choice.getAttribute("id");
    //console.log(`You selected ${id}`);
    return id;
}

let findComputerChoice = ()=>{
    let choices = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() *3);
    //console.log(`Computer selected ${choices[index]}`);
    return choices[index];
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = findUserChoise(choice);
        let computerChoice = findComputerChoice();
        playGame(userChoice, computerChoice);
    })
});