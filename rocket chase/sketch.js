var rocket, pebble, obstacle1,obstacle2 , obstacle3, bg
var rocketImg, pebbleImg, obstacle1Image,obstacle2Image , obstacle3Image, backgroundImage,obstaclesGroup
var left, up, down
var GAMESTATE = "start"
var gamover, gameoverImg, restart, restartImg

function preload() {
  backgroundImage = loadImage("bg.jpeg");
  pebbleImg= loadImage("pebble.png");
  rocketImg = loadImage("rocket.png");
  obstacle1Image = loadImage("obstacle1.png")
  obstacle2Image = loadImage("obstacle2.png")
  obstacle3Image = loadImage("obstacle3.png")
  left = loadImage("left.png")
  down = loadImage("down.png")
  up = loadImage("up.png")
  gameoverImg = loadImage("gameover.png")
  restartImg = loadImage("restart.png")


  
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  rocket = createSprite(200,400,20,20)
  rocket.addImage(rocketImg)
  rocket.scale=0.5
  obstaclesGroup=new Group()
  
  
  

}

function draw() {
  background(backgroundImage);
  
  if (keyWentDown(LEFT_ARROW)) {
    rocket.addImage(left)
    rocket.velocityX=-2

  }

  if (keyWentDown(UP_ARROW)) {
    rocket.addImage(up)
    rocket.velocityY=2
    
  }

  if (keyWentDown(DOWN_ARROW)) {
    rocket.addImage(down)
    rocket.velocityY=-2
  }

  if (keyWentDown(RIGHT_ARROW)) {
    rocket.addImage(rocketImg)
    rocket.velocityX=2
  }

  if (rocket.isTouching(obstaclesGroup)) {
    GAMESTATE = "End"
    obstaclesGroup.setVelocityEach=0
    obstaclesGroup.destroyEach()
    gameover.createSprite(700,700)
    gameover.addImage(gameoverImg)
    restart.createSprite(700,650)
    restart.addImage(restartImg)


  }



  spawnObstacles()
  drawSprites()
  spawnPebbles()

}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(1400,random(100,400),10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(4)
    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1Image);
              break;
      case 2: obstacle.addImage(obstacle2Image);
              break;
      case 3: obstacle.addImage(obstacle3Image);
              break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.3;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  
  
  }
  
}

function spawnPebbles() {
  var pebble = createSprite(random(100,1400),random(100,1400),10,20)
  pebble.addImage(pebbleImg)
  pebble.scale=0.06
  if (rocket.isTouching(pebble)) {
    pebble.destroy()
  }
}










