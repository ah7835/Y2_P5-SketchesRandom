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
}

let circleSize = 10

/**
 * draw :
 */
function draw() {
   //resets background
   background("Blue");
   ellipse(250,250,circleSize,circleSize);
   circleSize = circleSize + 2;
}

function mousePressed() {
   circleSize = 10;
}
