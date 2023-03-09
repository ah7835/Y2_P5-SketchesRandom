/**
 * Anthony Ho
 * IGME-101: Bounce, 9/d/19
 * Make a ball bounce at walls of canvas
 */

"use strict"; //catch some common coding errors


/* Global Variables */
//ball position
let x;
let y;
//ball speed
let xSpeed;
let ySpeed;

function setup() {
   createCanvas(400, 300);
   //Speed 1 is too slow to test
   xSpeed = 5; // behavior if -1?
   ySpeed = 5; // behavior if -1?
   x = width/2;
   y = height/2;
   
   fill("red"); // ball color
}

function draw() {
   background("white");
   // draw the ball
   ellipse(x, y, 20, 20);
   // Do we need to change xSpeed?
   // Do we need to change ySpeed?
   // move the ball
   x = x + xSpeed;
   y = y + ySpeed;

   //bounce off the right   //bounce off the left
   if (x + 10 == width || x == 10) {
      xSpeed = -xSpeed;
   }

   //bounce off the bottom   //bounce off the top
   if (y + 10 == height || y == 10) {
      ySpeed = -ySpeed;
   }
}


