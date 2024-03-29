//function that random pick rock, paper or scissors 
function getComputerChoice() {
const ComputerOptions = ["rock" , "paper" , "scissors"];
let ComputerChoice = ComputerOptions[Math.floor(Math.random()*3)];
return ComputerChoice; }

let PlayerScore = 0;
let ComputerScore = 0; 


//assign variables to html
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");

//creating five paragraph 
const playerLine = document.createElement("p");
result.appendChild(playerLine);

const computerLine = document.createElement("p");
result.appendChild(computerLine);

const gameLine = document.createElement("p");
result.appendChild(gameLine);

const gamePoints = document.createElement("p");
result.appendChild(gamePoints);

const endLine = document.createElement("p");
result.appendChild(endLine);

//function that clear round and set player and computer points to 0
function resetFunction() {
    gameLine.textContent = '';
    playerLine.textContent = '';
    computerLine.textContent = '';
    gamePoints.textContent = '';
    PlayerScore = 0;
    ComputerScore = 0; }

    //adding click event on button
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            PlayerSelection = button.value;
        
    //assigning random pick (R,P or S) to ComputerSelection
    let ComputerSelection = getComputerChoice();
    
    //display player selection
    playerLine.textContent = "Player choice is: "+PlayerSelection;
    
    //display computer selection
    computerLine.textContent = "Computer choice is: "+ComputerSelection;

    //checking conditionals of rounds and displaying round result and current points
    if(PlayerSelection == ComputerSelection) {
        gameLine.textContent = "It's a draw!";
        gamePoints.textContent = "Player: "+ (PlayerScore+=0) +", Computer: "+ (ComputerScore+=0); }

    else if(PlayerSelection == "paper" && ComputerSelection == "rock") {
        gameLine.textContent = "Player Wins!";
        gamePoints.textContent = "Player: "+ (PlayerScore+=1) +", Computer: "+(ComputerScore+=0); }

    else if(PlayerSelection == "rock" && ComputerSelection == "scissors") {
        gameLine.textContent = "Player Wins!";
        gamePoints.textContent = "Player: "+ (PlayerScore+=1) +", Computer: "+(ComputerScore+=0); }

    else if(PlayerSelection == "scissors" && ComputerSelection == "paper") {
        gameLine.textContent = "Player Wins!";
        gamePoints.textContent = "Player: "+ (PlayerScore+=1) +", Computer: "+(ComputerScore+=0); }

    else if(PlayerSelection == "paper" && ComputerSelection == "scissors") {
        gameLine.textContent = "Computer Wins!";
        gamePoints.textContent = "Player: "+ (PlayerScore+=0) +", Computer: "+(ComputerScore+=1); }

    else if(PlayerSelection == "rock" && ComputerSelection == "paper") {
        gameLine.textContent = "Computer Wins!"; 
        gamePoints.textContent = "Player: "+ (PlayerScore+=0) +", Computer: "+(ComputerScore+=1); }

    else if(PlayerSelection == "scissors" && ComputerSelection == "rock") {
        gameLine.textContent = "Computer Wins!"; 
        gamePoints.textContent = "Player: "+ (PlayerScore+=0) +", Computer: "+(ComputerScore+=1); }

    else { gameLine.textContent = "Choose the right option"; } 

    //conditional that ends round when someone get 5 points
    if(PlayerScore == 5) {
        endLine.textContent = "Congrats, You WIN!";
        resetFunction(); }
    else if(ComputerScore == 5) {
        endLine.textContent = "Game over, Computer WINS!";
        resetFunction(); }
    else { endLine.textContent = " " } ;

})}); 


