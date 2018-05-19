var preloadState = {
	
	preload: function() {
      // google web fonts
		game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');

      // intro images
      game.load.image('transparent', 'assets/img/transparent.png', 900, 700);
      game.load.spritesheet('keyboard', 'assets/img/keyboard.png', 700, 271);
      game.load.spritesheet('mouse', 'assets/img/mouse.png', 123, 200);
      game.load.spritesheet('return', 'assets/img/return.png', 300, 225);
      game.load.spritesheet('selection', 'assets/img/selection.png', 180, 137);
      game.load.spritesheet('spaceBar', 'assets/img/spaceBar.png', 600, 71);

      // menu images 
      game.load.spritesheet('mainMenuColor', 'assets/img/color/mainMenuColor.png', 700, 404);
      game.load.spritesheet('mainMenuBW', 'assets/img/bw/mainMenuBW.png', 700, 404);
      game.load.spritesheet('mainMenuWB', 'assets/img/wb/mainMenuWB.png', 700, 404);

      game.load.spritesheet('textMenuColor', 'assets/img/color/textMenuColor.png', 700, 193);
      game.load.spritesheet('textMenuBW', 'assets/img/bw/textMenuBW.png', 700, 193);
      game.load.spritesheet('textMenuWB', 'assets/img/wb/textMenuWB.png', 700, 193);

      game.load.spritesheet('speedMenuColor', 'assets/img/color/speedMenuColor.png', 700, 193);
      game.load.spritesheet('speedMenuBW', 'assets/img/bw/speedMenuBW.png', 700, 193);
      game.load.spritesheet('speedMenuWB', 'assets/img/wb/speedMenuWB.png', 700, 193);

      game.load.spritesheet('colorMenuColor', 'assets/img/color/colorMenuColor.png', 700, 193);
      game.load.spritesheet('colorMenuBW', 'assets/img/bw/colorMenuBW.png', 700, 193);  
      game.load.spritesheet('colorMenuWB', 'assets/img/wb/colorMenuWB.png', 700, 193);  

      game.load.spritesheet('backButtonColor', 'assets/img/color/backButtonColor.png', 150, 83);
      game.load.spritesheet('backButtonBW', 'assets/img/bw/backButtonBW.png', 150, 83);
      game.load.spritesheet('backButtonWB', 'assets/img/wb/backButtonWB.png', 150, 83);

	},

	create: function() {
		game.state.start('start');
	}

}