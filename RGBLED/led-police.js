var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // define a variable named rgb and create an object for the rgb led with johnny-five using pins 6 5 and 3.
  var rgb = new five.Led.RGB([6, 5, 3]);
  // define a variable named index and set the value to 0
  var index = 0;
  // define a variable named siren and assign an array of values to it
  var siren = ["red", "white", "blue"];


// because this. is inside the function is refers to the board.  


// http://johnny-five.io/api/board/
// loop(milliseconds, handler()) Register a handler to be called repeatedly, in another execution turn, every milliseconds period. handler recieves one argument which is a function that will cancel the loop if called.
  
	this.loop(250, function() {
    //  reference the rgb defined LED and set the color based on the value of the siren index.
    rgb.color(siren[index++]);
    // if the current value of index is the last item in the array set the index value back to 0.
    if (index === siren.length) {
      index = 0;
    }
  }); // This is the end of the this.loop call
});[] // This is the end of the board.on function

