
window.addEventListener("mousemove", 
showChangedMousePosition);
var mousePosition = 
document.querySelector(".mouse-position");

function showChangedMousePosition() {
    mousePosition.innerHTML = 
    "Muspekaren befinner sig "
    + window.event.pageX 
    + " pixels from the left edge and" 
    + window.event.pageY
    + " pixels from the top edge.";
}



var textInput = 
document.querySelector(".text-input");






