const toggleButton = document.querySelector('.main-nav__toggle');

const onToggleButtonClick = () => {
  toggleButton.classList.toggle('main-nav__toggle--open');
};

toggleButton.addEventListener('click', onToggleButtonClick);
