interface ModalButton extends HTMLButtonElement {
  id: 'openModalBtn';
}

interface CloseButton extends HTMLSpanElement {
  id: 'closeModalBtn';
}

interface Modal extends HTMLDivElement {
  id: 'modal';
}

interface ModalContent extends HTMLDivElement {
  className: 'modal-content';
}

const openModalBtn: ModalButton = document.getElementById(
  'openModalBtn'
) as ModalButton;
const closeModalBtn: CloseButton = document.getElementById(
  'closeModalBtn'
) as CloseButton;
const modal: Modal = document.getElementById('modal') as Modal;

openModalBtn.addEventListener('click', function () {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', function () {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});
