function TicTacToe() {
  this.pickSpaces();
  this.resetBoard();
}

TicTacToe.prototype = {
  // board: [["", "", ""], ["", "", ""], ["", "", ""]],
  // choices: ["", "X", "O"],
  board_spaces: ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"],

  pickSpaces: function(){
    self = this;
    var player = 0;
    self.board_spaces.forEach(function(box) {
      $("." + box).click(function() {
        if ($("." + box).css('background-color') == 'rgb(0, 0, 255)') {
          if(player === 0){
            $("." + box).css('background-color', 'red');
            player = 1;
          } else {
            $("." + box).css('background-color', 'yellow');
            player = 0;
          }
        }
        self.gameOver();
      });
    });

  },
  resetBoard: function(){
    self = this;
    $('#reset-button').click(function() {
      self.board_spaces.forEach(function(box) {
        $("." + box).css('background-color', 'blue');
    });
  });
},
boardSpaces: function() {
  return ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"];
},

gameOver: function() {
  self = this;
  var count = 0;
  self.board_spaces.forEach(function(box) {
    if ($("." + box).css('background-color') == 'rgb(0, 0, 255)') {
      count++;
    }
  });
  if (count === 0){
    alert("Game Over!");
  }
},


};
