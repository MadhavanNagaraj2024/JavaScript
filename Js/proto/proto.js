const obj = {};
console.log(Object.getPrototypeOf(obj));

// manually object createing

const persion = {
  greet() {
    console.log("Hellow");
  },
};

const user = Object.create(persion);

this.name = "Madhavan";

console.log(user.greet());

// constructor

function Person(name) {
  this.name = name;
}

const p1 = new Person("Madhavan");

// Adding Methods Using Prototype

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello " + this.name);
};

const p2 = new Person("Vignesh");

p2.greet();
