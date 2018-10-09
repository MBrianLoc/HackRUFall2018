class game extends Phaser.Scene {
    constructor()
    {
        super({key:"game"});
    }

    preload()
    {

        this.load.image('asteroid', 'Assets/asteroid.png');
        this.load.image('enemy', 'Assets/bullet.png');
        this.load.image('bullet', 'Assets/bullet.png');
        this.load.audio('pew', 'Assets/pew.mp3');
        this.load.audio('ow', 'Assets/ow.mp3');
        this.load.audio('explosion', 'Assets/explosion.mp3');
        this.load.image('ship', 'Assets/ship.png');
        this.load.image('background', 'Assets/background.jpg');
        this.load.image('int', 'Assets/int.png');
        this.load.image('char', 'Assets/char.png');
        this.load.image('string', 'Assets/string.png');
        this.load.image('float', 'Assets/float.png');
    }

    create()
    {
        this.add.image(1000,400,'background');
        this.add.image(0,400,'background');
        this.add.image(3000,400,'background');
        this.add.image(1000,800,'background');
        this.add.image(0,800,'background');
        this.add.image(3000,800,'background');
        spawnTimer = this.time.addEvent({ delay: 150, callback: spawnAsteroid, callbackScope: this, repeat: 1});
        var scene = this;
        player = this.physics.add.sprite(700,400,'ship');
        enemies = this.physics.add.group();
        /*enemies.children.iterate(function (child) {

          child.setVelocityX(Phaser.Math.RND.integerInRange(-20,-500));
          child.setDisplaySize(80, 80);

        });*/
        gunType = "char";
        gunText = this.add.text(0, 0, gunType);
        var bullets = this.physics.add.group();
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.sound.add("pew");

        this.input.on('pointerdown', function(event)
        {
          var bullet = bullets.create(player.x, player.y, "bullet");
          var xVel = (event.x-player.x);
          var yVel = (event.y-player.y);
          var speed = Math.sqrt(Math.pow(xVel,2) + Math.pow(yVel,2));
          bullet.setVelocity(500*(xVel/speed),500*(yVel/speed));
          bullet.setDisplaySize(10, 10);
          this.sound.play('pew');
        }, this);

        this.input.keyboard.on('keyup_ONE', function (e)
        {
                changeGun("char");
        }, this);

        this.input.keyboard.on('keyup_TWO', function (e)
        {
                changeGun("string");
        }, this);

        this.input.keyboard.on('keyup_THREE', function (e)
        {
                changeGun("int");
        }, this);

        this.input.keyboard.on('keyup_FOUR', function (e)
        {
                changeGun("float");
        }, this);

        this.physics.add.overlap(bullets, enemies, enemyHit, null, this);
        this.physics.add.collider(enemies, enemies);

        this.physics.add.overlap(player, enemies, playerHit, null, this);

    }

    update(delta)
    {
        if(this.key_A.isDown)
        {
            player.x = player.x - 2;
        }
        if(this.key_W.isDown)
        {
            player.y = player.y - 2;
        }
        if(this.key_S.isDown)
        {
            player.y = player.y + 2;
        }
        if(this.key_D.isDown)
        {
            player.x = player.x + 2;
        }
    }
}
