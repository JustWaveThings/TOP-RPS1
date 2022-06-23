


// initalized global variables
let compScore = 0;
let playerScore = 0;
let roundA = 1;

// computer choice function

function compChoice() {
  let handChoice = ["Rock", "Paper", "Scissors"];
  return handChoice[Math.floor(Math.random() * handChoice.length)];
}

// 

function playRound(playerSelection, computerSelection = compChoice()) {
 
  if (computerSelection === playerSelection) {
      roundResult.textContent = `You both played ${computerSelection}! Go again.`;
      roundScore();
  }
  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
        ++playerScore;
        roundResult.textContent = `The point is yours! Your ${playerSelection} beat the computer's ${computerSelection}. `;
        roundScore();
    } else if (computerSelection === "Paper") {
        ++compScore;
        roundResult.textContent = `The point goes to the computer. Their ${computerSelection} beat your ${playerSelection}`;
        roundScore();
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
        ++playerScore;
        roundResult.textContent = `The point is yours! Your ${playerSelection} beat the computer's ${computerSelection}.`;
        roundScore();
      } else if (computerSelection === "Rock") {
        ++compScore;
        roundResult.textContent = `The point goes to the computer. Their ${computerSelection} beat your ${playerSelection}`;
        roundScore();
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
        ++playerScore;
        roundResult.textContent = `The point is yours! Your ${playerSelection} beat the computer's ${computerSelection}.`;
        roundScore();
    } else if (computerSelection === "Scissors"){
        ++compScore;
        roundResult.textContent = `The point goes to the computer. Their ${computerSelection} beat your ${playerSelection}`;
        roundScore();
    }
  }
}

function roundScore(round = roundA, playerS = playerScore, compS = compScore) {
  ++roundA;
  let commentary = `At the end of round ${round}, the score is ${playerS} for you, and ${compS} for the computer.`;
  endGame();
  displayRound.textContent = `SCOREBOARD: ${commentary}`;
}

function endGame (playerS = playerScore, compS = compScore) {
  if (compS > 4) {
    displayRound.textContent = "Computer Won. Reload page to try again.";
    return "end";
  } else if (playerS > 4) {
    displayRound.textContent = "You beat the computer. Way to go! Reload page to try your luck again.";
    return "end";
  }
}
  
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playRound(button.id, compChoice());
    removeListeners();
  });
});//

https: function removeListeners(game = endGame()) {
  if (game === "end") {
    const elem = document.getElementById("playerinput");
    elem.replaceWith(elem.cloneNode(true));
  }
}



const container = document.querySelector('#container');

const roundResult = document.createElement("p");
roundResult.classList.add("roundResult");
container.appendChild(roundResult); 

const displayRound = document.createElement('h3');
displayRound.classList.add('displayRound');
container.appendChild(displayRound); 

