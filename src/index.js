import './style.css';
import Player from './player';
import Gameboard from './gameboard';

const boardSize = Gameboard.standardSize;

const gridItems = document.querySelectorAll('.grid');

gridItems.forEach((grid) => {
  grid.setAttribute('style', `display: grid; grid-template-columns: repeat(${boardSize}, 1fr); grid-template-rows: repeat(${boardSize}, 1fr); grid-gap: 10px;`);
  for (let i = 1; i <= boardSize * boardSize; i += 1) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    grid.appendChild(gridItem);
  }
});
