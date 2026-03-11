// Shallow Copy

const obj = {
  name: "Madhavan",
  address: {
    city: "Chennai",
  },
};

const newObj = { ...obj };

newObj.address.city = "Bglr";

console.log(obj.address.city); // "Bglr"

console.log(newObj.address.city === obj.address.city); // true

// Deep Copy using StructuredClone()

const obj1 = {
  name: "Madhavan",
  address: {
    city: "Chennai",
  },
};

const newObj = structuredClone(obj1);

newObj.address.city = "Bglr";

console.log(obj.address.city); // "Chennai"

console.log(newObj.address.city === obj.address.city); // false
