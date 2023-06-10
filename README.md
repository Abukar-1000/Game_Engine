# Game Engine

# Documentation &ensp; <img src="public/headerIcon.png" width="25" height="25">
This is my implementation of a game engine using vanilla JavaScript <br>
Click [HERE](https://main--sensational-pony-762058.netlify.app/) to take a look.

## [View Function/Method Documentaion](src/ducumentation/functions.md)

## Implementation of Requirements &ensp; <img src="public/implementation.png" width="25" height="25">
| Requirement                                                             | Status                                                           |
|-------------------------------------------------------------------------|------------------------------------------------------------------|
| Use the ADT developed in class, or create your own                      |<img src="public/checkMark.png" width="25" height="25">           |
| You should have some sort of tool for managing the background and timing|<img src="public/checkMark.png" width="25" height="25">           |
| You should also support some kind of sprites                            |<img src="public/checkMark.png" width="25" height="25">           |
| Consideration for motion                                                |<img src="public/checkMark.png" width="25" height="25">           |
| Collision Detection                                                     |<img src="public/checkMark.png" width="25" height="25">           |
| Boundary Detection                                                      |<img src="public/checkMark.png" width="25" height="25">           |

## Logic  &ensp; <img src="public/logic.png" width="25" height="25">
* User clicks the `Start Timer`, the only button on screen.
* This will trigger a state change and cause a loop to begin.
* In the loop:
    * Check if the user has clicked `Stop Timer`
        * If so break loop. 
    * We increment the elapsed seconds.
    * Update the UI.
## Small Nuances & Reflections &ensp; <img src="public/nuance.png" width="25" height="25">
* If the user refreshes the page, the loaded image is lost from the DOM.
    * This was due to the `.hidden` css property previously applied.
* To handle this I:
    * Alter the html content to remove `.hidden` css style when the page <br>
      is refreshed.
    * Re-draw the canvas image after the page has reloaded.
* I was under the impression that HTML, CSS, and JavaScript where the only <br>
  way to add graphics to a UI on the web. Seeing the canvas DOM element definately <br>
  makes me rethink web graphics.
* I also dindn't realize how interconnected math and computer graphics were. This <br>
  assignment required me to refresh some of my algebra, and knowledge of the cartesian <br>
  plane.
* Desmos was really helpful in helping me visualize points on a cartesian plane, with a small <br>
  caviot of inversing the y valuse of each point.

        
## Credits  &ensp; <img src="public/credit.png" width="25" height="25">
* Icons: 
    * <a href="https://www.flaticon.com/free-icons/document" title="document icons">Document icons created by Freepik Flaticon</a>
* Clock Image:
    * <a href="https://stock.adobe.com/Library/urn:aaid:sc:US:d7f9259d-5e63-427c-823d-a217f93a4126?asset_id=281630869">Licensed from Adobe Stock</a>


# Thanks For Stopping By 😎