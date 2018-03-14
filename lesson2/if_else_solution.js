function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else if (num1 == num2) {
    return num2;
  }
}
console.log(reaterNum(10, 1));

function helloWorld(lang) {
  if (lang == 'en') {
    return 'Hello';
  } else if (lang == 'es') {
    return 'Hola';
  } else if (lang == 'ru') {
    return 'Привет';
  } else if (lang == 'default') {
    return 'Привет';
  }
}
helloWorld('en');

function assignGrade(score) {
  if (score <= 20) {
    return 1;
  } else if (score <= 40) {
    return 2;
  } else if (score <= 60) {
    return 3;
  }else if(score <= 80) {
    return 4;
  } else if (score <= 100) {
    return 5;
  }
}

assignGrade(45);
