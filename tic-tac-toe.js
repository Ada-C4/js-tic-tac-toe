function TicTacToe() {
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.countClick = 0;
  this.turn = 'playerOne';
  this.one = this.board[0][0];
  this.two = this.board[0][1];
  this.three = this.board[0][2];
  this.four = this.board[1][0];
  this.five = this.board[1][1];
  this.six = this.board[1][2];
  this.seven = this.board[2][0];
  this.eight = this.board[2][1];
  this.nine = this.board[2][2];
}

TicTacToe.prototype.positionAsAttribute = function(position) {
  switch (position) {
    case '1':
      return this.one;
    case '2':
      return this.two;
    case '3':
      return this.three;
    case '4':
      return this.four;
    case '5':
      return this.five;
    case '6':
      return this.six;
    case '7':
      return this.seven;
    case '8':
      return this.eight;
    case '9':
      return this.nine;
  }
};

TicTacToe.prototype.switchTurn = function () {
  if (this.turn === 'playerOne') {
    this.turn = 'playerTwo';
  } else if (this.turn === 'playerTwo') {
    this.turn = 'playerOne';
  }
};

TicTacToe.prototype.selectTilePlayerOne = function (position) {
  switch (position) {
    case '1':
      this.one = 'x';
      break;
    case '2':
      this.two = 'x';
      break;
    case '3':
      this.three = 'x';
      break;
    case '4':
      this.four = 'x';
      break;
    case '5':
      this.five = 'x';
      break;
    case '6':
      this.six = 'x';
      break;
    case '7':
      this.seven = 'x';
      break;
    case '8':
      this.eight = 'x';
      break;
    case '9':
      this.nine = 'x';
      break;
  }
};

TicTacToe.prototype.selectTilePlayerTwo = function (position) {
  switch (position) {
    case '1':
      this.one = 'o';
      break;
    case '2':
      this.two = 'o';
      break;
    case '3':
      this.three = 'o';
      break;
    case '4':
      this.four = 'o';
      break;
    case '5':
      this.five = 'o';
      break;
    case '6':
      this.six = 'o';
      break;
    case '7':
      this.seven = 'o';
      break;
    case '8':
      this.eight = 'o';
      break;
    case '9':
      this.nine = 'o';
      break;
  }
};

TicTacToe.prototype.gameWon = function() {
  var t = this;
  var horizontalWin = function () {
    if (t.one === t.two && t.two === t.three && t.one !== 0) {
      return true;
    } else if (t.three === t.four && t.four === t.five && t.three !== 0) {
      return true;
    } else if (t.seven === t.eight && t.eight === t.nine && t.seven !== 0) {
      return true;
    }
  };
  var verticalWin = function () {
    if (t.one === t.four && t.four === t.seven && t.one !== 0)  {
      return true;
    } else if (t.two === t.five && t.five === t.eight && t.two !== 0) {
      return true;
    } else if (t.three === t.six && t.six === t.nine && t.three !== 0) {
      return true;
    }
  };
  var diagonalWin = function () {
    if (t.one === t.five && t.five === t.nine && t.one !== 0) {
      return true;
    } else if (t.three === t.five && t.five === t.seven && t.three !== 0) {
      return true;
    }
  };
  if (horizontalWin() === true) {
    return 'GAME OVER';
  } else if (verticalWin() === true) {
    return 'GAME OVER';
  } else if (diagonalWin() === true) {
    return 'GAME OVER';
  }
};

TicTacToe.prototype.play = function (position) {
  var positionValue = this.positionAsAttribute(position);
  if ( positionValue === 0) {
    if (this.turn === 'playerOne') {
      this.selectTilePlayerOne(position);
    } else if (this.turn === 'playerTwo') {
      this.selectTilePlayerTwo(position);
    }
    this.switchTurn();
  }
};

