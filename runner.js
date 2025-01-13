class Runner {

    constructor() {

    }

    start() {
        this.running = true
        randomInt(2) === 0 ? this.startRun(true) : this.startRun(false)
    }

    startRun(dir) {
        this.direction = dir
        if(this.direction) {
            console.log("Going left")
            this.doorPos = randomInt(this.LEFT_DOORS.length)
            let start = this.LEFT_DOORS[this.doorPos]
            this.x = start[0]
            this.y = start[1]
        } else {
            console.log("Going right")
            this.doorPos = randomInt(this.RIGHT_DOORS.length)
            let start = this.RIGHT_DOORS[this.doorPos]
            this.x = start[0]
            this.y = start[1]
        }
        
    }

    update() {
        if(this.running) {
            if(this.direction) {
                this.x += 4
            } else {
                this.x -= 4
            }
        }
        
    };

    draw(ctx) {
        ctx.imageSmoothingEnabled = false;
        if(this.direction && this.x < this.RIGHT_DOORS[this.doorPos][0]) {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3)
        } else if(!this.direction && this.x > this.LEFT_DOORS[this.doorPos][0]) {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3, true)
        } else if(this.running) {
            setTimeout(() => {
                this.start();
            }, 500 + randomInt(2000))
            this.running = false;
        }
        
    };
}