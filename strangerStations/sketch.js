let screen = 0; // Current screen
let progressBar;

const answers = [];

let imgLogo; // logo
let fontTitle; // Degular bold
let fontBody; // Degular Medium

let current1;
let current2;

//main button
let mainButton; //to confrim
let mainButton02;
let mainButton03;

// buttons to select answers
let button01;
let button02; //to pick

// Position Picker
let pos = [1,2,3,4];
let posPicked = [];

//to log responses
let currentUser = "person1";
let responses = {
  person1: [],
  person2: [],
  person3: [],
  person4: []
}

function preload(){
  imgLogo = loadImage('assets/strangerStations_Logo01.png');
  imgSymbol = loadImage('assets/logoSymbol.png');
  imgQ1 = loadImage('assets/question1.png');
  imgQ2 = loadImage('assets/queston2.png');
  imgQ3 = loadImage('assets/question3.png');
  imgQ4 = loadImage('assets/question4.png');
  imgQ5 = loadImage('assets/question5.png');
  fontTitle = loadFont ('assets/DegularDisplayDemo-Semibold.otf')
  fontBody = loadFont('assets/DegularDisplayDemo-Medium.otf');
}

function setup() {
  createCanvas(300, 510);
  frameRate(2);

  pos = floor(random(1, 4));

  // Initialize the progress bar
  progressBar = new ProgressBar(50, 250, 2500, height - 70); // Added y-coordinate
  progressBar.start();

  // creating button01
  button01 = createButton(" ");
  button01.position(width / 2 - 50, height / 2 + 110); // Position it properly
  button01.size(100, 25); // Set button size
  button01.mousePressed(button01Pressed);
  //button01.style('background-color', '46,156,252');

  // creating button02
  button02 = createButton(" ");
  button02.position(width / 2 - 50, height / 2 + 150); // Position it properly
  button02.size(100, 20); // Set button size
  button02.mousePressed(button02Pressed);
  //button01.style('background-color', '46,156,252');
}

function draw() {
  background(240, 240, 240);

  // Handle screens
  if (screen == 0) {
    splashScreen();            //splash screen
    hideButtons();
  } else if (screen == 1) {
    introScreen();             //intro screen
    hideButtons();
  } else if (screen == 2) {
    updateButtons("Cityscapes", "Nature"); // buttons for prompt 1
    prompt01()                 //question 1
    showButtons();
  } else if (screen == 3) {
    updateButtons("Realistic", "Abstract"); // buttons for promt 2
    prompt02 ()                //question 2
    showButtons();
  } else if (screen == 4) {
    updateButtons("Bold Expression", "Subtle Details"); //buttons for prompt 3
    prompt03()                 //question 3
    showButtons();
  } else if (screen == 5) {
    updateButtons("Colour", "B & W"); //buttons for prompt 4
    prompt04()                 //question 4
    showButtons();
  } else if (screen == 6) {
    updateButtons("Truth", "Dare"); //buttons for prompt 5
    showButtons();
    prompt05()                 //question 5
  } else if (screen == 7) {
    completeScreen()           //complete screen
    hideButtons();
  } else if (screen == 8) {
    rulesScreen ()             //rules screen
    hideButtons();
  }else if (screen == 9) {
    positionScreen ()             //position screen
    hideButtons();
  }
}

// SPLASH SCREEN
function splashScreen() {

  background (46,156,252);

  // load the logo
  push();
  scale(0.18,0.18);
  image(imgLogo, width/2-50, height/2+ 750);
  pop();

  // Render the progress bar
  progressBar.render();

  // Check if progress bar is complete
  if (progressBar.isComplete()) {
    screen = 1; // Move to intro screen
  }

  // Splash screen text
  textSize(12);
  textAlign(CENTER);
  fill(237, 252, 185);
  noStroke();
  textFont('Helvetica Light');
  //text("Welcome to", width / 2, height / 2 - 120);
  text("Every conversation has the potential to \n spark ideas, friendships and connections", width / 2, height / 2+10);
}

// INTRO SCREEN
function introScreen() {
  // Intro Screen Content

  background (46,156,252);

  //Text
  textSize(21);
  textAlign(CENTER);
  fill(237, 252, 185);
  textFont(fontTitle);
  text("Welcome to", width / 2, height / 2 - 180);
  
  // load the logo
  push();
  scale(0.18,0.18);
  image(imgLogo, width/2-50, height/2+200);
  pop();

  textSize(14);
  textFont('Helvetica Light');
  fill(237, 252, 185);
  //textStyle(bold);
  text("Pause to connect with people \n you may not otherwise meet. \n Spark meaningful conversations \n through shared stories and \n fresh perspectives. Face to face \n engagement is at the heart \n of this experience. \n \n Answer a few quick questions \n to get matched and start \n connecting at our station.", width / 2, height / 2 - 100)
 
  if (!mainButton) {
    mainButton = createButton("Let's Do It!");
    mainButton.position(width / 2 - 50, height / 2 + 150); // Center the button
    mainButton.size(100, 25);
    //mainbutton.style('background-color', '#2e9cfc');

    // Add a mousePressed event to transition to the next screen
    mainButton.mousePressed(() => {
      screen = 2; // Move to Question 1 screen
      mainButton.remove(); // Remove the intro button
    });
  }
}

// QUESTION 1
function prompt01() {

  background (0,52,28);

  // Illustration
  push();
  scale(0.32,0.32);
  image(imgQ1, width/2-45, height/2+250);
  pop();

  // question 1 Content
  textSize(12);
  textAlign(CENTER);
  fill(255, 255, 255);
  textFont(fontTitle);
  text("QUESTION 1", width / 2, height / 2 - 180);

  textSize(16);
  textFont('Helvetica Light');
  text("Which setting do you thrive in?", width / 2, height / 2 - 150);
}

// QUESTION 2
function prompt02() {

  background (255,96,62);

  // Illustration
  push();
  scale(0.32,0.32);
  image(imgQ2, width/2-45, height/2+250);
  pop();

  //question 2 Content
  textSize(12);
  textAlign(CENTER);
  fill(255, 255, 255);
  textFont(fontTitle);
  text("QUESTION 2", width / 2, height / 2 - 180);

  textSize(16);
  textFont('Helvetica Light');
  text("What style speaks to you?", width / 2, height / 2 - 150);
}

// QUESTION 3
function prompt03() {

  background (0,91,250);

  // Illustration
  push();
  scale(0.32,0.32);
  image(imgQ3, width/2-45, height/2+250);
  pop();

  //question 3 Content
  textSize(12);
  textAlign(CENTER);
  fill(255, 255, 255);
  textFont(fontTitle);
  text("QUESTION 3", width / 2, height / 2 - 180);

  textSize(16);
  textFont('Helvetica Light');
  text("What tends to draw your eye?", width / 2, height / 2 - 150);
}

// QUESTION 4
function prompt04() {

  background (255,180,0);

  // Illustration
  push();
  scale(0.32,0.32);
  image(imgQ4, width/2-45, height/2+250);
  pop();

  // question 4 Content
  textSize(12);
  textAlign(CENTER);
  fill(255, 255, 255);
  textFont(fontTitle);
  text("QUESTION 4", width / 2, height / 2 - 180);

  textSize(16);
  textFont('Helvetica Light');
  text("What tends to draw your eye?", width / 2, height / 2 - 150);
}

// QUESTION 5
function prompt05() {

  background (255,44,21);

  // Illustration
  push();
  scale(0.32,0.32);
  image(imgQ5, width/2-45, height/2+250);
  pop();

  // question 5 Content
  textSize(12);
  textAlign(CENTER);
  fill(255, 255, 255);
  textFont(fontTitle);
  text("QUESTION 5", width / 2, height / 2 - 180);

  textSize(16);
  textFont('Helvetica Light');
  text("Pick your poison:", width / 2, height / 2 - 150);
}

// COMPLETE SCREEN
function completeScreen() {

  background (46,156,252);

  // Logo symbol
  push();
  scale(0.07,0.07);
  image(imgSymbol, width/2+900, height/ 2 + 700);
  pop();

  //complete screen content
  textSize(24);
  textAlign(CENTER);
  fill(237, 252, 185);
  textFont(fontTitle);
  text("You are ready \n to be connected", width / 2, height / 2-10);

  textSize(14);
  textFont('Helvetica Light');
  text("Take a seat and place your \n phone on the designated area \n for the fun to begin!", width / 2, height / 2 + 50);
  
  if (!mainButton02) {
    mainButton02 = createButton("Let's Do It!");
    mainButton02.position(width / 2 - 50, height / 2 + 150); // Center the button
    mainButton02.size(100, 25);
    //mainButton02.style('background-color', '#2e9cfc');

    // Add a mousePressed event to transition to the next screen
    mainButton02.mousePressed(() => {
      screen = 8; // Move to Question 1 screen
      mainButton02.remove(); // Remove the intro button
    });
  }
}

// KEEP IT KIND
function rulesScreen(){

  background (46,156,252);


  textSize(24);
  textAlign(CENTER);
  fill(237, 252, 185);
  textFont(fontTitle);
  text("Keep it kind", width / 2, height / 2 - 180);

  textSize(14);
  textFont('Helvetica Light');
  text("Be You : Keep it original, you are \n not here to impress anynody. \n \n Be Safe: Be mindful of the \n information you share. \n \n Be Respectful: Treat everyone with \n respect, kindness and patience.", width / 2, height / 2 - 120);
  
  if (!mainButton03) {
    mainButton03 = createButton("Let's Do It!");
    mainButton03.position(width / 2 - 50, height / 2 + 150); // Center the button
    mainButton03.size(100, 25);

    // Add a mousePressed event to transition to the next screen
    mainButton03.mousePressed(() => {
      screen = 9; // Move to Question 1 screen
      pos = floor(random(1, 4));
      mainButton03.remove(); // Remove the intro button
    });
  }
}

  // PLACEMENT
function positionScreen(){
  
  background (46,156,252);

  //position content
  textSize(21);
  textAlign(CENTER);
  fill(237, 252, 185);
  noStroke();
  textFont(fontTitle);
  text("You are seated at", width / 2, height / 2 - 180);

  // giving a seat number


  //Table chart
  fill(0, 91, 250);
  noStroke();
  rect(55, 220, 180, 100, 4);

  if (pos == 1) {
    
    textSize(21);
    textAlign(CENTER);
    fill(237, 252, 185);
    noStroke();
    textFont(fontTitle);
    text("place 1", width / 2, height / 2 - 160);

    stroke (237, 252, 185);
    strokeWeight (2);
    fill(237, 252, 185);
    circle(90, 180, 40); // POS 1

    noFill();
    stroke (237, 252, 185);
    strokeWeight (2);
    circle(200, 180, 40); // POS 2
    circle(200, 360, 40); // POS 3
    circle(90, 360, 40); // POS 4

  } else if (pos == 2) {
    textSize(21);
    textAlign(CENTER);
    fill(237, 252, 185);
    noStroke();
    textFont(fontTitle);
    text("place 2", width / 2, height / 2 - 160);

    stroke (237, 252, 185);
    strokeWeight (2);
    fill(237, 252, 185);
    circle(200, 180, 40); // POS 2

    noFill();
    stroke (237, 252, 185);
    strokeWeight (2);
    circle(90, 180, 40); // POS 1
    circle(200, 360, 40); // POS 3
    circle(90, 360, 40); // POS 4

  } else if (pos == 3) {

    textSize(21);
    textAlign(CENTER);
    fill(237, 252, 185);
    noStroke();
    textFont(fontTitle);
    text("place 3", width / 2, height / 2 - 160);

    stroke (237, 252, 185);
    strokeWeight (2);
    fill(237, 252, 185);
    circle(200, 360, 40); // POS 3

    noFill();
    stroke (237, 252, 185);
    strokeWeight (2);
    circle(90, 180, 40); // POS 1
    circle(200, 180, 40); // POS 2
    circle(90, 360, 40); // POS 4

  } else if (pos == 4) {

    textSize(21);
    textAlign(CENTER);
    fill(237, 252, 185);
    noStroke();
    textFont(fontTitle);
    text("place 4", width / 2, height / 2 - 160);

    stroke (237, 252, 185);
    strokeWeight (2);
    fill(237, 252, 185);
    circle(90, 360, 40); // POS 4

    noFill();
    stroke (237, 252, 185);
    strokeWeight (2);
    circle(90, 180, 40); // POS 1
    circle(200, 180, 40); // POS 2
    circle(200, 360, 40); // POS 3
  }
}



  // if (!mainButton02) {
  //   mainButton02 = createButton("Let's Do It!");
  //   mainButton02.position(width / 2 - 50, height / 2 + 50); // Center the button
  //   mainButton02.size(100, 25);

  //   // Add a mousePressed event to transition to the next screen
  //   mainButton02.mousePressed(() => {
  //     screen = 8; // Move to Question 1 screen
  //     mainButton02.remove(); // Remove the intro button
  //   });
  // }

// Update buttons dynamically
function updateButtons(label1, label2) {
  current1 = label1;
  current2 = label2;
  button01.html(label1);
  button02.html(label2);
}

// Button press handlers
function button01Pressed() {
  answers.push(current1);
  screen++; // Move to the next screen
}

function button02Pressed() {
  answers.push(current2);
  screen++; // Move to the next screen
}

// Show buttons
function showButtons() {
  button01.show();
  button02.show();
}

// Hide buttons
function hideButtons() {
  button01.hide();
  button02.hide();
}

// Simplified ProgressBar Class
class ProgressBar {
  constructor(x1, x2, duration, y) {
    this.startTime = 0;
    this.x1 = x1;
    this.x2 = x2;
    this.duration = duration;
    this.y = y; // Add y-coordinate for positioning
  }

  start() {
    this.startTime = millis(); // Start the timer
  }

  getProgress() {
    // Calculate progress as a percentage
    return constrain((millis() - this.startTime) / this.duration, 0, 1);
  }

  render() {
    // Draw the progress bar at the specified y position
    let progress = this.getProgress();
    stroke(22,121,196);
    strokeWeight(10);
    line(this.x1, this.y, this.x2, this.y); // Background bar
    stroke(237, 252, 185);
    line(this.x1, this.y, lerp(this.x1, this.x2, progress), this.y); // Filled bar
  }

  isComplete() {
    return this.getProgress() >= 1;
  }
}

//Websockets
const socket = new WebSocket("ws://10.1.66.8:3001");
console.log(socket);

// Connection opened
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});

socket.addEventListener("error", (event) => {
  console.log("Message from server ", event.data);
});

    socket.onopen = () => {
      console.log("WebSocket connection opened");
      socket.send("hello");
    };

    //socket.on("open", function())

    // socket.onmessage = (event) => {
    //   console.log("Received WebSocket data:", event.data);
    // };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // socket.onclose = () => {
    //   console.log("WebSocket connection closed");
    // };


    //LOOK AT REGEX FOR COMPARISION