function myFunc(callback, value) {
  console.log("I'm here " + value);
  console.log("I'm here 2");
  callback();

  setTimeout(() => {
    console.log("I'm here timeout");
    console.log("I'm here timeout 2");
    callback();
  }, 2000);
}

function myCallback() {
  console.log("I'm inside the callback!");
}

myFunc(myCallback, "Test");

console.log("Outside the function");
