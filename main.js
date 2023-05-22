function preload(){
img = loadImage('image.jpg');
}

function setup() {
canvas = createCanvas(640, 480);
canvas.position(110, 250);
}



function draw(){
fill(0, 128, 0);
stroke(0, 128, 0);
circle(500, 50, 70);
circle(500, 350, 70);
circle(200, 350, 70);
circle(200, 50, 70);
image(img, 300, 150, 150, 120);
}


