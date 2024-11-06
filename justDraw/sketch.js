let handPose;
let video;
//let flipVideo;
let hands = [];
let drawing = [];  // Array to store the drawing points
let isDrawing = false;  // Track if we should be drawing
var bgcolor = (0, 0, 0);

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  background(bgcolor);
  setupCanvas();

  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  //flipVideo = ml5.flipImage(video);
  
  // Start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
}

function setupCanvas() {
  // Create interface

  // Color Picker
  colorPicker = createColorPicker('#000000');
  colorPicker.position(10, 50);
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // Draw the flipped webcam video
  //image(flipVideo, 0, 0, width, height);

  // Draw the saved drawing points
  stroke(colorPicker.color());
  strokeWeight(4);
  noFill();
  for (let i = 1; i < drawing.length; i++) {
    let prevPoint = drawing[i - 1];
    let currPoint = drawing[i];
    line(prevPoint.x, prevPoint.y, currPoint.x, currPoint.y);
  }

  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 2);
    }

    // Check hand gesture
    checkHandGesture(hand);
    
    // Get the pointer finger's keypoint (index 8 in hand keypoints) for drawing
    let pointer = hand.keypoints[8];
    if (isDrawing) {
      drawing.push({ x: pointer.x, y: pointer.y });
    }
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // Save the output to the hands variable
  hands = results;
}

// Function to detect hand gestures
function checkHandGesture(hand) {
  // Identify keypoints for each finger
  const indexFinger = hand.keypoints[8];
  const middleFinger = hand.keypoints[12];
  const ringFinger = hand.keypoints[16];
  const pinkyFinger = hand.keypoints[20];
  const thumb = hand.keypoints[4];

  // Check if only the index finger is extended (other fingers below the index)
  if (indexFinger.y < middleFinger.y && 
      indexFinger.y < ringFinger.y && 
      indexFinger.y < pinkyFinger.y && 
      thumb.y < indexFinger.y) {
    isDrawing = true;
  } 
  // Check if a fist is made (all fingers close together)
  else if (dist(indexFinger.x, indexFinger.y, middleFinger.x, middleFinger.y) < 20 &&
           dist(middleFinger.x, middleFinger.y, ringFinger.x, ringFinger.y) < 20 &&
           dist(ringFinger.x, ringFinger.y, pinkyFinger.x, pinkyFinger.y) < 20) {
    // Clear canvas when fist is detected
    background(bgcolor);
    drawing = [];
    isDrawing = false;
  }
  // Check if all fingers are extended (all fingers above a certain y position)
  else if (indexFinger.y < middleFinger.y &&
           indexFinger.y < ringFinger.y &&
           indexFinger.y < pinkyFinger.y &&
           thumb.y < indexFinger.y) {
    isDrawing = false;  // Stop drawing if all fingers are extended
  }
}
