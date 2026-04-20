const MOBILE_BREAKPOINT = 768;

export function initMenu() {
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const links = document.querySelectorAll('.header__link');

  const closeMenu = () => {
    header.classList.remove('active');
    burger.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('lock');
  };

  burger.addEventListener('click', (event) => {
    event.stopPropagation();

    header.classList.toggle('active');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
  });

  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  links.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    const isMenuClicked = menu.contains(event.target);
    const isBurgerClicked = burger.contains(event.target);

    if (!isMenuClicked && !isBurgerClicked) {
      closeMenu();
    }
  });

  function setMenu() {
    if (window.innerWidth > MOBILE_BREAKPOINT && burger.classList.contains('active')) {
      closeMenu();
    }
  }

  window.addEventListener('resize', setMenu);
}
