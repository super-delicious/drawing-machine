'use strict';
let button;
let controlDiv;
let visible = true;


var sketch = function(p) {

  // An array with nodes
  var nodes = [];

  var nodeCount = 200;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();

    // Create nodes
    createNodes();

    button = createButton("hide");
    button.mousePressed(toggleVis);

    controlDiv = select("#controls");
    console.log(controlDiv);
  };

  p.draw = function() {
    p.fill(205, 20);
    p.rect(0, 0, p.width, p.height);

    p.fill(0);
    for (var i = 0; i < nodes.length; i++) {
      // Let all nodes repel each other
      nodes[i].attractNodes(nodes);
      // Apply velocity vector and update position
      nodes[i].update();
      // Draw node
      p.ellipse(nodes[i].x, nodes[i].y, 5, 5);
    }
  };

  p.keyPressed = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas('fileName', 'png');

    if (p.key === 'c') clear();
    if (p.key == 'r' || p.key == 'R') {
      p.background(255);
      createNodes();
    }
  };

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

function toggleVis() {
  if (visible) {
    controlDiv.hide();
    visible = false;
    button.html("show");
  } else {
    controlDiv.show();
    visible = true;
    button.html("hide");
  }
}
