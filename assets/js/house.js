var houseState = {

	create: function() {
		var outline;

		// menu screens 
		var mainScreen;
		var textureScreen;
		var windowsScreen;
		var roofScreen;
		var skyScreen;
		var groundScreen;
		var foliageScreen;

		// done button
		var doneButtonSprite;
		var doneAnim;
		var backAnim;

		// setting up the state 
		game.stage.backgroundColor = '#a0e07d';
		backdrop = game.add.sprite(365, 112, 'houseBackground');
		p1 = game.add.text(0, 0, "Design a house!", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 40, 700, 70);

         // initializing done button
        doneButtonSprite = game.add.sprite(720, 560, 'doneButton');
        doneButtonSprite.animations.add('done', [12, 12, 12, 12, 12, 12, 13]);
        doneButtonSprite.animations.add('back', [14, 14, 14, 14, 14, 14, 15]);
        doneAnim = doneButtonSprite.animations.play('done', speed, true);
        backAnim = doneButtonSprite.animations.getAnimation('back');

		// initializing menu screens
		mainScreen = new menuScreen(game.add.sprite(45, 155, 'houseMenu'));
			mainScreen.sprite.visible = true;
			mainScreen.anim.play(speed, true);
			mainScreen.display = true;

		textureScreen = new menuScreen(game.add.sprite(45, 155, 'textureMenu'), 'Select a house style!', 'texture', mainScreen, backAnim, doneAnim, 'Design a house!');

		windowsScreen = new menuScreen(game.add.sprite(45, 155, 'windowsMenu'), 'Select a window!', 'windows', mainScreen, backAnim, doneAnim, 'Design a house!');

		roofScreen = new menuScreen(game.add.sprite(45, 155, 'roofMenu'), 'Select a roof!', 'roof', mainScreen, backAnim, doneAnim, 'Design a house!');

		skyScreen = new menuScreen(game.add.sprite(45, 155, 'skyMenu'), 'Select a sky!', 'sky', mainScreen, backAnim, doneAnim, 'Design a house!');
		
		groundScreen = new menuScreen(game.add.sprite(45, 155, 'groundMenu'), 'Select a ground color!', 'ground', mainScreen, backAnim, doneAnim, 'Design a house!');

		foliageScreen = new menuScreen(game.add.sprite(45, 155, 'foliageMenu'), 'Select a background!', 'foliage', mainScreen, backAnim, doneAnim, 'Design a house!');

        // displaying house components   
        skyScreen.current = game.add.sprite(410, 155, 'sky', 6);
        groundScreen.current = game.add.sprite(410, 490, 'ground', 6);
        foliageScreen.current = game.add.sprite(407, 272, 'foliage', 5);
        outline = game.add.sprite(405, 153, 'outline', 0);
        textureScreen.current = game.add.sprite(495, 285, 'texture', 6);
        windowsScreen.current = game.add.sprite(545, 370, 'windows', 6);
        roofScreen.current = game.add.sprite(496, 245, 'roof', 6);
        doneButtonSprite.bringToTop();

        // line that controls all the logic!!!! :o
		control.onUp.add(menuSelection, this);

		function menuSelection(pointer) {
			// stops mouseIn & mouseOut events 
			if (control == game.input && !pointer.withinGame) {return;}

			// choosing screens
			if (mainScreen.isDisplayed()) {
				if (mainScreen.sprite.frame === 0) { textureScreen.display = true; } 
				else if (mainScreen.sprite.frame === 1) { roofScreen.display = true; } 
				else if (mainScreen.sprite.frame === 2) { windowsScreen.display = true; } 
				else if (mainScreen.sprite.frame === 3) { skyScreen.display = true; } 
				else if (mainScreen.sprite.frame === 4) { groundScreen.display = true; } 
				else if (mainScreen.sprite.frame === 5) { foliageScreen.display = true; } 
				else if (mainScreen.sprite.frame === 6) { game.state.start('map', true, false, control, pStyle); }
				mainScreen.display = false;
			}

			// displaying preference screens
			if (textureScreen.isDisplayed()) {
				displayScreen(textureScreen);
			}
			if (windowsScreen.isDisplayed()) {
				displayScreen(windowsScreen);
			}
			if (roofScreen.isDisplayed()) {
				displayScreen(roofScreen);
			}
			if (skyScreen.isDisplayed()) {
				displayScreen(skyScreen);
			}
			if (foliageScreen.isDisplayed()) {
				displayScreen(foliageScreen);
			}
			if (groundScreen.isDisplayed()) {
				displayScreen(groundScreen);
			}
		}

	}
}