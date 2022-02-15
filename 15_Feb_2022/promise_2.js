function squareArea(side) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(side * side);
        }
            , 500);
    })
}

function circleArea(r) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(r * r * 3.14);
            reject('bad input')
        }
            , 800);
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

Promise.allSettled([
    squareArea(4),
    circleArea(5),
    rectArea(3, 2)
]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})