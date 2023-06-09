import Scene from "./Scene.js";
import { Keyboard, Mouse } from "./UserInput.js";
import { BOUNDARY_ACTIONS, Sprite } from "./Sprite.js";

var keyboard;
var keyboardState;
var mouse;
var scene;
var car;
var ball;



/* 
partly used adt
// timming => set interval
// sprites supported
// motion collision 

// keyboard.updateState(document);
// mouse.updateState(document);
motion => moving balls
collision => collides with walls
boundary algorithm => bounce
*/

// initialize values
function init() {
    
    // create instances
    keyboard = new Keyboard();
    keyboardState = keyboard.getKeyArr();
    mouse = new Mouse();
    scene = new Scene(null,null,keyboard,mouse);
    car = new Sprite(scene, "ySportsCar.png", 50, 30);
    ball = new Sprite(scene, "ballSprite.png", 25, 25);

    // initialize values
    car.setPosition(200,200);
    // set up event listeners
    keyboard.updateState(document)
    mouse.updateState(document)
    scene.start(main);
    
}

function controlCar(){
    const MAX_SPEED = 1.2;

    if (keyboardState[keyboard.KEY_W]){
        let newSpeed = Math.min(car.getSpeed(), MAX_SPEED);
        car.changeSpeedBy(newSpeed);
    }
    if (keyboardState[keyboard.KEY_S]){
        car.changeSpeedBy(-1);
    }
    if (keyboardState[keyboard.KEY_D]){
        car.changeAngleBy(4);
    }
    if (keyboardState[keyboard.KEY_A]){
        car.changeAngleBy(-4);
    }
}

function applyFrictionToBall(){
    const FRICTION_REDUCTION_FOR_BALL = 0.98;
    const FRICTION_REDUCTION_FOR_CAR = 0.96;
    ball.setSpeed(ball.getSpeed() * FRICTION_REDUCTION_FOR_BALL);
    car.setSpeed(car.getSpeed() * FRICTION_REDUCTION_FOR_CAR);

}

function reactToCollision(){
    // alters the trajectory of the ball and plays a sound if it collides with the car
    const CAR_MASS = .9;
    let collided = car.checkCollisionWith(ball);
    if (collided){

        ball.changeAngleBy(25);
        // account for force
        let force = CAR_MASS * car.getSpeed();
        ball.setSpeed(force);
    }
}
// this is the update function
function main(e) {
    scene.clearScreen();
    car.update();
    ball.update();
    reactToCollision();
    controlCar();
    applyFrictionToBall();
}

// runs app when document has loaded 
document.addEventListener("DOMContentLoaded",init, false);

// stop the game loop when user wants to leave
window.onunload = e => {
    scene.stop();
}