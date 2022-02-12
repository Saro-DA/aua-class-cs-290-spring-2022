const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success!");
  }, 2000);
});

myPromise
  .then(() => {
    return new Promise((resolve) =>
      resolve({ firstName: "Rebecca", lastName: "Asryan" })
    );
  })
  .then((data) => {
    console.log(data, "-- inside second then");
  })
  .catch((error) => {
    console.log(error, "-- inside catch");
  });
