function setup() {
    createCanvas(941, windowHeight);
    squareColor = color(100, 50, 100);
}
  
function draw() {
    background(220, 4567, 56);
    
    fill(255);
    
    rect(mouseX, mouseY, 100, 100);
    rectMode(CENTER);
    fill(squareColor);
    erase();
}