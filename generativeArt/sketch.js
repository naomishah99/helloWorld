let x;
let y;
let speedX = 5;
let speedY = 3;

function setup() {
  createCanvas(600, 600);
  background(255);
  x = random(0, 110);
  y = random(0, 300);
  speedX = random(-3, 3);
  speedY = random(-10, 10);
}

function draw() {
  const greenVal = map(x, 0, width, 0, 255);
  // const blueVal = map(y, 0, width, 0, 255);
  
  translate(x, y);
  const rotation = map(x, 0, height, 0, 10);
  // rotate(TWO_PI);
  rotate(rotation);
  stroke(greenVal, 10, 220);
  // ellipse(mouseX, mouseY, 50, 50);
  
  line(-50, 0, 150, 0);
  
  x = x + speedX;
  y = y + speedY;
  if (x > width || x < 0){
    speedX = -speedX;
  }
  if (y > height || y < 0){
    speedY= -speedY;
  }
  
}