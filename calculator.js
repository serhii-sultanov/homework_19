let result = 0;

function set(initialValue) {
  return (result = initialValue);
}

function add(valueToSum) {
  return (result += valueToSum);
}

function sub(valueToSubstract) {
  return (result -= valueToSubstract);
}

function mult(valueToMultiply) {
  return (result *= valueToMultiply);
}

function div(valueToDivide) {
  return (result /= valueToDivide);
}

function getValue() {
  return result;
}

module.exports = {
  set,
  add,
  sub,
  mult,
  div,
  getValue,
};
