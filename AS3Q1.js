function setup() {
  // ADD CONSTANT VARIABLES
  // Set values here that don't change over the course of the game,
  // but are convenient to name as variables because they are used
  // throughout the code. Eg, "groundY" could be the height of the ground.
  catcherHeight = 50;
  catcherWidth = 50;

  // ADD CHANGING VARIABLES
  // Set an initial value for variables here that may change later.
  // Eg, "birdX = 0" could start the catcher at the canvas' left edge.
  // "seedIsFalling = false" could ensure it doesn't fall until triggered.
  catcherX = 50;
  catcherY = 320;


  // Set up the canvas.
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("burlywood"); //the sand
  fill("skyblue"); // the sky
  rect(0, -60, 400);  
  myCatcher(mouseX, catcherY); 
 

  // ADD SEED
  // Add the falling shape, either directly here or via a function.
  // This code could include animating the fall, or checking for conditions.
}

function myCatcher(x, y, size) {
  push();
  translate(x, y);
  //left leg
  noStroke();
  fill("orangered");
  rect(-10, 9, 15);
  rect(-20, 15, 15);
  rect(-30, 25, 15);
  //left arm
  noStroke();
  fill("orangered");
  rect(-10, 0, 15);
  rect(-20, -10, 15);
  //right leg
  fill("orangered");
  rect(36, 9, 15);
  rect(46, 15, 15);
  rect(56, 25, 15);
  //right arm
  noStroke();
  fill("orangered");
  rect(36, 0, 15);
  rect(45, -9, 15);
  //bottom body
  noStroke();
  fill("red");
  ellipse(20, 10, 50);
  //head
  noStroke();
  fill("red");
  ellipse(20, -25, 40);
  //eyes
    fill("white");
    ellipse(25, -30, 15); //right white
    ellipse(15, -30, 15); //left white
    fill("black");
    ellipse(25, -30, 5);
    ellipse(15, -30, 5);
   //the eyes blink
  //smile
    arc(21, -19, 15, 15, 5, 180);
  pop();
}
