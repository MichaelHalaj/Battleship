import './style.css';
import Player from './player';
import Gameboard from './gameboard';

const boardSize = Gameboard.standardSize;

const grids = document.querySelectorAll('.grid');

const grid1 = document.getElementById('grid1');

const grid2 = document.getElementById('grid2');

const startBtn = document.querySelector('.start');

const gridItems = document.querySelectorAll('.grid-item');

function stringID(gridNumber, row, col) {
  return `grid-${gridNumber}-item-${row}-${col}`;
}

console.log(gridItems.find(item => item.id === 'grid-1-item-0-0'));

function updatePlayerBoardVisual(grid) {
  
}
function gameloop() {
  const player1 = new Player('Player');
  const player2 = new Player();
  player1.gameboard.placeShip('carrier', [0, 0], 'horizontal');
  player1.gameboard.placeShip('battleship', [4, 3], 'vertical');
  player1.gameboard.placeShip('destroyer', [6, 9], 'vertical');
  player1.gameboard.placeShip('submarine', [9, 2], 'horizontal');
  player1.gameboard.placeShip('patrol boat', [2, 8], 'vertical');
  console.log(player1.gameboard);
}

startBtn.addEventListener('click', () => {
  gameloop();
});

let gridCount = 1;
grids.forEach((grid) => {
  grid.setAttribute('style', `display: grid; grid-template-columns: repeat(${boardSize}, 1fr); grid-template-rows: repeat(${boardSize}, 1fr); grid-gap: 2px;`);
  for (let i = 0; i < boardSize; i += 1) {
    for (let j = 0; j < boardSize; j += 1) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.setAttribute('id', `grid-${gridCount}-item-${i}-${j}`);
      grid.appendChild(gridItem);
    }
  }
  gridCount += 1;
});

gridItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const split = item.id.split('-');
    const shipSize = 5;
    for (let i = 0; i < shipSize; i += 1) {
      const newID = `${split[0]}-${split[1]}-${split[2]}-${+split[3] + i}-${split[4]}`;
      const shipItem = document.getElementById(newID);
      // const shipItem = Array.from(gridItems).find(node => node.id == newID);
      // console.log(shipItem);
      shipItem.classList.add('ship-hover');
    }
  });
  item.addEventListener('mouseleave', () => {
    const split = item.id.split('-');
    const shipSize = 5;
    for (let i = 0; i < shipSize; i += 1) {
      const newID = `${split[0]}-${split[1]}-${split[2]}-${+split[3] + i}-${split[4]}`;
      const shipItem = document.getElementById(newID);
      // console.log(shipItem);
      shipItem.classList.remove('ship-hover');
    }
  });
});
