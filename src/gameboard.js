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

  static shipsOverlap(shipA, shipACoord, directionA, shipB, shipBCoord, directionB) {
    const l1 = shipACoord;
    const r1 = directionA === 'horizontal'
      ? [shipACoord[0] + 1, shipACoord[1] + shipA.length]
      : [shipACoord[0] + shipA.length - 1, shipACoord[1] + 1];
    console.log(l1 + ' ' + r1);
    // console.log(r1);
    const l2 = shipBCoord;
    const r2 = directionB === 'horizontal'
      ? [shipBCoord[0] + 1, shipBCoord[1] + shipB.length + 1]
      : [shipBCoord[0] + shipB.length, shipBCoord[1] + 1];
    /* if (l1[0] === r1[0] || l1[1] === r1[1] || l2[0] === r2[0] || l2[1] === r2[1]) {
      return false;
    } */
    console.log(l2 + ' ' + r2);
    // console.log(r2);
    if (l1[0] > r2[0] || l2[0] > r1[0]) {
      return false;
    }
    if (r1[1] > l2[1] || r2[1] > l1[1]) {
      return false;
    }
    /* if (l1[0] < r2[0] && r1[0] > l2[0] && l1[1] > r2[1] && r2[1] < l1[1]) {
      return true;
    } */
    return true;
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
