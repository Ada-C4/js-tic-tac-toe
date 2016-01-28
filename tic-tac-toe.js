function TicTacToe() {
  this.pickSpaces();
  this.resetBoard();
}

TicTacToe.prototype = {
  // board: [["", "", ""], ["", "", ""], ["", "", ""]],
  // choices: ["", "X", "O"],
  board_spaces: ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"],
  player_1_score: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
  player_2_score: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
  //player_2_score = [ row1, row2, row3, col1, col2, col3, diagleft, diagright ]

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
        self.updateScore(box, player);
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
      alert("It's a tie!");
      self.board_spaces.forEach(function(box) {
        $("." + box).css('background-color', 'blue');
      });
    }
  },

  updateScore: function(space, player) {
    self = this;
    if(space.substring(0,2) == "r1") {
      if (player === 0) {
        self.player_1_score[0]++;
      } else {
        self.player_2_score[0]++;
      }
    } else if (space.substring(0,2) == "r2") {
      if (player === 0) {
        self.player_1_score[1]++;
      } else {
        self.player_2_score[1]++;
      }
    } else if (space.substring(0,2) == "r3") {
      if (player === 0) {
        self.player_1_score[2]++;
      } else {
        self.player_2_score[2]++;
      }
    }

    if (space.substring(2,4) == "c1") {
      if (player === 0) {
        self.player_1_score[3]++;
      } else {
        self.player_2_score[3]++;
      }
    } else if (space.substring(2,4) == "c2") {
      if (player === 0) {
        self.player_1_score[4]++;
      } else {
        self.player_2_score[4]++;
      }
    } else if (space.substring(2,4) == "c3") {
      if (player === 0) {
        self.player_1_score[5]++;
      } else {
        self.player_2_score[5]++;
      }
    }

    if ((space == "c1r1") || (space = "c2r2") || (space = "c3r3")) {
      if (player === 0) {
        self.player_1_score[6]++;
      } else {
        self.player_2_score[6]++;
      }
    }

    if ((space == "c3r1") || (space = "c2r2") || (space = "c1r3")) {
      if (player === 0) {
        self.player_1_score[7]++;
      } else {
        self.player_2_score[7]++;
      }
    }
    self.checkForWinner();
  },

  checkForWinner: function() {
    self = this;
    self.player_1_score.forEach(function(score) {
      if (score == 3) {
        alert("Player 1 wins!");
        self.board_spaces.forEach(function(box) {
          $("." + box).css('background-color', 'blue');
        });
        self.player_1_score = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
        self.player_2_score = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
      }
    });
    self.player_2_score.forEach(function(score) {
      if (score == 3) {
        alert("Player 2 wins!");
        self.board_spaces.forEach(function(box) {
          $("." + box).css('background-color', 'blue');
        });
        self.player_1_score = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
        self.player_2_score = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
      }
    });
    // player_1_score = [ row1, row2, row3, col1, col2, col3, diagleft, diagright ]
    // player_2_score = [ row1, row2, row3, col1, col2, col3, diagleft, diagright ]

  },
};
