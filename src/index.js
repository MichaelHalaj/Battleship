import './style.css';
import Player from './player';
import Gameboard from './gameboard';

const boardSize = Gameboard.standardSize;

const grids = document.querySelectorAll('.grid');

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
      const newID = `#${split[0]}-${split[1]}-${split[2]}-${+split[3] + i}-${split[4]}`;
      const shipItem = document.querySelector(newID);
      // const shipItem = Array.from(gridItems).find(node => node.id == newID);
      // console.log(shipItem);
      shipItem.classList.add('ship-hover');
    }
  });
  item.addEventListener('mouseleave', () => {
    const split = item.id.split('-');
    const shipSize = 5;
    for (let i = 0; i < shipSize; i += 1) {
      const newID = `#${split[0]}-${split[1]}-${split[2]}-${+split[3] + i}-${split[4]}`;
      const shipItem = document.querySelector(newID);
      // console.log(shipItem);
      shipItem.classList.remove('ship-hover');
    }
  });
});
