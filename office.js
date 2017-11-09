console.log("hallo")

const scene = document.querySelector('a-scene');
const scoreboard = document.getElementById('scoreboard')
let score = 0

scene.addEventListener('renderstart', function(){

  io3d.scene.getAframeElements('ce14d1f1-cdef-474d-8a84-19157b4c2953')
    .then(function(elements) {
      elements
      //.filter(function(elem) {return !elem.hasAttribute('camera')})
      .forEach( function(elem) {
        scene.appendChild(elem);
      })
    })

  document.querySelectorAll('a-box').forEach(function (elem) {
    elem.addEventListener('collide', function(evt) {
      const BALL_ID = document.getElementById('ball').body.id
      if (evt.detail.body.id !== BALL_ID) return
      console.log("score");
      scoreboard.setAttribute('text-geometry', {value: ++score})
    })
  })
})
