function TicTacToe() {
//  var board_spaces = ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"];
  //var player = 0;

  this.pickSpaces();
  this.resetBoard();

}

TicTacToe.prototype = {
  board: [["", "", ""], ["", "", ""], ["", "", ""]],
  choices: ["", "X", "O"],
  board_spaces: ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"],
  pickSpaces: function(){
    var player = 0;
    console.log("Yes Jessica!");
    this.board_spaces.forEach(function(box) {
      $("." + box).click(function() {
        if ($("." + box).css('background-color') == 'rgb(0, 0, 255)') {
          console.log(player);
          if(player === 0){
            $("." + box).css('background-color', 'red');
            player = 1;
          } else {
            $("." + box).css('background-color', 'yellow');
            player = 0;
          }
        }
      });
    });
  },
  resetBoard: function(){
    $('#reset-button').click(function() {
      board_spaces = ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"];
      //console.log(this.board_spaces);
      board_spaces.forEach(function(box) {
        $("." + box).css('background-color', 'blue');
    });
  });
  }

};

//tictactoe = new TicTacToe();
