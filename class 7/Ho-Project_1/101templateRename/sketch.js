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
    //Boundary of Arrows
    //Up Size button boundary
    let withinTriUpL = (mouseX >= 120) && (mouseX <= 160) && (mouseY >= 350) && (mouseY <= 360);
    //Down Size button boundary
    let withinTriDownL = (mouseX >= 120) && (mouseX <= 160) && (mouseY >= 380) && (mouseY <= 390);
    //Up Speed Button boundary
    let withinTriUpR =  (mouseX >= 190) && (mouseX <= 230) && (mouseY >= 350) && (mouseY <= 360);
    //Down Speed Button boundary
    let withinTriDownR = (mouseX >= 190) && (mouseX <= 230) && (mouseY >= 380) && (mouseY <= 390);

    //Size and Speed Arrow buttons
    if (mouseIsPressed === true && withinTriUpL) {
        boxSize = boxSize + 1;
        //increase Box Size
        console.log(boxSize);
    } else if (mouseIsPressed === true && withinTriDownL) {
        boxSize = boxSize - 1;
        //decrease Box Size
        console.log(boxSize);
    } else if (mouseIsPressed === true && withinTriUpR) {
        boxSpeed = boxSpeed + 1;
        //increase Box Speed
        console.log(boxSpeed);
    } else if (mouseIsPressed === true && withinTriDownR) {
        boxSpeed = boxSpeed - 1;
        //decrease Box Speed
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

//Arrow key functions
function keyPressed() {
    //constrain to the canvas
    let withinCanvas = (boxXCoord >= 0) || (boxXCoord <= 400) || (boxYCoord >= 0) || (boxYCoord <= 340);
    //print keyCode
    console.log(keyCode);
    if (withinCanvas) {
        if (keyIsPressed && keyCode === UP_ARROW) {
            //moves box up
            boxYCoord -= boxSpeed;
        } else if (keyIsPressed && keyCode === DOWN_ARROW) {
            //moves box down
            boxYCoord += boxSpeed;
        } else if (keyIsPressed && keyCode === RIGHT_ARROW) {
            //moves box right
            boxXCoord += boxSpeed;
        } else if (keyIsPressed && keyCode === LEFT_ARROW) {
            //moves box left
            boxXCoord -= boxSpeed;
        }
    }
}


//Random Button and Clear All button
function mouseClicked() {
    //print mouse loaction
    console.log(mouseX, mouseY);
    //boundary of random color button
    let withinRectR = (mouseX >= 250) && (mouseX <= 310) && (mouseY >= 350) && (mouseY <= 390);
    //randomize color of box
    if (withinRectR) {
        boxColor = color(random(255), random(255), random(255));
        //print color of box currently
        console.log(boxColor);
    }
    //boundary of clear all button
    let withinRectC = (mouseX >= 320) && (mouseX <= 380) && (mouseY >= 350) && (mouseY <= 390);
    //reset canvas
    if (withinRectC) {
        background("#F0FFFF");
    }
}
