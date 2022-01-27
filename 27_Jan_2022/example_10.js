
// setTimeout(printSomething, 3000);

// console.log("blabla");

// console.log("blabla 2");


function printSomething(something) {
    console.log(something);
}


setTimeout(function () {
    printSomething("blabla")
}, 3000)