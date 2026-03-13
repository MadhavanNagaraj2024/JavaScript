let arr = [1, 2, 3, 4, 5];

arr.map((elements, index, array) => {
  console.log(`${elements} in ${index}th Index ${array}`);
});

/* Output :

1 in 0th Index 1,2,3,4,5
2 in 1th Index 1,2,3,4,5
3 in 2th Index 1,2,3,4,5
4 in 3th Index 1,2,3,4,5
5 in 4th Index 1,2,3,4,5 

*/

const numbers = [10, 20, 30];

const result = numbers.map((num, index) => {
  return num + index;
});

console.log(result);

// Map Function

const products = [
  {
    product: "T-Shirt",
    price: 499,
  },
  {
    product: "Trousers",
    price: 799,
  },
  {
    product: "Formal Shirt",
    price: 599,
  },
];

const modifiedKeys = products.map((values, key) => {
  return {
    productName: values.product,
    ProductPrice: values.price,
    productNumber: key + 1,
  };
});

console.log(modifiedKeys);

// Internal Work Flow

function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

console.log(
  myMap([1, 2, 3, 4], (n, i, arr) => `${n} Placed in ${i} th Index of ${arr}`),
);



