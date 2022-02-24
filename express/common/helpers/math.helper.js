
// This variable is shared among all imports.
let count = 0;

module.exports = {
    square: (num) => {
        console.log(++count);
        return num * num;
    },

    add(num1, num2) {
        return num1 + num2;
    }
}