const player = document.querySelector('.player');
const scoreElement = document.getElementById('score');

let score = 0;
let isJumping = false;

function jump() {
  if (!isJumping) {
    isJumping = true;
    let position = 0;
    const jumpInterval = setInterval(() => {
      if (position === 150) {
        clearInterval(jumpInterval);
        isJumping = false;
      }
      position += 10;
      player.style.bottom = position + 'px';
    }, 20);
  }
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    jump();
  }
});

function moveObstacle() {
  const gameWidth = document.querySelector('.game').offsetWidth;
  const playerBottom = player.offsetTop + player.offsetHeight;

  if (gameWidth > -100) {
    gameWidth -= 10;
    if (gameWidth === 0) {
      score++;
      scoreElement.textContent = score;
      gameWidth = 400;
    }
  }

  const obstacle = document.createElement('div');
  obstacle.classList.add('obstacle');
  obstacle.style.left = gameWidth + 'px';
  obstacle.style.bottom = Math.floor(Math.random() * 200) + 'px';
  document.querySelector('.game').appendChild(obstacle);

  if (
    gameWidth > 0 &&
    gameWidth < 60 &&
    playerBottom <= obstacle.offsetTop + obstacle.offsetHeight &&
    playerBottom >= obstacle.offsetTop
  ) {
    gameOver();
  }

  const obstacles = document.querySelectorAll('.obstacle');
  if (obstacles.length > 5) {
    obstacles[0].remove();
  }

  requestAnimationFrame(moveObstacle);
}

function gameOver() {
  alert('Konec hry! Skóre: ' + score);
  location.reload(); // Obnovení stránky pro novou hru
}

moveObstacle();
