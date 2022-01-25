


var myObj = {
    name: "Saro",
    phone: "093607770"
}

// console.log(myObj.name);

var n = "name";
// console.log(myObj[n]);
console.log(getPropertyOf(myObj, n));

n = "phone";
console.log(getPropertyOf(myObj, n));

function getPropertyOf(obj, prop) {
    return obj[prop];
}