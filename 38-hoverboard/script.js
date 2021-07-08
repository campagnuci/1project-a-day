const container = document.getElementById('container')

const colors = [
  '#6d55f9',
  '#77a9b8',
  '#e06a9f',
  '#c76e28',
  '#71ae0b',
  '#2c9341',
  '#d00201',
  '#65734f',
  '#18e675',
  '#16d03f',
  '#0af368',
  '#915b4b',
  '#e3ee8b',
  '#eab2f0',
  '#52ed0a'
]

const SQUARES = 396

for (let i = 0; i < SQUARES; i++) {
  const element = document.createElement('div')
  element.classList.add('square')

  element.addEventListener('mouseover', () => setColor(element))
  element.addEventListener('mouseout', () => removeColor(element))

  container.appendChild(element)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1D1D1D'
  element.style.boxShadow = '0 0 2px #000000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
