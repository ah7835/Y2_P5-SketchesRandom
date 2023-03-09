/**
 * Yourfirstand Lastname
 * IGME-101: Assignment Name, m/d/19
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors

/*
function setup() {
    createCanvas(200, 200);
    let y = 0; 
    // loop control variable
    while (y < 200) {
        line (0,y,width,y);
        y = y + 10;
    }
}
*/

function setup() {
    createCanvas(400, 400);
}

function draw() {
    let w = 200 ;   
    // loop control variablebackground(255);
    while ( w > 0) {
        fill(w); 
        //grayscale color
        ellipse(mouseX, mouseY, w, w );
        w = w - 20;
    }
}
