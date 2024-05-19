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

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("Make your choice!");
        if (choice === null) {
            continue;
        }
        choice = choice.toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            return choice;
        }
    }
}

function playRound(hChoice, cChoice) {
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
}

function playGame() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

let humanScore = 0;
let computerScore = 0;

for (i = 0; i < 5; i++) {
    playGame();
}

console.log(`You: ${humanScore}`);
console.log(`Computer: ${computerScore}`);