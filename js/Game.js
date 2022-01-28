class Game {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState')

        gameStateRef.on("value", function (data) {
            gameState = data.val()
        })
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        })

    }
    async start() {

        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();

                player.getCount();
            }

            form = new Form()
            form.display()

            birds = createSprite(displayWidth-1850, displayHeight-970, 1, 1);
            flies = createSprite(displayWidth-400, displayHeight-600, 1, 1);


            
            gamer1 = createSprite(100, 100, 1, 1);   
            gamer2 = createSprite(200, 200, 1, 1);
            gamer3 = createSprite(300, 300, 1, 1);
            gamer4 = createSprite(400, 400, 1, 1);

            ground = createSprite(958, 856, 2911, 1);
            ground.shapeColor = "lightgreen"

            ob1 = createSprite(700,500, 1, 1)
            ob2 = createSprite(900, 700, 1, 1)

            tree = createSprite(100, displayHeight-455, 1, 1);
            tree2 = createSprite(displayWidth-100, displayHeight-460, 1, 1);

            snake2 = createSprite(displayWidth-260, displayHeight-280, 1, 1)

            bush = createSprite(displayWidth-210, displayHeight-280, 1, 1);
            bush2 = createSprite(220, displayHeight-280, 1, 1);

            snake = createSprite(100, displayHeight-250, 1, 1)

            rabbit = createSprite(600, displayHeight-305, 1, 1)
            rabbit2 = createSprite(displayWidth-440, displayHeight-305, 1, 1);

            bird = createSprite(displayWidth-1500, displayHeight-970, 1, 1);
            bird2 = createSprite(displayWidth-500, displayHeight-970, 1, 1);

            creeper = createSprite(displayWidth-980, displayHeight-1095, 1, 1)

            wall1 = createSprite(0, 0, 1, displayHeight+400)
            wall2 = createSprite(displayWidth, 0, 1, displayHeight+400)


            gamers = [gamer1, gamer2, gamer3, gamer4]


        }
    }

    play() {

        form.hide();
        textSize(30);
        text("GAME START", 120, 100);
        Player.getPlayerInfo();
        bg = bg3;

        background(bg);  

        ob1.addImage(woodImg);
        ob1.scale = 0.25

        ob2.addImage(woodImg2);
        ob2.scale = 0.4

        tree.addImage(treeImg);
        tree.scale = 1.5

        tree2.addImage(treeImg2);
        tree2.scale = 1.5

        bush.addImage(bushImg);
        bush.scale = 1.3

        bush2.addImage(bushImg2);
        bush2.scale = 0.45

        snake.addImage(snakeImg)
        snake.scale = 0.2

        snake2.addImage(snakeImg2)
        snake2.scale = 0.4

        rabbit.addImage(rabbitImg)
        rabbit.scale = 0.3

        rabbit2.addImage(rabbitImg2)
        rabbit2.scale = 0.27

        bird.addImage(birdImg)
        bird.scale = 0.3

        bird2.addImage(birdImg2)
        bird2.scale = 0.3

        birds.addImage(birdsImg)
        birds.scale = 0.4

        flies.addImage(flyImg)
        flies.scale = 0.36

        creeper.addImage(creeperImg)
        creeper.scale = 2.8
        


        if (allPlayers != undefined) {
            var index = 0;
            var x = 175; 
            var y = 0;
        
            for (var plr in allPlayers) {

               index=index + 1;
                x = allPlayers[plr].X
                y = allPlayers[plr].Y

                gamers[index-1].x = allPlayers[plr].X;
                gamers[index-1].y = allPlayers[plr].Y;


                if (index === 1){
      
                    gamers[index-1].addImage(monster);
                    gamers[index-1].x = allPlayers[plr].X+200;
                    gamers[index-1].y = allPlayers[plr].Y+200;

                }
                else if(index === player.index){
                    if (allPlayers[plr].state == "ice"){
                        gamers[index-1].addImage(meIce);

                     }   else if (allPlayers[plr].state == "water"){
                                gamers[index-1].addImage(meWater);

                     }
                     }   else if (allPlayers[plr].state == "ice"){
                                gamers[index-1].addImage(ice);

                    }    else if (allPlayers[plr].state == "water"){
                                gamers[index-1].addImage(water);
                    
                    }

            }

        }       
         if (keyIsDown(UP_ARROW) && player.index !== null && player.state == "water" && gamers[player.index-1].isTouching(creeper)==false) {
            player.positionY = player.positionY - 10;
            player.updatePos();
            console.log("UP");

        }         
        else if (keyIsDown(DOWN_ARROW) && player.index !== null && player.state == "water" && gamers[player.index-1].isTouching(ground)==false) {
           player.positionY = player.positionY + 10;
           player.updatePos();
           console.log("DOWN");

        }
        else if (keyIsDown(LEFT_ARROW) && player.index !== null && player.state == "water" && gamers[player.index-1].isTouching(wall1)==false) {
            player.positionX = player.positionX - 10;
            player.updatePos();
            console.log("left")      

        }         
        else if (keyIsDown(RIGHT_ARROW) && player.index !== null && player.state == "water"  && gamers[player.index-1].isTouching(wall2)==false) {
           player.positionX = player.positionX + 10;
           player.updatePos();
           console.log("right")

        }

        if(gamer1.isTouching(gamers[player.index-1]) && player.state == "water"){
            player.state = "ice";
            player.getIceCount();
            console.log(IceCount)
            IceCount = IceCount + 1;
            console.log(IceCount)
            player.updateIceCount();
            player.updatePos();
            winter.play();
        }

        if(gamer4.isTouching(gamers[player.index-1]) && player.index != 1 && player.state == "ice" ){
            player.state = "water";
            player.updatePos();
            player.getIceCount();
            IceCount = IceCount - 1;
            player.updateIceCount();
            waterS.play();

        }
        if(gamer3.isTouching(gamers[player.index-1]) && player.index != 1 && player.state == "ice" ){
            player.state = "water";
            player.updatePos();   
            player.getIceCount();
            IceCount = IceCount - 1;
            player.updateIceCount();
            waterS.play();


        }
        if(gamer2.isTouching(gamers[player.index-1]) && player.index != 1 && player.state == "ice" ){
            player.state = "water";
            player.updatePos();
            player.getIceCount();
            IceCount = IceCount - 1;
            player.updateIceCount();
            waterS.play();


        }

        if(gamers[player.index-1].isTouching(ground)){
            player.positionY = player.positionY - 1;
            player.updatePos();
        }

        if(gamers[player.index-1].isTouching(creeper)){
            player.positionY = player.positionY + 1;
            player.updatePos();
        }

        if(IceCount == 0){
            if(player.index != 1){
                text("GAME OVER", 500, 500)
                text("YOU WON", 600, 600)
            }else{
                text("GAME OVER", 500, 500)
                text("YOU LOSE", 600, 600)
            }
        }
     
        
        drawSprites();

    }
}

