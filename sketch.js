var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstaclesGroup;
var score;
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
 ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
foodGroup=createGroup();
obstaclesGroup=createGroup();  
 monkey.setCollider("rectangle",0,0,800,600); 
monkey.debug=true;
  
}


function draw() {
background(255);
  stroke("white");
  textSize(20);
  fill("white");
  stroke("black");
  textSize(20);
fill("black");
text("Survival Time : " + survivaltime,100,50);  
  if(ground.x>0){
    ground.x=ground.width/2;
  }
if(keyDown("space")){
  monkey.velocityY=-12;
}  
 monkey.velocityY=monkey.velocityY+0.8;
food();  block();
monkey.collide(ground);  
if(foodGroup.isTouching(monkey)){
foodGroup.destroyEach();
  survivaltime=survivaltime+2;
}
  
  
  drawSprites();  
}
function food(){
if(World.frameCount%100===0){
var fruit=createSprite(400,200,20,20);
fruit.addImage("banana",bananaImage);
  fruit.velocityX=-3;
fruit.scale=0.077;
  fruit.y=Math.round(random(50,340));
foodGroup.add(fruit); 
 
}}
function block(){
if(World.frameCount%300===0){
  var rock=createSprite(400,320,30,30);
  rock.addImage("stp",obstaceImage);
  rock.velocityX=-6;
  rock.scale=0.2;
  obstaclesGroup.add(rock);
  rock.lifetime=90;
}
}




