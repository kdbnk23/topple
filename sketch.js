const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground
var box2
var box3
var box4
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    ground= new Ground(200,390,400,10)
    box2= new Box(220,200,100,50)
    box3= new Box(240,300,60,60)
    box4= new Box(180,150,60,40)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
   box3.display();  
   box4.display()
}