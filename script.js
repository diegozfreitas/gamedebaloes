var total = 0;

function createBalloon() {
  var balloon = document.createElement('div');
  balloon.setAttribute('class', 'balloon');

  var x = Math.floor(Math.random() * 1200)
  var y = Math.floor(Math.random() * 600)

  balloon.setAttribute('style', `left: ${x}px; top: ${y}px`);
  balloon.setAttribute('onClick', 'explodeBalloon(this)');

  document.body.appendChild(balloon);
}

function explodeBalloon(obj) {
  document.body.removeChild(obj);
  total++;
  var score = document.getElementById('total');
  score.innerHTML = `Balões estourados ${total}`
}

function loadGame() {
  setInterval(createBalloon, 300)
}