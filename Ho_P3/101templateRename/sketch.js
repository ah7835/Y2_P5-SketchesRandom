/**
 * Anthony Ho
 * IGME-101: Project 3, 12/2/19
 * 2 characters pick up things and dropping them to the places where they collected them from
 */

"use strict"; //catch some common coding errors

//global classes
let back;
let ui;
let link;
let darkLink;
let rupee;
let rupArray;

/**
 * setup :
 */
function preload() {
  //preload images
  link = new LinkSprite(480, 390, "Link")
  darkLink = new LinkSprite(-15, 20, "DarkLink")
  rupee = new Rupee()
  //background
  back = loadImage("zelda-sprites/zelda/background.png")
  //instructions
  ui = loadImage("zelda-sprites/zelda/bottomUI.png")

}

function setup() {
  createCanvas(700, 700);
  //rupee count
  createRupeeArray(30);
}

/**
 * draw :
 */
function draw() {
  //background
  image(back, 0, 0);

  //display rupees
  showRupeeArray();

  //instructions
  image(ui, 0, 600);

  //Colored link and his functions
  link.display();
  link.move();
  //link dropping rupees when mouseIsPressed
  link.drop(rupee);
  rupee.dropped(link);

  //Dark link and his functions
  darkLink.display();
  darkLink.move();
  //Dark link dropping rupees when SPACEBAR is pressed
  darkLink.drop(rupee);
  rupee.dropped(darkLink);

  //makes rupees disappear when bounds of characters interact with rupees
  //Colored link
  for (let i = 0; i < rupArray.length; i++) {
    if (rupArray[i].owner === null) {
      link.isInside(rupArray[i])
    }
  }
  //Dark link
  for (let i = 0; i < rupArray.length; i++) {
    if (rupArray[i].owner === null) {
      darkLink.isInside(rupArray[i])
    }
  }
}

//call the rupee class into an array
function createRupeeArray(count) {
  rupArray = []
  for (let i = 0; i < count; i++) {
    rupArray.push(new Rupee());
  }
}

//rupees displayed
function showRupeeArray() {
  for (let i = 0; i < rupArray.length; i++) {
    rupArray[i].display();
  }
}

