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

name.onblur = () => {
  if (!isValidName(name.value)) {
    name.classList.add('input-error');
    errors[0].classList.remove('hidden');
    errors[0].classList.add('visible');
  } else {
    name.classList.remove('input-error');
    errors[0].classList.remove('visible');
    errors[0].classList.add('hidden');
  }
};

surname.onblur = () => {
  if (!isValidName(surname.value)) {
    surname.classList.add('input-error');
    errors[1].classList.remove('hidden');
    errors[1].classList.add('visible');
  } else {
    surname.classList.remove('input-error');
    errors[1].classList.remove('visible');
    errors[1].classList.add('hidden');
  }
};

email.onblur = () => {
  if (!isValidEmail(email.value)) {
    email.classList.add('input-error');
    errors[2].classList.remove('hidden');
    errors[2].classList.add('visible');
  } else {
    email.classList.remove('input-error');
    errors[2].classList.remove('visible');
    errors[2].classList.add('hidden');
  }
};

birthDate.onblur = () => {
  const birthDateValue = birthDate.value;
  const userAge = getAge(birthDateValue);
  if (!isAdult(userAge) || !birthDate.value) {
    birthDate.classList.add('input-error');
    errors[3].classList.remove('hidden');
    errors[3].classList.add('visible');
  } else {
    birthDate.classList.remove('input-error');
    errors[3].classList.remove('visible');
    errors[3].classList.add('hidden');
  }
};

password.onblur = () => {
  if (!isValidPassword(password.value)) {
    password.classList.add('input-error');
    errors[4].classList.remove('hidden');
    errors[4].classList.add('visible');
  } else {
    password.classList.remove('input-error');
    errors[4].classList.remove('visible');
    errors[4].classList.add('hidden');
  }
};

passwordConfirm.onblur = () => {
  if (password.value !== passwordConfirm.value) {
    passwordConfirm.classList.add('input-error');
    errors[5].classList.remove('hidden');
    errors[5].classList.add('visible');
  } else {
    passwordConfirm.classList.remove('input-error');
    errors[5].classList.remove('visible');
    errors[5].classList.add('hidden');
  }
};

form.addEventListener('submit', (evt) => {
  if (!isValidName(name.value)) {
    evt.preventDefault();
    name.classList.add('input-error');
    errors[0].classList.remove('hidden');
    errors[0].classList.add('visible');
  } else if (!isValidName(surname.value)) {
    evt.preventDefault();
    surname.classList.add('input-error');
    errors[1].classList.remove('hidden');
    errors[1].classList.add('visible');
  } else if (!isValidEmail(email.value)) {
    evt.preventDefault();
    email.classList.add('input-error');
    errors[2].classList.remove('hidden');
    errors[2].classList.add('visible');
  } else if (!birthDate.value || !isAdult(getAge(birthDate.value))) {
    evt.preventDefault();
    birthDate.classList.add('input-error');
    errors[3].classList.remove('hidden');
    errors[3].classList.add('visible');
  } else if (!isValidPassword(password.value)) {
    evt.preventDefault();
    password.classList.add('input-error');
    errors[4].classList.remove('hidden');
    errors[4].classList.add('visible');
  } else if (password.value !== passwordConfirm.value) {
    evt.preventDefault();
    passwordConfirm.classList.add('input-error');
    errors[5].classList.remove('hidden');
    errors[5].classList.add('visible');
  }
});
