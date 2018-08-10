var robotState = {

	create: function() {
		nextState = false; 
		var backdrop; 

		// screens
		var mainScreen;
		var doneScreen;

		var bodyScreen;
		var faceScreen;
		var antennaScreen;
		var armScreen;
		var legScreen;
		var designScreen;

		// screens array
		var screens;

		// buttons
		var doneButton;
		var button;

		// setting up the state
		game.stage.backgroundColor = '#ffae68';
		backdrop = game.add.sprite(365, 112, 'robotBackground');
		p1 = game.add.text(0, 0, "Build a robot!", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 40, 700, 70);

        // initializing buttons
		doneButton = game.add.sprite(720, 560, 'doneButton2');
        doneButton.animations.add('done', [0, 0, 0, 0, 0, 0, 1]);
        doneButton.animations.add('back', [2, 2, 2, 2, 2, 2, 3]);

        button = game.add.sprite(320, 590, 'doneScreen2');
		button.animations.add('scroll');
		button.visible = false;

		// initializing menu screens
		mainScreen = new menuScreen(game.add.sprite(45, 155, 'robotMenu'), doneButton);
		mainScreen.initializeMain();
		mainScreen.text = 'Build a robot!'
		mainScreen.endText = 'Awesome!'

		bodyScreen = new menuScreen(game.add.sprite(45, 155, 'bodyMenu'), doneButton, 'Select a body color!', 'body', mainScreen);
		bodyScreen.displaySelection = function() {
			if (bodyScreen.sprite.frame !== 6) {
				bodyScreen.current.loadTexture(bodyScreen.texture, bodyScreen.sprite.frame);
			}
			if (faceScreen.current.frame == 6) {
				faceScreen.current.loadTexture(faceScreen.texture, 3);
			}
		}

		faceScreen = new menuScreen(game.add.sprite(45, 155, 'faceMenu'), doneButton, 'Select a face!', 'face', mainScreen);

		antennaScreen = new menuScreen(game.add.sprite(45, 155, 'antennaMenu'), doneButton, 'Select an antenna!', 'antenna', mainScreen);

		armScreen = new menuScreen(game.add.sprite(45, 155, 'armMenu'), doneButton, 'Select arms!', 'gray', mainScreen);
			armScreen.armColor = 'gray';
			armScreen.armStyle = 6;
			armScreen.displaySelection = function() {
				if (armScreen.sprite.frame !== 6) {
					armScreen.armStyle = armScreen.sprite.frame;
					armScreen.current.loadTexture(armScreen.armColor, armScreen.armStyle);
				} 
			}

		legScreen = new menuScreen(game.add.sprite(45, 155, 'legMenu'), doneButton, 'Select a wheel color!', 'leg', mainScreen);
			legScreen.displaySelection = function() {
				if (legScreen.sprite.frame !== 6) {
					if (legScreen.sprite.frame === 0) { armScreen.armColor = 'gray'; }
					else if (legScreen.sprite.frame === 1) { armScreen.armColor = 'purple'; }
					else if (legScreen.sprite.frame === 2) { armScreen.armColor = 'red'; }
					else if (legScreen.sprite.frame === 3) { armScreen.armColor = 'blue'; }
					else if (legScreen.sprite.frame === 4) { armScreen.armColor = 'green'; }
					else if (legScreen.sprite.frame === 5) { armScreen.armColor = 'brown'; }
					if (armScreen.armStyle === 6) { armScreen.armStyle = 0; }
					legScreen.current.loadTexture(legScreen.texture, legScreen.sprite.frame);
					armScreen.current.loadTexture(armScreen.armColor, armScreen.armStyle);
				} 
			}

		designScreen = new menuScreen(game.add.sprite(45, 155, 'designMenu'), doneButton, 'Select a design!', 'design', mainScreen);

		// putting screens into array
		screens = [bodyScreen, armScreen, legScreen, faceScreen, antennaScreen, designScreen];
		doneScreen = new endScreen(screens, button, backdrop);
		screens[6] = doneScreen;

		// displaying robot components 
        armScreen.current = game.add.sprite(482, 206, armScreen.armColor, armScreen.armStyle);
        antennaScreen.current = game.add.sprite(569, 170, 'antenna', 6);
        bodyScreen.current = game.add.sprite(520, 200, 'body', 6);
        legScreen.current = game.add.sprite(504, 460, 'leg', 6);
        designScreen.current = game.add.sprite(580, 330, 'design', 6);
        faceScreen.current = game.add.sprite(597, 233, 'face', 6);

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
				for (i = 0; i < screens.length - 1; i++) {
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

	// fade in/out animation
	update: function() {
		if (nextState) { 
			fadeOut('map'); 
		} else {
			fadeIn();
        }
	}
}
