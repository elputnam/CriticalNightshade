// webcam capture -- 90s camgirl style

let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  
  //web cam capture
  capture = createCapture(VIDEO);
  capture.size(640, 480);
 
  capture.hide();
}

function draw() {
  background(175, 100, 100);
  imageMode(CENTER);
  tint(0, 100, 100)
  image(capture, width/2, height/2, 640, 480); 
  filter(POSTERIZE, 5);
}
