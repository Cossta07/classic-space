import EnemyController from "./EnemyController.js";
import EnemyController from "./BulletController.js";
import Player from "./Player.js";
import BulletController from "./BulletController.js";

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "./src/assets/imagens/space.png";

const playerBulletController = new BulletController(canvas, 10, "white", true);
const enemyBulletController = new EnemyController(canvas, 4, "red", false);

const EnemyController = new EnemyController(
    canvas,
    enemyBulletController,
    playerBulletController
);

const player = new Player(canvas, 3, playerBulletController);

let isGamerOver = false;
let didWin = false; 

function checkGameOver() {
    if (isGamerOver) {
        return;
    }

        if(enemyBulletController, collideWhite(player)){
            isGamerOver = true;
        }

        if(EnemyController.collideWhite(player)
        ){
    isGamerOver = true;}

    if(EnemyController.enemyRows.Length === 0){
        didWin = true;
        isGamerOver = true;
    }

    function displayOver() {
        if(isGamerOver) {
            let text = didWin ? "Você Ganhou!" : "Game Over";
    let textOffset = didWin ? 5 : 3.6;
    ctx.fillStyle = "white";
    ctx.font = "35px 'Press Start 2P'";
    ctx.filltext(text, canvas.width / textOffset, canvas.height / 2); 
    }}
    }
