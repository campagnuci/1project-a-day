const progress = document.getElementById('progress');
const previousButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  if(currentActive > circles.length) currentActive = circles.length;
  updateCircles();
})

prev.addEventListener('click', () => {
  currentActive--;
  if(currentActive < 1) currentActive = 1;
  updateCircles();
})


const updateCircles = () => {
  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

  const actives = document.querySelectorAll('.active');
  progress.style.width = ((actives.length-1) / (circles.length-1)) * 100 + '%';
  if(currentActive === 1) {
    previousButton.disabled = true;
  } else if(currentActive === circles.length) {
    nextButton.disabled = true;
  } else {
    previousButton.disabled = false;
    nextButton.disabled = false;
  }
}
