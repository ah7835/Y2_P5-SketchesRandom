/**
 * Yourfirstand Lastname
 * IGME-101: Assignment Name, m/d/19
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
function setup() {
    createCanvas(500, 500);
    background("Blue");
}

/**
 * draw :
 */
function draw() {
    //Make a loop that counts up from 1 to 31 (inclusive),
    //increasing by 2 each iteration. 
    //Print the current value to the console within the loop
    /*
    let x = -1
    while(x < 31){
        x = x + 2;
        console.log(x);
    }
    */
    //Make a loop that counts down from 515 to 500, 
    //decreasing by .5 each iteration. 
    //Print the current value to the console within the loop
    /*
    let y = 520
    while(y > 500){
        //y = y - 5;
        y -= 5;
        console.log(y);
    }
    */
    //Use a loop to find the sum of all even numbers between 1 and 100. 
    //Print the sum after the loop runs
    /*
    let z = 0
    let sum = 0
    while(z <= 100){
        //z = z + 2;
        z += 2;
        //sum = sum + z;
        sum += z;
        console.log(sum);
    }
    */

    //4th challenge
    fill(100, 50);
    rect(random(width),mouseY,20,20);
}
