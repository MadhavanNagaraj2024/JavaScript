// Promise All
const res1 = new Promise((resolve) =>
  setTimeout(() => resolve("User Datas Loaded...!"), 2000),
);
const res2 = new Promise((resolve) =>
  setTimeout(() => resolve("Post Datas Loaded...!"), 2000),
);
const res3 = new Promise((resolve) =>
  setTimeout(() => resolve("Comment Datas Loaded...!"), 2000),
);

Promise.all([res1, res2, res3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// Proise Race
const res11 = new Promise((resolve) =>
  setTimeout(() => resolve("User Datas Loaded...!"), 2000),
);
const res12 = new Promise((resolve) =>
  setTimeout(() => resolve("Post Datas Loaded...!"), 1000),
);
const res13 = new Promise((resolve) =>
  setTimeout(() => resolve("Comment Datas Loaded...!"), 2000),
);

Promise.race([res11, res12, res13])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

//   Promise All Settled

const res21 = new Promise((resolve) =>
  setTimeout(() => resolve("User Datas Loaded...!"), 2000),
);
const res22 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Post Datas Loaded...!"), 1000),
);
const res23 = new Promise((resolve) =>
  setTimeout(() => resolve("Comment Datas Loaded...!"), 2000),
);

Promise.allSettled([res21, res22, res23])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

//  Promise Any

const res31 = new Promise((resolve) =>
  setTimeout(() => resolve("User Datas Loaded...!"), 2000),
);
const res32 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Post Datas Loaded...!"), 1000),
);
const res33 = new Promise((resolve) =>
  setTimeout(() => resolve("Comment Datas Loaded...!"), 2000),
);

Promise.any([res31, res32, res33])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
