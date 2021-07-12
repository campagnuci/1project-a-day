const background = document.getElementById('background')
const password = document.getElementById('password')

password.addEventListener('input', (e) => {
  e.preventDefault();
  const input = e.target.value
  const blur = (20 - input.length * 2)

  background.style.filter = `blur(${blur}px)`

})
