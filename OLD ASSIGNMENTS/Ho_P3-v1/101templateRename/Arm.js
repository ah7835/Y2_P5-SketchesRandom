class Arm {
    constructor(x,y) {
        this.sprites = [];
        this.sprites.push(loadImage("dragonSprites/arm.png")) // 0
        this.sprites.push(loadImage("dragonSprites/arm2.png")) // 1

        //default state of dino
        this.state = 0;
        
        this.width = 170
        this.height = 120

        this.x = x
        this.y = y
    }

    display() {
        let curX = this.x;
        if(this.state === 1) {
            curX +=100;
        }
        //display in center
        image(this.sprites[this.state], curX,this.y);   
        this.sprites[this.state].resize(this.width,this.height);    
    }

    updateState(){
        if (keyIsDown(LEFT_ARROW)) { // L-arrow? Always go to walkL
            this.state = 0;
            this.x -= 1;
            //this.width -= 1;
        } else if (keyIsDown(RIGHT_ARROW)) { // R-arrow? Always go to walkR
            this.state = 1;
            this.x += 1;
            //this.width += 1;
        } else if (keyIsDown(UP_ARROW)) {
            this.y -=1;
            //this.height -= 1;
        }else if (keyIsDown(DOWN_ARROW)) {
            this.y +=1;
            //this.height += 1;
        }
    }
}