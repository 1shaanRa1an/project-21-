var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";
    
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "white";
    
    ball.velocityX = 4;
    ball.velocityY = 9;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges = createEdgeSprites();
     ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
     if(ball.isTouching (block1) && ball.bounceOff(block1))
    {
        ball.shapeColor = "blue";
        music.play();
    }

    if(ball.isTouching (block2) && ball.bounceOff(block2))
    {
        ball.shapeColor = "orange";
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }  
    
    if(ball.isTouching (block3) && ball.bounceOff(block3))
    {
        ball.shapeColor = "red";
        
    } 
    if(ball.isTouching (block4) && ball.bounceOff(block4))
    {
        ball.shapeColor = "green";
    }

    if(keyDown(DOWN_ARROW)){
        ball.velocityY = -5;
    }

    if(keyDown(LEFT_ARROW)){
        ball.velocityX = 5;
    }
    if(keyDown(RIGHT_ARROW)){
        ball.velocityX =-5;
    }
    if(keyDown(UP_ARROW)){
        ball.velocityY = 5;
    }
     drawSprites();
    }
{
}
