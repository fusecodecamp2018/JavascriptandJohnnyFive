var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var pacman1 = [0x3c,0x7e,0xdf,0xff,0xf0,0xff,0x7e,0x3c]
  var pacman2 = [0x3c,0x7e,0xdc,0xf8,0xf8,0xfc,0x7e,0x3c]

  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33"
  });

  matrix.clear();

 for (var i = 0; i < 20; i++) {
    matrix.draw(pacman1);
    matrix.draw(pacman2);
    }

matrix.clear();
 });