/* eslint-disable no-undef */
const playerFuncs = require('../player');

const { Player } = playerFuncs;

describe('Attack Group', () => {
  const p1 = Player();
  const p2 = Player();

  p2.board.placeShip({ x: 0, y: 0 }, 2);

  test('Attack 1', () => {
    expect(p1.attack(p2.board, 0, 0)).toBe(true);
  });

  test('Attack 1 again', () => {
    expect(p1.attack(p2.board, 0, 0)).toBe(false);
  });

  test('Attack 1 hit again and destroy ship', () => {
    expect(p1.attack(p2.board, 0, 1)).toBe(true);
    expect(p1.board.checkAllShipsSunk()).toBe(true);
  });
});

describe('Attack Group Randomly', () => {
  const p1 = Player();
  const p2 = Player();

  p1.board.placeShip({ x: 0, y: 0 }, 2);
  p2.board.placeShip({ x: 0, y: 0 }, 2);

  test('Random Attack 1', () => {
    expect(p1.randomAttack(p2.board)).toBe(true);
  });

  test('Random Attack 1 again', () => {
    expect(p1.randomAttack(p2.board)).toBe(true);
  });

  test('Keep attacking until full', () => {
    for (let i = 0; i < 20 * 20; i += 1) {
      expect(p2.randomAttack(p1.board)).toBe(true);
    }
  });

  test('Keep attacking until full 1', () => {
    for (let i = 0; i < 20 * 20 + 1; i += 1) {
      expect(p2.randomAttack(p1.board)).toBe(false);
    }
  });
});
