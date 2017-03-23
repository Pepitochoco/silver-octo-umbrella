function setup(){
  createCanvas(100, 100, WEBGL);
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(200, 200);
}
