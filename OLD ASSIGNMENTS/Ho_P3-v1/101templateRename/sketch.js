/**
 * Anthony Ho
 * IGME-101: DragonFSM, 11/4/19
 * Finite State Machine
 */

"use strict"; //catch some common coding errors

//var class
let dragon;
let ring;
let arm;

/**
 * setup :
 */
function preload() {
    //preload image
    dragon = new DragonSprite(150, 50)
    ring = new Ring(20,270)
    
}

function setup() {
    createCanvas(400, 400);
    //imageMode(CENTER);
}

/**
 * draw :
 */
function draw() {
    //dino image and function
    background("lightblue");
    dragon.display();
    dragon.updateState();

    ring.display();
    //dragon.arm.display();
   // dragon.arm.updateState();

    fill("green");
    rect(0,340, 400, 60);

    rect(20,270,60,60)
    let ringBound = (dragon.arm.width >= 20 && dragon.arm.height >= 270 && dragon.arm.width <= 80 && dragon.arm.height <= 330)
    //let ringBound = (mouseX >= 20 && mouseY >= 270 && mouseX <= 80 && mouseY <= 330)
    
    /*
    if (ring.intersects(arm)) {
        fill("blue");
        rect(0,340, 400, 60);
    }*/

    /*
    if (ringBound) {
        ring.display();
    }*/

    //console.log(dragon.arm.width);
    //console.log(dragon.arm.height);
    
}


/*
function mouseClicked() {
    dragon.pickUp(ring);
}*/
