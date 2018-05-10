var preloadState = {
	
	preload: function() {
		game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
		game.load.image('transparent', 'assets/img/transparent.png', 900, 700);
        game.load.spritesheet('keyboard', 'assets/img/keyboard.png', 700, 271);
        game.load.spritesheet('mouse', 'assets/img/mouse.png', 124, 199.5);
        game.load.spritesheet('return', 'assets/img/return.png', 400, 300);
        game.load.spritesheet('selection', 'assets/img/selection.png', 180, 137);
        game.load.spritesheet('spaceBar', 'assets/img/spaceBar.png', 600, 71);
	},

	create: function() {
		game.state.start('start');
	}

}