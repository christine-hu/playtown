var characterState = {

	create: function() {
		nextState = false; 
		var backdrop;
		var nose;

		// hair variables
		var hairColor = 'hair';
		var hairStyle = 8;
		var page1 = true;
		var page2 = false;
		var page3 = false;

		// screens
		var mainScreen;
		var doneScreen;

		var skinScreen;
		var eyeScreen;
		var mouthScreen;
		var accessoryScreen;
		var hairColorScreen;
		var hairScreen1;
		var hairScreen2;
		var hairScreen3;

		// screens array
		var screens;

		// buttons
		var doneButton;
		var button

		// setting up the state
		game.stage.backgroundColor = '#faff77';
		backdrop = game.add.sprite(365, 112, 'characterBackground');
		p1 = game.add.text(0, 0, "Create an avatar!", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 35, 700, 65);

        // initializing buttons
        doneButton = game.add.sprite(720, 560, 'doneButton3');
        doneButton.animations.add('done', [0, 0, 0, 0, 0, 0, 1]);
        doneButton.animations.add('back', [2, 2, 2, 2, 2, 2, 3]);
        doneButton.animations.add('back7', [2, 2, 2, 2, 2, 2, 2, 3]);
        doneButton.animations.add('back8', [2, 2, 2, 2, 2, 2, 2, 2, 3]);

        button = game.add.sprite(320, 590, 'doneScreen3');
		button.animations.add('scroll');
		button.visible = false;

        // initializing menu screens 
		mainScreen = new menuScreen(game.add.sprite(45, 155, 'characterMenu'), doneButton);
		mainScreen.initializeMain();
		mainScreen.text = 'Create an avatar!'
		mainScreen.endText = 'Nice job!'

		skinScreen = new menuScreen(game.add.sprite(45, 155, 'skinMenu'), doneButton, 'Select a skin color!', 'skin', mainScreen);

		hairScreen1 = new menuScreen(game.add.sprite(45, 155, 'hairMenu1'), doneButton, 'Select a hairstyle!', 'hair', mainScreen, 7);
		hairScreen1.backAnim = hairScreen1.button.animations.getAnimation('back7');
			hairScreen1.initialize = function() {
				if (!hairScreen1.selectMode && page1) {
					p1.setText(hairScreen1.text, true);
					hairScreen1.mainScreen.sprite.visible = false;
					hairScreen1.sprite.visible = true;
					if (!twoSwitches) {
						hairScreen1.anim.play(speed, true);
						hairScreen1.backAnim.play(speed, true);
					} else {
						hairScreen1.button.frame = 2; 
						hairScreen1.sprite.frame = 0; 
					}
				}
			}
			hairScreen1.controlLogic = function() {
				if (hairScreen1.selectMode || hairScreen2.selectMode || hairScreen3.selectMode) {
					if (hairScreen1.sprite.frame < 6) {
						hairStyle = hairScreen1.sprite.frame;
						hairScreen1.current.loadTexture(hairColor, hairStyle);
					} else if (hairScreen1.sprite.frame === 6) {
						page1 = false; 
						page2 = true;
						hairScreen1.selectMode = false;
						hairScreen1.sprite.visible = false;
						displayScreen(hairScreen2);
					} else if (hairScreen1.sprite.frame === 7) { 
						hairScreen1.returnToMain(); 
					}
				}	
			}
			hairScreen1.selectModeOn = function() {
				if (hairScreen1.sprite.frame !== hairScreen1.numOptions && page1) {
					hairScreen1.selectMode = true;
				}
			}

		hairScreen2 = new menuScreen(game.add.sprite(45, 86, 'hairMenu2'), doneButton, 'Select a hairstyle!', 'hair', mainScreen, 8);
		hairScreen2.backAnim = hairScreen2.button.animations.getAnimation('back8');
			hairScreen2.initialize = function() {
				if (!hairScreen2.selectMode && !page3 && !page1) {
					hairScreen2.mainScreen.sprite.visible = false;
					hairScreen2.sprite.visible = true;
					if (!twoSwitches) {
						hairScreen2.anim.play(speed, true);
						hairScreen2.backAnim.play(speed, true);
					} else {
						hairScreen2.button.frame = 2; 
						hairScreen2.sprite.frame = 0; 
					}
				}
			}
			hairScreen2.controlLogic = function() {
				if (page2 && hairScreen2.selectMode || hairScreen3.selectMode || hairScreen1.selectMode) {
					if (hairScreen2.sprite.frame === 0) {
						page2 = false;
						page1 = true;
						hairScreen2.selectMode = false;
						hairScreen2.sprite.visible = false;
						displayScreen(hairScreen1);
					} else if (hairScreen2.sprite.frame < 7) {
						hairStyle = hairScreen2.sprite.frame + 5;
						hairScreen1.current.loadTexture(hairColor, hairStyle);
					} else if (hairScreen2.sprite.frame === 7) {
						page2 = false;
						page3 = true;
						hairScreen2.selectMode = false;
						hairScreen2.sprite.visible = false;
						displayScreen(hairScreen3);
					} 
					else if (hairScreen2.sprite.frame === 8) {
						p1.setText('Create an avatar!', true);
						hairScreen2.sprite.visible = false;
	    				mainScreen.sprite.visible = true;
	    				if (!twoSwitches){
	    					mainScreen.anim.restart();
	    					hairScreen2.doneAnim.restart();
	    				} else {
	    					hairScreen2.button.frame = 0; 
	    				}
	    				page1 = true;
	    				page2 = false;
	    				hairScreen2.selectMode = false;
	    				hairScreen1.display = false;
	    				mainScreen.display = true;
	    				return;
					}
				}
			}
			hairScreen2.selectModeOn = function() {
				if (page2 && hairScreen2.sprite.frame != 8) {
					hairScreen2.selectMode = true;
				}
			}

		hairScreen3 = new menuScreen(game.add.sprite(45, 86, 'hairMenu3'), doneButton, 'Select a hairstyle!', 'hair', mainScreen, 7);
		hairScreen3.backAnim = hairScreen3.button.animations.getAnimation('back7');
			hairScreen3.initalize = function() {
				if (!hairScreen3.selectMode && page3) {
					hairScreen3.mainScreen.sprite.visible = false;
					hairScreen3.sprite.visible = true;
					if (!twoSwitches) {
						hairScreen3.backAnim.play(speed, true);
						hairScreen3.anim.play(speed, true);
					} else {
						hairScreen3.button.frame = 2; 
						hairScreen3.sprite.frame = 0; 
					}
				}
			}
			hairScreen3.controlLogic = function() {
				if (hairScreen3.selectMode) {
					if (hairScreen3.sprite.frame === 0) {
						page3 = false;
						page2 = true;
						hairScreen3.selectMode = false;
						hairScreen3.sprite.visible = false;
						displayScreen(hairScreen2);
					} else if (hairScreen3.sprite.frame < 7) {
						hairStyle = hairScreen3.sprite.frame + 11;
						hairScreen1.current.loadTexture(hairColor, hairStyle); 
					} else if (hairScreen3.sprite.frame === 7) {
						p1.setText('Create an avatar!', true);
						hairScreen3.sprite.visible = false;
	    				mainScreen.sprite.visible = true;
	    				if (!twoSwitches) {
							mainScreen.anim.restart();
	    					hairScreen3.doneAnim.restart();
	    				} else {
							hairScreen3.button.frame = 0; 
	    				}
	    				page3 = false;
	    				page1 = true;
	    				hairScreen3.selectMode = false;
	    				hairScreen1.display = false;
	    				mainScreen.display = true;
					}
				}
			}
			hairScreen3.selectModeOn = function() {
				if (page3 && hairScreen3.sprite.frame != 7) {
					hairScreen3.selectMode = true;
				}
			}

		eyeScreen = new menuScreen(game.add.sprite(45, 155, 'eyeMenu'), doneButton, 'Select eyes!', 'eyes', mainScreen, 7);
		eyeScreen.backAnim = eyeScreen.button.animations.getAnimation('back7');

		mouthScreen = new menuScreen(game.add.sprite(45, 155, 'mouthMenu'), doneButton, 'Select a mouth!', 'mouth', mainScreen, 8);
		mouthScreen.backAnim = mouthScreen.button.animations.getAnimation('back8');

		accessoryScreen = new menuScreen(game.add.sprite(45, 155, 'accessoryMenu'), doneButton, 'Select an accessory!', 'accessories', mainScreen, 7);
		accessoryScreen.backAnim = accessoryScreen.button.animations.getAnimation('back7');

		hairColorScreen = new menuScreen(game.add.sprite(45, 155, 'hairColorMenu'), doneButton, 'Select a hair color!', 'hair', mainScreen);
			hairColorScreen.displaySelection = function() {
				if (hairColorScreen.sprite.frame === 0) { hairColor = 'hair'; } 
				else if (hairColorScreen.sprite.frame === 1) { hairColor = 'hairBrown'; } 
				else if (hairColorScreen.sprite.frame === 2) { hairColor = 'hairBlonde'; } 
				else if (hairColorScreen.sprite.frame === 3) { hairColor = 'hairOrange'; } 
				else if (hairColorScreen.sprite.frame === 4) { hairColor = 'hairPink'; } 
				else if (hairColorScreen.sprite.frame === 5) { hairColor = 'hairBlue'; }
				hairScreen1.current.loadTexture(hairColor, hairStyle);
			}

		// putting screens into array
		screens = [skinScreen, hairScreen1, eyeScreen, mouthScreen, accessoryScreen, hairColorScreen];
		doneScreen = new endScreen(screens, button, backdrop);
		screens[6] = doneScreen;

        // displaying avatar components
        skinScreen.current = game.add.sprite (507, 213, 'skin', 6);
        eyeScreen.current = game.add.sprite(557, 348, 'eyes');
        nose = game.add.sprite(610, 408, 'nose');
        	screens[7] = nose; // for translateGroup()
        mouthScreen.current = game.add.sprite(591, 423, 'mouth');
        hairScreen1.current = game.add.sprite(414, 163, hairColor, hairStyle);
        accessoryScreen.current = game.add.sprite(514, 148, 'accessories', 6);

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
				scanScreen(hairScreen2);
				scanScreen(hairScreen3);
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
		if (nextState) { fadeOut('map'); }
		else {
			fadeIn();
        }
	}
}