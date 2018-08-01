var iceCreamState = {

	create: function() {
		nextState = false;
		var backdrop; 

		// screens
		var mainScreen;
		var doneScreen;

		var coneScreen;
		var flavorScreen;
		var syrupScreen;
		var sprinklesScreen;
		var fruitScreen;
		var cookieScreen;

		// screens array 
		var screens;

		// buttons
		var doneButton;
		var button;

		// setting up the state
		game.stage.backgroundColor = '#ff8bb1';
		backdrop = game.add.sprite(365, 112, 'iceCreamBackground');
		p1 = game.add.text(0, 0, "Make some ice cream!", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 40, 700, 70);

        // initializing buttons
		doneButton = game.add.sprite(720, 560, 'doneButton');
		doneButton.animations.add('done', [0, 0, 0, 0, 0, 0, 1]);
		doneButton.animations.add('back', [2, 2, 2, 2, 2, 2, 3]);

		button = game.add.sprite(320, 590, 'doneScreen');
		button.animations.add('scroll');
		button.visible = false;
		
		// initializing menu screens 
		mainScreen = new menuScreen(game.add.sprite(45, 155, 'iceCreamMenu'), doneButton);
		mainScreen.initializeMain();
		mainScreen.text = 'Make some ice cream!';
		mainScreen.endText = 'Yummy!';

		coneScreen = new menuScreen(game.add.sprite(45, 155, 'coneMenu'), doneButton, 'Select a cone!', 'cone', mainScreen);
			coneScreen.prevCone = null;
			coneScreen.displaySelection = function() {
				if (coneScreen.sprite.frame === 0 || coneScreen.sprite.frame === 1) {
					coneScreen.current.loadTexture('cone', coneScreen.sprite.frame);
					if (coneScreen.prevCone === 2 || coneScreen.prevCone === 3 || coneScreen.prevCone === 4 || coneScreen.prevCone === 5) {
						coneScreen.current.moveDown();
					}
				} else if (coneScreen.sprite.frame !== 6) {
					coneScreen.current.loadTexture('cone', coneScreen.sprite.frame);
					if (coneScreen.prevCone === 0 || coneScreen.prevCone === 1 || coneScreen.prevCone === null) {
						coneScreen.current.moveUp();
					}
				}
				if (coneScreen.sprite.frame !== 6) {
					coneScreen.prevCone = coneScreen.sprite.frame;
				}
			}

		flavorScreen = new menuScreen(game.add.sprite(45, 155, 'flavorMenu'), doneButton, 'Select a flavor!', 'flavor', mainScreen);

		syrupScreen = new menuScreen(game.add.sprite(45, 155, 'syrupMenu'), doneButton, 'Select a syrup!', 'syrup', mainScreen);

		sprinklesScreen = new menuScreen(game.add.sprite(45, 155, 'sprinklesMenu'), doneButton, 'Select a topping!', 'sprinkles', mainScreen);

		fruitScreen = new menuScreen(game.add.sprite(45, 155, 'fruitMenu'), doneButton, 'Select a fruit topping!', 'fruit', mainScreen);

		cookieScreen = new menuScreen(game.add.sprite(45, 155, 'cookieMenu'), doneButton, 'Select another topping!', 'cookie', mainScreen);

		// putting screens into array 
		screens = [coneScreen, flavorScreen, syrupScreen, sprinklesScreen, fruitScreen, cookieScreen];
		doneScreen = new endScreen(screens, button, backdrop);
		screens[6] = doneScreen;

		// displaying ice cream components
        cookieScreen.current = game.add.sprite(630, 170, 'cookie', 5);
        coneScreen.current = game.add.sprite(480, 330, 'cone', 6);
        flavorScreen.current = game.add.sprite(506, 210, 'flavor', 6);
        syrupScreen.current = game.add.sprite(545, 220, 'syrup', 5);
        sprinklesScreen.current = game.add.sprite(545, 220, 'sprinkles', 5);
        fruitScreen.current = game.add.sprite(593, 180, 'fruit', 5);

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