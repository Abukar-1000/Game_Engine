import Scene from "./Scene.js";
import Keyboard from "./UserInput.js";

function main(e) {
    document.querySelector("body").innerHTML = "<h1>Firing with V Cylinders!!!</h1>";
    let scene = new Scene();
    let keyboard = new Keyboard();
    keyboard.display();
}

// runs app when document has loaded 
document.addEventListener("DOMContentLoaded", main, false);