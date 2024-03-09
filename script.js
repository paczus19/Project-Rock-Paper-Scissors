function getComputerChoice() {
const ComputerOptions = ["rock" , "paper" , "scissors"];
let ComputerChoice = ComputerOptions[Math.floor(Math.random()*3)];
return ComputerChoice; }

let ComputerSelection = getComputerChoice();

function round() {
    let PlayerSelection = prompt("Type your option: rock, paper or scissors");
    let PlayerChoice = PlayerSelection.toLowerCase();
    console.log("Player choice is: "+PlayerChoice);
    console.log("Computer choice is: "+ComputerSelection);

    if(PlayerChoice == ComputerSelection) {
        console.log("It's a draw!"); }

    else if(PlayerChoice == "paper" && ComputerSelection == "rock") {
        console.log("Player Wins!"); }

    else if(PlayerChoice == "paper" && ComputerSelection == "scissors") {
        console.log("Computer Wins!"); }

    else if(PlayerChoice == "rock" && ComputerSelection == "paper") {
        console.log("Computer Wins!"); }

    else if(PlayerChoice == "rock" && ComputerSelection == "scissors") {
        console.log("Player Wins!"); }

    else if(PlayerChoice == "scissors" && ComputerSelection == "rock") {
        console.log("Computer Wins!"); }
    
    else if(PlayerChoice == "scissors" && ComputerSelection == "paper") {
        console.log("Player Wins!"); }

    else { console.log("There's a mistake in Code"); }
}

function Game(){
    for(let i=0; i<6; i++)
    {
        round();
        console.log(" ");
        console.log(" ");
    }
}

Game();

