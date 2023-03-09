/**
 * Anthony Ho
 * IGME-101: Nested Iteration Bugs , 9/18/19
 * Use nested while loops to draw a grid of bugs.
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
//canvas vars
let height = 1000
let width = 1000

function setup() {
    createCanvas(width, height);
    background("lightblue");

    //local variables
    //let anchorPoint = (bugX, bugY)
    let bugX = 80
    let bugY = 150
    
    //constrains drawing to only the width of the canvas
    //1000 was too big apparently
    while (bugX < 800) {
        //resets loop to the initial Y axis after it adds 300 to bugX
        bugY = 150;
        //constrains drawing to only the height of the canvas
        while (bugY < height) {
            let legX
            fill(0);
            //body
            rect((bugX + 20), (bugY - 20), 200, 40);
            //head
            ellipse(bugX, bugY, 50, 30);
            //Prep to draw legs
            //vertical lines 100px long
            strokeWeight(4);
            legX = bugX + 30;
            // First leg just beyond left edge of body (100).
            // legs spaced every 15px
            // beyond right edge of body, which is at 300.
            while (legX < (bugX + 220)) {
                // within body of the bug only
                line(legX, (bugY - 50), legX, (bugY + 50));
                //places next leg
                legX = legX + 15;
            }
            //spaces between columns of bugs
            bugY += 150;
        }
        //spaces between rows of bugs
        bugX += 300;
    }
}

