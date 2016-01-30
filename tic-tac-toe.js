//click handler
//if a game has just ended, there will be a winner. Will start a new game.
//if a game is in progress, check to see that square is empty
//if I do apply more styling to tds, would need to change this logic
$("td").click(function () {
  if (tictac.currentWinner != false) {
    tictac.begin();
  } else if (this.classList.length == 0) {
    tictac.takeTurn(this);
  }
});


////////////////////////////////

//game logic
function TicTacToe () {
};



//start game
//if previous games have been played, this will erase all images
TicTacToe.prototype.begin = function(){
  this.updateBoard([[0,0,0], [0,0,0],[0,0,0]]);
  this.updatePlayer("trooper");
  this.updateWinner(false);
  $(".gameover").addClass("hide");
  $("td").removeClass("vader trooper");
};


//logic for a single turn
TicTacToe.prototype.takeTurn = function(clickedSquare){
  var coords = this.getCoords(clickedSquare);
  var nextBoard = this.markArray(coords);
  this.updateBoard(nextBoard);
  this.markSquare(clickedSquare);
  this.checkFull(); //checks to see if board is full
  this.checkGame(); //checks to see if game is won
  if (this.currentWinner !== false){
    this.endGame(this.currentWinner);
  } else {
    this.changePlayer();
  }
};


//defines who the current player is
TicTacToe.prototype.updatePlayer = function(nextPlayer){
  this.currentPlayer = nextPlayer;
};

//defines who the current winner is
TicTacToe.prototype.updateWinner = function(nextWinner){
  this.currentWinner = nextWinner;
}

//defines what the current board is
TicTacToe.prototype.updateBoard = function(nextBoard) {
  this.currentBoard = nextBoard;
}

//gets the coordinates from which square was clicked
TicTacToe.prototype.getCoords = function(square) {
  var rowInd = (square.parentNode).rowIndex;
  var colInd = square.cellIndex;
  var coordinates = {row: rowInd, col: colInd};
  return coordinates
};

//checks to see if board is full
TicTacToe.prototype.checkFull = function() {
  var occupied = new Array;
  var squares = $("td");
  for (var i = 0; i < 9; i++) {
    square = squares[i];
    if (square.classList != []){
      occupied.push(square);
    }
    return occupied;
  };
  if (occupied.length == 0) {
    this.updateWinner("tie");
  }
};




//checks to see if game is finished
TicTacToe.prototype.checkGame = function () {
  var board = this.currentBoard;
  var win = false;

  //identify combos that need to be checked
  //situation is simply enough that we don't really need to iterate
  var row1 = board[0];
  var row2 = board[1];
  var row3 = board[2];
  var col1 = [row1[0], row2[0], row3[0]];
  var col2 = [row1[1], row2[1], row3[1]];
  var col3 = [row1[2], row2[2], row3[2]];
  var diag1 = [row1[0], row2[1], row3[2]];
  var diag2 = [row1[2], row2[1], row3[0]];

  //initialize an array that will store combos to be checked
  var combos = [row1, row2, row3, col1, col2, col3, diag1, diag2]

  //get rid of any combo that has a zero in it
  var nonzeroCombos = new Array;
  combos.forEach(function(combo) {
    if (combo[0] != 0 && combo[1] != 0 && combo[2] != 0) {
      nonzeroCombos.push(combo);
    }
    return nonzeroCombos;
  });

  //check to see if any combos contain all the same value
  nonzeroCombos.forEach(function(combo) {
      if (combo[0] === combo[1] && combo[1] === combo[2]) {
        win = true;
      }
    return win;
   });

 if (win == true) {
   this.updateWinner(this.currentPlayer);
 }
};

//changes display when the game is over
//new game isn't started until the next click on a box
TicTacToe.prototype.endGame = function (winner) {
  if (this.currentWinner == "vader") {
    $(".vader-win").removeClass("hide");
  } else if (this.currentWinner == "trooper") {
    $(".trooper-win").removeClass("hide");
  } else {
    $(".tie").removeClass("hide");
  };
  $(".gameover").removeClass("hide");
};

//checks to see if that spot is occupied
//changes the array contents based on square that was clicked
//returns array that can be used to update the board
//board is marked with player name
TicTacToe.prototype.markArray = function(coords) {
  var board = this.currentBoard;
  var row = coords["row"];
  var col = coords["col"];
  if (board[row][col] == 0) {
    board[row][col] = this.currentPlayer;
  }
  return board;
};

//alternates player
TicTacToe.prototype.changePlayer = function() {
  if (this.currentPlayer == "trooper") {
    this.updatePlayer("vader");
  } else if (this.currentPlayer == "vader") {
    this.updatePlayer("trooper");
  }
};

//actually marks the square in the browser
TicTacToe.prototype.markSquare = function(square) {
    square.setAttribute("class", this.currentPlayer);
};
