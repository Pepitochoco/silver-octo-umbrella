var colors = [

  '#8E0045',
  '#7ECEFD',
  '#EDDEA4',
  '#FF7F66',
  '#FF9B42',
  '#0FA3B1',
  '#EC0B43',
  '#FD5200',
  '#04F06A'

];

var color;

var params = {
  width: 0,
  x : 100,
  strokeWeight: 10

};

function setup() {
  createCanvas (windowWidth, windowHeight);
  noStroke();
  color = random(colors);
}

function draw() {
  background ('#EBF5EE');
  stroke(color);
  fill(color);
  //rect( params.x, height/2-50, params.width, 200 );
  ellipse(width/2, height/2, params.width);
//   stroke(255, 102, 0);
// line(85, 20, 10, 10);
// line(90, 90, 15, 80);
// stroke(0, 0, 0);
// bezier(135, 20, 10, 10, 90, 90, 15, 80);


strokeWeight(160.0);
strokeCap(ROUND);
line(20, 50, 700, 50);
line(20, 800, 700, 800);

// noFill();
// strokeWeight(10.0);
// strokeJoin(ROUND);
// beginShape();
// vertex(35, 20);
// vertex(65, 50);
// vertex(35, 80);
// endShape();

  // arc(50, 55, 50, 50, 0, HALF_PI);
// noFill();
// arc(50, 55, 60, 60, HALF_PI, PI);
// arc(50, 55, 70, 70, PI, PI+QUARTER_PI);
// arc(50, 55, 80, 80, PI+QUARTER_PI, TWO_PI);

  //ellipse(400, 700, params.width);

}

function windowResized() {
  resizedCanvas (windowWidth, windowHeight);
}

function mousePressed(){
  color = random(colors);
  TweenMax.fromTo( params,0.15,{
    x: 100,
    width: 0

  },
  {
    width: random(20,500),
    onComplete: reduce,
    // strokeWeight: random(40),

 });
}

function reduce(){
  TweenMax.to(params, 0.15,{
    x : width - 100,
    width: 0
  })
}
