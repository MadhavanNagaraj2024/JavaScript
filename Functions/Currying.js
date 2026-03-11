// Normal Approuch

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

// Curring Technique

function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(2)(3)); // 5

// Arrow Function Version

const addingResult = (a) => (b) => a + b;

console.log(addingResult(2)(3)); // 5
