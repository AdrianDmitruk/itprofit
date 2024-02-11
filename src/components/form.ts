import { clearErrorStyles, validateForm } from './formValidation';
import initializeInputMask from './inputmask';

export const form = document.getElementById('contactForm') as HTMLFormElement;

document.addEventListener('DOMContentLoaded', function () {
  initializeInputMask();

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    validateForm();

    const response = await sendFormData(formData);
    const jsonData = await response.json();

    const successMessageElement = createMessageElement('successMessage');
    const errorMessageElement = createMessageElement('errorMessage');

    if (response.ok) {
      form.reset();
      successMessageElement.textContent = jsonData.message;
    } else {
      errorMessageElement.textContent = jsonData.error;
    }

    form.appendChild(successMessageElement);
    form.appendChild(errorMessageElement);

    setTimeout(() => {
      form.removeChild(successMessageElement);
      form.removeChild(errorMessageElement);
    }, 5000);
  });

  const inputElements = form.querySelectorAll('.input');
  inputElements.forEach((input) => {
    input.addEventListener('input', function () {
      clearErrorStyles(input as HTMLInputElement);
    });
  });
});

async function sendFormData(formData: FormData): Promise<Response> {
  const url = 'http://localhost:9090/api/registration';
  const options = {
    method: 'POST',
    body: formData,
  };

  return await fetch(url, options);
}

function createMessageElement(id: string): HTMLDivElement {
  const messageElement = document.createElement('div');
  messageElement.id = id;
  messageElement.classList.add('message');
  return messageElement;
}
