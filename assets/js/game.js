// global variables, default settings
var speed = 1.5; 
var size = '45px';
var color = 'color';

var game = new Phaser.Game(900, 700, Phaser.Auto, 'gameDiv');

game.state.add('preload', preloadState);
game.state.add('start', startState);
game.state.add('menu', menuState);
game.state.add('character', characterState);

game.state.start('preload');