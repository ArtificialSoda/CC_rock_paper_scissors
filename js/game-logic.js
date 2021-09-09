// All code should be written in this file.

const playerOneMoves = []; // Player 1's moves (you)
const playerTwoMoves = []; // Player 2's moves (other human or computer)

// Sets player moves 
// Here, the 'moves' parameter is a 2D array consisting of 1] The move type (Rock, Paper, Scissors) and 2] The move value (1-99 strength points) aka the 'twist'
const setPlayerMoves = (player, moves) => {

    const moveTypes = ["Rock", "Paper", "Scissors"];
    const numMoves  = 3;
    const maxPoints = 99;
    const minPoints = 1;

    // Make sure 'moves' is given as an array
    if (!Array.isArray(moves)) throw "ERROR: Make sure that the 'moves' param in setPlayerMoves() is given as a 2-dimensional array.";

    // Make sure there's only 3 moves given
    if (moves.length != numMoves) throw "ERROR: As there's 3 rounds, make sure to only give 3 moves.";

    for(let i = 0; i < moves.length; i++){

        let move = moves[i];
        let pointsCounter = 0;

        // Make sure that each move in the moves array only gives out 2 values: the move type and the move value
        if (move.length != 2) throw "ERROR: Make sure that each move in the moves array only gives out 2 values: the move type (String) and the move value (integer)"

        // Make sure the given move type is valid. 
        const isValidType = moveTypes.includes(move[0]); // If the value given for move type is not "Rock", "Paper", or "Scissors", this will return False.
        if (!isValidType) throw "ERROR: Invalid move type. Choose between \"Rock\", \"Paper\" and \"Scissors\".";

        // Make sure that each move uses between 1 and 99 strenght points
        if (move[1] < minPoints || move[1] > maxPoints) throw "ERROR: Make sure to give between 1 and 99 strenght points to each move, depending on how many you have left";

        // Make sure the total amount of strenght points used does not go above 99
        pointsCounter += move[1]; 
        if (pointsCounter > maxPoints) throw "ERROR: You tried using more than the maximum of 99 strenght points allowed.";

        // Display the moves that were played, for debug purposes
        console.log(`For move #${i+1}, ${player} said ${move[0]} and used ${move[1]} strength points!`);

    }

    if (player == "Player One" || "Player 1" || "P1") {
        
        playerOneMoves.push(moves)
    }
    else if (player == "Player Two" || "Player 2" || "P2") {

        playerTwoMoves.push(moves)
    }
    else {
        throw "Invalid player selection. Must be either \"Player One\" or \"Player Two\"."
    }

}

setPlayerMoves("Player 1", [["Rock", 40], ["Paper", 20], ["Scissors", 39]]); // WORKS!


