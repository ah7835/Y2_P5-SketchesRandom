/**
 * Yourfirstand Lastname
 * IGME-101: Assignment Name, m/d/19
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
function setup() {
   createCanvas(500, 500);
   background("Blue");
   frameRate(30);
   strokeWeight(5);
}

/**
 * draw :
 */

/*
function draw() {
   // Always draw a point
   point(mouseX, mouseY);
   // If mouse near edge, draw shape  
   // in middle:// ...circles for the left
   if (mouseX < 10) {
      ellipse (width/2, mouseY, 20, 20);
   }
   // ...squares for the right
   if (mouseX >= width - 10) {
      rect (width/2, mouseY, 20, 20);
   }
}
*/


function draw() {
   background(237, 34, 93);
   fill(0);
   if (mouseIsPressed) {
      ellipse(50, 50, 50, 50);
   } else {
      rect(25, 25, 50, 50);
   }
   console.log(mouseIsPressed);
} // You could do similar with keyIsPressed


