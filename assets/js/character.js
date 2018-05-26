var characterState = {


	create: function() {
		// components of avatar
		var hair;
		var face;
		var eyes;
		var nose; 
		var mouth;
		var accessory; 

		// menus
		var characterMenuSprite;
		var characterMenuAnim;
		var characterMenu = true;

		var skinMenuSprite;
		var skinMenuAnim;
		var skinMenu = false;
		var skinSelect  = false;

		var eyeMenuSprite;
		var eyeMenuAnim;
		var eyeMenu = false;
		var eyeSelect = false;

		var noseMenuSprite;
		var noseMenuAnim;
		var noseMenu = false;

		var mouthMenuSprite;
		var mouthMenuAnim;
		var mouthMenu = false;
		var mouthSelect = false;


		// hair variables 		
		var hairMenu1;
		var hairMenu2;
		var hairMenu3;

		var hairMenuAnim;
		var hairMenuAnim2;
		var hairMenuAnim3;

		var hairMenu = false;
		var hairSelect = false;
		var hairSelect2 = false;
		var hairSelect3 = false;
		var page1 = true;
		var page2 = false;
		var page3 = false;


		var accessoryMenuSprite;
		var accessoryMenuAnim;
		var accessoryMenu = false;
		var accessorySelect = false;

		var doneButtonSprite;
		var doneButtonAnim;

		// avatar components
		var backdrop;
		var skin;
		var eyes;
		var nose;
		var mouth;
		var hair;
		var accessories;


		// setting up the main menu 
		p1 = game.add.text(0, 0, "Design a character!", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 40, 700, 70);

        characterMenuSprite = game.add.sprite(40, 155, 'characterMenu');
        characterMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        characterMenuAnim = characterMenuSprite.animations.play('scroll', speed, true);

        skinMenuSprite = game.add.sprite(40, 155, 'skinMenu');
        skinMenuSprite.visible = false;
        skinMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
        skinMenuAnim = skinMenuSprite.animations.getAnimation('scroll');

        hairMenu1 = game.add.sprite(40, 155, 'hairMenu1');
        hairMenu1.visible = false;
        hairMenu1.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6, 7]);
        hairMenuAnim = hairMenu1.animations.getAnimation('scroll');

        hairMenu2 = game.add.sprite(40, 91, 'hairMenu2');
        hairMenu2.visible = false;
        hairMenu2.animations.add('scroll', [7, 0, 1, 2, 3, 4, 5, 6, 8]);
        hairMenuAnim2 = hairMenu2.animations.getAnimation('scroll');
        
        hairMenu3 = game.add.sprite(40, 91, 'hairMenu3');
        hairMenu3.visible = false;
        hairMenu3.animations.add('scroll', [5, 0, 1, 2, 3, 4, 6]);
        hairMenuAnim3 = hairMenu3.animations.getAnimation('scroll');

        eyeMenuSprite = game.add.sprite(40, 155, 'eyeMenu');
        eyeMenuSprite.visible = false;
        eyeMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6, 7]);
        eyeMenuAnim = eyeMenuSprite.animations.getAnimation('scroll');

        mouthMenuSprite = game.add.sprite(40, 155, 'mouthMenu');
        mouthMenuSprite.visible = false;
        mouthMenuSprite.animations.add('scroll');
        mouthMenuAnim = mouthMenuSprite.animations.getAnimation('scroll');

        accessoryMenuSprite = game.add.sprite(40, 155, 'accessoryMenu');
        accessoryMenuSprite.visible = false;
        accessoryMenuSprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6, 7]);
        accessoryMenuAnim = accessoryMenuSprite.animations.getAnimation('scroll');

        backdrop = game.add.sprite(380, 130, 'characterBackground');
        skin = game.add.sprite (519, 220, 'skin');
        eyes = game.add.sprite(550, 330, 'eyes');
        nose = game.add.sprite(604, 390, 'nose');
        mouth = game.add.sprite(585, 405, 'mouth');
        hair = game.add.sprite(408.5, 145, 'hair', 8);
        accessories = game.add.sprite(508, 130, 'accessories', 6);

        doneButtonSprite = game.add.sprite(550, 580, 'doneButton');
        doneButtonSprite.animations.add('press', [0, 0, 0, 0, 0, 0, 1]);
        doneButtonSprite.animations.add('8', [0, 0, 0, 0, 0, 0, 0, 1]);
        doneButtonSprite.animations.add('9', [0, 0, 0, 0, 0, 0, 0, 0, 1]);
        doneButtonAnim = doneButtonSprite.animations.play('press', speed, true);

		
		// line that controls EVERYTHING!!!! :o
		control.onUp.add(menuSelection, this);

		function menuSelection(pointer) {

			// stops mouseIn & mouseOut events 
			if (control == game.input && !pointer.withinGame) {return;}
			console.log(characterMenu);

			// choosing screens
			if (characterMenu) {
				if (characterMenuSprite.frame == 0) {
					skinMenu = true;
					characterMenu = false;
				}
				else if (characterMenuSprite.frame == 1) {
					hairMenu = true;
					characterMenu = false;
				} else if (characterMenuSprite.frame == 2) {
					eyeMenu = true;
					characterMenu = false;
				} else if (characterMenuSprite.frame == 3) {
					mouthMenu = true;
					characterMenu = false;
				} else if (characterMenuSprite.frame == 4) {
					accessoryMenu = true;
					characterMenu = false;
				} 
			}

			// displaying preference screens
			if (skinMenu) {
				skinSelectionScreen();
			}
			if (hairMenu) {
				hairSelectionScreen();
			}
			if (eyeMenu) {
				eyeSelectionScreen();
			}
			if (noseMenu) {
				noseSelectionScreen();
			}
			if (mouthMenu) {
				mouthSelectionScreen();
			}
			if (accessoryMenu) {
				accessorySelectionScreen();
			}
			

		}

		function skinSelectionScreen() {
			// set up screen once
			if (!skinSelect) {
				p1.setText('Select a skin color:', true);
				characterMenuSprite.visible = false;
				skinMenuSprite.visible = true;
				skinMenuAnim.play(speed, true);
				doneButtonAnim.play(speed, true);
			}

			if (skinSelect) {
				if (skinMenuAnim.frame == 0) {
					skin.loadTexture('skin', 1);
				} else if (skinMenuAnim.frame == 1) {
					skin.loadTexture('skin', 2);
				} else if (skinMenuAnim.frame == 2) {
					skin.loadTexture('skin', 3);
				} else if (skinMenuAnim.frame == 3) {
					skin.loadTexture('skin', 4);
				} else if (skinMenuAnim.frame == 4) {
					skin.loadTexture('skin', 5);
				} else if (skinMenuAnim.frame == 5) {
					skin.loadTexture('skin', 6);
				} else if (skinMenuAnim.frame == 6) {
					p1.setText('Design a character!', true);
					skinMenuSprite.visible = false;
    				characterMenuSprite.visible = true;
    				characterMenuSprite.animations.currentAnim.restart();
    				doneButtonAnim.restart();
    				skinSelect = false;
    				skinMenu = false;
    				characterMenu = true;
				}
			}
			
			if (skinMenuAnim.frame != 6) {
				skinSelect = true;
			}
		}

		function hairSelectionScreen() {
			console.log('on page 1');
			console.log('frame: ' + hairMenuAnim.frame);
			if (!hairSelect && page1) {
				p1.setText('Select a hair style:', true);
				characterMenuSprite.visible = false;
				hairMenu1.visible = true;
				hairMenuAnim.play(speed, true);
				doneButtonSprite.animations.play('8', speed, true);
			}
			if (hairSelect || hairSelect2 || hairSelect3) {
				if (hairMenuAnim.frame == 0) {
					hair.loadTexture('hair', 0);
				} else if (hairMenuAnim.frame == 1) {
					hair.loadTexture('hair', 1);
				} else if (hairMenuAnim.frame == 2) {
					hair.loadTexture('hair', 2);
				} else if (hairMenuAnim.frame == 3) {
					hair.loadTexture('hair', 3);
				} else if (hairMenuAnim.frame == 4) {
					hair.loadTexture('hair', 4);
				} else if (hairMenuAnim.frame == 5) {
					hair.loadTexture('hair', 5);
				} else if (hairMenuAnim.frame == 6) {
					page1 = false; 
					page2 = true;
					hairSelect = false;
					hairMenu1.visible = false;
					hairSelectSecondPage();
				} 
				else if (hairMenuAnim.frame == 7) {
					p1.setText('Design a character!', true);
					hairMenu1.visible = false;
    				characterMenuSprite.visible = true;
    				characterMenuSprite.animations.currentAnim.restart();
    				doneButtonSprite.animations.currentAnim.stop();
    				doneButtonAnim.restart();
    				hairSelect = false;
    				hairMenu = false;
    				characterMenu = true;
				}
			}
			
			if (hairMenuAnim.frame != 7 && page1) {
				hairSelect = true;
			}
			
		}

		function hairSelectSecondPage() {
			//console.log('on page 2')
			if (!hairSelect2 && !page3 && !page1) {
				characterMenuSprite.visible = false;
				hairMenu2.visible = true;
				doneButtonSprite.animations.currentAnim.stop();
				hairMenuAnim2.play(speed, true);
				doneButtonSprite.animations.play('9', speed, true);
			}
			if (page2 && hairSelect2 || hairSelect3 || hairSelect) {
				if (hairMenuAnim2.frame == 0) {
					hair.loadTexture('hair', 6);
				} else if (hairMenuAnim2.frame == 1) {
					hair.loadTexture('hair', 7);
				} else if (hairMenuAnim2.frame == 2) {
					hair.loadTexture('hair', 8);
				} else if (hairMenuAnim2.frame == 3) {
					hair.loadTexture('hair', 9);
				} else if (hairMenuAnim2.frame == 4) {
					hair.loadTexture('hair', 10);
				} else if (hairMenuAnim2.frame == 5) {
					hair.loadTexture('hair', 11);
				} else if (hairMenuAnim2.frame == 6) {
					page2 = false;
					page3 = true;
					hairSelect2 = false;
					hairMenu2.visible = false;
					hairSelectThirdPage();
				} else if (hairMenuAnim2.frame == 7) {
					page2 = false;
					page1 = true;
					hairSelect2 = false;
					hairMenu2.visible = false;
					hairSelectionScreen();
				} else if (hairMenuAnim2.frame == 8) {
					p1.setText('Design a character!', true);
					hairMenu2.visible = false;
    				characterMenuSprite.visible = true;
    				characterMenuSprite.animations.currentAnim.restart();
    				doneButtonSprite.animations.currentAnim.stop();
    				doneButtonAnim.restart();
    				page1 = true;
    				page2 = false;
    				hairSelect2 = false;
    				hairMenu = false;
    				characterMenu = true;
    				return;
				}
			}
			if (page2 && hairMenuAnim2.frame != 8) {
				hairSelect2 = true;
			}
			
		}

		function hairSelectThirdPage() {
			//console.log('on page 3');
			if (!hairSelect3 && page3) {
				characterMenuSprite.visible = false;
				hairMenu3.visible = true;
				doneButtonSprite.animations.currentAnim.stop();
				doneButtonSprite.animations.play('press', speed, true);
				hairMenuAnim3.play(speed, true);
			}
			if (hairSelect3) {
				if (hairMenuAnim3.frame == 0) {
					hair.loadTexture('hair', 12);
				} else if (hairMenuAnim3.frame == 1) {
					hair.loadTexture('hair', 13);
				} else if (hairMenuAnim3.frame == 2) {
					hair.loadTexture('hair', 14);
				} else if (hairMenuAnim3.frame == 3) {
					hair.loadTexture('hair', 15);
				} else if (hairMenuAnim3.frame == 4) {
					hair.loadTexture('hair', 16);
				} else if (hairMenuAnim3.frame == 5) {
					page3 = false;
					page2 = true;
					hairSelect3 = false;
					hairMenu3.visible = false;
					hairSelectSecondPage();
				} else if (hairMenuAnim3.frame == 6) {
					p1.setText('Design a character!', true);
					hairMenu3.visible = false;
    				characterMenuSprite.visible = true;
    				characterMenuSprite.animations.currentAnim.restart();
    				doneButtonSprite.animations.currentAnim.stop();
    				doneButtonAnim.restart();
    				page3 = false;
    				page1 = true;
    				hairSelect3 = false;
    				hairMenu = false;
    				characterMenu = true;
				}
			}
			if (page3 && hairMenuAnim3.frame != 6) {
				hairSelect3 = true;
			}
		}

		function eyeSelectionScreen() {
			if (!eyeSelect) {
				p1.setText('Select a pair of eyes:', true);
				characterMenuSprite.visible = false;
				eyeMenuSprite.visible = true;
				eyeMenuAnim.play(speed, true);	
				doneButtonSprite.animations.play('8', speed, true);
			}

			if (eyeSelect) {
				if (eyeMenuAnim.frame == 0) {
					eyes.loadTexture('eyes', 0);
				} else if (eyeMenuAnim.frame == 1) {
					eyes.loadTexture('eyes', 1);
				} else if (eyeMenuAnim.frame == 2) {
					eyes.loadTexture('eyes', 2);
				} else if (eyeMenuAnim.frame == 3) {
					eyes.loadTexture('eyes', 3);
				} else if (eyeMenuAnim.frame == 4) {
					eyes.loadTexture('eyes', 4);
				} else if (eyeMenuAnim.frame == 5) {
					eyes.loadTexture('eyes', 5);
				} else if (eyeMenuAnim.frame == 6) {
					eyes.loadTexture('eyes', 6);
				} else if (eyeMenuAnim.frame == 7) {
					p1.setText('Design a character!', true);
					eyeMenuSprite.visible = false;
    				characterMenuSprite.visible = true;
    				characterMenuSprite.animations.currentAnim.restart();
    				doneButtonSprite.animations.currentAnim.stop();
    				doneButtonAnim.restart();
    				eyeSelect = false;
    				eyeMenu = false;
    				characterMenu = true;
				}
			}

			if (eyeMenuAnim.frame != 7) {
				eyeSelect = true;
			}
		}

		function noseSelectionScreen() {
			
		}

		function mouthSelectionScreen() {
			if (!mouthSelect) {
				p1.setText('Select a mouth:', true);
				characterMenuSprite.visible = false;
				mouthMenuSprite.visible = true;
				mouthMenuAnim.play(speed, true);	
				doneButtonSprite.animations.play('9', speed, true);
			}

			if (mouthSelect) {
				if (mouthMenuAnim.frame == 0) {
					mouth.loadTexture('mouth', 0);
				} else if (mouthMenuAnim.frame == 1) {
					mouth.loadTexture('mouth', 1);
				} else if (mouthMenuAnim.frame == 2) {
					mouth.loadTexture('mouth', 2);
				} else if (mouthMenuAnim.frame == 3) {
					mouth.loadTexture('mouth', 3);
				} else if (mouthMenuAnim.frame == 4) {
					mouth.loadTexture('mouth', 4);
				} else if (mouthMenuAnim.frame == 5) {
					mouth.loadTexture('mouth', 5);
				} else if (mouthMenuAnim.frame == 6) {
					mouth.loadTexture('mouth', 6);
				} else if (mouthMenuAnim.frame == 7) {
					mouth.loadTexture('mouth', 7);
				} else if (mouthMenuAnim.frame == 8) {
					p1.setText('Design a character!', true);
					mouthMenuSprite.visible = false;
    				characterMenuSprite.visible = true;
    				characterMenuSprite.animations.currentAnim.restart();
    				doneButtonSprite.animations.currentAnim.stop();
    				doneButtonAnim.restart();
    				mouthSelect = false;
    				mouthMenu = false;
    				characterMenu = true;
				}
			}

			if (mouthMenuAnim.frame != 8) {
				mouthSelect = true;
			}
			
		}

		function accessorySelectionScreen() {
			if (!accessorySelect) {
				p1.setText('Select an accessory:', true);
				characterMenuSprite.visible = false;
				accessoryMenuSprite.visible = true;
				accessoryMenuAnim.play(speed, true);	
				doneButtonSprite.animations.play('8', speed, true);
			}

			if (accessorySelect) {
				if (accessoryMenuAnim.frame == 0) {
					accessories.loadTexture('accessories', 0);
				} else if (accessoryMenuAnim.frame == 1) {
					accessories.loadTexture('accessories', 1);
				} else if (accessoryMenuAnim.frame == 2) {
					accessories.loadTexture('accessories', 2);
				} else if (accessoryMenuAnim.frame == 3) {
					accessories.loadTexture('accessories', 3);
				} else if (accessoryMenuAnim.frame == 4) {
					accessories.loadTexture('accessories', 4);
				} else if (accessoryMenuAnim.frame == 5) {
					accessories.loadTexture('accessories', 5);
				} else if (accessoryMenuAnim.frame == 6) {
					accessories.loadTexture('accessories', 6);
				} else if (accessoryMenuAnim.frame == 7) {
					p1.setText('Design a character!', true);
					accessoryMenuSprite.visible = false;
    				characterMenuSprite.visible = true;
    				characterMenuSprite.animations.currentAnim.restart();
    				doneButtonSprite.animations.currentAnim.stop();
    				doneButtonAnim.restart();
    				accessorySelect = false;
    				accessoryMenu = false;
    				characterMenu = true;
				}
			}

			if (accessoryMenuAnim.frame != 7) {
				accessorySelect = true;
			}
			
		}


	}

}