let value = 0;
const ENTER_KEY = 13;
const BACKSPACE_KEY = 8;
const SPACE_KEY = 32;
let showKey = false;
x = 10;

//images
function preload() {
  flower = loadImage("Stickerflower.png");
  heart = loadImage("Stickerheart.png");
  star = loadImage("Stickerstar.png");
  gamekey = loadImage("GameKey.png");
  minikey = loadImage("MiniGameKey.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(80);
  noStroke();
}

function draw() {
	fill(value);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, x); //draws when mouse is pressed
  }
  fill(256);
	rect(0, 10, 220, 280); //covers key
  fill(0);
  textSize(15);
  text('Layan Shaikhi', 5, height - 15); //name display in corner
  if (showKey) {
    image(gamekey, 0, 0); //game key shows up when space is pressed
  }
  
  image(minikey, 0, 0); //minikey is always shown in the top corner  
}

function keyPressed() { //changes the brush colour
  if (keyIsDown(SPACE_KEY)) {
    showKey = !showKey;
  }
  if (key === 'r') {
    x = 10;
    value = "red";
  }
  if (key === 'o') {
    x = 10;
    value = "orange";
  }
  if (key === 'y') {
    x = 10;
    value = "yellow";
  }
  if (key === 'g') {
    x = 10;
    value = "green";
  }
  if (key === 'b') {
    x = 10;
    value = "blue";
  }
  if (key === 'v') {
    x = 10;
    value = "purple";
  }
  if (key === 'p') {
    x = 10;
    value = "pink";
  }
  if (key === 'q') {
    x = 10;
    value = "black";
  }
  if (keyIsDown(ENTER)) {
    background(256); //game resets when ENTER is pressed
  }
  if (keyIsDown(BACKSPACE)) {
    x = 40; //brush becomes bigger to erase drawing
    value = 'white'; //brush turns white to erase drawing
  }
}

function doubleClicked() {
  image(random([flower, heart, star]), mouseX, mouseY, 50, 50);
} //random sticker shows up when mouse is double clicked