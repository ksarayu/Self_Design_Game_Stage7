class Obstacles{
    constructor(){

    }

    spawnObstacles() {
        if(frameCount % 220 === 0) {
          var obstacle = createSprite(displayWidth, displayHeight/1.5, 20, 20);
          
          var rand = Math.round(random(1,7));
          switch(rand) {
            case 1: obstacle.addImage(obstacle1_image);
                    obstacle.scale = 1.4;
                    obstacle1Group.add(obstacle);
                    break;
            case 2: obstacle.addImage(obstacle2_image);
                    obstacle.scale = 1.7;
                    obstacle2Group.add(obstacle);
                    break;
            case 3: obstacle.addImage(obstacle3_image);
                    obstacle.scale = 1.4;
                    obstacle3Group.add(obstacle);
                    break;
            case 4: obstacle.addImage(obstacle4_image);
                    obstacle.scale = 1.4;
                    obstacle4Group.add(obstacle);
                    break;
            case 5: obstacle.addImage(obstacle5_image);
                    obstacle.scale = 1.4;
                    obstacle5Group.add(obstacle);
                    break;
            case 6: obstacle.addImage(obstacle6_image);
                    obstacle.scale = 1.6;
                    obstacle6Group.add(obstacle);
                    break;
            case 7: obstacle.addImage(obstacle7_image);
                    obstacle.scale = 1.7;
                    obstacle7Group.add(obstacle);
                    break;
            default: break;
          }

          obstacle.velocityX = -3;
          obstacle.lifetime = displayWidth;
    
        }
    }

    obstacleTouchDetection(){
        if(obstacle1Group.isTouching(player)){
            clear();
            powerups.displayOptions();
            obstacleBattle = 1;
        }

        if(obstacle2Group.isTouching(player)){
            clear();
            powerups.displayOptions();
            obstacleBattle = 2;
        }

        if(obstacle3Group.isTouching(player)){
            clear();
            powerups.displayOptions();
            obstacleBattle = 3;
        }

        if(obstacle4Group.isTouching(player)){
            clear();
            powerups.displayOptions();
            obstacleBattle = 4;
        }

        if(obstacle5Group.isTouching(player)){
            clear();
            powerups.displayOptions();
            obstacleBattle = 5;
        }

        if(obstacle6Group.isTouching(player)){
            clear();
            powerups.displayOptions();
            obstacleBattle = 6;
        }

        if(obstacle7Group.isTouching(player)){
            clear();
            powerups.displayOptions();
            obstacleBattle = 7;
        }
    }

    obstacleFightDetection(){
        if(obstacleBattle === 1){
            obstacle1Group.setVisibleEach(true);
            obstacle1Group.x

            if(obstacle1Group.x === displayWidth/1.3){
                playerHealth = playerHealth - 25;
            }
            if(obstacle1Group.x === displayWidth/2){
                playerHealth = playerHealth - 25;
            }
            if(obstacle1Group.x === displayWidth/4){
                playerHealth = playerHealth - 25;
            }
            if(obstacle1Group.isTouching(player)){
                playerHealth = 0;
                obstacle1Group.setVelocityXEach(0);
            }
        }

        if(obstacleBattle === 2){
            obstacle2Group.setVisibleEach(true);

            if(obstacle2Group.x === displayWidth/1.3){
                playerHealth = playerHealth - 25;
            }
            if(obstacle2Group.x === displayWidth/2){
                playerHealth = playerHealth - 25;
            }
            if(obstacle2Group.x === displayWidth/4){
                playerHealth = playerHealth - 25;
            }
            if(obstacle2Group.isTouching(player)){
                playerHealth = 0;
                obstacle2Group.setVelocityXEach(0);
            }
        }

        if(obstacleBattle === 3){
            obstacle3Group.setVisibleEach(true);

            if(obstacle3Group.x === displayWidth/1.3){
                playerHealth = playerHealth - 25;
            }
            if(obstacle3Group.x === displayWidth/2){
                playerHealth = playerHealth - 25;
            }
            if(obstacle3Group.x === displayWidth/4){
                playerHealth = playerHealth - 25;
            }
            if(obstacle3Group.isTouching(player)){
                playerHealth = 0;
                obstacle3Group.setVelocityXEach(0);
            }
        }

        if(obstacleBattle === 4){
            obstacle4Group.setVisibleEach(true);

            if(obstacle4Group.x === displayWidth/1.3){
                playerHealth = playerHealth - 25;
            }
            if(obstacle4Group.x === displayWidth/2){
                playerHealth = playerHealth - 25;
            }
            if(obstacle4Group.x === displayWidth/4){
                playerHealth = playerHealth - 25;
            }
            if(obstacle4Group.isTouching(player)){
                playerHealth = 0;
                obstacle4Group.setVelocityXEach(0);
            }
        }

        if(obstacleBattle === 5){
            obstacle5Group.setVisibleEach(true);

            if(obstacle5Group.x === displayWidth/1.3){
                playerHealth = playerHealth - 25;
            }
            if(obstacle5Group.x === displayWidth/2){
                playerHealth = playerHealth - 25;
            }
            if(obstacle5Group.x === displayWidth/4){
                playerHealth = playerHealth - 25;
            }
            if(obstacle5Group.isTouching(player)){
                playerHealth = 0;
                obstacle5Group.setVelocityXEach(0);
            }
        }

        if(obstacleBattle === 6){
            obstacle6Group.setVisibleEach(true);

            if(obstacle6Group.x === displayWidth/1.3){
                playerHealth = playerHealth - 25;
            }
            if(obstacle6Group.x === displayWidth/2){
                playerHealth = playerHealth - 25;
            }
            if(obstacle6Group.x === displayWidth/4){
                playerHealth = playerHealth - 25;
            }
            if(obstacle6Group.isTouching(player)){
                playerHealth = 0;
                obstacle6Group.setVelocityXEach(0);
            }
        }

        if(obstacleBattle === 7){
            obstacle7Group.setVisibleEach(true);

            if(obstacle7Group.x === displayWidth/1.3){
                playerHealth = playerHealth - 25;
            }
            if(obstacle7Group.x === displayWidth/2){
                playerHealth = playerHealth - 25;
            }
            if(obstacle7Group.x === displayWidth/4){
                playerHealth = playerHealth - 25;
            }
            if(obstacle7Group.isTouching(player)){
                playerHealth = 0;
                obstacle7Group.setVelocityXEach(0);
            }
        }
    }
}