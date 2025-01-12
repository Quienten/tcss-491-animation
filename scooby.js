class Scooby extends Runner {

    
    constructor(game) {
        super();
        this.game = game
        this.animator = new Animator(
            ASSET_MANAGER.getAsset("./assets/scooby.png"),
            49, 132,
            67, 34,
            7, 0.12,
            0, true
        );
        this.running = false

        this.LEFT_DOORS = [
            [20, 768-(34*3)],
            [160, 600],
            [290, 550]
        ]
        
        this.RIGHT_DOORS = [
            [1024, 768-(34*3)],
            [800, 600],
            [650, 550],
        ] 
        
        this.running = false
    }
}