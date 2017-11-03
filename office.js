console.log("hallo")

const scoreboard = document.getElementById('scoreboard')
let score = 0

document.querySelector('a-scene').addEventListener('renderstart', function(){
  document.querySelectorAll('a-box').forEach(function (elem) {
    elem.addEventListener('collide', function(evt) {
      const BALL_ID = document.getElementById('ball').body.id
      if (evt.detail.body.id !== BALL_ID) return
      console.log("score");
      scoreboard.setAttribute('text-geometry', {value: ++score})
    })
  })
})
