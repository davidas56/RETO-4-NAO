document.addEventListener("DOMContentLoaded", function () {
    const paddle = document.getElementById("paddle");
    const ball = document.getElementById("ball");
    const bricksContainer = document.getElementById("bricks-container");
    const bricks = [];
  
    const paddleWidth = 80;
    const paddleHeight = 10;
    const ballSize = 10;
    const brickRows = 4;
    const brickCols = 8;
    const brickWidth = 60;
    const brickHeight = 20;
    const brickMargin = 10;
  
    let x = 0;
    let y = 0;
    let dx = 2;
    let dy = -2;
    let rightPressed = false;
    let leftPressed = false;
  
    function createBricks() {
      for (let r = 0; r < brickRows; r++) {
        for (let c = 0; c < brickCols; c++) {
          const brick = document.createElement("div");
          brick.classList.add("brick", `bg-red-${r + 2}00`);
          brick.style.left = `${c * (brickWidth + brickMargin)}px`;
          brick.style.top = `${r * (brickHeight + brickMargin)}px`;
          bricksContainer.appendChild(brick);
          bricks.push(brick);
        }
      }
    }
  
    function movePaddle() {
      if (rightPressed && x < window.innerWidth - paddleWidth) {
        x += 7;
      } else if (leftPressed && x > 0) {
        x -= 7;
      }
      paddle.style.left = `${x}px`;
    }
  
    function moveBall() {
      if (x + dx > window.innerWidth - ballSize || x + dx < 0) {
        dx = -dx;
      }
      if (y + dy < 0) {
        dy = -dy;
      } else if (y + dy > window.innerHeight - ballSize) {
        if (x > paddle.offsetLeft && x < paddle.offsetLeft + paddleWidth) {
          dy = -dy;
        } else {
          // Game over logic
          alert("Game Over");
          document.location.reload();
        }
      }
      x += dx;
      y += dy;
      ball.style.left = `${x}px`;
      ball.style.top = `${y}px`;
      requestAnimationFrame(moveBall);
    }
  
    function keyDownHandler(e) {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
      }
    }
  
    function keyUpHandler(e) {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
      }
    }
  
    createBricks();
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
    moveBall();
    setInterval(movePaddle, 10);
  });
  