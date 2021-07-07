const imgs = document.getElementById('imgs')
const prevButton = document.getElementById('left')
const nextButton = document.getElementById('right')

const imgContent = document.querySelectorAll('#imgs img')

let index = 0
let interval = setInterval(run, 2000)

function run () {
  index++
  changeImage()
}

function changeImage () {
  if (index > imgContent.length - 1) index = 0
  else if (index < 0) index = imgContent.length - 1

  imgs.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000);
}

nextButton.addEventListener('click', () => {
  index++
  changeImage()
  resetInterval()
})

prevButton.addEventListener('click', () => {
  index--
  changeImage()
  resetInterval()
})

