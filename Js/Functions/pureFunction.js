// Pure Functions

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3));
console.log(multiply(2, 3));

// Side Effects

let counter = 0;

function increment() {
  counter++;
}

increment();
increment();

console.log(counter);
