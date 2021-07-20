const openButton = document.querySelector('.open-btn')
const closeButton = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

openButton.addEventListener('click', () => {
  nav.forEach(item => item.classList.add('visible'))
})

closeButton.addEventListener('click', () => {
  nav.forEach(item => item.classList.remove('visible'))
})
