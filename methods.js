function findMean(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (isNaN(nums[i])) throw new ExpressError("foo is not a number", 400);
    sum += nums[i];
  }

  mean = sum / nums.length;
  let result = {
    operation: "mean",
    value: mean,
  };
  return result;
}

function findMedian(nums) {
  const idx = Math.trunc(nums.length / 2);
  let result = {};

  if (nums.length % 2 === 0) {
    const median = (nums[idx] + nums[idx - 1]) / 2;
    result = {
      operation: "median",
      value: median,
    };
  } else {
    const median = nums[idx];
    result = {
      operation: "median",
      value: median,
    };
  }
  return result;
}

function findMode(nums) {
  let number = 0;
  let obj = {};
  let maxCount = 0;

  // counting the occurrence of each value
  for (let num of nums) {
    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  }

  for (let key of Object.keys(obj)) {
    const count = obj[key];

    if (count > maxCount) {
      maxCount = count;
      console.log(maxCount);
    }
  }

  let result = {
    operation: "mode",
    value: maxCount,
  };

  return result;
}

module.exports = { findMean, findMedian, findMode };
