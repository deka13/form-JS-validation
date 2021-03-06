const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form-input');
const password = document.querySelector('.form-password');
const errors = document.querySelectorAll('.error');

const isValidName = (nameExample) => /^[a-zA-Zа-яА-ЯЁё]{2,43}$/.test(nameExample);

const isValidEmail = (emailExample) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emailExample);

const isValidPassword = (passwordExample) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(passwordExample);

const arePasswordsMatch = (passwordConfirmation) => password.value === passwordConfirmation;

const getAge = (date) => {
  const dateArr = date.split('-');
  const [year, month, day] = dateArr;
  const today = new Date();
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth();
  const thisDay = today.getDate();
  const correctedMonth = month - 1;
  let delta = 0;
  if (thisMonth < correctedMonth) {
    delta = 1;
  } else if (thisMonth === correctedMonth && thisDay < day) {
    delta = 1;
  }
  return thisYear - year - delta;
};

const isAdult = (date) => {
  if (!date) {
    return false;
  }
  const userAge = getAge(date);
  return userAge >= 18;
};

const addError = (field, index) => {
  field.classList.add('input-error');
  errors[index].classList.remove('hidden');
  errors[index].classList.add('visible');
};

const isSuccess = (field, index) => {
  field.classList.remove('input-error');
  errors[index].classList.remove('visible');
  errors[index].classList.add('hidden');
};

// eslint-disable-next-line max-len
const functions = [isValidName, isValidName, isValidEmail, isAdult, isValidPassword, arePasswordsMatch];

for (let i = 0; i < inputs.length; i += 1) {
  inputs[i].addEventListener('blur', () => {
    if (!functions[i](inputs[i].value)) {
      addError(inputs[i], i);
    } else {
      isSuccess(inputs[i], i);
    }
  });
}

form.addEventListener('submit', (evt) => {
  for (let i = 0; i < inputs.length; i += 1) {
    if (!functions[i](inputs[i].value)) {
      evt.preventDefault();
      addError(inputs[i], i);
    }
  }
});
