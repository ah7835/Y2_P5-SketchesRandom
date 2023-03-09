/**
 * Anthony Ho
 * IGME-101: For Bugs , 9/23/19
 * Use nested for loops to draw a grid of bugs with varying attributes.
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
    let bugY = 150
    //constrains drawing to only the width of the canvas
    //width 1000 was too big apparently
    for (let bugX = 80; bugX < 800; bugX += 300) {
        //resets loop to the initial Y axis after it adds 300 to bugX
        bugY = 150;
        //constrains drawing to only the height of the canvas
        for (bugY = 150; bugY < height; bugY += 150) {
            //body changing the length incremently by the x and y axis
            let bodyLength = ((bugY) / 5) + ((bugX) / 17)
            //color
                let c = color(random(255),random(255),random(255));
                fill(c);
                //head
                strokeWeight(4);
                ellipse(bugX, bugY, 50, 30);
                //body
                rect((bugX + 20), (bugY - 20), bodyLength, 40);
                //leg loop
            for (let legX = ((bugX + 30)); legX < (bugX + bodyLength); legX = legX + 15) {
                strokeWeight(4);
                line(legX, (bugY - 50), legX, (bugY + 50));
            }
        }
    }
}