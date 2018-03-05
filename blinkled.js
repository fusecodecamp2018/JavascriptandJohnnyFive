// Declare a variable named five and require the johnny-five library
var five = require("johnny-five");
// Using the johnny-five library declare a variable named board and create a board object with the johnny-five library
var board = new five.Board();


board.on("ready", function() {

  // Create a standard `led` component instance assigned to pin 13
  var led = new five.Led(13);

  // "blink" the led in 500ms
  // on-off phase periods
  led.blink(500);
});