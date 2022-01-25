

var myArray = [1, 2, 10, 12, "Hello world", true];

console.log(typeof myArray);

for (var i = 0; i < myArray.length; i++) {
    console.log(typeof myArray[i]);
}

console.log(myArray instanceof Array);