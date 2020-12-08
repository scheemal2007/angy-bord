
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine
var world
var box1, box2, box3, box4, box5
var pig1, pig2
var log1, log2
var bird1
var object
var ground1
function setup() {
  createCanvas(1200,400);
 engine=Engine.create()
 world=engine.world
 ground1=new ground(600,380,1200,10)
 box1=new blocks(700,350,70,70)
 box2=new blocks(920,350,70,70)
 pig1=new pig(810,350)
 log1=new log(810,330,300,15,PI)
 box3=new blocks(700,240,70,70)
 box4=new blocks(920,240,70,70)
 pig2=new pig(810,220)
 log2=new log(810,220,200,15,PI)
 bird1=new bird(100,100)
}
function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground1.display()
  box1.display()
  box2.display()
  log1.display()
  pig1.display()
  box3.display()
  box4.display()
  pig2.display()
  log2.display()
  bird1.display()
}

