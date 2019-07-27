import game from './boil/index.js';

var player = game.addRectangle();
player.left = 100;
player.top = 100;
player.backgroundColor = "red";

var board = game.addRectangle();
board.left = 50;
board.top = 50;
board.width = 300;
board.height = 200;
board.backgroundColor = "transparent";
board.borderColor = "black"

game.keyDown(37, function() {
    if (player.left > board.left) {
        player.left -= 10;
    }
});

game.keyDown(38, function() {
    if (player.top > board.top) {
        player.top -= 10;
    }
});

game.keyDown(39, function() {
    if (player.right  < board.right) {
        player.left += 10;
    }
});

game.keyDown(40, function() {
    if (player.bottom < board.bottom) {
        player.top += 10;
    }
});

