const form = document.querySelector('.form');
const name = document.querySelector('.form-name');
const surname = document.querySelector('.form-surname');
const email = document.querySelector('.form-email');
const birthDate = document.querySelector('.form-birth-date');
const password = document.querySelector('.form-password');
const passwordConfirm = document.querySelector('.form-password-confirm');
const errors = document.querySelectorAll('.error');

const isValidName = (nameExample) => /^[a-zA-Zа-яА-ЯЁё]{2,43}$/.test(nameExample);

const isValidEmail = (emailExample) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emailExample);

const isValidPassword = (passwordExample) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(passwordExample);

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

const isAdult = (age) => age >= 18;

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

name.onblur = () => {
  if (!isValidName(name.value)) {
    addError(name, 0);
  } else {
    isSuccess(name, 0);
  }
};

surname.onblur = () => {
  if (!isValidName(surname.value)) {
    addError(surname, 1);
  } else {
    isSuccess(surname, 1);
  }
};

email.onblur = () => {
  if (!isValidEmail(email.value)) {
    addError(email, 2);
  } else {
    isSuccess(email, 2);
  }
};

birthDate.onblur = () => {
  const birthDateValue = birthDate.value;
  const userAge = getAge(birthDateValue);
  if (!isAdult(userAge) || !birthDate.value) {
    addError(birthDate, 3);
  } else {
    isSuccess(birthDate, 3);
  }
};

password.onblur = () => {
  if (!isValidPassword(password.value)) {
    addError(password, 4);
  } else {
    isSuccess(password, 4);
  }
};

passwordConfirm.onblur = () => {
  if (password.value !== passwordConfirm.value) {
    addError(passwordConfirm, 5);
  } else {
    isSuccess(passwordConfirm, 5);
  }
};

form.addEventListener('submit', (evt) => {
  if (!isValidName(name.value)) {
    evt.preventDefault();
    addError(name, 0);
  } else if (!isValidName(surname.value)) {
    evt.preventDefault();
    addError(surname, 1);
  } else if (!isValidEmail(email.value)) {
    evt.preventDefault();
    addError(email, 2);
  } else if (!birthDate.value || !isAdult(getAge(birthDate.value))) {
    evt.preventDefault();
    addError(birthDate, 3);
  } else if (!isValidPassword(password.value)) {
    evt.preventDefault();
    addError(password, 4);
  } else if (password.value !== passwordConfirm.value) {
    evt.preventDefault();
    addError(passwordConfirm, 5);
  }
});
