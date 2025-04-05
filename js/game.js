document.addEventListener("DOMContentLoaded", function () {
  const player = document.querySelector(".game-player");
  const gameContainer = document.querySelector(".game-container");
  const gameWidth = gameContainer.clientWidth;
  const gameHeight = gameContainer.clientHeight;

  // Set initial position
  let playerX = Math.random() * (gameWidth - 50);
  let playerY = Math.random() * (gameHeight - 50);
  player.style.left = `${playerX}px`;
  player.style.top = `${playerY}px`;
});

document.addEventListener("keydown", function (event) {
  const player = document.querySelector(".game-player");
  const gameContainer = document.querySelector(".game-container");
  const gameWidth = gameContainer.clientWidth;
  const gameHeight = gameContainer.clientHeight;

  let playerX = parseInt(player.style.left);
  let playerY = parseInt(player.style.top);

  switch (event.key) {
    case "ArrowUp":
      if (playerY > 0) {
        playerY -= 5;
      }
      break;
    case "ArrowDown":
      if (playerY < gameHeight - 50) {
        playerY += 5;
      }
      break;
    case "ArrowLeft":
      if (playerX > 0) {
        playerX -= 5;
      }
      break;
    case "ArrowRight":
      if (playerX < gameWidth - 50) {
        playerX += 5;
      }
      break;
    default:
      return; // Exit this handler for other keys
  }

  player.style.left = `${playerX}px`;
  player.style.top = `${playerY}px`;
});
