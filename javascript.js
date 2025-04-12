// Gets randomly generated choice from computer
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    

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
    }

}







