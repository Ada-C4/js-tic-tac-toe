function TicTacToe() {
  this.board = [[0,0,0], [0,0,0], [0,0,0]];
  this.playerOne = 'X';
  this.playerTwo = 'O';
  this.currentPlayer = this.playerOne;
  this.turns = 0;
}

TicTacToe.prototype.updateBoard = function(square) {
  switch ($(square).attr('id')) {
    case "top-left":
      this.board[0][0] = this.currentPlayer;
      break;
    case "top-mid":
      this.board[0][1] = this.currentPlayer;
      break;
    case "top-right":
      this.board[0][2] = this.currentPlayer;
      break;
    case "mid-left":
      this.board[1][0] = this.currentPlayer;
      break;
    case "mid-mid":
      this.board[1][1] = this.currentPlayer;
      break;
    case "mid-right":
      this.board[1][2] = this.currentPlayer;
      break;
    case "bottom-left":
      this.board[2][0] = this.currentPlayer;
      break;
    case "bottom-mid":
      this.board[2][1] = this.currentPlayer;
      break;
    case "bottom-right":
      this.board[2][2] = this.currentPlayer;
      break;
  }
};

TicTacToe.prototype.play = function() {
  if (this.gameOver() === false) {
    this.switchPlayer();
  } else {
    $("body").append("<h2>Game Over 😶</h2>");
  }
};

TicTacToe.prototype.gameOver = function() {
  var b = this.board;
  var one = this.playerOne;
  var two = this.playerTwo;

  // variables for the board
  var topLeft = b[0][0], topMid = b[0][1], topRight = b[0][2]; // top
  var midLeft = b[1][0], midMid = b[1][1], midRight = b[1][2]; // middle
  var bottomLeft = b[2][0], bottomMid = b[2][1], bottomRight = b[2][2]; // bottom


  // player one wins vertically
  if (topLeft === one && midLeft === one && bottomLeft === one) {
    return true;
  } else if (topMid === one && midMid === one && bottomMid === one) {
    return true;
  } else if (topRight === one && midRight === one && bottomRight === one) {
    return true;
  }

  // player two wins vertically
  if (topLeft === two && midLeft === two && bottomLeft === two) {
    return true;
  } else if (topMid === two && midMid === two && bottomMid === two) {
    return true;
  } else if (topRight === two && midRight === two && bottomRight === two) {
    return true;
  }

  // player one wins horizontally
  if (topLeft === one && topMid === one && topRight === one) {
    return true;
  } else if (midLeft === one && midMid === one && midRight === one) {
    return true;
  } else if (bottomLeft === one && bottomMid === one && bottomRight === one) {
    return true;
  }

  // player two wins horizontally
  if (topLeft === two && topMid === two && topRight === two) {
    return true;
  } else if (midLeft === two && midMid === two && midRight === two) {
    return true;
  } else if (bottomLeft === two && bottomMid === two && bottomRight === two) {
    return true;
  }

  return false;

  // if (this.turns > 8) {
  //   return true;
  // } else {
  //   return false;
  // }
};

TicTacToe.prototype.switchPlayer = function () {
  if (this.currentPlayer === this.playerOne) {
    this.currentPlayer = this.playerTwo;
  } else {
    this.currentPlayer = this.playerOne;
  }
};
