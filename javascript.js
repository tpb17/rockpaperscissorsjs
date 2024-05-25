function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(hChoice) {
    let cChoice = getComputerChoice();
    if (hChoice == cChoice) {
        console.log(`Tie game! You selected ${hChoice} and the computer selected ${cChoice}`);
    } else if (hChoice == "rock") {
        if (cChoice == "scissors") {
            console.log(`You win! ${hChoice} beats ${cChoice}`);
            humanScore += 1;
        } else {
            console.log(`You lose! ${cChoice} beats ${hChoice}`);
            computerScore += 1;
        }
    } else if (hChoice == "paper") {
        if (cChoice == "rock") {
            console.log(`You win! ${hChoice} beats ${cChoice}`);
            humanScore += 1;
        } else {
            console.log(`You lose! ${cChoice} beats ${hChoice}`);
            computerScore += 1;
        }
    } else {
        if (cChoice == "paper") {
            console.log(`You win! ${hChoice} beats ${cChoice}`);
            humanScore += 1;
        } else {
            console.log(`You lose! ${cChoice} beats ${hChoice}`);
            computerScore += 1;
        }
    }
    updateScores();
}


let humanScore = 0;
let computerScore = 0;

const rbtn = document.querySelector("#rbtn");
const pbtn = document.querySelector("#pbtn");
const sbtn = document.querySelector("#sbtn");

rbtn.addEventListener("click", () => {
    playRound("rock");
})

pbtn.addEventListener("click", () => {
    playRound("paper");
})

sbtn.addEventListener("click", () => {
    playRound("scissors");
})


function updateScores(){
    const scores = document.querySelector(".scores");
    scores.textContent = `You: ${humanScore}\nComputer: ${computerScore}`;
    if (computerScore == 5) {
        scores.textContent = "Computer wins!";
        computerScore = 0;
        humanScore = 0;
    }
    else if (humanScore == 5) {
        scores.textContent = "You win!";
        computerScore = 0;
        humanScore = 0;
    }
}