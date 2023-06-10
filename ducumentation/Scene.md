# Scene.js
<h1>This class controls the canvas and all associated functionality</h1>

## Private Attributes
* `canvas`: private refference to the canvas DOM element.
* `context`: private refference to the suporting context provided by the canvas.
* `intervalID`: private refference to uniquely identify the game loops intervalID.
* `width`: private integer representing the width of the canvas.
* `height`: private integer representing the height of the canvas.
* `left`: private integer representing the left of the canvas.
* `top`: private integer representing the top of the canvas.

## Public Methods

### `constructor( width, height, keyboard, mouse )`
* Constructor responsiable for initializing the Scene instance.

### `start( updateCallbackFunction )`
* Takes in a user defined callback, to change other states of the game.

### `stop()`
* Stops the game loop.

### `clearScreen()`
* Clears all drawings off the canvas.

### `setBackgroundColor( color )`
* Sets the background color.

### `setAllDimensions( height, width, top, left )`
* Using the height, width, top, left we have all the values needed to place the canvas.

### `setSize( width, height )`
* Alters the width and height of the canvas.

### `setPosition( left, top )`
* Given 2 offsets left and top, will move the canvas by those offsets.

### `getPrivateContext()`
* Gives access to the private context attribute.

### `getCanvas()`
* Gives access to the private canvas DOM element.