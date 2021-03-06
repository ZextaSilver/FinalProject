class Over extends Phaser.Scene{
    constructor(){
        super("overScene");
    }

    preload(){

        this.load.image('victoryArt', "./assets/Victory.png");

    }

    create(){

        this.add.tileSprite(centerX, centerY, 800, 800, 'victoryArt').setOrigin(0.5);

        // information display
        let infoConfig = {
            fontFamily: 'Arial',
            fontSize: '25px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(centerX, centerY + 300, 'Press SPACE to Credit page', infoConfig).setOrigin(0.5);

        //space key scene change
        this.key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        // play scene change
        if(this.key.isDown){
            this.scene.start("creditScene");
        }
    }


}