const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./assets/hallway.png");

// spritesheets
ASSET_MANAGER.queueDownload("./assets/daphne.png");
ASSET_MANAGER.queueDownload("./assets/fred.png");
ASSET_MANAGER.queueDownload("./assets/scooby.png");
ASSET_MANAGER.queueDownload("./assets/shaggy.png");
ASSET_MANAGER.queueDownload("./assets/velma.png");



ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	// gameEngine.addEntity(new Shaggy(gameEngine));
	// gameEngine.addEntity(new Scooby(gameEngine));
	// gameEngine.addEntity(new Velma(gameEngine))
	gameEngine.addEntity(new Background());
	characters = [new Shaggy(gameEngine), new Scooby(gameEngine), new Velma(gameEngine)];

	
	for(let i = 0; i < characters.length; i++) {
		setTimeout(() => {
			let character = characters.pop()
			gameEngine.addEntity(character)
			character.start();
		}, 500 + randomInt(3000))
		
	}
	


	gameEngine.init(ctx);

	gameEngine.start();
});
