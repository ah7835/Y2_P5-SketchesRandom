/**
 * Anthony Ho
 * IGME-101: Project 2, 10/23/19
 * Columns of moving squares
 */

"use strict"; //catch some common coding errors


/**
 * setup :
 */
let columnCount = 3

function setup() {
    createCanvas(600, 600);
    background("gray");
}

/**
 * draw :
 */
function draw() {
    background("gray");

    //relates to size of rectangles
    let size = width / columnCount

    //placement of rectangles
    for (let x = 0; x < width; x += size) {
        for (let y = 0; y < size * 3; y += size) {
            if (y === 0) {
                square1(x, y, size);
            } else if (y === size) {
                square2(x, y, size);
            } else if (y === size * 2) {
                square3(x, y, size);
            }
        }
    }
}


function square1(x, y, size) {
    //background
    //lighting effect
    fill(color(sin(frameCount * 0.09) * size));
    square(x, y, size);
    // draw the ball

    let frameMax = frameCount % 1000
    //"for loop"
    let tony = 0
    //placement of the rect
    let x1 = x + size/16
    let y1 = y + size/16
    //movement
    let xSpeed = 1;
    let ySpeed = 1;
    //changing colors
    let colorChange = color(0,0,0)
    let blueColor = color(0,0,255)
    let redColor = color(255,0,0)

    //oscilates the movemnt of the squares
    let diff = size/16

    //changes the color and direction of the squares
    while (tony < frameMax) {
        if (x1 + diff >= size + x - 10 || x1 <= x) {
            xSpeed = -xSpeed;
            colorChange = blueColor;
        } else if (y1*diff>= size + y - diff || y1 <= y) {
            ySpeed = -ySpeed;
            colorChange = redColor;
        }
        x1 += xSpeed;
        y1 += ySpeed;
        tony++;
    }

    fill(colorChange); // rect color
    //top rect
    rect(x1, y1 + size/16, size/10, size/10);
    //mid rect
    rect(x1, y1 + size/2.5, size/10, size/10);
    //bottom rect
    rect(x1, y1+ 3*size/4, size/10, size/10);
}



function square2(x, y, size) {
    //background
    fill("black");
    square(x, y, size);
    //random appearing and disappearing rectangles
    //random color change
    for (let i = 0; i < 5; i++) {
        fill(color(random(255), random(255), random(255)));
        rect(random(x - i + 30, x + size - i + 30), random(y, y + size - i), i - 30, i);
    }

}




function square3(x, y, size) {
    //background changes from red, blue, and green
    fill(color((cos(frameCount * 0.006) * size),(cos(frameCount * 0.004) * size),(cos(frameCount * 0.002) * size)));
    square(x, y, size);

    //var colors
    let randomGreenColor = color(0,(cos(frameCount * 0.2) * size) / 2 + size / 2,0)
    let randomBlueRedColor = color((sin(frameCount * 0.15) * size), 0,(sin(frameCount * 0.1) * size) / 2 + size / 1.5)

    //Oscilaating circles in size
    let d1 = (sin(frameCount * 0.1) * size) / 8 + size / 15;
    let d2 = (cos(frameCount * 0.2) * size) / 8 + size / 6;
    let d3 = (sin(frameCount * 0.15) * size) / 6 + size / 5;

    //circle top left
    fill(randomBlueRedColor);
    ellipse(x + size/4, y + size/4, d3, d2);
    //circle top right
    fill(randomGreenColor);
    ellipse(x + 3*size/4, y + size/4, d2, d1);
    //circle bottom left
    ellipse(x + size/4, y + 3 *size/4, d2, d1);
    //circle bottom right
    fill(randomBlueRedColor);
    ellipse(x + 3*size/4, y + 3 *size/4, d1, d3);
    
}

//changes the amount of columns from the numKeys
function keyTyped() {
    if (key === '3') {
        columnCount = 3;
    } else if (key === '4') {
        columnCount = 4;
    } else if (key === '5') {
        columnCount = 5;
    } else if (key === '6') {
        columnCount = 6;
    }
}
