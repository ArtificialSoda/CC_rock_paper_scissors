// All code should be written in this file.

// Player 1's moves (you)
const playerOneMoves = [];

// Player 2's moves (other human or computer)
const playerTwoMoves = [];

// Sets player moves 
// Here, the 'moves' parameter is a 2D array consisting of 1] The move type (Rock, Paper, Scissors) and 2] The move value (0-99 strength points) aka the 'twist'
const setPlayerMoves = (player, moves) => {

    if (player == "Player One") {
        
        playerOneMoves.push(moves)
    }
    else if (player == "Player Two") {

        playerTwoMoves.push(moves)
    }
    else {
        throw "Invalid player selection. Must be either \"Player One\" or \"Player Two\"."
    }
}

