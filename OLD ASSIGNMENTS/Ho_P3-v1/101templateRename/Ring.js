class Ring {
    constructor(x,y) {
        this.sprite = loadImage("dragonSprites/ring.jpg")

        this.x = x
        this.y = y
        this.owner = null
    }

    display() {
        //display in center
        image(this.sprite, this.x,this.y);       
        this.sprite.resize(60,60);
    }

    pickedUp(dragon) {
        this.owner
    }

    dropped() {
        this.owner = null
    }
}