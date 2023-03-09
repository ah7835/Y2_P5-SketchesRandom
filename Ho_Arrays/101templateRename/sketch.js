/**
 * Anthony Ho
 * IGME-101: Arrays, 10/31/19
 * Arrays and Loops and Things
 */

"use strict"; //catch some common coding errors

//class var
let box;
/**
 * setup :
 */
function setup() {
    createCanvas(400,400);
    testNumberArrays(10);
    testNumberArrays(4);
    testStringArray("Mother! You're alive?");
    testStringArray("Blue Sky");
    testObjArray(6);

    //class var
    box = new Box()
}

//arrays
function testNumberArrays(count) {
    let originalArray = [];
    
    //add counting elements to originalArray
    for (let i = 0; i< count; i++) {
        originalArray[i] = random(20,50);
    }
    console.log("The original array of random numbers:")
    console.log(originalArray);

    //add counting elements to secondArray
    let secondArray = [];
    for (let i = 0; i< count; i++) {
        secondArray.push(random(2,10));
    }
    console.log("The second array of smaller random numbers:");
    console.log(secondArray);

    //add originalArray and secondArray
    let sumArray = [];
    for (let i = 0; i< sumArray.length; i++) {
        sumArray[i] = originalArray[i] + secondArray[i]
    }
    console.log("The sum of the original array and sumArray");
    console.log(sumArray);
}

//making of text in console
function testStringArray(textLine) {
    //textline input setup
    let splitArray = textLine.split(" ");
    console.log("The array of split words:");
    //array of textLine
    console.log(splitArray);

    //makes uhs
    let uhArray = [];
    for (let i = 0; i< splitArray.length; i++) {
        uhArray.push("uh");
    }
    console.log("The array of uhs");
    //uh array
    console.log(uhArray);

    //add "uh" to the spaces of the lines
    let sumString = ""
    for (let i = 0; i< splitArray.length; i++) {
        sumString = sumString + splitArray[i] + uhArray[i]
    }
    console.log("The sum of sumString, splitArray, and uhArray");
    //"uh" inside textLine
    console.log(sumString);
}

//making of boxes
function testObjArray(count) {
    //makes new boxes
    let boxArray = [];
    for (let i = 0; i< count; i++) {
        boxArray.push(new Box());
    }

    //display boxes
    for (let i = 0; i< boxArray.length; i++) {
        boxArray[i].display();
    }
    //x,y,size,gray nums
    console.log(boxArray[3]);
}

