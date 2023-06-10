# Main.js
<h1>This file acts like the entry point for the program. This is where global state is held.</h1>
<h1>When the document is ready, a DOMContentLoaded event will trigger to start initialization.</h1>
<h1>When the user clicks off the page, a onunload event will trigger which will stop the game loop.</h1>

## Global Variables
* `keyboard`: Global refference to an instance of the keyboard class.
* `keyboardState`: Global refference to an instance of the `keyArr` stored on the heap.
* `mouse`: Global refference to an instance of the mouse class.
* `scene`: Global refference to an instance of the scene class
* `car`: Global refference to an instance of the sprite class.
* `ball`: Global refference to an instance of the sprite class.

## Functions

### `init()`
* Initialize all classs instances and creates components.

### `controlCar()`
* Maps keyboard input to move the car sprite up, down, left, and right.

### `applyFriction()`
* Applies some friction on the motions of both the car and the ball.

### `reactToCollision()`
* Manages all possible collisions between the car sprite and the ball sprite.

### `main()`
* Callback function which is passed into Scene.start.
* Is called every 50 miliseconds using `setintervalID()`.
* Essentially acts as my update function to refresh the state on the canvas DOM element. 
