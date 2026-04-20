import checkIcon from '../../../assets/icons/check-icon.svg';
import crossIcon from '../../../assets/icons/cross-icon.svg';

const icons = {
  success: checkIcon,
  error: crossIcon,
};

let modal, modalHeading, modalText, modalImage;

export function initModal() {
  modal = document.getElementById('modal');
  modalHeading = document.getElementById('modal-heading');
  modalText = document.getElementById('modal-text');
  modalImage = document.querySelector('.modal__content img');
  const closeButton = document.getElementById('modal-close');
  const closeIcon = document.getElementById('close-icon');

  const hideModal = () => {
    modal.classList.remove('show');
    document.body.classList.remove('lock');
  };

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
}

export function showModal({ type, title, message }) {
  modal.classList.add('show');
  document.body.classList.add('lock');

  modalHeading.textContent = title;
  modalText.textContent = message;

  modalImage.alt = type;
  modalImage.src = icons[type];
}
