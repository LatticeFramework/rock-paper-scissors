let randomNumber = Math.random();


const playerSelection = "rOck";
console.log(playerSelection);

const computerSelection = getComputerChoice();

const PSCase = playerSelection.toUpperCase();
const CSCase = computerSelection.toUpperCase();


function getComputerChoice() {

    

    if (randomNumber < 0.33) {
        return 'rock';
    } else if (0.33 <= randomNumber && randomNumber < 0.66) {
        return 'paper';
    } else if (0.66 <= randomNumber) {
        return 'scissors';
    }
}

    console.log(getComputerChoice())



function playRound(playerSelection, computerSelection) {



    if (PSCase == CSCase) {
        return "Draw";
    } else if (PSCase == "ROCK" && CSCase == "PAPER") {
        return "You lose! Paper beats Rock!";
    } else if (PSCase == "ROCK" && CSCase == "SCISSORS") {
        return "You win! Rock beats Scissors";
    } else if (PSCase == "PAPER" && CSCase == "ROCK") {
        return "You win! Paper beats Rock";
    } else if (PSCase == "PAPER" && CSCase == "SCISSORS") {
        return "You lose! Scissors beats Paper";
    } else if (PSCase == "SCISSORS" && CSCase == "ROCK") {
        return "You lose! Rock beats Scissors"; 
    } else if (PSCase == "SCISSORS" && CSCase == "PAPER") {
        return "You Win! Scissors beats Paper";
    }
}

console.log(playRound(playerSelection, computerSelection));

console.log(" ");
console.log("loop");
console.log(" ");

function game() {
    for (let i = 0; i < 5; i++) {

        playRound();
        console.log(playRound())

    }
}

game();

