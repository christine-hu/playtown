// default settings
var speed = .5; 
var size = '45px';
var color = 'color';

// input keys 
var escape; 
var tab; 
var enter; 
var space;

// misc. global variables 
var black;
var nextState = false;
var twoSwitches = false; 

function menuScreen(sprite, doneButton, text, texture, mainScreen, mainText, num = 6) {
	this.sprite = sprite;
	this.sprite.visible = false;
	this.anim = this.sprite.animations.add('scroll', returnArray(num + 1));
	this.display = false;
	this.selectMode = false;
	this.text = text;
	this.texture = texture;
	this.mainScreen = mainScreen;
	this.numOptions = num;
	this.doneButton = doneButton;
	this.doneAnim = this.doneButton.animations.getAnimation('done');
	this.backAnim = this.doneButton.animations.getAnimation('back');
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
				this.doneButton.frame = 2; 
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
			this.doneButton.frame = 0; 
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

function displayScreen(screen) {
	screen.initialize();
	screen.controlLogic();
	screen.selectModeOn();
}

function returnArray(n) {
	var i;
	var out =[]; 
	for (i = 0; i < n; i++) {
		out[i] = i;
	}
	return out; 
}

function fadeOut(nextState) {
	if (black.alpha < .98) {
       black.alpha += 0.02;
    }
    if (black.alpha >= 0.98) {
       game.state.start(nextState, true, false, selectedControl);
    }
}

function fadeIn() {
	if (black.alpha >= 0.02) {
		black.alpha -= 0.02;
	}
}

function scanScreen(screen) {
	this.screen = screen; 
	if (this.screen.sprite.visible === true) {
		// this.screen.isDisplayed() || 
		this.screen.sprite.frame = this.screen.sprite.frame + 1; 
		if (this.screen.sprite.frame > this.screen.numOptions) {
			this.screen.sprite.frame = 0;
		}
		if (this.screen.sprite.frame === this.screen.numOptions) {
			if (this.screen.isMainScreen) {
				this.screen.doneButton.frame = 1;
			} else {
				this.screen.doneButton.frame = 3;
			}
		} else {
			if (this.screen.isMainScreen) {
				this.screen.doneButton.frame = 0;
			} else {
				this.screen.doneButton.frame = 2; 
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
        canvas1.height = 532;
        ctx1.drawImage(img, 380, 118, 491, 532, 0, 0, 491, 532);
        var out = canvas1.toDataURL("image/png").replace("image/png", "image/octet-stream");
        window.location.href=out; 
    }
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
