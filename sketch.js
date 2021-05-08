
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stand1,stand2;
var score=0;

var b1,b2,b3,b4,b5,b6,b7;
var block1,block2,block3,block4,block5;
var Ublock1,Ublock2,Ublock3;
var Upblock6;

var block6,block7,block8,block9,block10;
var Ublock4,Ublock5,Ublock6;
var UPblock7;

var polygon1,slingshot;
{
	
}

function setup() {
	createCanvas(1200,700);


  engine = Engine.create();
  
	world = engine.world;
    ground=new Ground(600,690,1200,40)
	stand1=new Ground(500,380,400,30);
  stand2=new Ground(1000,250,300,30)
  b1=new BaseClass(350,370,40,40);
  b2=new BaseClass(400,370,40,40);
  b3=new BaseClass(450,370,40,40);
  b4=new BaseClass(500,370,40,40);
  b5=new BaseClass(550,370,40,40);
  b6=new BaseClass(600,370,40,40);
  b7=new BaseClass(650,370,40,40);
	block1=new BaseClass(400,330,40,40);
  block2=new BaseClass(450,330,40,40);
  block3=new BaseClass(500,330,40,40);
  block4=new BaseClass(550,330,40,40);
  block5=new BaseClass(600,330,40,40);
  Ublock1=new BaseClass(450,250,40,40);
  Ublock2=new BaseClass(500,250,40,40);
  Ublock3=new BaseClass(550,250,40,40);
  Upblock6=new BaseClass(500,220,40,40);

  block6=new BaseClass(1000,230,40,40);
  block7=new BaseClass(950,230,40,40);
  block8=new BaseClass(900,230,40,40);
  block9=new BaseClass(1050,230,40,40);
  block10=new BaseClass(1100,230,40,40);
  Ublock4=new BaseClass(950,180,40,40);
  Ublock5=new BaseClass(1000,180,40,40);
  Ublock6=new BaseClass(1050,180,40,40);
  UPblock7=new BaseClass(1000,130,40,40);
  
  polygon1=new Polygon(200,300,30);
  slingshot = new Rope({x:200, y:300},polygon1.body);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("aqua");
 fill("black")
 text("Score: "+score,20,20)

  ground.display();
  stand1.display();
  stand2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  Ublock1.display();
  Ublock2.display();
  Ublock3.display();
  Upblock6.display();

 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 Ublock4.display();
 Ublock5.display();
 Ublock6.display();
 UPblock7.display();

 b1.score();
 b2.score();
 b3.score();
 b4.score();
 b5.score();
 b6.score();
 b7.score();
 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 Ublock1.score();
 Ublock2.score();
 Ublock3.score();
 Upblock6.score();
 block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
Ublock4.score();
Ublock5.score();
Ublock6.score();
UPblock7.score();

 polygon1.display();
 slingshot.display();
  drawSprites();
 
}

function mouseDragged(){
  
      Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
 //if(bodyB=bodyB){
    slingshot.fly();
  //gameState = "launched";
 //}
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(polygon1.body);
  }
}



