/**
 * Anthony Ho
 * IGME-101: Landscape, 7/30/19
 * Drawing a winter snow scene
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
function setup() {
    createCanvas(400, 400);
    background("LightBlue");
}

/**
 * draw :
 */

function draw() {
    //white floor
    fill("White");
    rect(0, 300, 400, 401);

    //trees
    //left
    fill("Brown");
    rect(50, 220, 25, 100);
    fill("Green");
    ellipse(63, 220, 80, 80);
    //right
    fill("Brown");
    rect(100, 250, 25, 100);
    fill("Green");
    ellipse(113, 250, 80, 80);

    //snowman
    fill("White");
    ellipse(300, 340, 80, 80);
    ellipse(300, 290, 60, 60);
    ellipse(300, 250, 50, 50);

    //text
    fill("Black");
    textSize(40);
    //I dont think this actually worked but it looks nice
    textFont('Beth Ellen');
    text("Snow Morning", 75, 100);

    /*for some reason, this failed attempt at snow allows for the
    mouseClicked elements to be in the foreground so I am just gonna
    leave this here*/
    fill("White");
    ellipse(x, x, 5, 5);
    x = x - 1;
}


function mouseClicked() {
    background("DarkBlue");

    //white floor
    fill("White");
    rect(0, 300, 400, 401);

    //trees
    //left
    fill("DarkSalmon");
    rect(50, 220, 25, 100);
    fill("HoneyDew");
    ellipse(63, 220, 80, 80);
    //right
    fill("DarkSalmon");
    rect(100, 250, 25, 100);
    fill("HoneyDew");
    ellipse(113, 250, 80, 80);

    //snowman
    fill("White");
    ellipse(300, 340, 80, 80);
    ellipse(300, 290, 60, 60);
    ellipse(300, 250, 50, 50);

    fill("Black");
    //eyes
    ellipse(290, 245, 5, 5);
    ellipse(310, 245, 5, 5);
    //hat
    rect(275, 180, 50, 50);
    rect(265, 225, 70, 5);
    //buttons
    ellipse(300, 285, 4, 4);
    ellipse(300, 295, 4, 4);
    ellipse(300, 305, 4, 4);
    ellipse(300, 330, 4, 4);
    ellipse(300, 345, 4, 4);
    ellipse(300, 360, 4, 4);

    fill("DarkRed");
    rect(275, 215, 50, 10);
    //scarf
    fill("LightCoral");
    rect(270, 265, 60, 15);
    rect(280, 265, 20, 35);
    //nose
    fill("Orange");
    ellipse(300, 255, 9, 9);

    //Text
    fill("Gold");
    textSize(40);
    //I dont think this actually worked but it looks nice
    textFont('Beth Ellen');
    text("Merry Winter", 90, 100);
}
