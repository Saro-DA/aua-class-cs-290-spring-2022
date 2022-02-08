
class Foo {
    constructor(arr, multiplier) {
        this.arr = arr;
        this.multiplier = multiplier;
    }

    printElements() {
        console.log(this.multiplier);
        this.arr.forEach((v) => {
            console.log(v * this.multiplier);
        })
    }
}

const f = new Foo([1, 2, 3], 4);

f.printElements();