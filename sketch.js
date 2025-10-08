var rivers=250; 
var ari=2;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(240,mouseX,155); //an RGB color for the canvas' background
  //circle
  stroke(200,mouseY,157); // an RGB color for the circle's border
  fill(20,rivers,7,3); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,200,185,rivers); // center of canvas, 20px dia
  ellipse(75,375,250,rivers);
  fill(130,242,222);

  fill(237,225,223);
  ellipse(random(width),random(height),100,150);
  strokeWeight(mouseX,mouseY,100,150);

  fill(222,195,186);
  ellipse(100,150,random(width),random(height));
  strokeWeight(mouseX,mouseY,100,150);
}
function mousePressed(){

if (rivers<=0) {
  rivers=250;
} else {
  rivers=rivers-4;
}

ari=ari+1;

}
