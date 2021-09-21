// webcam capture -- 90s camgirl style

let capture;
let base;
let wiggle = 100;
let stretch = 100;
let x;
let y;
let swarm = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  base = height;
  let num = width*0.02;
  frameRate(15);
  x  = 0;
  y = 0;
  // x = width/2;
  //web cam capture
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  for (let i = 0; i < num; i++){
    swarm.push(new Element());
  }
}

function draw() {
  background(3600, 100, 100, 10);
  // imageMode(CENTER);
  // tint(random(300,360), 100, 100)
  // x = map(mouseX, 0, width, width*.25, width*.75)
  //image(capture, mouseX, mouseY, 128, 96);
  
  // image(capture, width/2 + + random(-stretch, stretch), height/2 + random(-stretch, stretch), 
  // width*.25 + random(-stretch, stretch), height*.25 + random(-stretch, stretch)); 
  //image(capture, width/2, height/2, random(width*.5, width), random(height*.5, height*.75));
 if (frameCount%5==0){
    image(capture, x, y, width*.25, height*.25);
    x += width*.25;
    if (x >= width){
      x = 0;
      y += height*.25
    }
    
    if (y >= height){
      y = 0;
    }
   }
  
  for (let i = 0; i < swarm.length; i++){
    swarm[i].update();
    swarm[i].display();
  }

  
  
  // noFill();
  // for (let j = 0; j < 20; j++ ){
    // circle(mouseX, mouseY, 5*j);
  // }
  // if ()
  
  filter(INVERT);
  // for (let i = 0; i < 200; i++){
  //   fill(random(255));
  //   square(random(width), base + random(-wiggle, wiggle), random(5));
    
  //   }
  // base-=1;
  // if (base < 0){
  //   base = height;
  // }
}

class Element{
  constructor(){
    this.angle = createVector();
    this.vel = createVector(0, 0);
    this.amp = createVector(random(20, width/2), random(20, height/2));
    this.H1 = random(200,300);
    this.H2 = random(175, 255);
    this.rad = random(height*.002, height*.02);
    this.len = random(4, 6);
  }

  update(){
    this.accel = createVector(random(-0.01, 0.01), random(-0.01, 0.01));
    this.vel.add(this.accel);
    this.angle.add(this.vel);
  }

  display(){
    let x = sin(this.angle.x) * this.amp.x;
    let y = sin(this.angle.y) * this.amp.y;

    push();
    translate(width/2, height/2);
    // stroke(this.H1, random(100), random(100));
    stroke(this.H2);
    noFill();
    for (let i = 0; i < this.rad; i++){
      circle(x, y, this.len * i);
      }
    
    pop();
    // stroke(this.H2, random(100), random(100));
    // line(mouseX,  mouseY, x*(width/2), y*(height/2));
  }
}

