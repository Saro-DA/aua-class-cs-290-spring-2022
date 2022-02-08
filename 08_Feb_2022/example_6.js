

const arr = [1, 2, 4, 6, 3, 5, 7];

arr.forEach(function (value) {
    console.log(value);
});

['a', 'b', 'c'].forEach(function (v) {
    console.log(v);
})

const evens = arr.filter(function (v) {
    return v % 2 === 0;
})
console.log(evens);

const mults = arr.map(function (value, index) {
    return value * index
})
console.log(mults);