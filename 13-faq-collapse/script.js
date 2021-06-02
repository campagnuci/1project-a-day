const buttons = document.querySelectorAll('.faq__toggle');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentNode.classList.toggle('active');
  });
});
