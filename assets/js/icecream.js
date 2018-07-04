var iceCreamState = {

	create: function() {

		// setting up the state
		game.stage.backgroundColor = '#ff8bb1';
		backdrop = game.add.sprite(365, 112, 'iceCreamBackground');
		p1 = game.add.text(0, 0, "Make some ice cream!", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 40, 700, 70);
		
		// initializing menu screens 
		var mainScreen = new menuScreen(game.add.sprite(45, 155, 'iceCreamMenu'));
			mainScreen.sprite.visible = true;
			mainScreen.anim.play(speed, true);
			mainScreen.isTrue = true;

		var flavorScreen = new menuScreen(game.add.sprite(45, 155, 'flavorMenu'), 'Select a flavor!', 'flavor');

		var syrupScreen = new menuScreen(game.add.sprite(45, 155, 'syrupMenu'), 'Select a syrup!', 'syrup');

		var sprinklesScreen = new menuScreen(game.add.sprite(45, 155, 'sprinklesMenu'), 'Select a topping!', 'sprinkles');

		var fruitScreen = new menuScreen(game.add.sprite(45, 155, 'fruitMenu'), 'Select a fruit topping!', 'fruit');

		var cookieScreen = new menuScreen(game.add.sprite(45, 155, 'cookieMenu'), 'Select another topping!', 'cookie');

		var coneScreen = new menuScreen(game.add.sprite(45, 155, 'coneMenu'), 'Select a cone!', 'cone');
			coneScreen.prevCone = null;
			coneScreen.displaySelection = function() {
				if (coneScreen.anim.frame === 0 || coneScreen.anim.frame === 1) {
					coneScreen.current.loadTexture('cone', coneScreen.anim.frame);
					if (coneScreen.prevCone === 2 || coneScreen.prevCone === 3 || coneScreen.prevCone === 4 || coneScreen.prevCone === 5) {
						coneScreen.current.moveDown();
					}
				} else if (coneScreen.anim.frame !== 6) {
					coneScreen.current.loadTexture('cone', coneScreen.anim.frame);
					if (coneScreen.prevCone === 0 || coneScreen.prevCone === 1) {
						coneScreen.current.moveUp();
					}
				}
				coneScreen.prevCone = coneScreen.anim.frame;
			}

		// initializing ice cream components
        cookieScreen.current = game.add.sprite(630, 170, 'cookie', 5);
        coneScreen.current = game.add.sprite(480, 330, 'cone', 6);
        flavorScreen.current = game.add.sprite(506, 210, 'flavor', 6);
        syrupScreen.current = game.add.sprite(545, 220, 'syrup', 5);
        sprinklesScreen.current = game.add.sprite(545, 220, 'sprinkles', 5);
        fruitScreen.current = game.add.sprite(593, 180, 'fruit', 5);

		// initializing done button
		var doneButtonSprite;
		var doneButtonAnim;

        doneButtonSprite = game.add.sprite(720, 560, 'doneButton');
        doneButtonSprite.animations.add('done', [0, 0, 0, 0, 0, 0, 1]);
        doneButtonSprite.animations.add('back', [2, 2, 2, 2, 2, 2, 3]);
        doneAnim = doneButtonSprite.animations.play('done', speed, true);
        backAnim = doneButtonSprite.animations.getAnimation('back');

        // line that controls EVERYTHING!!!! :o
		control.onUp.add(menuSelection, this);

		function menuSelection(pointer) {
			// stops mouseIn & mouseOut events 
			if (control === game.input && !pointer.withinGame) { return; }

			// choosing screens
			if (mainScreen.isTrue === true) {
				if (mainScreen.sprite.frame === 0) {
					coneScreen.isTrue = true;
					mainScreen.isTrue = false;
				}
				else if (mainScreen.sprite.frame === 1) {
					flavorScreen.isTrue = true;
					mainScreen.isTrue = false;
				} else if (mainScreen.sprite.frame === 2) {
					syrupScreen.isTrue = true;
					mainScreen.isTrue = false;
				} else if (mainScreen.sprite.frame === 3) {
					sprinklesScreen.isTrue = true;
					mainScreen.isTrue = false;
				} else if (mainScreen.sprite.frame === 4) {
					fruitScreen.isTrue = true;
					mainScreen.isTrue = false;
				} else if (mainScreen.sprite.frame === 5) {
					cookieScreen.isTrue = true;
					mainScreen.isTrue = false;
				} else if (mainScreen.sprite.frame === 6) {
					game.state.start('map', true, false, control, pStyle);
				}
			}

			// displaying preference screens
			if (coneScreen.isTrue === true) {
				displayScreen(coneScreen, mainScreen, backAnim, doneAnim);
			}
			if (flavorScreen.isTrue === true ) {
				displayScreen(flavorScreen, mainScreen, backAnim, doneAnim);
			}
			if (syrupScreen.isTrue === true) {
				displayScreen(syrupScreen, mainScreen, backAnim, doneAnim);
			}
			if (sprinklesScreen.isTrue === true) {
				displayScreen(sprinklesScreen, mainScreen, backAnim, doneAnim);
			}
			if (fruitScreen.isTrue === true) {
				displayScreen(fruitScreen, mainScreen, backAnim, doneAnim);
			}
			if (cookieScreen.isTrue === true) {
				displayScreen(cookieScreen, mainScreen, backAnim, doneAnim);
			}

		}

	}
}