

var myObj = {
    e1: 12,
    e2: "Hello",
    e3: [1, 2, 3],
    e4: {
        e1: 111
    },
    pow: function (base, p) {
        return base ** p;
    }
}

var result = myObj.pow(5, 3);

console.log(result);