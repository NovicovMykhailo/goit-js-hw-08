import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const submitBtnEl = document.querySelector('button');
const tempFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

let formData = {
  message: '',
  email: '',
};

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

//recalling form values

if (tempFormData) {
  if (!tempFormData.email) {
    formEl[0].value = '';
  } else {
    formEl[0].value = tempFormData.email;
  }

  if (!tempFormData.message) {
    formEl[1].value = '';
  } else {
    formEl[1].value = tempFormData.message;
  }
}

//input callback
function onInput(e) {
  e.preventDefault();
  if (localStorage.getItem('feedback-form-state') === null) {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    return;
  }

  if (e.target.name === 'email') {
    formData.email = e.target.value;
  }

  if (e.target.name === 'message') {
    formData.message = e.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));

  formData.email = tempFormData.email;
  formData.message = tempFormData.message;
}

//submit callback
function onSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  localStorage.removeItem('feedback-form-state');
  formEl[0].value = '';
  formEl[1].value = '';
}

// Submitting the form by pressing the "Enter" key

window.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitBtnEl.click();
  }
});
