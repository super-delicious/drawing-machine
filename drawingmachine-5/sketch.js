let array = [];
let controlDiv;
let visible = true;
let noiseOFFset = 0.2;


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


  background(255, 19, 19);
  strokeWeight(5);


  noiseOFFset += 0.4;
  strokeWidth = noise(noiseOFFset) * 20;
  fill(167, 168, 248, 49);
  triangle(460, 68, 47, 49, pmouseX, pmouseY);
  triangle(width - mouseY, height - mouseX, 47, 49, pmouseX, pmouseY);
  arc(50, 60, 30, 40, 0, HALF_PI);
  noFill();
  stroke(map(mouseX, 0, 600, 0, 255, true))
  arc(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY, PI, PI + QUARTER_PI);
  fill(253, 244, 0);
  arc(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY, PI + QUARTER_PI, PI + TWO_PI);
  fill(0, 0, 255);
  arc(width - mouseY, height - mouseX, width + pmouseY, height - pmouseX, HALF_PI, PI + QUARTER_PI);
  arc(width - mouseY, height - mouseX, width - pmouseY, height - pmouseY, QUARTER_PI, PI + TWO_PI);
  fill(253, 244, 0);
  line(width - mouseX, height - mouseY, width + pmouseY, height + pmouseX);
  fill(0, 0, 0);
  line(width + mouseY, height + mouseX, width - pmouseX, height - pmouseY);
  fill(253, 244, 0);
  line(width - mouseY, height - mouseX, width - pmouseX, height - pmouseX);
  line(mouseX, mouseY, pmouseX, pmouseY);
  fill(0, 0, 255);
  triangle(250, 8, 47, 49, pmouseX, pmouseY);
  fill(253, 244, 0);
  triangle(1250, 8, 437, 66, pmouseX, pmouseY);

}




function keyTyped() {

  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    // show all of image
    clear();
    beginShape();
    for (let i = 0; i < array.length; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();

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
