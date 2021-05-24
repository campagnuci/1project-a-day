const buttons = document.querySelectorAll('.btn');
const content = document.getElementById('content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace("active", "");
    button.className += " active";

    if (index === 0) content.style.fontSize = '0.75em';
    else if (index === 1) content.style.fontSize = '1em';
    else if (index === 2) content.style.fontSize = '1.25em';
  })
});
