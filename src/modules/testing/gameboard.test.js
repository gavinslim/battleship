/* eslint-disable no-undef */
const functions = require('../gameboard');

const { Gameboard } = functions;

describe('Placing ships', () => {
  const board = Gameboard();

  test('Placing ship', () => {
    expect(board.placeShip({ x: 1, y: 2 }, 3)).toBe(true);
  });

  test('Placing another ship with same length', () => {
    expect(() => { board.placeShip({ x: 1, y: 2 }, 3); }).toThrow(Error('Ship with same length already exists'));
  });
});

describe('Receiving Attacks', () => {
  const board = Gameboard();
  board.placeShip({ x: 0, y: 0 }, 4);

  test('Attack ship hit', () => {
    expect(board.receiveAttack({ x: 0, y: 0 })).toBe(true);
  });

  test('Attack ship hit at same spot', () => {
    expect(board.alreadyHit({ x: 0, y: 0 })).toBe(true);
  });

  test('Attack ship again', () => {
    expect(board.receiveAttack({ x: 0, y: 1 })).toBe(true);
  });

  test('Attack ship missed 1', () => {
    expect(board.receiveAttack({ x: 0, y: 4 })).toBe(false);
  });

  test('Attack ship missed 2', () => {
    expect(board.receiveAttack({ x: 1, y: 0 })).toBe(false);
  });
});

describe('Check if all ships sunk', () => {
  const board = Gameboard();
  board.placeShip({ x: 0, y: 0 }, 4);
  board.placeShip({ x: 1, y: 0 }, 2);

  test('Check if ships sunk', () => {
    expect(board.checkAllShipsSunk()).toBe(false);
  });

  test('Confirm all ships are sunk', () => {
    // Destroy ship at [0, 0] length 4, vertical
    expect(board.receiveAttack({ x: 0, y: 0 })).toBe(true);
    expect(board.receiveAttack({ x: 0, y: 1 })).toBe(true);
    expect(board.receiveAttack({ x: 0, y: 2 })).toBe(true);
    expect(board.receiveAttack({ x: 0, y: 3 })).toBe(true);
    expect(board.checkAllShipsSunk()).toBe(false);

    // Destroy ship at [1, 0] length 2, vertical
    expect(board.receiveAttack({ x: 1, y: 0 })).toBe(true);
    expect(board.receiveAttack({ x: 1, y: 1 })).toBe(true);
    expect(board.checkAllShipsSunk()).toBe(true);
  });
});
