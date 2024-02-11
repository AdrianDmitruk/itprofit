import { form } from './form';

export function validateForm() {
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const phoneInput = document.getElementById('phone') as HTMLInputElement;
  const messageInput = document.getElementById(
    'message'
  ) as HTMLTextAreaElement;

  clearErrorStyles(nameInput);
  clearErrorStyles(emailInput);
  clearErrorStyles(phoneInput);
  clearErrorStyles(messageInput);

  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const message = messageInput.value;

  if (!name) {
    showError(nameInput, 'Введите ваше имя');
  }

  if (!email) {
    showError(emailInput, 'Введите ваш email');
  }

  if (!phone) {
    showError(phoneInput, 'Введите ваш телефон');
  }

  if (!message) {
    showError(messageInput, 'Введите ваше сообщение');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    showError(emailInput, 'Введите адрес электронной почты');
  }

  if (form.querySelectorAll('.error').length > 0) {
    return;
  }

  form.reset();
}

export function showError(
  input: HTMLInputElement | HTMLTextAreaElement,
  errorMessage: string
) {
  const errorContainer = document.createElement('div');
  errorContainer.className = 'errorMessage';
  errorContainer.textContent = errorMessage;

  const inputContainer = document.getElementById(input.id + '-container');
  if (inputContainer) {
    inputContainer.appendChild(errorContainer);
  }

  input.classList.add('error');
}

export function clearErrorStyles(
  input: HTMLInputElement | HTMLTextAreaElement
) {
  const errorContainer = input.parentElement?.querySelector('.errorMessage');
  if (errorContainer) {
    input.parentElement?.removeChild(errorContainer);
  }

  input.classList.remove('error');
}
