class Word{
    constructor(){
        this.x = random(-10, 380)
        this.y = random(-20, 20)
        this.word = 'rain'
        this.speed = 1
        this.gravity = 0.2;
    }

    //need help getting classes to work
    rain(){
      //MOVE THE RAIN DOWN
      this.y = this.y + this.speed

      //start the rain
      if (this.y > height + 15) {
        this.y =  random(-20, 0);
        this.speed = 1;
      }

      //increse spped of fall
      this.speed = this.speed + this.gravity;
    }

    //rain/MURK
    display(){
      textSize(20);
      textFont('Georgia');
      text(this.word , this.x, this.y);
    }


}