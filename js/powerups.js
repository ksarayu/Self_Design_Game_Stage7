class PowerUps{
    constructor(){
        this.powerupInstruction = createElement("h3")
        this.powerupNo = createButton("No");
        this.powerupYes = createButton("Yes");

        this.airPowerup = createImg("images/powerups/air.png");
        this.doubleAttackPowerup = createImg("images/powerups/doubleAttack.png");
        this.earthPowerup = createImg("images/powerups/earth.png");
        this.firePowerup = createImg("images/powerups/fire.png");
        this.iceballPowerup = createImg("images/powerups/iceball.png");
        this.reverseAttackPowerup = createImg("images/powerups/reverseAttack.png");
        this.shieldPowerup = createImg("images/powerups/shield.png");

        this.powerupsHide();
    }

    spawnPowerups() {
        if (frameCount % 300 === 0) {
          var powerup = createSprite(displayWidth, displayHeight/2.4, 20, 20);
  
          var rand = Math.round(random(1,7));
          switch(rand) {
            case 1: powerup.addImage(powerup1_image);
                    break;
            case 2: powerup.addImage(powerup2_image);
                    break;
            case 3: powerup.addImage(powerup3_image);
                    break;
            case 4: powerup.addImage(powerup4_image);
                    break;
            case 5: powerup.addImage(powerup5_image);
                    powerup.scale = 2.4;
                    break;
            case 6: powerup.addImage(powerup6_image);
                    powerup.scale = 0.3;
                    break;
            case 7: powerup.addImage(powerup7_image);
                    break;
            default: break;
          }
  
          powerup.velocityX = -4;
          powerup.lifetime = displayWidth;
        
          powerupsGroup.add(powerup);
        }
        
      }

    displayOptions(){
        this.powerupInstruction.show();
        this.powerupNo.show();
        this.powerupYes.show();

        ground.visible = false;
        player.visible = false;

        play.satchelHide();

        powerupsGroup.setVisibleEach(false);

        obstacle1Group.setVisibleEach(false);
        obstacle2Group.setVisibleEach(false);
        obstacle3Group.setVisibleEach(false);
        obstacle4Group.setVisibleEach(false);
        obstacle5Group.setVisibleEach(false);
        obstacle6Group.setVisibleEach(false);
        obstacle7Group.setVisibleEach(false);

        life1.visible = false;
        life2.visible = false;
        life3.visible = false;

        background("lightyellow")

        this.powerupInstruction.position(displayWidth/7, displayHeight/3.8);
        this.powerupInstruction.style("font-size", "45px");
        this.powerupInstruction.style("font-family", "cursive");
        this.powerupInstruction.style("color", "orange");
        this.powerupInstruction.html("Would you like to equip yourself with powerups for this battle?");

        this.powerupNo.position(displayWidth/2.3, displayHeight/1.8);
        this.powerupNo.style("font-size", "25px");
        this.powerupNo.style("background-color", "orange");
        this.powerupNo.style("color", "white");
        this.powerupNo.style("width", "100px");
        this.powerupNo.style("height", "60px");
        this.powerupNo.style("font-family", "cursive");
        this.powerupNo.mousePressed(()=>{
            this.powerupInstruction.hide();
            this.powerupNo.hide();
            this.powerupYes.hide();

            playGameState = "battle";
            console.log(playGameState);
        })

        this.powerupYes.position(displayWidth/1.9, displayHeight/1.8);
        this.powerupYes.style("font-size", "25px");
        this.powerupYes.style("background-color", "orange");
        this.powerupYes.style("color", "white");
        this.powerupYes.style("width", "100px");
        this.powerupYes.style("height", "60px");
        this.powerupYes.style("font-family", "cursive");
        this.powerupYes.mousePressed(()=>{
            this.powerupInstruction.hide();
            this.powerupNo.hide();
            this.powerupYes.hide();

            clear();

            this.choosingPowerups();
        })
    }

    choosingPowerups(){
        this.powerupInstruction.hide();
        this.powerupNo.hide();
        this.powerupYes.hide();

        this.powerupsShow();

        this.airPowerup.position(displayWidth/8, displayHeight/6);
        this.airPowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
            chosenPowerups.push("airPowerup");
        })

        this.doubleAttackPowerup.position(displayWidth/3.5, displayHeight/6);
        this.doubleAttackPowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
            chosenPowerups.push("doubleAttackPowerup");
        })

        this.earthPowerup.position(displayWidth/2.25, displayHeight/6);
        this.earthPowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
            chosenPowerups.push("earthPowerup");
        })

        this.firePowerup.position(displayWidth/1.6, displayHeight/6);
        this.firePowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
            chosenPowerups.push("firePowerup");
        })

        this.iceballPowerup.position(displayWidth/1.3, displayHeight/6);
        this.iceballPowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
            chosenPowerups.push("iceballPowerup");
        })

        this.reverseAttackPowerup.position(displayWidth/8, displayHeight/3);
        this.reverseAttackPowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
            chosenPowerups.push("reverseAttackPowerup");
        })

        this.shieldPowerup.position(displayWidth/3.5, displayHeight/3);
        this.shieldPowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
            chosenPowerups.push("shieldPowerup");
        })


        if(powerupCount > 3){
            powerupsHide();
            playGameState = "battle";
            console.log(chosenPowerups);
        }
    }

    powerupsHide(){
        this.airPowerup.hide();
        this.doubleAttackPowerup.hide();
        this.earthPowerup.hide();
        this.firePowerup.hide();
        this.iceballPowerup.hide();
        this.reverseAttackPowerup.hide();
        this.shieldPowerup.hide();

        this.powerupInstruction.hide();
        this.powerupNo.hide();
        this.powerupYes.hide();
    }

    powerupsShow(){
        this.airPowerup.show();
        this.doubleAttackPowerup.show();
        this.earthPowerup.show();
        this.firePowerup.show();
        this.iceballPowerup.show();
        this.reverseAttackPowerup.show();
        this.shieldPowerup.show();
    }
}