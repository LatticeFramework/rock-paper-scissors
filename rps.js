
const btns = document.querySelectorAll('button');
btns.forEach((btn) => {

    btn.addEventListener('click', () => {
        let playerSelection = btn.id;
        console.log(playerSelection);
        game(playerSelection)
    })
});

const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;



function getRandomNumber() {
    let randomNumb = Math.random();
    return randomNumb;
}

function toCapitalize(stringText) {
        stringText.toCapitalize();
}


function getComputerChoice() {

    let randomNumber = getRandomNumber();
    console.log(randomNumber)

    if (randomNumber < 0.33) {
        return 'rock';
    } else if (0.33 <= randomNumber && randomNumber < 0.66) {
        return 'paper';
    } else if (0.66 <= randomNumber) {
        return 'scissors';
    }
}

    console.log(computerSelection);



function playRound(playerSelection, computerSelection) {

    let PSCase = playerSelection.toUpperCase();
    let CSCase = computerSelection.toUpperCase();



    if (PSCase == CSCase) {
        return "Draw";
    } else if (PSCase == "ROCK" && CSCase == "PAPER") {
        computerScore += 1;
        return "You lose! Paper beats Rock!";
    } else if (PSCase == "ROCK" && CSCase == "SCISSORS") {
        playerScore += 1;
        return "You win! Rock beats Scissors";
    } else if (PSCase == "PAPER" && CSCase == "ROCK") {
        playerScore += 1;
        return "You win! Paper beats Rock";
    } else if (PSCase == "PAPER" && CSCase == "SCISSORS") {
        computerScore += 1;
        return "You lose! Scissors beats Paper";
    } else if (PSCase == "SCISSORS" && CSCase == "ROCK") {
        computerScore += 1;
        return "You lose! Rock beats Scissors"; 
    } else if (PSCase == "SCISSORS" && CSCase == "PAPER") {
        playerScore += 1;
        return "You Win! Scissors beats Paper";
    }
}

function game(playerSelection) {

        let computerSelection = getComputerChoice();
        console.log(computerSelection);

        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(" ");
        
        if (playerScore > computerScore) {
            console.log("You win!");
        } else if (computerScore > playerScore) {
            console.log("You lose!");
        } else {
            console.log("draw");
        }
}

function score(playerSelection, computerSelection) {

}

