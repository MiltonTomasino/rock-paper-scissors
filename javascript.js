// Gets randomly generated choice from computer
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);    

    if (num === 0){
        return "rock";
    } else if (num === 1){
        return "paper";
    } else {
        return "scissors";
    }
    
}

// Gets input from user
function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors: ");
}

// Checks who is the winner between the two players
function playRound(humanChoice, computerChoice) {
    let choice = humanChoice.toLowerCase();

    switch (choice){
        case "rock":
            if (computerChoice === "paper"){
                console.log("Computer Wins!");
                computerScore += 1;
            } else if (computerChoice === "scissors"){
                console.log("You Win!");
                humanScore += 1;
            } else if (computerChoice === "rock"){
                console.log("Draw!")
            }
            break;
        case "paper":
            if (computerChoice === "paper"){
                console.log("Draw");
            } else if (computerChoice === "scissors"){
                console.log("Computer Win!");
                computerScore += 1;
            } else if (computerChoice === "rock"){
                console.log("You Win!")
                humanScore += 1
            }
            break;
        case "scissors":
            if (computerChoice === "paper"){
                console.log("You Win!");
                humanScore += 1;
            } else if (computerChoice === "scissors"){
                console.log("Draw!");
            } else if (computerChoice === "rock"){
                console.log("Computer Wins!")
                computerScore += 1;
            }
            break;
        default:
            console.log("Invalid input");
            break;    
    }    

}

// keep track of scores
let humanScore = 0;
let computerScore = 0;


// start the game and play for roundCount times
function playGame() {
    let roundCount = 5;

    while (roundCount > 0){
        let human = getHumanChoice();
        let computer = getComputerChoice();
        
        console.log(`You chose ${human} and the computer chose ${computer}`);

        playRound(human, computer);

        console.log(`SCORE:\nHuman: ${humanScore} Computer: ${computerScore}`);

        roundCount -= 1;
    }
}

