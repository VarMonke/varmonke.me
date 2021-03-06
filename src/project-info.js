// Make the DIV element draggable:
dragElement(document.getElementById("you-see"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    console.log(pos1, pos2);
    //console.log(pos3, pos4);
    // if the element is out of the window, put it in the edge:
    if (elmnt.offsetTop <= 5) {
      elmnt.style.top = 5 + "px";
    }
    if (elmnt.offsetLeft <= 5) {
      elmnt.style.left = 5 + "px";
    }
    if (elmnt.offsetTop >= window.innerHeight - elmnt.offsetHeight - 5) {
      elmnt.style.top = window.innerHeight - elmnt.offsetHeight - 5 + "px";
    }
    if (elmnt.offsetLeft >= window.innerWidth - elmnt.offsetWidth - 5) {
      elmnt.style.left = window.innerWidth - elmnt.offsetWidth - 5 + "px";
    }
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}