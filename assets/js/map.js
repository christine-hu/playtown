var mapState = {


	create: function() {
		var mapSprite;
		var carrots;
		var p1;

		// setting up the scene
		game.stage.backgroundColor = "#6ec7ff";
		p1 = game.add.text(0, 0, "Select a location:", pStyle);
			p1.boundsAlignV = 'middle';
        	p1.setTextBounds(100, 170, 700, 200);
		game.add.sprite(159, 50, 'title');
		mapSprite = game.add.sprite(-12, 330, 'map');
		carrots = game.add.sprite(86, 600, 'mapCarrots');
			carrots.animations.add('scroll');
			carrots.animations.play('scroll', speed, true);
		// line that controls all the logic :o 
		control.onUp.add(menuSelection, this);

		function menuSelection(pointer) {
			// stops mouseIn & mouseOut events 
			if (control == game.input && !pointer.withinGame) {return;}
			
			// starts each location
			if (carrots.frame == 0) {
				game.state.start('icecream', true, false, control, pStyle);
			} else if (carrots.frame == 1) {
				game.state.start('robot', true, false, control, pStyle);
			} else if (carrots.frame == 2) {
				game.state.start('character', true, false, control, pStyle);
			} else if (carrots.frame == 3) {
				game.state.start('house', true, false, control, pStyle);
			} 
		
		}

	}

}