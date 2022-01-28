class Form {
    constructor() {
        this.inputName = createInput("ENTER YOUR NAME");
        this.inputId   = createInput("ENTER SQUAD ID");
        this.inputPass = createInput("ENTER PASSWORD");

        this.button = createButton('JOIN GAME');
        this.greeting = createElement('h4');
        this.title = createElement("h1")
        this.reset = createButton('RESET');
        this.create = createButton('CREATE NEW GAME')
        this.play = createButton('START GAME')


    }

    hide() {

        this.greeting.hide();
        this.button.hide();
        this.inputName.hide();
        this.inputId.hide();
        this.inputPass.hide();
        this.create.hide();
        this.play.hide();
        this.title.hide();
    }

    display() {
        this.title.html('SHOOT OUT')
        this.title.position(displayWidth/2-45, 0)

        this.inputName.position(displayWidth/2-40, displayHeight/2-140);
        this.inputId.position(displayWidth/2-40,displayHeight/2-100);
        this.inputPass.position(displayWidth/2-40, displayHeight/2-60);

        this.button.position(displayWidth/2+8, displayHeight/2);
        this.reset.position(displayWidth-100, 20);

        this.create.position(10, 10)

        this.create.mousePressed(()=>{
            this.inputId.hide();
            this.button.hide();
            this.play.position(displayWidth/2+3, displayHeight/2);


        })

        this.play.mousePressed(()=>{
            player.getGameId();
            console.log(gameId);
            gameId = currentId+1;
            console.log(gameId);
            player.updateGameId(gameId);

            player.getCount();
            this.inputName.hide();           
            this.inputPass.hide();
            bg = bg2;
            this.title.position(displayWidth/2-130, 250)
             
            this.play.hide();
            this.create.hide();

            player.name = this.inputName.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();

            player.updateCount(playerCount);
            this.greeting.html("HELLO " + player.name.toUpperCase());
            this.greeting.position(displayWidth/2-80, displayHeight/4+128);


        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            IceCount = -3;
            player.updateIceCount();
            game.update(0);
        }
        )
        this.button.mousePressed(()=>{
            player.getCount();
            this.inputName.hide();           
            this.inputId.hide();
            this.inputPass.hide();
            bg = bg2;
            this.title.position(displayWidth/2-130, 250)

            this.button.hide();
            player.name = this.inputName.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            
            player.updateCount(playerCount);
            this.greeting.html("HELLO " + player.name.toUpperCase());
            this.greeting.position(displayWidth/2-80, displayHeight/4+128);

            //starting.loop();

        })
    }
}