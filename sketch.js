var canvas;
var music;
var block1,block2,block3,block4;
var box, edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1=createSprite(0,580,360,30);
    block1.shapeColor= rbg(0,0,250);
    blocl2=createSprite(295,580,200,30);
    block2.shapeColor= rbg(250,128,0);
    block3=createSprite(515,580,200,30);
    block3.shapeColor= rbg(150,0,76);
    block4=createSprite(740,580,200,30);
    block4.shapeColor= rbg(0,110,0);


    //create box sprite and give velocity
    box=createSprite(random(20,750),100,40,40);
    box.shapeColor= rbg(250,250,250);
    box.velocityX= 4;
    box.velocityY=9;




    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgesSprite();
    box.bounceOff(edges);

    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor= rbg(0,0,250);
        music.play();

    }

    if(block2.isTouching(box)){
        box.shapeColor= rbg(250,128,0);
        box.velocityX=0;
        box.velocityY=0;
        music.stop();

    }

    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor= rbg(150,0,76);

    }

    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor= rbg(0,110,0);

    }

    drawSprites ();
    
}
