var trex, trex_animation;
var ground, ground_img;

function preload(){
  trex_animation = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground_img = loadImage("ground2.png");
}

function setup(){
  createCanvas(600, 200);

   trex = createSprite(50, 180, 20, 50);
   trex.addAnimation("running",trex_animation);
   trex.scale = 0.5;

   ground = createSprite(200, 180, 300, 20);
   ground.addImage(ground_img);

}

function draw(){
  background(220);

  ground.velocityX = -2;

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY+0.8;

  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  trex.collide(ground);

  drawSprites();
}