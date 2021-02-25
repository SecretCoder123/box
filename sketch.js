const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    object=new Box(200,200,50,50)
    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    object.display()
}