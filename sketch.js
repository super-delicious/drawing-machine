function setup() {
  createCanvas(889, 500);
  background(220, 22, 220);

  strokeWeight(3);
}

function draw() {

  if (mouseIsPressed == true) {
    stroke(map(mouseX, 0, 600, 0, 255, true),)
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(width - mouseX, height - mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {
  //  console.log(`key ${key} is being typed`)
  if (key === 's'){
  // save this image
  saveCanvas('filename', 'png');
  }
}
