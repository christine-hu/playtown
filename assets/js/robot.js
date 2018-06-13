var robotState = {

	create: function() {
		// components of robot
		var body;
		var eyes;
		var mouth;
		var antenna;
		var arm;
		var legs;

		var armColor; 
		var armStyle;

		// done button
		var doneButtonSprite;
		var doneButtonAnim;

		// menus 
		var robotMenuSprite
		var robotMenuAnim;
		var robotMenu = true;

		var bodyMenuSprite
		var bodyMenuAnim;
		var bodyMenu = false;
		var bodySelect = false;

		var armMenuSprite
		var armMenuAnim;
		var armMenu = false;
		var armSelect = false;

		var legMenuSprite
		var legMenuAnim;
		var legMenu = false;
		var legSelect = false;

		var faceMenuSprite
		var faceMenuAnim;
		var faceMenu = false;
		var faceSelect = false;

		var antennaMenuSprite
		var antennaMenuAnim;
		var antennaMenu = false;
		var antennaSelect = false;

		var designMenuSprite
		var designMenuAnim;
		var designMenu = false;
		var designSelect = false;


		game.stage.backgroundColor = '#ffae68';

		// setting up the main menu 
		p1 = game.add.text(0, 0, "Build a robot!", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 40, 700, 70);

        // displaying robot 
        armColor = 'gray';
        armStyle = 6;

        backdrop = game.add.sprite(365, 112, 'robotBackground');
        arm = game.add.sprite(482, 206, armColor, armStyle);
        antenna = game.add.sprite(569, 170, 'antenna', 6);
        body = game.add.sprite(520, 200, 'body', 6);
        leg = game.add.sprite(504, 460, 'leg', 6);
        design = game.add.sprite(580, 330, 'design', 6);
        face = game.add.sprite(597, 233, 'face', 6);


        robotMenuSprite = game.add.sprite(45, 155, 'robotMenu');
        robotMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        robotMenuAnim = robotMenuSprite.animations.play('scroll', speed, true);

        bodyMenuSprite = game.add.sprite(45, 155, 'bodyMenu');
        bodyMenuSprite.visible = false;
        bodyMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        bodyMenuAnim = bodyMenuSprite.animations.getAnimation('scroll');

        armMenuSprite = game.add.sprite(45, 155, 'armMenu');
        armMenuSprite.visible = false;
        armMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        armMenuAnim = armMenuSprite.animations.getAnimation('scroll');

        legMenuSprite = game.add.sprite(45, 155, 'legMenu');
        legMenuSprite.visible = false;
        legMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        legMenuAnim = legMenuSprite.animations.getAnimation('scroll');

        faceMenuSprite = game.add.sprite(45, 155, 'faceMenu');
        faceMenuSprite.visible = false;
        faceMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        faceMenuAnim = faceMenuSprite.animations.getAnimation('scroll');

        antennaMenuSprite = game.add.sprite(45, 155, 'antennaMenu');
        antennaMenuSprite.visible = false;
        antennaMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        antennaMenuAnim = antennaMenuSprite.animations.getAnimation('scroll');

        designMenuSprite = game.add.sprite(45, 155, 'designMenu');
        designMenuSprite.visible = false;
        designMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        designMenuAnim = designMenuSprite.animations.getAnimation('scroll');

        doneButtonSprite = game.add.sprite(720, 560, 'doneButton');
        doneButtonSprite.animations.add('done', [8, 8, 8, 8, 8, 8, 9]);
        doneButtonSprite.animations.add('back', [10, 10, 10, 10, 10, 10, 11]);
        doneButtonAnim = doneButtonSprite.animations.play('done', speed, true);
        backButtonAnim = doneButtonSprite.animations.getAnimation('back');

        // line that controls EVERYTHING!!!! :o
		control.onUp.add(menuSelection, this);

		function menuSelection(pointer) {

			// stops mouseIn & mouseOut events 
			if (control == game.input && !pointer.withinGame) {return;}

			// choosing screens
			if (robotMenu) {
				if (robotMenuSprite.frame == 0) {
					bodyMenu = true;
					robotMenu = false;
				}
				else if (robotMenuSprite.frame == 1) {
					armMenu = true;
					robotMenu = false;
				} else if (robotMenuSprite.frame == 2) {
					legMenu = true;
					robotMenu = false;
				} else if (robotMenuSprite.frame == 3) {
					faceMenu = true;
					robotMenu = false;
				} else if (robotMenuSprite.frame == 4) {
					antennaMenu = true;
					robotMenu = false;
				} else if (robotMenuSprite.frame == 5) {
					designMenu = true;
					robotMenu = false;
				} else if (robotMenuSprite.frame == 6) {
					game.state.start('map', true, false, control, pStyle);
				}
			}

			// displaying preference screens
			if (bodyMenu) {
				bodySelectionScreen();
			}
			if (armMenu) {
				armSelectionScreen();
			}
			if (legMenu) {
				legSelectionScreen();
			}
			if (faceMenu) {
				faceSelectionScreen();
			}
			if (antennaMenu) {
				antennaSelectionScreen();
			}
			if (designMenu) {
				designSelectionScreen();
			}
			

		}

		function bodySelectionScreen() {
			// set up screen once
			if (!bodySelect) {
				p1.setText('Select a body:', true);
				robotMenuSprite.visible = false;
				bodyMenuSprite.visible = true;
				bodyMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (bodySelect) {
				if (bodyMenuAnim.frame == 0) {
					body.loadTexture('body', 0);
				} else if (bodyMenuAnim.frame == 1) {
					body.loadTexture('body', 1);
				} else if (bodyMenuAnim.frame == 2) {
					body.loadTexture('body', 2);
				} else if (bodyMenuAnim.frame == 3) {
					body.loadTexture('body', 3);
				} else if (bodyMenuAnim.frame == 4) {
					body.loadTexture('body', 4);
				} else if (bodyMenuAnim.frame == 5) {
					body.loadTexture('body', 5);
				} else if (bodyMenuAnim.frame == 6) {
					p1.setText('Build a robot!', true);
					bodyMenuSprite.visible = false;
    				robotMenuSprite.visible = true;
    				robotMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				bodySelect = false;
    				bodyMenu = false;
    				robotMenu = true;
				}
			}
			
			if (bodyMenuAnim.frame != 6) {
				bodySelect = true;
			}
		}

		function armSelectionScreen() {
			// set up screen once
			if (!armSelect) {
				p1.setText('Select arms:', true);
				robotMenuSprite.visible = false;
				armMenuSprite.visible = true;
				armMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (armSelect) {
				if (armMenuAnim.frame == 0) {
					armStyle = 0; 
				} else if (armMenuAnim.frame == 1) {
					armStyle = 1;
				} else if (armMenuAnim.frame == 2) {
					armStyle = 2;
				} else if (armMenuAnim.frame == 3) {
					armStyle = 3;
				} else if (armMenuAnim.frame == 4) {
					armStyle = 4;
				} else if (armMenuAnim.frame == 5) {
					armStyle = 5;
				} else if (armMenuAnim.frame == 6) {
					p1.setText('Build a robot!', true);
					armMenuSprite.visible = false;
    				robotMenuSprite.visible = true;
    				robotMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				armSelect = false;
    				armMenu = false;
    				robotMenu = true;
				}
			}

			arm.loadTexture(armColor, armStyle);
			
			if (armMenuAnim.frame != 6) {
				armSelect = true;
			}
		}

		function legSelectionScreen() {
			// set up screen once
			if (!legSelect) {
				p1.setText('Select a color:', true);
				robotMenuSprite.visible = false;
				legMenuSprite.visible = true;
				legMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (legSelect) {
				if (legMenuAnim.frame == 0) {
					leg.loadTexture('leg', 0);
					armColor = 'gray';
					if (armStyle == 6) {
						armStyle = 0; 
					}
				} else if (legMenuAnim.frame == 1) {
					leg.loadTexture('leg', 1);
					armColor = 'purple';
					if (armStyle == 6) {
						armStyle = 0; 
					}
				} else if (legMenuAnim.frame == 2) {
					leg.loadTexture('leg', 2);
					armColor = 'red';
					if (armStyle == 6) {
						armStyle = 0; 
					}
				} else if (legMenuAnim.frame == 3) {
					leg.loadTexture('leg', 3);
					armColor = 'blue';
					if (armStyle == 6) {
						armStyle = 0; 
					}
				} else if (legMenuAnim.frame == 4) {
					leg.loadTexture('leg', 4);
					armColor = 'green';
					if (armStyle == 6) {
						armStyle = 0; 
					}
				} else if (legMenuAnim.frame == 5) {
					leg.loadTexture('leg', 5);
					armColor = 'brown';
					if (armStyle == 6) {
						armStyle = 0; 
					}
				} else if (legMenuAnim.frame == 6) {
					p1.setText('Build a robot!', true);
					legMenuSprite.visible = false;
    				robotMenuSprite.visible = true;
    				robotMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				legSelect = false;
    				legMenu = false;
    				robotMenu = true;
				}
			}
			
			arm.loadTexture(armColor, armStyle);

			if (legMenuAnim.frame != 6) {
				legSelect = true;
			}
		}

		function faceSelectionScreen() {
			// set up screen once
			if (!faceSelect) {
				p1.setText('Select a face:', true);
				robotMenuSprite.visible = false;
				faceMenuSprite.visible = true;
				faceMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (faceSelect) {
				if (faceMenuAnim.frame == 0) {
					face.loadTexture('face', 0);
				} else if (faceMenuAnim.frame == 1) {
					face.loadTexture('face', 1);
				} else if (faceMenuAnim.frame == 2) {
					face.loadTexture('face', 2);
				} else if (faceMenuAnim.frame == 3) {
					face.loadTexture('face', 3);
				} else if (faceMenuAnim.frame == 4) {
					face.loadTexture('face', 4);
				} else if (faceMenuAnim.frame == 5) {
					face.loadTexture('face', 5);
				} else if (faceMenuAnim.frame == 6) {
					p1.setText('Make some ice cream!', true);
					faceMenuSprite.visible = false;
    				robotMenuSprite.visible = true;
    				robotMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				faceSelect = false;
    				faceMenu = false;
    				robotMenu = true;
				}
			}
			
			if (faceMenuAnim.frame != 6) {
				faceSelect = true;
			}
		}

		function antennaSelectionScreen() {
			// set up screen once
			if (!antennaSelect) {
				p1.setText('Select an antenna:', true);
				robotMenuSprite.visible = false;
				antennaMenuSprite.visible = true;
				antennaMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (antennaSelect) {
				if (antennaMenuAnim.frame == 0) {
					antenna.loadTexture('antenna', 0);
				} else if (antennaMenuAnim.frame == 1) {
					antenna.loadTexture('antenna', 1);
				} else if (antennaMenuAnim.frame == 2) {
					antenna.loadTexture('antenna', 2);
				} else if (antennaMenuAnim.frame == 3) {
					antenna.loadTexture('antenna', 3);
				} else if (antennaMenuAnim.frame == 4) {
					antenna.loadTexture('antenna', 4);
				} else if (antennaMenuAnim.frame == 5) {
					antenna.loadTexture('antenna', 5);
				} else if (antennaMenuAnim.frame == 6) {
					p1.setText('Build a robbot!', true);
					antennaMenuSprite.visible = false;
    				robotMenuSprite.visible = true;
    				robotMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				antennaSelect = false;
    				antennaMenu = false;
    				robotMenu = true;
				}
			}
			
			if (antennaMenuAnim.frame != 6) {
				antennaSelect = true;
			}
		}

		function designSelectionScreen() {
			// set up screen once
			if (!designSelect) {
				p1.setText('Select a pattern:', true);
				robotMenuSprite.visible = false;
				designMenuSprite.visible = true;
				designMenuAnim.play(speed, true);
				backButtonAnim.play(speed, true);
			}

			if (designSelect) {
				if (designMenuAnim.frame == 0) {
					design.loadTexture('design', 0);
				} else if (designMenuAnim.frame == 1) {
					design.loadTexture('design', 1);
				} else if (designMenuAnim.frame == 2) {
					design.loadTexture('design', 2);
				} else if (designMenuAnim.frame == 3) {
					design.loadTexture('design', 3);
				} else if (designMenuAnim.frame == 4) {
					design.loadTexture('design', 4);
				} else if (designMenuAnim.frame == 5) {
					design.loadTexture('design', 5);
				} else if (designMenuAnim.frame == 6) {
					p1.setText('Build a robot!', true);
					designMenuSprite.visible = false;
    				robotMenuSprite.visible = true;
    				robotMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				designSelect = false;
    				designMenu = false;
    				robotMenu = true;
				}
			}
			
			if (designMenuAnim.frame != 6) {
				designSelect = true;
			}
		}
	}

}