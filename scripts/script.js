// burger menu

const MOBILE_BREAKPOINT = 768;

const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const links = document.querySelectorAll('.header__link');

function closeMenu() {
  header.classList.remove('active');
  burger.classList.remove('active');
  menu.classList.remove('active');
  document.body.classList.remove('lock');
}

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

const STAR_COUNT = 80;
const STAR_SIZE = 1;
const STAR_SIZE_VARIATION = 3;

const MAX_DURATION = 4;
const MIN_DURATION = 2;
const MAX_DELAY = 5;

const starfield = document.getElementById('starfield');

for (let index = 0; index < STAR_COUNT; index++) {
  const star = document.createElement('div');
  star.classList.add('star');

  const size = Math.random() * STAR_SIZE_VARIATION + STAR_SIZE;

  const left = Math.random() * (100 - size);
  const top = Math.random() * (100 - size);

  const duration = (Math.random() * MAX_DURATION + MIN_DURATION).toFixed(1);

  const delay = (Math.random() * MAX_DELAY).toFixed(1);

  star.style.left = left + '%';
  star.style.top = top + '%';
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.setProperty('--duration', duration + 's');
  star.style.setProperty('--delay', delay + 's');

  starfield.append(star);
}

// modal

import checkIcon from '../assets/icons/check-icon.svg';
import crossIcon from '../assets/icons/cross-icon.svg';

const modal = document.getElementById('modal');
const modalHeading = document.getElementById('modal-heading');
const modalText = document.getElementById('modal-text');
const modalImage = document.querySelector('.modal__content img');
const closeButton = document.getElementById('modal-close');
const closeIcon = document.getElementById('close-icon');

const icons = {
  success: checkIcon,
  error: crossIcon,
};

function showModal({ type, title, message }) {
  modal.classList.add('show');
  document.body.classList.add('lock');

  modalHeading.textContent = title;
  modalText.textContent = message;

  modalImage.alt = type === 'success' ? 'Success' : 'Error';
  modalImage.src = icons[type];
}

function hideModal() {
  modal.classList.remove('show');
  document.body.classList.remove('lock');
}

closeButton.addEventListener('click', hideModal);

closeIcon.addEventListener('click', hideModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideModal();
  }
});

// form

import emailjs from '@emailjs/browser';

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  emailjs
    .sendForm('service_97fgd48', 'template_u4qq9jc', this, '3MmIo83jDJ5Rk45da')
    .then(() => {
      showModal({
        type: 'success',
        title: 'Message sent',
        message: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    })
    .catch((error) => {
      showModal({
        type: 'error',
        title: 'Something went wrong',
        message: 'Please try again later',
      });
      console.error('Error:', error);
    });
});
