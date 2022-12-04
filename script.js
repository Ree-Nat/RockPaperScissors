/*

Create a function getComputerChoice
 -Will return "Rock Paper Scissors"

    //define a functin getComputerchoice
    //Randomly select a interger from 0 1 2
    // if number = 0 it is paper
    // if number = 1 it is rock
    // if number = 2 it is scissors

Create a function that palys a single round of Rock Paper Scissors 
-Take two parameters playerSelection and computerSelection
-Compares them
-Decleares the winner
-Return a string "You lose! Paper Beats rock"
-Make case insensitive

if playerselection = computerselection
- print the string "tie" 

if playerselection is rock
- (computerselection scissors you win)
- (computer selection paper you lose)

if playerselection is paper
- (computerselection rock? you win)
- (computerselection scissors? you lose)

if playerselection is scissors
- (computerselection paper? you win)
- (computerselection rock? you lose)

else(print" That's not a weapon!)

Use prompt() to get user input
*/

function getComputerChoice(){
    
    let randomNumber = Math.floor(Math.random() * 3)

    switch(randomNumber){
        case (randomNumber = 0):
            return 'rock';
        case (randomNumber = 1):
            return 'paper';
        case (randomNumber = 2):
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case computerSelection:
            console.log("Its a tie!");
            console.log(playerSelection);
            console.log(computerSelection);
            break;
        
        case 'rock':
            if (computerSelection == 'scissors'){
                console.log("you win!")
                console.log(playerSelection);
                console.log(computerSelection);
            }
            else{
                console.log("you lose!")
                console.log(playerSelection);
                console.log(computerSelection);
            }
            break;


        case 'paper':
            if (computerSelection == 'rock'){
                console.log("you win!")
                console.log(playerSelection);
                console.log(computerSelection);
            }
            else{
                console.log("you lose!")
                console.log(playerSelection);
                console.log(computerSelection);
            }
            break;
    
        case 'scissors': 
            if (computerSelection == 'rock'){
                console.log("you win!")
                console.log(playerSelection);
                console.log(computerSelection);
            }
            else{
                console.log("you lose!")
                console.log(playerSelection);
                console.log(computerSelection);
            }
            break;
    
        default:
            console.log("that is not a weapon!");
            break;
    }

}


for(i = 0; i < 5; i++){
    let player = prompt("choose your weapon");
    player = player.toLowerCase();
    let computer = getComputerChoice();
    playRound(player, computer)
}