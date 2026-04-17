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

// modal

import checkIcon from '../assets/icons/check-icon.svg';
import crossIcon from '../assets/icons/cross-icon.svg';

const modal = document.getElementById('modal');
const modalHeading = document.getElementById('modal-heading');
const modalText = document.getElementById('modal-text');
const modalImg = document.querySelector('.modal__content img');
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

  modalImg.alt = type === 'success' ? 'Success' : 'Error';
  modalImg.src = icons[type];
}

function hideModal() {
  modal.classList.remove('show');
  document.body.classList.remove('lock');
}

closeButton.addEventListener('click', hideModal);

closeIcon.addEventListener('click', hideModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) hideModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideModal();
});

// form

import emailjs from '@emailjs/browser';

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

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
        message: 'Please try again later ✖',
      });
      console.error('Error:', error);
    });
});
