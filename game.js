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
  world.gravity.y = 20;


player = new Sprite(PLAYER_WIDTH*1.2, SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
player.color = 'yellow';

platform_1 = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT, SCREEN_WIDTH, 5, 'k');

      document.addEventListener("keydown", 
        function(event) {
            console.log("Key pressed!"+player.y);
            if(player.y > 224 ){// 224 - found from testing - floor level
            console.log("Key pressed!");
            player.vel.y = -10;
            }
    });
}

   
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background('grey');
}

/*******************************************************/
//  END OF APP
/*******************************************************/
