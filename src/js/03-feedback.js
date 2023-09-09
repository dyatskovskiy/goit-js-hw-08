import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageTextArea = document.querySelector('.feedback-form textarea');

//Слухачі подій
emailInput.addEventListener('input', throttle(onFormInput, 500));
messageTextArea.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

populateTextArea();

// Запис в локальне сховище даних з інпутів
function onFormInput(evt) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: emailInput.value,
      message: messageTextArea.value,
    })
  );
}

//Заповнення полів форми збереженими даними за наявності таких даних
function populateTextArea() {
  if (savedData) {
    emailInput.value = savedData.email;
    messageTextArea.value = savedData.message;
  }
}

// Перезавантаження форми при сабміті
function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(savedData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
