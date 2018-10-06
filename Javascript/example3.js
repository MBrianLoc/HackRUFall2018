class example3 extends Phaser.Scene{
    constructor()
    {
        super({key:"example3"});
    }

    preload()
    {
        this.load.audio('test', ['Assets/sound.mp3']);
    }

    create()
    {
        this.soundFX = this.sound.add("test", { loop: "true"});
        this.soundFX.play();
        this.soundFX.rate = 0.5;

        this.input.keyboard.on("keydown_L", function(e)
        {
            this.soundFX.loop = !this.soundFX.loop;
            if(this.soundFX.loop)
            {
               this.soundFX.play();
            }
        }, this);

        this.input.keyboard.on("keydown_P", function(e)
        {
            if(this.soundFX.isPlaying)
            {
                this.soundFX.pause();
            }
            else
            {
                this.soundFX.play();
            }
        })
    }
}
