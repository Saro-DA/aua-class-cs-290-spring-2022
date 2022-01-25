

var myArray = ["one", "two", "three"];

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (var i in myArray) {
    console.log(myArray[i]);
}

for (var n of myArray) {
    console.log(n);
}