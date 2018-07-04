// global variables, default settings
var speed = 2; 
var size = '45px';
var color = 'color';

function menuScreen(sprite, text, texture) {
	this.sprite = sprite;
	this.sprite.visible = false;
	this.anim = this.sprite.animations.add('scroll', [0, 1, 2, 3, 4, 5, 6]);
	this.isTrue = false;
	this.selectMode = false;
	this.text = text;
	this.texture = texture;
	this.displaySelection = function() {
		if (this.anim.frame !== 6) {
			this.current.loadTexture(this.texture, this.anim.frame);
		}
	}
}

function displayScreen(screen, mainScreen, backAnim, doneAnim) {
	if (screen.selectMode === false) {
		p1.setText(screen.text, true);
		mainScreen.sprite.visible = false;
		screen.sprite.visible = true;
		screen.anim.play(speed, true);
		backAnim.play(speed, true);
	}

	if (screen.selectMode === true) {
		screen.displaySelection();

		if (screen.anim.frame === 6) {
			p1.setText('Make some ice cream!', true);
			screen.sprite.visible = false;
			mainScreen.sprite.visible = true;
			mainScreen.anim.restart();
			doneAnim.restart();
			screen.selectMode = false;
			screen.isTrue = false;
			mainScreen.isTrue = true;
		}
	}
	
	if (screen.anim.frame !== 6) {
		screen.selectMode = true;
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