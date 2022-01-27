

var myObj = {
    e1: 12,
    e2: "Hello",
    e3: [1, 2, 3],
    e4: {
        e1: 111
    },
    print: function () {
        console.log(this.e1);
    }
}

myObj.print();