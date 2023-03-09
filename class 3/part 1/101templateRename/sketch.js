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
    //console.log("Starting" + " Setup");
    console.log("Starting", "Setup");
    createCanvas(500, 500);
    background("Blue");
    frameRate(1);
    console.log("Finish Setup");
}

let width = 500;
let height = 500;

/**
 * draw :
 */
function draw() {
    background("Blue");
    frameCount = 300
       //  Circle at mouse, width & height = 10;
    //circle(mouseX, mouseY, 40);
       // Identical circle with x shifted right 140 px;
    //circle(mouseX + 140, mouseY, 40);
       // Finish the pattern..?
    // circle(mouseX, mouseY + 140, 40);
    // circle(mouseX + 140, mouseY + 140, 40);
    //let width = 250
    //let height = 250
    //ellipse(width,height,100, 50);
    //ellipse(width,height,100, 50);
       // bar moves across canvas and jumps back to 0
    textSize(30);
    rect(frameCount % width, 0, 10, height);
    rect(frameCount, 2, 30);
}
