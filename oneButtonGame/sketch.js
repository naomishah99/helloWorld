let font;
let buttonText = 'bottom'; // Initial button text
let button; // Main button element
let copyButton; // Button copy for Level 3
let level = 1; // Current game level
let errorMessage = ''; // Error message display
let successMessage = ''; // Success message display
let hoverStartTime = 0; // Timer for Level 2 hover
let isHovering = false; // Hover status for Level 2
let cloudsVisible = false; // Cloud visibility for Level 5

function setup() {
  createCanvas(600, 600);
  //translate(width/2,height/2);

  // Create the main button with editable text
  button = createButton(buttonText);
  button.position(250, 330);
  button.size(100,25);
  
  // Add mouse pressed event for the main button
  button.mousePressed(levelOneHandler);
}

function draw() {
  // Background based on cloud visibility
  if (cloudsVisible) {
    background(50, 106, 600); // Sky blue background with clouds
    drawClouds(); // Draw clouds if visible
  } else {
    background(0); // White background
  }
  
  // Display level instructions
  textSize(24);
  textAlign(CENTER);
  fill(150,250,150);
  textFont('Courier New');

  if (level === 1) {
    text('To start the journey and have some fun, find the little detail that doesn’t quite run.', 50, 150, 500);
  } else if (level === 2) {
    text('A hidden door, revealed by touch.', 50, 150, 500);
    handleHoverForLevel2(); // Hover for Level 2
  } else if (level === 3) {
    text('The double life.', 50, 150, 500);
  } else if (level === 4) {
    text('Stairways to heaven.', 50, 150, 500);
    displayScrollInstructions(); // Scroll instructions for Level 4
  } else if (level === 5) {
    text('Click the right button to start over.', 50, 150, 500);
  }

  // Display success or error messages
  fill(0, 255, 0);
  text(successMessage, 50, 450, 500);
  fill(255, 0, 0);
  text(errorMessage, 50, 450, 500);
}

function levelOneHandler() {
  // Level 1: Check and correct the button text
  if (level === 1) {
    let newText = prompt("Edit the button text:", buttonText);
    if (newText !== null) {
      buttonText = newText;
      button.html(buttonText);
      
      // Advance to Level 2 if the text is correct
      if (buttonText === 'button') {
        level = 2; // Advance to Level 2
        errorMessage = '';
        button.mouseOver(startHover); // Set up hover event for Level 2
        button.mouseOut(stopHover);
      } else {
        errorMessage = 'Oops! Looks like you stumbled over a typo. Give it another go!';
      }
    }
  }
}

function handleHoverForLevel2() {
  if (isHovering && millis() - hoverStartTime >= 5000) {
    successMessage = "Proceed to the next romm!";
    errorMessage = '';
    level = 3; // Move to Level 3
    button.mousePressed(createCopyButton); // Set up handler for Level 3
  }
}

function startHover() {
  if (level === 2 && !isHovering) {
    isHovering = true;
    hoverStartTime = millis();
    errorMessage = ''; // Clear error message while hovering
  }
}

function stopHover() {
  if (level === 2 && isHovering) {
    isHovering = false;
    errorMessage = "Patience is a virtue. Try again."; // Show error if hover interrupted
    successMessage = ''; // Clear success message
  }
}

function createCopyButton() {
  // Create a copy of the button for Level 3
  copyButton = createButton(buttonText);
  copyButton.position(150, 150);
  copyButton.size(100);
  copyButton.mousePressed(checkCopyButton); // Set mouse pressed event for the copy button
}

function checkCopyButton() {
  // Check if the button copy is clicked for Level 3
  if (level === 3) {
    if (keyIsDown(91) || keyIsDown(93)) { // Check if Command key (Mac) is pressed
      successMessage = "You’ve mastered the art of living in two worlds—now go show off your secret identity!";
      level = 4; // Advance to Level 4
      cloudsVisible = false; // Ensure clouds are hidden initially
      errorMessage = '';
      copyButton.hide(); // Hide the copy button
    } else {
      errorMessage = "Oops! Looks like that double life turned into a double take! Try again!";
    }
  }
}

function displayScrollInstructions() {
  // Instructions for Level 4
  successMessage = ('Keep scrolling to ascend.');
}

function drawClouds() {
  // Draw clouds in the sky
  text('🌨️, 🌨️,');
}

function mouseWheel(event) {
  // Scroll event to check for Level 4 completion
  if (level === 4) {
    if (event.delta < 0) { // Scroll up
      cloudsVisible = true; // Show clouds
      level = 5; // Advance to Level 5
      successMessage = "Congratulations! You’ve ascended to new heights!";
      errorMessage = '';
    }
  }
  
  if (level === 5) {
    // Choose the right button to restart the game
    if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 200) {
      level = 1; // Restart game at Level 1
      successMessage = '';
      errorMessage = '';
      buttonText = 'bottom'; // Reset button text
      button.html(buttonText); // Reset button text on the main button
      button.position(150, 100); // Reset button position
      if (copyButton) {
        copyButton.hide(); // Hide copy button if it exists
      }
      cloudsVisible = false; // Hide clouds again for restart
    } else {
      errorMessage = "Wrong button! You die!";
    }
  }
}