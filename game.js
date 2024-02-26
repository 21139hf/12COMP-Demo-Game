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
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  world.gravity.y = 10;

player = new Sprite(PLAYER_WIDTH*1.2, SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
player.color = 'yellow';

platform_1 = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT, SCREEN_WIDTH, 5, 'k');
}
  document.addEventListener("keydown", function(event) {

  if (event.code === 'ArrowUp') {
player.vel.y = -50;
    // Set sprite's velocity to the up
  }
  });
  
  document.addEventListener("keyup", function(event) {

  if (event.code === 'ArrowUp') {
player.vel.y = 0;
    // Set sprite's velocity to the 0
  }
  });
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background('grey');
}

/*******************************************************/
//  END OF APP
/*******************************************************/
