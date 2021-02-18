//all required variables.
var player, np, np1, np2, np3, np4, np5, eg, door;
var doorImg, plrImg, gunsImg;
var count;

function preload(){}

function setup(){
  createCanvas(600, 600);

  //player and all non moving players.
  player = createSprite(300, 300, 20, 20);
  player.shapeColor = "yellow";

  np = createSprite(590, 310, 30, 60);
  np.shapeColor = "pink";

  np1 = createSprite(10, 300, 30, 60);
  np1.shapeColor = "red";

  np2 = createSprite(310, 10, 60, 30);
  np2.shapeColor = "white";

  np3 = createSprite(300, 590, 60, 30);
  np3.shapeColor = "green";

  np4 = createSprite(570, 20, 60, 30);
  np4.shapeColor = "lightBlue";
  np4.rotation = 40;

  np5 = createSprite(30, 570, 60, 30);
  np5.shapeColor = "lightGreen";
  np5.rotation = 40;

  np6 = createSprite(30, 20, 60, 30);
  np6.shapeColor = "grey";
  np6.rotation = -40;

  np7 = createSprite(570, 570, 60, 30);
  np7.shapeColor = "darkred";
  np7.rotation = -40;

  door = createSprite(590, 160, 20, 60);
  door.shapeColor = "darkGrey";

  door2 = createSprite(10, 160, 20, 60);
  door2.shapeColor = "darkGrey";

  door3 = createSprite(590, 460, 20, 60);
  door3.shapeColor = "darkGrey";

  door4 = createSprite(10, 460, 20, 60);
  door4.shapeColor = "darkGrey";

  count = 0;
  death = 0;

  //all groups.
  eg1 = Group();
  eg2 = Group();
  eg3 = Group();
  eg4 = Group();
  eg5 = Group();
  eg6 = Group();
  eg7 = Group();
  eg8 = Group();
}

function draw(){
  //background.
  background("black");

  //calling all function.
  enemy1();
  enemy2();
  enemy3();
  enemy4();
  enemy5();
  enemy6();
  enemy7();
  enemy8();

  //winning statement.
  if (player.isTouching(door)){
    count = count + 1;
    door.destroy();
  }

  if (player.isTouching(door2) && count == 1){
    count = count + 1;
    door2.destroy();
  }

  if (player.isTouching(door3) && count === 2){
    count = count + 1;
    door3.destroy();
  }

  if (player.isTouching(door4) && count == 3){
    textSize(40);
    text("You Won!", 100, 100);
  }

  //checking touch between bullet and player.
  if(eg1.isTouching(player)){
    //player.destroy();
    player.x = 300;
    player.y = 300;
    death = death + 1;
  }

  if(eg2.isTouching(player)){
    //player.destroy();
    player.x = 300;
    player.y = 300;
    death = death + 1;
  }

  if(eg3.isTouching(player)){
    //player.destroy();
    player.x = 300;
    player.y = 300;
    death = death + 1;
  }

  if(eg4.isTouching(player)){
    //player.destroy();
    player.x = 300;
    player.y = 300;
    death = death + 1;
  }

  if(eg5.isTouching(player)){
    //player.destroy();
    player.x = 300;
    player.y = 300;
    death = death + 1; 
  }

  if(eg6.isTouching(player)){
    //player.destroy();
    player.x = 300;
    player.y = 300;
    death = death + 1;
  }

  if(eg7.isTouching(player)){
    //player.destroy();
    player.x = 300;
    player.y = 300;
    death = death + 1;
  }

  if(eg8.isTouching(player)){
    //player.destroy();
    player.x = 300;
    player.y = 300;
    death = death + 1;
  }

  //players movement.
  if (keyDown("up")){
    player.y = player.y - 2;
  }

  if (keyDown("down")){
    player.y = player.y + 2;
  }

  if (keyDown("right")){
    player.x = player.x + 2;
  }

  if (keyDown("left")){
    player.x = player.x -2;
  }

  drawSprites();

  //texts
  textSize(20);
  text("Count: "+count,130,50);
  text("Death: "+death,400,50);
  text("Door 1",540,120);
  text("Door 2",5,120);
  text("Door 3",540,420);
  text("Door 4",5,420);
}

function enemy1(){
  //creating bullets at every 50th frame.
  if (frameCount % 50 == 0){
    e1 = createSprite(np.x, np.y, 40, 10);
    e1.shapeColor = "red";
    e1.velocityX = -4;
    e1.lifetime = 150;
    eg1.add(e1);
  }
}

function enemy2(){
  //creating bullets at every 50th frame.
  if (frameCount % 50 == 0){
    e2 = createSprite(np1.x, np1.y, 40, 10);
    e2.shapeColor = "red";
    e2.velocityX = 4;
    e2.lifetime = 150;
    eg2.add(e2);
  }
}

function enemy3(){
  //creating bullets at every 50th frame.
  if (frameCount % 50 == 0){
    e3 = createSprite(np2.x, np2.y, 10, 40);
    e3.shapeColor = "red";
    e3.velocityY = 4;
    e3.lifetime = 150;
    eg3.add(e3);
  }
}

function enemy4(){
  //creating bullets at every 50th frame.
  if (frameCount % 50 == 0){
    e4 = createSprite(np3.x, np3.y, 10, 40);
    e4.shapeColor = "red";
    e4.velocityY = -4;
    e4.lifetime = 150;
    eg4.add(e4);
  }
}

function enemy5(){
  //creating bullets at every 50th frame.
  if (frameCount % 50 == 0){
    e5 = createSprite(np4.x, np4.y, 10, 40);
    e5.shapeColor = "red";
    e5.rotation = 40;
    e5.velocityY = 4;
    e5.velocityX = -3.8;
    e5.lifetime = 150;
    eg5.add(e5);
  }
}

function enemy6(){
  //creating bullets at every 50th frame.
  if (frameCount % 50 == 0){
    e6 = createSprite(np5.x, np5.y, 10, 40);
    e6.shapeColor = "red";
    e6.rotation = 40;
    e6.velocityY = -4;
    e6.velocityX = 3.8;
    e6.lifetime = 150;
    eg6.add(e6);
  }
}

function enemy7(){
  //creating bullets at every 50th frame.
  if (frameCount % 50 == 0){
    e7 = createSprite(np6.x, np6.y, 10, 40);
    e7.shapeColor = "red";
    e7.rotation = -40;
    e7.velocityY = 4;
    e7.velocityX = 3.8;
    e7.lifetime = 150;
    eg7.add(e7);
  }
}

function enemy8(){
  //creating bullets at every 50th frame.
  if (frameCount % 50 == 0){
    e8 = createSprite(np7.x, np7.y, 10, 40);
    e8.shapeColor = "red";
    e8.rotation = -40;
    e8.velocityY = -4;
    e8.velocityX = -3.8;
    e8.lifetime = 150;
    eg8.add(e8);
  }
}