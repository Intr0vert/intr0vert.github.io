const MENU_ACTIVE = 'menu-active';

const menu = document.getElementById('menu-mobile');

const burgerButton = document.querySelector('.burger-icon');
const closeButton = document.querySelector('.burger-close-icon');

burgerButton.addEventListener('click', () => {
  document.body.classList.add('scrollOff')

  burgerButton.classList.add(MENU_ACTIVE)
  closeButton.classList.add(MENU_ACTIVE)

  menu.classList.add(MENU_ACTIVE);
})

closeButton.addEventListener('click', () => {
  document.body.classList.remove('scrollOff')

  burgerButton.classList.remove(MENU_ACTIVE)
  closeButton.classList.remove(MENU_ACTIVE)

  menu.classList.remove(MENU_ACTIVE)
})