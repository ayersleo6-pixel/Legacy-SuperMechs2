const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let playerHP = 100;
let enemyHP = 100;
let playerHPText, enemyHPText;

function preload() {
    this.load.image('playerMech', 'assets/mechs/player1.png');
    this.load.image('enemyMech', 'assets/mechs/enemy1.png');
    this.load.image('attackBtn', 'assets/ui/attackButton.png');
}

function create() {
    this.add.image(200, 300, 'playerMech');
    this.add.image(600, 300, 'enemyMech');

    playerHPText = this.add.text(50, 50, 'Player HP: ' + playerHP, { fontSize: '20px', fill: '#fff' });
    enemyHPText = this.add.text(550, 50, 'Enemy HP: ' + enemyHP, { fontSize: '20px', fill: '#fff' });

    const attackBtn = this.add.image(400, 550, 'attackBtn').setInteractive();
    attackBtn.on('pointerdown', () => {
        attackEnemy();
    });
}

function update() {}

function attackEnemy() {
    let damage = Math.floor(Math.random() * 20) + 5;
    enemyHP -= damage;
    if(enemyHP < 0) enemyHP = 0;
    enemyHPText.setText('Enemy HP: ' + enemyHP);
    console.log('Player attacked! Damage:', damage);
}
