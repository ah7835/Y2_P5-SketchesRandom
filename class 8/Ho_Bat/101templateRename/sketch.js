/**
 * Anthony
 * IGME-101: Math Bats, 9/30/19
 * Draw bats of various sizes in front of a moon
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */



function setup() {
    createCanvas(500,500);
    background("blue");
    //modes
    colorMode(HSB, 100);
    angleMode(DEGREES);
    //bat
    drawBat(150, 150, 100);

}

//bat
function drawBat(x,y,batHue) {
    //body
    fill(batHue);
    //circle(150, 150, batBody);
    circle(x, y, 40);

    //ellipseMode(CORNER);
    let batWing = (random(80))
    //left wing
    noStroke();
    arc((x - (batWing-15)), y, batWing, 50, 180, 0);
    //right wing
    noStroke();
    arc((x + (batWing-15)), y, batWing, 50, 180, 0);

    //bat width
    let batWidth = 40 + (2*batWing)
    return batWidth;
}

//draw new bats
function mouseClicked() {
    let batWidth = drawBat(mouseX,mouseY,(color(random(255),random(255),random(255))))
    return console.log("Bat Span  " + batWidth);
}

//moon
function draw() {
    //moon
    let gray = 80 + 20 * cos(frameCount);
    fill(gray);
    circle(200, 200, 200); 

    //check to see if mouse is in moon
    let moon = isInCircle(mouseX, mouseY, 200, 200, 200)
    if (moon === true){
        return console.log("moon");
    }
}

//check to see if mouse is inside the moon
function isInCircle(x, y, cx, cy, diameter) {
    //parameters of the moon
    if ((x < (cx + (diameter/2))) && (x > (cx - (diameter/2))) && (y < (cy + (diameter/2))) && (y > (cy - (diameter/2)))) {
        return true;
    } else {
        return false;
    }
}
