const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected!");
  }, 2000);
});

const myFunc = () => {
  console.log("-- before promise");
  myPromise
    .then((data) => {
      console.log(data, "--- inside then");
    })
    .catch((err) => {
      console.log(err, "-- inside catch");
    });

  console.log("-- after promise");
};

// myFunc();

// equivalnet way, but the logs will be of different order

const myFuncAsync = async () => {
  try {
    console.log("-- before await");
    const data = await myPromise;
    console.log(data, "-- inside try");
  } catch (err) {
    console.log(err, "-- inside catch");
  }
};

myFuncAsync();
