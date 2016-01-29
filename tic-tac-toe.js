function TicTacToe() {
  this.board = [["","",""], ["","",""], ["","",""]];
  this.count = 0;
  }

  var checkSpot = function(col, row, sign , board) {
    if (board[col][row] === sign) {
      return true;
    } else {return false;}
  }

TicTacToe.prototype.CheckRow = function(col, row, sign) {
    if (row === 0) {
      if (checkSpot(col, 1, sign, this.board) && (checkSpot(col,2, sign, this.board))) {
        return true;
    } else if ( row === 1) {
      if (checkSpot(col, 0, sign, this.board) && (checkSpot(col,2, sign, this.board)))
        return true;
    } else {
      if (checkSpot(col, 0, sign, this.board) && (checkSpot(col,1, sign, this.board)))
        return true;
    }
  }
};

TicTacToe.prototype.CheckCol = function(col, row, sign) {
  if (col === 0) {
    if (checkSpot(1, row, sign, this.board) && (checkSpot(2,row, sign, this.board)))
      return true;
  } else if ( col === 1) {
    if (checkSpot(0, row, sign, this.board) && (checkSpot(2,row, sign, this.board)))
      return true;
  } else {
    if (checkSpot(0, row, sign, this.board) && (checkSpot(1,row, sign, this.board)))
      return true;
  }
};

TicTacToe.prototype.checkOblique = function(col, row, sign) {
  if ((col === 0) && (row == 1) || (col == 1 && row === 0) || (col == 1 && col == 2) || (col == 2 && row == 1) ) {
    return false;
  } else if ((checkSpot(0,0,sign, this.board) && checkSpot(1,1,sign, this.board) && checkSpot(2,2, sign, this.board)) || (checkSpot(0,1,sign, this.board) && checkSpot(1,1,sign, this.board) && checkSpot(2,0,sign, this.board))){
    return true;
  }
};

TicTacToe.prototype.checkAvai = function(col, row) {
  if (this.board[col][row] === "") {
    return true;
  } else { return false;}
};



  $(document).ready(function() {
    var game = new TicTacToe();

    $("#zz").click(function(){
    if (!game.checkAvai(0,0)) {
        throw new Error ("This spot is already claimed!");
      } else if (game.count % 2 === 0) {
        $(this).text("O");
        game.board[0][0]="O";
        if (game.CheckRow(0,0,"O") ||game.CheckCol(0,0,"O") || game.checkOblique(0,0,"O") ) {
          alert('Y wins'); } else {
          game.count ++;}
      } else {
        $(this).text("X");
        game.board[0][0]="X";
        if (game.CheckRow(0,0,"X") ||game.CheckCol(0,0,"X") || game.checkOblique(0,0,"X") ) {
          alert('X wins'); } else {
          game.count ++;}
        }
    });

    $("#zo").click(function(){
    if (!game.checkAvai(0,1)) {
        throw new Error ("This spot is already claimed!");
      } else if (game.count % 2 === 0) {
        $(this).text("O");
        game.board[0][1] = "O";
        if (game.CheckRow(0,1,"O") ||game.CheckCol(0,1,"O") || game.checkOblique(0,1,"O") ) {
          alert('Y wins'); } else {
          game.count ++;}
      } else {
        $(this).text("X");
        game.board[0][1] = "X";
        if (game.CheckRow(0,1,"X") ||game.CheckCol(0,1,"X") || game.checkOblique(0,1,"X") ) {
          alert('X wins'); } else {
          game.count ++;}
        }
    });

    $("#zt").click(function(){
    if (!game.checkAvai(0,2)) {
        throw new Error ("This spot is already claimed!");
      } else if (game.count % 2 === 0) {
        $(this).text("O");
        game.board[0][2] = "O";
        if (game.CheckRow(0,2,"O") ||game.CheckCol(0,2,"O") || game.checkOblique(0,2,"O") ) {
          alert('Y wins'); } else {
          game.count ++;}
      } else {
        $(this).text("X");
        game.board[0][2] = "X";
        if (game.CheckRow(0,2,"X") ||game.CheckCol(0,2,"X") || game.checkOblique(0,2,"X") ) {
          alert('X wins'); } else {
          game.count ++;}
        }
    });

    $("#oz").click(function(){
    if (!game.checkAvai(1,0)) {
        throw new Error ("This spot is already claimed!");
      } else if (game.count % 2 === 0) {
        $(this).text("O");
        game.board[1][0] = "O";
        if (game.CheckRow(1,0,"O") ||game.CheckCol(1,0,"O") || game.checkOblique(1,0,"O") ) {
          alert('Y wins'); } else {
          game.count ++;}
      } else {
        $(this).text("X");
        game.board[1][0] = "X";
        if (game.CheckRow(1,0,"X") ||game.CheckCol(1,0,"X") || game.checkOblique(1,0,"X") ) {
          alert('X wins'); } else {
          game.count ++;}
        }
    });

    $("#oo").click(function(){
    if (!game.checkAvai(1,1)) {
        throw new Error ("This spot is already claimed!");
      } else if (game.count % 2 === 0) {
        $(this).text("O");
        game.board[1][1] = "O";
        if (game.CheckRow(1,1,"O") ||game.CheckCol(1,1,"O") || game.checkOblique(1,1,"O") ) {
          alert('Y wins'); } else {
          game.count ++;}
      } else {
        $(this).text("X");
        game.board[1][1] = "X";
        if (game.CheckRow(1,1,"X") ||game.CheckCol(1,1,"X") || game.checkOblique(1,1,"X") ) {
          alert('X wins'); } else {
          game.count ++;}
        }
    });

    $("#ot").click(function(){
    if (!game.checkAvai(1,2)) {
        throw new Error ("This spot is already claimed!");
      } else if (game.count % 2 === 0) {
        $(this).text("O");
        game.board[1][2] = "O";
        if (game.CheckRow(1,2,"O") ||game.CheckCol(1,2,"O") || game.checkOblique(1,2,"O") ) {
          alert('Y wins'); } else {
          game.count ++;}
      } else {
        $(this).text("X");
        game.board[1][2]= "X";
        if (game.CheckRow(1,2,"X") ||game.CheckCol(1,2,"X") || game.checkOblique(1,2,"X") ) {
          alert('X wins'); } else {
          game.count ++;}
        }
    });

    $("#tz").click(function(){
    if (!game.checkAvai(2,0)) {
        throw new Error ("This spot is already claimed!");
      } else if (game.count % 2 === 0) {
        $(this).text("O");
        game.board[2][0] = "O";
        if (game.CheckRow(2,0,"O") ||game.CheckCol(2,0,"O") || game.checkOblique(2,0,"O") ) {
          alert('Y wins'); } else {
          game.count ++;}
      } else {
        $(this).text("X");
        game.board[2][0] = "X";
        if (game.CheckRow(2,0,"X") ||game.CheckCol(2,0,"X") || game.checkOblique(2,0,"X") ) {
          alert('X wins'); } else {
          game.count ++;}
        }
    });

    $("#to").click(function(){
    if (!game.checkAvai(2,1)) {
        throw new Error ("This spot is already claimed!");
      } else if (game.count % 2 === 0) {
        $(this).text("O");
        game.board[2][1] = "O";
        if (game.CheckRow(2,1,"O") ||game.CheckCol(2,1,"O") || game.checkOblique(2,1,"O") ) {
          alert('Y wins'); } else {
          game.count ++;}
      } else {
        $(this).text("X");
        game.board[2][1] = "X";
        if (game.CheckRow(2,1,"X") ||game.CheckCol(2,1,"X") || game.checkOblique(2,1,"X") ) {
          alert('X wins'); } else {
          game.count ++;}
        }
    });

    $("#tt").click(function(){
    if (!game.checkAvai(2,2)) {
        throw new Error ("This spot is already claimed!");
      } else if (game.count % 2 === 0) {
        $(this).text("O");
        game.board[2][2] = "O";
        if (game.CheckRow(2,2,"O") ||game.CheckCol(2,2,"O") || game.checkOblique(2,2,"O") ) {
          alert('Y wins'); } else {
          game.count ++;}
      } else {
        $(this).text("X");
        game.board[2][2] = "X";
        if (game.CheckRow(2,2,"X") ||game.CheckCol(2,2,"X") || checkOblique(2,2,"X") ) {
          alert('X wins'); } else {
          game.count ++;}
        }

        if (game.count == 9)
          {alert("it's a tie");}

  });
});
