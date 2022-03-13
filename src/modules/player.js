const gameboardFuncs = require('./gameboard');

const { Gameboard } = gameboardFuncs;

const Player = () => {
  const board = Gameboard();

  const attack = (opponentBoard, posX, posY) => {
    if (opponentBoard.alreadyHit({ x: posX, y: posY })) {
      return false;
    }

    opponentBoard.receiveAttack({ x: posX, y: posY });
    return true;
  };

  const randomAttack = (opponentBoard) => {
    // Randomly target a spot
    let posX;
    let posY;

    do {
      // Check there are still spots to hit
      if (opponentBoard.isBoardFull()) return false;
      posX = Math.floor(Math.random() * opponentBoard.getBoardSize());
      posY = Math.floor(Math.random() * opponentBoard.getBoardSize());
    } while (opponentBoard.alreadyHit({ x: posX, y: posY }));

    opponentBoard.receiveAttack({ x: posX, y: posY });
    return true;
  };

  return {
    board,
    attack,
    randomAttack,
  };
};

module.exports = {
  Player,
};
