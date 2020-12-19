class Rect {
  constructor(x=0, y=0, col=0) {
    this.height = 25;
    this.width = 25;
    this.x = x * this.width;
    this.y = y * this.height;
    this.color = col;
  }

  draw() {
    if (this.color == 0)
      fill(100); // Grey
    if (this.color == 1)
      fill(0, 220, 0); // Green
    if (this.color == 2)
      fill(0, 0, 220); // Blue
    rect(this.x, this.y, this.width, this.height);
  }

  checkMouse(x, y) {
    if (x > this.x && x < this.x + this.width)
    {
      if (y > this.y && y < this.y + this.height)
      {
        if (this.color == 1)
          console.log('green');
        if (this.color == 0)
          console.log('grey');
        if (this.color == 2)
          console.log('blue');
        console.log(x/this.width, y/this.height);
      }
    }
  };
};

var levelStr;
var squares = [];

function preload() {
  levelStr = loadStrings('./levels/level1.txt');
}

function setup() {
  createCanvas(800,400);

  // Read Level File
  let temp = new Rect();
  for (var i = 0; i < height/temp.height; i++)
  {
    var rowOfSquares = [];
    let rowStr = levelStr[i];
    for (var j = 0; j < width/temp.width; j++)
    {
      if (rowStr[j] == 0) {
        rowOfSquares.push(new Rect(j, i));
      } else if (rowStr[j] == 1) {
        rowOfSquares.push(new Rect(j, i, 1));
      } else if (rowStr[j] == 2) {
        rowOfSquares.push(new Rect(j, i, 2));
      }
    }
    squares.push(rowOfSquares);
  }
}

function draw() {
  background(0,220,0);  

  stroke(0,0,0,0); 
  fill(100, 100, 100);
  for (var i = 0; i < squares.length; i++)
  {
    for (var j = 0; j < squares[i].length; j++)
    {
      squares[i][j].checkMouse(mouseX, mouseY);
      squares[i][j].draw();
    }
  }

  stroke(255);
  fill(0);
  line(mouseX, 0, mouseX, mouseY);
  line(0, mouseY, mouseX, mouseY);
  line(mouseX, mouseY, mouseX, height);
  line(mouseX, mouseY, width, mouseY);

  fill(255);
  textSize(32);
  text("Level 1", 10, 390);
}