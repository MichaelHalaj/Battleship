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
    expect(gameboard.placeShip('submarine', [10, 10], 'vertical')).toEqual(false);
  });
  describe('Test shipOverlaps', () => {
    it('Returns true', () => {
      expect(
        gameboard.shipOverlaps(
          new Ship('destroyer'),
          [0, 0],
          'horizontal',
        ),
      ).toEqual(true);
    });
    it('Returns true', () => {
      expect(
        gameboard.shipOverlaps(
          new Ship('destroyer'),
          [0, 4],
          'horizontal',
        ),
      ).toEqual(true);
    });
    it('Returns true', () => {
      expect(
        gameboard.shipOverlaps(
          new Ship('battleship'),
          [0, 2],
          'vertical',
        ),
      ).toEqual(true);
    });
    it('Returns true', () => {
      expect(
        gameboard.shipOverlaps(
          new Ship('destroyer'),
          [6, 3],
          'horizontal',
        ),
      ).toEqual(true);
    });
    it('Returns false', () => {
      expect(
        gameboard.shipOverlaps(
          new Ship('destroyer'),
          [1, 0],
          'horizontal',
        ),
      ).toEqual(false);
    });
    it('Returns false', () => {
      expect(
        gameboard.shipOverlaps(
          new Ship('battleship'),
          [0, 5],
          'horizontal',
        ),
      ).toEqual(false);
    });
  });
  it('Returns false when attempting to place ship on existing ship', () => {
    expect(gameboard.placeShip('destroyer', [6, 5], 'horizontal')).toEqual(false);
    expect(gameboard.grid).toEqual(boardWithShips);
  });
  describe('receiveAttack', () => {
    const missedBoard = [
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, -1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, -1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
      [0, -1, 0, 0, 0, 0, 0, 0, -1, 0],
    ];
    it('Correctly marks missed attacks', () => {
      gameboard.receiveAttack([2, 8]);
      gameboard.receiveAttack([5, 2]);
      gameboard.receiveAttack([9, 1]);
      gameboard.receiveAttack([9, 8]);
      expect(gameboard.grid).toEqual(missedBoard);
    });
    it('Correctly marks hit attacks', () => {
      gameboard.receiveAttack([0, 0]);
      expect(gameboard.shipList[0].hitCount).toEqual(1);
      gameboard.receiveAttack([0, 4]);
      expect(gameboard.shipList[0].hitCount).toEqual(2);
      for (let i = 0; i < 3; i += 1) {
        gameboard.receiveAttack([6 + i, 5]);
      }
      expect(gameboard.shipList[2].isSunk()).toEqual(true);
    });
  });
  it('Returns false when all ships are not yet sunk', () => {
    expect(gameboard.allShipsSunk()).toEqual(false);
  });
  it('Returns true when all ships are sunk', () => {
    for (let i = 0; i < 5; i += 1) {
      gameboard.receiveAttack([0, 0 + i]);
    }
    expect(gameboard.allShipsSunk()).toEqual(true);
  });
});
