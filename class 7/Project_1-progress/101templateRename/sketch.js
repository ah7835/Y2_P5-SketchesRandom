/**
 * Anthony Ho
 * IGME-101: Sketcher, 9/13/19
 * Box that draws on canvas
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */

//coords
let boxXCoord = 200
let boxYCoord = 200
//size
let boxSize = 50
//speed
let boxSpeed = 10
//color
let boxColor = "#A52A2A"

function setup() {
    createCanvas(400, 400);
    noStroke();
    textSize(24);
    background("#F0FFFF");
}

/**
 * draw :
 */
function draw() {
    background("#F0FFFF");
    //might need a constrain value to prevent box from going to the negatives
    let withinTriUpL = (120) && (160) && (350) && (360);
    let withinTriDownL = (120) && (160) && (380) && (390);
    let withinTriUpR = (190) && (230) && (350) && (360);
    let withinTriDownR = (190) && (230) && (380) && (390);
    if (mouseIsPressed === true && mouseX >= 120 && mouseX <= 160 && mouseY >= 350 && mouseY <= 360 && withinTriUpL) {
        //size is broken fix it
        boxSize = boxSize + 1; 
        console.log(boxSize);
    } else if (mouseIsPressed === true && mouseX >= 120 && mouseX <= 160 && mouseY >= 380 && mouseY <= 390 && withinTriDownL) {
        //size is broken fix it
        boxSize = boxSize - 1; 
        console.log(boxSize);
    } else if (mouseIsPressed === true && mouseX >= 190 && mouseX <= 230 && mouseY >= 350 && mouseY <= 360 && withinTriUpR) {
        boxSpeed = boxSpeed + 1; 
        console.log(boxSpeed);
    } else if (mouseIsPressed === true && mouseX >= 190 && mouseX <= 230 && mouseY >= 380 && mouseY <= 390 && withinTriDownR) {
        boxSpeed = boxSpeed - 1; 
        console.log(boxSpeed);
    }

    //box
    fill(boxColor);
    rect(boxXCoord, boxYCoord, boxSize, boxSize);

    //UI 
    fill("#191970");
    rect(0, 340, 400, 60);
    //UI text
    fill("White");
    textSize(12);
    text("Use arrows to\nmove color box", 10, 365);

    //Size arrow buttons
    fill("#696969");
    triangle(140, 350, 120, 360, 160, 360);
    fill("White");
    text("size: " + boxSize, 120, 373);
    fill("#696969");
    triangle(140, 390, 120, 380, 160, 380);
    //Speed arrow buttons
    fill("#696969");
    triangle(210, 350, 190, 360, 230, 360);
    fill("White");
    text("speed: " + boxSpeed, 183, 373);
    fill("#696969");
    triangle(210, 390, 190, 380, 230, 380);

    //UI random button
    fill("#696969");
    rect(250, 350, 60, 40, 10);
    fill("White");
    text("Random\n  Color", 257, 367);
    //UI Clear All button
    fill("#696969");
    rect(320, 350, 60, 40, 10);
    fill("White");
    text("Clear\n  All", 335, 367);
}


//confused on coord
//Maybe need to add more variables
/*
function keyIsPressed() {
    console.log(keyCode);
    if (keyIsPressed && keyCode === UP_ARROW) {
        boxSpeedY = boxSpeedY + 1
    } else if (keyIsPressed && keyCode === DOWN_ARROW) {
        boxSpeedY = boxSpeedY - 1
    } else if (keyIsPressed && keyCode === RIGHT_ARROW) {
        boxSpeedX = boxSpeedX + 1
    } else if (keyIsPressed && keyCode === LEFT_ARROW) {
        boxSpeedX = boxSpeedX - 1
    }
}
*/


//Not working, fix it
/*
function mouseClicked() {
    console.log(mouseX && mouseY); //fix this - suppose to be mouse location
    //boundary of random color button
    let withinRectR = (250) && (310) && (350) && (390);

    //randomize color of box
    if (mouseX >= 250 && mouseX <= 310 && mouseY >= 350 && mouseY <= 390 && withinRectR){
        boxColor = color(random(255),random(255),random(255));
        console.log(boxColor); //check to see if this is the right location
    }


    //boundary of clear all button
    let withinRectC = (320) && (380) && (350) && (390);

    //reset canvas
    if (mouseX >= 320 && mouseX <= 380 && mouseY >= 350 && mouseY <= 390 && withinRectC){
        background("#F0FFFF");
    }
}
*/