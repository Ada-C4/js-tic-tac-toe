function TicTacToe() {
	this.board = [[0,0,0],[0,0,0],[0,0,0]];
	this.currentPlayer = 1;
	this.images = {
		0 : 'images/empty.jpg',
		1 : 'images/player1.png',
		2 : 'images/player2.png'
	};
}

TicTacToe.prototype.start = function() {
	this.printGameboard();
};

TicTacToe.prototype.printGameboard = function() {
	for (var row = 0; row < this.board.length; row++) {
		for (var col = 0; col < this.board[0].length; col++) {
			var $square = $('#row' + row + 	'col' + col),
					squareNumber = this.board[row][col];
			$square.children('img').attr('src', this.images[squareNumber]);
		}
	}
};

TicTacToe.prototype.makeMove = function(el) {
	var col = el.data().col,
			row = el.data().row;
	if (this.board[row][col] === 0) {
		this.board[row][col] = this.currentPlayer;
		this.currentPlayer = this.currentPlayer === 1? 2 : 1;	
		this.printGameboard();
	}
};
