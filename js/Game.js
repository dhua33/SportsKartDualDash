var main = function(game) {};

main.prototype = {
		create: function() {
				// set world
				this.cam = this.add.sprite(400, 2900, 'car2');
				this.cam.visible = false;
				this.map = this.game.add.tilemap('map');
				this.map.addTilesetImage('raceTrack', 'tiles');
				this.stage.backgroundColor = '#fff';
				this.physics.startSystem(Phaser.Physics.ARCADE);
				
				// layers
				this.bg = this.map.createLayer('BG');
				this.walls = this.map.createLayer('Walls');
				this.bg.resizeWorld();
				this.map.setCollisionBetween(1, 400, true, 'Walls');
				this.line = this.add.sprite(490, 65, 'line');
				
				// player sprites and properties
				this.car1 = this.add.sprite(270, 2900, 'car1');
				this.car1.anchor.setTo(0.5, 0.5);
				this.car2 = this.add.sprite(560, 2900, 'car2');
				this.car2.anchor.setTo(0.5, 0.5);
				this.physics.arcade.enable(this.car1);
				this.physics.arcade.enable(this.car2);
				this.car1.speed = 0;
				this.car2.speed = 0;
				this.car1.body.width *= 0.5;
				this.car2.body.width *= 0.5;
				this.car1.body.height *= 0.5;
				this.car2.body.height *= 0.5;
				
				// set keyboard controls
				this.keys = this.input.keyboard.createCursorKeys();
				this.keys.w = this.input.keyboard.addKey(Phaser.Keyboard.W);
				this.keys.a = this.input.keyboard.addKey(Phaser.Keyboard.A);
				this.keys.s = this.input.keyboard.addKey(Phaser.Keyboard.S);
				this.keys.d = this.input.keyboard.addKey(Phaser.Keyboard.D);
				this.keys.space = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
				
				// parameters
				this.maxSpd = 80;
				this.slow = 4;
				this.camera.follow(this.cam);
				
				this.win = this.add.sprite(0, 0, 'win');
				this.win.fixedToCamera = true;
				this.win.visible = false;
				this.fail = this.add.sprite(0, 0, 'fail');
				this.fail.fixedToCamera = true;
				this.fail.visible = false;
		},
		update: function() {
				if(this.physics.arcade.collide(this.car1, this.walls) || this.physics.arcade.collide(this.car2, this.walls) || (this.car1.y - this.cam.y) > 310 || (this.car2.y - this.cam.y) > 310) {
						this.keys.space.onDown.add(function() {this.state.start('Game')}, this);
						this.fail.visible = true;
						this.paused = true;
				}
				if(this.car1.y < 200 && this.car2.y < 200 && this.car2.x < 500) {
						this.win.visible = true;
						this.pased = true;
				}
				if(this.cam.y > 200)
						this.cam.y -= 1;
				else
						this.cam.y = 200;
				
				// car1
				if(this.keys.w.isDown) {
					if(this.car1.speed === this.maxSpd)
						this.car1.speed = this.maxSpd;
					else
						this.car1.speed += this.slow;
				} else if(this.car1.speed > 0) {
						this.car1.speed -= this.slow;
				} else if(this.keys.s.isDown) {
						if(this.car1.speed === -this.maxSpd)
								this.car1.speed = -this.maxSpd;
						else
								this.car1.speed -= this.slow;
				} else if(this.car1.speed < 0) {
						this.car1.speed += this.slow;
				}
				if(this.keys.a.isDown) {
					this.car1.angle -= 3;
				} else if(this.keys.d.isDown) {
					this.car1.angle += 3;
				}
				
				// car2
				if(this.keys.up.isDown) {
					if(this.car2.speed === this.maxSpd)
						this.car2.speed = this.maxSpd;
					else
						this.car2.speed += this.slow;
				} else if(this.car2.speed > 0) {
						this.car2.speed -= this.slow;
				} else if(this.keys.down.isDown) {
						if(this.car2.speed === -this.maxSpd)
								this.car2.speed = -this.maxSpd;
						else
								this.car2.speed -= this.slow;
				} else if(this.car2.speed < 0) {
						this.car2.speed += this.slow;
				}
				if(this.keys.left.isDown) {
					this.car2.angle -= 3;
				} else if(this.keys.right.isDown) {
					this.car2.angle += 3;
				}
				
				// car movement
				this.physics.arcade.velocityFromRotation(this.car1.rotation - 1.57079633, this.car1.speed, this.car1.body.velocity);
				this.physics.arcade.velocityFromRotation(this.car2.rotation - 1.57079633, this.car2.speed, this.car2.body.velocity);
				
		}
}
