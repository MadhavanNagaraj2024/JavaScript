function iterator(arr) {
  let index = 0;

  return {
    next: function () {
      if (arr.length) {
        return {
          value: arr[index++],
          done: false,
        };
      } else {
        return {
          value: null,
          done: true,
        };
      }
    },
  };
}

const arr = [1, 2, 3, 4];
const it = iterator(arr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/*  
    { value: 1, done: false }
    { value: 2, done: false }
    { value: 3, done: false }
    { value: 4, done: false }
    { value: undefined, done: false }
*/

// simple iterator

const arr1 = [1, 2, 3];

const iterator = arr1[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
