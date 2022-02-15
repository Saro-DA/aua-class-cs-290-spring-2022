// Completely exquivalent to callbacks_1 example

const myFunc = (str, callback) => {
  console.log(str, "--- my string");
  setTimeout(() => {
    callback(str + " modified");
  }, 2000);
};

const myCallback = (value) => {
  console.log(value, " - inside the callback");
};

myFunc("My string", myCallback);

console.log("something else");
