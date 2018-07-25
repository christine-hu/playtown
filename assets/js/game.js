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
var black;
var nextState = false;

function menuScreen(sprite, text, texture, mainScreen, backAnim, doneAnim, mainText, num = 6) {
	this.sprite = sprite;
	this.sprite.visible = false;
	this.anim = this.sprite.animations.add('scroll', returnArray(num + 1));
	this.display = false;
	this.selectMode = false;
	this.text = text;
	this.texture = texture;
	this.mainScreen = mainScreen;
	this.numOptions = num;
	this.doneAnim = doneAnim;
	this.backAnim = backAnim;
	this.initialize = function() {
		if (this.selectMode === false) {
			p1.setText(this.text, true);
			this.mainScreen.sprite.visible = false;
			this.sprite.visible = true;
			this.anim.play(speed, true);
			this.backAnim.play(speed, true);
		}
	}
	this.controlLogic = function() {
		if (this.selectMode === true) {
			this.displaySelection();
			if (this.anim.frame === this.numOptions) { 
				this.returnToMain(); 
			}
		}
	}
	this.displaySelection = function() {
		if (this.anim.frame !== this.numOptions) {
			this.current.loadTexture(this.texture, this.anim.frame);
		}
	}
	this.returnToMain = function() {
		p1.setText(mainText, true);
		this.sprite.visible = false;
		this.mainScreen.sprite.visible = true;
		this.mainScreen.anim.restart();
		this.doneAnim.restart();
		this.selectMode = false;
		this.display = false;
		this.mainScreen.display = true;
	}
	this.selectModeOn = function() {
		if (this.anim.frame !== this.numOptions) {
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