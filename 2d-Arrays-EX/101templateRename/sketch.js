/**
 * Yourfirstand Lastname
 * IGME-101: Assignment Name, m/d/19
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
let foodArray;
function setup() {
foodArray = [["Manly man","nitrogen","chlidren"],
            ["Man man","hydrogen","elderly"],
            ["Woman man","oxygen","adults"]]
    for(let i = 0; i < foodArray.length; i++){
        let person = foodArray[i];
        console.log(person[0], "likes to eat", person[1], "and", person[2]) 
    }
}

/**
 * draw :
 */
function draw() {

}
