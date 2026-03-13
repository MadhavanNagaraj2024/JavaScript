// Filter Function

const arrElements = [1, 2, 3, 4, 5];

const evenNumbers = arrElements.filter((element) => element % 2 === 0);

console.log(evenNumbers); // [ 2, 4 ]

// Internally Work Flow

function myFilter(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(myFilter([1, 2, 3, 4], (n) => n % 2 === 0)); // [ 2, 4 ]


