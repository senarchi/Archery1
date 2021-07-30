const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var Player,PlayerBase,Computer,Computer_Base;


function setup() {
  canvas = createCanvas(1700,1000);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object

   PlayerBase = new playerBase(300,600,180,150)
Player = new player(-900,-200,50,180)
Computer_Base = new ComputerBase(900,50,180,150)
Computer = new computer(880,50,50,180)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   PlayerBase.display()
   Computer_Base.display()

   //display Player and computerplayer
Player.display()
Computer.display()
}
