var config = {
    type:Phaser.AUTO,
    width:4000,
    height:800,
    physics: {
        default:'arcade',
        arcade: {
        }
    },
    scene: [example1, example2, example3]
};

var game = new Phaser.Game(config);

