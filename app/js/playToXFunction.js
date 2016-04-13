function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < x && computerWins < x) {
        var playerMove = getPlayerMove();
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


