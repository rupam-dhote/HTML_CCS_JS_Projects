// Get the canvas element
const canvas = document.getElementById('pong-game');
const ctx = canvas.getContext('2d');
const gameSettings = document.getElementById('game-settings');
const gameTimeInput = document.getElementById('game-time');
const startGameButton = document.getElementById('start-game');
const gameTimeRemainingDiv = document.getElementById('game-time-remaining');
const winnerinfo=document.getElementById('win-info');
let paddle1Y;
let paddle2Y;



// Set canvas dimensions
canvas.width = 1340;
canvas.height = 621;

// Define game variables
let ballX ;
let ballY ;
let ballSpeedX;// Draw game elements
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle='orange';
  ctx.fillRect(0, paddle1Y, 20, 120); // Paddle 1
  ctx.fillRect(canvas.width - 20, paddle2Y, 20, 120); // Paddle 2
  ctx.beginPath();
  ctx.arc(ballX, ballY, 15, 0, Math.PI * 2); // Ball
  ctx.fill();
  ctx.font = '36px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(score1 + ' - ' + score2, canvas.width/2,0); // Score
}


let ballSpeedY;
let score1 = 0;
let score2 = 0;
let gameTime = 0;
let gameTimer = null;
let gameOver = true;


startGameButton.addEventListener('click', () => {
    gameTime = parseInt(gameTimeInput.value) * 60; // Convert minutes to seconds
    gameSettings.style.display = 'none';
    gameTimer = setInterval(updateGameTime, 1000);
    startGame();
  });
  

  function startGame() {
    // Initialize game state
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = 5;
    ballSpeedY = 5;
    paddle1Y = canvas.height / 2;
    paddle2Y = canvas.height / 2;
    gameOver=true;
  }
  

  function updateGameTime() {
    gameTime--;
    gameTimeRemainingDiv.innerText = `Time Remaining: ${formatTime(gameTime)}`;
    if (gameTime <= 0) {
      clearInterval(gameTimer);
      gameOver = false;
      endGame();
    }
  }
  

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes}:${secondsRemaining.toString().padStart(2, '0')}`;
  }
  
  
  function endGame() {
    // Display winner
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (score1 > score2) {
      winnerinfo.innerText='Player 1 Wins !';
    } else if (score2 > score1) {
      winnerinfo.innerText='Player 2 Wins !';
    } else {
      winnerinfo.innerText='It\'s a Tie !';
    }
  

  // Display play again and exit buttons
  const playAgainButton = document.getElementById('btn');
  playAgainButton.style.display='block';

  const exitButton = document.getElementById('ex');
  exitButton.style.display='block';


  

  playAgainButton.addEventListener('click', () => {
    score1 = 0;
    score2 = 0;
    gameOver = false;
    gameTime = 0;
    gameSettings.style.display = 'flex';
    playAgainButton.style.display='none';
    exitButton.style.display='none';
    ballSpeedX=0;
    ballSpeedY=0;
    winnerinfo.innerText='';


  
  });
  

  exitButton.addEventListener('click', () => {
    window.close();
  });


}
  

// Update game state
function update() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    
    // Collision with walls and paddles
    if (ballY < 0 || ballY > canvas.height) {
      ballSpeedY = -ballSpeedY;
    }
    if (ballX < 0) {
        score2++;
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        // Randomize ball direction
        ballSpeedX = Math.random() > 0.5 ? 5 : -5;
        ballSpeedY = Math.random() > 0.5 ? 5 : -5;
        // Add delay after goal
        setTimeout(() => {
          // No need to reset ball speed here
        }, 2000); // 2000ms = 2 seconds
        // Disable ball movement during delay
        ballSpeedX = 0;
        ballSpeedY = 0;
        setTimeout(() => {
          // Restore ball speed after delay
          ballSpeedX = Math.random() > 0.5 ? 5 : -5;
          ballSpeedY = Math.random() > 0.5 ? 5 : -5;
        }, 2000); // 2000ms = 2 seconds
      
    } else if (ballX > canvas.width) {
        score1++;
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        // Randomize ball direction
        ballSpeedX = Math.random() > 0.5 ? 5 : -5;
        ballSpeedY = Math.random() > 0.5 ? 5 : -5;
        // Add delay after goal
        setTimeout(() => {
          // No need to reset ball speed here
        }, 1000); // 2000ms = 2 seconds
        // Disable ball movement during delay
        ballSpeedX = 0;
        ballSpeedY = 0;
        setTimeout(() => {
          // Restore ball speed after delay
          ballSpeedX = Math.random() > 0.5 ? 5 : -5;
          ballSpeedY = Math.random() > 0.5 ? 5 : -5;
        }, 1000); // 2000ms = 2 seconds
      }
      
      
    if (ballX < 20 && ballY > paddle1Y && ballY < paddle1Y + 120) {
      ballSpeedX = -ballSpeedX;
    } else if (ballX > canvas.width - 20 && ballY > paddle2Y && ballY < paddle2Y + 120) {
      ballSpeedX = -ballSpeedX;
    }
  }

  // Handle user input
document.addEventListener('keydown', (e) => {

    switch (e.key) {
      case 'w':
        paddle1Y -= 35;
        break;
      case 's':
        // if(paddle2Y!=bottom)
        paddle1Y += 35;
        break;
      case 'ArrowUp':
        paddle2Y -= 35;
        break;
      case 'ArrowDown':
        paddle2Y += 35;
        break;
    
}
if (paddle1Y < 0) {
  paddle1Y = 0;
} else if (paddle1Y > canvas.height - 120) {
  paddle1Y = canvas.height - 120;
}

// Boundary checks for paddle 2
if (paddle2Y < 0) {
  paddle2Y = 0;
} else if (paddle2Y > canvas.height - 120) {
  paddle2Y = canvas.height - 120;
}
  });

 // Game loop
setInterval(() => {
    if (gameOver) {
      update();
      draw();
    }
  },1000/80); // 60 FPS
  
  
  