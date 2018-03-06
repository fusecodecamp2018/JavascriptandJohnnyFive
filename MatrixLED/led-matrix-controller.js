<<<<<<< HEAD:MatrixLED/led-matrix-controller.js
/*
  NOTE: In the video, there is a "winking smiley face" shown. 
        This version of the program omits the "winking smiley 
        face" for the sake of simplicity. Readers are encouraged 
        to implement a solution to reproduce the "animation".
*/var readline = require("readline");
var five = require("johnny-five");
var board = new five.Board({
  repl: false
});

board.on("ready", function() {

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33"
  });

  var message = [];

  function update() {
    if (message.length) {
      // When a message is ready to be written,
      // write one character at a time to device 0.
      matrix.draw(0, message.shift());

      // When the end of the message has been reached,
      // show the readline prompt.
      if (!message.length) {
        rl.prompt();
        return;
      }

      setTimeout(update, 500);
    }
  }

  rl.prompt();
  rl.on("line", function(text) {
    message = (text + " ").split("");
    update();
  });

  matrix.on();
=======
/*
  NOTE: In the video, there is a "winking smiley face" shown. 
        This version of the program omits the "winking smiley 
        face" for the sake of simplicity. Readers are encouraged 
        to implement a solution to reproduce the "animation".
*/var readline = require("readline");
var five = require("johnny-five");
var board = new five.Board({
  repl: false
});

board.on("ready", function() {

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33"
  });

  var message = [];

  function update() {
    if (message.length) {
      // When a message is ready to be written,
      // write one character at a time to device 0.
      matrix.draw(0, message.shift());

      // When the end of the message has been reached,
      // show the readline prompt.
      if (!message.length) {
        rl.prompt();
        return;
      }

      setTimeout(update, 500);
    }
  }

  rl.prompt();
  rl.on("line", function(text) {
    message = (text + " ").split("");
    update();
  });

  matrix.on();
>>>>>>> 9e00068e391d2e21410b0bd84041f78d45d49aaa:led-matrix-controller.js
});