/*    back to basics.... pseudocode and break it down into discrete parts

objectives

    overall goal - have a functional, console based rock paper scissors game that has 5 rounds and declares a winner at the end 

    Things needed to meet overall goal:
        - variables initalized for computer and player score
        - check at the end of the round if there's a winner of the game.
        - increment score at the end of the round 
        - keep and display score after each round.
        - random computer selection from options
        - prompt for player to pick an option  
        - fix player input to meet strict equality (bonus) not let player  make an invalid selection so no round is forfeit.  --  like an if statement that if the input isn't rock, paper, or scissors, it doesn't accept it and makes them input again before processing the input into the game. 
        - logic that compares computer choice to player choice to decide winner of round
        - bonus: contextually appropriate statements that add some fun to the winning and losing each round. 


        psuedocode 

        init compScore 0
        init playerScore 0

        if playerScore === 5 or compScore === 5 
            then gameOver 
            else
            playRound

        playRound gets parameters  compChoice and playerChoice
            if playerChoice is rock  & compChoice is scissors or not paper
                player wins
                increment playerScore +1
                return console log  ( Player wins - you chose playerchoice and computer chose compchoice )
            else 
                player loses
                increment compScore +1
                return console log ( player loses - you chose playerChoice and computer chose compChoice.)

            repeat for playerChoice scissors and paper
            ...

            gameOver
                if compScore === 5 
                    you lost the game.  reload page to try your luck next time 
                else if playerScore === 5
                    you won the game. reload page to try to win again. 

            
*/

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
    if (compS <= 4 && playerS <= 4) {
        playRound();
    } else {
        if (compS > 4) {
            console.log("Computer Won. Reload page to try again.");
            return ;
        } else {
            console.log("You beat the computer. Way to go! Reload page to try your luck again.");
            return;
        }
    }
}

function playerClick() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
            playRound(compChoice(), button.id);
        });
  });
}

playerClick();

