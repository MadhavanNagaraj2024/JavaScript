function* demo() {
  console.log("Start");
  yield 1;

  console.log("Middle");
  yield 2;

  console.log("End");
}

const g = demo();

g.next();
g.next();
g.next();
