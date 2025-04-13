// Gets randomly generated choice from computer
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

// Checks who is the winner between the two players
function playRound(humanChoice, computerChoice) {
    let choice = humanChoice.toLowerCase();

    switch (choice) {
        case "rock":
            if (computerChoice === "paper") {
                console.log("Computer Wins!");
                computerScore += 1;
            } else if (computerChoice === "scissors") {
                console.log("You Win!");
                humanScore += 1;
            } else if (computerChoice === "rock") {
                console.log("Draw!")
            }
            break;
        case "paper":
            if (computerChoice === "paper") {
                console.log("Draw");
            } else if (computerChoice === "scissors") {
                console.log("Computer Win!");
                computerScore += 1;
            } else if (computerChoice === "rock") {
                console.log("You Win!")
                humanScore += 1
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                console.log("You Win!");
                humanScore += 1;
            } else if (computerChoice === "scissors") {
                console.log("Draw!");
            } else if (computerChoice === "rock") {
                console.log("Computer Wins!")
                computerScore += 1;
            }
            break;
        default:
            console.log("Invalid input");
            break;
    }

    playerScoreBoard.innerHTML = `Player: ${humanScore}`;
    computerScoreBoard.innerHTML = `Computer: ${computerScore}`

    if (humanScore === 5 || computerScore === 5) {
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        restart.classList.add("active");
        let winner = humanScore === 5 ? "You" : "Computer";
        winnerHeader.textContent = `The winner is: ${winner}!`
        restart.appendChild(winnerHeader)
        
    }

}

// keep track of scores
let humanScore = 0;
let computerScore = 0;

// collect necessary elements
const btnContainer = document.querySelector(".btn-container");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const restart = document.querySelector(".restart");
const playerScoreBoard = document.querySelector(".player");
const computerScoreBoard = document.querySelector(".computer");
const winnerHeader = document.createElement("h1");

// retrieve player's choice and pass it to playRound
btnContainer.addEventListener("click", (e) => {
    let target = e.target;
    let computer = getComputerChoice();

    switch (target.id) {
        case "btn1":
            console.log("Rock");
            playRound("rock", computer);
            break;
        case "btn2":
            console.log("Paper");
            playRound("paper", computer);
            break;
        case "btn3":
            console.log("Scissors");
            playRound("scissors", computer);
            break;
    }
});

restart.addEventListener("click", () => {
    restartGame();
})


// restart game
function restartGame() {
    humanScore = 0;
    computerScore = 0;
    playerScoreBoard.textContent = "Player: 0";
    computerScoreBoard.textContent = "Computer: 0";
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    restart.classList.remove("active");
    restart.removeChild(winnerHeader);
}

