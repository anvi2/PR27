
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

  roof = new Roof(600,90,500,50);

	//Create the Bodies Here.
	bob1 = new Bob(400,500,50);
  bob2 = new Bob(500,500,50);
	bob3 = new Bob(600,500,50);
	bob4 = new Bob(700,500,50);
	bob5 = new Bob(800,500,50);

	

  rope1 = new Rope(roof.body,bob1.body,-200,0);
  rope2 = new Rope(roof.body,bob2.body,-100,0);
  rope3 = new Rope(roof.body,bob3.body,0,0);
  rope4 = new Rope(roof.body,bob4.body,100,0);
  rope5 = new Rope(roof.body,bob5.body,200,0);

	Engine.run(engine);
  
}


function draw() {
 
  background(202);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-800,y:0})
  }

  
  drawSprites();
 
}



