let num = 1,
  maxNumbers;

let x = 0,
  y = 0,
  prevX = 0,
  prevY = 0;

let xDir = 1,
  yDir = 0;

let segmentLength = 25,
  segmentCount = -1,
  countBeforeDirectionChange = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  let rows = floor(width / segmentLength);
  let columns = floor(height / segmentLength);

  if (height > width) maxNumbers = rows * rows;
  else maxNumbers = columns * columns;

  background(0);

  fill(255);
  stroke(255);
  frameRate(240);
}

function draw() {
  translate(width / 2, height / 2);
  segmentCount++;

  if (isPrime(num)) circle(x, y, 20);

  line(x, y, prevX, prevY);

  if (segmentCount > countBeforeDirectionChange) {
    segmentCount = 0;

    if (xDir == 1) {
      xDir = 0;
      yDir = -1;
    } else if (yDir == -1) {
      xDir = -1;
      yDir = 0;
    } else if (xDir == -1) {
      xDir = 0;
      yDir = 1;
    } else if (yDir == 1) {
      xDir = 1;
      yDir = 0;
    }
    countBeforeDirectionChange++;
  }

  prevX = x;
  prevY = y;

  x += segmentLength * xDir;
  y += segmentLength * yDir;

  segmentCount++;
  num++;

  if (num > maxNumbers) noLoop();
}

function isPrime(number) {
  let to = Math.sqrt(num);

  if (number == 1) return false;

  for (let i = 2; i <= to; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
