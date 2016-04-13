function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var possibleResults = { 
                            'rock,paper': 'computer', 
                            'paper,scissors': 'computer', 
                            'scissors,rock': 'computer', 
                            'paper,rock': 'player', 
                            'scissors,paper': 'player',
                            'rock,scissors': 'player'
    };

    if (playerMove === computerMove) {
        winner = 'tie';
    } else {
        winner = possibleResults[playerMove + "," + computerMove];
    }
    return winner;
};

console.log('the winner is ' + getWinner('paper', 'rock'));
console.log('the winner is ' + getWinner('paper', 'paper'));
console.log('the winner is ' + getWinner('scissors', 'rock'));