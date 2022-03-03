const { square, sqrt, squarePromise } = require('./math.helper');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

describe("Testing math.helper file.", function () {
    // If timeout is set to 0, it means it will wait for a test result
    // for as long as it takes.
    // this.timeout(0);

    describe("Testing the 'squarePromise' function.", function () {
        it("Returns square of a number correctly.", function () {
            squarePromise(2).should.eventually.be.equal(4);
        })
    })

    describe("Testing the 'square' function.", function () {
        it("Returns square of a number correctly.", function () {
            square(2).should.be.equal(4);
        })
    })

    describe("Testing the 'sqrt' function.", function () {
        it("Returns sqrt of a number correctly.", function () {
            sqrt(4).should.be.equal(2);
        })

        it.skip("Returns and error for a negative number.", function () {
            expect(sqrt(-4)).to.throw("Can't accept negatvie numbers.");
        })
    })
})