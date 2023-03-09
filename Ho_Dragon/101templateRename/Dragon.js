class DragonSprite {
    constructor() {
        //array of sprites
        this.sprites = [];
        this.sprites.push(loadImage("dragonSprites/standL.png")); //0
        this.sprites.push(loadImage("dragonSprites/walkL.png")); //1
        this.sprites.push(loadImage("dragonSprites/standR.png")); //2
        this.sprites.push(loadImage("dragonSprites/walkR.png")); //3

        //default state of dino
        this.state = 0;
    }

    display() {
        //display in center
        image(this.sprites[this.state], width/2, height/2);       
    }

    updateState(){
        if (keyIsDown(LEFT_ARROW)) { // L-arrow? Always go to walkL
            this.state = 1;  //walkL
        } else if (keyIsDown(RIGHT_ARROW)) { // R-arrow? Always go to walkR
            this.state = 3;  //walkR
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
    }
}