var Ninjasprite;
var ninjaImag1, ninjaImg2, ninjaImag3, ninjaImag4, ninjaImag5, ninjaImag6, ninjaImag7, ninjaImag8, ninjaImag9, ninjaImag10;
var backSprite;
var backImg;
var Ninja1, Ninja2;
var Ninjas=[]
var game;
var form;
var player;
var State=0
var Count=0
var Allplayers
var database
function preload(){
  ninja_running=loadAnimation("Climb_000.png", "Climb_001.png", "Climb_003.png", "Climb_004.png", "Climb_005.png", "Climb_006.png", "Climb_007.png", "Climb_008.png", "Climb_009.png ")
  backImg=loadImage("alternate_lines.jpg")
  
}

function setup() {
  createCanvas(800,800);
  database=firebase.database()
backSprite=createSprite(400, 400)
backSprite.addImage(backImg)
backSprite.velocityY=1
backSprite.scale=3

game=new Game()
game.readGameState()
 game.startTheGame()
  
  

}

function draw() {
  background(255, 255, 255);
 
 if(Count==2){
   game.writeGameState(1)
 }
  if(State==1)
  {
    game.playGame()
  }
}