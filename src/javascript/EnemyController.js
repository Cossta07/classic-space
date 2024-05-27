import Enemy from './Enemy.js';
import MovingDirection from './MovingDirection.js';

export default class EnemyController {
    enemyMap = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ];
    enemyRows = [];
    currentDirection = MovingDirection.right;
    xVelocity = 0;
    yVelocity = 0;
    defaultXVelocity = 1;
    defaultYVelocity = 1;
    moveDownTimerDefault = 30;
    moveDownTimer = this.moveDownTimerDefault;
    fireBulletTimerDefault = 100;
    fireBulletTimer = this.fireBulletTimerDefault;

    constructor(canvas, enemyBulletController, playerBulletController) {
        this.canvas = canvas;
        this.enemyBulletController = enemyBulletController;
        this.playerBulletController = playerBulletController
        this.enemyDeathSound = new Audio("src/assests/soudns/enemy-death.wav");
        this.enemyDeathSound.volume = 0.1;
        
        this.createEnemies();
        
    }
    collisionDetection(){
        this.enemyRows.forEach((enemyRow) => {
            enemyRow.forEach((enemy, enemyIndex) => {
                if(this.playerBulletController.collideWith(enemy)){
                    this.enemyDeathSound.currentTime = 0;
                    this.enemyDeathSound.play();
                    enemyRow.splice(enemyIndex,1);
                }
            })
        });
        this.enemyRows = this.enemyRows.filter((enemyRow) => enemyRow.length > 0);
    }

    fireBullet() {
        this.fireBulletTimer--;
        if(this.fireBullet <= 0) {
            this.fireBulletTimer = this.fireBulletTimerDefault;
            const allEnemies = this.enemyRows.flat();
            const randomEnemy = allEnemies[Math.floor(Math.random() * allEnemies.length)];
            const enemy = allEnemies[enemyIndex];
            this.enemyBulletController.shoot(enemy.x + enemy.with / 2, enemy.y, -3)
        }
    }
    resetBulletTimer() {
        if(this.moveDownTimer <= 0) {
            this.moveDownTimer = this.moveDownTimerDefault;
        }
    }

    decrementMoveDownTimer(){
        if(
        this.currentDirection === MovingDirection.downLeft ||
        this.currentDirection === MovingDirection.downRight
        ){
        this.moveDownTimer--;
        }
        }
            
            moveDown(newDirection) {
            this.xVelocity = 0;
            this.yVelocity = this.defaultYVelocity;
            if(this.moveDownTimer <= 0) {
            this.currentDirection = newDirection;
            return true;
            } else  {
            return false;
            }
            }
            
            drawEnemies(ctx) {
                this.enemyRows.flat().forEach((enemy) => {
                enemy.move(this.xVelocity, this.yVelocity)
                enemy.draw(ctx);
                });
                }
                
            
            happy = () => {};
             
            createEnemies(ctx) {
                this.enemyMap.forEach((row, rowIndex) => {
                    this.enemyRows[rowIndex] = [];
                    row.forEach((enemyNumber, enemyIndex) => {
                        if(enemyNumber > 0) {
                            this.enemyRows[rowIndex].push 
                            (new Enemy(enemyIndex * 50,rowIndex * 35, enemyNumber));
                        }
                    })
                })
            } 
            
            
            collideWith(sprite){
                return this.enemyRows.flat().some((enemy) => enemy.collideWith(sprite));
             }
}