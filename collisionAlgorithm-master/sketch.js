var wall, bullet;
var speed,weight,deformation;

function setup() {
  createCanvas(1500,800);
  
  speed = random(233,321);
  thiccness = random(22,83)
  weight = (30,52)
  deformation = (0.5*weight*speed*speed)/(thiccness*thiccness*thiccness)
  
  wall = createSprite (1200, 400, thiccness, height/2);
  bullet = createSprite (500,400,50,25)
  bullet.shapeColor = "grey";
  

  
  
}


function draw() {
  background(0);  
  
  bullet.velocityX = speed;

  if (isTouching(bullet,wall) && deformation < 10){
    wall.shapeColor = "green";
    bullet.velocityX = 0;
  }
  else{
    wall.shapeColor = "red";
    bullet.velocityX = 0;         
    }
  }


  

  drawSprites();
}

//function isTouching(object1,object2){
  //if (object1.x - object2.x < object2.width/2 + object1.width/2
    //&& object2.x - object1.x < object2.width/2 + object1.width/2
    //&& object1.y - object2.y < object2.height/2 + object1.height/2
    //&& object2.y - object1.y < object2.height/2 + object1.height/2) {
    //  return true;
//}
//  else {
//    return false;
//  }
//}