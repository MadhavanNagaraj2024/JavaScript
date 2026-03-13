// This works with Normal Function

const persion = {
  name: "Madhavan",

  greet() {
    console.log("Hello", this.name);
  },
};

persion.greet();

//Call Example

function greet1(city) {
  console.log(`${this.name} Lives in ${city}`);
}

const persion1 = {
  name: "Maddy",
};

greet1.call(persion1, "Chennai");

// Apply() (Arguments as Array)

function greet2(city, country) {
  console.log(`${this.name} Lives in ${city}, ${country}`);
}

const persion2 = {
  name: "Maddy",
};

greet2.apply(persion2, ["Chennai", "India"]);

// bind() (Does NOT execute immediately)

function greet3(greeting){
    console.log(`${greeting} ${this.name}`);
}

const persion3 = {
    name: "Maddy",
};

const boundGreet = greet3.bind(persion3);

boundGreet("Hello");