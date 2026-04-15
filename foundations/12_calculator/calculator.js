const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acumulador, atual) => {
    return acumulador + atual;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acumulador, atual) => {
    return acumulador * atual;
  }, 1);
};

const power = function (base, expoente) {
  return base ** expoente;
};

const factorial = function (num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
