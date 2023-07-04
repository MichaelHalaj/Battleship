import Gameboard from './gameboard';

class Player {
  name;

  gameboard;

  activeTurn;

  possibleMoves;

  availableRows;

  constructor(name = 'The Computer') {
    this.name = name;
    this.gameboard = new Gameboard();
    this.activeTurn = false;
    this.possibleMoves = [...Array(this.gameboard.grid.length)].map(
      () => [...Array(this.gameboard.grid.length).keys()],
    );
    this.availableRows = [...Array(this.gameboard.grid.length).keys()];
  }

  get isActive() {
    return this.activeTurn;
  }

  set isActive(activity) {
    this.activeTurn = activity;
  }

  generateRandomIndex(arrayLength) {
    return Math.floor(Math.random() * (arrayLength));
  }

  makeMove(defendingPlayer, coordinates) {
    if (this.name === 'The Computer') {
      const i = this.generateRandomIndex(this.availableRows.length);
      const j = this.generateRandomIndex(this.possibleMoves[this.availableRows[i]].length);
      defendingPlayer.gameboard.receiveAttack([this.availableRows[i], j]);
      this.possibleMoves[this.availableRows[i]].splice(j, 1);
      if (this.possibleMoves[this.availableRows[i]].length === 0) {
        this.availableRows.splice(i, 1);
      }
    } else {
      defendingPlayer.gameboard.receiveAttack(coordinates);
    }
  }
}

export default Player;
