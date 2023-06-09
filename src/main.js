import Scene from "./Scene.js";
import { Keyboard, Mouse } from "./UserInput.js";
import { BOUNDARY_ACTIONS, Sprite } from "./Sprite.js";

console.log(BOUNDARY_ACTIONS)

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
    let keyboard = new Keyboard();
    let mouse = new Mouse()
    let scene = new Scene(null,null,keyboard,mouse);

    // set up event listeners
    keyboard.updateState(document)
    mouse.updateState(document)

    // create game objects
    const gameObjects = {
        car: new Sprite()
    }
    console.log(document)
    scene.start(main)
    
}


function main(e) {
    // document.querySelector("body").append("<h1>Firing with V Cylinders!!!</h1>");
    
    
    // scene.updateState()
}

// runs app when document has loaded 
document.addEventListener("DOMContentLoaded",init, false);