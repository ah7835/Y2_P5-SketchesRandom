/**
 * Yourfirstand Lastname
 * IGME-101: 101.4-1ex Iteration, 9/16/19
 * 20 rectangles
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
//initial value
let sides = 10;
let orientation = 0;

function setup() {
    //background
    createCanvas(500, 500);
    background("Blue");
    //initial rect
    
    //for loop
    let i = 0;
    //stops making rectangles at 20 rects
    while(i <= 20) {
        fill("Red");
        rect(orientation,orientation,sides,sides);
        //move rect diagonally by 10
        orientation += 10;
        //increases rect side's size by 10
        sides += 15;
        //+1 rect
        i++;
    }
}

// initial attempt
/*
function draw() {
    fill("Red");
    rect(orientation,orientation,sides,sides);
    let i = 0
    while(i <= 20) {
        orientation += 10;
        sides += 15;
        i++;
    }
}
*/
