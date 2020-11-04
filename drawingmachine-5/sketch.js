let controlDiv;
let visible = true;
let noiseOFFset = 0.2;
let strokeWidth = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);

  button = createButton("hide");
  button.mousePressed(toggleVis);

  controlDiv = select("#controls");
  console.log(controlDiv);

  noiseOFFset += 0.02;
  strokeWidth = noise(noiseOFFset) * 100;

}

function draw() {


  background(111, 81, 81);
  strokeWeight(strokeWidth);


  noiseOFFset += 0.4;
  strokeWidth = noise(noiseOFFset) * 20;

  noFill();
  stroke(map(mouseX,  0, 600, 0, 255, true))
  arc(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY, PI, PI + QUARTER_PI);
  arc(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY, PI + QUARTER_PI, PI + TWO_PI);
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);


}




function keyTyped() {

  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    // show all of image
    clear();
  }
  return false;
}



function toggleVis() {
  if (visible) {
    controlDiv.hide();
    visible = false;
    button.html("Show Instruction");
  } else {
    controlDiv.show();
    visible = true;
    button.html("Hide Instruction");
  }
}
