//receives an array, and the callback perform an operation
//
function reduce(array, callback, initialValue) {
  let acumulator = initialValue ? initialValue : array[0];
  let i = initialValue ? 0 : 1;

  for (; i < array.length; i++) {
    acumulator = callback(acumulator, array[i])
  }
  return acumulator
}

function add(total, current) {
  return total + current;
}

function concat(resultArray, currentArray) {
  return resultArray.concat(currentArray);
}

const array = [1, 2, 3]
const arrayOfArrays = [[1,2], [3, 4]]

// firstElement = 1
// acumulator = 1
// result = 3

// acumulator = 3
// result = 6

// acumulator = 6
