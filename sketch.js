
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var tree;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var boy;
var ground;
var stone;
var launcher;
var launchingForce=100;
function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;


	

	tree = new Tree(1050,350);
	mango1= new Mango(1100,100,10);
	mango2= new Mango(1170,130,15);
	mango3= new Mango(1010,140,20);
	mango4= new Mango(1000,70,25);
	mango5= new Mango(1100,70,23);
	mango6= new Mango(1000,230,30);
	mango7= new Mango(900,230,35);
	mango8= new Mango(1140,150,40);
	mango9= new Mango(1100,230,45);
	mango10= new Mango(1200,200,10);
	mango11= new Mango(1120,50,20);
	mango12= new Mango(900,160,10);
 ground= new Ground(width/2,600,width,20);
 stone=new Stone(120,450,30);
	launcher= new Launcher(stone.body,{x:120,y:450})
  var render = Render.create({
	element:document.Body,
	engine:engine,
	options:{
		width: 1300,
		height: 600,
		wireframes:false
	}

});
	Engine.run(engine);
  
}


function draw() {
	background(230);
	textSize(25)
	text("press Space to get a second chane to play!!",50,50)
	image(boy,90,370,200,300);
  rectMode(CENTER);
  
 
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  ground.display();
  stone.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);


  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	launcher.fly()
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:120,y:450})
		launcher.attach(stone.body);
	}
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}




