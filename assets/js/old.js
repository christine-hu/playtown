create: function() {
		 var titleFont = 'Londrina Solid';
        var pFont = 'Jua';

        WebFontConfig = {

            //  'active' means all requested fonts have finished loading
            //  We set a 1 second delay before calling 'createText'.
            //  For some reason if we don't the browser cannot render the text the first time it's created.
            active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

            //  The Google Fonts we want to load (specify as many as you like in the array)
            google: {
                families: [pFont, titleFont]
            }

        };

        var titleText;
        var titleStyle;
        var p1;
        var p2;
        var pStyle;

        var upArrow;
        var downArrow;
        var leftArrow;
        var rightArrow;
        var enter;
        var spaceBar;
        var tabKey;
        var shiftKey;
        var controlKey;
        var optionKey;
        var commandKey;
        var deleteKey;
        var selectedControl; 
        var prevSelection;

        var blah;
        var firstPress = false;
        var one = true;

            game.stage.backgroundColor = "#5fdcfa";

            size = "120px";


            titleStyle = { font: titleFont, fill: "#f191b0", fontSize: size};
            

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

            pStyle = { font: pFont, fill: "#000000", fontSize: '40px', wordWrap: true, wordWrapWidth: 700};
            p1 = game.add.text(game.world.centerX, 250, "Select a control:", pStyle);
            p1.anchor.set(0.5);

            var keyboard = game.add.sprite(30, 330, 'keyboard');
            keyboard.animations.add('buttons', [5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 10, 11, 12, 13, 14]);
            keyboard.animations.play('buttons', 5, true);

            var mouse = game.add.sprite(750, 360, 'mouse');
            mouse.animations.add('click', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
            mouse.animations.play('click', 5, true);

            enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

             game.input.keyboard.onUpCallback = function() {
                var key = game.input.keyboard.lastKey;
                console.log(key);

                if (key == enter) {
                    keyboard.destroy(); 
                    mouse.destroy(); 
                    p1.setText('Great! Your control is the return key. Press the return key to continue.');
                    var returnSprite = game.add.sprite(250, 330, 'return');
                    returnSprite.animations.add('click', [0, 1, 2, 3, 4]);
                    returnSprite.animations.play('click', 5, true);

                } 
                else if (key == spaceBar) {keyboard.destroy(); mouse.destroy(); p1.setText('Great! Your control is the space bar. Press the space bar to continue.')}


            }
	}