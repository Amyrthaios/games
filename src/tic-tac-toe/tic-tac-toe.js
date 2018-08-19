import '../index.css';
import '../tic-tac-toe/tic-tac-toe.css';

var _ = self.ttt = function(board) {
  this.board = board;
  this. height = board.height;
  this.width = board[0].width;
}

_.prototype = {
  nextTurn: function (){

  },
  toString: function () {

  }
};

var game = new ttt([
  ['x', 0, 0],
  [0, 'x', 0],
  [0, 0, 'x']
]);

console.log (game + '');

game.nextTurn();

console.log (game + '');
