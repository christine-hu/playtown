var robotState = {

	create: function() {
		nextState = false; 
		var backdrop; 

		// menu screens
		var mainScreen;
		var bodyScreen;
		var faceScreen;
		var antennaScreen;
		var armScreen;
		var legScreen;
		var designScreen;

		// done button
		var doneButtonSprite;
		var doneAnim;
		var backAnim; 

		// setting up the state
		game.stage.backgroundColor = '#ffae68';
		backdrop = game.add.sprite(365, 112, 'robotBackground');
		p1 = game.add.text(0, 0, "Build a robot!", pStyle);
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
				scanScreen(bodyScreen);
				scanScreen(faceScreen);
				scanScreen(antennaScreen);
				scanScreen(armScreen);
				scanScreen(legScreen);
				scanScreen(designScreen);
			}
		}

        // initializing done button
		doneButton = game.add.sprite(720, 560, 'doneButton2');
        doneButton.animations.add('done', [0, 0, 0, 0, 0, 0, 1]);
        doneButton.animations.add('back', [2, 2, 2, 2, 2, 2, 3]);

		// initializing menu screens
		mainScreen = new menuScreen(game.add.sprite(45, 155, 'robotMenu'), doneButton);
		mainScreen.initializeMain();

		bodyScreen = new menuScreen(game.add.sprite(45, 155, 'bodyMenu'), doneButton, 'Select a body color!', 'body', mainScreen, 'Build a robot!');

		faceScreen = new menuScreen(game.add.sprite(45, 155, 'faceMenu'), doneButton, 'Select a face!', 'face', mainScreen, 'Build a robot!');

		antennaScreen = new menuScreen(game.add.sprite(45, 155, 'antennaMenu'), doneButton, 'Select an antenna!', 'antenna', mainScreen, 'Build a robot!');

		armScreen = new menuScreen(game.add.sprite(45, 155, 'armMenu'), doneButton, 'Select arms!', 'gray', mainScreen, 'Build a robot!');
			armScreen.armColor = 'gray';
			armScreen.armStyle = 6;
			armScreen.displaySelection = function() {
				if (armScreen.sprite.frame !== 6) {
					armScreen.armStyle = armScreen.sprite.frame;
					armScreen.current.loadTexture(armScreen.armColor, armScreen.armStyle);
				} 
			}

		legScreen = new menuScreen(game.add.sprite(45, 155, 'legMenu'), doneButton, 'Select a wheel color!', 'leg', mainScreen, 'Build a robot!');
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


		designScreen = new menuScreen(game.add.sprite(45, 155, 'designMenu'), doneButton, 'Select a design!', 'design', mainScreen, 'Build a robot!');

		// displaying robot components 
        armScreen.current = game.add.sprite(482, 206, armScreen.armColor, armScreen.armStyle);
        antennaScreen.current = game.add.sprite(569, 170, 'antenna', 6);
        bodyScreen.current = game.add.sprite(520, 200, 'body', 6);
        legScreen.current = game.add.sprite(504, 460, 'leg', 6);
        designScreen.current = game.add.sprite(580, 330, 'design', 6);
        faceScreen.current = game.add.sprite(597, 233, 'face', 6);

        // fade effect image 
        black = game.add.sprite(0, 0, 'black');

        // line that controls all the logic!!!! :o
		control.onUp.add(menuSelection, this);

		function menuSelection(pointer) {

			// stops mouseIn & mouseOut events 
			if (control === game.input && !pointer.withinGame) { return; }

			// choosing screens
			if (mainScreen.isDisplayed()) {
				if (mainScreen.sprite.frame === 0) {
					bodyScreen.display = true;
				} else if (mainScreen.sprite.frame === 1) {
					armScreen.display = true;
				} else if (mainScreen.sprite.frame === 2) {
					legScreen.display = true;
				} else if (mainScreen.sprite.frame === 3) {
					faceScreen.display = true;
				} else if (mainScreen.sprite.frame === 4) {
					antennaScreen.display = true;
				} else if (mainScreen.sprite.frame === 5) {
					designScreen.display = true;
				} else if (mainScreen.sprite.frame === 6) {
					saveImage();
					nextState = true;
				}
				mainScreen.display = false;
			}

			// displaying preference screens
			if (bodyScreen.isDisplayed()) {
				displayScreen(bodyScreen);
			}
			if (armScreen.isDisplayed()) {
				displayScreen(armScreen);
			}
			if (legScreen.isDisplayed()) {
				displayScreen(legScreen);
			}
			if (faceScreen.isDisplayed()) {
				displayScreen(faceScreen);
			}
			if (antennaScreen.isDisplayed()) {
				displayScreen(antennaScreen);
			}
			if (designScreen.isDisplayed()) {
				displayScreen(designScreen);
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
