let wm = new WeakMap();

let user = { name: "Tom" };

// set
wm.set(user, "data");

// get
console.log("Get", wm.get(user));

// has
console.log("Has", wm.has(user));

// delete
console.log("Delete", wm.delete(user));

user = null;

// Iterating

const wm1 = new WeakMap();
const keys = [];

let user1 = { name: "Tom" };
let user2 = { name: "Jerry" };

wm1.set(user1, "data1");
wm1.set(user2, "data2");

keys.push(user1, user2);

// iterate using array
keys.forEach((key) => {
  console.log(wm1.get(key));
});
