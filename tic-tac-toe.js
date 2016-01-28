function TicTacToe() {
	this.board = [[0,0,0],[0,0,0],[0,0,0]];
}

TicTacToe.prototype.start = function() {
	console.log('Game has started');
};

TicTacToe.prototype.printGameboard = function() {
	
};

TicTacToe.prototype.makeMove = function(row, col) {
	this.board[row][col] = 1;
};