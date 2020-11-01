var rect1
var rect2

function setup() {
  createCanvas(800,400);
 rect1= createSprite(400, 200, 50, 50);
rect2=createSprite(400,100,50,50);
}

function draw() {
  background(255,255,255);  
  rect1.y=World.mouseY;
  rect1.x=World.mouseX
  rectIC(rect1,rect2);
  drawSprites();
}

function rectIC(r1,r2){
if(r1.x-r2.x<r1.width/2+r2.width/2
  &&r2.x-r1.x<r1.width/2+r2.width/2){
 r1.shapeColor="yellow";
 r2.shapeColor="green";
  }

if(r1.y-r2.y<r1.height/2+r2.height/2
  &&r2.y-r1.y<r1.height/2+r2.height/2){
    r1.shapeColor="blue";
    r2.shapeColor="red";
  }
}