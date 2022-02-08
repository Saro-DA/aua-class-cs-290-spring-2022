
const myObj = {
    name: "Saro",
    phone: 093607770,
    // innerObj: {
    //     a: 'abc'
    // }
}

myObj.lastName = "Deravanesian";

// const result = myObj && myObj.innerObj && myObj.innerObj.a;
const result = myObj?.innerObj?.a;

console.log(result);

