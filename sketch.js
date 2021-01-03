
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobDiameter = 20

function setup() {
	createCanvas(displayWidth/2,displayHeight/2);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof = new Roof(400,50,400,20)
   bob1 = new Pendulum(200,350,20)
   bob2 = new Pendulum(300,350,20)
   bob3 = new Pendulum(400,350,20) 
   bob4 = new Pendulum(100,350,20) 
   bob5 = new Pendulum(0,350,20) 
   chain1 = new Chain(bob1.body,roof.body,-bobDiameter*2,0)
   chain2= new Chain(bob2.body,roof.body,-bobDiameter*0,0)
   chain3= new Chain(bob3.body,roof.body,-bobDiameter*-2,0)
   chain4= new Chain(bob4.body,roof.body,-bobDiameter*4,0)
   chain5= new Chain(bob5.body,roof.body,-bobDiameter*6,0)

	
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY})
  }


