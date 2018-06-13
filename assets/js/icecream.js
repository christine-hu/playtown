var iceCreamState = {

	create: function() {
		// components of ice cream
		var cone;
		var flavor;
		var syrup;
		var sprinkles;
		var fruit;
		var cookie;

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

		var flavorMenuSprite
		var flavorMenuAnim;
		var flavorMenu = false;
		var flavorSelect = false;

		var syrupMenuSprite
		var syrupMenuAnim;
		var syrupMenu = false;
		var syrupSelect = false;

		var sprinklesMenuSprite
		var sprinklesMenuAnim;
		var sprinklesMenu = false;
		var sprinklesSelect = false;

		var fruitMenuSprite
		var fruitMenuAnim;
		var fruitMenu = false;
		var fruitSelect = false;

		var cookieMenuSprite
		var cookieMenuAnim;
		var cookieMenu = false;
		var cookieSelect = false;

		game.stage.backgroundColor = '#ff8bb1';

		// setting up the main menu 
		p1 = game.add.text(0, 0, "Make some ice cream!", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 40, 700, 70);

        backdrop = game.add.sprite(365, 112, 'iceCreamBackground');
        cookie = game.add.sprite(630, 170, 'cookie', 5);
        cone = game.add.sprite(480, 330, 'cone', 6);
        flavor = game.add.sprite(506, 210, 'flavor', 6);
        syrup = game.add.sprite(545, 220, 'syrup', 5);
        sprinkles = game.add.sprite(546, 222, 'sprinkles', 5);
        fruit = game.add.sprite(593, 180, 'fruit', 5);


        iceCreamMenuSprite = game.add.sprite(45, 155, 'iceCreamMenu');
        iceCreamMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        iceCreamMenuAnim = iceCreamMenuSprite.animations.play('scroll', speed, true);

        coneMenuSprite = game.add.sprite(45, 155, 'coneMenu');
        coneMenuSprite.visible = false;
        coneMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        coneMenuAnim = coneMenuSprite.animations.getAnimation('scroll');

        flavorMenuSprite = game.add.sprite(45, 155, 'flavorMenu');
        flavorMenuSprite.visible = false;
        flavorMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        flavorMenuAnim = flavorMenuSprite.animations.getAnimation('scroll');

        syrupMenuSprite = game.add.sprite(45, 155, 'syrupMenu');
        syrupMenuSprite.visible = false;
        syrupMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        syrupMenuAnim = syrupMenuSprite.animations.getAnimation('scroll');

        sprinklesMenuSprite = game.add.sprite(45, 155, 'sprinklesMenu');
        sprinklesMenuSprite.visible = false;
        sprinklesMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        sprinklesMenuAnim = sprinklesMenuSprite.animations.getAnimation('scroll');

        fruitMenuSprite = game.add.sprite(45, 155, 'fruitMenu');
        fruitMenuSprite.visible = false;
        fruitMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        fruitMenuAnim = fruitMenuSprite.animations.getAnimation('scroll');


        cookieMenuSprite = game.add.sprite(45, 155, 'cookieMenu');
        cookieMenuSprite.visible = false;
        cookieMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        cookieMenuAnim = cookieMenuSprite.animations.getAnimation('scroll');

        doneButtonSprite = game.add.sprite(720, 560, 'doneButton');
        doneButtonSprite.animations.add('done', [0, 0, 0, 0, 0, 0, 1]);
        doneButtonSprite.animations.add('back', [2, 2, 2, 2, 2, 2, 3]);
        doneButtonAnim = doneButtonSprite.animations.play('done', speed, true);
        backButtonAnim = doneButtonSprite.animations.getAnimation('back');

        // line that controls EVERYTHING!!!! :o
		control.onUp.add(menuSelection, this);

		function menuSelection(pointer) {

			// stops mouseIn & mouseOut events 
			if (control == game.input && !pointer.withinGame) {return;}

			// choosing screens
			if (iceCreamMenu) {
				if (iceCreamMenuSprite.frame == 0) {
					coneMenu = true;
					iceCreamMenu = false;
				}
				else if (iceCreamMenuSprite.frame == 1) {
					flavorMenu = true;
					iceCreamMenu = false;
				} else if (iceCreamMenuSprite.frame == 2) {
					syrupMenu = true;
					iceCreamMenu = false;
				} else if (iceCreamMenuSprite.frame == 3) {
					sprinklesMenu = true;
					iceCreamMenu = false;
				} else if (iceCreamMenuSprite.frame == 4) {
					fruitMenu = true;
					iceCreamMenu = false;
				} else if (iceCreamMenuSprite.frame == 5) {
					cookieMenu = true;
					iceCreamMenu = false;
				} else if (iceCreamMenuSprite.frame == 6) {
					game.state.start('map', true, false, control, pStyle);
				}
			}

			// displaying preference screens
			if (coneMenu) {
				coneSelectionScreen();
			}
			if (flavorMenu) {
				flavorSelectionScreen();
			}
			if (syrupMenu) {
				syrupSelectionScreen();
			}
			if (sprinklesMenu) {
				sprinklesSelectionScreen();
			}
			if (fruitMenu) {
				fruitSelectionScreen();
			}
			if (cookieMenu) {
				cookieSelectionScreen();
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
				if (coneMenuAnim.frame == 0) {
					cone.loadTexture('cone', 0);
					if (prevCone == 2 || prevCone == 3 || prevCone == 4 || prevCone == 5) {
						cone.moveDown();
					}
					prevCone = 0;
				} else if (coneMenuAnim.frame == 1) {
					cone.loadTexture('cone', 1);
					if (prevCone == 2 || prevCone == 3 || prevCone == 4 || prevCone == 5) {
						cone.moveDown();
					}
					prevCone = 1;
				} else if (coneMenuAnim.frame == 2) {
					cone.loadTexture('cone', 2);
					if (prevCone == null || prevCone == 0 || prevCone == 1) {
						cone.moveUp();
					}
					prevCone = 2;
				} else if (coneMenuAnim.frame == 3) {
					cone.loadTexture('cone', 3);
					if (prevCone == null || prevCone == 0 || prevCone == 1) {
						cone.moveUp();
					}
					prevCone = 3;
				} else if (coneMenuAnim.frame == 4) {
					cone.loadTexture('cone', 4);
					if (prevCone == null || prevCone == 0 || prevCone == 1) {
						cone.moveUp();
					}
					prevCone = 4;
				} else if (coneMenuAnim.frame == 5) {
					cone.loadTexture('cone', 5);
					if (prevCone == null || prevCone == 0 || prevCone == 1) {
						cone.moveUp();
					}
					prevCone = 5;
				} else if (coneMenuAnim.frame == 6) {
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

		function flavorSelectionScreen() {
			// set up screen once
			if (!flavorSelect) {
				p1.setText('Select a flavor:', true);
				iceCreamMenuSprite.visible = false;
				flavorMenuSprite.visible = true;
				flavorMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (flavorSelect) {
				if (flavorMenuAnim.frame == 0) {
					flavor.loadTexture('flavor', 0);
				} else if (flavorMenuAnim.frame == 1) {
					flavor.loadTexture('flavor', 1);
				} else if (flavorMenuAnim.frame == 2) {
					flavor.loadTexture('flavor', 2);
				} else if (flavorMenuAnim.frame == 3) {
					flavor.loadTexture('flavor', 3);
				} else if (flavorMenuAnim.frame == 4) {
					flavor.loadTexture('flavor', 4);
				} else if (flavorMenuAnim.frame == 5) {
					flavor.loadTexture('flavor', 5);
				} else if (flavorMenuAnim.frame == 6) {
					p1.setText('Make some ice cream!', true);
					flavorMenuSprite.visible = false;
    				iceCreamMenuSprite.visible = true;
    				iceCreamMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				flavorSelect = false;
    				flavorMenu = false;
    				iceCreamMenu = true;
				}
			}
			
			if (flavorMenuAnim.frame != 6) {
				flavorSelect = true;
			}
		}

		function syrupSelectionScreen() {
			// set up screen once
			if (!syrupSelect) {
				p1.setText('Select a syrup:', true);
				iceCreamMenuSprite.visible = false;
				syrupMenuSprite.visible = true;
				syrupMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (syrupSelect) {
				if (syrupMenuAnim.frame == 0) {
					syrup.loadTexture('syrup', 0);
				} else if (syrupMenuAnim.frame == 1) {
					syrup.loadTexture('syrup', 1);
				} else if (syrupMenuAnim.frame == 2) {
					syrup.loadTexture('syrup', 2);
				} else if (syrupMenuAnim.frame == 3) {
					syrup.loadTexture('syrup', 3);
				} else if (syrupMenuAnim.frame == 4) {
					syrup.loadTexture('syrup', 4);
				} else if (syrupMenuAnim.frame == 5) {
					syrup.loadTexture('syrup', 5);
				} else if (syrupMenuAnim.frame == 6) {
					p1.setText('Make some ice cream!', true);
					syrupMenuSprite.visible = false;
    				iceCreamMenuSprite.visible = true;
    				iceCreamMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				syrupSelect = false;
    				syrupMenu = false;
    				iceCreamMenu = true;
				}
			}
			
			if (syrupMenuAnim.frame != 6) {
				syrupSelect = true;
			}
		}

		function sprinklesSelectionScreen() {
			// set up screen once
			if (!sprinklesSelect) {
				p1.setText('Select a topping:', true);
				iceCreamMenuSprite.visible = false;
				sprinklesMenuSprite.visible = true;
				sprinklesMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (sprinklesSelect) {
				if (sprinklesMenuAnim.frame == 0) {
					sprinkles.loadTexture('sprinkles', 0);
				} else if (sprinklesMenuAnim.frame == 1) {
					sprinkles.loadTexture('sprinkles', 1);
				} else if (sprinklesMenuAnim.frame == 2) {
					sprinkles.loadTexture('sprinkles', 2);
				} else if (sprinklesMenuAnim.frame == 3) {
					sprinkles.loadTexture('sprinkles', 3);
				} else if (sprinklesMenuAnim.frame == 4) {
					sprinkles.loadTexture('sprinkles', 4);
				} else if (sprinklesMenuAnim.frame == 5) {
					sprinkles.loadTexture('sprinkles', 5);
				} else if (sprinklesMenuAnim.frame == 6) {
					p1.setText('Make some ice cream!', true);
					sprinklesMenuSprite.visible = false;
    				iceCreamMenuSprite.visible = true;
    				iceCreamMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				sprinklesSelect = false;
    				sprinklesMenu = false;
    				iceCreamMenu = true;
				}
			}
			
			if (sprinklesMenuAnim.frame != 6) {
				sprinklesSelect = true;
			}
		}

		function fruitSelectionScreen() {
			// set up screen once
			if (!fruitSelect) {
				p1.setText('Select a fruit topping:', true);
				iceCreamMenuSprite.visible = false;
				fruitMenuSprite.visible = true;
				fruitMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (fruitSelect) {
				if (fruitMenuAnim.frame == 0) {
					fruit.loadTexture('fruit', 0);
				} else if (fruitMenuAnim.frame == 1) {
					fruit.loadTexture('fruit', 1);
				} else if (fruitMenuAnim.frame == 2) {
					fruit.loadTexture('fruit', 2);
				} else if (fruitMenuAnim.frame == 3) {
					fruit.loadTexture('fruit', 3);
				} else if (fruitMenuAnim.frame == 4) {
					fruit.loadTexture('fruit', 4);
				} else if (fruitMenuAnim.frame == 5) {
					fruit.loadTexture('fruit', 5);
				} else if (fruitMenuAnim.frame == 6) {
					p1.setText('Make some ice cream!', true);
					fruitMenuSprite.visible = false;
    				iceCreamMenuSprite.visible = true;
    				iceCreamMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				fruitSelect = false;
    				fruitMenu = false;
    				iceCreamMenu = true;
				}
			}
			
			if (fruitMenuAnim.frame != 6) {
				fruitSelect = true;
			}
		}

		function cookieSelectionScreen() {
			// set up screen once
			if (!cookieSelect) {
				p1.setText('Select a second topping:', true);
				iceCreamMenuSprite.visible = false;
				cookieMenuSprite.visible = true;
				cookieMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (cookieSelect) {
				if (cookieMenuAnim.frame == 0) {
					cookie.loadTexture('cookie', 0);
				} else if (cookieMenuAnim.frame == 1) {
					cookie.loadTexture('cookie', 1);
				} else if (cookieMenuAnim.frame == 2) {
					cookie.loadTexture('cookie', 2);
				} else if (cookieMenuAnim.frame == 3) {
					cookie.loadTexture('cookie', 3);
				} else if (cookieMenuAnim.frame == 4) {
					cookie.loadTexture('cookie', 4);
				} else if (cookieMenuAnim.frame == 5) {
					cookie.loadTexture('cookie', 5);
				} else if (cookieMenuAnim.frame == 6) {
					p1.setText('Make some ice cream!', true);
					cookieMenuSprite.visible = false;
    				iceCreamMenuSprite.visible = true;
    				iceCreamMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				cookieSelect = false;
    				cookieMenu = false;
    				iceCreamMenu = true;
				}
			}
			
			if (cookieMenuAnim.frame != 6) {
				cookieSelect = true;
			}
		}
	}

}