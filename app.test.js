const { findMean, findMedian, findMode } = require("./methods");

describe("should return the mean of an array", function () {
  it("should return the mean of an odd number of values", function () {
    expect(findMean([1, 2, 3])).toEqual({
      operation: "mean",
      value: 2,
    });
  });
  it("should return the mean of an even number of values", function () {
    expect(findMean([1, 2, 3, 4])).toEqual({
      operation: "mean",
      value: 2.5,
    });
  });
});
