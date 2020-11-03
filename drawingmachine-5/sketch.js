let array = [];
let buttonStroke;
//let button2;
let slider;
let noiseX = 0.0;
let strokeWidth = 5;
let colorPicker;
let button;
let controlDiv;
let visible = true;
var sketch = function(p) {

  // An array with nodes
let nodes = [];

let nodeCount = 200;



function setup() {

  drawGrid();
//  strokeWeight(r, g, b);

  buttonStroke = createButton("stroke weight");
  //buttonStroke.parent('buttonS');
  //button2 = createButton("stroke color");

  //  button1.mousePressed(increaseStrokeWeight);
  //button2.mousePressed(changeStrokeColor);

  slider = createSlider(0, 70, 60);
  // color picker
  createP("Background Color Picker");
  createCanvas(windowWidth, windowHeight);
  colorPicker = createColorPicker('#b5919f');
  //  colorPicker.position(230, 435);
  colorPicker.parent('colors');

  button = createButton("Hide Instruction");
  button.mousePressed(toggleVis);
  button.parent('show');

  controlDiv = select("#controls");
  console.log(controlDiv);

  p.createCanvas(p.windowWidth, p.windowHeight);
  p.noStroke();

  // Create nodes
  createNodes();

}

function draw() {

  background(colorPicker.color());

  background(2, 2, 2, 0);
  strokeWeight(strokeWidth);

  p.fill(255, 20);
  p.rect(0, 0, p.width, p.height);

  p.fill(0);
  for (var i = 0; i < nodes.length; i++) {
    // Let all nodes repel each other
    nodes[i].attractNodes(nodes);
    // Apply velocity vector and update position
    nodes[i].update();
    // Draw node
    p.ellipse(nodes[i].x, nodes[i].y, 10, 10);


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
    background(25);

    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  } else if (key === 'c') {
    // clear the canvas
    clear();
  } else if (key == 'r' || p.key == 'R') {
      p.background(255);
      createNodes();
    }
  }

  return false;
}



function toggleVis() {
  if(visible) {
    controlDiv.hide();
    visible = false;
    button.html("Show Instruction");
  } else {
    controlDiv.show();
    visible = true;
    button.html("Hide Instruction");
  }
}




 function createNodes() {
   nodes = [];
   for (var i = 0; i < nodeCount; i++) {
     nodes.push(new Node(
       p.width / 2 + p.random(-1, 1),
       p.height / 2 + p.random(-1, 1),
       5,
       p.width - 5,
       5,
       p.height - 5
     ));
   }
 }

};

var myp5 = new p5(sketch);
