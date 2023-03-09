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
    createCanvas(300, 300);
    background("grey");
    frameRate(1);
}

/**
 * draw :
 */
function draw() {
    let age = 20;
    if(age == 25 && age >= 0) {
        console.log("Young");
    } else if (age > 25 && age <= 50) {
        console.log("Mid-Age");
    } else {
        console.log("Mature");
    }
}
