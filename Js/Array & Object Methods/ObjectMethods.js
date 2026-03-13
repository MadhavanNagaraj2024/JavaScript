// Object.keys()

const obj = {
  name: "Madhavan",
  age: 25,
  address: "Bglr",
};

console.log(Object.keys(obj)); // [ 'name', 'age', 'address' ]

console.log(Object.values(obj)); // [ 'Madhavan', 25, 'Bglr' ]

console.log(Object.entries(obj)); // [ [ 'name', 'Madhavan' ], [ 'age', 25 ], [ 'address', 'Bglr' ] ]

const obj1 = {
  name1: "Madhavan",
  age1: 25,
  address1: "Bglr...!",
};

const obj2 = {
  name2: "Tom",
  age2: 24,
  address2: "Cbe..!",
};

const result = Object.assign({}, obj1, obj2);

console.log(result);

/*{
  name1: 'Madhavan',
  age1: 25,
  address1: 'Bglr...!',
  name2: 'Tom',
  age2: 24,
  address2: 'Cbe..!'
}*/

const objnew = {
  name: "Madhavan",
  age: 25,
  address: "Bglr...!",
};

Object.freeze(objnew);

objnew.name = "Tom";

console.log(objnew); // { name: 'Madhavan', age: 25, address: 'Bglr...!' }

// Object.Seal()

let objnew = {
  name: "Madhavan",
  age: 25,
  address: "Bglr...!",
};

Object.seal(objnew);

const result1 = delete objnew.age;

console.log(result1);
console.log(objnew);

/* true
{ name: 'Madhavan', address: 'Bglr...!' } */

let objnew = {
  name: "Madhavan",
  age: 25,
  address: "Bglr...!",
};

Object.freeze(objnew);

objnew.age = 21;

console.log(objnew); // { name: 'Madhavan', age: 25, address: 'Bglr...!' }
