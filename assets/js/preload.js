var preloadState = {
	
	preload: function() {
      game.stage.backgroundColor = "#6ec7ff";
      var titleStyle = { font: 'Londrina Solid', fill: "#000000", fontSize: '120px'};
        titleText = game.add.text(game.world.centerX, 300, "loading...", titleStyle);
        titleText.anchor.set(0.5);

      // intro images
      game.load.image('title', 'assets/img/title.png', 583, 142);
      game.load.image('transparent', 'assets/img/transparent.png', 900, 700);
      game.load.image('black', 'assets/img/black.png', 900, 700);
      game.load.spritesheet('keyboard', 'assets/img/intro/keyboard.png', 785, 305);
      game.load.spritesheet('mouse', 'assets/img/intro/mouse.png', 188, 307);
      game.load.spritesheet('return', 'assets/img/intro/return.png', 350, 225);
      game.load.spritesheet('selection', 'assets/img/intro/selection.png', 180, 137);
      game.load.spritesheet('spaceBar', 'assets/img/intro/spaceBar.png', 850, 150);
      game.load.spritesheet('twoSwitch', 'assets/img/intro/twoSwitch.png', 444, 213);

      // menu images 
      game.load.spritesheet('mainMenu', 'assets/img/menu/mainMenu.png', 735, 221);
      game.load.spritesheet('textMenu', 'assets/img/menu/textMenu.png', 735, 221);
      game.load.spritesheet('speedMenu', 'assets/img/menu/speedMenu.png', 735, 221);
      game.load.spritesheet('backButton', 'assets/img/menu/backButton.png', 152, 83);
      game.load.spritesheet('carrots', 'assets/img/menu/carrots.png', 550, 33);

      // map images
      game.load.image('map', 'assets/img/map.png', 926, 390);
      game.load.spritesheet('mapCarrots', 'assets/img/mapCarrots.png', 727, 49);


      // ice cream images
      game.load.image('iceCreamBackground','assets/img/iceCream/iceCreamBackground.png', 521, 534);
      game.load.spritesheet('iceCreamMenu','assets/img/iceCream/iceCreamMenu.png', 328, 455);
      game.load.spritesheet('flavorMenu','assets/img/iceCream/flavorMenu.png', 328, 455);
      game.load.spritesheet('coneMenu','assets/img/iceCream/coneMenu.png', 328, 455);
      game.load.spritesheet('syrupMenu','assets/img/iceCream/syrupMenu.png', 328, 455);
      game.load.spritesheet('sprinklesMenu','assets/img/iceCream/sprinklesMenu.png', 328, 455);
      game.load.spritesheet('fruitMenu','assets/img/iceCream/fruitMenu.png', 328, 455);
      game.load.spritesheet('cookieMenu','assets/img/iceCream/cookieMenu.png', 328, 455);
      game.load.spritesheet('doneScreen', 'assets/img/iceCream/doneScreen.png', 269, 75);

      game.load.spritesheet('flavor', 'assets/img/iceCream/flavor.png', 236, 177);
      game.load.spritesheet('cone', 'assets/img/iceCream/cone.png', 289, 242);
      game.load.spritesheet('syrup', 'assets/img/iceCream/syrup.png', 156, 150);
      game.load.spritesheet('sprinkles', 'assets/img/iceCream/sprinkles.png', 153, 89);
      game.load.spritesheet('fruit', 'assets/img/iceCream/fruit.png', 92, 69);
      game.load.spritesheet('cookie', 'assets/img/iceCream/cookie.png', 107, 136);

      game.load.spritesheet('doneButton', 'assets/img/iceCream/doneButton.png', 83, 75);

      // robot images
      game.load.image('robotBackground','assets/img/robot/robotBackground.png', 521, 534);
      game.load.spritesheet('robotMenu','assets/img/robot/robotMenu.png', 328, 455);
      game.load.spritesheet('bodyMenu','assets/img/robot/bodyMenu.png', 328, 455);
      game.load.spritesheet('designMenu','assets/img/robot/designMenu.png', 328, 455);
      game.load.spritesheet('legMenu','assets/img/robot/legMenu.png', 328, 455);
      game.load.spritesheet('armMenu','assets/img/robot/armMenu.png', 328, 455);
      game.load.spritesheet('faceMenu','assets/img/robot/faceMenu.png', 328, 455);
      game.load.spritesheet('antennaMenu','assets/img/robot/antennaMenu.png', 328, 455);
      game.load.spritesheet('doneScreen2', 'assets/img/robot/doneScreen2.png', 269, 75);

      game.load.spritesheet('body','assets/img/robot/body.png', 215, 312);
      game.load.spritesheet('design','assets/img/robot/design.png', 97, 92);
      game.load.spritesheet('leg','assets/img/robot/leg.png', 247, 99);
      game.load.spritesheet('face','assets/img/robot/face.png', 62, 78);
      game.load.spritesheet('antenna','assets/img/robot/antenna.png', 116, 69);

      game.load.spritesheet('gray','assets/img/robot/gray.png', 291, 281);
      game.load.spritesheet('green','assets/img/robot/green.png', 291, 281);
      game.load.spritesheet('purple','assets/img/robot/purple.png', 291, 281);
      game.load.spritesheet('red','assets/img/robot/red.png', 291, 281);
      game.load.spritesheet('blue','assets/img/robot/blue.png', 291, 281);
      game.load.spritesheet('brown','assets/img/robot/brown.png', 291, 281);

      game.load.spritesheet('doneButton2', 'assets/img/robot/doneButton2.png', 83, 75);

      // character images 
      game.load.image('characterBackground', 'assets/img/character/characterBackground.png', 521, 534);
      game.load.spritesheet('characterMenu', 'assets/img/character/characterMenu.png', 328, 455);
      game.load.spritesheet('skinMenu', 'assets/img/character/skinMenu.png', 328, 455);
      game.load.spritesheet('hairMenu1', 'assets/img/character/hairMenu1.png', 328, 524);
      game.load.spritesheet('hairMenu2', 'assets/img/character/hairMenu2.png', 328, 593);
      game.load.spritesheet('hairMenu3', 'assets/img/character/hairMenu3.png', 328, 524);
      game.load.spritesheet('eyeMenu', 'assets/img/character/eyeMenu.png', 328, 455);
      game.load.spritesheet('mouthMenu', 'assets/img/character/mouthMenu.png', 328, 455);
      game.load.spritesheet('accessoryMenu', 'assets/img/character/accessoryMenu.png', 328, 455);
      game.load.spritesheet('hairColorMenu', 'assets/img/character/hairColorMenu.png', 328, 455);
      game.load.spritesheet('doneScreen3', 'assets/img/character/doneScreen3.png', 269, 75);

<<<<<<< HEAD
      game.load.spritesheet('skin', 'assets/img/character/skin.png', 202, 265);
=======
      game.load.spritesheet('skin', 'assets/img/character/skin.png', 237, 312);
>>>>>>> gh-pages
      game.load.spritesheet('eyes', 'assets/img/character/eyes.png', 140, 46);
      game.load.image('nose', 'assets/img/character/nose.png', 32, 15);
      game.load.spritesheet('mouth', 'assets/img/character/mouth.png', 88, 60);
      game.load.spritesheet('hair', 'assets/img/character/hair.png', 423, 439);
      game.load.spritesheet('hairBrown', 'assets/img/character/hairBrown.png', 423, 439);
      game.load.spritesheet('hairBlonde', 'assets/img/character/hairBlonde.png', 423, 439);
      game.load.spritesheet('hairOrange', 'assets/img/character/hairOrange.png', 423, 439);
      game.load.spritesheet('hairPink', 'assets/img/character/hairPink.png', 423, 439);
      game.load.spritesheet('hairBlue', 'assets/img/character/hairBlue.png', 423, 439);
<<<<<<< HEAD
      game.load.spritesheet('hairExtra', 'assets/img/character/hairExtra.png', 423, 439);
=======
>>>>>>> gh-pages
      game.load.spritesheet('accessories', 'assets/img/character/accessories.png', 216, 308);

      game.load.spritesheet('doneButton3', 'assets/img/character/doneButton3.png', 83, 75);

      // house images
      game.load.image('houseBackground','assets/img/house/houseBackground.png', 521, 534);
      game.load.image('outline','assets/img/house/outline.png', 521, 534);
      game.load.spritesheet('houseMenu','assets/img/house/houseMenu.png', 328, 454);
      game.load.spritesheet('groundMenu','assets/img/house/groundMenu.png', 328, 454);
      game.load.spritesheet('textureMenu','assets/img/house/textureMenu.png', 328, 454);
      game.load.spritesheet('skyMenu','assets/img/house/skyMenu.png', 328, 454);
      game.load.spritesheet('roofMenu','assets/img/house/roofMenu.png', 328, 454);
      game.load.spritesheet('foliageMenu','assets/img/house/foliageMenu.png', 328, 454);
      game.load.spritesheet('windowsMenu','assets/img/house/windowsMenu.png', 328, 454);
      game.load.spritesheet('doneScreen4', 'assets/img/house/doneScreen4.png', 269, 75);

      game.load.spritesheet('ground','assets/img/house/ground.png', 432, 108);
      game.load.spritesheet('texture','assets/img/house/texture.png', 258, 258);
      game.load.spritesheet('sky','assets/img/house/sky.png', 432, 335);
      game.load.spritesheet('roof','assets/img/house/roof.png', 255, 118);
      game.load.spritesheet('foliage','assets/img/house/foliage.png', 434, 222);
      game.load.spritesheet('windows','assets/img/house/windows.png', 155, 56);
      
      game.load.spritesheet('doneButton4', 'assets/img/house/doneButton4.png', 83, 75);
	},

	create: function() {
		game.state.start('start');
	}

}