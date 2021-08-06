var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImg,leaveImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leaveImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

var rand =  Math.round(random(1,100))

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

rabbit.x = World.mouseX;

createApples();
createLeaves()
  drawSprites();
}

function createApples(){
  if(frameCount %70===0){
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg)
apple.scale = 0.05
apple.velocityY = 1
apple.y = random(10,100)
  }
}

function createLeaves(){
  if(frameCount %80===0){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage(leaveImg)
  leaves.scale = 0.05
  leaves.velocityY = 1
  leaves.y = random(10,100)
  }
  }
  
