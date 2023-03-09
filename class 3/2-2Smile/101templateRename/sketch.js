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

/**
 * draw :
 */
//Slide 30 of 101.2 Slides-Variables
//Step 7: Press F12 in Chrome to inspect console/
function draw() {
   // Step 4
   let eyeSize = mouseX/20
   // Step 5
   //head
   ellipse(50, 50, 100, 100);
   //smile
   arc(50, 50, 80, 80, .7, 2.5);
   //left eye
   ellipse(30, 50, eyeSize, eyeSize);
   //right eye
   ellipse(70, 50, eyeSize, eyeSize);
}
