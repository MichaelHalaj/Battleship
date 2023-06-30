/* eslint-disable no-undef */
import Gameboard from './gameboard';

let emptyBoard =
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

let boardWithShips =
    [
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

describe('Gameboard class', () => {
  const gameboard = new Gameboard();
  it('Creates a empty new gameboard', () => {
    expect(gameboard.grid).toEqual(emptyBoard);
  });
  it('Places ships in correct coordinates', () => {
    expect(gameboard.placeShip('carrier', [0, 0], 'horizontal')).toEqual(true);
    expect(gameboard.placeShip('destroyer', [6, 5], 'vertical')).toEqual(true);
    expect(gameboard.grid).toEqual(boardWithShips);
  });
  it('Returns false when trying to place ships off the board and does not change the board', () => {
    expect(gameboard.placeShip('battleship', [0, 7], 'horizontal')).toEqual(false);
    expect(gameboard.grid).toEqual(boardWithShips);
  });
});
