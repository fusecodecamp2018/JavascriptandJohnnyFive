<<<<<<< HEAD:MatrixLED/led-matrix.js
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

  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33"
  });

  matrix.clear();
  matrix.draw(heart);
=======
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

  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33"
  });

  matrix.clear();
  matrix.draw(heart);
>>>>>>> 9e00068e391d2e21410b0bd84041f78d45d49aaa:led-matrix.js
});