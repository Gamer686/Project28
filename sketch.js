
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
/*const Render = Matter.Render;
const Constraint = Matter.Constraint;*/
var tree;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1050,580);
	

/*var render = Render.create({
	element:document.Body,
	engine:engine,
	options:{
		width: 1300,
		height: 600,
		wireframes:false
	}
});*/
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  drawSprites();
 
}



