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

    strokeWeight(7);
    stroke("Black");
    fill("Black");
}

let locationX = 0;

/**
 * draw :
 */
function draw() {
    while (locationX < 300) {
        point(locationX, 40);
        // move point
        locationX = locationX + 1;
    }console.log( locationX);
    //do more stuff
}
