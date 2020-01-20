const element = document.querySelectorAll('.draggable');


let elOffsetTop;
let elOffsetLeft;
let cursorPosX;
let cursorPosY;

let dragState;

for(i = 0; i < element.length; i++) {

    let currentElement = element[i];
    // offsetTop = currentElement.offsetTop;
    currentElement.addEventListener('mousedown', function() {
        dragState = true;
    })

    document.addEventListener('mouseup', function() {
        dragState = false;
        console.log("All elements no longer draggable!");
    })

    currentElement.addEventListener('mousemove', function() {
        if(dragState == true) {
            console.log("Element is draggable!");
            event.target.style.left = (event.x - event.target.offsetWidth * 0.6) + "px";
            event.target.style.top = (event.y - event.target.offsetHeight * 0.7) + "px";
        }
    })
};



// console.log(event);

// elOffsetTop = event.target.offsetTop;
// elOffsetLeft = event.target.offsetLeft;
// console.log("Origin X:" + elOffsetLeft + "  Y: " + elOffsetTop );

// cursorPosX = event.x;
// cursorPosY = event.y;
// console.log("Cursor X:" + cursorPosX + "  Y: " + cursorPosY );

// event.target.style.position = 'absolute';
// event.target.style.left = cursorPosX - elOffsetLeft + "px";
// // event.target.style.top = cursorPosY + "px";
// console.log("New X: " + event.target.style.left + "  Y: " + event.target.style.top );

// const currentPosX = MouseEvent.x;

// document.addEventListener(('mousedown' || 'mousemove'), getCurrentPos);

// function getCurrentPos(event) {
//     let posX = event.x;
//     let posY = event.y;
//     console.log(posX, posY );
//     return posX, posY
// }

// for(i = 0; i < element.length; i++) {
//     element[i].addEventListener('mousedown', fucntion());
// }

// function dragElement() {

// }