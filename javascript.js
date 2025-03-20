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
        board[row][column] = value;
        console.log(board);
    }
    const checkWin = function() {
        for(let i = 0; i <= 2; i++) {
            if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != "") {
                return true;
            }
            if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[i][0] != "") {
                return true;
            }
        }
        if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != "") {
            return true;
        }
        if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != "") {
            return true;
        }
        return false;
    }
    const checkTie = function() {
        for(let i = 0; i <= 2; i++) {
            for(let j = 0; j < 3; j++) {
                if(board[i][j] == "") {
                    return false;
                }
            }
        }
        return true;
    }
    const clearBoard = function() {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                board[i][j] == "";
            }
        }
    }
    const isLegalMove = function(row, col) {
        if(isNaN(row) == true || isNaN(col) == true) {
            return false;
        }
        if(row > 2 || row < 0) {
            return false;
        }
        if(col > 2 || col < 0) {
            return false;
        }
        if(board[row][col] == "") {
            return true;
        }
        else {
            return false;
        }
    }
    const playRound = function() {
        let X = Player1.value;
        let O = Player2.value;
        while(checkWin() == false && checkTie() == false) {
            let row = parseInt(prompt("Row: "));
            let col = parseInt(prompt("Col: "));
            while(isLegalMove(row, col) == false) {
                row = parseInt(prompt("Please select a valid row: "));
                col = parseInt(prompt("Please select a valid column: "));
            }
            makeMove(row, col, X);
            if(checkWin() == true) {
                console.log("Tie");
                break;
            }
            else if(checkTie() == true) {
                console.log("X has won");
                break;
            }
            row = prompt("Row: ");
            col = prompt("Col: ");
            while(isLegalMove(row, col) == false) {
                row = parseInt(prompt("Please select a valid row: "));
                col = parseInt(prompt("Please select a valid column: "));
            }
            makeMove(row, col, O);
            if(checkTie() == true) {
                console.log("Tie");
                break;
            }
            else if(checkWin() == true) {
                console.log("O has won");
                break;
            }
        }
        clearBoard();
    }
    return {board, makeMove, checkWin, checkTie, clearBoard, isLegalMove, playRound};
}) ();

GameController.playRound();
