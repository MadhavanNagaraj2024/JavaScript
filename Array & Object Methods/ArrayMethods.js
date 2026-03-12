// Array.map()

const map = [1, 2, 3, 4];

const newMap = arr.map((value, index) => {
  return { key: index, value: value };
});

console.log(newMap);

// Array.filter()

const filter = [1, 2, 3, 4];

const newFilter = filter.filter((value) => value % 2 === 0);

console.log(newFilter);

// Array.reduce()

const reduce = [1, 2, 3, 4];

const newReduce = reduce.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(newReduce);

// Array.some()

const some = [1, 2, 3, 4];

const newSome = some.some((val) => val > 3);

console.log(newSome); // true

// Array.every()

const every = [1, 2, 3, 4];

const newEvery = every.every((val) => val < 10);

console.log(newEvery); // true

// Array.find()

const find = [
  {
    name: "Madhavan",
    age: 25,
  },
  {
    name: "Tommy",
    age: 26,
  },
  {
    name: "Maddy",
    age: 23,
  },
];

const newResult = find.find((val) => val.age > 22);

console.log(newResult); // { name: 'Madhavan', age: 25 }

//Array.flat()

const flat = [1, 2, [3, 4], [5, [6]], 7, 8];

const oneArr = flat.flat();

console.log(oneArr); // [ 1, 2, 3, 4, 5, [ 6 ], 7, 8 ]

const flat1 = [1, 2, [3, 4], [5, [6]], 7, 8];

const oneArr1 = flat1.flat(Infinity);

console.log(oneArr1); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Arr.flatMap()

const flatmap = [1, 2, 3, 4];

const flatArr = flatmap.flatMap((arr) => [arr, arr * 2]);

console.log(flatArr); // [ 1, 2, 2, 4, 3, 6, 4, 8 ]
