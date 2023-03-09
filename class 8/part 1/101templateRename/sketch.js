/**
 * Yourfirstand Lastname
 * IGME-101: Assignment Name, m/d/19
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors

let canvWid = 500
let canvHei = 500

/**
 * setup :
 */
function setup() {
    createCanvas(canvWid, canvHei);
    let result = addTwoNumbers(canvWid, canvHei);
    console.log(result);
}

/**
 * draw :
 */

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}
