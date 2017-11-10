/*
* This code has been created by following Martin Splitts Tutorial on Youtube.
* I followed Martin's code very closely because I had issues making it work:
* The original code is here: https://github.com/archilogic-com/office-bowling
*/


const scene = document.querySelector('a-scene')
const scoreboard = document.getElementById('scoreboard')
const SCORE_TEXT_LEN = 3
const ball = document.getElementById('ball')
let score = 0

scene.addEventListener('renderstart', function () {

  window.addEventListener('gripup', () => {
    ball.removeAttribute('dynamic-body')
    pos.y = 0.5
    ball.setAttribute('position', pos)
    ball.setAttribute('dynamic-body', 'mass: 1000; shape: sphere; sphereRadius: 0.2')
  })

  io3d.scene.getAframeElements('ce14d1f1-cdef-474d-8a84-19157b4c2953')
  .then(function (elements) {
    elements
    .filter(function(elem) { return !elem.hasAttribute('camera') })
    .forEach(function (elem) {
      elem.setAttribute('position', '0 0 1')
      elem.setAttribute('rotation', '0 180 0')
      prepareFurniture(elem)
      document.getElementById('holder').appendChild(elem)
    })
  })
})

function prepareFurniture(elem) {
  if (elem.hasAttribute('io3d-furniture')) {
    elem.setAttribute('dynamic-body', 'mass: 2; shape: box')
    elem.addEventListener('collide', onCollide)
  }

  if (elem.children.length > 0) {
    Array.from(elem.children).forEach(prepareFurniture)
  }
}

function onCollide(evt) {
  const BALL_ID = document.getElementById('ball').body.id
  if (evt.detail.body.id !== BALL_ID) return

  this.removeEventListener('collide', onCollide)

  scoreboard.setAttribute('text-geometry', { value: ++score })
}
