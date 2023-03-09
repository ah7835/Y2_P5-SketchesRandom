class Box{
    constructor() {
        this.x = random(0,width)
        this.y = random(0,height)
        this.size = random(15,40)
        this.gray = random(0,255)
        //.x   number, random 0 to canvas width
        //.y   number, random 0 to canvas height
        //.size   number, random 15 to 40
        //.gray   number, random 0 to 255
    }

    display() {
        fill(this.gray);
        rect(this.x,this.y,this.size,this.size);
        //draw a square on the canvas using this Box’s properties for fill color (a grayscale value), location, and size
    }
}