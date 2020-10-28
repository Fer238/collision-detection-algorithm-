var Fixedrect,Movingrect;

function setup(){
  createCanvas(600,400);
  
  Fixedrect=createSprite(200,200,50,50);
  Fixedrect.debug=true;
  Movingrect=createSprite(500,200,50,50);
  Movingrect.debug=true;
  
  
}

function draw(){
  background(0);
  Movingrect.x=mouseX;
  Movingrect.y=mouseY;
 //collision detection 
 if(Movingrect.x-Fixedrect.x<Movingrect.width/2+Fixedrect.width/2 &&
  Fixedrect.x-Movingrect.x<Movingrect.width/2+Fixedrect.width/2 &&
  Movingrect.y-Fixedrect.y<Movingrect.height/2+Fixedrect.height/2 &&
  Fixedrect.y-Movingrect.y<Movingrect.height/2+Fixedrect.height/2 
   ){
   Movingrect.shapeColor="blue";
   Fixedrect.shapeColor="blue";
 }else{
   Movingrect.shapeColor="red";
   Fixedrect.shapeColor="red";
   
 }
  
  
  drawSprites();
  
}