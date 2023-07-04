/* eslint-disable no-undef */
import Player from './player';

beforeEach(() => {
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

describe('Test Player class', () => {
  const player1 = new Player('Mike');
  const player2 = new Player();
  it('Correctly labels player names', () => {
    expect(player1.name).toEqual('Mike');
    expect(player2.name).toEqual('The Computer');
  });
  it('Tests generate random index', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    expect(player1.generateRandomIndex(player1.possibleMoves.length)).toEqual(5);
  });
  describe('test makeMoves', () => {
    it('Tests that computer does not repeat moves', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
      const board = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ];
      player2.makeMove(player1);
      expect(player2.possibleMoves).toEqual(board);
    });
    it('Test when computer runs all possible moves', () => {
      const empty = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ];
      const player3 = new Player();
      for (let i = 0; i < 100; i += 1) {
        player3.makeMove(player2);
      }
      expect(player3.possibleMoves).toEqual(empty);
    });
  });
});
