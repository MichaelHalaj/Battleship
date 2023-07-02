/* eslint-disable no-undef */
import Gameboard from './gameboard';
import Ship from './ship';

const emptyBoard = [
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

const boardWithShips = [
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
describe('Test shipOverlaps', () => {
  it('Returns true', () => {
    expect(
      Gameboard.shipsOverlap(
        new Ship('destroyer'),
        [0, 0],
        'horizontal',
        new Ship('destroyer'),
        [0, 2],
        'vertical',
      ),
    ).toEqual(true);
  });
  it('Returns true', () => {
    expect(
      Gameboard.shipsOverlap(
        new Ship('destroyer'),
        [0, 0],
        'horizontal',
        new Ship('destroyer'),
        [0, 0],
        'horizontal',
      ),
    ).toEqual(true);
  });
  it('Returns true', () => {
    expect(
      Gameboard.shipsOverlap(
        new Ship('destroyer'),
        [0, 0],
        'horizontal',
        new Ship('destroyer'),
        [0, 2],
        'vertical',
      ),
    ).toEqual(true);
  });
  it('Returns false', () => {
    expect(
      Gameboard.shipsOverlap(
        new Ship('destroyer'),
        [0, 0],
        'horizontal',
        new Ship('destroyer'),
        [2, 2],
        'vertical',
      ),
    ).toEqual(false);
  });
});
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
    expect(gameboard.placeShip('patrol boat', [9, 0], 'vertical')).toEqual(false);
    expect(gameboard.grid).toEqual(boardWithShips);
  });

  /* it('Return false when trying to be place ship on existing ship', () => {
    expect(gameboard.placeShip('destroyer', [0, 4], 'vertical')).toEqual(false);
  }); */
});
