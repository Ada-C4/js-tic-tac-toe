function TicTacToe() {
	this.images = {
		0 : 'images/empty.jpg',
		1 : 'images/player1.png',
		2 : 'images/player2.png'
	};
	
}

TicTacToe.prototype.start = function() {
	this.restart();
	this.printGameboard();
};

TicTacToe.prototype.restart = function() {
	this.board = [[0,0,0],[0,0,0],[0,0,0]];
	this.currentPlayer = 1;
	this.gameOver = false;
	this.winner = 0;
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
	if (this.board[row][col] === 0 && !this.gameOver) {
		this.board[row][col] = this.currentPlayer;
		this.currentPlayer = this.currentPlayer === 1? 2 : 1;	
		this.printGameboard();
		this.checkGameOver();
	}
};

TicTacToe.prototype.checkGameOver = function() {
	for (var i = 0; i < this.board.length; i++) {
		// horizontal win
		if (this.board[i][0] && 
			(this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2])){
			this.gameOver = true;
			this.winner = this.board[i][0];
		}
		// vertical win
		if (this.board[0][i] && 
			(this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i])){
			this.gameOver = true;
			this.winner = this.board[0][i];
		}
	}
	// diagonal win
	if ((this.board[1][1] && this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2]) ||
		(this.board[1][1] && this.board[2][0] == this.board [1][1] && this.board[1][1] == this.board[0][2])){
		this.gameOver = true;
		this.winner = this.board[1][1];
	}
	// tie
	if (!this.board[0].includes(0) && !this.board[1].includes(0) && !this.board[2].includes(0)) {
		this.gameOver = true;
	}
};
