import { scoreBoard } from './drawModule.js';

const btn = document.getElementById('btn');
const canvas = document.getElementById('canvas');
const form = document.getElementById('newGame');

btn.addEventListener('click', function(el) {
  document.querySelector('.board').remove();
  canvas.style.setProperty('display', 'none');
  form.style.setProperty('display', 'flex');
  btn.style.setProperty('display', 'none');
});

export let insertBoard = () => {
  const board = `
    <div class="board">
        <h2>Tabela wyników </h2>
        <h3>Wynik 1: ${(scoreBoard[0] == undefined) ? "----" : scoreBoard[0]} pkt </h3>
        <h3>Wynik 2: ${(scoreBoard[1] == undefined) ? "----" : scoreBoard[1]} pkt </h3>
        <h3>Wynik 3: ${(scoreBoard[2] == undefined) ? "----" : scoreBoard[2]} pkt </h3>
        <h3>Wynik 4: ${(scoreBoard[3] == undefined) ? "----" : scoreBoard[3]} pkt </h3>
        <h3>Wynik 5: ${(scoreBoard[4] == undefined) ? "----" : scoreBoard[4]} pkt </h3>
    </div>`;

  const elBoard = document.createElement('div');
  elBoard.innerHTML = board;

  const div = document.querySelector('.title');
  div.appendChild(elBoard);
};
