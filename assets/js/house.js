var houseState = {

	create: function() {
		nextState = false; 
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

        // escaping to previous state
        escape.onUp.add(prevState, this);

		function prevState() {
			game.state.start('map');
		}

		// tab scanning 
		if (twoSwitches) {
			tab.onUp.add(scan, this);
			function scan() {
				scanScreen(mainScreen);
				scanScreen(textureScreen);
				scanScreen(windowsScreen);
				scanScreen(roofScreen);
				scanScreen(skyScreen);
				scanScreen(groundScreen);
				scanScreen(foliageScreen);
			}
		}

         // initializing done button
        doneButton = game.add.sprite(720, 560, 'doneButton4');
        doneButton.animations.add('done', [0, 0, 0, 0, 0, 0, 1]);
        doneButton.animations.add('back', [2, 2, 2, 2, 2, 2, 3]);

		// initializing menu screens
		mainScreen = new menuScreen(game.add.sprite(45, 155, 'houseMenu'), doneButton);
		mainScreen.initializeMain();

		textureScreen = new menuScreen(game.add.sprite(45, 155, 'textureMenu'), doneButton, 'Select a house style!', 'texture', mainScreen, 'Design a house!');

		windowsScreen = new menuScreen(game.add.sprite(45, 155, 'windowsMenu'), doneButton, 'Select a window!', 'windows', mainScreen, 'Design a house!');

		roofScreen = new menuScreen(game.add.sprite(45, 155, 'roofMenu'), doneButton, 'Select a roof!', 'roof', mainScreen, 'Design a house!');

		skyScreen = new menuScreen(game.add.sprite(45, 155, 'skyMenu'), doneButton, 'Select a sky!', 'sky', mainScreen, 'Design a house!');
		
		groundScreen = new menuScreen(game.add.sprite(45, 155, 'groundMenu'), doneButton, 'Select a ground color!', 'ground', mainScreen, 'Design a house!');

		foliageScreen = new menuScreen(game.add.sprite(45, 155, 'foliageMenu'), doneButton, 'Select a background!', 'foliage', mainScreen, 'Design a house!');

        // displaying house components   
        skyScreen.current = game.add.sprite(410, 155, 'sky', 6);
        groundScreen.current = game.add.sprite(410, 490, 'ground', 6);
        foliageScreen.current = game.add.sprite(407, 272, 'foliage', 5);
        outline = game.add.sprite(405, 153, 'outline', 0);
        textureScreen.current = game.add.sprite(495, 285, 'texture', 6);
        windowsScreen.current = game.add.sprite(545, 370, 'windows', 6);
        roofScreen.current = game.add.sprite(496, 245, 'roof', 6);
        doneButton.bringToTop();

        // fade effect image 
        black = game.add.sprite(0, 0, 'black');

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
				else if (mainScreen.sprite.frame === 6) { nextState = true; }
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

	}, 

	update: function() {
		if (nextState) { fadeOut('map'); }
		else {
			fadeIn();
        }
	}
}