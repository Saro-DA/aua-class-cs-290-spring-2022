

async function squareWithDelay(side) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return side * side
}


async function main() {
    const result = await squareWithDelay(2);
    console.log(result);
}

main();