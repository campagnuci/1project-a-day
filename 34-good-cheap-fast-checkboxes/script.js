const toggles = document.querySelectorAll('.toggle')
const cheap = document.getElementById('cheap')
const good = document.getElementById('good')
const fast = document.getElementById('fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(clicked) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clicked) {
      fast.checked = false
    }

    if (cheap === clicked) {
      good.checked = false
    }

    if (fast === clicked) {
      cheap.checked = false
    }
  }
}
