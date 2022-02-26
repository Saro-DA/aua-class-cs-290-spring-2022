

module.exports = {
    async square(side) {
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log(typeof (side));

        if (side == 0) throw new Error(`We don't like 0!`);

        return side * side;
    }
}