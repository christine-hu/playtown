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

      // character images 
      game.load.spritesheet('characterMenu', 'assets/img/characterMenu.png', 305, 434);
      game.load.spritesheet('skinMenu', 'assets/img/skinMenu.png', 305, 434);
      game.load.spritesheet('hairMenu1', 'assets/img/hairMenu1.png', 305, 501);
      game.load.spritesheet('hairMenu2', 'assets/img/hairMenu2.png', 305, 566);
      game.load.spritesheet('hairMenu3', 'assets/img/hairMenu3.png', 305, 499);
      game.load.spritesheet('eyeMenu', 'assets/img/eyeMenu.png', 305, 434);
      game.load.spritesheet('mouthMenu', 'assets/img/mouthMenu.png', 305, 434);
      game.load.spritesheet('accessoryMenu', 'assets/img/accessoryMenu.png', 305, 434);
      game.load.spritesheet('doneButton', 'assets/img/doneButton.png', 150, 82);
      game.load.image('characterBackground', 'assets/img/characterBackground.png', 480, 492);
      game.load.spritesheet('skin', 'assets/img/skin.png', 202, 265);
      game.load.spritesheet('eyes', 'assets/img/eyes.png', 140, 46);
      game.load.image('nose', 'assets/img/nose.png', 32, 15);
      game.load.spritesheet('mouth', 'assets/img/mouth.png', 88, 60);
      game.load.spritesheet('hair', 'assets/img/hair.png', 423, 439);
      game.load.spritesheet('accessories', 'assets/img/accessories.png', 216, 308);

	},

	create: function() {
		game.state.start('start');
	}

}