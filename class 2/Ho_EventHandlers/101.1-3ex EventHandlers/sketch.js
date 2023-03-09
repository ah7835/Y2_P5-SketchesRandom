/**
 * Anthony Ho
 * IGME-101: Event Handlers, 8/30/19
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
function setup() {
    createCanvas(500, 500);
    background("DodgerBlue");
}

/**
 * draw :
 */

//orange circle
function draw() {
    fill("Orange");
    ellipse(250, 250, 50, 50);
}

//invisble circle
function mouseClicked() {
    fill('transparent');
    ellipse(mouseX, mouseY, 30, 50);
}

//random rectangle
function keyPressed() {
    fill("Red");
    rect(random(0, 500), random(0, 500), 20, 40);
}

//clear background
/*I dont really know what you mean by this. I think you meant to reset
the canvas back to the default. Anyway, I'll just add both interpretations
and have you choose which one is correct.*/
function mouseDragged() {
    background('transparent');
    //background("DodgerBlue")
}
