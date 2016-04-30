////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
};

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
};

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            winner = 'player';
        } else {
            winner = 'computer';
        }
    } else {
        if (computerMove === 'rock') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }
    return winner;
};

// *Alternate getWinner function*
// function getWinner(playerMove,computerMove) {
//     var winner;
//     // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
//     // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
//     // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
//     /* YOUR CODE HERE */
//     var possibleNonTieResults = {
//                             'rock,paper': 'computer',
//                             'paper,scissors': 'computer',
//                             'scissors,rock': 'computer',
//                             'paper,rock': 'player',
//                             'scissors,paper': 'player',
//                             'rock,scissors': 'player'
//     };
//
//     if (playerMove === computerMove) {
//         winner = 'tie';
//     } else {
//         winner = possibleNonTieResults[playerMove + "," + computerMove];
//     }
//     return winner;
// };

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove().toLowerCase();
        if (playerMove !== 'rock' && playerMove !== 'paper' && playerMove !== 'scissors') {
            console.log('That was not a valid entry!');
            continue;
        }
        var computerMove = getComputerMove();
        var currentRoundWin = getWinner(playerMove, computerMove);
        if (currentRoundWin === 'player') {
            playerWins++;
        }
        else if (currentRoundWin === 'computer') {
            computerWins++;
        }
        else {
            console.log('That round was a tie; no points!');
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently Player: ' + playerWins + ', Computer: ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
};

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < x && computerWins < x) {
        var playerMove = getPlayerMove().toLowerCase();
        if (playerMove !== 'rock' && playerMove !== 'paper' && playerMove !== 'scissors') {
            console.log('That was not a valid entry!');
            continue;
        }
        var computerMove = getComputerMove();
        var currentRoundWin = getWinner(playerMove, computerMove);
        if (currentRoundWin === 'player') {
            playerWins++;
        }
        else if (currentRoundWin === 'computer') {
            computerWins++;
        }
        else {
            console.log('That round was a tie; no points!');
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently Player: ' + playerWins + ', Computer: ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
};


////////////////////////////////////////////////////////////
//*unit test getWinner() function
// console.log('the winner is ' + getWinner('paper', 'rock'));
// console.log('the winner is ' + getWinner('paper', 'paper'));
// console.log('the winner is ' + getWinner('scissors', 'rock'));
