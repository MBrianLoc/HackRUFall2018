import Astroid from 'Astroid';

class Introid extends Astroid {

  constructor(game) {
    super(game); // // Setup the generic Enemy class
    this.vulnerabilities = {
        int: 1,
        char: 0,
        string: 0,
    };
  }

  spawn(x, y) {
    this.stdReset(x,y); // Reset everything from Enemy class
    this.play(this.color);
    // start in a random direction
    if (Math.random() < 0.5) {
      this.body.velocity.x = -this.speed;
    } else {
      this.body.velocity.x = this.speed;
    }
  }

/* The update method will be called automatically by Phaser, just as in the pure Phaser.Sprite class */
  update() {
    if(!this.stdUpdate()){return;}; // Do a standard update from Enemy class to check if update should even be done

  }
}

export default Introid;
