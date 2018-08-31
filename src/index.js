import './index.css';

/*eslint-disable no-console */

(function() {
  var _ = self.tttView = function(table, size) {
    this.grid = table;
    this.size = size;
    this.createGrid();
    this.game();
  }

  _.prototype = {
    createGrid : function(){
      var fragment = document.createDocumentFragment();
      this.grid.innerHTML = '';
      this.button = [];

        for (var y=0; y <this.size; y++) {
          var row = document.createElement('tr');
          this.button[y] = [];

          for (var x=0; x<this.size; x++) {
            var cell = document.createElement('td');
            var button = document.createElement('button');
            button.setAttribute('id', 'button-'+y +''+ x);
            cell.appendChild(button);
            row.appendChild(cell);
          }
        fragment.appendChild(row);
        }
        this.grid.appendChild(fragment);
    },
    game: function(){
      var t = 0;
      var activePlayer;

      //adding click event listeners to the buttons
      var buttonArray = document.querySelectorAll('button');

      for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click",function(){
          if(t%2 === 0 ) {
            activePlayer = 'X';
          } else {
            activePlayer = 'O';
          }
          turn(this, t, activePlayer);
          t=counter(t);
          gameOver(buttonArray, activePlayer);
        });
      }
    }

  }
})();

var tttBoard = new tttView(document.getElementById('board'), 3);

//everybody gets a fair turn
function turn(param, t, activePlayer){
  var tile = param;
  var turnCount = t;

    if(turnCount%2 === 0 ) {
      tile.innerHTML = activePlayer;
    } else {
      tile.innerHTML = activePlayer;
    }
    tile.setAttribute('disabled', '');
}

  function gameOver(buttonArray, activePlayer) {
    var square = Array.from(buttonArray);
    var winner = activePlayer;

    switch (true) {
      case (square[0].innerHTML === activePlayer && square[1].innerHTML === activePlayer && square[2].innerHTML):
        alert(winner + " Wins!");
        break;
      case (square[3].innerHTML === activePlayer && square[4].innerHTML === activePlayer && square[5].innerHTML === activePlayer):
        alert(winner + " Wins!");
        break;
      case (square[6].innerHTML === activePlayer && square[7].innerHTML === activePlayer && square[8].innerHTML === activePlayer):
        alert(winner + " Wins!");
        break;
      case (square[0].innerHTML === activePlayer && square[3].innerHTML === activePlayer && square[5].innerHTML === activePlayer):
        alert(winner + " Wins!");
        break;
      case (square[1].innerHTML === activePlayer && square[4].innerHTML === activePlayer && square[6].innerHTML === activePlayer):
        alert(winner + " Wins!");
        break;
      case (square[2].innerHTML === activePlayer && square[5].innerHTML === activePlayer && square[8].innerHTML === activePlayer):
        alert(winner + " Wins!");
        break;
      case (square[0].innerHTML === activePlayer && square[4].innerHTML === activePlayer && square[8].innerHTML === activePlayer):
        alert(winner + " Wins!");
        break;
      case (square[2].innerHTML === activePlayer && square[4].innerHTML === activePlayer && square[6].innerHTML === activePlayer):
        alert(winner + " Wins!");
        break;
      default: return;
    }
  }
//just to make sure
function counter(n) {
 n++;
 return n;
}

var a = document.getElementById("nextGame");
var gc = 0;
a.onclick = function(){
 new tttView(document.getElementById('board'), 3);
 gc = counter(gc);
};
