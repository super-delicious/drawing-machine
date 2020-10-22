let array = [];
let button1;
let button2;
let slider;
let r = 100;
let g = 100;
let b = 100;
let noiseX = 0.0;
let strokeWidth = 5;

function setup() {
  //createCanvas(889, 500);
  createCanvas(windowWidth, windowHeight);
  background(255, 32, 54);

//  strokeWeight(r, g, b);

  button1 = createButton("stroke weight");
  button2 = createButton("stroke color");

  button1.mousePressed(increseStrokeWeight);
  button2.mousePressed(changeStrokeColor);
  createP("stroke weight");
  slider = createSlider(0, 30, 6);
}

function draw() {
  background(255, 32, 54, 20);
  strokeWeight(strokeWidth);

  noiseOffset += 0.01;
 strokeWidth = noise(noiseOffset) * 20;

  let lineWidth = slider.value();
  if (keyIsPressed === true) {
    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(width - mouseX, height - mouseY, pmouseX, pmouseY);


    //array.push([mouseX, mouseY]);
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
    background(255);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  } else if (key === 'c') {
    // clear the canvas
    clear();

  } else if (key === 'r') {  // change color value
    r += 5;
  } else if (key === 'g') {
    g += 5;
  } else if (key === 'b') {
    b += 5;
  } else if (key === 't') {
    r -= 5;
  } else if (key === 'h') {
    g -= 5;
  } else if (key === 'n') {
    b -= 5;
  }
}