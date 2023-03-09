class DragonSprite {
    constructor(x,y) {
        //array of sprites
        this.sprites = [];
        this.sprites.push(loadImage("dragonSprites/standL.png")); //0
        this.sprites.push(loadImage("dragonSprites/walkL.png")); //1
        this.sprites.push(loadImage("dragonSprites/standR.png")); //2
        this.sprites.push(loadImage("dragonSprites/walkR.png")); //3

        //default state of dino
        this.state = 0;

        this.arm = new Arm(170, 220)

        this.x = x
        this.y = y
    }

    display() {
        //display in center
        image(this.sprites[this.state], this.x,this.y);  
        this.arm.display();
        //this.arm.updateState();
    }

    updateState(){
        if (keyIsDown(LEFT_ARROW)) { // L-arrow? Always go to walkL
            this.state = 1;  //walkL
            this.x -= 1;
        } else if (keyIsDown(RIGHT_ARROW)) { // R-arrow? Always go to walkR
            this.state = 3;  //walkR
            this.x += 1;
        }else if (keyIsDown(UP_ARROW)) {
            this.state = 1;
            this.y -=1;
        }else if (keyIsDown(DOWN_ARROW)) {
            this.state = 3; 
            this.y +=1;
        } else {  // If walking, change direction of face
            switch (this.state) {
                case 1:  //walkL
                    this.state = 0;  //faceL
                    break;
                case 3:  //walkR
                    this.state = 2;  //faceR
                    break;
                }
            }
        this.arm.updateState();
    }

    pickUp(item) {
        this.ring = item
    }

    drop() {
        this.ring = null;
    }
}