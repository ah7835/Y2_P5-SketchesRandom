/**
 * Yourfirstand Lastname
 * IGME-101: Assignment Name, m/d/19
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
let isFirstClick = true;

function setup() {
   createCanvas(600, 600);
}

function draw() {
   if (isFirstClick) {
      ellipse(mouseX, mouseY, 20, 20);
   } else { 
      point(mouseX, mouseY); 
   }
}

function mousePressed() {
   if(clicked) {
      clicked = false;
      strokeWeight(4);
      stroke("purple");
   } else {
      clicked = true;
      strokeWeight(1);
      stroke("Black");
   }
}

