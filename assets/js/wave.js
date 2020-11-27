//p5.js
let count = 0;
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight / 5);
  canvas.parent("wave-animation");
  background("#201F1F");
}

function draw() {
  noFill();
  
  if(count < 400){
    beginShape();
    stroke(count / 5, 255 - count * 0.5, 200, 100);
    for(x = 0; x < width; x++){
      let n = noise(x * 0.005, frameCount * 0.005);
      let y = map(n, 0, 1, 0, height);
      curveVertex(x, y);
    }
    endShape();
    count++;
    
  }
}