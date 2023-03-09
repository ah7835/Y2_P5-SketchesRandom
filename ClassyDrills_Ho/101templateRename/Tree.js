class Tree {
    constructor(x = width/2, y = height/2) {
        //initalize born, x, ya nd y
        this.born = millis()
        this.x = x
        this.y = y
    }

    getAge() {
        //age of oak in millis 
        let age = millis() - this.born;
        age = age / 1000;
        return age;
    }

    display() {
        //growing concentric circles
        for (let i = this.getAge(); i > 0; i -= 5) {
            //draw circle using tree's x & y & size
            circle(this.x,this.y,i);     
        }
    }

    transplant(x,y) {
        //resets x & y
        this.x = x;
        this.y = y;
    }
}