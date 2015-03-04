var main = function(game) {
		// initialization vars
		var sounds;
		// selection variables
		
		// player variables
		
};

main.prototype = {
		create: function() {
				// set world
				this.map = this.game.add.tilemap('map');
				this.map.addTilesetImage('raceTrack', 'tiles');
				this.stage.backgroundColor = '#fff';
				this.physics.startSystem(Phaser.Physics.ARCADE);
				
				// layers
				this.bg = this.map.createLayer('BG');
				this.walls = this.map.createLayer('Walls');
				this.bg.resizeWorld();
				this.map.setCollisionBetween(1, 400, true, 'Walls');
				
				// player sprites and properties
				this.car1 = this.add.sprite(270, 2900, 'car1');
				this.car1.anchor.setTo(0.5, 0.5);
				this.car2 = this.add.sprite(560, 2900, 'car2');
				this.car2.anchor.setTo(0.5, 0.5);
				this.physics.arcade.enable(this.car1);
				this.physics.arcade.enable(this.car2);
				this.car1.speed = 0;
				// audio
				this.sounds = []; // dummy variable
				
				// set keyboard controls
				this.keys = this.input.keyboard.createCursorKeys();
				this.keys.w = this.input.keyboard.addKey(Phaser.Keyboard.W);
				this.keys.a = this.input.keyboard.addKey(Phaser.Keyboard.A);
				this.keys.s = this.input.keyboard.addKey(Phaser.Keyboard.S);
				this.keys.d = this.input.keyboard.addKey(Phaser.Keyboard.D);
		},
		update: function() {
				this.physics.arcade.collide(this.car1, this.walls);
				this.physics.arcade.collide(this.car2, this.walls);
				this.array = [this.car1.world, this.car2.world];
				this.camera.x = (this.car1.x + this.car2.x) / 2;
				this.camera.y = (this.car1.y + this.car2.y) / 2;
				this.car1.speed = 0;
				if(this.keys.w.isDown) {
					if(this.car1.speed === 250)
						this.car1.speed = 250;
					else
						this.car1.speed += 10;
				}
				if(this.keys.a.isDown) {
					this.car1.angle -= 10;
				}
				if(this.car1.speed != 0) {
					this.physics.arcade.velocityFromRotation(this.car1.rotation - 1.57079633, this.car1.speed, this.car1.body.velocity);
				}
		}
}
