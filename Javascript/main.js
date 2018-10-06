var game = new Phaser.game(640, 360, Phaser.AUTO);

var GameState = {
    preload: function(){
        game.load.image('space', 'assets/background.jpg');

    },
    create: function(){
        var s = game.add.sprite(80, 0, 'space');

        s.rotation = 0.14;
    },
    update: function(){

    }
};

game.state.add('GameState', GameState);
game.state.start('GameState');
