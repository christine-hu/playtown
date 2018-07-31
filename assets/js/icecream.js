var iceCreamState = {

	create: function() {
		nextState = false;
		var backdrop; 

		// menu screens
		var mainScreen;
		var flavorScreen;
		var syrupScreen;
		var sprinklesScreen;
		var fruitScreen;
		var cookieScreen;
		var coneScreen;
		var doneScreen = false;
		var selectMode = false;

		// done button 
		var doneButton;
		var button;

		// setting up the state
		game.stage.backgroundColor = '#ff8bb1';
		backdrop = game.add.sprite(365, 112, 'iceCreamBackground');
		p1 = game.add.text(0, 0, "Make some ice cream!", pStyle);
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
				scanScreen(coneScreen);
				scanScreen(flavorScreen);
				scanScreen(syrupScreen);
				scanScreen(sprinklesScreen);
				scanScreen(fruitScreen);
				scanScreen(cookieScreen);
				if (doneScreen) {
					button.frame = button.frame + 1; 
				}
			}
		}

        // initializing done button
		doneButton = game.add.sprite(720, 560, 'doneButton');
		doneButton.animations.add('done', [0, 0, 0, 0, 0, 0, 1]);
		doneButton.animations.add('back', [2, 2, 2, 2, 2, 2, 3]);
		
		
		// initializing menu screens 
		mainScreen = new menuScreen(game.add.sprite(45, 155, 'iceCreamMenu'), doneButton);
		mainScreen.initializeMain();

		flavorScreen = new menuScreen(game.add.sprite(45, 155, 'flavorMenu'), doneButton, 'Select a flavor!', 'flavor', mainScreen, 'Make some ice cream!');

		syrupScreen = new menuScreen(game.add.sprite(45, 155, 'syrupMenu'), doneButton, 'Select a syrup!', 'syrup', mainScreen, 'Make some ice cream!');

		sprinklesScreen = new menuScreen(game.add.sprite(45, 155, 'sprinklesMenu'), doneButton, 'Select a topping!', 'sprinkles', mainScreen,  'Make some ice cream!');

		fruitScreen = new menuScreen(game.add.sprite(45, 155, 'fruitMenu'), doneButton, 'Select a fruit topping!', 'fruit', mainScreen, 'Make some ice cream!');

		cookieScreen = new menuScreen(game.add.sprite(45, 155, 'cookieMenu'), doneButton, 'Select another topping!', 'cookie', mainScreen, 'Make some ice cream!');

		coneScreen = new menuScreen(game.add.sprite(45, 155, 'coneMenu'), doneButton, 'Select a cone!', 'cone', mainScreen, 'Make some ice cream!');
			coneScreen.prevCone = null;
			coneScreen.displaySelection = function() {
				console.log(coneScreen.prevCone);
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

		// displaying ice cream components
        cookieScreen.current = game.add.sprite(630, 170, 'cookie', 5);
        coneScreen.current = game.add.sprite(480, 330, 'cone', 6);
        flavorScreen.current = game.add.sprite(506, 210, 'flavor', 6);
        syrupScreen.current = game.add.sprite(545, 320, 'syrup', 5);
        sprinklesScreen.current = game.add.sprite(545, 320, 'sprinkles', 5);
        fruitScreen.current = game.add.sprite(593, 180, 'fruit', 5);

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
					coneScreen.display = true;
				} else if (mainScreen.sprite.frame === 1) {
					flavorScreen.display = true;
				} else if (mainScreen.sprite.frame === 2) {
					syrupScreen.display = true;
				} else if (mainScreen.sprite.frame === 3) {
					sprinklesScreen.display = true;
				} else if (mainScreen.sprite.frame === 4) {
					fruitScreen.display = true;
				} else if (mainScreen.sprite.frame === 5) {
					cookieScreen.display = true;
				} else if (mainScreen.sprite.frame === 6) { 
					doneScreen = true;
					// saveImage();
					// nextState = true;
				}
				mainScreen.display = false;
			}

			// displaying preference screens
			if (doneScreen) {
				console.log(selectMode);
				if (!selectMode) {
					mainScreen.sprite.visible = false; 
					doneButton.visible = false;
					button = game.add.sprite(262, 600, 'doneScreen');
					p1.setText('Yummy!', true);

					if (!twoSwitches) {
						button.animations.add('scroll');
						button.animations.play('scroll', speed, true);
					}

					// shifting components
					translate(backdrop, -175, -32);
					translate(cookieScreen.current, -175, -32);
					translate(coneScreen.current, -175, -32);
					translate(flavorScreen.current, -175, -32);
					translate(syrupScreen.current, -175, -32);
					translate(sprinklesScreen.current, -175, -32);
					translate(fruitScreen.current, -175, -32);

					black.bringToTop();

				}

					// logic
					if (selectMode) {
						if (button.frame === 0) {
							mainScreen.sprite.frame = 0; 
							doneButton.frame = 0;
							mainScreen.sprite.visible = true;
							doneButton.visible = true;
							button.visible = false;
							mainScreen.display = true;	
							doneScreen = false;
							selectMode = false;
							p1.setText('Make some ice cream!', true);
							translate(backdrop, 175, 32);
							translate(cookieScreen.current, 175, 32);
							translate(coneScreen.current, 175, 32);
							translate(flavorScreen.current, 175, 32);
							translate(syrupScreen.current, 175, 32);
							translate(sprinklesScreen.current, 175, 32);
							translate(fruitScreen.current, 175, 32);
							if (!twoSwitches) {
								mainScreen.anim.restart();
								mainScreen.doneAnim.restart();
							}
						}
						if (button.frame === 1) {
							saveImage();
						} 
						if (button.frame === 2) {
							nextState = true;
						}

					}

					if (doneScreen) {
						selectMode = true;
					}
					

			}
			if (coneScreen.isDisplayed()) {
				displayScreen(coneScreen);
			}
			if (flavorScreen.isDisplayed()) {
				displayScreen(flavorScreen);
			}
			if (syrupScreen.isDisplayed()) {
				displayScreen(syrupScreen);
			}
			if (sprinklesScreen.isDisplayed()) {
				displayScreen(sprinklesScreen);
			}
			if (fruitScreen.isDisplayed()) {
				displayScreen(fruitScreen);
			}
			if (cookieScreen.isDisplayed()) {
				displayScreen(cookieScreen);
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