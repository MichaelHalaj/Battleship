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
  describe('Test shipOverlaps', () => {
    it('Returns true', () => {
      expect(
        gameboard.shipOverlaps(
          new Ship('destroyer'),
          'horizontal',
          [0, 0],
        ),
      ).toEqual(true);
    });
    it('Returns true', () => {
      expect(
        gameboard.shipOverlaps(
          new Ship('destroyer'),
          'horizontal',
          [0, 4],
        ),
      ).toEqual(true);
    });
    it('Returns true', () => {
      expect(
        gameboard.shipOverlaps(
          new Ship('battleship'),
          'vertical',
          [0, 2],
        ),
      ).toEqual(true);
    });
    it('Returns true', () => {
      expect(
        gameboard.shipOverlaps(
          new Ship('destroyer'),
          'horizontal',
          [6, 3],
        ),
      ).toEqual(true);
    });
    it('Returns false', () => {
      expect(
        gameboard.shipOverlaps(
          new Ship('destroyer'),
          'horizontal',
          [1, 0],
        ),
      ).toEqual(false);
    });
    it('Returns false', () => {
      expect(
        gameboard.shipOverlaps(
          new Ship('battleship'),
          'horizontal',
          [0, 5],
        ),
      ).toEqual(false);
    });
  });
});
