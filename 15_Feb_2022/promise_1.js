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

function main() {
    squareArea(4)
        .then(res => {
            console.log(`area is ${res}`);
            return circleArea(4);
        })
        .then(res => {
            console.log(`area is ${res}`);
            return rectArea(4, 3);
        })
        .then(res => {
            console.log(`area is ${res}`);
            return;
        })
}

main();