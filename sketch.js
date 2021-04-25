var fixedRect, movingRect, rect1, rect2, rect3;
var a = 20, b=30;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 70, 100);
  fixedRect.shapeColor = "red";
  
  rect1 = createSprite(200, 200, 70, 100);
  rect1.shapeColor="blue"
  
  rect2 = createSprite(100, 200, 70, 100);
  rect2.shapeColor="blue"
  rect3 = createSprite(600, 200, 70, 100);
  rect3.shapeColor="blue"
  movingRect = createSprite(400,100,110,65);
  movingRect.shapeColor = "green"
}

function draw() {
  background(25,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  text(movingRect.x,mouseX,mouseY-50)
  text(fixedRect.x,400,150)
  text(fixedRect.width/2+movingRect.width/2,100,100)


  if (isTouching(movingRect,rect1) || isTouching(movingRect,rect2) || isTouching(movingRect,rect3) || isTouching(movingRect,fixedRect)){
    movingRect.shapeColor ="yellow"
  }else{
    movingRect.shapeColor ="green"
  }

  if(add(46,70)>100){
    console.log("pass");
  }else{
    console.log("fail");
  }
  
  

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x-object2.x < object2.width/2+object1.width/2 &&
    object2.x-object1.x < object2.width/2+object1.width/2 &&
    object1.y-object2.y < object2.height/2+object1.height/2 &&
    object2.y-object1.y < object2.height/2+object1.height/2){

  return true;
}else{
  return false;
}

}

function add(a,b){
  return (a+b);
}


      
