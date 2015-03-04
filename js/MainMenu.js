var mainmenu = function(game) {
		var title;
		var space;
};

mainmenu.prototype = {
		create: function() {
				title = this.add.sprite(0, 0, 'title');
				space = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
				space.onDown.add(this.play, this);
		},
		play: function() {
				// audio
				this.music = this.add.audio('music', 0.3, true);
				this.music.play();
				this.state.start('Game');
		}
}
