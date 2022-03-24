/* eslint-disable no-undef */
const functions = require('../gameboard');

const { Gameboard } = functions;

const ship = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
};

describe('Placing ships', () => {
  const board = Gameboard();

  test('Placing ship', () => {
    expect(board.placeShip(1, 2, ship.submarine)).toBe(true);
  });
});

describe('Receiving Attacks', () => {
  const board = Gameboard();
  board.placeShip(0, 0, ship.battleship);

  test('Attack miss', () => {
    expect(board.receiveAttack(10, 10)).toBe(false);
  });

  test('Attack ship hit', () => {
    expect(board.receiveAttack(0, 0)).toBe(true);
  });

  test('Attack ship hit at same spot', () => {
    expect(board.alreadyHit(0, 0)).toBe(true);
  });

  test('Attack ship again', () => {
    expect(board.receiveAttack(0, 1)).toBe(true);
  });

  test('Attack ship missed 1', () => {
    expect(board.receiveAttack(0, 4)).toBe(false);
  });

  test('Attack ship missed 2', () => {
    expect(board.receiveAttack(1, 0)).toBe(false);
  });
});

describe('Check conflict for horizontal ship', () => {
  const board = Gameboard();
  board.placeShip(10, 10, ship.cruiser, true);

  test('Check conflicts around cruiser', () => {
    expect(board.isConflict(10, 10, ship.cruiser, true)).toBe(true);
    expect(board.isConflict(10, 11, ship.cruiser, true)).toBe(false);
    expect(board.isConflict(10, 9, ship.cruiser, true)).toBe(false);
    expect(board.isConflict(9, 10, ship.cruiser, true)).toBe(true);
    expect(board.isConflict(7, 10, ship.cruiser, true)).toBe(false);
    expect(board.isConflict(7, 10, ship.carrier, true)).toBe(true);
  });
});

describe('Check conflict for vertical ship', () => {
  const board = Gameboard();
  board.placeShip(10, 10, ship.cruiser, false);

  test('Check conflicts around cruiser 1', () => {
    expect(board.isConflict(10, 10, ship.cruiser, true)).toBe(true);
    expect(board.isConflict(10, 11, ship.cruiser, true)).toBe(true);
    expect(board.isConflict(10, 9, ship.cruiser, true)).toBe(false);
    expect(board.isConflict(9, 10, ship.cruiser, true)).toBe(true);
    expect(board.isConflict(7, 10, ship.cruiser, true)).toBe(false);
    expect(board.isConflict(7, 11, ship.carrier, true)).toBe(true);
    expect(board.isConflict(9, 13, ship.cruiser, true)).toBe(false);
    expect(board.isConflict(9, 9, ship.carrier, false)).toBe(false);
  });
});

describe('Check if all ships sunk', () => {
  const board = Gameboard();
  board.placeShip(0, 0, ship.battleship, false);
  board.placeShip(5, 5, ship.destroyer, false);

  test('Check if ships sunk', () => {
    expect(board.checkAllShipsSunk()).toBe(false);
  });

  test('Confirm all ships are sunk', () => {
    // Destroy ship at [0, 0] length 4, vertical
    expect(board.receiveAttack(0, 0)).toBe(true);
    expect(board.receiveAttack(0, 1)).toBe(true);
    expect(board.receiveAttack(0, 2)).toBe(true);
    expect(board.receiveAttack(0, 3)).toBe(true);
    expect(board.checkAllShipsSunk()).toBe(false);

    // Destroy ship at [1, 0] length 2, vertical
    expect(board.receiveAttack(5, 5)).toBe(true);
    expect(board.receiveAttack(5, 6)).toBe(true);
    expect(board.checkAllShipsSunk()).toBe(true);
  });
});
