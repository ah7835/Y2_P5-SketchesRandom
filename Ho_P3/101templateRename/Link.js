class LinkSprite {
    constructor(x, y, name) {
        //Colored Link sprites
        this.sprites = [];
        this.state = 0;

        //coord
        this.x = x
        this.y = y
        console.log(name);
        this.name = name
        //sword sprites
        if (this.name === "Link") {
            this.sword = new Sword(this.x, this.y, "Link");
        } else if (this.name === "DarkLink") {
            this.sword = new Sword(this.x, this.y, "DarkLink");
        }

        //rupee holder
        this.rupees = []

        //characters
        if (this.name === "Link") { //Link Sprites
            this.sprites.push(loadImage("zelda-sprites/zelda/link/idle/idle-down.png")); //0 //idle down
            this.sprites.push(loadImage("zelda-sprites/zelda/link/idle/idle-up.png")); //1  //idle up
            this.sprites.push(loadImage("zelda-sprites/zelda/link/idle/idle-left.png")); //2  //idle left
            this.sprites.push(loadImage("zelda-sprites/zelda/link/idle/idle-right.png")); //3  //idle right
            this.sprites.push(loadImage("zelda-sprites/zelda/link/walk/link-down.png")); //4  //walk down
            this.sprites.push(loadImage("zelda-sprites/zelda/link/walk/link-up.png")); //5  //walk up
            this.sprites.push(loadImage("zelda-sprites/zelda/link/walk/link-left.png")); //6  //walk left
            this.sprites.push(loadImage("zelda-sprites/zelda/link/walk/link-right.png")); //7  //walk right
        } else if (this.name === "DarkLink") { //dark Link Sprites
            this.sprites.push(loadImage("zelda-sprites/zelda/dark-link/idle/idle-down.png")); //0 //idle down
            this.sprites.push(loadImage("zelda-sprites/zelda/dark-link/idle/idle-up.png")); //1  //idle up
            this.sprites.push(loadImage("zelda-sprites/zelda/dark-link/idle/idle-left.png")); //2  //idle left
            this.sprites.push(loadImage("zelda-sprites/zelda/dark-link/idle/idle-right.png")); //3  //idle right
            this.sprites.push(loadImage("zelda-sprites/zelda/dark-link/walk/link-down.png")); //4  //walk down
            this.sprites.push(loadImage("zelda-sprites/zelda/dark-link/walk/link-up.png")); //5  //walk up
            this.sprites.push(loadImage("zelda-sprites/zelda/dark-link/walk/link-left.png")); //6  //walk left
            this.sprites.push(loadImage("zelda-sprites/zelda/dark-link/walk/link-right.png")); //7  //walk right
        }
    }

    display() {
        let stateSprite = this.sprites[this.state]

        //display between idle and sword sprite
        if (mouseIsPressed && this.name === "Link") {
            this.sword.display();
        } else if (keyIsDown(32) && this.name === "DarkLink") {
            this.sword.display();
        } else {
            image(stateSprite, this.x, this.y)
        }
    }

    move() { //also updateState() is inside for cleaner code
        let speed = 3
        if (this.name === "Link") {  //Link
            //character movement (ArrowKeys)
            if (keyIsDown(LEFT_ARROW)) { //left
                this.state = 6;  //walkL
                this.x -= speed;
            } else if (keyIsDown(RIGHT_ARROW)) { //right
                this.state = 7;  //walkR
                this.x += speed;
            } else if (keyIsDown(UP_ARROW)) { //up
                this.state = 5;  //walkUp
                this.y -= speed;
            } else if (keyIsDown(DOWN_ARROW)) {  //down
                this.state = 4; //walkDown  
                this.y += speed;
            } else {  // If walking, change direction of face
                switch (this.state) {
                    case 6:  //walkL
                        this.state = 2;  //faceL
                        break;
                    case 7:  //walkR
                        this.state = 3;  //faceR
                        break;
                    case 5:  //walkUp
                        this.state = 1;  //faceUp
                        break;
                    case 4:  //walkDown
                        this.state = 0;  //faceDown
                        break;
                }
            }
        } else if (this.name === "DarkLink") {  //Dark link
            if (keyIsDown(65)) { // L-a key
                this.state = 6;  //walkL
                this.x -= speed;
            } else if (keyIsDown(68)) { // R-a key
                this.state = 7;  //walkR
                this.x += speed;
            } else if (keyIsDown(87)) { //up-w key
                this.state = 5;  //walkUp
                this.y -= speed;
            } else if (keyIsDown(83)) { //down-s key
                this.state = 4;  //walkDown
                this.y += speed;
            } else {  // If walking, change direction of face
                switch (this.state) {
                    case 6:  //walkL
                        this.state = 2;  //faceL
                        break;
                    case 7:  //walkR
                        this.state = 3;  //faceR
                        break;
                    case 5:  //walkUp
                        this.state = 1;  //faceUp
                        break;
                    case 4:  //walkDown
                        this.state = 0;  //faceDown
                        break;
                }
            }
        }
        //movement of sword state is consistent with idle position
        this.sword.move();
    }

    //pick up rupee
    pickUp(item) {
        item.pickedUp(this)
        this.rupees.push(item)
    }

    //drop rupee
    drop() {
        //logic to drop rupees
        if (this.name === "Link") { //Link
            if (mouseIsPressed) { //mousepressed
                for (let i = 0; i < this.rupees.length; i++) {
                    //drop rupees near player
                    this.rupees[i].x = random(this.x-120, this.x+120)
                    this.rupees[i].y = random(this.y-120, this.y+120)
                    this.rupees[i].dropped();
                    console.log(this.name, "dropped his rupees")
                }
                this.rupees = []; //emptys the array of rupees in the characters
            }
        } else if (this.name === "DarkLink") { //Dark Link
            if (keyIsDown(32)) { //spacebar
                for (let i = 0; i < this.rupees.length; i++) {
                    this.rupees[i].dropped();
                }
                this.rupees = []; //emptys the array of rupees in the characters
            }
        }
    }

    //only collect rupee within link boundary
    isInside(rupee) {
        //collide withe link bound and rupee bound
        if (this.x < rupee.x + 34 &&
            this.x + 74 > rupee.x &&
            this.y < rupee.y + 60 &&
            this.y + 95 > rupee.y) {
            //collision detected!
            this.pickUp(rupee)
        }

        //boundary reference
        //let linkBound = (rupee.x >= this.x && rupee.x <= this.x+78 && rupee.y >= this.y && rupee.y <= this.y+100)
        //let rupeeBound = (rupee.x >= this.x && rupee.x <= this.x+34 && rupee.y >= this.y && rupee.y <= this.y+60)
    }
}