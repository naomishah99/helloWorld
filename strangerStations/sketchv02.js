let screen= 0;                  //current screen
//var loading= true;            //for splash screen
let loadingBar;

// function preload() {
//   // Preload the font's file in the canvas's assets directory.
//   font = loadFont('assests/Satoshi-Variable.ttf');
// }

function setup() {
  createCanvas(300,510); 

  //loading bar start
  loadingBar = new loadingBar(50, 250, 3000, height -70);
  loadingBar.start(); //so that it starts immediately
}

function draw() {
  background(240,240,240);
  translate(width / 2, height / 2);

  // //text for screen
  // textSize(16);
  // textAlign(CENTER);
  // fill(0,53,28);
  // textFont('Helvetica Light');

  //app screesn

  if (screen == 0) {
    splashScreen();            // Show splash screen
  } else if (screen == 1) {
    introScreen();             // Transition to intro screen
  } else if (screen == 2) {
    prompt01()                 //question 1
  } else if (screen == 3) {
    prompt02 ()                //question 2
  } else if (screen == 4) {
    prompt03()                 //question 3
  } else if (screen == 5) {
    prompt04()                 //question 4
  } else if (screen == 6) {
    prompt05()                 //question 5
  } else if (screen == 7) {
    completeScreen()           //YAY screen
  } else if (screen == 8) {
    nextSteps ()               //next step: sit at the table and place phone
  }

  // if (loading) {
  //   splashScreen;
  // } else {
  //   introScreen;
  // }

  //splash screen
  function splashScreen() {

    //loading bar
    loadingBar.render();

    //check if loading is complete
    if (loadingBar.isComplete()){
      screen = 1               //move to intro screen
    }
    
    //text style
    textSize(16);
    textAlign(CENTER);
    fill(0,53,28);
    noStroke();
    textFont('Helvetica Light');

    //splash screen message
    text("Welcome to", 0, width/2);
    text("Every conversation has \n the potential to spark ideas, \n friendships and connections", 0, width/2);
    
    // //loading bar
    // noFill();
    // stroke(0);
    // rect(-100, 150, 200, 10);
    // let w = map(loadingBar.lBar.curr, loadingBar.lBar.x1, loadingBar.lBar.x2, 0, 200);
    // fill(0,53,28);
    // noStroke();
    // rect(-100, 150, w, 10);
  }

  //introduction screen
  function introScreen() {
   
    //text style
    textSize(16);
    textAlign(CENTER);
    fill(0,53,28);
    textFont('Helvetica Light');


    //graphics
    text("This is the intro screen", 0, -120);
  }

  //Loading Bar class
  class LoadingBar {
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
  
    getLoading() {
      // Calculate loading as a percentage
      return constrain((millis() - this.startTime) / this.duration, 0, 1);
    }
  
    render() {
      // Draw the loading bar at the specified y position
      let loading = this.getLoading();
      stroke(200);
      strokeWeight(10);
      line(this.x1, this.y, this.x2, this.y); // Background bar
      stroke(50);
      line(this.x1, this.y, lerp(this.x1, this.x2, progress), this.y); // Filled bar
    }
  
    isComplete() {
      return this.getLoading() >= 1;
    }
  }
}