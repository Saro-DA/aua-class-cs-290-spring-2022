const {
  calculatePercentage,
  calculatePercentageAsync,
} = require("./percentage.helper");
const chai = require("chai");
const chaiAsPromise = require("chai-as-promised");

chai.use(chaiAsPromise);
chai.should();

const expect = chai.expect;

describe("Testing percentage.helper file", function () {
  describe("Testing calculatePercentageAsync function", function () {
    it("Returns correct percentage", function () {
      return calculatePercentageAsync(22, 100).should.eventually.equal(22);
    });

    it("Returns an error when total is not a number", function () {
      return expect(
        calculatePercentageAsync(22, "100")
      ).to.eventually.be.rejectedWith("Total should be a positive number!");
    });

    it("Returns an error when total is less than or equal to zero", function () {
      return expect(
        calculatePercentageAsync(22, 0)
      ).to.eventually.be.rejectedWith("Total should be a positive number!");
    });

    it("Returns an error when value is less than zero", function () {
      return expect(
        calculatePercentageAsync(-1, 100)
      ).to.eventually.be.rejectedWith("Value should be a positive number!");
    });
  });

  describe("Testing calculatePercentage function", function () {
    it("Returns correct percentage", function () {
      return calculatePercentage(22, 100).should.be.equal(22);
    });
  });
});
