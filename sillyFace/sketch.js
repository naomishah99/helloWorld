let sillyFace = ''; // Track the current silly face
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create a button
  button = createButton('Silly Face');
  button.size(200, 50);
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "28px");
  button.position(width / 2 - 90, height / 2 + 160);
  col = color(200,255,255)
  button.style('background-color', col);
  button.mousePressed(changeFace);
}

function draw() {
  translate(width / 2, height / 2);
  background(255);
  
  // Draw face
  fill(250, 204, 0);
  ellipse(0, 0, 250, 250);
  stroke(0);
  strokeWeight(4);

  // Eyes
  fill(255);
  ellipse(60, -20, 50, 60); // Right eye
  ellipse(-60, -20, 50, 60); // Left eye
  
  // Draw mouth based on the current silly face
  if (sillyFace) {
    drawRandomFace(sillyFace);
  } else {
    // Smiling mouth
    noFill();
    stroke(0);
    strokeWeight(4);
    arc(0, 40, 80, 40, 0, PI / 2); // Smiling mouth
  }
  // Pupils
  fill(0, 0, 0);
  ellipse(40, -10, 20, 20); // Right pupil
  ellipse(-40, -10, 20, 20); // Left pupil
}
// Function to change to a random silly face
function changeFace() {
  let expressions = ['angry', 'surprised', 'sad', 'tongue out'];
  sillyFace = random(expressions); // Set sillyFace to a random expression
}

// Function to draw a specific silly face
function drawRandomFace(expression) {
 if (expression == 'angry') {
    // angry
    fill(250, 0, 0);
    ellipse(0, 0, 250, 250);
    stroke(0);
    strokeWeight(4);
    arc(0, 40, 80, 40, PI, TWO_PI); // Angry mouth
    // angry Pupils
  fill(0, 0, 0);
  ellipse(60, -10, 100, 20); // Right pupil
  ellipse(-60, -10, 100, 20); // Left pupil
  } else if (expression == 'surprised') {
    // surprised
    fill(173, 216, 230);
    ellipse(0, 0, 250, 250);
    stroke(0);
    strokeWeight(4);
    ellipse(0, 50, 80, 80); // Surprised mouth
    // surprised Pupils
    fill(0, 0, 0);
    ellipse(60, -10, 20, 40); // Right pupil
    ellipse(-60, -10, 20, 20); // Left pupil
  } else if (expression == 'tongue out') {
    fill(250, 204, 0); // Normal face color
    ellipse(0, 0, 250, 250);
    fill(255); // White for open mouth
    arc(0, 40, 80, 60, 0, PI, CHORD); // Open mouth
    fill(255, 100, 100); 
    rect(-13, 50, 30, 60, 20); // Tongue
  } else if (expression == 'smirk'){
    // Smiling mouth
    noFill();
    stroke(0);
    strokeWeight(4);
    arc(0, 40, 80, 40, 0, PI / 2); // Smiling mouth
  }
  
  // Reset eye color for silly face
  fill(255);
  ellipse(60, -20, 50, 60); // Right eye
  ellipse(-60, -20, 50, 60); // Left eye
}