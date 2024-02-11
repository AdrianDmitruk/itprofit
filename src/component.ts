// import Inputmask from 'inputmask';

// interface FormValidator {
//   validateForm: (form: HTMLFormElement) => boolean;
// }

// const FormValidator: FormValidator = (function () {
//   const showError = function (input: HTMLInputElement, message: string) {
//     const errorElement = document.createElement('div');
//     errorElement.className = 'error-message';
//     errorElement.innerText = message;

//     const parent = input.parentElement!;
//     parent.appendChild(errorElement);

//     input.classList.add('error-border');
//   };

//   const clearError = function (input: HTMLInputElement) {
//     const parent = input.parentElement!;
//     const errorElement = parent.querySelector('.error-message');

//     if (errorElement) {
//       parent.removeChild(errorElement);
//     }

//     input.classList.remove('error-border');
//   };

//   const validateEmail = function (email: string) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateForm = function (form: HTMLFormElement): boolean {
//     const inputs = form.querySelectorAll('.input');

//     let isValid = true;

//     inputs.forEach(function (input) {
//       clearError(input as HTMLInputElement);

//       if (
//         input.hasAttribute('required') &&
//         (input as HTMLInputElement).value.trim() === ''
//       ) {
//         showError(
//           input as HTMLInputElement,
//           'Это поле обязательно к заполнению'
//         );
//         isValid = false;
//       }

//       if (
//         input.classList.contains('input-email') &&
//         !validateEmail((input as HTMLInputElement).value)
//       ) {
//         showError(
//           input as HTMLInputElement,
//           'Введите корректный адрес электронной почты'
//         );
//         isValid = false;
//       }

//       if (input.classList.contains('input-phone')) {
//         const phoneMask = new Inputmask('+7 (999) 999-99-99');
//         phoneMask.mask(input as HTMLInputElement);
//       }
//     });

//     return isValid;
//   };

//   return {
//     validateForm: validateForm,
//   };
// })();

// // ... (остальной код)
