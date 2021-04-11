
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbin, paper;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(110, 620, 20);
ground = new Ground(400,700,1600,20);
//left = new Dustbin(920,660,20,150);
bottom= new Dustbin(1000,660,200,20);
right = new Dustbin(1080, 660,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);

	paper.display();
	ground.display();
	//left.display();
	right.display();
	bottom.display();


  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x:63, y:-70})
	

}


}

