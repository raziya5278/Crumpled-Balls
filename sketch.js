
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dustbin, paper;
var gameState;
var engine, world;

function preload() {
	dustbinimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	gameState = "start";

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	ground=new Ground(width/2,670,width,20);
	dustbin=new Dustbin(1200,650);
	paper=new Paper(3000,500)

	World.add(world, ground);

}

function draw() {
  rectMode(CENTER);
  background(230);

  ground.display();
  dustbin.display();
  paper.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	}
}
	
