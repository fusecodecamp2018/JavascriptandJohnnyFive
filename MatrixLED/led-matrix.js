var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var heart = [
    "01100110",
    "10011001",
    "10000001",
    "10000001",
    "01000010",
    "00100100",
    "00011000",
    "00000000"
  ];

  var test = [0x49,0x2a,0x1c,0x1c,0x1c,0x1c,0x1c,0x1c]

  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33",
    rotation: 3,
  });

  matrix.clear();
  matrix.draw(heart);
  matrix.draw(test);
});