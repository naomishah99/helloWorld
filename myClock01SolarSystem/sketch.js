let sun;
let planets = [];

function setup() {
  createCanvas(1500, 790);
  
  // The Sun is simply a large yellow ellipse in the center
  sun = {
    size: 150, 
    c: color(255, 204, 0)
  };
  
  // Creating planets (distance from sun, size, speed, color)
  planets.push(new Planet(70, 10, 4.15 * 0.01, color(169, 169, 169)));  // Mercury
  planets.push(new Planet(100, 18, 1.62 * 0.01, color(218, 165, 32)));  // Venus
  planets.push(new Planet(140, 20, 1.00 * 0.01, color(70, 130, 180)));  // Earth
  planets.push(new Planet(180, 15, 0.53 * 0.01, color(188, 39, 50)));   // Mars
  planets.push(new Planet(240, 40, 0.08 * 0.01, color(205, 133, 63)));  // Jupiter
  planets.push(new Planet(300, 35, 0.03 * 0.01, color(255, 223, 150))); // Saturn
  planets.push(new Planet(350, 30, 0.011 * 0.01, color(173, 216, 230))); // Uranus
  planets.push(new Planet(400, 30, 0.006 * 0.01, color(25, 25, 112)));  // Neptune
  planets.push(new Planet(420, 8, 0.004 * 0.01, color(139, 69, 19)));   // Pluto
}

function draw() {
  background(0); // Space background
  translate(width / 2, height / 2); // Move the origin to the center
  
  // Draw the Sun in the center
  noStroke();
  fill(sun.c);
  ellipse(0, 0, sun.size, sun.size);
  
  // Draw the planets orbiting
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
    this.angle = random(TWO_PI); // Random starting angle
    this.speed = speed; // Rotation speed (orbital speed)
    this.c = c; // Planet color
  }

  // Orbit function to update position
  orbit() {
    this.angle += this.speed; // Update angle for orbit
  }

  // Display the planet
  display() {
    push();
    rotate(this.angle); // Rotate around the center
    translate(this.distance, 0); // Move the planet out from the center
    noStroke();
    fill(this.c);
    ellipse(0, 0, this.size, this.size); // Draw the planet
    pop();
  }
}