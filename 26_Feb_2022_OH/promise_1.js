

function square_v1(side) {
    return new Promise((resolve, reject) => {
        // Returning a new Promise is useful when we have to send a callback to another function
        // and we have to wait for it to be called and then resolve the Promise.
        setTimeout(() => {
            resolve(side * side);
        }, 1000);

    });
}

function square_v2(side) {
    return Promise.resolve(side * side);
}

async function square_v3(side) {
    return side * side;
}

async function main() {
    const res1 = await square_v1(2);
    console.log(res1);
    const res2 = await square_v2(3);
    console.log(res2);
    const res3 = await square_v3(4);
    console.log(res3);
}

main();