
const input = 0

new Promise((resolve, reject) => {
    if (input) {
        return resolve("Hello World!");
    }

    reject('input is zero!')
})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log("Error!");
        console.error(err);
    })