let xPos = 250;
let yPos = 250;
let moveLeft = true;
let leftPressed;
let rightPressed;
let upPressed;
let downPressed;

let score = 0;
let goalXPos = 100;
let goalYPos = 100;
let obstacleXPos = 400;
let obstacleYPos = 470;
let highScore = 0;
let obsMoveRight = true;
let obsMoveDown = true;

document.getElementById('reset').addEventListener('click', () =>{
 xPos = 250;
 yPos = 250;
 score = 0;
 goalXPos = 100;
 goalYPos = 100;
})
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('keydown', keyDownHandler, false);

function draw() {
  
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
       var ctx = canvas.getContext('2d');


      ctx.clearRect(0, 0, 1000, 1000); // clear canvas
      ctx.beginPath();
      ctx.shadowBlur = 20;
      ctx.shadowColor = "white";
      ctx.arc(xPos, yPos, 5, 0, Math.PI * 2, true,);
      ctx.arc(goalXPos, goalYPos, 10, 0, Math.PI * 2, true,); 
      ctx.rect(obstacleXPos, obstacleYPos, 30, 30);
      if(leftPressed == true && upPressed == true && xPos >= 10 && yPos >= 10){
        xPos-=5;
        yPos-=5;
      }
      else if(rightPressed == true && upPressed == true && xPos <= 690 && yPos >= 10){
        xPos+=5;
        yPos-=5;
      }
      else if(leftPressed == true && downPressed == true && xPos >= 10 && yPos <= 690){
        xPos-=5;
        yPos+=5;
      }
      else if(rightPressed == true && downPressed == true && xPos <= 690 && yPos <= 690){
        xPos+=5;
        yPos+=5;
      }

      else if(leftPressed == true && xPos >= 10){
        xPos-=10;
      }
      else if(rightPressed == true && xPos <= 690){
        xPos+=10;
      }
      else if(upPressed == true && yPos >= 10){
        yPos-=10;
      }
      else if(downPressed == true && yPos <= 690){
        yPos+=10;
      }

      if ((xPos > goalXPos - 15 && xPos < goalXPos + 15) && (yPos > goalYPos - 15 && yPos < goalYPos + 15)){
        goalXPos = Math.random()*700;
        goalYPos = Math.random()*700;
        score++;
       
        
      }

      if ((xPos > obstacleXPos && xPos < obstacleXPos + 30) && (yPos > obstacleYPos && yPos < obstacleYPos + 30)){
        ctx.clearRect(0, 0, 1000, 1000); // clear canvas
        xPos = 250;
        yPos = 250;
        score = 0;
        goalXPos = 100;
        goalYPos = 100;
        obstacleXPos = 400;
        obstacleYPos = 470; 
        

      }
      if (obstacleXPos > 670){
        obsMoveRight = false;
      }
      if (obstacleXPos < 0){
        obsMoveRight = true;
      }
      if (obstacleYPos > 670){
        obsMoveDown = false;
      }
      if (obstacleYPos < 0){
        obsMoveDown = true;
      }

      if (obsMoveRight){
        obstacleXPos += ((score + Math.random())*2)
      }
      if(obsMoveRight == false) {
        obstacleXPos -= ((score + Math.random())*2)
      }  
      if (obsMoveDown){
        obstacleYPos += (score + Math.random())
      }
      if (obsMoveDown == false){
      obstacleYPos -= (score + Math.random())
      }
    
      if(score >= highScore){
        highScore = score;
      }

      document.getElementById('score').innerHTML = 'Score: ' + score;
      document.getElementById('highScore').innerHTML = 'High Score: ' + highScore;
      document.getElementById('pos').innerHTML = 'x: ' + xPos + '\n' + 'y: ' + yPos + '\n' + 'Obx: ' + obstacleXPos + '\n' + 'Oby: ' + obstacleYPos

      ctx.fill();
      ctx.fillStyle = 'lime';
      ctx.save();
      window.requestAnimationFrame(draw);
    }
  }


  function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
  }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
}
  
}

function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
  }
  else if(e.key == "Up" || e.key == "ArrowUp") {
      upPressed = false;
}
  else if(e.key == "Down" || e.key == "ArrowDown") {
      downPressed = false;
  }
  


}

draw();
