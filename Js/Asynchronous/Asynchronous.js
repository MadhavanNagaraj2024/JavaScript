// Callbacks

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data");
}

fetchData(processData);

// Callback Hell

function login(callback) {
  setTimeout(() => {
    console.log("user was logged in");
    callback();
  }, 2000);
}

function getProfile(callback) {
  setTimeout(() => {
    console.log("user profile loaded");
    callback();
  }, 2000);
}

function getPosts(callback) {
  setTimeout(() => {
    console.log("Posts are loaded");
    callback();
  }, 2000);
}

login(function () {
  getProfile(function () {
    getPosts(function () {
      console.log("All Data Loaded..!");
    });
  });
});

// Promise States Example

const promise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Failed to fetch data");
    }
  }, 2000);
});

promise.then((data) => console.log(data)).catch((error) => console.log(error));

// Promise Chain

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, user: "Maddy" });
    }, 2000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2", "Post 3"]);
    }, 2000);
  });
}

function getComments(posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(posts);
      resolve(["Wow", "Good", "Awesome", "Not Bad"]);
    }, 2000);
  });
}

getUser()
  .then((user) => {
    console.log(user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log(posts);
    return getComments(posts[0]);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => {
    console.log("Error", error);
  });

// Async and Await

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  console.log(data);
}

getData();
