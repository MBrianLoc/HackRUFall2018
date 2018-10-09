var config = {
    type:Phaser.AUTO,
    width:4000,
    height:800,
    physics: {
        default:'arcade',
        arcade: {
        }
    },
    scene: [menu, game]
};

var game = new Phaser.Game(config);
var player;
var enemies;
var spawnTimer;
var gunType;
var gunText;
function enemyHit (bullet, enemies)
{
    if(enemies.name == gunType)
    {
        enemies.disableBody(true, true);
        this.sound.play('explosion');
    }
    bullet.disableBody(true,true);
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

    var astType = Phaser.Math.RND.integerInRange(1,4);

    if(astType == 1)
    {
        var ast = enemies.create(x, y, 'string');
        ast.name = "string";
        gunText.setText(gunType);
    }
    else if(astType == 2)
    {
        var ast = enemies.create(x, y, 'char');
        ast.name = "char";
        gunText.setText(gunType);
    }
    else if(astType == 3)
    {
        var ast = enemies.create(x, y, 'int');
        ast.name = "int";
        gunText.setText(gunType);
    }
    else
    {
        var ast = enemies.create(x, y, 'float');
        ast.name = "float";
        gunText.setText(gunType);
    }
    ast.setVelocity(xVel,yVel);
    ast.setDisplaySize(80, 80);
    spawnTimer.reset({delay: 300, callback: spawnAsteroid, callbackScope: this, repeat: 1});
}

function changeGun(type)
{
    gunType = type;
}
