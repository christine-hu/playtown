var houseState = {

	create: function() {
		nextState = false; 
		var backdrop;
		var outline;

		// screens 
		var mainScreen;
		var doneScreen;

		var textureScreen;
		var windowsScreen;
		var roofScreen;
		var skyScreen;
		var groundScreen;
		var foliageScreen;

		// screens array
		var screens;

		// buttons
		var doneButton;
		var button;

		// setting up the state 
		game.stage.backgroundColor = '#a0e07d';
		backdrop = game.add.sprite(365, 112, 'houseBackground');
		p1 = game.add.text(0, 0, "Design a house!", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 40, 700, 70);

<<<<<<< HEAD
         // initializing done button
=======
         // initializing buttons
>>>>>>> gh-pages
        doneButton = game.add.sprite(720, 560, 'doneButton4');
        doneButton.animations.add('done', [0, 0, 0, 0, 0, 0, 1]);
        doneButton.animations.add('back', [2, 2, 2, 2, 2, 2, 3]);

        button = game.add.sprite(320, 590, 'doneScreen4');
		button.animations.add('scroll');
		button.visible = false;

		// initializing menu screens
		mainScreen = new menuScreen(game.add.sprite(45, 155, 'houseMenu'), doneButton);
		mainScreen.initializeMain();
		mainScreen.text = 'Design a house!'
		mainScreen.endText = 'Wow!'

		textureScreen = new menuScreen(game.add.sprite(45, 155, 'textureMenu'), doneButton, 'Select a house style!', 'texture', mainScreen);

<<<<<<< HEAD
		windowsScreen = new menuScreen(game.add.sprite(45, 155, 'windowsMenu'), doneButton, 'Select a window!', 'windows', mainScreen);

		roofScreen = new menuScreen(game.add.sprite(45, 155, 'roofMenu'), doneButton, 'Select a roof!', 'roof', mainScreen);
=======
		roofScreen = new menuScreen(game.add.sprite(45, 155, 'roofMenu'), doneButton, 'Select a roof!', 'roof', mainScreen);

		windowsScreen = new menuScreen(game.add.sprite(45, 155, 'windowsMenu'), doneButton, 'Select a window!', 'windows', mainScreen);
>>>>>>> gh-pages

		skyScreen = new menuScreen(game.add.sprite(45, 155, 'skyMenu'), doneButton, 'Select a sky!', 'sky', mainScreen);
		
		groundScreen = new menuScreen(game.add.sprite(45, 155, 'groundMenu'), doneButton, 'Select a ground color!', 'ground', mainScreen);

		foliageScreen = new menuScreen(game.add.sprite(45, 155, 'foliageMenu'), doneButton, 'Select a background!', 'foliage', mainScreen);

		// putting screens into array
<<<<<<< HEAD
		screens = [textureScreen, windowsScreen, roofScreen, skyScreen, groundScreen, foliageScreen];
=======
		screens = [textureScreen, roofScreen, windowsScreen, skyScreen, groundScreen, foliageScreen];
>>>>>>> gh-pages
		doneScreen = new endScreen(screens, button, backdrop);
		screens[6] = doneScreen;

        // displaying house components   
        skyScreen.current = game.add.sprite(410, 155, 'sky', 6);
        groundScreen.current = game.add.sprite(410, 490, 'ground', 6);
        foliageScreen.current = game.add.sprite(407, 272, 'foliage', 5);
        outline = game.add.sprite(405, 153, 'outline', 0);
        	screens[7] = outline; // for translateGroup()
        textureScreen.current = game.add.sprite(495, 285, 'texture', 6);
        windowsScreen.current = game.add.sprite(545, 370, 'windows', 6);
        roofScreen.current = game.add.sprite(496, 245, 'roof', 6);
        doneButton.bringToTop();

        // fade effect image (above all other sprites)
        black = game.add.sprite(0, 0, 'black');

        // main screen selection
		control.onUp.add(menuSelection, this);
		function menuSelection(pointer) {
			// stops mouseIn & mouseOut events 
			if (control === game.input && !pointer.withinGame) { 
				return; 
			}

			// choosing screens
			if (mainScreen.isDisplayed()) {
				screens[mainScreen.sprite.frame].display = true;
				mainScreen.display = false;
			}

			// displaying screens
			for (i = 0; i < screens.length; i++) {
				if (screens[i].display) {
					displayScreen(screens[i]);
					break;
				}
			}
		}

		// tab scanning 
		if (twoSwitches) {
			tab.onUp.add(scan, this);
			function scan() {
				scanScreen(mainScreen);
				for (i = 0; i < screens.length - 2; i++) {
					scanScreen(screens[i])
				}
				if (doneScreen) {
					button.frame = button.frame + 1; 
				}
			}
		}

		// escape to previous state
        escape.onUp.add(prevState, this);
		function prevState() {
			game.state.start('map');
		}
	}, 

	update: function() {
		if (nextState) { 
			fadeOut('map'); 
		} else {
			fadeIn();
        }
	}
}