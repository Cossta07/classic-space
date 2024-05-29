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