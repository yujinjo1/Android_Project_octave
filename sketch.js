let mode = 0;
let sounds = [];

function preload() {
  soundFormats("mp3", "ogg");
  for (var i = 0; i < 24; i++) {
    sounds[i] = loadSound(`sound/piano${i}.mp3`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill(255);
  strokeWeight(windowWidth / 300);
  for (var i = 0; i < 14; i++) {
    rect(i * width / 14, height - height / 3, width / 14, height / 3, 0, 0, 10, 10);
  }
  fill(0);
  stroke(220);
  for (var i = 0; i < 6; i++) {
    if (i % 4 != 2) {
      rect(width / 28 + i * width / 14, height - height / 3, width / 14, height / 6, 0, 0, 10, 10);
      rect(width / 28 + i * width / 14 + width / 2, height - height / 3, width / 14, height / 6, 0, 0, 10, 10);
    }
  }
}

function changeMode_piano() {
  if (mouseY > windowHeight - height / 6) {
    for (var i = 0; i < 14; i++) {
      if (mouseX > i * width / 14 && mouseX < (i + 1) * width / 14) mode = i;
    }
  }
  if (mouseY < windowHeight - height / 6) {
    if (mouseX < width / 28) mode = 0;
    if (mouseX > width / 28 && mouseX < (width / 28) * 3) mode = 14;
    if (mouseX > (width / 28) * 3 && mouseX < (width / 28) * 5) mode = 15;
    if (mouseX > (width / 28) * 5 && mouseX < (width / 28) * 6) mode = 2;
    if (mouseX > (width / 28) * 6 && mouseX < (width / 28) * 7) mode = 3;
    if (mouseX > (width / 28) * 7 && mouseX < (width / 28) * 9) mode = 16;
    if (mouseX > (width / 28) * 9 && mouseX < (width / 28) * 11) mode = 17;
    if (mouseX > (width / 28) * 11 && mouseX < (width / 28) * 13) mode = 18;
    if (mouseX > (width / 28) * 13 && mouseX < (width / 28) * 14) mode = 6;
    if (mouseX > (width / 28) * 14 && mouseX < (width / 28) * 15) mode = 7;
    if (mouseX > (width / 28) * 15 && mouseX < (width / 28) * 17) mode = 19;
    if (mouseX > (width / 28) * 17 && mouseX < (width / 28) * 19) mode = 20;
    if (mouseX > (width / 28) * 19 && mouseX < (width / 28) * 20) mode = 9;
    if (mouseX > (width / 28) * 20 && mouseX < (width / 28) * 21) mode = 10;
    if (mouseX > (width / 28) * 21 && mouseX < (width / 28) * 23) mode = 21;
    if (mouseX > (width / 28) * 23 && mouseX < (width / 28) * 25) mode = 22;
    if (mouseX > (width / 28) * 25 && mouseX < (width / 28) * 27) mode = 23;
    if (mouseX > (width / 28) * 27 && mouseX < (width / 28) * 28) mode = 13;
  }
}

function soundPlay() {
  if (mouseX < windowWidth && mouseY > windowHeight - height / 3 && mouseY < windowHeight) {
    changeMode_piano();
    sounds[mode].play();
    sounds[mode].amp(1);
  }
}

function mousePressed() {
  soundPlay();
}

function mouseReleased() {
  sounds[mode].amp(0, 1);
}