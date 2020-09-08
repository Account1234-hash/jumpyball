const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground, ball;

function setup() {
  createCanvas(800,400);
    createSprite(400, 200, 50, 50);
    engine = Engine.create();
    world = engine.world
    var ground_options = {
        isStatic: true
    }
    var ball_options = {
       restitution: 1
    }


    ground = Bodies.rectangle(400, 400, 800, 100, ground_options);
    ball = Bodies.circle(400, 200, 50, ball_options);
    World.add(world, ground);
    World.add(world, ball);
}

function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 800, 100);
    
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 50);
}