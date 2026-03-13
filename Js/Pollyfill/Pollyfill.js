Array.prototype.Maddy = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

const arr = [1, 2, 3, 4];

const mapResult = arr.Maddy((a) => a * 2);

console.log(mapResult);
