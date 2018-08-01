// default settings
var speed = 2; 
var size = '45px';
var color = 'color';

// input keys 
var escape; 
var tab; 
var enter; 
var space;

// misc. global variables 
var black; // fade effect images
var nextState = false; // handles state switches
var twoSwitches = false; // one or two switches

function menuScreen(sprite, button, text, texture, mainScreen, mainText, num = 6) {
	this.sprite = sprite;
	this.sprite.visible = false;
	this.anim = this.sprite.animations.add('scroll', returnArray(num + 1));
	this.display = false;
	this.selectMode = false;
	this.text = text;
	this.texture = texture;
	this.mainScreen = mainScreen;
	this.numOptions = num;
	this.button = button;
	this.doneAnim = this.button.animations.getAnimation('done');
	this.backAnim = this.button.animations.getAnimation('back');
	this.isMainScreen = false;

	this.initializeMain = function() {
		this.isMainScreen = true;
		this.sprite.visible = true;
		if (!twoSwitches) {
			this.doneAnim.play(speed, true);
			this.anim.play(speed, true); 
		}
		this.display = true;
	}


	this.initialize = function() {
		if (this.selectMode === false) {
			p1.setText(this.text, true);
			this.mainScreen.sprite.visible = false;
			this.sprite.visible = true;
			if (!twoSwitches) {
				this.anim.play(speed, true);
				this.backAnim.play(speed, true);
			} else {
				this.button.frame = 2; 
				this.sprite.frame = 0; 
			}
		}
	}
	this.controlLogic = function() {
		if (this.selectMode === true) {
			this.displaySelection();
			if (this.sprite.frame === this.numOptions) { 
				this.returnToMain(); 
			}
		}
	}
	this.displaySelection = function() {
		if (this.sprite.frame !== this.numOptions) {
			this.current.loadTexture(this.texture, this.sprite.frame);
		}
	}
	this.returnToMain = function() {
		p1.setText(mainText, true);
		this.sprite.visible = false;
		this.mainScreen.sprite.visible = true;
		if (!twoSwitches) {
			this.mainScreen.anim.restart();
			this.doneAnim.restart();
		} else {
			this.button.frame = 0; 
		}
		this.selectMode = false;
		this.display = false;
		this.mainScreen.display = true;
	}
	this.selectModeOn = function() {
		if (this.sprite.frame !== this.numOptions) {
			this.selectMode = true;
		}
	}
	this.isDisplayed = function() {
		return this.display;
	}
}

function endScreen(screens, button, backdrop) {
	this.selectMode = false;
	this.display = false;
	this.mainScreen = screens[0].mainScreen;
	this.button = button;
	this.screens = screens;
	this.backdrop = backdrop;

	this.initialize = function() {
		if (!this.selectMode) {
			this.mainScreen.sprite.visible = false; 
			this.mainScreen.button.visible = false;
			this.button.visible = true;
			p1.setText('Yummy!', true);

			if (!twoSwitches) {
				this.button.animations.play('scroll', speed, true);
			}

			// shifting components
			translate(this.backdrop, -175, -32);
			translateGroup(this.screens, -175, -32);

			// fade effect image to top 
			black.bringToTop();
		}
	}

	this.controlLogic = function() {
		if (this.selectMode) {
			if (this.button.frame === 0) {
				this.returnToMain();			}
			if (this.button.frame === 1) {
				saveImage();
			} 
			if (this.button.frame === 2) {
				nextState = true;
			}

		}
	}

	this.selectModeOn = function() {
		if (this.display) {
			this.selectMode = true;
		}
	}

	this.returnToMain = function() {
		// hide sprites + reset booleans
		this.button.visible = false;
		this.display = false;
		this.selectMode = false;

		// display main screen
		this.mainScreen.sprite.frame = 0; 
		this.mainScreen.button.frame = 0;
		this.mainScreen.sprite.visible = true;
		this.mainScreen.button.visible = true;
		this.mainScreen.display = true;	
		p1.setText('Make some ice cream!', true);

		if (!twoSwitches) {
			this.mainScreen.anim.restart();
			this.mainScreen.doneAnim.restart();
		}

		// shift backdrop + components
		translate(this.backdrop, 175, 32);
		translateGroup(this.screens, 175, 32);
	}
}

function displayScreen(screen) {
	screen.initialize();
	screen.controlLogic();
	screen.selectModeOn();
}

function fadeIn() {
	if (black.alpha >= 0.02) {
		black.alpha -= 0.02;
	}
}

function fadeOut(nextState) {
	if (black.alpha < .98) {
       black.alpha += 0.02;
    }
    if (black.alpha >= 0.98) {
       game.state.start(nextState, true, false, selectedControl);
    }
}

function scanScreen(screen) {
	this.screen = screen; 
	if (this.screen.sprite.visible === true) {
		this.screen.sprite.frame = this.screen.sprite.frame + 1; 
		if (this.screen.sprite.frame > this.screen.numOptions) {
			this.screen.sprite.frame = 0;
		}
		if (this.screen.sprite.frame === this.screen.numOptions) {
			if (this.screen.isMainScreen) {
				this.screen.button.frame = 1;
			} else {
				this.screen.button.frame = 3;
			}
		} else {
			if (this.screen.isMainScreen) {
				this.screen.button.frame = 0;
			} else {
				this.screen.button.frame = 2; 
			}
		}
	}
}

function saveImage() {
	var img = new Image();
    img.src = game.canvas.toDataURL();
    img.onload = function() {
        var canvas1 = document.createElement('canvas');
        var ctx1 = canvas1.getContext('2d');
        canvas1.width = 491;
        canvas1.height = 490;
        ctx1.drawImage(img, 205, 104, 491, 532, 0, 0, 491, 532);
        var out = canvas1.toDataURL("image/png").replace("image/png", "image/octet-stream");
        window.location.href=out; 
    }
}

function translate(sprite, dx, dy) {
	this.sprite = sprite;

	this.sprite.x = this.sprite.x + dx;
	this.sprite.y = this.sprite.y + dy;
}

function translateGroup(screens, dx, dy) {
	this.screens = screens;
	for (i = 0; i < this.screens.length - 1; i++) {
		translate(this.screens[i].current, dx, dy);
	}
}

function returnArray(n) {
	var i;
	var out =[]; 
	for (i = 0; i < n; i++) {
		out[i] = i;
	}
	return out; 
}

var game = new Phaser.Game(900, 700, Phaser.CANVAS, 'gameDiv');

game.state.add('preload', preloadState);
game.state.add('start', startState);
game.state.add('menu', menuState);
game.state.add('character', characterState);
game.state.add('icecream', iceCreamState);
game.state.add('robot', robotState);
game.state.add('house', houseState);
game.state.add('map', mapState);


game.state.start('preload');
