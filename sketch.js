const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic : true,
    restitution :1 
  }
  ground = Bodies.rectangle(400,390, 800,20,options);
  World.add(world, ground);
  console.log(ground);
  var options_ball = {
    restitution :1 

  }
  ball = Bodies.circle(400,100,30,options_ball);
  World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  fill("green");
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30);
  fill ("green");
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,800,20) ;
  
}