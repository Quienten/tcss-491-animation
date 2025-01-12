class Background {

    constructor(game) {

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./assets/hallway.png"), 0, 0, 1024, 768)
    };
}