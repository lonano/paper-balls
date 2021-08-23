
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var rightSide;
var leftSide
var radius = 40;



function setup() {
	createCanvas(1600, 800);

	var ball_options={
		isStatic:false,
		restitution:0.1,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = Bodies.circle(260,100,radius/2,ball_options)
World.add(world,ball);
ground =new Ground(width/2,670,width,20);
leftSide =new Ground(600,615,10,150);
rightSide =new Ground(750,615,10,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
ellipse(ball.position.x,ball.position.y,radius,radius);
ground.show();
rightSide.show();
leftSide.show();


 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:53,y:-53});
	}
}