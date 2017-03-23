var colors = [

  '#2185C5',
  '#7ECEFD',
  '#FFF6E5',
  '#FF7F66'
];

var color;

var params = {
  width: 0,
  x : 100,

};

function setup() {
  createCanvas (windowWidth, windowHeight);
  noStroke();
  color = random(colors);
}

function draw() {
  background ('#3E454C');
  fill(color);
  rect( params.x, height/2-50, params.width, 200 );

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
    width: width-200,
    onComplete: reduce

 });
}

function reduce(){
  TweenMax.to(params, 0.15,{
    x : width - 100,
    width: 0
  })
}
