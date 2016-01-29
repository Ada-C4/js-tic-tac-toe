function TicTacToe() {
	this.images = {
		0 : 'images/empty.jpg',
		1 : 'images/player1.png',
		2 : 'images/player2.png',
		3 : 'images/disco_ball.png'
	};
	this.p1wins = 0;
	this.p2wins = 0;
}

TicTacToe.prototype.start = function() {
	this.restart();
	this.printGameboard();
	this.updateWins();
};

TicTacToe.prototype.restart = function() {
	this.board = [[0,0,0],[0,0,0],[0,0,0]];
	this.currentPlayer = 1;
	this.gameOver = false;
	this.winner = 0;
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

TicTacToe.prototype.updateWins = function() {
	$('#p1wins').html(this.p1wins);
	$('#p2wins').html(this.p2wins);
};

TicTacToe.prototype.makeMove = function(el) {
	var col = el.data().col,
			row = el.data().row;
	if (this.board[row][col] === 0 && !this.gameOver) {
		this.board[row][col] = this.currentPlayer;
		this.currentPlayer = this.currentPlayer === 1? 2 : 1;	
		this.printGameboard();
		this.checkGameOver(col, row);
	}
};

TicTacToe.prototype.checkGameOver = function(col, row) {
	function displayModal(gameBoard){
		var result, img;
    if (gameBoard.winner === 0) {
      result = "<h2>Tie Game</h2>";
      img = gameBoard.images[3];
    } else if (gameBoard.winner === 1) {
      result = "<h2>Player 1 Won!</h2>";
      img = gameBoard.images[1];
    } else {
      result = "<h2>Player 2 Won!</h2>";
      img = gameBoard.images[2];
    }
    var $textAndPic = $('<div class="text-center"></div>');
    $textAndPic.append(result + '</br>');
    $textAndPic.append('<img src ="' + img + '" >');
    BootstrapDialog.show({
        size: BootstrapDialog.SIZE_LARGE,
        title: 'Game Over',
        message: $textAndPic,
        buttons: [{
            label: 'Play Again',
            cssClass: 'btn btn-success',
            action: function(dialogItself){
                dialogItself.close();
                gameBoard.start();
              }
          }
        ],
    });
	}
	// tie
	if (!this.board[0].includes(0) && !this.board[1].includes(0) && !this.board[2].includes(0)) {
		this.gameOver = true;
	}
	
	if (
		// horizontal win
		(this.board[row][0] === this.board[row][1] && this.board[row][1] === this.board[row][2]) ||
		// vertical win
		(this.board[0][col] === this.board[1][col] && this.board[1][col] === this.board[2][col]) ||
		// diagonal win
		(this.board[1][1] && this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2]) ||
		(this.board[1][1] && this.board[2][0] == this.board [1][1] && this.board[1][1] == this.board[0][2])) {
		this.gameOver = true;
		this.winner = this.board[row][col];
	}
	// add to total wins for player
	if (this.winner === 1) {
		this.p1wins++;
	} else if (this.winner ===2) {
		this.p2wins++;
	}
	// show result modal
	if (this.gameOver === true) {
		displayModal(this);
	}
};
