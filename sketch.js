var bullet,wall,thickness,speed,weight;
var thickness1,weight1,deformation,speedC;
var state = "start";
var diff;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 60, 20);
  wall = createSprite(1200,200,47,height/2);
  wall.shapeColor = (80,80,80);
}

function preload(){
  
}

function draw() {
  background(255,255,255);  

  bullet.depth = wall.depth + 4;

  weight = Math.round(random(30,52))
  thickness = Math.round(random(22,83));

  if(state === "start"){
      text("press space to start",400,150);
      if(keyWentUp("space")){
        speed = Math.round(random(223,321));
        spawn();
        state = "play";
      }
  }

  if(isTouching(bullet,wall)){
    bullet.velocityX = 0;
    
    if(bullet.x - wall.x > 40){
       diff = bullet.x - wall.x;
       bullet.x = bullet.x - diff;
    }

    deformation = ((0.5 * weight1 * speedC * speedC) / (thickness1 * thickness1 * thickness1));
    
    if(deformation > 10){
        wall.shapeColor = "red";
    }

    if((deformation === 10)||(deformation < 10)){
        wall.shapeColor = "green";
    }

  }

  drawSprites();
}


function spawn(){
    bullet.velocityX = speed;
    speedC = speed;
    weight1 = weight;
    thickness1 = thickness;
    wall.width = thickness; 
}

function isTouching(obj1,obj2)
{
  if (obj2.x - obj1.x < (obj1.width/2) + (obj2.width/2))
     {
      return true;
     }
  else
  {
    return false;
  }

}