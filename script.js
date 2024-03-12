function getComputerChoice() {
const ComputerOptions = ["rock" , "paper" , "scissors"];
let ComputerChoice = ComputerOptions[Math.floor(Math.random()*3)];
return ComputerChoice; }

let PlayerScore = 0;
let ComputerScore = 0; 

function round() {
    let ComputerSelection = getComputerChoice();
    let PlayerSelection = prompt("Type your option: rock, paper or scissors").toLowerCase();
    
    console.log("Player choice is: "+PlayerSelection);
    console.log("Computer choice is: "+ComputerSelection);

    if(PlayerSelection == ComputerSelection) {
        console.log("It's a draw!");
        console.log("Player: "+ (PlayerScore+=0) +", Computer: "+ (ComputerScore+=0)); }

    else if(PlayerSelection == "paper" && ComputerSelection == "rock") {
        console.log("Player Wins!");
        console.log("Player: "+ (PlayerScore+=1) +", Computer: "+(ComputerScore+=0)); }

    else if(PlayerSelection == "rock" && ComputerSelection == "scissors") {
        console.log("Player Wins!");
        console.log("Player: "+ (PlayerScore+=1) +", Computer: "+(ComputerScore+=0)); }

    else if(PlayerSelection == "scissors" && ComputerSelection == "paper") {
        console.log("Player Wins!");
        console.log("Player: "+ (PlayerScore+=1) +", Computer: "+(ComputerScore+=0)); }

    else if(PlayerSelection == "paper" && ComputerSelection == "scissors") {
        console.log("Computer Wins!");
        console.log("Player: "+ (PlayerScore+=0) +", Computer: "+(ComputerScore+=1)); }

    else if(PlayerSelection == "rock" && ComputerSelection == "paper") {
        console.log("Computer Wins!"); 
        console.log("Player: "+ (PlayerScore+=0) +", Computer: "+(ComputerScore+=1)); }

    else if(PlayerSelection == "scissors" && ComputerSelection == "rock") {
        console.log("Computer Wins!"); 
        console.log("Player: "+ (PlayerScore+=0) +", Computer: "+(ComputerScore+=1)); }

    else { console.log("Choose the right option"); } }

function Game(){
    for(let i=0; i<Infinity; i++)
    {  round();
    console.log(" ");
    if(PlayerScore == 5) {
        console.log("Congrats, You WIN!") }
    else if(ComputerScore == 5) {
        console.log("Game over, Computer WINS!") }
    else { console.log(" ") } } }

Game();