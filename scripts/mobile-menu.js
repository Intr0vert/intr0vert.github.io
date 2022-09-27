const MENU_ACTIVE = 'menu-active';

const menu = document.getElementById('menu-mobile');

const burgerButton = document.querySelector('.burger-icon');

burgerButton.addEventListener('click', () => {
  document.body.classList.add('scrollOff')

  const isActive = burgerButton.classList.contains(MENU_ACTIVE)

  if (isActive) {
    burgerButton.classList.remove(MENU_ACTIVE);

    menu.classList.remove(MENU_ACTIVE);

    return;
  }

  burgerButton.classList.add(MENU_ACTIVE);

  menu.classList.add(MENU_ACTIVE);
})