function memoizon(fn) {
  const cache = {};

  return function (n) {
    if (cache[n]) {
      return cache[n];
    }

    const result = fn(n);
    cache[n] = result;

    return result;
  };
}

function myFunction(n) {
  console.log("Calculating...!");
  return n * n;
}

const ans = memoizon(myFunction);

console.log(ans(5));
console.log(ans(5));
console.log(ans(5));
