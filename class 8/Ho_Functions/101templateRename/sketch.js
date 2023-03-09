/**
 * Anthony Ho
 * IGME-101: Functions, 9/25/19
 * A lot of functions
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
function setup() {
    createCanvas(500, 500);
    background("Pink");

    //ROBOT
    body();
    head();
    createFace();
    arms();
    legs();

    //BULLSEYE
    bullseye(300, 300, 200);
    bullseye(200, 200, 200);
    bullseye(100, 100, 100);

    //Many Happy Returns
    //initial
    let num1 = 60;
    let num2 = 35;
    //multiply
    let product = multiply2Numbers(num1, num2); // <- Your function!
    // The ()s force the arithmetic before changing to a string
    console.log("Product equals", product, ", should be", (num1 * num2));
    //yeet
    let prefixed = yeetThis("some string goes here"); // <- Your function!
    console.log(prefixed);
    //Even&odd
    let even1 = isEven(num1);  // <- Your function!
    console.log(num1, "is even?", even1);
    console.log(num2, "is even?)", isEven(num2)); // <- Your function!

    //Part 4
    //This orange square is for testing isInside()
    fill("Orange");
    rect(200, 200, 40, 40);
    let insideTest1 = isInside(220, 211, 200, 200, 40, 40); //true?
    let insideTest2 = isInside(250, 211, 200, 200, 40, 40); //false?
    let insideTest3 = isInside(20, 211, 200, 200, 40, 40); //false?
    let insideTest4 = isInside(220, 21, 200, 200, 40, 40); //false?
    console.log("isInside() testing:", insideTest1, insideTest2, insideTest3, insideTest4);
}

/**
 * draw :
 */

//PART 1
//ROBOT
//head
function head() {
    fill("white");
    rect(170, 20, 150, 100);
}
//eyes
function createFace() {
    fill("white");
    rect(190, 40, 110, 20);
}
//body
function body() {
    fill("white");
    rect(140, 100, 210, 200);
}
//arms
function arms() {
    //L
    fill("white");
    rect(80, 100, 80, 160);
    //R
    fill("white");
    rect(330, 100, 80, 160);
}
//legs
function legs() {
    //L
    fill("white");
    rect(160, 300, 80, 160);
    //R
    fill("white");
    rect(250, 300, 80, 160);
}

//PART 2
//BULLSEYE
function bullseye(cenX, cenY, dia) {
    for (dia = 200; dia > 0; dia = dia - 20) {
        fill(dia);
        circle(cenX, cenY, dia);
    }
}

//PART 3
//Many Happy Returns
//multiply
function multiply2Numbers(num1, num2) {
    let answer = num1 * num2;
    return answer;
}
//yeet
function yeetThis(aString) {
    let sentence = "Yeet" + aString;
    return sentence;
}
//even&odd
//idk if this is right
function isEven(aNumber) {
    if (aNumber % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//PART 4
//inside rect
function isInside(x, y, rLeft, rTop, rWidth, rHeight) {
    if ((x > rLeft) && (y > rTop) && (x < (rLeft + rWidth)) && (y < (rTop + rHeight))) {
        return true;
    } else {
        return false;
    }
}
//rectangle mouse
function draw() {
    rect(100, 100, 100, 100);
    let mouseInside = isInside(mouseX, mouseY, rLeft, rTop, rWidth, rHeight);
    if (mouseInside) {
        fill("Green");
    } else {
        fill("Orange");
    }
}