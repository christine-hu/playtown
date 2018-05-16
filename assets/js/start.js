var startState = {


	create: function() {
		// text 
		var titleFont = 'Londrina Solid';
        var pFont = 'Jua';
		var titleText;
        var titleStyle;
        var p1;
        var pStyle;

        // sprites
        var keyboard;
        var mouse;
        var selection;
        var button;
        var returnKey;
        var spaceBar;
        var spaceBarSprite;

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
        	fontSize: '45px', 
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
        mouse.animations.play('click', 5, true);

        button = game.add.sprite(0, 0, 'transparent');
        button.inputEnabled = true;

        enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


 		
        game.input.keyboard.onUpCallback = function() {
        	var key = game.input.keyboard.lastKey;
            if (key == enter) {
	        	if (controlSelected && selectedControl == 0) {
	        		selectedControl = 0;
	        		game.state.start('menu', true, false, selectedControl);
	        	}
            	if (selectMode && returnPressed) {
            		// yes
		        	if (anim.frame == 1) {
		        		nextScreen();
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
		        	resetSelection();
	        	}
            } 


            if (key == spaceBar) {
            	if (controlSelected && selectedControl == 1) {
            		selectedControl = 1; 
	        		game.state.start('menu', true, false, selectedControl);
	        	}

            	if (selectMode && spacePressed) {
            		// yes
		        	if (anim.frame == 1) {
		        		nextScreen();
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
		        	resetSelection();
	        	}
            }
        }

        button.events.onInputUp.add(showSelection, game);

        function showSelection() {
        	if (controlSelected && selectedControl == 2) {
        			selectedControl = 2; 
	        		game.state.start('menu', true, false, selectedControl);
	        	}
        	if (selectMode && mousePressed) {
        		// yes
	        	if (anim.frame == 1) {
	        		nextScreen();
	        		controlSelected = true;
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
	        	resetSelection();
	        }
	        
    	}

    	// shows the yes & no popup
    	function addSelectionMenu() {
    		var x;
    		var y;
    		if (mousePressed) {
    			x = 720;
    			y = 220;
    			mousePressed = true;
    		} else if (key == spaceBar) {
    			x = 300;
    			y = 390;
    			spacePressed = true;
    		} else if (key == returnKey) {
    			x = 570;
    			y = 290;
    			returnPressed = true;
    		}

    	}
 
 		// resets selected control 
    	function resetSelection() {
    		selection.destroy();
        	keyboard.animations.play('buttons', 5, true);
        	mouse.animations.play('click', 5, true);
        	selectMode = false;
        	mousePressed = false;
        	spacePressed = false;
        	returnPressed = false;
        	reset = false;
    	}

    	// moves to screen confirming control 
    	function nextScreen() {
    		selection.destroy();
    		if (mousePressed) {
    			selectedControl = 2;
    			keyboard.destroy();
    			p1.setText('Great! Your control is the mouse. Click the mouse to continue.', true);
    			mouse.x = 400;
    			mouse.y = 400;
    			mouse.animations.add('click', [0, 1, 2, 3, 14]);
    			mouse.animations.play('click', 5, true);
    		} 
    		if (spacePressed) {
    			selectedControl = 1;
    			mouse.destroy();
		        keyboard.destroy();
		    	p1.setText('Great! Your control is the space bar. Press the space bar to continue.', true);
		    	spaceBarSprite = game.add.sprite(150, 450, 'spaceBar');
		    	spaceBarSprite.animations.add('press', [0, 1, 2, 3, 4]);
		    	spaceBarSprite.animations.play('press', 5, true);
    		}
    		if (returnPressed) {
    			selectedControl = 0;
    			mouse.destroy();
		        keyboard.destroy();
		    	p1.setText('Great! Your control is the return key. Press the return key to continue.', true);
		        returnKey = game.add.sprite(300, 400, 'return');
        		returnKey.animations.add('press', [1, 1, 1, 1, 0]);
        		returnKey.animations.play('press', 5, true);
    		}
    		controlSelected = true;
    	}

	}, 

	shutdown: function() {
		game.input.keyboard.onUpCallback = null;
	}

}