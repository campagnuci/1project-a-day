const buttons = document.querySelector('.buttons');
const btns = buttons.querySelectorAll('.btn');
const content = document.getElementById('content');

btns.forEach((button, index) => {
  button.addEventListener('click', () => {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace("active", "");
    button.className += " active";

    if (index === 0) content.style.fontSize = '0.5em';
    else if (index === 1) content.style.fontSize = '1em';
    else if (index === 2) content.style.fontSize = '1.5em';
  })
});
