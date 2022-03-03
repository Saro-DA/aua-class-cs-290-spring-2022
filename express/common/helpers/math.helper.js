
// This variable is shared among all imports.
let count = 0;

module.exports = {
    sqrt: (num) => {
        if (num < 0) throw new Error("Can't accept negatvie numbers.");

        return Math.sqrt(num);
    },

    square: (num) => {
        console.log(++count);
        return num * num;
    },

    squarePromise: async (num) => {
        return num * num;
    },

    add(num1, num2) {
        return num1 + num2;
    }
}