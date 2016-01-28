function TicTacToe() {
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.turn = true;
  this.rowOne = this.board[0];
  this.rowTwo = this.board[1];
  this.rowThree = this.board[2];
  this.colOne = [this.rowOne[0], this.rowTwo[0], this.rowThree[0]];
  this.colTwo = [this.rowOne[1], this.rowTwo[1], this.rowThree[1]];
  this.colThree = [this.rowOne[2], this.rowTwo[2], this.rowThree[2]];
  this.diagRight = [this.rowOne[0], this.rowTwo[1], this.rowThree[2]];
  this.diagLeft = [this.rowOne[2], this.rowTwo[1], this.rowThree[0]];
  this.one = this.rowOne[0];
  this.two = this.rowOne[1];
  this.three = this.rowOne[2];
  this.four = this.rowTwo[0];
  this.five = this.rowTwo[1];
  this.six = this.rowTwo[2];
  this.seven = this.rowThree[0];
  this.eight = this.rowThree[1];
  this.nine = this.rowThree[2];
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

TicTacToe.prototype.play = function (position) {
  var positionValue = this.positionAsAttribute(position);
  if ( positionValue === 0) {
    if (this.turn === true) {
      this.selectTilePlayerOne(position);
    } else if (this.turn === false) {
      this.selectTilePlayerTwo(position);
    }
    this.turn = !this.turn;
  }
};

