let app;
let player;
window.onload = function() {
	app = new PIXI.Application(
		{
			width:800,
			height:600,
			backgroundColor:0xAAAAAA
		}
	);
	document.body.appendChild(app.view);
	
	player = PIXI.Sprite.from("imgs/player.png");
	player.anchor.set(0.5);
	player.width = app.view.width/2;
	player.height = app.view.height/2;
	
	app.stage.addChild(player);
}