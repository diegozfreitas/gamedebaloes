var total = 0;
var interval = setInterval(createBalloon, 900)

function stopCreateBalloon() {
  clearInterval(interval);
}

function gameOver() {
  let allBalloons = document.querySelectorAll('div.balloon')

  if (allBalloons.length === 100) {
    allBalloons.forEach((item, i) => {
      document.body.removeChild(item);
    })

    alert("Game Over");
    stopCreateBalloon();
    total = 0;

    var r = confirm("Deseja reiniciar o jogo!");
    if (r == true) {
      window.location.reload()
    } else {
      stopCreateBalloon()
    }
  }
}

function createBalloon() {
  var balloon = document.createElement('div');
  balloon.setAttribute('class', 'balloon');

  var x = Math.floor(Math.random() * 1200)
  var y = Math.floor(Math.random() * 600)

  balloon.setAttribute('style', `left: ${x}px; top: ${y}px`);
  balloon.setAttribute('onClick', 'explodeBalloon(this)');

  document.body.appendChild(balloon);

  gameOver()
}

function explodeBalloon(obj) {
  document.body.removeChild(obj);

  total++;

  var score = document.getElementById('total');
  score.innerHTML = ` ${total}`
}

function score() {
  let allBalloons = document.querySelectorAll('div.balloon')

  var numberOfBalloons = document.getElementById('numberOfBalloons');
  numberOfBalloons.innerHTML = ` ${allBalloons.length}`

  console.log('eee', allBalloons.length)

  if (allBalloons.length > 80) {
    numberOfBalloons.setAttribute('style', 'color: red;')
  } else if (allBalloons.length > 50) {
    numberOfBalloons.setAttribute('style', 'color: orange;')
  } else {
    numberOfBalloons.setAttribute('style', 'color: black;')
  }
}


function loadGame() {
  var r = confirm("Deseja iniciar o jogo!");
  if (r == true) {
    interval
    setInterval(score, 50);
  } else {
    stopCreateBalloon()
  }
}