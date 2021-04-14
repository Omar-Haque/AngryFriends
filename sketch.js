const{Engine, World, Bodies, MouseConstraint, Mouse, Constraint, Composites} = Matter;
var world, engine;
var mouseConstraint;
var box1, box2, box3, box4;
var friend1, friend2;
var base1, base2, base3, base4, base5;
var ground

function setup(){
    createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(100, 600, 70, 70);
    box2 = new Box(200, 600, 70, 70);
    box3 = new Box(300, 600, 70, 70);
    box4 = new Box(400, 600, 70, 70);
    ground = new Ground(600, 680, 1200, 20);
    
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
}