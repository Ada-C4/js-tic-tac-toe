function TicTacToe() {
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.rowOne = this.board[0];
  this.rowTwo = this.board[1];
  this.rowThree = this.board[2];
  this.colOne = [this.rowOne[0], this.rowTwo[0], this.rowThree[0]];
  this.colTwo = [this.rowOne[1], this.rowTwo[1], this.rowThree[1]];
  this.colThree = [this.rowOne[2], this.rowTwo[2], this.rowThree[2]];
  this.diagRight = [this.rowOne[0], this.rowTwo[1], this.rowThree[2]];
  this.diagLeft = [this.rowOne[2], this.rowTwo[1], this.rowThree[0]];
}

TicTacToe.prototype.takeTurn = function () {
  
};
