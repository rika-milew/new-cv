import emailjs from '@emailjs/browser';
import { showModal } from './modal.js';

export function initForm() {
  const form = document.getElementById('contact-form');

  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    emailjs
      .sendForm('service_97fgd48', 'template_u4qq9jc', form, '3MmIo83jDJ5Rk45da')
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
        console.error(error);
      });
  });
}
