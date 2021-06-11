const hourPointer = document.querySelector('.hour')
const minutePointer = document.querySelector('.minute')
const secondPointer = document.querySelector('.second')
const timeElement = document.querySelector('.time')
const date = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if(html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dark Mode'
  } else {
    html.classList.add('dark')
    e.target.innerHTML = 'Light Mode'
  }
})

function setTime() {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const dayNumber = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  hourPointer.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
  minutePointer.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
  secondPointer.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

  timeElement.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`

  date.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${dayNumber}</span>`
}

setInterval(setTime, 1000);
