/* eslint-disable quote-props */
import Ship from './ship';

class Gameboard {
  grid;

  static shipIndexes = {
    'carrier': 1,
    'battleship': 2,
    'destroyer': 3,
    'submarine': 4,
    'patrol boat': 5,
  };

  constructor(dimension = 10) {
    this.grid = [...Array(dimension)].map(() => Array(dimension).fill(0));
    this.shipList = Array(5).fill(undefined);
  }

  placeShip(shipName, coordinates, direction) {
    const ship = new Ship(shipName);
    this.shipList[Gameboard.shipIndexes[shipName] - 1] = ship;
    if (direction === 'horizontal') {
      for (let i = 0; i < ship.length; i += 1) {
        this.grid[coordinates[0]][coordinates[1] + i] = Gameboard.shipIndexes[shipName];
      }
    } else {
      for (let i = 0; i < ship.length; i += 1) {
        this.grid[coordinates[0] + i][coordinates[1]] = Gameboard.shipIndexes[shipName];
      }
    }
  }
}

export default Gameboard;
