var characterState = {

	create: function() {
		var backdrop;
		var nose;

		// menu screens
		var mainScreen;
		var skinScreen;
		var eyeScreen;
		var mouthScreen;
		var accessoryScreen;
		var hairColorScreen;
		var hairScreen1;
		var hairScreen2;
		var hairScreen3;

		// done button
		var doneButtonSprite;
		var doneAnim;
		var backAnim;

		// components of avatar
		var hair;
		var face;
		var eyes;
		var nose; 
		var mouth;
		var accessory; 
		var hairStyle = 8;
		var hairColor = 'hair';

		// hair variables 		
		var page1 = true;
		var page2 = false;
		var page3 = false;

		// setting up the state
		game.stage.backgroundColor = '#faff77';
		backdrop = game.add.sprite(365, 112, 'characterBackground');
		p1 = game.add.text(0, 0, "Design a character!", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 35, 700, 65);

         // setting up done/back buttons 
        doneButtonSprite = game.add.sprite(720, 560, 'doneButton');
        doneButtonSprite.animations.add('done', [4, 4, 4, 4, 4, 4, 5]);
        backAnim = doneButtonSprite.animations.add('back7', [6, 6, 6, 6, 6, 6, 7]);
        backAnim8 = doneButtonSprite.animations.add('back8', [6, 6, 6, 6, 6, 6, 6, 7]);
        backAnim9 = doneButtonSprite.animations.add('back9', [6, 6, 6, 6, 6, 6, 6, 6, 7]);
        doneAnim = doneButtonSprite.animations.play('done', speed, true);

        // initializing menu screens 
		mainScreen = new menuScreen(game.add.sprite(45, 155, 'characterMenu'));
			mainScreen.sprite.visible = true;
			mainScreen.anim.play(speed, true);
			mainScreen.display = true;

		skinScreen = new menuScreen(game.add.sprite(45, 155, 'skinMenu'), 'Select a skin color!', 'skin', mainScreen, backAnim, doneAnim, 'Design an avatar!');

		hairScreen1 = new menuScreen(game.add.sprite(45, 158, 'hairMenu1'), 'Select a hairstyle!', 'hair', mainScreen, backAnim8, doneAnim, 'Design an avatar!', 7);
			hairScreen1.initialize = function() {
				if (!hairScreen1.selectMode && page1) {
					p1.setText(hairScreen1.text, true);
					hairScreen1.mainScreen.sprite.visible = false;
					hairScreen1.sprite.visible = true;
					hairScreen1.anim.play(speed, true);
					hairScreen1.backAnim.play(speed, true);
				}
			}
			hairScreen1.controlLogic = function() {
				console.log('current frame: ' + hairScreen1.anim.frame);
				if (hairScreen1.selectMode || hairScreen2.selectMode || hairScreen3.selectMode) {
					if (hairScreen1.anim.frame < 6) {
						hairStyle = hairScreen1.anim.frame;
						hairScreen1.current.loadTexture(hairColor, hairStyle);
					} else if (hairScreen1.anim.frame === 6) {
						console.log('hello');
						page1 = false; 
						page2 = true;
						hairScreen1.selectMode = false;
						hairScreen1.sprite.visible = false;
						displayScreen(hairScreen2);
					} else if (hairScreen1.anim.frame === 7) { hairScreen1.returnToMain(); }
				}	
			}
			hairScreen1.selectModeOn = function() {
				if (hairScreen1.anim.frame !== hairScreen1.numOptions && page1) {
					hairScreen1.selectMode = true;
				}
			}

		hairScreen2 = new menuScreen(game.add.sprite(45, 85, 'hairMenu2'), 'Select a hairstyle!', 'hair', mainScreen, backAnim9, doneAnim, 'Design an avatar!', 8);
			hairScreen2.initialize = function() {
				if (!hairScreen2.selectMode && !page3 && !page1) {
					hairScreen2.mainScreen.sprite.visible = false;
					hairScreen2.sprite.visible = true;
					hairScreen2.anim.play(speed, true);
					hairScreen2.backAnim.play(speed, true);
				}
				console.log(hairScreen1.sprite.visible);
			}
			hairScreen2.controlLogic = function() {
				if (page2 && hairScreen2.selectMode || hairScreen3.selectMode || hairScreen1.selectMode) {
					if (hairScreen2.anim.frame === 0) {
						page2 = false;
						page1 = true;
						hairScreen2.selectMode = false;
						hairScreen2.sprite.visible = false;
						displayScreen(hairScreen1);
					} else if (hairScreen2.anim.frame < 7) {
						hairStyle = hairScreen2.anim.frame + 5;
						hairScreen1.current.loadTexture(hairColor, hairStyle);
					} else if (hairScreen2.anim.frame === 7) {
						page2 = false;
						page3 = true;
						hairScreen2.selectMode = false;
						hairScreen2.sprite.visible = false;
						displayScreen(hairScreen3);
					} 
					else if (hairScreen2.anim.frame === 8) {
						p1.setText('Design an avatar!', true);
						hairScreen2.sprite.visible = false;
	    				mainScreen.sprite.visible = true;
	    				mainScreen.sprite.animations.currentAnim.restart();
	    				doneAnim.restart();
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
				if (page2 && hairScreen2.anim.frame != 8) {
					hairScreen2.selectMode = true;
				}
			}

		hairScreen3 = new menuScreen(game.add.sprite(45, 85, 'hairMenu3'), 'Select a hairstyle!', 'hair', mainScreen, backAnim8, doneAnim, 'Design an avatar!', 7);
			hairScreen3.initalize = function() {
				if (!hairScreen3.selectMode && page3) {
					hairScreen3.mainScreen.sprite.visible = false;
					hairScreen3.sprite.visible = true;
					hairScreen3.backAnim.play(speed, true);
					hairScreen3.anim.play(speed, true);
				}
			}
			hairScreen3.controlLogic = function() {
				if (hairScreen3.selectMode) {
					if (hairScreen3.anim.frame === 0) {
						page3 = false;
						page2 = true;
						hairScreen3.selectMode = false;
						hairScreen3.sprite.visible = false;
						displayScreen(hairScreen2);
					} else if (hairScreen3.anim.frame < 7) {
						hairStyle = hairScreen3.anim.frame + 11;
						hairScreen1.current.loadTexture(hairColor, hairStyle); 
					} else if (hairScreen3.anim.frame === 7) {
						p1.setText('Design an avatar!', true);
						hairScreen3.sprite.visible = false;
	    				mainScreen.sprite.visible = true;
	    				mainScreen.sprite.animations.currentAnim.restart();
	    				doneAnim.restart();
	    				page3 = false;
	    				page1 = true;
	    				hairScreen3.selectMode = false;
	    				hairScreen1.display = false;
	    				mainScreen.display = true;
					}
				}
			}
			hairScreen3.selectModeOn = function() {
				if (page3 && hairScreen3.anim.frame != 7) {
					hairScreen3.selectMode = true;
				}
			}

		eyeScreen = new menuScreen(game.add.sprite(45, 155, 'eyeMenu'), 'Select eyes!', 'eyes', mainScreen, backAnim8, doneAnim, 'Design an avatar!', 7);

		mouthScreen = new menuScreen(game.add.sprite(45, 155, 'mouthMenu'), 'Select a mouth!', 'mouth', mainScreen, backAnim9, doneAnim, 'Design an avatar!', 8);

		accessoryScreen = new menuScreen(game.add.sprite(45, 155, 'accessoryMenu'), 'Select an accessory!', 'accessories', mainScreen, backAnim8, doneAnim, 'Design an avatar!', 7);

		hairColorScreen = new menuScreen(game.add.sprite(45, 155, 'hairColorMenu'), 'Select a hair color!', 'hair', mainScreen, backAnim, doneAnim, 'Design an avatar!');
			hairColorScreen.displaySelection = function() {
				if (hairColorScreen.anim.frame === 0) { hairColor = 'hair'; } 
				else if (hairColorScreen.anim.frame === 1) { hairColor = 'hairBrown'; } 
				else if (hairColorScreen.anim.frame === 2) { hairColor = 'hairBlonde'; } 
				else if (hairColorScreen.anim.frame === 3) { hairColor = 'hairOrange'; } 
				else if (hairColorScreen.anim.frame === 4) { hairColor = 'hairPink'; } 
				else if (hairColorScreen.anim.frame === 5) { hairColor = 'hairBlue'; }
				hairScreen1.current.loadTexture(hairColor, hairStyle);
			}


        // rendering the avatar
        skinScreen.current = game.add.sprite (525, 238, 'skin', 6);
        eyeScreen.current = game.add.sprite(557, 348, 'eyes');
        nose = game.add.sprite(610, 408, 'nose');
        mouthScreen.current = game.add.sprite(591, 423, 'mouth');
        hairScreen1.current = game.add.sprite(414, 163, hairColor, hairStyle);
        accessoryScreen.current = game.add.sprite(514, 148, 'accessories', 6);

		// line that controls EVERYTHING!!!! :o
		control.onUp.add(menuSelection, this);

		// function that controls everything 
		function menuSelection(pointer) {
			// stops mouseIn & mouseOut events 
			if (control == game.input && !pointer.withinGame) {return;}

			// choosing screens
			if (mainScreen.isDisplayed()) {
				if (mainScreen.sprite.frame === 0) {
					skinScreen.display = true;
				}
				else if (mainScreen.sprite.frame === 1) {
					hairScreen1.display = true;
				} else if (mainScreen.sprite.frame === 2) {
					eyeScreen.display = true;
				} else if (mainScreen.sprite.frame === 3) {
					mouthScreen.display = true;
				} else if (mainScreen.sprite.frame === 4) {
					accessoryScreen.display = true;
				} else if (mainScreen.sprite.frame === 5) {
					hairColorScreen.display = true;
				} else if (mainScreen.sprite.frame === 6) {
					game.state.start('map', true, false, control, pStyle);
				}
				mainScreen.display = false;
			}

			// displaying preference screens
			if (skinScreen.isDisplayed()) {
				displayScreen(skinScreen);
			}
			if (hairScreen1.isDisplayed()) {
				displayScreen(hairScreen1);
			}
			if (eyeScreen.isDisplayed()) {
				displayScreen(eyeScreen);
			}
			if (hairColorScreen.isDisplayed()) {
				displayScreen(hairColorScreen);
			}
			if (mouthScreen.isDisplayed()) {
				displayScreen(mouthScreen);
			}
			if (accessoryScreen.isDisplayed()) {
				displayScreen(accessoryScreen);
			}
		}

	}
}