var form;
var bg, bg1, bg2, bg3, bg4;
var gamers, gamer1, gamer2, gamer3, gamer4;
var ground;
var ob1, ob2;
var woodImg, woodImg2, woodImg3;
var tree, tree2, treeImg, treeImg2;
var bush, bush2, bushImg, bushImg2;
var rabbit, rabbit2, rabbitImg, rabbitImg2;
var snake, snake2, snakeImg, snakeImg2;
var birds, birdsImg;
var bird, bird2, birdImg, birdImg2;
var flies, flyImg;
var creeper, creeperImg;
var wall1, wall2;

var starting, winter, waterS;


var database;
var gameState = 0;
var playerCount = 0;
var playerPos;
var IceCount = -3;
var form, player, game;
var allPlayers;
var currentId;
var gameId ;




function setup() {
  createCanvas(displayWidth, displayHeight-105);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  bg = bg1;
  console.log("play")
}

function preload(){
   bg1 = loadImage("images/background/bg1.jpg")
   bg2 = loadImage("images/background/bg2.jpg")
   bg3 = loadImage("images/background/bg3.png")
   bg4 = loadImage("images/background/winter.jpg")

   ice = loadImage("images/ice.png")
   water = loadImage("images/water.png")
   monster = loadImage("images/monster.png")
   meIce = loadImage("images/meice.png")
   meWater = loadImage("images/mewater.png")

    woodImg = loadImage("images/downWood.png")
    woodImg2 = loadImage("images/wood.png")
    woodImg3 = loadImage("images/wood3.png")

    treeImg = loadImage("images/tree.png")
    treeImg2 = loadImage("images/tree2.png")

    bushImg = loadImage("images/bush.png")
    bushImg2 = loadImage("images/bush2.png")

    rabbitImg = loadImage("images/rabbit1.png")
    rabbitImg2 = loadImage("images/rabbit2.png")
    
    snakeImg = loadImage("images/snake.png")
    snakeImg2 = loadImage("images/snake2.png")

    birdsImg = loadImage("images/bird.png") 

    birdImg = loadImage("images/bird1.png")
    birdImg2 = loadImage("images/bird2.png")

    flyImg = loadImage("images/flies.png")

    creeperImg = loadImage("images/creeper.png")

    starting = loadSound("music/starting.wav")
    winter = loadSound("music/winter.wav")
    waterS = loadSound("music/water.wav")



}

function draw() {

  background(bg);  
  if (playerCount === 4){
    game.update(1);

}
if(gameState === 1){
    clear();
    game.play();

}
if(gameState === 2){       
    game.end();
}
  drawSprites();
}