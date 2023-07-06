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
  background(360, 100, 100, 1);
 if (frameCount%15==0){
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
  

  
  filter(INVERT);

}

