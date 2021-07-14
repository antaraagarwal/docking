var iss, issImage;
var spacecraft, spacecraftImage1
var hasDocked = false;
var backgroundImage


function preload(){
  issImage=loadImage("./Docking-undocking/iss.png");
  spacecraftImage1=loadImage("./Docking-undocking/spacecraft1.png");
  backgroundImage=loadImage("./Docking-undocking/spacebg.jpg")
  
}

function setup() {
  createCanvas(1300,700);

  iss= createSprite(500,250,20,20)
  iss.addImage(issImage);

  spacecraft= createSprite(700,600,20,20)
  spacecraft.addImage(spacecraftImage1);
  spacecraft.scale=0.3
 

  
}



function draw() {
  background(backgroundImage); 
  
  
  if (keyDown(RIGHT_ARROW)) {
    spacecraft.velocityX=4
    spacecraft.velocityY =0
    spacecraft.changeImage("./spacecraft4.png")
  }
   
    if (keyDown(LEFT_ARROW)) {
    spacecraft.velocityX=-4
    spacecraft.velocityY =0
    spacecraft.changeImage("./spacecraft3.png")
  }
   
    if (keyDown(UP_ARROW)) {
    spacecraft.velocityY =-4
    spacecraft.velocityX=0
    spacecraft.changeImage("./spacecraft2.png")
  }
   
    if (keyDown(DOWN_ARROW)) {
    spacecraft.velocityY= 4
    spacecraft.velocityX=0
    spacecraft.changeImage("./spacecraft2.png")
  }

  if (spacecraft.isTouching(iss)){
    text("Docking Successful", 700, 600, 50, 40)
    stroke(25)

  }

  drawSprites();
}

