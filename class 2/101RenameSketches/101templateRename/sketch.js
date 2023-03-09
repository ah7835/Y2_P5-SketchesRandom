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
    createCanvas(400, 400);
    background("Blue");
    stroke("FireBrick");
    fill("Green");
    frameRate(90);
}

let x = 30;

/**
 * draw :
 */
function draw() {
    //background("Blue");  //stops the trail of the square
    //fill("Green");
    //rect(x, 30, 30, 30);
    //x = x + 1;
    strokeWeight(random(2, 4));
    //point(mouseX,mouseY);
    line(pmouseX, pmouseY, mouseX, mouseY);
    //text("Yes", mouseX, mouseY);
    stroke("Red");
    point(random(0, 200),random(200, 400));
}

function mouseClicked() {
    background("Blue");
    textSize(50);
    text("Howdy", 150, 150);
}
 function keyPressed() {
     //background("Blue")
     textSize(50);
     text(key, 150, 150);
 }











































