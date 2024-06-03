export default class Bullet {
  constructor(canvas, x, y, velocity, bulletColor) {
      this.canvas = canvas;
      this.x = x;
      this.y = y;
      this.velocity = velocity;
      this.bulletColor = bulletColor;

      this.width = 5;
      this.height = 20;
  }

  draw(ctx) {
      this.y -= this.velocity;
      ctx.fillStyle = this.bulletColor;
      ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  collideWith(sprite) {
      // Verifica se há colisão entre esta bala e o sprite fornecido
      if (
          this.x < sprite.x + sprite.width &&
          this.x + this.width > sprite.x &&
          this.y < sprite.y + sprite.height &&
          this.y + this.height > sprite.y
      ) {
          return true;
      } else {
          return false;
      }
  }
}