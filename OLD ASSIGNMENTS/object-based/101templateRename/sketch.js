/**
 * Yourfirstand Lastname
 * IGME-101: Assignment Name, m/d/19
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
let car1
let car2

function setup() {
    createCanvas(500, 500);
    frameRate(10);
    car1 = new Car(250,250,"purple", "Honda");
    car2 = new Car(100,100,"black", "Civic");

    background("gray");
    //car 1
    fill(car1.carColor);
    rect(car1.xPos, car1.yPos, 50, 50);
    //car 2
    fill(car2.carColor);
    rect(car2.xPos, car2.yPos, 20, 20);
}


/**
 * draw :
 */
function draw() {

}
