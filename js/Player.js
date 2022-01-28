class Player {
    constructor() {
        this.index = null;
        this.positionX = 0;        
        this.positionY = 0;
        this.state = "water";
        this.name = null;
        this.rank = null;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount')

        playerCountRef.on("value", function (data) {
            playerCount = data.val()
        })
    }

    getGameId() {
        var currentIdRef = database.ref('gameId')

        currentIdRef.on("value", function (data) {
            currentId = data.val()
        })
    }

    getIceCount() {
        var IceCountRef = database.ref('Ice/iceCount')

        IceCountRef.on("value", function (data) {
            IceCount = data.val()
        })
    }

    updateIceCount(){
        database.ref('Ice').set({
            iceCount: IceCount,
        })
    }
    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            X: this.positionX,
            Y: this.positionY,
            state: this.state,
        })

    }

    updatePos(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            X: this.positionX,
            Y: this.positionY,
            state: this.state,
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        })
    }

    updateGameId(gameId) {
        database.ref('/').update({
            gameCount: gameId
        })
    }

    static getPlayerInfo() {

        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val()
        })
    }

}
