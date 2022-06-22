


// initalized global variables
let compScore = 0;
let playerScore = 0;
let roundA = 1;

// computer choice function

function compChoice() {
  let handChoice = ["Rock", "Paper", "Scissors"];
  return handChoice[Math.floor(Math.random() * handChoice.length)];
}


function playRound(playerSelection, computerSelection = compChoice()) {
 
  if (computerSelection === playerSelection) {
      console.log(`You both played ${computerSelection}! Go again.`);
      roundScore();
  }
  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
        ++playerScore;
        console.log(
          `The point is yours! Your ${playerSelection} beat the computer's ${computerSelection}.`
        );
        roundScore();
    } else if (computerSelection === "Paper") {
        ++compScore;
        console.log(
          `The point goes to the computer. Their ${computerSelection} beat your ${playerSelection}`
        );
        roundScore();
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
        ++playerScore;
        console.log(
          `The point is yours! Your ${playerSelection} beat the computer's ${computerSelection}.`
        );
        roundScore();
      } else if (computerSelection === "Rock") {
        ++compScore;
        console.log(
          `The point goes to the computer. Their ${computerSelection} beat your ${playerSelection}`
        );
        roundScore();
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
        ++playerScore;
        console.log(
          `The point is yours! Your ${playerSelection} beat the computer's ${computerSelection}.`
        );
        roundScore();
    } else if (computerSelection === "Scissors"){
        ++compScore;
        console.log(
          `The point goes to the computer. Their ${computerSelection} beat your ${playerSelection}`
        );
        roundScore();
    }
  }
}

function roundScore(round = roundA, playerS = playerScore, compS = compScore) {
    ++roundA;
    console.log(`At the end of round ${round}, the score is ${playerS} for you, and ${compS} for the computer.`);
    endGame();
}

function endGame (playerS = playerScore, compS = compScore) {
  if (compS > 4) {
    console.log("Computer Won. Reload page to try again.");
    return "end";
  } else if (playerS > 4) {
    console.log("You beat the computer. Way to go! Reload page to try your luck again.");
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
});

function removeListeners(game = endGame()) {
  if (game === 'end') {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!the true condition of removeListeners ran");
    const elem = document.getElementById("playerinput");
    elem.replaceWith(elem.cloneNode(true));
  }
}