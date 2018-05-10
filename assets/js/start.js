var startState = {

	create: function() {
		// text 
		var titleFont = 'Londrina Solid';
        var pFont = 'Jua';
		var titleText;
        var titleStyle;
        var p1;
        var p2;
        var pStyle;

        // sprites
        var keyboard;
        var mouse;
        var selection;
        var button;
        var returnKey;
        var spaceBar;

        // booleans
        var selectMode = false; // is the select bubble displayed? 
        var mousePressed = false; // was the mouse selected?
        var spacePressed = false; // was the space bar selected?
        var returnPressed = false; // was the return key selected?
        var reset = false; // resets selection
        var controlSelected = false; // has the control been selected?
        

   
        game.stage.backgroundColor = "#5fdcfa";

        WebFontConfig = {

            active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

            google: {
                families: [pFont, titleFont]
            }

        };

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

        pStyle = { 
        	font: pFont, 
        	fill: "#000000", 
        	fontSize: '40px', 
        	wordWrap: true, 
        	wordWrapWidth: 700, 
        	boundsAlignH: 'center', 
        	boundsAlignV: 'top'
        };

        p1 = game.add.text(0, 0, "Select a control:", pStyle);
        p1.setTextBounds(100, 220, 700, 200);

        keyboard = game.add.sprite(30, 330, 'keyboard');
        keyboard.animations.add('buttons', [5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 10, 11, 12, 13, 14]);
        keyboard.animations.play('buttons', 5, true);

        mouse = game.add.sprite(750, 360, 'mouse');
        mouse.animations.add('click', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
        //var anim2 = mouse.animations.add('click2', [0, 1, 2, 3, 14]);
        mouse.animations.play('click', 5, true);
        console.log(mouse.animations.currentAnim);

        button = game.add.sprite(0, 0, 'transparent');
        button.inputEnabled = true;

        enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


        game.input.keyboard.onUpCallback = function() {
            var key = game.input.keyboard.lastKey;

            if (key == enter) {
            	if (selectMode && returnPressed) {
            		// yes
		        	if (anim.frame == 1) {
		        		mouse.destroy();
		        		selection.destroy();
		        		keyboard.destroy();
		    			p1.setText('Great! Your control is the return key. Press the return key to continue.')
		        		returnKey = game.add.sprite(250, 350, 'return');
        				returnKey.animations.add('press', [0, 1, 2, 3, 4]);
        				returnKey.animations.play('press', 5, true);
        				controlSelected = true;
		        	}
        			// no
		        	if (anim.frame == 0) {
		        		reset = true;
		        	}
	        	}
	        	if (!selectMode && !returnPressed && !controlSelected)	{
	                selection = game.add.sprite(570, 290, 'selection');
	                selection.animations.add('click', [1, 0]);
	                keyboard.animations.stop(true, '0');
	                mouse.animations.stop(true, '0');
	                anim = selection.animations.play('click', 1, true);
	                returnPressed = true;
	                selectMode = true;
            	}
            	if (reset) {
		        	selection.destroy();
		        	keyboard.animations.play('buttons', 5, true);
		        	mouse.animations.play('click', 5, true);
		        	selectMode = false;
		        	returnPressed = false;
		        	reset = false;
	        	}
            } 
            else if (key == spaceBar) {
            	if (selectMode && spacePressed) {
            		// yes
		        	if (anim.frame == 1) {
		        		mouse.destroy();
		        		selection.destroy();
		        		keyboard.destroy();
		    			p1.setText('Great! Your control is the space bar. Press the space bar to continue.');
		    			controlSelected = true;
		    			spaceBar = game.add.sprite(150, 400, 'spaceBar');
		    			spaceBar.animations.add('press', [0, 1, 2, 3, 4]);
		    			spaceBar.animations.play('press', 5, true);

		        	}
        			// no
		        	if (anim.frame == 0) {
		        		reset = true;
		        	}
	        	}
	        	if (!selectMode && !spacePressed && !controlSelected) {
	            	selection = game.add.sprite(300, 390, 'selection');
	                selection.animations.add('click', [1, 0]);
	                keyboard.animations.stop(true, '0');
	                mouse.animations.stop(true, '0');
	                anim = selection.animations.play('click', 1, true);
	                spacePressed = true;
	                selectMode = true;
            	}
            	if (reset) {
		        	selection.destroy();
		        	keyboard.animations.play('buttons', 5, true);
		        	mouse.animations.play('click', 5, true);
		        	selectMode = false;
		        	spacePressed = false;
		        	reset = false;
	        	}
            }
        }

        button.events.onInputUp.add(showSelection, game);

        function showSelection() {
        	if (selectMode && mousePressed) {
        		// yes
	        	if (anim.frame == 1) {
	        		controlSelected = true;
	        		nextScreen();
	        	}
	        	// no
	        	if (anim.frame == 0) {
	        		reset = true;
	        	}
	        }
	        if (!selectMode && !mousePressed && !controlSelected) {
	        	selection = game.add.sprite(720, 220, 'selection');
	            selection.animations.add('click', [1, 0]);
	            keyboard.animations.stop(true, '0');
	            mouse.animations.stop(true, '0');
	            anim = selection.animations.play('click', 1, true);
	            mousePressed = true;
	            selectMode = true;
	        }
	        if (reset) {
	        	selection.destroy();
	        	keyboard.animations.play('buttons', 5, true);
	        	mouse.animations.play('click', 5, true);
	        	selectMode = false;
	        	mousePressed = false;
	        	reset = false;
	        }
	        
    	}

    	function nextScreen() {
    		selection.destroy();
    		if (mousePressed) {
    			keyboard.destroy();
    			p1.setText('Great! Your control is the mouse. Click the mouse to continue.')
    			mouse.x = 400;
    			mouse.y = 400;
    			mouse.animations.add('click', [0, 1, 2, 3, 14]);
    			mouse.animations.play('click', 5, true);
    		} 
    	}

	}

}