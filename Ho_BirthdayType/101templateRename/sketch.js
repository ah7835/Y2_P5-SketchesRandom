/**
 * Anthony Ho
 * IGME-101: Assignment Name, 10/28/19
 * Create an interesting visual composition based the 
   Merriam Webster Word of the Day for your birthday 
   (https://www.merriam-webster.com/word-of-the-day/calendar).
   That word should be visible as well as suggested by the mood
   of your compositio
 */

"use strict"; //catch some common coding errors


//class
 let drops= [];
//arrays
let xPos = [];
let yPos = [];
let pourSPED = [];

//vars for changing
let rainColor = "lightblue"
let backColor = "gray"
let rainW = 'rain'


/**
 * setup :
 */
function setup() {
  createCanvas(400, 400);

  //calling the class
  for (let i = 0; i < 40; i++) {
    drops[i] = new Word()
  }
}

//draw
function draw() {
  background(backColor);
  fill(rainColor);

  //makeing it rain
  for (let i = 0; i < drops.length; i++) {
    drops[i].rain();
    drops[i].display();
  }

  //make the rain more dense
  drops.push(new Word());

  //main text
  storm();
  
  //bottom instructions
  instructions();
}

//reset canvas
function mousePressed() {
    drops = [];
}

//change color to monochrom and back to color
function keyPressed() {
  if (keyIsPressed === true && keyCode === UP_ARROW) {
    rainColor = "black"
    backColor = "white"
    for (let i = 0; i < drops.length; i++) {
      drops[i].word = 'MURK'
    }
  } else if (keyIsPressed === true && keyCode === DOWN_ARROW) {
    rainColor = "lightblue"
    backColor = "gray"
    for (let i = 0; i < drops.length; i++) {
      drops[i].word = 'rain'
    }
  }
}

//main text
function storm() {
  fill(backColor);
  textSize(100);
  textFont('Impact');
  text('STORM', width/7, height/2);
}

//bottom instructions for the user
function instructions() {
  fill("black");
  rect(0, 340, 400, 60);
  fill("white");
  textSize(10);
  textFont('Georgia');
  let posY = 357
  let posX = 125
  text('Click to reset canvas', posX + 25, posY);
  text('Press the Up Arrow to change to monochrome', posX - 35, posY + 15);
  text('Press the Down Arrow to change to color', posX - 20, posY + 30);
}
