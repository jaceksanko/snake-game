import { ctx, snakeSize, w, h } from './dataModule.js';
import { score } from './drawModule.js';

const drawBox = (x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
};

export const bodySnake = (x, y) => {
  drawBox(x, y, 'blue');
  ctx.strokeStyle = 'darkblue';
  ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
};

export const apple = (x, y) => {
  drawBox(x, y, 'green');
};

// start powerUP
export const changeLenghtUp = (x, y) => {
  drawBox(x, y, 'yellow');
};

export const changeLenghtDown = (x, y) => {
  drawBox(x, y, 'red');
};

export const speedUp = (x, y) => {
  drawBox(x, y, 'brown');
};

export const speedDown = (x, y) => {
  drawBox(x, y, 'orange');
};
//end powerUP

export const drawWalls = (x, y) => {
  drawBox(x, y, 'black');
};

export const scoreText = () => {
  const score_text = 'Score: ' + score;
  ctx.fillStyle = 'black';
  ctx.fillText(score_text, w / 2 - 4, h - 5);
};
