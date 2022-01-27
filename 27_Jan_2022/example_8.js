

var myVar = function () {
    console.log("Inside myVar().");
}

function foo() {
    console.log("Foo!");
}

callWhateverISay(myVar);

function callWhateverISay(fn) {
    fn();
}