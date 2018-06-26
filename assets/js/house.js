var houseState = {

	create: function() {
		// components of house
		var backdrop;
		var outline;
		var texture;
		var windows;
		var roof;
		var sky;
		var ground;
		var foliage;

		// done button
		var doneButtonSprite;
		var doneButtonAnim;

		// menus 
		var houseMenuSprite
		var houseMenuAnim;
		var houseMenu = true;

		var textureMenuSprite
		var textureMenuAnim;
		var textureMenu = false;
		var textureSelect = false;

		var windowsMenuSprite
		var windowsMenuAnim;
		var windowsMenu = false;
		var windowsSelect = false;

		var roofMenuSprite
		var roofMenuAnim;
		var roofMenu = false;
		var roofSelect = false;

		var skyMenuSprite
		var skyMenuAnim;
		var skyMenu = false;
		var skySelect = false;

		var groundMenuSprite
		var groundMenuAnim;
		var groundMenu = false;
		var groundSelect = false;

		var foliageMenuSprite
		var foliageMenuAnim;
		var foliageMenu = false;
		var foliageSelect = false;


		game.stage.backgroundColor = '#a0e07d';

		// setting up the main menu 
		p1 = game.add.text(0, 0, "Design a house!", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 40, 700, 70);

        // displaying house 
        // DIMENSIONS NEED TO BE UPDATED ONCE GRAPHICS ARE FINISHED
        backdrop = game.add.sprite(365, 112, 'houseBackground');
        sky = game.add.sprite(0, 0, 'sky', 0);
        ground = game.add.sprite(0, 0, 'ground', 0);
        foliage = game.add.sprite(0, 0, 'foliage', 0);
        outline = game.add.sprite(405, 153, 'outline', 0);
        texture = game.add.sprite(0, 0, 'texture', 0);
        windows = game.add.sprite(0, 0, 'windows', 0);
        roof = game.add.sprite(0, 0, 'roof', 0);


        houseMenuSprite = game.add.sprite(45, 155, 'houseMenu');
        houseMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        houseMenuAnim = houseMenuSprite.animations.play('scroll', speed, true);

        textureMenuSprite = game.add.sprite(45, 155, 'textureMenu');
        textureMenuSprite.visible = false;
        textureMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        textureMenuAnim = textureMenuSprite.animations.getAnimation('scroll');

        windowsMenuSprite = game.add.sprite(45, 155, 'windowsMenu');
        windowsMenuSprite.visible = false;
        windowsMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        windowsMenuAnim = windowsMenuSprite.animations.getAnimation('scroll');

        roofMenuSprite = game.add.sprite(45, 155, 'roofMenu');
        roofMenuSprite.visible = false;
        roofMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        roofMenuAnim = roofMenuSprite.animations.getAnimation('scroll');

        skyMenuSprite = game.add.sprite(45, 155, 'skyMenu');
        skyMenuSprite.visible = false;
        skyMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        skyMenuAnim = skyMenuSprite.animations.getAnimation('scroll');

        groundMenuSprite = game.add.sprite(45, 155, 'groundMenu');
        groundMenuSprite.visible = false;
        groundMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        groundMenuAnim = groundMenuSprite.animations.getAnimation('scroll');

        foliageMenuSprite = game.add.sprite(45, 155, 'foliageMenu');
        foliageMenuSprite.visible = false;
        foliageMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        foliageMenuAnim = foliageMenuSprite.animations.getAnimation('scroll');

        doneButtonSprite = game.add.sprite(720, 560, 'doneButton');
        doneButtonSprite.animations.add('done', [12, 12, 12, 12, 12, 12, 13]);
        doneButtonSprite.animations.add('back', [14, 14, 14, 14, 14, 14, 15]);
        doneButtonAnim = doneButtonSprite.animations.play('done', speed, true);
        backButtonAnim = doneButtonSprite.animations.getAnimation('back');

        // line that controls EVERYTHING!!!! :o
		control.onUp.add(menuSelection, this);

		function menuSelection(pointer) {

			// stops mouseIn & mouseOut events 
			if (control == game.input && !pointer.withinGame) {return;}

			// choosing screens
			if (houseMenu) {
				if (houseMenuSprite.frame == 0) {
					textureMenu = true;
					houseMenu = false;
				}
				else if (houseMenuSprite.frame == 1) {
					roofMenu = true;
					houseMenu = false;
				} else if (houseMenuSprite.frame == 2) {
					windowsMenu = true;
					houseMenu = false;
				} else if (houseMenuSprite.frame == 3) {
					skyMenu = true;
					houseMenu = false;
				} else if (houseMenuSprite.frame == 4) {
					groundMenu = true;
					houseMenu = false;
				} else if (houseMenuSprite.frame == 5) {
					foliageMenu = true;
					houseMenu = false;
				} else if (houseMenuSprite.frame == 6) {
					game.state.start('map', true, false, control, pStyle);
				}
			}

			// displaying preference screens
			if (textureMenu) {
				textureSelectionScreen();
			}
			if (windowsMenu) {
				windowsSelectionScreen();
			}
			if (roofMenu) {
				roofSelectionScreen();
			}
			if (skyMenu) {
				skySelectionScreen();
			}
			if (foliageMenu) {
				foliageSelectionScreen();
			}
			if (groundMenu) {
				groundSelectionScreen();
			}
			

		}

		function textureSelectionScreen() {
			// set up screen once
			if (!textureSelect) {
				p1.setText('Select a material:', true);
				houseMenuSprite.visible = false;
				textureMenuSprite.visible = true;
				textureMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (textureSelect) {
				if (textureMenuAnim.frame == 0) {
					texture.loadTexture('texture', 0);
				} else if (textureMenuAnim.frame == 1) {
					texture.loadTexture('texture', 1);
				} else if (textureMenuAnim.frame == 2) {
					texture.loadTexture('texture', 2);
				} else if (textureMenuAnim.frame == 3) {
					texture.loadTexture('texture', 3);
				} else if (textureMenuAnim.frame == 4) {
					texture.loadTexture('texture', 4);
				} else if (textureMenuAnim.frame == 5) {
					texture.loadTexture('texture', 5);
				} else if (textureMenuAnim.frame == 6) {
					p1.setText('Design a house!', true);
					textureMenuSprite.visible = false;
    				houseMenuSprite.visible = true;
    				houseMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				textureSelect = false;
    				textureMenu = false;
    				houseMenu = true;
				}
			}
			
			if (textureMenuAnim.frame != 6) {
				textureSelect = true;
			}
		}

		function windowsSelectionScreen() {
			// set up screen once
			if (!windowsSelect) {
				p1.setText('Select a window style:', true);
				houseMenuSprite.visible = false;
				windowsMenuSprite.visible = true;
				windowsMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (windowsSelect) {
				if (windowsMenuAnim.frame == 0) {
					windows.loadTexture('windows', 0);
				} else if (windowsMenuAnim.frame == 1) {
					windows.loadTexture('windows', 1);
				} else if (windowsMenuAnim.frame == 2) {
					windows.loadTexture('windows', 2);
				} else if (windowsMenuAnim.frame == 3) {
					windows.loadTexture('windows', 3);
				} else if (windowsMenuAnim.frame == 4) {
					windows.loadTexture('windows', 4);
				} else if (windowsMenuAnim.frame == 5) {
					windows.loadTexture('windows', 5);
				} else if (windowsMenuAnim.frame == 6) {
					p1.setText('Design a house!', true);
					windowsMenuSprite.visible = false;
    				houseMenuSprite.visible = true;
    				houseMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				windowsSelect = false;
    				windowsMenu = false;
    				houseMenu = true;
				}
			}
			
			if (windowsMenuAnim.frame != 6) {
				windowsSelect = true;
			}
		}

		function roofSelectionScreen() {
			// set up screen once
			if (!roofSelect) {
				p1.setText('Select a roof:', true);
				houseMenuSprite.visible = false;
				roofMenuSprite.visible = true;
				roofMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (roofSelect) {
				if (roofMenuAnim.frame == 0) {
					roof.loadTexture('roof', 0);
				} else if (roofMenuAnim.frame == 1) {
					roof.loadTexture('roof', 1);
				} else if (roofMenuAnim.frame == 2) {
					roof.loadTexture('roof', 2);
				} else if (roofMenuAnim.frame == 3) {
					roof.loadTexture('roof', 3);
				} else if (roofMenuAnim.frame == 4) {
					roof.loadTexture('roof', 4);
				} else if (roofMenuAnim.frame == 5) {
					roof.loadTexture('roof', 5);
				} else if (roofMenuAnim.frame == 6) {
					p1.setText('Design a house!', true);
					roofMenuSprite.visible = false;
    				houseMenuSprite.visible = true;
    				houseMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				roofSelect = false;
    				roofMenu = false;
    				houseMenu = true;
				}
			}
			

			if (roofMenuAnim.frame != 6) {
				roofSelect = true;
			}
		}

		function skySelectionScreen() {
			// set up screen once
			if (!skySelect) {
				p1.setText('Select a sky:', true);
				houseMenuSprite.visible = false;
				skyMenuSprite.visible = true;
				skyMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (skySelect) {
				if (skyMenuAnim.frame == 0) {
					sky.loadTexture('sky', 0);
				} else if (skyMenuAnim.frame == 1) {
					sky.loadTexture('sky', 1);
				} else if (skyMenuAnim.frame == 2) {
					sky.loadTexture('sky', 2);
				} else if (skyMenuAnim.frame == 3) {
					sky.loadTexture('sky', 3);
				} else if (skyMenuAnim.frame == 4) {
					sky.loadTexture('sky', 4);
				} else if (skyMenuAnim.frame == 5) {
					sky.loadTexture('sky', 5);
				} else if (skyMenuAnim.frame == 6) {
					p1.setText('Build a robot!', true);
					skyMenuSprite.visible = false;
    				houseMenuSprite.visible = true;
    				houseMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				skySelect = false;
    				skyMenu = false;
    				houseMenu = true;
				}
			}
			
			if (skyMenuAnim.frame != 6) {
				skySelect = true;
			}
		}

		function foliageSelectionScreen() {
			// set up screen once
			if (!foliageSelect) {
				p1.setText('Select a decoration:', true);
				houseMenuSprite.visible = false;
				foliageMenuSprite.visible = true;
				foliageMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (foliageSelect) {
				if (foliageMenuAnim.frame == 0) {
					foliage.loadTexture('foliage', 0);
				} else if (foliageMenuAnim.frame == 1) {
					foliage.loadTexture('foliage', 1);
				} else if (foliageMenuAnim.frame == 2) {
					foliage.loadTexture('foliage', 2);
				} else if (foliageMenuAnim.frame == 3) {
					foliage.loadTexture('foliage', 3);
				} else if (foliageMenuAnim.frame == 4) {
					foliage.loadTexture('foliage', 4);
				} else if (foliageMenuAnim.frame == 5) {
					foliage.loadTexture('foliage', 5);
				} else if (foliageMenuAnim.frame == 6) {
					p1.setText('Design a house!', true);
					foliageMenuSprite.visible = false;
    				houseMenuSprite.visible = true;
    				houseMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				foliageSelect = false;
    				foliageMenu = false;
    				houseMenu = true;
				}
			}
			
			if (foliageMenuAnim.frame != 6) {
				foliageSelect = true;
			}
		}

		function groundSelectionScreen() {
			// set up screen once
			if (!groundSelect) {
				p1.setText('Select a pattern:', true);
				houseMenuSprite.visible = false;
				groundMenuSprite.visible = true;
				groundMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (groundSelect) {
				if (groundMenuAnim.frame == 0) {
					ground.loadTexture('ground', 0);
				} else if (groundMenuAnim.frame == 1) {
					ground.loadTexture('ground', 1);
				} else if (groundMenuAnim.frame == 2) {
					ground.loadTexture('ground', 2);
				} else if (groundMenuAnim.frame == 3) {
					ground.loadTexture('ground', 3);
				} else if (groundMenuAnim.frame == 4) {
					ground.loadTexture('ground', 4);
				} else if (groundMenuAnim.frame == 5) {
					ground.loadTexture('ground', 5);
				} else if (groundMenuAnim.frame == 6) {
					p1.setText('Design a house!', true);
					groundMenuSprite.visible = false;
    				houseMenuSprite.visible = true;
    				houseMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				groundSelect = false;
    				groundMenu = false;
    				houseMenu = true;
				}
			}
			
			if (groundMenuAnim.frame != 6) {
				groundSelect = true;
			}
		}
	}

}