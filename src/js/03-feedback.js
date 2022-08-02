import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(formInput, 500));
form.addEventListener('submit', formSubmit);


function formInput(event) {
  event.preventDefault();
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify,
    form.elements.message.value,
    form.elements.email.value
  );
}

function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  localStorage.clear();
}

function formData() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedMessage) {
    input.value = savedMessage.email;
    textarea.value = savedMessage.message;
  }
}
