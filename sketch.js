
var bg, bgimg,bimg;
var track,track2,track3, trackimg;
var stone,stone1,stone2,stoneimg;
var cat,c,catimg,bigcat,cimg;
var cart,cartimg;
var obstacle;
var alienimg,dogimg,batimg;
var shield,milk;
var obstaclegroup,powergroup;
var b1,b2,b3,b4,b5;
var bgroup ,building;
var milk,milkimg,mgroup;
var map;
var start;
var stationimg
var score = 0;
var stationGroup


function preload(){

  trackimg = loadImage("images/track.png");
  stoneimg = loadImage("images/stones.png")
  bgimg = loadImage("images/img.jpg");

  cartimg = loadImage("images/car.png")
  catimg = loadImage("images/cat.png");

  alienimg = loadImage("images/alien.png");
  dogimg = loadImage("images/dog.png");
  batimg = loadImage("images/bat.png");
  shield = loadImage("images/shield.png");

  b1 = loadImage("images/bld01.png");
  b2 = loadImage("images/bld02.png");
  b3 = loadImage("images/bld03.png");
  b4 = loadImage("images/bld04.png");
  b5 = loadImage("images/bld05.png");

  milkimg = loadImage("images/milk.png");
  mapimg = loadImage("images/map.jpg");
  bigcatimg = loadImage("images/mumma.png");

  stationimg = loadImage("images/Station.png")

}

function setup() {
  createCanvas(1400,780);

  bg = createSprite(700,300,10,80);
  bg.addImage('b',bgimg);
  bg.scale = 3;
  bg.velocityY = 5
  
   
  stone = createSprite(700,300,50,780);
  stone.addImage('s',stoneimg);
  stone.velocityY = 5 
  

  stone1 = createSprite(450,300,50,780);
  stone1.addImage('s',stoneimg);
  stone1.velocityY = 5
  
  stone2 = createSprite(950,300,50,780);
  stone2.addImage('s',stoneimg);
  stone2.velocityY = 5  
  
  track = createSprite(700,300,1000,600);
  track.addImage('a',trackimg);
  track.scale = 1;
  track.velocityY = 5  
 


  track2 = createSprite(450,300,1000,600);
  track2.addImage('a',trackimg);
  track2.scale = 1;
  track2.velocityY = 5 
 
  

  track3 = createSprite(950,300,1000,600);
  track3.addImage('a',trackimg);
  track3.scale = 1;
  track3.velocityY = 5 
 
 

  cart = createSprite(700,500,50,50);
  cart.addImage('z',cartimg);
  cart.scale = 1.2
  

  cat = createSprite(700,530,50,50);
  cat.addImage('y',catimg);
  cat.scale = 0.05

  obstaclegroup = createGroup();
  
  bgroup = createGroup();
  mgroup = createGroup();
  mummacatGroup = createGroup();
  stationGroup = createGroup();


  
}

function draw() {

  background("white"); 
  
  
  if(bg.y>700){
    bg.y = 300;
  }

   if(track.y>700){
     track.y = 300;
   }
   if(track2.y>700){
    track2.y = 300;
  }
  if(track3.y>700){
    track3.y = 300;
  }

   if(stone.y>500){
    stone.y = 300;
  }
  if(stone1.y>500){
    stone1.y = 300;
  }
  if(stone2.y>500){
    stone2.y = 300;
  }

  spawnobstacles();
    spawStation();
    spawnmilk();
    spawnmumma();
  
   if(keyWentDown("Left_Arrow")){
    if(cart.x>450 && cart.x<951){
      cart.x =cart.x-250;
      cat.x = cat.x-250;
  }
  }

 if(keyWentDown("Right_Arrow")){
  if(cart.x>449 && cart.x<950){
  cart.x =cart.x+250;
  cat.x = cat.x+250;
  
 }
}

if(mgroup.isTouching(cart)){
  mgroup.destroyEach();
  score = score+1;
}
if(obstaclegroup.isTouching(cart)){
    obstaclegroup.destroyEach()
    
}


  



   
   

   /*  obstaclegroup.destroyEach();
     mgroup.destroyEach();
     track.velocityY=0;
     track2.velocityY=0;
     track3.velocityY=0;
     stone.velocityY=0;
     stone1.velocityY=0;
     stone2.velocityY=0;
     bg.velocityY=0;
     bgroup.setVelocityYEach(0);*/
  
  drawSprites();
  textSize(50);
  fill("white");
  text("Score: "+ score,100,50);
  

 
  }

function spawnobstacles(){
if(frameCount%211 === 0){
obstacle = createSprite(550,0,20,20)
obstacle.velocityY = 3 + Math.round(frameCount/500)


var pos = Math.round(random(1,3))
switch(pos){
  case 1:obstacle.x = 450
  break; 
  case 2:obstacle.x = 950
  break;
  case 3:obstacle.x = 700
  break;
  default: break;
  }


var num = Math.round(random(1,3))

switch(num){
case 1:obstacle.scale = 0.2;
obstacle.addImage(alienimg);

break;
case 2:obstacle.scale = 0.15;
obstacle.addImage(dogimg)

break;
case 3:obstacle.scale = 0.5;
obstacle.velocityY=Math.round(random(2,8))
obstacle.velocityX=Math.round(random(-8,8))
if(obstacle.velocityX<0){
obstacle.x=1200
}
if(obstacle.velocityX>0){
  obstacle.x=200
  }
obstacle.addImage(batimg)
break;
default: break;
}
obstacle.lifetime = 400

obstaclegroup.add(obstacle)

}



}

function spawStation(){
if(frameCount%300===0){
  building=createSprite(100,0,20,20)  
building.velocityY = 3 +  Math.round(frameCount/500)
building.scale = 0.8
var rand=Math.round(random(1,5));
var pos = Math.round(random(1.2))
switch(pos){
  case 1:building.x = 150
  break; 
  case 2:building.x = 1200
  break;
   default: break;
  }

switch(rand)
{
case 1:building.scale = 0.9;
building.addImage(b1)
break;
case 2:building.scale = 0.9
building.addImage(b2)
break;
case 3:building.scale = 0.9
building.addImage(b3)
break;
case 4:building.scale = 0.9
building.addImage(b4)
break;
case 5:building.scale = 0.9
building.addImage(b5)
break;
default: break;
}
bgroup.add(building)

building.lifetime = 400


}

}


function spawnmilk(){
  if(frameCount%400===0){
    milk = createSprite(550,0,20,20)
    milk.velocityY = 3 + Math.round(frameCount/500)

        
    milk.addImage(milkimg)
    milk.scale=0.2
    var pos = Math.round(random(1,3))
    switch(pos){
      case 1:milk.x = 450
      break; 
      case 2:milk.x = 950
      break;
      case 3:milk.x = 700
      break;
      default: break;
      }
    
      milk.lifetime = 400
    
  mgroup.add(milk)
  }
}
function changeOver(){

  start.hide();
  map.lifetime = 0;
  bigcat.visible =false;
  c.visible = false;    
      gameState = PLAY

}

function spawnmumma(){

  if(frameCount%23457===0){
    station=createSprite(100,0,20,20)  
  station.velocityY = 3
  station.scale = 0.8
  station.addImage(stationimg)
  var pos = Math.round(random(1.2))
  switch(pos){
    case 1:station.x = 150
    break; 
    case 2:station.x = 1200
    break;
    default: break;
    }
stationGroup.add(station)
   mummacat = createSprite(550,0,20,20)
mummacat.velocityY = 8 
mummacat.scale = 0.5
mummacat.addImage(bigcatimg)
var pos = Math.round(random(1,3))
switch(pos){
  case 1:mummacat.x = 450
  break; 
  case 2:mummacat.x = 950
  break;
  case 3:mummacat.x = 700
  break;
  default: break;
  }
mummacatGroup.add(mummacat)

  }

}