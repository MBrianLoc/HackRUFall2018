class example1 extends Phaser.Scene {
    constructor()
    {
        super({key:"example1"});
    }

    preload()
    {
        this.load.image('astroid', 'Assets/astroid.png');
    }

    create()
    {
        this.image = this.add.image(300,400,'astroid');

        this.input.keyboard.on('keyup_D', function(event)
        {
            this.image.x += 10;
        }, this);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        this.input.on('pointerdown', function(event)
        {
            this.image.x = event.x;
            this.image.y = event.y;
        }, this);

        this.input.keyboard.on('keyup_P', function(event)
        {
            var physicsImage = this.physics.add.image(this.image.x, this.image.y, "astroid");
            physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,100), -300);
        }, this);

        this.input.keyboard.on('keyup', function(e)
        {
            if(e.key == "2")
            {
                this.scene.start("example2");
            }
        }, this)
    }

    update(delta)
    {
        if(this.key_A.isDown)
        {
            this.image.x--;
        }
    }
}
