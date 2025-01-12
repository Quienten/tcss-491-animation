

class Velma extends Runner {

 

    constructor(game) {
        super();
        this.game = game
        this.animator = new Animator(
            ASSET_MANAGER.getAsset("./assets/velma.png"),
            50, 126,
            36, 56,
            12, 0.12,
            0, true
        );

        this.LEFT_DOORS = [
            [20, 768-(56*3)],
            [175, 548],
            [290, 500]
        ]
        
        this.RIGHT_DOORS = [
            [1024, 768-(56*3)],
            [800, 548],
            [650, 500],
        ]   

        this.running = false
    }
}
