var log1,log2,log3,log4,log5,log6,log7,log8,log9,log10,log11,log12,log13,log14,log15,log16,log17,log18,log19,log20,log21,log22,log23,log24,log25,log26,log27,log28,log29,log30,log31;
var spawnEnemiesGroup;
function setup() {
  createCanvas(1600,800);
  log1 =createSprite(170,350,30,700);
  log2 = createSprite(220,380,100,30);
  log3 = createSprite(930,20,1300,30);
  log4 = createSprite(1565,370,30,700);
  log5 = createSprite(805,700,1300,30);
  log6 = createSprite(540,105,30,160);
  log7 = createSprite(515,200,290,30);
  log8 = createSprite(410,125,80,30);
  log9 = createSprite(385,155,30,65);
  log10 = createSprite(455,250,30,80);
  log11 = createSprite(645,250,30,80);
  log12 =  createSprite(590,275,130,30);
  log13 = createSprite(540,370,30,210);
  log14 =  createSprite(430,460,210,30);
  log15 = createSprite(930,570,30,235);
  log16 = createSprite(800,120,140,30);
  log18 = createSprite(855,190,30,110);
  log19 = createSprite(895,250,110,30);
  log20 = createSprite(935,300,30,110);
  log21 = createSprite(1050,340,240,30);
  log22 = createSprite(1050, 390, 30,120);
  log23 = createSprite(915,465, 300,30);
  log24 = createSprite(775,415,30,130);
  log25 = createSprite(600,670,30,80);
  log26 = createSprite(1155,250,30,200);
  log27 = createSprite(1160,150,300,30);
  log28 = createSprite(1025,210,30,130);
  log29 = createSprite(950,80,30,100);
  log30 = createSprite(1490,350,180,30);
  log31 = createSprite(1415,420,30,130);
  log32 = createSprite(1480,600,200,30);
  player = createSprite(230,20,30,30);
  player.shapeColor  = "blue";
  EnemiesGroup = new Group();
}
function draw() {
  background(255,255,255);

  if(keyDown(UP_ARROW)){
    player.y =  player.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+10;
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-10;

  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x +10;
  }

  spawnEnemies();
  drawSprites();
}
function spawnEnemies(){
  if (frameCount % 100 === 0){
    var enemy = createSprite(180,50,100,30);
    enemy.y = Math.round(random(50,700));
    enemy.velocityX = 2;
    enemy.shapeColor = "red";
    enemy.lifetime = 650;
    EnemiesGroup.add(enemy);
    
  }
}