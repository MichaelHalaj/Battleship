/* eslint-disable no-undef */
import Ship from './ship';

let ship;
beforeEach(() => {
  ship = new Ship('carrier');
});

describe('Ship class', () => {
  it('Creates a new Ship object of given length', () => {
    expect(ship).toBeDefined();
    expect(ship.length).toEqual(5);
  });
  it('Increases hit count for the ship', () => {
    ship.hit();
    expect(ship.hitCount).toBe(1);
    ship.hit();
    expect(ship.hitCount).toBe(2);
  });
  it('Returns false if ship is not sunk', () => {
    for (let i = 1; i <= 4; i += 1) {
      ship.hit();
    }
    expect(ship.isSunk()).toBe(false);
  });
  it('Returns true if ship is sunk', () => {
    for (let i = 1; i <= 5; i += 1) {
      ship.hit();
    }
    expect(ship.isSunk()).toBe(true);
    expect(ship.isSunk()).toBe(true);
    expect(ship.hitCount).toEqual(5);
  });
});
