var menuState = {

	create: function() {
		// determining which control to listen for 
	    if (selectedControl === 0) { 
			control = enter;
		} else if (selectedControl === 1) {
			control = space;
		} else if (selectedControl === 2) {
			control = game.input;
		} else if (selectedControl === 3) {
			twoSwitches = true; 
			control = enter; 
		}

		nextState = false;

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

		// speed preference screen
		var speedSelect = false;
		var speedMenuSprite;
		var speedAnim;

		// carrots
		var carrots;
		var textSelection = 1;
		var speedSelection = 1;

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
	
		// title
		game.add.sprite(159, 70, 'title');

        // menu + back button sprites
		mainMenuSprite = game.add.sprite(86, 320, 'mainMenu');
		textMenuSprite = game.add.sprite(86, 320, 'textMenu');
		textMenuSprite.visible = false; 
		speedMenuSprite = game.add.sprite(86, 320, 'speedMenu');
		speedMenuSprite.visible = false;
		backButtonSprite = game.add.sprite(730, 590, 'backButton');
		backButtonSprite.visible = false;
		carrots = game.add.sprite(180, 540, 'carrots', 1);
	    carrots.visible = false;

		// animations (do not create if using two switches)
	  	if (!twoSwitches) {
		  	mainMenuSprite.animations.add('scroll');
		    mainAnim = mainMenuSprite.animations.play('scroll', speed, true);

		 	textMenuSprite.animations.add('scroll');
			textAnim = textMenuSprite.animations.getAnimation('scroll');
			
			speedMenuSprite.animations.add('scroll');
		    speedAnim = speedMenuSprite.animations.getAnimation('scroll');

			backButtonSprite.animations.add('press', [0, 0, 0, 1]);
			backButtonAnim = backButtonSprite.animations.getAnimation('press');
		}

		// fade effect image 
        black = game.add.sprite(0, 0, 'black');

		// escape to previous state
		escape.onUp.add(prevState, this);
		function prevState() {
			game.state.start('start');
		}
		
		// controlling scanning 
		if (twoSwitches) {
			tab.onUp.add(scan, this);
			function scan() {
				if (mainMenu) {
					mainMenuSprite.frame = mainMenuSprite.frame + 1; 
				} else if (textMenu) {
					textMenuSprite.frame = textMenuSprite.frame + 1; 
					if (textMenuSprite.frame === 3) {
						backButtonSprite.frame = 1;
					} else {
						backButtonSprite.frame = 0; 
					}
				} else if (speedMenu) {
					speedMenuSprite.frame = speedMenuSprite.frame + 1; 
					if (speedMenuSprite.frame === 3) {
						backButtonSprite.frame = 1;
					} else {
						backButtonSprite.frame = 0; 
					}
				}
			}
		}
		

		// line that controls EVERYTHING!!!! :o
		control.onUp.add(menuSelection, this);

		// main menu screen
		function menuSelection(pointer) {

			// stops mouseIn & mouseOut events 
			if (selectedControl == 2 && !pointer.withinGame) {return;}

			// choosing screens
			if (mainMenu) {
				if (mainMenuSprite.frame == 0) {
					nextState = true;
				} else if (mainMenuSprite.frame == 1) {
					textMenu = true;
				} else if (mainMenuSprite.frame == 2) {
					speedMenu = true;
				} 
				mainMenu = false;
			}

			// displaying preference screens
			if (textMenu) {
				textSelectionScreen();
			}
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
	        	carrots.loadTexture('carrots', textSelection);
	        	carrots.visible = true;
	    		backButtonSprite.visible = true;
	    		if (!twoSwitches) {
	    			textAnim.play(speed, true);
	    			backButtonAnim.play(speed, true);
	    		} else {
	    			textMenuSprite.frame = textSelection;
	    			backButtonSprite.frame = 0; 
	    		}
    		}	

    		// choosing a text size 
			if (textSelect) {
				// have to use pStyle instead of setting p1.fontSize for immediate update
				if (textMenuSprite.frame == 0) {
					textSize = '30px';
					pStyle.fontSize = '30px';
			        textSelection = 0;
    			}
    			else if (textMenuSprite.frame == 1) {
    				textSize = '45px';
    				pStyle.fontSize = '45px';
			        textSelection = 1;
    			}
    			else if (textMenuSprite.frame == 2) {
    				textSize = '60px';
    				pStyle.fontSize = '60px';
			        textSelection = 2;
    			}
    			p1.setStyle(pStyle, true);
    			carrots.loadTexture('carrots', textSelection);
    			if (backButtonSprite.frame == 1) {
    				textMenuSprite.visible = false;
    				backButtonSprite.visible = false;
    				carrots.visible = false;
    				p1.visible = false;
    				mainMenuSprite.visible = true;
    				if (!twoSwitches) { 
    					mainMenuSprite.animations.currentAnim.restart();
    				}
    				textSelect = false;
    				textMenu = false;
    				mainMenu = true;
    			}
			}

    		if (backButtonSprite.frame != 1) {
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
	        	carrots.loadTexture('carrots', speedSelection);
	        	carrots.visible = true;
	    		backButtonSprite.visible = true;
	    		if (!twoSwitches) {
	    			speedAnim.play(speed, true);
	    			backButtonAnim.play(speed, true);
	    		} else {
	    			speedMenuSprite.frame = speedSelection;
	    			backButtonSprite.frame = 0; 
	    		}
    		}	

    		// choosing a text size 
			if (speedSelect) {
				if (!twoSwitches) {
					if (speedMenuSprite.frame == 0) {
						speedAnim.delay = 5000;
						backButtonAnim.delay = 5000;
						mainAnim.delay = 5000;
						speed = 0.2;
						speedSelection = 0; 
	    			}
	    			if (speedMenuSprite.frame == 1) {
	    				speedAnim.delay = 2000;
						backButtonAnim.delay = 2000;
						mainAnim.delay = 2000;
						speed = 0.5;
						speedSelection = 1;
	    			}
	    			if (speedMenuSprite.frame == 2) {
	    				speedAnim.delay = 1000;
						backButtonAnim.delay = 1000;
						mainAnim.delay = 1000;
						speed = 1;
						speedSelection = 2;
	    			}
    			}
    			carrots.loadTexture('carrots', speedSelection);
    			if (backButtonSprite.frame == 1) {
    				speedMenuSprite.visible = false;
    				backButtonSprite.visible = false;
    				p1.visible = false;
    				carrots.visible = false;
    				mainMenuSprite.visible = true;
    				if (!twoSwitches) {
    					mainMenuSprite.animations.currentAnim.restart();
    				}
    				speedSelect = false;
    				speedMenu = false;
    				mainMenu = true;
    			}
			}

			if (backButtonSprite.frame != 1) {
    			speedSelect = true;
    		}

		}

	}, 

	update: function() {
		if (nextState) {
            fadeOut('map');
        } else {
			fadeIn();
        }
	},

	shutdown: function() {
		size = p1.fontSize;
	}

}