var mapState = {


	create: function() {
		var mapSprite;

		var p1 = game.add.text(0, 0, "Select a location:", pStyle);
		p1.boundsAlignV = 'middle';
        p1.setTextBounds(100, 170, 700, 200);

        game.stage.backgroundColor = "#6ec7ff";

        // title text
		game.add.sprite(159, 50, 'title');

		mapSprite = game.add.sprite(-12, 330, 'map');
		mapSprite.animations.add('scroll');
		mapSprite.animations.play('scroll', speed, true);

		control.onUp.add(menuSelection, this);

		function menuSelection(pointer) {

			// stops mouseIn & mouseOut events 
			if (control == game.input && !pointer.withinGame) {return;}

			
			if (mapSprite.frame == 0) {
				game.state.start('icecream', true, false, control, pStyle);
			} else if (mapSprite.frame == 1) {
				game.state.start('robot', true, false, control, pStyle);
			} else if (mapSprite.frame == 2) {
				game.state.start('character', true, false, control, pStyle);
			} else if (mapSprite.frame == 3) {
				mouthMenu = true;
				characterMenu = false;
			} 
		
		}

	}

}