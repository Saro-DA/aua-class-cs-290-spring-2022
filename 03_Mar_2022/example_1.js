

String.prototype.countLetters = function (c) {
    let count = 0;
    for (let ch of this) {
        if (ch === c) count++;
    }

    return count;
}

Number.prototype.double = function () {
    return this * 2;
}
console.log("Saro".countLetters('S'));

const val = 4;

console.log(val.double());