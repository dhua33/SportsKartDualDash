var preloader = function(game){};

preloader.prototype = {
		preload: function() {
				//images
				var loading = this.add.sprite(0, 0, 'loading');
				var loadbar = this.add.sprite(0, 440, 'loadbar');
				this.load.setPreloadSprite(loadbar);
				this.load.image('title', 'assets/title.png');
				this.load.tilemap('map', 'assets/raceMap.json', null, Phaser.Tilemap.TILED_JSON);
				this.load.image('tiles', 'assets/raceTrack.jpg');
				this.load.image('win', 'assets/win.png');
				this.load.image('fail', 'assets/fail.png');
				this.load.image('line', 'assets/finish.png');
				//cars
				this.load.image('car1', 'assets/car1.png');
				this.load.image('car2', 'assets/car2.png');
				//audio
				this.load.audio('music', 'assets/music.mp3');
		},
		create: function() {
				this.state.start('MainMenu');
		}
}
