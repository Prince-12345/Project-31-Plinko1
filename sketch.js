const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body=Matter.Body;

var engine, world;
var ground,d;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(490,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,height-10,width,20);
  for(var i = 5; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  
   }
  
  for(var j = 40; j < width; j = j + 50){
    plinkos.push(new Plinko(j, 75, 10));
   
   }
   for(var j = 15; j < width; j = j + 50){
    plinkos.push(new Plinko(j, 175, 10));
   
   }
   for(var j = 40; j < width; j = j + 50){
    plinkos.push(new Plinko(j, 275, 10));
   
   }
   for(var j = 15; j < width; j = j + 50){
    plinkos.push(new Plinko(j, 375, 10));
   
   }
   

}

function draw() {
  background(color(123,290,142));
  Engine.update(engine);
  ground.display();
  
  for(var i = 0; i <divisions.length; i++){
    divisions[i].display();
   }
   for(var j = 0; j <plinkos.length; j++){
    plinkos[j].display();
   }
   for(var j = 0; j <plinkos.length; j++){
    plinkos[j].display();
   }
   for(var j = 0; j <plinkos.length; j++){
    plinkos[j].display();
   }
   for(var j = 0; j <plinkos.length; j++){
    plinkos[j].display();
   }
   if(frameCount % 60===0){
    particles.push(new Particle(random(0,width), 0, 10));
  
   }
   for(var k = 0; k <particles.length; k++){
    particles[k].display();
  }
 
}