class example1 extends Phaser.Scene {
    constructor()
    {
        super({key:"example1"});
    }

    preload()
    {

        this.load.image('astroid', 'Assets/astroid.png');
        this.load.image('enemy', 'Assets/bullet.png');
        this.load.image('bullet', 'Assets/bullet.png');
        this.load.audio('pew', 'Assets/pew.mp3');
        this.load.audio('ow', 'Assets/ow.mp3');

    }

    create()
    {
        var scene = this;
        this.image = this.add.image(300,400,'astroid');
        var enemy = this.add.sprite(20,40,'enemy');

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.soundFX = this.sound.add("pew");

        this.input.on('pointerdown', function(event)
        {
          var bullet = this.physics.add.image(this.image.x, this.image.y, "bullet");
          var xVel = (event.x-scene.image.x);
          var yVel = (event.y-scene.image.y);
          var speed = Math.sqrt(Math.pow(xVel,2) + Math.pow(yVel,2));
          bullet.setVelocity(xVel,yVel);
          this.soundFX.play();
        }, this);

        this.input.keyboard.on('keyup', function(e)
        {
            if(e.key == "2")
            {
            }
            if(e.key == "3")
            {
                this.scene.start("example3");
            }
        }, this)
    }

    update(delta)
    {
        if(this.key_A.isDown)
        {
            this.image.x--;
        }
        if(this.key_W.isDown)
        {
            this.image.y--;
        }
        if(this.key_S.isDown)
        {
            this.image.y++;
        }
        if(this.key_D.isDown)
        {
            this.image.x++;
        }
    }
}
