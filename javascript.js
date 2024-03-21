function getComputerChoice(){
    let rand;
    rand = Math.random();
    rand = Math.round(rand * 100);
    remainder = rand % 3;
    switch(remainder){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    
    if(playerSelection === computerSelection){
        return ("It is a draw!");
    }

    if(playerSelection == "rock"){
        if(computerSelection == "scissors"){
            return ("You Win! " + playerSelection + " beats " + computerSelection);
        }
        if(computerSelection == "paper"){
            return ("You Lose! " + computerSelection + " beats " + playerSelection);
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            return ("You Win! " + playerSelection + " beats " + computerSelection);
        }
        if(computerSelection == "rock"){
            return ("You Lose! " + computerSelection + " beats " + playerSelection);
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return ("You Win! " + playerSelection + " beats " + computerSelection);
        }
        if(computerSelection == "scissors"){
            return ("You Lose! " + computerSelection + " beats " + playerSelection);
        }
    }
}

function playGame(){
    const body = document.querySelector("body");
const nodeList = document.querySelectorAll("button");
const rock = nodeList[0];
const paper = nodeList[1];
const scissors = nodeList[2];

let arr = Array.from(nodeList);
let userScore = 0;
let computerScore = 0;
let winnerAnnounce = null;
for(let i = 0; i < arr.length; i++){
    arr[i].addEventListener("click", () => {
    let result = playRound(arr[i].textContent.toLowerCase(), getComputerChoice());
    if(result[4] === 'W') userScore++;
    if(result[4] === 'L') computerScore++;
    if(userScore === 5){
        winnerAnnounce = "The winner is the player!";
    }
    if(computerScore === 5){
        winnerAnnounce = "The winner is the computer!";
    }
    const message = document.createElement("div");
    const runningResult = document.createElement("span");
    const finalResult = document.createElement("div");
    message.textContent = result;
    runningResult.textContent = "player: " + userScore + "\nComputer: " + computerScore;
    body.appendChild(message);
    body.appendChild(runningResult);
    if(winnerAnnounce){
        finalResult.textContent = winnerAnnounce;
        body.appendChild(finalResult);
    }
    });
}
}

playGame();



