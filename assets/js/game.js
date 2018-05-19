
var game = new Phaser.Game(900, 700, Phaser.Auto, 'gameDiv');

game.state.add('preload', preloadState);
game.state.add('start', startState);
game.state.add('menu', menuState);

game.state.start('preload');