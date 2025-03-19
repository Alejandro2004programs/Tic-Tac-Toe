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
            console.log(board);
            return true;
        }
        console.log(board);
        return false;
    }
    const checkWin = function() {
        let hasWon = false;
        // Check win logic here
        for(let i = 0; i < 3; i++) {
            if(board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
                return true;
            }
            if(board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
                return true;
            }
        }
        if(board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
            return true;
        }
        if(board[0][2] == board[1][1] && board[1][1] == board[3][0]) {
            return true;
        }
        return hasWon;
    }
    const checkTie = function() {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(board[i][j] == "") {
                    return false;
                }
            }
        }
        return true;
    }
    const PlayRound = function() {
        while(checkWin == False) {

        }
        clearBoard();
    }
    const clearBoard = function() {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                board[i][j] == "";
            }
        }
    }
    return {board, makeMove, checkWin, checkTie, PlayRound, clearBoard};
}) ();




