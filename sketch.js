var fixed,moving;

function setup() {
  createCanvas(800,400);

moving=createSprite(100, 200, 50, 50);
moving.shapeColor="red";
moving.debug=true;
moving.velocityX=2;

fixed=createSprite(400, 200, 50, 50);
fixed.shapeColor="red";
fixed.debug=true;
fixed.velocityX=-2;
}

function draw() {
  background(255,255,255); 
  //moving.x=World.mouseX;
  //moving.y=World.mouseY;
  
if(fixed.x-moving.x<moving.width/2+fixed.width/2 &&
  moving.x-fixed.x<moving.width/2+fixed.width/2){
  //moving.y-fixed.y<moving.height/2+fixed.height/2 &&
  //fixed.y-moving.y<moving.height/2+fixed.height/2 ){
// moving.shapeColor="green";
// fixed.shapeColor="green";
// }else{
//   moving.shapeColor="red";
// fixed.shapeColor="red";
moving.velocityX=moving.velocityX*(-1)
fixed.velocityX=fixed.velocityX*(-1)
}
  drawSprites();
}