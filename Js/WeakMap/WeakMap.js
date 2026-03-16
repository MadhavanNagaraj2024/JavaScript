const wm = new WeakMap();

const user = { name: "Tom" };

wm.set(user, "User Data");

console.log(wm.get(user));
