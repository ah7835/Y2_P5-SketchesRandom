/**
 * Anthony Ho
 * IGME-101: Exercise 15-1:  2D Arrays & DOM elements, 12/2/19
 * images, p5js DOM elements, two-dimensional arrays, nested loops, object-oriented programming.
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
//load img
let boss;
function preload() {
    boss = new SceneMgr()
}

//allow controls to work
function setup() {
    boss.setControls();
    createCanvas(700,700);
    boss.settingChanged();
}