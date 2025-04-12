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

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors: ");
}







