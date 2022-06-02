

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default : 'arcade',
    }, 
    arcade: {
     gravity: {y:400},
     debug:false, 
    }
};

var game = new Phaser.Game(config);

function preload ()
{
	this.load.image('dungeon','sprites/dungeon.png');
	this.load.image('nando','sprites/nando1.png');
    this.load.image('brick1','sprites/brick1.png');
	this.load.image('coin1','sprites/coin1.png');
    this.load.image('enemy','sprites/enemy.png');
}

function create ()
{

this.add.image(400,300,'dungeon');
this.add.image(300,400, 'nando');
this.add.image(700,400, 'enemy');
}


function update ()
{
};


