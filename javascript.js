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
    }
    const checkWin = function() {
        for(let i = 0; i <= 2; i++) {
            if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != "") {
                return true;
            }
            if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != "") {
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
                board[i][j] = "";
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
    return {board, makeMove, checkWin, checkTie, clearBoard, isLegalMove};
}) ();


const displayGame = (function() {
    let X = Player1.value;
    let O = Player2.value;
    let turn = 1;
    const nextTurn = function() {
        turn++;
    }
    const renderContents = function() {
        const gameContainer = document.querySelector(".gameContainer");
        for(let i = 0; i < 3; i++) {
            let displayRow = document.createElement("div");
            displayRow.setAttribute("class", "displayRow");
            gameContainer.appendChild(displayRow);
            for(let j = 0; j < 3; j++) {
                let square = document.createElement("p");
                square.setAttribute("class", "square");
                square.setAttribute("data-index-number", i.toString() + j.toString());
                square.textContent = GameController.board[i][j];
                displayRow.appendChild(square);
            }
        }
    }
    const addClickEvents = function() {
        const squares = document.querySelectorAll(".square");
        const gameStatus = document.querySelector(".gameStatusText");
        squares.forEach((square) => {
            square.addEventListener("click", () => {
                if(GameController.checkWin() == false && GameController.checkTie() == false) {
                    let i = (square.getAttribute("data-index-number"))[0];
                    let j = (square.getAttribute("data-index-number"))[1];
                    if(GameController.isLegalMove(i, j) == true && (turn % 2) == 1) {
                        GameController.makeMove(i, j, X);
                        square.textContent = X;
                        if(GameController.checkWin() == true) {
                            gameStatus.textContent = "X has won";
                        }
                        else if(GameController.checkTie() == true) {
                            gameStatus.textContent = "It's a tie";
                        }
                        else {
                            gameStatus.textContent = "O to move";
                        }
                        nextTurn();
                    }
                    else if(GameController.isLegalMove(i, j) && (turn % 2) == 0) {
                        GameController.makeMove(i, j, O);
                        square.textContent = O;
                        if(GameController.checkWin() == true) {
                            gameStatus.textContent = "O has won";
                        }
                        else if(GameController.checkTie() == true) {
                            gameStatus.textContent = "It's a tie";
                        }
                        else {
                            gameStatus.textContent = "X to move";
                        }                        
                        nextTurn();
                    }
                
                }   
            });
        });
    }
    const addRestartEvent = function() {
        const restartButton = document.querySelector(".restartButton");
        const gameStatus = document.querySelector(".gameStatusText");
        const squares = document.querySelectorAll(".square");
        restartButton.addEventListener("click", () => {
            squares.forEach((square) => {
            square.textContent = "";
            });
            turn = 1;
            gameStatus.textContent = "X to move";
            addClickEvents();
            GameController.clearBoard();
        });
    }
    return {renderContents, addClickEvents, nextTurn, addRestartEvent};
}) ();

displayGame.renderContents();
displayGame.addClickEvents();
displayGame.addRestartEvent();