class Play{
    constructor(){
        this.satchel = createImg("images/satchel.png");
    }

    displayLevel1(){
        background("white");

        this.satchel.position(displayWidth/75, displayHeight/150);
        this.satchel.mousePressed(()=>{
            fill("black");
            textSize(15);
            text("Number of powerups: " + powerupTotal, displayWidth/3, 100);
        })

        if (playGameState === "play"){
            if(keyDown("space")) {
                player.velocityY = -20;
                player.changeAnimation("player_jumping", player_jumping);
            }
          
            player.velocityY = player.velocityY + 0.8
          
            if (ground.x < 0){
                ground.x = ground.width/2;
            }

            powerups.spawnPowerups();
            obstacles.spawnObstacles();

            if(powerupsGroup.isTouching(player)){
                powerupTotal = powerupTotal + 1;
            }

            obstacles.obstacleTouchDetection();
        }

        if (playGameState === "battle"){
            this.displayBattle();
        }
        
          
        player.collide(invisibleGround);
        
        drawSprites();
    }     

    displayBattle(){
        //obstaclesGroup.setVelocityXEach(0);
        //cloudsGroup.setVelocityXEach(0);
        //obstaclesGroup.setLifetimeEach(-1);
        //cloudsGroup.setLifetimeEach(-1);

        ground.visible = true;
        player.visible = true;

        life1.visible = true;
        life2.visible = true;
        life3.visible = true;

        ground.changeImage("battleScene_image", battleScene_image);
        ground.velocityX = 0;
    
        player.changeAnimation("player_shooting", player_shooting);

        obstacles.obstacleFightDetection();

        if(playerHealth === 0){
            player.changeAnimation("player_dying", player_dying);
        }
    }

    satchelHide(){
        this.satchel.hide();
    }
}