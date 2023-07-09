import './style.css';
import Player from './player';
import Gameboard from './gameboard';

const boardSize = Gameboard.standardSize;

const grids = document.querySelectorAll('.grid');

const grid1 = document.getElementById('grid1');

const grid2 = document.getElementById('grid2');

const startBtn = document.querySelector('.start');



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

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const split = item.id.split('-');
    const shipSize = 5;
    for (let i = 0; i < shipSize; i += 1) {
      const newID = `${split[0]}-${split[1]}-${split[2]}-${+split[3] + i}-${split[4]}`;
      const shipItem = document.getElementById(newID);
      // const shipItem = Array.from(gridItems).find(node => node.id == newID);
      // console.log(shipItem);
      shipItem.classList.add('ship-selected');
    }
  });
  item.addEventListener('mouseleave', () => {
    const split = item.id.split('-');
    const shipSize = 5;
    for (let i = 0; i < shipSize; i += 1) {
      const newID = `${split[0]}-${split[1]}-${split[2]}-${+split[3] + i}-${split[4]}`;
      const shipItem = document.getElementById(newID);
      // console.log(shipItem);
      shipItem.classList.remove('ship-selected');
    }
  });
});

function stringID(gridNumber, row, col) {
  return `grid-${gridNumber}-item-${row}-${col}`;
}

console.log();

function updatePlayerBoardVisual(gridNumber, player) {
  const gridArray = Array.from(gridItems);
  const size = player.gameboard.grid.length;
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      if (player.gameboard.grid[i][j] >= 1) {
        const a = gridArray.find((val) =>  val.id === stringID(gridNumber, i, j));
        a.classList.add('ship-selected');
      }
    }
  }
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
  updatePlayerBoardVisual(1, player1);
}

startBtn.addEventListener('click', () => {
  gameloop();
});
