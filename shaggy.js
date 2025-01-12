

class Shaggy extends Runner {

 

    constructor(game) {
        super();
        this.game = game
        this.animator = new Animator(
            ASSET_MANAGER.getAsset("./assets/shaggy.png"),
            49, 153,
            59, 50,
            10, 0.12,
            0, true
        );

        this.LEFT_DOORS = [
            [20, 768-(50*3)],
            [175, 548],
            [290, 500]
        ]
        
        this.RIGHT_DOORS = [
            [1024, 768-(50*3)],
            [800, 548],
            [650, 500],
        ]   

        this.running = false
    }
}