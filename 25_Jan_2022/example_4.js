

var myObj = {
    name: "ABC",
    length: 1000,
    weight: 50,
    inside: {
        length: 1000
    }
}

console.log(myObj);

myObj.length = 40;

console.log(myObj.length);

console.log(myObj.inside.length);