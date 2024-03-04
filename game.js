/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by Haider Faris 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

//Variables
const SCREEN_WIDTH = 500; 
const SCREEN_HEIGHT = 250;
const PLAYER_WIDTH = 25;
const PLAYER_HEIGHT = 25;
const BLOCK_WIDTH = 25;
const BLOCK_HEIGHT = 25;

let blocks;
let distance = 0+1;
let nextSpawn = 0;
let score = 0;
let screenSelector = "start";
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    //Screen size
    world.gravity.y = 80;
   
    blocks = new Group();

    platform_1 = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT, SCREEN_WIDTH, 5, 'k');
    platform_1.color = 'black'
    platform_1.bounciness = 0;
    //Platform
  
    document.addEventListener("keydown", event) 
    function event(event) {
        if(screenSelector == "start"||screenSelector == "end"){
            screenSelector = "game" 
            resetGame();
            //Screen Selector
        }else{ 
            if(player.y > 224){
                player.vel.y = -20;
                console.log(player.y);
                //Player jump
            };
        }
    }
}

   
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    if(screenSelector=="game"){
        gameScreen();
    }else if(screenSelector=="end"){
        endScreen();
    }else if(screenSelector=="start"){
        startScreen();
        //Display screen selector
    console.log("Start screen")
    }else{
        text("wrong screen - you shouldnt get here", 50, 50);
        console.log("wrong screen - you shouldnt get here")
    }
}

function youDead(_player,_blocks){
    console.log("YouDied")
    screenSelector = "end";
    allSprites.visible = false;

    player.remove();
    //Dead code
}

function newBlocks(){
    distance=distance + 100;
    block = new Sprite(SCREEN_WIDTH + distance,  SCREEN_HEIGHT - 15, BLOCK_WIDTH, BLOCK_HEIGHT, 'k');
    block.color = color("red");
    block.vel.x = -5;
    block.bounciness = 0;
    blocks.add(block);
    //Obstacles 
}

function startScreen(){
    //console.log("Start screen")
    background('white');

    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Welcome to the Geometry Dash", 50, 50);
    textSize(24);
    text("Press any key to start", 50, 110);
    //Text 
}

function gameScreen(){
    background('grey');
    allSprites.visible = true;
    score++;
    if(frameCount> nextSpawn){
        newBlocks();
        nextSpawn = frameCount + random(10,100);
        // Obstacles spawn 
    }
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text(score, 50, 50);
    player.collides(blocks, youDead);
    player.bounciness = 0;
}

function endScreen(){
    console.log("End screen")
    background("white");
    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("You died! Too bad :-(", 50, 50);
    textSize(24);
    text("your score was: "+score, 50, 110);
    //End screen
}

function resetGame(){
    score = 0;
    player = new Sprite(PLAYER_WIDTH*1.2,  SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
    player.color = color("yellow");
    player.collides(blocks, youDead);
    score = 0;
    player.x = PLAYER_WIDTH*1.2;
    player.y =   SCREEN_HEIGHT/2;
    //Refresh 
}
/*******************************************************/
//  END OF APP
/*******************************************************/
