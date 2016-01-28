function TicTacToe() {
  var board_spaces = ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"];
  var player = 0;
  board_spaces.forEach(function(box) {
    $("." + box).click(function() {
      if(player === 0){
        $("." + box).css('background-color', 'red');
        player = 1;
      } else {
        $("." + box).css('background-color', 'yellow');
        player = 0;
      }
    });
  });
}

TicTacToe.prototype = {
  board: [["", "", ""], ["", "", ""], ["", "", ""]],
  choices: ["", "X", "O"],
  //board_2: ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"]
};

tictactoe = new TicTacToe();





//:nth-child(n)	$("p:nth-child(2)")
