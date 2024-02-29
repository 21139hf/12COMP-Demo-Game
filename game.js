/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 500; 
const SCREEN_HEIGHT = 250;
const PLAYER_WIDTH = 25;
const PLAYER_HEIGHT = 25;
const BLOCK_WIDTH = 25;
const BLOCK_HEIGHT = 25;

let blocks;
let distance = 0+1;
let nextSpawn = 0;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  world.gravity.y = 80;
  

player = new Sprite(PLAYER_WIDTH*1.2, SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
player.color = 'yellow';
player.bounciness = 0;

block = new Sprite(SCREEN_WIDTH-100, SCREEN_HEIGHT - 15, BLOCK_WIDTH, BLOCK_HEIGHT, 'k');
block.color = 'red';
block.bounciness = 0;
block.vel.x = -10;

blocks = new Group();

platform_1 = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT, SCREEN_WIDTH, 5, 'k');
platform_1.color = 'black'
platform_1.bounciness = 0;
  
      document.addEventListener("keydown", 
        function(event) {
            console.log("Key pressed!"+player.y);
            if(player.y > 224 ){// 224 - found from testing - floor level
            console.log("Key pressed!");
            player.vel.y = -20;
            }
    });
    
     player.collides(block, youDead);
}

   
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background('grey');
  if(frameCount> nextSpawn){
  newBlocks();
    nextSpawn = frameCount + random(10,100);

  }
}

function youDead(_player, _block){
    console.log("YouDied")
}

function newBlocks(){
    distance=distance + 100;
    block = new Sprite(SCREEN_WIDTH + distance,  SCREEN_HEIGHT - 15, BLOCK_WIDTH, BLOCK_HEIGHT, 'k');
    block.color = color("red");
    block.vel.x = -10;
    
}

/*******************************************************/
//  END OF APP
/*******************************************************/
