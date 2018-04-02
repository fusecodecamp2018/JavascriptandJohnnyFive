var five = require("johnny-five");
var songs = require('j5-songs');
var board = new five.Board();

board.on("ready", function() {

  // Create a new `motion` hardware instance.
  var motion = new five.Motion(7);
  var piezo = new five.Piezo(3);

  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function() {
    console.log("calibrated", Date.now());

  });

  // "motionstart" events are fired when the "calibrated"
  // proximal area is disrupted, generally by some form of movement
  motion.on("motionstart", function() {
    var d = Date(Date.now());
    d.toString() // returns "Sun May 10 2015 19:50:08 GMT-0600 (MDT)"
    console.log("motionstart", d);
     // Load a song object
     var song = songs.load('pew-pew-pew');

     // Play it !
     piezo.play(song);

  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function() {
    console.log("motionend", Date.now());
  });
});