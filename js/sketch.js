var gameState = "start";
var playGameState = "play";

var level = 1;

var background_image, battleScene_image;

var life1, life2, life3, lives_image;

var player, player_running, player_jumping, player_shooting, player_dying;

var dragonGuard, dragonGuard_image, dragonKing, dragonKing_image;

var powerupsGroup, powerup1_image, powerup2_image, powerup3_image, powerup4_image, powerup5_image, 
powerup6_image, powerup7_image, powerupCount = 0, powerupTotal = 0, chosenPowerups = [];

var obstacle1Group, obstacle1_image, obstacle2Group, obstacle2_image, obstacle3Group, obstacle3_image, 
obstacle4Group, obstacle4_image, obstacle5Group, obstacle5_image, obstacle6Group, obstacle6_image, 
obstacle7Group, obstacle7_image, obstacleBattle = 0;

var playerHealth = 100, enemyHealth = 100;

function preload(){
    background_image = loadImage("images/jungle.jpg");
    battleScene_image = loadImage("images/battleScene.jpg");

    lives_image = loadImage("images/heart.png");

    player_running = loadAnimation("images/player_images/playerRunning1.png", 
    "images/player_images/playerRunning2.png", "images/player_images/playerRunning3.png", 
    "images/player_images/playerRunning4.png", "images/player_images/playerRunning5.png", 
    "images/player_images/playerRunning6.png")

    player_jumping = loadAnimation("images/player_images/playerJumping1.png", 
    "images/player_images/playerJumping2.png", "images/player_images/playerJumping3.png",
    "images/player_images/playerJumping4.png", "images/player_images/playerJumping5.png")

    player_shooting = loadAnimation("images/player_images/playerShooting1.png", 
    "images/player_images/playerShooting2.png", "images/player_images/playerShooting3.png");

    player_dying = loadAnimation("images/player_images/playerDying1.png",
    "images/player_images/playerDying2.png", "images/player_images/playerDying3.png", 
    "images/player_images/playerDying4.png", "images/player_images/playerDying5.png");

    dragonGuard_image = loadImage("images/dragonGuard.png")
    dragonKing_image = loadImage("images/dragonKing.png");

    powerup1_image = loadImage("images/powerups/air.png");
    powerup2_image = loadImage("images/powerups/doubleAttack.png");
    powerup3_image = loadImage("images/powerups/earth.png");
    powerup4_image = loadImage("images/powerups/fire.png");
    powerup5_image = loadImage("images/powerups/iceball.png");
    powerup6_image = loadImage("images/powerups/reverseAttack.png");
    powerup7_image = loadImage("images/powerups/shield.png");

    obstacle1_image = loadImage("images/obstacles/obstacle1.png");
    obstacle2_image = loadImage("images/obstacles/obstacle2.png");
    obstacle3_image = loadImage("images/obstacles/obstacle3.png");
    obstacle4_image = loadImage("images/obstacles/obstacle4.png");
    obstacle5_image = loadImage("images/obstacles/obstacle5.png");
    obstacle6_image = loadImage("images/obstacles/obstacle6.png");
    obstacle7_image = loadImage("images/obstacles/obstacle7.png");
}

function setup(){
    createCanvas(displayWidth, displayHeight);

    game = new Game();
    play = new Play();
        
    ground = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
    ground.addImage(background_image);
    ground.scale = 1.8;
    ground.velocityX = -3;
    ground.x = ground.width / 2;

    player = createSprite(300, displayHeight - 165, 20, 50);
    player.addAnimation("player_running", player_running);
    player.addAnimation("player_jumping", player_jumping);
    player.addAnimation("player_shooting", player_shooting);
    player.addAnimation("player_dying", player_dying);
    player.changeAnimation("player_running", player_running);
    //player.velocityX = 3;
    //camera.position.x = player.x;
    //camera.position.y = player.y;
        
    invisibleGround = createSprite(displayWidth/2, displayHeight - 130, displayWidth, 20);
    invisibleGround.visible = false;
        
    powerupsGroup = new Group();

    obstacle1Group = new Group();
    obstacle2Group = new Group();
    obstacle3Group = new Group();
    obstacle4Group = new Group();
    obstacle5Group = new Group();
    obstacle6Group = new Group();
    obstacle7Group = new Group();
    
    powerups = new PowerUps()
    obstacles = new Obstacles();

    life1 = createSprite(displayWidth/5, displayHeight/18, 20, 20);
    life1.addImage(lives_image);
    life1.scale = 0.4;

    life2 = createSprite(displayWidth/3.7, displayHeight/18, 20, 20);
    life2.addImage(lives_image);
    life2.scale = 0.4;

    life3 = createSprite(displayWidth/3, displayHeight/18, 20, 20);
    life3.addImage(lives_image);
    life3.scale = 0.4;
}

function draw(){
    if(gameState === "start"){
        game.displayStart();
    }
    else if(gameState === "help"){
        game.displayHelp();
    }
    else if(gameState === "menu"){
        game.displayMenu();
    }
    else if(gameState === "play"){
        switch(level){
            case 1 : play.displayLevel1();
                        break;
            case 2 : play.displayLevel2();
                        break;
            case 3:  play.displayLevel3();
                        break;
            case 4: play.displayLevel4();
                        break;
            case 5: play.displayLevel5();
                        break;
            case 6: play.displayLevel6();
                        break;
            case 7: play.displayLevel7();
                        break;
            case 8: play.displayLevel8();
                        break;
            case 9: play.displayLevel9();
                        break;
            case 10: play.displayLevel10();
                        break;
            default: console.log("error");
                        break;
        }
    }
    else if(gameState === "finalPlay"){
        play.displayFinalPlay();
    }
}