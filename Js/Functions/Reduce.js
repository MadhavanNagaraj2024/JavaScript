const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue, index, arr) => {
  console.log(
    `accumulator ${accumulator} , currentValue ${currentValue} , Index ${index} , array ${arr}`,
  );
}, 0);

console.log(sum);

/* Output : 
accumulator 0 , currentValue 1 , Index 0 , array 1,2,3,4
accumulator undefined , currentValue 2 , Index 1 , array 1,2,3,4
accumulator undefined , currentValue 3 , Index 2 , array 1,2,3,4
accumulator undefined , currentValue 4 , Index 3 , array 1,2,3,4
undefined */

// Internal Work FLow

function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}
