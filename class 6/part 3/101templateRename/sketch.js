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
    createCanvas(400, 300);
    fill(0);
    //draw body as rect
    rect(100, 130, 200, 40);
    //draw head as ellipse
    ellipse(80, 150, 50, 30);
    //Prep to draw legs
    //vertical lines 100px long
    strokeWeight(4);
    /*
    // First leg just beyond left edge of body (100).
    // Draw legs spaced every 15px until
    // beyond right edge of body, which is at 300.
    line(110, 100, 110, 200);
    //place next leg, 2
    line(125, 100, 125, 200);
    //place next leg, 3
    line(140, 100, 140, 200);
    //place next leg, 13
    line(290, 100, 290, 200);
    */
   let legX = 110;
   while(legX <= 290) {
       line(legX, 100, legX, 200);
       legX = legX + 15;
   }
}
