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

describe("it should find the median", function () {
  it("should calculate and return the median for even number of values", function () {
    expect(findMedian([1, 2, 3, 4])).toEqual({
      operation: "median",
      value: 2.5,
    });
  });
  it("should calculate the median for an array with odd number of values", function () {
    expect(findMedian([1, 2, 3, 4, 5])).toEqual({
      operation: "median",
      value: 3,
    });
  });
});

it("should find the mode", function () {
  expect(findMode([1, 2, 3, 1, 4])).toEqual({
    operation: "mode",
    value: 1,
  });
});
