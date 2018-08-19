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
      //adding click event listeners to the buttons
      var buttonArray = document.querySelectorAll('button');

      for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click",function(){
          turn(this, t);
          t=turncounter(t);
        });
      }
    }
  }
})();

var tttBoard = new tttView(document.getElementById('board'), 3);

//everybody gets a fair turn
function turn(param, t){
  var self = param;
  var turnCount = t;

    if(turnCount%2 === 0 ) {
      self.innerHTML = 'X';
    } else {
      self.innerHTML= '0';
    }
    self.setAttribute('disabled', '');
}

//just to make sure
function turncounter(n) {
 n++;
 return n;
}

function gamecounter(gn) {
  gn++;
  return gn;
}

var a = document.getElementById("nextGame");
var gc = 0;
a.onclick = function(){
  var buttonArray = document.querySelectorAll('button');
  for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].innerHTML = "";
    buttonArray[i].removeAttribute('disabled');
  }
 gc = gamecounter(gc);
this.game();

 console.log(gc);
};
