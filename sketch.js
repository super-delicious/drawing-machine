let array = [];

function setup() {
  createCanvas(889, 500);
  background(220, 22, 220);

  strokeWeight(3);
}

function draw() {

  if (mouseIsPressed == true) {
    //stroke(map(mouseX, 0, 600, 0, 255, true), )
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(width - mouseX, height - mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  }
}

function keyTyped() {
  //  console.log(`key ${key} is being typed`)
  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    //display imgae
    //console.log(array[0]);
    //console.log(array[0][1]);
    for (let i = 0; i < array.length; i++) {
      line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);

    } else if (key === 'c') {
      // clear canvas
    } else if (key == 'e') {
      // Erase
      stroke(0, 0);
      fill(250);
      circle(mouseX, mouseY, 35);
    }
  }
