class Sword {

    constructor(x, y, name) {
        //Colored Link Sword sprites
        this.sprites = [];

        //characters
        this.name = name
        if (this.name === "Link") { //Link
            this.sprites.push(loadImage("zelda-sprites/zelda/link/attack/attack-down.png")); //0 //attack down
            this.sprites.push(loadImage("zelda-sprites/zelda/link/attack/attack-up.png")); //1  //attack up
            this.sprites.push(loadImage("zelda-sprites/zelda/link/attack/attack-left.png")); //2  //attack left
            this.sprites.push(loadImage("zelda-sprites/zelda/link/attack/attack-right.png")); //3  //attack right
        } else if (this.name === "DarkLink") {  //Dark Link
            this.sprites.push(loadImage("zelda-sprites/zelda/dark-link/attack/attack-down.png")); //0 //attack down
            this.sprites.push(loadImage("zelda-sprites/zelda/dark-link/attack/attack-up.png")); //1  //attack up
            this.sprites.push(loadImage("zelda-sprites/zelda/dark-link/attack/attack-left.png")); //2  //attack left
            this.sprites.push(loadImage("zelda-sprites/zelda/dark-link/attack/attack-right.png")); //3  //attack right
        }
        this.state = 0;

        //coord
        this.x = x
        this.y = y
    }

    display() {
        let stateSprite = this.sprites[this.state]
        //display image
        image(stateSprite, this.x, this.y);
    }

    move() { //also upfateState of Sword is in here
        let speed = 3;

        //uses ArrowKeys to move
        if (this.name === "Link") { //Link
            if (keyIsDown(LEFT_ARROW)) { //move left
                this.state = 2;
                this.x -= speed;
            } else if (keyIsDown(RIGHT_ARROW)) { //move right
                this.state = 3;
                this.x += speed;
            } else if (keyIsDown(UP_ARROW)) { //move up
                this.state = 1;
                this.y -= speed;
            } else if (keyIsDown(DOWN_ARROW)) { //move down
                this.state = 0;
                this.y += speed;
            }
        } else if (this.name === "DarkLink") {  //DarkLink
            //uses A-W-S-D keys to move 
            if (keyIsDown(65)) { // Left-a
                this.state = 2;
                this.x -= speed;
            } else if (keyIsDown(68)) { //right-d
                this.state = 3;
                this.x += speed;
            } else if (keyIsDown(87)) {  //up-w
                this.state = 1;
                this.y -= speed;
            } else if (keyIsDown(83)) {  //down-s
                this.state = 0;
                this.y += speed;
            }
        }
    }
}