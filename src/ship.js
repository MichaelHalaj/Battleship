/* eslint-disable quote-props */
class Ship {
  length;

  hitCount;

  sunk;

  static shipTypes = {
    'carrier': 5,
    'battleship': 4,
    'destroyer': 3,
    'submarine': 3,
    'patrol boat': 2,
  };

  constructor(shipName, hitCount = 0, sunk = false) {
    this.length = Ship.shipTypes[shipName];
    this.hitCount = hitCount;
    this.sunk = sunk;
  }

  hit() {
    if (this.isSunk()) {
      this.sunk = true;
      return;
    }
    this.hitCount += 1;
  }

  isSunk() {
    return this.hitCount >= this.length;
  }
}

export default Ship;
