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
        const sqArea = squareArea(4);
        sqArea.then(res => console.log(res));
        const cArea = circleArea(4);
        cArea.then(res => console.log(res));
        const rArea = rectArea(4, 3);
        rArea.then(res => console.log(res));
    } catch (err) {
        console.log(err);
    }
}

main();