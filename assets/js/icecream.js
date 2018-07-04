var iceCreamState = {

	create: function() {
		// components of ice cream
		var cone;

		var flavorScreen = new Object();
			flavorScreen.sprite = game.add.sprite(45, 155, 'flavorMenu');
			flavorScreen.sprite.visible = false;
			flavorScreen.anim = flavorScreen.sprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
			flavorScreen.isTrue = false;
			flavorScreen.selectMode = false;
			flavorScreen.text = 'Select a flavor!';
			flavorScreen.texture = 'flavor';
		
		var syrupScreen = new Object();
			syrupScreen.sprite = game.add.sprite(45, 155, 'syrupMenu');
			syrupScreen.sprite.visible = false;
			syrupScreen.anim = syrupScreen.sprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6])
			syrupScreen.isTrue = false;
			syrupScreen.selectMode = false;
			syrupScreen.text = 'Select a syrup!';
			syrupScreen.texture = 'syrup';

		var sprinklesScreen = new Object();
			sprinklesScreen.sprite = game.add.sprite(45, 155, 'sprinklesMenu');
			sprinklesScreen.sprite.visible = false;
			sprinklesScreen.anim = sprinklesScreen.sprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6])
			sprinklesScreen.isTrue = false;
			sprinklesScreen.selectMode = false;
			sprinklesScreen.text = 'Select a topping!';
			sprinklesScreen.texture = 'sprinkles';

		var fruitScreen = new Object();
			fruitScreen.sprite = game.add.sprite(45, 155, 'fruitMenu');
			fruitScreen.sprite.visible = false;
			fruitScreen.anim = fruitScreen.sprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6])
			fruitScreen.isTrue = false;
			fruitScreen.selectMode = false;
			fruitScreen.text = 'Select a fruit topping!';
			fruitScreen.texture = 'fruit';

		var cookieScreen = new Object();
			cookieScreen.sprite = game.add.sprite(45, 155, 'cookieMenu');
			cookieScreen.sprite.visible = false;
			cookieScreen.anim = cookieScreen.sprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6])
			cookieScreen.isTrue = false;
			cookieScreen.selectMode = false;
			cookieScreen.text = 'Select a cookie!';
			cookieScreen.texture = 'cookie';

		// done button
		var doneButtonSprite;
		var doneButtonAnim;

		// menus 
		var iceCreamMenuSprite
		var iceCreamMenuAnim;
		var iceCreamMenu = true;

		var coneMenuSprite
		var coneMenuAnim;
		var coneMenu = false;
		var coneSelect = false;
		var prevCone = null; 

		var cookieMenuSprite
		var cookieMenuAnim;
		var cookieMenu = false;
		var cookieSelect = false;

		game.stage.backgroundColor = '#ff8bb1';

		// setting up the main menu 
		p1 = game.add.text(0, 0, "Make some ice cream!", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 40, 700, 70);

        // setting up ice cream components
        backdrop = game.add.sprite(365, 112, 'iceCreamBackground');
        cookieScreen.current = game.add.sprite(630, 170, 'cookie', 5);
        cone = game.add.sprite(480, 330, 'cone', 6);
        flavorScreen.current = game.add.sprite(506, 210, 'flavor', 6);
        syrupScreen.current = game.add.sprite(545, 220, 'syrup', 5);
        sprinklesScreen.current = game.add.sprite(545, 220, 'sprinkles', 5);
        fruitScreen.current = game.add.sprite(593, 180, 'fruit', 5);


        iceCreamMenuSprite = game.add.sprite(45, 155, 'iceCreamMenu');
        iceCreamMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        iceCreamMenuAnim = iceCreamMenuSprite.animations.play('scroll', speed, true);

        coneMenuSprite = game.add.sprite(45, 155, 'coneMenu');
        coneMenuSprite.visible = false;
        coneMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        coneMenuAnim = coneMenuSprite.animations.getAnimation('scroll');

        doneButtonSprite = game.add.sprite(720, 560, 'doneButton');
        doneButtonSprite.animations.add('done', [0, 0, 0, 0, 0, 0, 1]);
        doneButtonSprite.animations.add('back', [2, 2, 2, 2, 2, 2, 3]);
        doneButtonAnim = doneButtonSprite.animations.play('done', speed, true);
        backButtonAnim = doneButtonSprite.animations.getAnimation('back');


        // line that controls EVERYTHING!!!! :o
		control.onUp.add(menuSelection, this);

		function menuSelection(pointer) {
			// stops mouseIn & mouseOut events 
			if (control === game.input && !pointer.withinGame) {return;}

			// choosing screens
			if (iceCreamMenu) {
				if (iceCreamMenuSprite.frame === 0) {
					coneMenu = true;
					iceCreamMenu = false;
				}
				else if (iceCreamMenuSprite.frame === 1) {
					flavorScreen.isTrue = true;
					iceCreamMenu = false;
				} else if (iceCreamMenuSprite.frame === 2) {
					syrupScreen.isTrue = true;
					iceCreamMenu = false;
				} else if (iceCreamMenuSprite.frame === 3) {
					sprinklesScreen.isTrue = true;
					iceCreamMenu = false;
				} else if (iceCreamMenuSprite.frame === 4) {
					fruitScreen.isTrue = true;
					iceCreamMenu = false;
				} else if (iceCreamMenuSprite.frame === 5) {
					cookieScreen.isTrue = true;
					iceCreamMenu = false;
				} else if (iceCreamMenuSprite.frame === 6) {
					game.state.start('map', true, false, control, pStyle);
				}
			}

			// displaying preference screens
			if (coneMenu) {
				coneSelectionScreen();
			}
			if (flavorScreen.isTrue === true ) {
				newSelectionScreen(flavorScreen);
			}
			if (syrupScreen.isTrue === true) {
				newSelectionScreen(syrupScreen);
			}
			if (sprinklesScreen.isTrue === true) {
				newSelectionScreen(sprinklesScreen);
			}
			if (fruitScreen.isTrue === true) {
				newSelectionScreen(fruitScreen);
			}
			if (cookieScreen.isTrue === true) {
				newSelectionScreen(cookieScreen);
			}
			

		}

		function newSelectionScreen(screen) {

			if (screen.selectMode === false) {
				p1.setText(screen.text, true);
				iceCreamMenuSprite.visible = false;
				screen.sprite.visible = true;
				screen.anim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (screen.selectMode === true) {
				if (screen.anim.frame !== 6) {
					screen.current.loadTexture(screen.texture, screen.anim.frame);
				} else if (screen.anim.frame === 6) {
					p1.setText('Make some ice cream!', true);
					screen.sprite.visible = false;
    				iceCreamMenuSprite.visible = true;
    				iceCreamMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				screen.selectMode = false;
    				screen.isTrue = false;
    				iceCreamMenu = true;
				}
			}
			
			if (screen.anim.frame != 6) {
				screen.selectMode = true;
			}

		}

		function coneSelectionScreen() {
			// set up screen once
			if (!coneSelect) {
				p1.setText('Select a cone or cup:', true);
				iceCreamMenuSprite.visible = false;
				coneMenuSprite.visible = true;
				coneMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (coneSelect) {
				if (coneMenuAnim.frame === 0) {
					cone.loadTexture('cone', 0);
					if (prevCone === 2 || prevCone === 3 || prevCone === 4 || prevCone === 5) {
						cone.moveDown();
					}
					prevCone = 0;
				} else if (coneMenuAnim.frame === 1) {
					cone.loadTexture('cone', 1);
					if (prevCone === 2 || prevCone === 3 || prevCone === 4 || prevCone === 5) {
						cone.moveDown();
					}
					prevCone = 1;
				} else if (coneMenuAnim.frame === 2) {
					cone.loadTexture('cone', 2);
					if (prevCone === null || prevCone === 0 || prevCone === 1) {
						cone.moveUp();
					}
					prevCone = 2;
				} else if (coneMenuAnim.frame === 3) {
					cone.loadTexture('cone', 3);
					if (prevCone === null || prevCone === 0 || prevCone === 1) {
						cone.moveUp();
					}
					prevCone = 3;
				} else if (coneMenuAnim.frame === 4) {
					cone.loadTexture('cone', 4);
					if (prevCone === null || prevCone === 0 || prevCone === 1) {
						cone.moveUp();
					}
					prevCone = 4;
				} else if (coneMenuAnim.frame === 5) {
					cone.loadTexture('cone', 5);
					if (prevCone === null || prevCone === 0 || prevCone === 1) {
						cone.moveUp();
					}
					prevCone = 5;
				} else if (coneMenuAnim.frame === 6) {
					p1.setText('Make some ice cream!', true);
					coneMenuSprite.visible = false;
    				iceCreamMenuSprite.visible = true;
    				iceCreamMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				coneSelect = false;
    				coneMenu = false;
    				iceCreamMenu = true;
				}
			}
			
			if (coneMenuAnim.frame != 6) {
				coneSelect = true;
			}
		}

	}

}