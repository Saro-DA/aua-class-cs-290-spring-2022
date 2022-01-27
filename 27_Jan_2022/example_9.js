

function add(n1, n2) {
    console.log(n1 + n2);
}

function doWhatISay(fn) {
    fn(1, 2);
}

doWhatISay(add);


function plus(n1, n2) {
    console.log(n1 + n2);
}

function plus(n1) {
    console.log(n1);
}

plus(5, 3);