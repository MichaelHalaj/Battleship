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

  // -2 -> miss
  // -1 -> hit

  constructor(dimension = 10) {
    this.grid = [...Array(dimension)].map(() => Array(dimension).fill(0));
    this.shipList = Array(5).fill(undefined);
  }

  shipOverlaps(ship, direction, coordinates) {
    if (direction === 'horizontal') {
      for (let i = 0; i < ship.length; i += 1) {
        if (this.grid[coordinates[0]][coordinates[1] + i] !== 0) {
          return true;
        }
      }
    } else {
      for (let i = 0; i < ship.length; i += 1) {
        if (this.grid[coordinates[0] + i][coordinates[1]] !== 0) {
          return true;
        }
      }
    }
    return false;
  }

  placeShip(shipName, coordinates, direction) {
    // need to check if ship overlaps with another ship
    const ship = new Ship(shipName);
    this.shipList[Gameboard.shipIndexes[shipName] - 1] = ship;
    if (direction === 'horizontal') {
      if (coordinates[1] + ship.length - 1 >= this.grid[0].length) {
        return false;
      }
      for (let i = 0; i < ship.length; i += 1) {
        this.grid[coordinates[0]][coordinates[1] + i] = Gameboard.shipIndexes[shipName];
      }
    } else {
      if (coordinates[0] + ship.length - 1 >= this.grid.length) {
        return false;
      }
      for (let i = 0; i < ship.length; i += 1) {
        this.grid[coordinates[0] + i][coordinates[1]] = Gameboard.shipIndexes[shipName];
      }
    }
    return true;
  }
}

export default Gameboard;
