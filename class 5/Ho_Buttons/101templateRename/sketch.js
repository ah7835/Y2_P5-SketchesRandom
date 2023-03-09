/**
 * Anthony Ho
 * IGME-101: Exercise 3-2:  Buttons, 9/11/19
 * Checking boundaries of buttons
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
function setup() {
    createCanvas(400, 200);
    background("Blue");
}

//inital values of the total #
let continuousNum = 0
let triggerNum = 0

/**
 * draw :
 */
function draw() {
    //stops the numbers from overlapping itself when being added
    background("Blue");

    //Continuous button
    fill("White");
    rect(40, 90, 100, 30);
    //text button
    fill("black");
    textFont('Helvetica');
    text('Continuous', 60, 110);

    //total text L
    fill("white");
    textFont('Georgia');
    text('Continuous Total: '+ continuousNum, 40, 140);
    
    //Continuous boundary
    let withinRectCont = (40) && (140) && (90) && (120);

    //function for pressing continuous button to add to the total #
    if (mouseX >= 40 && mouseX <= 140 && mouseY >= 90 && mouseY <= 120 && mouseIsPressed && withinRectCont) {
        continuousNum = continuousNum + 1;
    }

    //Trigger button
    fill("White");
    rect(260, 90, 100, 30);
    //text button
    fill("black");
    textFont('Helvetica');
    text('Trigger', 290, 110);

    //total text R
    fill("white");
    textFont('Georgia');
    text('Trigger Total: ' + triggerNum, 260, 140);
    
    /*
    //I thought that you wanted to add to the total when the mouse is over the button.
    //Just in case if that's true I'll leave thsi here

    //Trigger Boundary
    let withinRectTrigger = (260) && (360) && (90) && (120);

    //function for having the mouse within the button to add to the total #
    if (mouseX >= 260 && mouseX <= 360 && mouseY >= 90 && mouseY <= 120 && withinRectTrigger) {
        triggerNum = triggerNum + 1;
    }*/
}

function mouseClicked() {
    //Trigger Boundary
    let withinRectTrig = (260) && (360) && (90) && (120);

    //function for having the mouse within the button to add to the total #
    if (mouseX >= 260 && mouseX <= 360 && mouseY >= 90 && mouseY <= 120 && withinRectTrig) {
        triggerNum = triggerNum + 1;
    }
}
