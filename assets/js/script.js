//fixing refresh issues
window.beforeunload = function () {
     window.scrollTo(0, 0);
    document.querySelector('html').style.scrollBehavior = '';
}

//closing nav bar
function closeNav() {
    document.getElementById("navbar").style.height = "0%";
    document.getElementById("open-menu").style.display = "block";
}

//openin nav bar
function openNav(){
    document.getElementById("navbar").style.height = "100%";
    document.getElementById("open-menu").style.display = "none";
}

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