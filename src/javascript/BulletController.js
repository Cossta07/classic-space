class BulletController {

constructor(canvas, maxBulletAtaTime,
    bulletcolor, soundEnable) {
        this.canvas = canvas;
        this.maxBulletAtaTime = maxBulletAtaTime;
        this.bulletColor = bulletcolor;
        this.soundEnable = soundEnable;
      
        this.bulletSound = new Audio("C:\Projetos\Samuel-2-ano\classsic-space\src\assets\sounds")
        this.bulletSound.volume = 0.1;
    }
}