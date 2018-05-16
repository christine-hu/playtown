var menuState = {


	create: function() {
		// different screens
		var mainMenu = true;
		var textMenu = false;
		var colorMenu = false;
		var speedMenu = false;

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

		// scroll speed
		var speed = .5;
		var anims = game.add.group();

		
		// text style, to be passed onto other states (text size)
		pStyle = { 
        	font: 'Jua', 
        	fill: "#000000", 
        	fontSize: '45px', 
        	wordWrap: true, 
        	wordWrapWidth: 700, 
        	boundsAlignH: 'center', 
        	boundsAlignV: 'top'
        };

	
		// title 
		titleFont = 'Londrina Solid';
		titleStyle = { font: titleFont, fill: "#f191b0", fontSize: '120px'};
        titleText = game.add.text(game.world.centerX, 110, "PLAYTOWN!", titleStyle);
        titleText.setShadow(3, 3, '#555555', 3);
        titleText.addColor('#ffae68', 1);
        titleText.addColor('#faff77', 2);
        titleText.addColor('#f191b0', 3);
        titleText.addColor('#ffae68', 4);
        titleText.addColor('#faff77', 5);
        titleText.addColor('#f191b0', 6);
        titleText.addColor('#ffae68', 7);
        titleText.addColor('#faff77', 8);
        titleText.anchor.set(0.5);

        // menu 
		var menu = game.add.sprite(100, 220, 'menu');
	    menu.animations.add('scroll', [1, 3, 0, 2]);
	    var mainAnim = menu.animations.play('scroll', speed, true);

	    // determining which control to listen for 
	    if (selectedControl == 0) { 
			control = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		} else if (selectedControl == 1) {
			control = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		} else if (selectedControl == 2) {
			control = game.input;
		}

			control.onUp.add(menuSelection, this);


		function menuSelection(pointer) {

			if (!pointer.withinGame) {return;}
			// choosing preferences
			if (mainMenu) {
				menu.animations.play('scroll', speed, true);
				if (mainAnim.frame == 3) {
					textMenu = true;
					mainMenu = false;
				} else if (mainAnim.frame == 0) {
					colorMenu = true;
					mainMenu = false;
				} else if (mainAnim.frame == 2) {
					speedMenu = true;
					mainMenu = false;
				}
			}

			// displaying preference screens
			if (textMenu) {
				textSelection();
			}
			if (colorMenu) {
				colorSelection();
			}
			if (speedMenu) {
				speedSelection();
			}
			// console.log('main: ' + mainMenu);
			// console.log('text: ' + textMenu);
			// console.log('speed: ' + speedMenu);
			// console.log('speedselect: ' + speedSelect);
		}

		// text preference screen
		function textSelection() {

			// add animation once
			if (!textSelect) {
				p1 = game.add.text(0, 0, "Select a text size:", pStyle);
	        	p1.setTextBounds(100, 220, 700, 200);
	        	menu.visible = false;
	        	textMenuSprite = game.add.sprite(100, 330, 'textMenu');
				textMenuSprite.animations.add('scroll', [0, 1, 2, 3]);
	    		textAnim = textMenuSprite.animations.play('scroll', speed, true);
	    		backButtonSprite = game.add.sprite(700, 570, 'backButton');
	    		backButtonSprite.animations.add('press', [0, 0, 0, 1]);
	    		backButtonAnim = backButtonSprite.animations.play('press', speed, true);
    		}	

    		// choosing a text size 
			if (textSelect) {
				if (textAnim.frame == 0) {
					pStyle = { 
			        	font: 'Jua', 
			        	fill: "#000000", 
			        	fontSize: '30px', 
			        	wordWrap: true, 
			        	wordWrapWidth: 700, 
			        	boundsAlignH: 'center', 
			        	boundsAlignV: 'top'
			        };
    				p1.setStyle(pStyle, true);
    			}
    			if (textAnim.frame == 1) {
    				pStyle = { 
			        	font: 'Jua', 
			        	fill: "#000000", 
			        	fontSize: '45px', 
			        	wordWrap: true, 
			        	wordWrapWidth: 700, 
			        	boundsAlignH: 'center', 
			        	boundsAlignV: 'top'
			        };
    				p1.setStyle(pStyle, true);
    			}
    			if (textAnim.frame == 2) {
    				pStyle = { 
			        	font: 'Jua', 
			        	fill: "#000000", 
			        	fontSize: '60px', 
			        	wordWrap: true, 
			        	wordWrapWidth: 700, 
			        	boundsAlignH: 'center', 
			        	boundsAlignV: 'top'
			        };
    				p1.setStyle(pStyle, true);
    			}
    			if (backButtonAnim.frame == 1) {
    				textMenuSprite.destroy();
    				backButtonSprite.visible = false;
    				p1.destroy();
    				menu.visible = true;
    				menu.animations.currentAnim.restart();
    				textSelect = false;
    				textMenu = false;
    				mainMenu = true;
    			}
			}

    		if (backButtonAnim.frame != 1) {
    			textSelect = true;
    		}
		}

		// color preference screen
		function colorSelection() {
			p1 = game.add.text(0, 0, "Select a color scheme:", pStyle);
        	p1.setTextBounds(100, 220, 700, 200);
        	menu.visible = false;
		}

		// speed preference screen 
		function speedSelection() {
			// add animation once
			if (!speedSelect) {
				p1 = game.add.text(0, 0, "Select a speed:", pStyle);
	        	p1.setTextBounds(100, 220, 700, 200);
	        	menu.visible = false;
	        	speedMenuSprite = game.add.sprite(100, 330, 'speedMenu');
				speedMenuSprite.animations.add('scroll', [0, 1, 2, 3]);
	    		speedAnim = speedMenuSprite.animations.play('scroll', speed, true);
	    		backButtonSprite = game.add.sprite(700, 570, 'backButton');
	    		backButtonSprite.animations.add('press', [0, 0, 0, 1]);
	    		backButtonAnim = backButtonSprite.animations.play('press', speed, true);
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
    				speedMenuSprite.destroy();
    				backButtonSprite.visible = false;
    				p1.destroy();
    				menu.visible = true;
    				menu.animations.currentAnim.restart();
    				speedSelect = false;
    				speedMenu = false;
    				mainMenu = true;
    			}
			}

			if (backButtonAnim.frame != 1) {
    			speedSelect = true;
    		}

		}
	}

}