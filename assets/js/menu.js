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
        	boundsAlignV: 'top'
        };


        // text 
        p1 = game.add.text(0, 0, "", pStyle);
        p1.setTextBounds(100, 220, 700, 200);

	
		// title text
		game.add.sprite(159, 50, 'title');

        // menu 
		mainMenuSprite = game.add.sprite(86, 300, 'mainMenu');
	    mainMenuSprite.animations.add('scroll');
	    mainAnim = mainMenuSprite.animations.play('scroll', speed, true);

	    // text menu (invisible)
	    textMenuSprite = game.add.sprite(86, 320, 'textMenu');
	    textMenuSprite.visible = false; 
		textMenuSprite.animations.add('scroll');
		textAnim = textMenuSprite.animations.getAnimation('scroll');

		// color menu (invisible)
		colorMenuSprite = game.add.sprite(86, 320, 'colorMenu');
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
			        	boundsAlignV: 'top'
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
			        	boundsAlignV: 'top'
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
			        	boundsAlignV: 'top'
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

		// // color preference screen
		// function colorSelectionScreen() {
		// 	// add animation once
		// 	if (!colorSelect) {
		// 		p1.setText("Select a text color:", true);
		// 		p1.visible = true;
	 //        	mainMenuSprite.visible = false;
	 //        	colorMenuSprite.visible = true;
	 //    		colorAnim.play(speed, true);
	 //    		backButtonSprite.visible = true;
	 //    		backButtonAnim.play(speed, true);
	 //    	}

	 //    	if (colorSelect) {
	 //    		if (colorAnim.frame == 0) {
	 //    			game.stage.backgroundColor= '#ffffff';

		// 			titleText.fill = '#000000';
		//         	titleText.addColor('#000000', 1);
		// 	        titleText.addColor('#000000', 2);
		// 	        titleText.addColor('#000000', 3);
		// 	        titleText.addColor('#000000', 4);
		// 	        titleText.addColor('#000000', 5);
		// 	        titleText.addColor('#000000', 6);
		// 	        titleText.addColor('#000000', 7);
		// 	        titleText.addColor('#000000', 8);
		// 	        titleText.setShadow(3, 3, '#dddddd', 3);
		// 	        textColor = '#000000';
		// 	        p1.fill = '#000000';
		// 	        color = 'bw';
	 //    		}
	 //    		if (colorAnim.frame == 1) {
	 //    			game.stage.backgroundColor= '#000000';
		// 			titleText.fill = "#ffffff";
		//         	titleText.addColor('#ffffff', 1);
		// 	        titleText.addColor('#ffffff', 2);
		// 	        titleText.addColor('#ffffff', 3);
		// 	        titleText.addColor('#ffffff', 4);
		// 	        titleText.addColor('#ffffff', 5);
		// 	        titleText.addColor('#ffffff', 6);
		// 	        titleText.addColor('#ffffff', 7);
		// 	        titleText.addColor('#ffffff', 8);
		// 	        titleText.setShadow(3, 3, '#333333', 3);
		// 	        textColor = '#ffffff';
		// 	        pStyle = { 
		// 	        	font: 'Jua', 
		// 	        	fill: textColor, 
		// 	        	fontSize: textSize, 
		// 	        	wordWrap: true, 
		// 	        	wordWrapWidth: 700, 
		// 	        	boundsAlignH: 'center', 
		// 	        	boundsAlignV: 'top'
		// 	        };
  //   				p1.setStyle(pStyle, true);
		// 	        color = 'wb';
	 //    		}
	 //    		if (colorAnim.frame == 2) {
	 //    			game.stage.backgroundColor = "#6ec7ff";
	 //    			titleText.fill = "#f191b0";
		//         	titleText.addColor('#ffae68', 1);
		// 	        titleText.addColor('#faff77', 2);
		// 	        titleText.addColor('#f191b0', 3);
		// 	        titleText.addColor('#ffae68', 4);
		// 	        titleText.addColor('#faff77', 5);
		// 	        titleText.addColor('#f191b0', 6);
		// 	        titleText.addColor('#ffae68', 7);
		// 	        titleText.addColor('#faff77', 8);
		// 	        titleText.setShadow(3, 3, '#555555', 3);
		// 	        textColor = '#000000';
	 //    			p1.fill = '#000000';
	 //    			color = 'color';
	 //    		}
	 //    		if (backButtonAnim.frame == 1) {
  //   				colorMenuSprite.visible = false;
  //   				backButtonSprite.visible = false;
  //   				p1.visible = false;
  //   				mainMenuSprite.visible = true;
  //   				mainAnim.play(speed, true);
  //   				colorSelect = false;
  //   				colorMenu = false;
  //   				mainMenu = true;
  //   			}

	 //    	}

	 //    	if (backButtonAnim.frame != 1) {
  //   			colorSelect = true;
  //   		}
		// }

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