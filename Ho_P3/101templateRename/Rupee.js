class Rupee {
    constructor(x, y) {
        this.sprite = loadImage("zelda-sprites/zelda/rupee.png")

        //random placement of rupees
        this.x = random(-100, width - 130)
        this.y = random(-70, height - 220)

        //sprite that owns the collected rupees
        this.owner = null
    }

    display() {
        // if owner is not null dont display
        // the rupees disappears when collected
        if (this.owner === null) {
            image(this.sprite, this.x, this.y);
        }
    }

    //puts the rupees into the array of the respected player
    pickedUp(player) {
        this.owner = player
        console.log("picked up");
    }

    //releases the rupees out of the array of the respected player
    dropped() {
        this.owner = null
    }
}