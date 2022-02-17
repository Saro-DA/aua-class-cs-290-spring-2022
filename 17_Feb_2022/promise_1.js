function squareArea(side) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(side * side);
        }
            , 1000);
    })
}

function circleArea(r) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(r * r * 3.14);
        }
            , 1000);
    })
}

function rectArea(h, w) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(h * w);
        }
            , 1000);
    })
}

async function main() {
    try {
        const sqArea = await squareArea(4);
        console.log(sqArea);
        const cArea = await circleArea(4);
        console.log(cArea);
        const rArea = await rectArea(4, 3);
        console.log(rArea);
    } catch (err) {
        console.log(err);
    }
}

main();