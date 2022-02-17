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
        const rArea = rectArea(4, 3);
        rArea.then(res => console.log(res));

        const sqArea = await squareArea(4);
        console.log(sqArea);
        const cArea = await circleArea(4);
        console.log(cArea);

    } catch (err) {
        console.log(err);
    }
}

main();