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

const btns = document.querySelectorAll('button');
btns.forEach((button) =>{
    button.addEventListener('click',()=>{
        const playerSelection = button.textContent.toUpperCase();
        let res = playRound(getComputerChoice(),playerSelection);
        printWinner(res);
    });
});
let playerPoint = 0;
let computerPoint = 0;
const board = document.createElement('div');
board.textContent=`Player = ${playerPoint} Computer = ${computerPoint}`;

const game = document.querySelector('#container');
game.appendChild(board);
function printWinner(result){
    if(playerPoint==4 && result ==1){
        playerPoint++;
        board.textContent=`Player = ${playerPoint} Computer = ${computerPoint} Game won by Player`;
        playerPoint = 0;
        computerPoint = 0;
    }
    else if(computerPoint ==4 && result==-1){
        computerPoint++;
        board.textContent=`Player = ${playerPoint} Computer = ${computerPoint} Game won by Computer`;
        playerPoint = 0;
        computerPoint = 0;
    }
    else{
        if(result==-1){
            computerPoint++;
        }
        else if(result==1){
            playerPoint++;
        }
        board.textContent=`Player = ${playerPoint} Computer = ${computerPoint}`;
        
    }
}



