function getComputerChoice(){
    let rock =1;
    let scissor = 2;
    let paper = 3;
    let choice = Math.floor(Math.random()*(3)+1);
    let ans;
    if(choice == 1) ans = "ROCK";
    if(choice==2) ans = "SCISSOR";
    if(choice==3) ans = "PAPER";
    return ans;
}


function playRound(computerSelection,playerSelection){
    let winner;
    if(playerSelection=="ROCK"){
        if(computerSelection=="PAPER"){
            winner = -1;
        }
        else if(computerSelection=="ROCK"){
            winner= 0;
        }
        else if(computerSelection=="SCISSOR"){
            winner = 1;
        }
    }
    else if(playerSelection=="SCISSOR"){
        if(computerSelection=="PAPER"){
            winner = 1;
        }
        else if(computerSelection=="SCISSOR"){
            winner= 0;
        }
        else if(computerSelection=="ROCK"){
            winner = -1;
        }
    }
    else if(playerSelection=="PAPER"){
        if(computerSelection=="ROCK"){
            winner = 1;
        }
        else if(computerSelection=="PAPER"){
            winner= 0;
        }
        else if(computerSelection=="SCISSOR"){
            winner =-1;
        }
    }
    return winner;
}
function game(){
    let Machine =0;
    let Player = 0;
    for(let i =0;i<5;i++){
        let computerSelection = getComputerChoice();
        let playerInput = prompt("Enter your weapon name: Rock/Paper/Scissor");
        let playerSelection = playerInput.toUpperCase();
        let winner = playRound(computerSelection,playerSelection);
        if(winner ==0){
            console.log(`It's a tie! You both chose ${playerSelection}`);
            console.log(`Machine = ${Machine}`);
            console.log(`Player = ${Player}`);
        }
        if(winner == 1){
            console.log(`you won ${playerSelection} beats ${computerSelection}`);
            Player = Player +1;
            console.log(`Machine = ${Machine}`);
            console.log(`Player = ${Player}`);
        }
        if(winner == -1){
            console.log(`you lose! ${computerSelection} beats ${playerSelection}`);
            Machine = Machine +1;
            console.log(`Machine = ${Machine}`);
            console.log(`Player = ${Player}`);
        }
    }
    if(Player>Machine){
        console.log("Hurray! You are the winner");
    }
    else if(Machine>Player){
        console.log("Ahhhhh! you lost against the machine");
    }
    else{
        console.log("You both tied the game!");
    }
}
game();