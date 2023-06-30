import Ship from './ship';

class Gameboard {
  grid;

  constructor(dimension = 10) {
    this.grid = [...Array(dimension)].map(() => Array(dimension).fill(0));
  }
}

export default Gameboard;
