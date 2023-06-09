import Scene from "./Scene.js";
import { Keyboard, Mouse } from "./UserInput.js";
import { BOUNDARY_ACTIONS, Sprite } from "./Sprite.js";

console.log(BOUNDARY_ACTIONS)

// keyboard.updateState(document);
// mouse.updateState(document);


// initialize values
function init() {
    let keyboard = new Keyboard();
    let mouse = new Mouse()

    // set up event listeners
    keyboard.updateState(document)
    mouse.updateState(document)

    console.log(document)
    let scene = new Scene(null,null,keyboard,mouse);
    scene.start(main)
    
}


function main(e) {
    // document.querySelector("body").append("<h1>Firing with V Cylinders!!!</h1>");
    
    
    // scene.updateState()
}

// runs app when document has loaded 
document.addEventListener("DOMContentLoaded",init, false);