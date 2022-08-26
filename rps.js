let randomNumber = Math.random();
console.log(randomNumber);

function getComputerChoice() {
    

    if (randomNumber < 0.33) {
        return 'rock';
    } else if (0.33 <= randomNumber && randomNumber < 0.66) {
        return 'paper';
    } else if (0.66 <= randomNumber) {
        return 'scissors';
    }   
}

console.log(getComputerChoice());