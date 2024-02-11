interface ErrorResponse {
  status: 'error';
  fields: { [fieldName: string]: string };
}

interface SuccessResponse {
  status: 'success';
  msg: string;
}

type FormResponse = ErrorResponse | SuccessResponse;

export function sendForm(
  formId: string,
  url: string,
  messageDivId: string
): void {
  const form = document.getElementById(formId) as HTMLFormElement;
  const messageDiv = document.getElementById(messageDivId) as HTMLDivElement;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data: FormResponse) => handleResponse(data))
      .catch((error) => console.error(error));
  });

  function handleResponse(response: FormResponse): void {
    if (response.status === 'success') {
      clearFormFields(form);
      showMessage(response.msg);
    } else if (response.status === 'error') {
      showFieldErrors(response.fields);
    }
  }

  function clearFormFields(form: HTMLFormElement): void {
    const inputs = form.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement
    >('input, textarea');
    inputs.forEach((input) => (input.value = ''));
  }

  function showMessage(message: string): void {
    messageDiv.innerHTML = '';
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageDiv.appendChild(messageElement);
  }

  function showFieldErrors(fields: { [fieldName: string]: string }): void {
    messageDiv.innerHTML = '';

    for (const fieldName in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, fieldName)) {
        const errorMessage = fields[fieldName];
        const errorDiv = document.createElement('div');
        errorDiv.textContent = `Ошибка в поле ${fieldName}: ${errorMessage}`;
        messageDiv.appendChild(errorDiv);
      }
    }
  }
}
