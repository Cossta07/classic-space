class Bullet {
    constructor(canvas, x, y, velocity, bullteColor){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.bullteColor = bullteColor;

        this.width = 5;
        this.height = 20;

    }
    draw(ctx) {
        this.y -= this.velocity
        ctx.fillStyle = this.bulletColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}