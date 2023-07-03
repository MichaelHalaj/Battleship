import Gameboard from './gameboard';

class Player {
  name;

  gameboard;

  activeTurn;

  constructor(name = 'The Computer') {
    this.name = name;
    this.gameboard = new Gameboard();
    this.activeTurn = false;
    this.possibleRowMoves = [...Array(this.gameboard.grid.length).keys()];
    this.possibleColumnMoves = [...Array(this.gameboard.grid.length).keys()];
  }

  get isActive() {
    return this.activeTurn;
  }

  set isActive(activity) {
    this.activeTurn = activity;
  }

  makeMove(attackingPlayer, coordinates) {
    if (this.name === 'The Computer') {
      const i = Math.floor(Math.random() * (this.gameboard.length));
      const j = Math.floor(Math.random() * (this.gameboard.length));
      attackingPlayer.gameboard.receiveAttack([i, j]);
      this.possibleRowMoves.splice(i, 1);
      this.possibleColumnMoves.splice(j, 1);
    } else {
      attackingPlayer.gameboard.receiveAttack(coordinates);
    }
  }
}

export default Player;
