var fixedRect, movingRect, gameObject_1, gameObject_2, gameObject_3,
gameObject_4;

function setup() {
  createCanvas(800,400);

   fixedRect = createSprite(200, 50, 50, 50);
   fixedRect.shapeColor = 'blue';
   movingRect = createSprite(200, 100, 70, 80);
   movingRect.shapeColor = 'blue';
   gameObject_1 = createSprite(100, 100, 50, 50);
   gameObject_1.shapeColor = 'black';
   gameObject_2 = createSprite(200, 100, 50, 50);
   gameObject_2.shapeColor = 'green';
   gameObject_3 = createSprite(300, 100, 50, 50);
   gameObject_3.shapeColor = 'brown';
   gameObject_4 = createSprite(400, 100, 50, 50);
   gameObject_4.shapeColor = 'pink';
   gameObject_3.velocityX = -5;
   gameObject_1.velocityX = 5;
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //if(isTouching(movingRect, gameObject_4)){
   // movingRect.shapeColor =  'yellow';
    //gameObject_4.shapeColor  =  'yellow';   
   //}
   //else{
    //movingRect.shapeColor = 'blue';
    //gameObject_4.shapeColor = 'blue';
  // }
  bounceOff(gameObject_3, gameObject_1);
  
  drawSprites();
}