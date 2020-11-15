let particle;
let yoff = 0.0;
let stars = [];

function setup() {

  createCanvas(700, 400);
  particle = new Particle();

for (let i = 0; i < 70; i++) {
stars.push(new Star());
}
}

function draw() {

  background(20,20,70,30);

  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
   }

  fill(random(200,255),95,95);
  beginShape();

  let xoff = 0;

  for (let x = 200; x <= 500; x += 10) {
    let y = map(noise(xoff, yoff), 0, 1, 500, 100);
    vertex(x, y);
    xoff += 0.1;
  }

  yoff += 0.01;
  vertex(500, height);
  vertex(200, height);
  endShape(CLOSE);


  let gravity = createVector(0, 0.08);

  particle.applyForce(gravity);
  particle.update();
  particle.show();


}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = 5;
  }

  display() {
    ellipse(this.x,this.y,this.diameter);

    let s = random(1);
if (s > 0.5){
fill(255,228,0);
}
else {
  fill(20,20,70);
}
  }
}

class Particle {

  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(random(-3,3), random(-5,-4));
    this.acc = createVector(0, 0);

  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    noStroke
    fill(random(200,255),95,95);
    ellipse(this.pos.x, this.pos.y, 12, 12);
    if (this.pos.y > height) {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(random(-5,5), random(-6,-5));
    this.acc = createVector(0, 0);
    }
  }
}
