/**
 * Anthony Ho
 * IGME-101: X Boxes, m/d/19
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
function setup() {
   createCanvas(500, 500);
   background("Red");
   frameRate(300);
}

/**
 * draw :
 */

 //inital placement of circle
let squarePlacementLeft = 0
//Right x-axis (500-15 to compensate for the size of the square)
let squarePlacementRightX = 485
//Right y-axis
let squarePlacementRightY = 0

function draw() {
   //resets background
   background("Red");
   //square 1 left
   rect(squarePlacementLeft,squarePlacementLeft,15,15);
   squarePlacementLeft = squarePlacementLeft + 1;
   //square 2 right
   rect(squarePlacementRightX, squarePlacementRightY ,15,15);
   //moves the right square left
   squarePlacementRightX = squarePlacementRightX - 1;
   //moves the right square down
   squarePlacementRightY = squarePlacementRightY + 1;
   
}

//resets circle
function mousePressed() {
   squarePlacementLeft = 0;
   squarePlacementRightX = 485;
   squarePlacementRightY = 0;
}
