import Introid from 'Introid';
import Charoid from 'Charoid';

class example1 extends Phaser.Scene {
    constructor()
    {
        super({key:"example1"});
    }

    preload()
    {
        this.load.image('space', 'assets/background.png');
        this.load.image('astroid', 'assets/astroid.png');
        this.load.image('enemy', 'assets/bullet.png');
        this.load.image('bullet', 'assets/bullet.png');
        this.load.audio('pew', 'assets/pew.mp3');
        this.load.audio('ow', 'assets/ow.mp3');

    }

    create()
    {
        this.add.image(400, 500, 'space');
        // Adding a group for Introids
        let astroidGroup = this.game.add.group();

        // Adding a couple of Introids to the group so that we have a pool to spawn from (we're not using them all here)
        for (let i = 0; i < 10; i++) {
         astroidGroup.add(new Introid(this.game));
        }

        // Spawn a Introid of each type centered on 256x240 screen.
        let  = IntroidGroup.getFirstExists(false); // get a Introid object
        Introid.spawn(128, 120 - 32, "red"); // spawn that Introid
        Introid = IntroidGroup.getFirstExists(false); // get a another Introid object
        Introid.spawn(128, 120 + 32, "yellow"); // spawn that Introid

    }

    update(delta)
    {

    }
}
