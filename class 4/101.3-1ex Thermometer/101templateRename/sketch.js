/**
 * Anthony Ho
 * IGME-101: Thermometer, 9/9/19
 * Duplicate the template to create a new sketch folder named LastnameThermo/.
   Draw a thermometer in the middle of the canvas (a gray rectangle will suffice).
   The thermometer should start out "cold" with a completely blue base mercury.  As you hold down the Up arrow key (if keyIsPressed is true, check keyCode), the thermometer mercury should increase height and make the color less blue and more red. The Down arrow key should make it "colder" – shorter with more blue and less red.

 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
function setup() {
  createCanvas(400, 400);
  background("black");
}

/**
 * draw :
 */
let topThermo = 73
let bottomThermo = 328
let currentValue = 320
let blueColor = 255
let redColor = 0
//let heightRect = constrain(currentValue, topThermo, bottomThermo)

function draw() {
  background("black");
  //back rectangle
  rectMode(CORNERS);
  fill("grey");
  rect(170, 73, 230, 328);

  let heightRect = constrain(currentValue, topThermo, bottomThermo)

  //colored rectangle
  rectMode(CORNERS);
  //start blue
  //fill(color(0, 0, 255));
  //finish red
  //fill(color(255, 0, 0));
  fill(color(redColor, 0, blueColor));
  //73 is the top & 328 is the bottom
  rect(170, heightRect, 230, 328);

  //increase and decrease the colored rectangle
  if (keyIsPressed === true && keyCode === UP_ARROW) {
    currentValue = currentValue - 10
    //change to red
    redColor = redColor + 10
    blueColor = blueColor - 10
  } else if (keyIsPressed === true && keyCode === DOWN_ARROW) {
    currentValue = currentValue + 10
    //change to blue
    redColor = redColor - 10
    blueColor = blueColor + 10
  }

  /*
  if (currentValue ) {
    fill("blue");
  } else if ()
  */

  /*
  switch (heightRect = x) {
    case x <= 80:
      fill("Blue");
      break;
    case x <= 160:
      fill("Purple");
      break;
    case x <= 240:
      fill("Yellow");
      break;
    case x <= 320:
        fill("Red");
        break;
  }
  */
}

/*
function keyPressed() {
  if (keyCode === UP_ARROW) {
    heightRect = heightRect - 10
  } else if (keyCode === DOWN_ARROW) {
    heightRect = heightRect + 10
  }
}
*/



