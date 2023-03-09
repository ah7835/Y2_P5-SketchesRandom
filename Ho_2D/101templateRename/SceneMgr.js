class SceneMgr {
    constructor(){
        //load and set img array
        this.myImage = loadImage("media/Fish.png");
        console.log(this.myImage);
        this.imgSizes = [];
    }

    setControls(){
        //create day/night buttons
        this.chooseTime = createRadio();
        this.chooseTime.option("day");
        this.chooseTime.option("night");
        this.chooseTime.value("day");
        //Creates a <p></p> element in the DOM (for day and night)
        createP();
        //Creates a <span></span> element in the DOM (for column count)
        createSpan('Column count:');
        //increase and decrease num
        this.inputCount = createInput("6","number");

        //call settingChange function when settings are changed
        this.chooseTime.changed(this.settingChanged)
        this.inputCount.changed(this.settingChanged)
        //creates text in box
        createP();
    }

    settingChanged(){
        //columns the image var
        let cols = boss.inputCount.value();
        let maxSize = width/cols;
        console.log(cols);
        console.log(maxSize);

        //resizes the img based on number of imgs and canvas size
        //also make img random sizes 
        boss.imgSizes = [];
        for(let c = 0; c < cols; c++){
            boss.imgSizes[c] = [];
            for(let r = 0; r < cols; r++){
                boss.imgSizes[c].push(random(maxSize/3,maxSize))
            }
        }
        boss.display();
        console.log(boss.imgSizes);
    }

    display(){
        //changes color of canvas depending on button pressed
        if (this.chooseTime.value() === "day"){
            background("lightBlue");
        } else {
            background("black");
        }


        //equally spaces the images and displays the actually img
        let gridSpacing = width/this.imgSizes.length;
        for(let c = 0; c < this.imgSizes.length; c++){
            let x = c*gridSpacing;
            for(let r = 0; r < this.imgSizes[c].length; r++){
                let y = r*gridSpacing;
                image(this.myImage,x,y,this.imgSizes[c][r],this.imgSizes[c][r]);
            }
        }
    }
}