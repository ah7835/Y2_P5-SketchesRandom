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
    background("Pink");
}

/**
 * draw :
 */
function head() {
    fill("white");
    rect(170, 20, 150, 100);
}

function createFace() {
    fill("white");
    rect(190, 40, 110, 20);
}

function body() {
    fill("white");
    rect(140, 100, 210, 200);
}

function arms() {
    //L
    fill("white");
    rect(80, 100, 80, 160);
    //R
    fill("white");
    rect(330, 100, 80, 160);
}

function legs() {
    //L
    fill("white");
    rect(160, 300, 80, 160);
    //R
    fill("white");
    rect(250, 300, 80, 160);
}

function draw() {
    //makeRobot();
    body();
    head();
    createFace();
    arms();
    legs();
    //robot();
}
