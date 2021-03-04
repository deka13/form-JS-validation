export const isAdult = (age) => age >= 18;

export const getAge = (year, month, day) => {
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
