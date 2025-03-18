function createPlayer(value) {
    return {value};
}

Player1 = createPlayer("X");
Player2 = createPlayer("O");

const GameController = (function() {
    const board = [
    ["", "", ""], 
    ["", "", ""],
    ["", "", ""]
    ];
    const makeMove = function(row, column, value) {
        if(board[row][column] == "") {
            board[row][column] = value;
        }
        console.log(board);
    }
    const checkWin = function() {
        let hasWon;
        // Check win logic here
        return hasWon;
    }
    const PlayRound = function() {
        while(checkWin == False) {

        }
        
    }
    const clearBoard= function() {

    }
    return {board, makeMove, checkWin, PlayRound, clearBoard};
}) ();




