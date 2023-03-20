let y;
let speedY;

function setup() {
  catcherHeight = 50;
  catcherWidth = 50;
  catcherX = 50;
  catcherY = 320;
  foodY = random();
  foodX = random(0, 300);
  speed = random(5, 10);

  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("burlywood"); //the sand
  fill("dodgerblue"); // the ocean
  rect(0, -60, 400);
  myCatcher(mouseX, catcherY);
  noStroke();
  fill("limegreen");
  circle(foodX, foodY, 20);
  foodY = foodY + speed;

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
  if (mouseIsPressed == true) {
    fill("black");
  } else {
    fill("white");
    ellipse(25, -30, 15); //right white
    ellipse(15, -30, 15); //left white
    fill("black");
    ellipse(25, -30, 5);
    ellipse(15, -30, 5);
  } //the eyes blink
  //smile
  if (mouseIsPressed == true) {
    fill("black");
  } //the smile does not change when mouse is pressed
  arc(21, -19, 15, 15, 5, 180);
  pop();
}
