function greet(name) {
  return `Welcome back ${name}`;
}

function processUser(callback) {
  return callback("Maddy");
}

console.log(processUser(greet));
