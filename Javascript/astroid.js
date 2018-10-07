class Astroid extends Phaser.GameObjects.Sprite
    constructor(game) {
        super(game, 0, 0, "sprites"); // Setup Phaser.Sprite. It's coordinates is unimportant and I just set them to zero. "Sprites" is a spriteatlas with sprites for all enemies.
        this.exist = false; // I create an enemy instance but don't want to add it to the stage. For this I use a spawn method (mainly to make it easier to reuse the enemies from it's type specific pool).
        this.anchor.setTo(0.5, 0.5);
        // Body
        this.game.physics.enable(this);
        this.body.allowGravity = false;
        this.body.immovable = true;
        // Vulnerabilities (used to calculate damage when hit)
        this.vulnerabilities = {
            int: 1;
            char: 1;
            string: 1;
        };
        // Other stuff
        this.maxHealth = 10; // Health to set when spawned
        this.damage = 2; // Damage Samus will take if she touches the enemy
    }

    stdReset(x, y) {
        this.reset(x, y);
        this.energy = this.maxHealth;
        this.exists = true;
    }

    hit(bullet) {
        this.health -= this.vulnerabilities[bullet.type];
        if (this.vulnerabilities[bullet.type] == 0) { // no damage
            //this.game.sound.play('ricochetShort');
        }


        if (this.health <= 0) {
            this.dying = true;
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
        }
    }
export default Astroid;
