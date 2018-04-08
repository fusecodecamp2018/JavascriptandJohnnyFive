var five = require("johnny-five");
var keypress = require("keypress");

keypress(process.stdin);

//var board = new five.Board();

var board = new five.Board({
  port: "/dev/cu.FuseBot-DevB"
});

board.on("ready", function() {

  console.log("Use Up and Down arrows for CW and CCW respectively. Space to stop.");

  var servoleft = new five.Servo.Continuous(10);
  var servoright = new five.Servo.Continuous(11);

  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", function(ch, key) {

    if (!key) {
      return;
    }

    if (key.name === "q") {
      console.log("Quitting");
      servoright.stop();
      servoleft.stop();
      process.exit();
    } else if (key.name === "up") {
      console.log("CW");
      servoleft.cw();
      servoright.ccw();
    } else if (key.name === "down") {
      console.log("CCW");
      servoleft.ccw();
      servoright.cw();
    } else if (key.name === "left") {
      console.log("CCW");
      servoleft.ccw();
      servoright.ccw();
    } else if (key.name === "right") {
      console.log("CCW");
      servoleft.cw();
      servoright.cw();
    } else if (key.name === "space") {
      console.log("Stopping");
      servoright.stop();
      servoleft.stop();
    }
  });
});