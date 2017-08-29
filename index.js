function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return multiplierValue * value;
  }
}

function multiplier(number1, number2) {
  return number1 * number2;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
