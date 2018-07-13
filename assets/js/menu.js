var menuState = {


	create: function() {

		// different screens
		var mainMenu = true;
		var textMenu = false;
		var colorMenu = false;
		var speedMenu = false;

		// main menu
		var mainMenuSprite;
		var mainAnim;

		// text preference screen
		var textSelect = false;
		var textMenuSprite;
		var textAnim;

		// color preference screen
		var colorSelect = false;
		var colorMenuSprite;
		var colorAnim;

		// speed preference screen
		var speedSelect = false;
		var speedMenuSprite;
		var speedAnim;

		// back button
		var backButtonSprite;
		var backButtonAnim;
		
		// text style, to be passed onto other states (text size)
		var textColor = '#000000';
		var textSize = '45px';
		pStyle = { 
        	font: 'Jua', 
        	fill: textColor, 
        	fontSize: '45px', 
        	wordWrap: true, 
        	wordWrapWidth: 700, 
        	boundsAlignH: 'center', 
        	boundsAlignV: 'middle'
        };


        // text 
        p1 = game.add.text(0, 0, "", pStyle);
        p1.setTextBounds(100, 185, 700, 165);

	
		// title text
		game.add.sprite(159, 70, 'title');

        // menu 
		mainMenuSprite = game.add.sprite(86, 320, 'mainMenu');
	    mainMenuSprite.animations.add('scroll');
	    mainAnim = mainMenuSprite.animations.play('scroll', speed, true);

	    // text menu (invisible)
	    textMenuSprite = game.add.sprite(86, 320, 'textMenu');
	    textMenuSprite.visible = false; 
		textMenuSprite.animations.add('scroll');
		textAnim = textMenuSprite.animations.getAnimation('scroll');

		// color menu (invisible)
		colorMenuSprite = game.add.sprite(86, 300, 'colorMenu');
		colorMenuSprite.visible = false;
		colorMenuSprite.animations.add('scroll');
	    colorAnim = colorMenuSprite.animations.getAnimation('scroll');

		// speed menu (invisible)
		speedMenuSprite = game.add.sprite(86, 320, 'speedMenu');
		speedMenuSprite.visible = false;
		speedMenuSprite.animations.add('scroll');
	    speedAnim = speedMenuSprite.animations.getAnimation('scroll');

		// back button (invisible)
		backButtonSprite = game.add.sprite(688, 562, 'backButton');
		backButtonSprite.visible = false;
		backButtonSprite.animations.add('press', [0, 0, 0, 1]);
		backButtonAnim = backButtonSprite.animations.getAnimation('press');

	    // determining which control to listen for 
	    if (selectedControl == 0) { 
			control = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		} else if (selectedControl == 1) {
			control = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		} else if (selectedControl == 2) {
			control = game.input;
		}

		// line that controls EVERYTHING!!!! :o
		control.onUp.add(menuSelection, this);

		// main menu screen
		function menuSelection(pointer) {

			// stops mouseIn & mouseOut events 
			if (selectedControl == 2 && !pointer.withinGame) {return;}

			// choosing screens
			if (mainMenu) {
				if (mainAnim.frame == 0) {
					game.state.start('map', true, false, control, pStyle);
				}
				else if (mainAnim.frame == 1) {
					textMenu = true;
					mainMenu = false;
				} else if (mainAnim.frame == 2) {
					speedMenu = true;
					mainMenu = false;
				} 
			}

			// displaying preference screens
			if (textMenu) {
				textSelectionScreen();
			}
			// if (colorMenu) {
			// 	colorSelectionScreen();
			// }
			if (speedMenu) {
				speedSelectionScreen();
			}
		}

		// text preference screen
		function textSelectionScreen() {

			// add animation once
			if (!textSelect) {
				p1.setText("Select a text size:", true);
				p1.visible = true;
	        	mainMenuSprite.visible = false;
	        	textMenuSprite.visible = true;
	    		textAnim.play(speed, true);
	    		backButtonSprite.visible = true;
	    		backButtonAnim.play(speed, true);
    		}	

    		// choosing a text size 
			if (textSelect) {
				// have to use pStyle instead of setting p1.fontSize for immediate update
				if (textAnim.frame == 0) {
					textSize = '30px';
					pStyle = { 
			        	font: 'Jua', 
			        	fill: textColor, 
			        	fontSize: '30px', 
			        	wordWrap: true, 
			        	wordWrapWidth: 700, 
			        	boundsAlignH: 'center', 
			        	boundsAlignV: 'middle'
			        };
    				p1.setStyle(pStyle, true);
    			}
    			if (textAnim.frame == 1) {
    				textSize = '45px';
    				pStyle = { 
			        	font: 'Jua', 
			        	fill: textColor, 
			        	fontSize: '45px', 
			        	wordWrap: true, 
			        	wordWrapWidth: 700, 
			        	boundsAlignH: 'center', 
			        	boundsAlignV: 'middle'
			        };
    				p1.setStyle(pStyle, true);
    			}
    			if (textAnim.frame == 2) {
    				textSize = '60px';
    				pStyle = { 
			        	font: 'Jua', 
			        	fill: textColor, 
			        	fontSize: '60px', 
			        	wordWrap: true, 
			        	wordWrapWidth: 700, 
			        	boundsAlignH: 'center', 
			        	boundsAlignV: 'middle'
			        };
    				p1.setStyle(pStyle, true);
    			}
    			if (backButtonAnim.frame == 1) {
    				textMenuSprite.visible = false;
    				backButtonSprite.visible = false;
    				p1.visible = false;
    				mainMenuSprite.visible = true;
    				mainMenuSprite.animations.currentAnim.restart();
    				textSelect = false;
    				textMenu = false;
    				mainMenu = true;
    			}
			}

    		if (backButtonAnim.frame != 1 && backButtonAnim.frame != 3) {
    			textSelect = true;
    		}
		}

		// speed preference screen 
		function speedSelectionScreen() {
			// add animation once
			if (!speedSelect) {
				p1.setText("Select a speed:", true);
				p1.visible = true;
	        	mainMenuSprite.visible = false;
	        	speedMenuSprite.visible = true;
	    		speedAnim.play(speed, true);
	    		backButtonSprite.visible = true;
	    		backButtonAnim.play(speed, true);
    		}	

    		// choosing a text size 
			if (speedSelect) {
				if (speedAnim.frame == 0) {
					speedAnim.delay = 5000;
					backButtonAnim.delay = 5000;
					mainAnim.delay = 5000;
					speed = 0.2;
    			}
    			if (speedAnim.frame == 1) {
    				speedAnim.delay = 2000;
					backButtonAnim.delay = 2000;
					mainAnim.delay = 2000;
					speed = 0.5;
    			}
    			if (speedAnim.frame == 2) {
    				speedAnim.delay = 1000;
					backButtonAnim.delay = 1000;
					mainAnim.delay = 1000;
					speed = 1;
    			}
    			if (backButtonAnim.frame == 1) {
    				speedMenuSprite.visible = false;
    				backButtonSprite.visible = false;
    				p1.visible = false;
    				mainMenuSprite.visible = true;
    				mainMenuSprite.animations.currentAnim.restart();
    				speedSelect = false;
    				speedMenu = false;
    				mainMenu = true;
    			}
			}

			if (backButtonAnim.frame != 1) {
    			speedSelect = true;
    		}

		}

	}, 

	shutdown: function() {
		size = p1.fontSize;
	}

}