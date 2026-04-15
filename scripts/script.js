// burger menu

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const links = document.querySelectorAll('.header__link');

function closeMenu() {
  burger.classList.remove('active');
  menu.classList.remove('active');
  document.body.classList.remove('lock');
}

burger.addEventListener('click', (event) => {
  event.stopPropagation();
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
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnBurger = burger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnBurger) {
    closeMenu();
  }
});

function setMenu() {
  if (window.innerWidth > 768 && burger.classList.contains('active')) {
    closeMenu();
  }
}

window.addEventListener('resize', setMenu);

// sections

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

sections.forEach((section) => {
  observer.observe(section);
});

// stars

const starfield = document.getElementById('starfield');
const STAR_COUNT = 80;

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  const left = Math.random() * 100;
  const top = Math.random() * 100;

  const size = Math.random() * 3 + 1;

  const duration = (Math.random() * 4 + 2).toFixed(1);

  const delay = (Math.random() * 5).toFixed(1);

  star.style.left = left + '%';
  star.style.top = top + '%';
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.setProperty('--duration', duration + 's');
  star.style.setProperty('--delay', delay + 's');

  starfield.appendChild(star);
}
