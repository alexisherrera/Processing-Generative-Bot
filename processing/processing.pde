void setup() {
  size(500,500);
}

void draw() {
  background(0);
  
  for (int i = 0; i < 10; i++) {
    fill(random(255), random(255), 120);
    noStroke();
    beginShape();
    
    for (int j = 0; j < random(6); j++) {
      vertex(random(width), random(height));
    }
    endShape(CLOSE);
  }
  fill(255);
  save("output.png");
  exit();
}