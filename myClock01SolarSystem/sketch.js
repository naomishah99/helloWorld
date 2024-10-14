let planets = [];

function setup() {
  createCanvas(1500, 790);
    
  // creating planets (distance from sun, size, speed, color)
  planets.push(new Planet(65, 15, 4.15 * 0.01, color(180, 190, 169)));  // Mercury
  planets.push(new Planet(100, 18, 1.62 * 0.01, color(218, 165, 32)));  // Venus
  planets.push(new Planet(140, 20, 1.00 * 0.01, color(70, 130, 180)));  // Earth
  planets.push(new Planet(180, 15, 0.53 * 0.01, color(188, 39, 50)));   // Mars
  planets.push(new Planet(240, 40, 0.08 * 0.01, color(205, 133, 63)));  // Jupiter
  planets.push(new Planet(300, 35, 0.03 * 0.01, color(255, 223, 150))); // Saturn
  planets.push(new Planet(350, 30, 0.011 * 0.01, color(173, 216, 230))); // Uranus
  planets.push(new Planet(400, 30, 0.006 * 0.01, color(25, 25, 112)));  // Neptune
  planets.push(new Planet(420, 8, 0.004 * 0.01, color(159, 69, 19)));   // Pluto
}

function draw() {
  background(0); // Space background
  translate(width / 2, height / 2); // Move the origin to the center

  // sun
  ellipse(0,0,150,150);
  fill(250,204,0);
  
  // draw the planets orbiting
  for (let planet of planets) {
    planet.orbit();
    planet.display();
  }
}

// Planet class
class Planet {
  constructor(distance, size, speed, c) {
    this.distance = distance;
    this.size = size;
    this.angle = TWO_PI; // Smae sarting point
    this.speed = speed; // Rotation speed (orbital speed)
    this.c = c; // Planet color
    this.path = [] 
    this.pathLen = Infinity
  }

  // Orbit function to update position
  orbit() {
    this.angle += this.speed; // Update angle for orbit
  }

  // display the Planet
  display() {
    push();
    rotate(this.angle); // Rotate around the center
    translate(this.distance, 0); // Move the planet out from the center
    noStroke();
    fill(this.c);
    ellipse(0, 0, this.size, this.size); // Draw the planet
    pop();
  }

  // orbit path (arc)
  showOrbitPath() {
    noFill();
    stroke(255, 255, 255, 100); // White orbit line with transparency
    strokeWeight(2);
    
    let startAngle = this.angle - 0.1; // Start of the arc (slightly behind the planet)
    let endAngle = this.angle;         // End of the arc (current position of the planet)
    
    // Draw the arc
    arc(0, 0, this.distance * 2, this.distance * 2, startAngle, endAngle);
  }
}
