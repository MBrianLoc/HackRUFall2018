var config = {
    type:Phaser.AUTO,
    width:800,
    height:800,
    physics: {
        default:'arcade',
        arcade: {
        }
    },
    scene: [example1, example2, example3]
};

var game = new Phaser.Game(config);
var player;
var enemies;
var spawnTimer;
function enemyHit (bullet, enemies)
{
    enemies.disableBody(true, true);
    bullet.disableBody(true,true);
    this.sound.play('ow');
}
function playerHit (player, enemies)
{
    enemies.disableBody(true, true);
    this.sound.play('ow');
}

function spawnAsteroid()
{
    rand = Phaser.Math.RND.integerInRange(1,4);
    if(rand == 1)
    {
        x = Phaser.Math.RND.integerInRange(-200,1700);
        y = -50;
        yVel = Phaser.Math.RND.integerInRange(20,500);
        xVel = Phaser.Math.RND.integerInRange(-500,500);
    }
    else if(rand == 2)
    {
        x = Phaser.Math.RND.integerInRange(-200,1700);
        y = 850;
        yVel = Phaser.Math.RND.integerInRange(-500,-20);
        xVel = Phaser.Math.RND.integerInRange(-500,500);
    }
    else if(rand == 3)
    {
        x = -50;
        y = Phaser.Math.RND.integerInRange(-100,900);
        yVel = Phaser.Math.RND.integerInRange(-300,300);
        xVel = Phaser.Math.RND.integerInRange(20,500);
    }
    else
    {
        x = -50;
        y = Phaser.Math.RND.integerInRange(-100,900);
        yVel = Phaser.Math.RND.integerInRange(-300,300);
        xVel = Phaser.Math.RND.integerInRange(-500,-20);
    }
    var ast = enemies.create(x, y, 'asteroid');
    ast.setVelocity(xVel,yVel);
    ast.setDisplaySize(80, 80);
    spawnTimer.reset({delay: 300, callback: spawnAsteroid, callbackScope: this, repeat: 1});
}
