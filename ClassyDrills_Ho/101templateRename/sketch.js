/**
 * Anthony Ho
 * IGME-101: ClassyDrills, 10/25/19
 * Practicing classes
 */

"use strict"; //catch some common coding errors

let oak1;

/**
 * setup :
 */
function setup() {
    createCanvas(400,400);
    //console.log(oak1);
    print(oak1);
    //size of oak
    //centers the oak1
    oak1 = new Tree(width/2,height/2);
    print(oak1);
    //age of oak
}

/**
 * draw :
 */
function draw() {
    background("white");
    oak1.display();
    //draws the circles
}

function mousePressed() {
    console.log("Age of oak1:", oak1.getAge());
    oak1.transplant(mouseX,mouseY);
    //makes circles at mouse position
}
