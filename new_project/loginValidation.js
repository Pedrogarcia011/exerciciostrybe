function sum(a, b) {
  return a + b;
};

function sub(a, b) {
  return a - b;
};

function multi(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Divisao por zero')
  }
  
  return a / b;
}

module.exports = {sum, sub, multi, div};