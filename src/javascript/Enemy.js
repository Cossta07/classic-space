export default class Enemy {
    constructor(x, y, imageNumbers) {
        this.x = x;
        this.y = y;
        this.imageNumbers = imageNumbers;
        this.width = 44;
        this.height = 32;
        this.image = new Image();
        this.image.src = `./src/assets/imagens/enemy${this.imageNumbers}.png`;
    }
}