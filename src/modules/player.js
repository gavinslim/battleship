const Player = () => {
  const attack = (opponentBoard, posX, posY) => {
    if (!opponentBoard.alreadyHit(posX, posY)) {
      if (opponentBoard.receiveAttack(posX, posY)) {
        return true;
      }
    }
    return false;
  };

  // Randomly target a spot
  const randomAttack = (opponentBoard) => {
    let posX;
    let posY;

    // Check there are still spots to hit
    do {
      if (opponentBoard.isBoardFull()) return false;
      posX = Math.floor(Math.random() * opponentBoard.getBoardSize());
      posY = Math.floor(Math.random() * opponentBoard.getBoardSize());
    } while (opponentBoard.alreadyHit(posX, posY));

    // console.log(`Computer hit: ${posX} ${posY}`);
    opponentBoard.receiveAttack(posX, posY);
    return true;
  };

  return {
    attack,
    randomAttack,
  };
};

module.exports = {
  Player,
};
