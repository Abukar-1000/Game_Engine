
export const BOUNDARY_ACTIONS = {
    WRAP: 0,
    BOUNCE: 1,
    STOP: 3,
    DIE: 4,
    CONTINUE: 5
};

// class to encapsulate an image & all possible transformations
export class Sprite {

    // declare private variables
    #scene;
    #canvas;
    #context;
    #image
    #animation = false; // becomes Animation Class
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
        this.#animation = false;
        
        // dimensions
        this.#width = width;
        this.#height = height;
        this.#cHeight = parseInt(this.#canvas.height);
        this.#cWidth = parseInt(this.#canvas.width);
        this.#camera = false;
        this.#visible = true;
        this.#boundAction = BOUNDARY_ACTIONS.BOUNCE;
        
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

    #draw(){
        // method to draw the internal state of the sprite onto the canvas
        // need to find a way to implement a friend function like in cpp

        let localContext = this.#context;
        // update all internal state
        localContext.save();

        // apply transformations
        localContext.translate(this.#x, this.#y);
        localContext.rotate(this.#imgAngle);

        // will implement animations if necissary!
        if (!this.#animation){
            this.#animation.drawFrame(localContext);
        }

        // save transformations
        localContext.restore();
    }

    #reactToWrap(FLAGS, BORDER_DATA){
        // implements wrap property when boundery is hit

        if (FLAGS.offRight){
            this.#x = BORDER_DATA.leftBorder;
        }
        if (FLAGS.offBottom){
            this.#y = BORDER_DATA.topBorder;
        }
        if (FLAGS.offLeft){
            this.#x = BORDER_DATA.rightBorder;
        }
        if (FLAGS.offTop){
            this.#y = BORDER_DATA.bottomBorder;
        }
    }
    #reactToBounce(FLAGS, BORDER_DATA){
        // implements bounce property when boundery is hit

        let offTopOrBottom = FLAGS.offTop || FLAGS.offBottom;
        let offLeftOrRight = FLAGS.offLeft || FLAGS.offRight;

        // invert dx or dy
        if (offTopOrBottom) {
            this.#dy *= -1;
        } else if (offLeftOrRight){
            this.#dx *= -1;
        }

        // get new speed angle
        this.calcSpeedAngle();
        this.#imgAngle = this.#moveAngle;
    }
    #reactToStop(FLAGS, BORDER_DATA){
        // implements stop property when boundery is hit
        const STOP = 0;
        let outOFBounds = FLAGS.offBottom || FLAGS.offTop || FLAGS.offLeft || FLAGS.offRight;
        if (outOFBounds) {
            this.setSpeed(STOP);
        }
    }
    #reactToDie(FLAGS, BORDER_DATA){
        // implements die property when boundery is hit
        const STOP = 0;
        let outOFBounds = FLAGS.offBottom || FLAGS.offTop || FLAGS.offLeft || FLAGS.offRight;
        if (outOFBounds) {
            this.setSpeed(STOP);
            this.hide();
        }
    }
    // (!) calc speed angle | setSpeed | 
    #checkBounds() {
        // private helper method to check if we have hit the bounds of the canvas

        let cameraX = 0; 
        let cameraY = 0;

        // boundary flags
        const FLAGS = {
            offRight: false,
            offLeft: false,
            offTop: false,
            offBottom: false
        };

        // apply camera offsets
        (this.camera)?  cameraX = this.#camera.cameraOffsetX : camY = this.#camera.cameraOffsetY;

        const BORDER_DATA = {
            rightBorder: this.#cWidth + cameraX, 
            leftBorder: cameraX,
            topBorder: cameraY,
            // (!) should be - ?
            bottomBorder: this.#cHeight + cameraY
        }
        
        
        if (this.#x < BORDER_DATA.leftBorder){
            FLAGS.offLeft = true;
        }

        if (this.#x > BORDER_DATA.rightBorder){
            FLAGS.offRight = true;
        }
        
        if (this.#y < 0){
            FLAGS.offTop = true;
        }
        
        if (this.#y > BORDER_DATA.bottomBorder){
            FLAGS.offBottom = true;
        }
        
        // respond to potential out of bounds
        if (this.#boundAction === BOUNDARY_ACTIONS.WRAP){
            this.#reactToWrap(FLAGS, BORDER_DATA);
        } else if (this.#boundAction === BOUNDARY_ACTIONS.BOUNCE){
            this.#reactToBounce(FLAGS, BORDER_DATA)
        } else if (this.#boundAction === BOUNDARY_ACTIONS.STOP){
            this.#reactToStop(FLAGS, BORDER_DATA)
        } else if (this.#boundAction === BOUNDARY_ACTIONS.DIE){
            this.#reactToDie(FLAGS, BORDER_DATA)
        }

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

    setChangeX(changeX){
        // alters the private dx attribure, purpose is to be a setter
        this.#dx = changeX;
    }
    setChangeY(changeY){
        // alters the private dy attribure, purpose is to be a setter
        this.#dy = changeY;
    }
    setX(xValue){
        // setter for private x value
        this.#x = xValue;
    }
    setY(yValue){
        // setter for private y value
        this.#y = yValue;
    }
    setDx(initDx){
        // setter for private dx value
        this.#dx = initDx;
    }
    setDy(initDy){
        // setter for private dy value
        this.#dy = initDy;
    }
    setBoundAction(action){
        // setter for the private bound action attribute
        this.#boundAction = action;
    }
    setSpeed(speed){
        // sets the speed of the sprite

    }

    changeXBy(relativeChange){
        // changes the x attribute, relative to its current value
        this.#x += relativeChange;
    }
    changeYBy(relativeChange){
        // changes the y attribute, relative to its current value
        this.#y += relativeChange;
    }

    // might merge into a toggle meth
    show(){
        // if hidden shows the sprite
        this.#visible = true;
    }
    hide(){
        // if visible hides the sprite
        this.#visible = false;
    }
    getVisibility(){
        // returns the visible state of the sprite
        return this.#visible;
    }

    update(){
        // updates the sprite on the canvas
        this.#x += this.#dx;
        this.#y += this.#dy;

        this.checkBounds()

    }

    
}

