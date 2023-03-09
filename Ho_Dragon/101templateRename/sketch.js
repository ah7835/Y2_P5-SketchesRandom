/**
 * Anthony Ho
 * IGME-101: DragonFSM, 11/4/19
 * Finite State Machine
 */

"use strict"; //catch some common coding errors

//var class
let dragon;

/**
 * setup :
 */
function preload() {
    //preload image
    dragon = new DragonSprite()
}

function setup() {
    createCanvas(400, 400);
    imageMode(CENTER);
}

/**
 * draw :
 */
function draw() {
    //dino image and function
    background("red");
    dragon.display();
    dragon.updateState();
}
