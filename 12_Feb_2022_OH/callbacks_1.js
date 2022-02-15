const myFunc = (str, callback) => {
  console.log(str, "--- my string");
  setTimeout(() => {
    callback(str + " modified");
  }, 2000);
};

myFunc("My string", (value) => {
  console.log(value, " - inside the callback");
});

console.log("something else");
