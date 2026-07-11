



//Functions
//--------------------------------------------------------------------------------//

function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime;
        
}
setInterval(updateTime, 1000);

let time = 0; 
function count() {
    var timeText = document.querySelector("#timer");
    timeText.innerHTML = time;
    time++;
}
setInterval(count, 1000);




//Drag Element Function
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("app1"));


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

//----------------------------------------------------------------------------------------------------//
function openClose(element){
  document.getElementById(element.id + "close").addEventListener("click", function() {
    closeWindow(element);
  });

  document.getElementById(element.id + "open").addEventListener("click", function() {
    openWindow(element);
  });
}



//closing windows
function closeWindow(element){
    element.style.display = "none"
}

//opening windows
function openWindow(element) {
  element.style.display = ""//flex kinda ruins my thing horrible code from my part:<
}


openClose(document.getElementById("welcome"))
openClose(document.getElementById("app1"))
//---------------------------------------------------------------------------------------------------//



/*
// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));
dragElement(document.querySelector("#welcome"));

dragElement(document.getElementById("idea"));
dragElement(document.querySelector("#idea"));

dragElement(document.getElementById("stopwatch"));
dragElement(document.querySelector("#idea"));


var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

var welcomeScreen = document.querySelector("#welcome")

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});



var ideaScreenClose = document.querySelector("#ideaclose")

var ideaScreenOpen = document.querySelector("#ideaopen")

var ideaScreen = document.querySelector("#idea")

ideaScreenClose.addEventListener("click", function() {
  closeWindow(ideaScreen);
});

ideaScreenOpen.addEventListener("click", function() {
  openWindow(ideaScreen);
});


var stopwatchScreenClose = document.querySelector("#stopwatchclose")

var stopwatchScreenOpen = document.querySelector("#stopwatchopen")

var stopwatchScreen = document.querySelector("#stopwatch")

stopwatchScreenClose.addEventListener("click", function() {
  closeWindow(stopwatchScreen);
});

stopwatchScreenOpen.addEventListener("click", function() {
  openWindow(stopwatchScreen);
});

*/

//----------------------------------------------------------------------------------//
//Keep the apps closed at the start 
closeWindow(ideaScreen);
closeWindow(stopwatch);
