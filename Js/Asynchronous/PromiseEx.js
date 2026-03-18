async function fetchApiData() {
  try {
    const apiRes = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php",
    );
    const data = await apiRes.json();
    return data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

async function main() {
  const result = await fetchApiData();
  console.log(result);
}

main();

async function fetchMultiple() {
  try {
    const [resOne, resTwo] = await Promise.allSettled([
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/2"),
    ]);

    console.log(resOne, resTwo);
  } catch (error) {
    console.log("Error while fetching Data", error);
    throw error;
  }
}

fetchMultiple();
