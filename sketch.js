var speed,weight;
var bullet,wall;
var thickness = random(22,83);

function setup() 
{
  createCanvas(1600,400);
  bullet= createSprite(50, 200, 10, 50);
  bullet.shapeColor("white")
  wall= createSprite(1200,200,thickness,height/2);
 wall.shapeColor(80,80,80);

  speed=random (223,321);
  weight=random(30,52);
}

function draw() {
  background(80,80,80);  
  bullet.velocityX = speed;

//  if(bullet.x - wall.x <(wall.widht/2 + car.width/2))
  //{
  // bullet.velocityX=0;
  // var deformation = 0.5 * weight * speed* speed/22509;
   /* if(deformation>180);
    {
     bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100);
    {
     bullet.shapeColor=color(230,230,0);
     }
    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
    }*/
    //if(bu)
  


if(hasColided(bullet,wall))
{
  bullet.velocityX=0
  var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);


  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}
function hasColided(lbullet,lwall)
{
 bulletRightEdge=bullet.x +1 ;bullet.width
 wallLeftEdge=wall.x;
 if(bulletRightEdge>=wallLeftEdge)
 {
   return true
 }
 return false;
}