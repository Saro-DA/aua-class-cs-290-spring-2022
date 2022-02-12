const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success!");
    // use the line below to test the reject case
    // reject('error');
  }, 2000);
});

myPromise
  .then((value) => {
    return value + " and bar";
  })
  .then((value) => {
    return new Promise((resolve) => {
      console.log(" -- starting to wait ---");
      setTimeout(() => {
        resolve(value + " and bar again");
      }, 2000);
    });
  })
  .then((value) => {
    console.log(" -- ended waiting ---");
    return value + " and again";
  })
  .then((value) => {
    return value + " and again";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally!!");
  });
