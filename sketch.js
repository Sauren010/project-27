var bob;
var roof;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(260,300,20);
	bob2 = new Bob(300,300,20);
	bob3 = new Bob(340,300,20);
	bob4 = new Bob(380,300,20);
	bob5 = new Bob(420,300,20);
	roof = new Roof(350,50,400,40);
	//rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2, 0)
	rope1 = new Rope(bob1.body,{x:260,y:50})
	rope2 = new Rope(bob2.body,{x:300,y:50})
	rope3 = new Rope(bob3.body,{x:340,y:50})
	rope4 = new Rope(bob4.body,{x:380,y:50})
	rope5 = new Rope(bob5.body,{x:420,y:50})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:90});
  }
}