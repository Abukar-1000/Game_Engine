

// class to encapsulate an image & all possible transformations
class Sprite {

    // declare private variables
    #scene;
    #canvas;
    #context;
    #image
    // this.animation = false; // becomes Animation Class
    #width
    #height
    #cHeight;
    #cWidth;
    #x 
    #y 
    #dx 
    #dy 
    #imgAngle 
    #moveAngle 
    #speed 
    #camera 
    #visible 
    #boundAction 

    // initialize aattributes
    constructor(scene, imageFile, width, height){
        
        // resources 
        this.#scene = scene;
        this.#canvas = scene.canvas;
        this.#context = this.canvas.getContext("2d");
        this.#image = new Image();
        this.#image.src = imageFile;
        // this.#animation = false; // becomes Animation Class
        
        // dimensions
        this.#width = width;
        this.#height = height;
        this.#cHeight = parseInt(this.#canvas.height);
        this.#cWidth = parseInt(this.#canvas.width);
        this.#camera = false;
        this.#visible = true;
        this.#boundAction = WRAP;
        
        // movement
        this.#x = 100;
        this.#y = 100;
        this.#dx = 7;
        this.#dy = 0;
        this.#imgAngle = 0;
        this.#moveAngle = 0;
        this.#speed = 7;
    }

    // private methods
    #setImage(imgPath){
        // given a path changes the image
        this.#image.src = imgPath;
    }

    // public methods
    changeImage(imgPath){
        // given a path changes the image, purpose is to be a setter
        this.#setImage(imgPath);
    }

    setPosition(x,y){
        // alters the position of the center, purpose is to be a setter
        this.#x = x;
        this.#y = y;
    }
    
}