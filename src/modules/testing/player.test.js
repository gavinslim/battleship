/* eslint-disable no-undef */
const { Player } = require('../player');
const { Gameboard } = require('../gameboard');

const ship = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
};

describe('Attack Group', () => {
  const p1 = Player();
  const board2 = Gameboard();

  board2.placeShip('destroyer', 0, 0, ship.destroyer);

  test('Miss', () => {
    expect(p1.attack(board2, 10, 10)).toBe(false);
  });

  test('Attack 1', () => {
    expect(p1.attack(board2, 0, 0)).toBe(true);
  });

  test('Attack 1 again', () => {
    expect(p1.attack(board2, 0, 0)).toBe(false);
  });

  test('Attack 1 hit again and destroy ship', () => {
    expect(p1.attack(board2, 0, 1)).toBe(true);
    expect(board2.checkAllShipsSunk()).toBe(true);
  });
});

describe('Attack Group Randomly', () => {
  const p1 = Player();

  const board1 = Gameboard();
  const board2 = Gameboard();

  board1.placeShip('destroyer', 0, 0, ship.destroyer);
  board2.placeShip('destroyer', 0, 0, ship.destroyer);

  test('Random Attack 1', () => {
    expect(p1.randomAttack(board2)).toBe(false);
  });

  test('Random Attack 1 again', () => {
    expect(p1.randomAttack(board2)).toBe(false);
  });
});
