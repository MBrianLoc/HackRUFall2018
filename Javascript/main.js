var config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 1920,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update

    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('space', 'assets/background.jpg');
    this.load.image('astroid', 'assets/astroid.png');
}

var spawnAllowed = true;
var enemyGroup;

function create ()
{
    var background = this.add.image(400, 400, 'space');
    roids = this.game.add.group();




}

var time_til_spawn = Math.random()*3000 + 2000;  //Random time between 2 and 5 seconds.
var last_spawn_time = game.time.time;

function update() {  // This is your state's update loop
  var current_time = game.time.time;
  if(current_time - last_spawn_time > time_til_spawn){
    time_til_spawn = Math.random()*3000 + 2000;
    last_spawn_time = current_time;
    spawnCustomer();
  }
}
