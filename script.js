//Keep the apps closed at the start 
//closeWindow(app1);

//water

let drinkCount = 0;
function addDrinkCount(){
  drinkCount++;
  document.getElementById("drinkCount").replaceChildren(drinkCount.toString());
}

document.getElementById("drinkButton").addEventListener("click", function(){
  addDrinkCount();

});


let drinkTime = 60;
function drinkTimer(){

  if(drinkTime === 0){

    drinkTime = 60;
    document.getElementById("dingAudio").play();
  }

  drinkTime--;
  document.getElementById("drinktime").replaceChildren(drinkTime.toString());
}
setInterval(drinkTimer, 60000);



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
dragElement(document.getElementById("app2"));
dragElement(document.getElementById("app3"));
dragElement(document.getElementById("app4"));
dragElement(document.getElementById("app5"));
dragElement(document.getElementById("app6"));


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
  if(element.id === "app3"){
    element.style.display = "flex"
  }
  else{
    element.style.display = ""//flex kinda ruins my thing horrible code from my part:<
  }
}


openClose(document.getElementById("welcome"))
openClose(document.getElementById("app1"))
openClose(document.getElementById("app2"))
openClose(document.getElementById("app3"))
openClose(document.getElementById("app4"))
openClose(document.getElementById("app5"))
openClose(document.getElementById("app6"))




wallpaper(document.getElementById("wallpaper1"))
wallpaper(document.getElementById("wallpaper2"))
wallpaper(document.getElementById("wallpaper3"))


//Wallpaper scripts
function wallpaper(element){
  document.getElementById(element.id).addEventListener("click", function(){
    let stringId = document.getElementById(element.id).id.toString();
    document.body.style.backgroundImage = `url('./wallpaper/${stringId}.jpg')`;
  })
}





//yt player

document.getElementById("ytAccept").addEventListener("click", function(){
  loadVid();
});

function loadVid(){
  const player = document.getElementById("ytPlayer");
  const urlID = document.getElementById("ytUrl").value.slice(-11);

  player.src = "https://www.youtube.com/embed/"+urlID;
}



//side bar
const hoverStrip = document.getElementById("hoverStrip");
const sideBar = document.getElementById("sideBar");

hoverStrip.addEventListener("mouseenter", openSideBar);
sideBar.addEventListener("mouseenter", openSideBar);

hoverStrip.addEventListener("mouseleave", closeSideBar);
sideBar.addEventListener("mouseleave", closeSideBar);


function openSideBar(){
  sideBar.classList.add("open");
  console.log("sidebar opened");
}

function closeSideBar(){
  sideBar.classList.remove("open");
  console.log("sideBar closed");
}



//Quotes

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

async function getQuote(){
  const response = await fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
  
  const data = await response.json();

  let randomIndex = Math.floor(Math.random()*data.quotes.length);
  console.log(randomIndex);

  console.log(data.quotes[randomIndex].quote);
  console.log(data.quotes[randomIndex].author);

  quoteText.innerHTML = data.quotes[randomIndex].quote;
  quoteAuthor.innerHTML = data.quotes[randomIndex].author;
}


getQuote();



//search engine
const searchInput = document.getElementById("searchInput"); 
const engineSelect = document.getElementById("engineSelect"); 
const searchButton = document.getElementById("searchButton"); 

searchButton.addEventListener("click", search);

function search(){
  let input = searchInput.value;
  let engine = engineSelect.value;

  let inputConvert = encodeURIComponent(input);

  let url = "";

  if(engine == "google"){
    url = "https://www.google.com/search?q=" + inputConvert;
  }
  else if(engine == "bing"){
    url = "https://www.bing.com/search?q=" + inputConvert;
  }
  else if(engine == "duck"){
    url = "https://duckduckgo.com/?q=" + inputConvert;
  }
  else if(engine == "yahoo"){
    url = "https://search.yahoo.com/search?p=" + inputConvert;
  }

  window.open(url, "_blank");
}