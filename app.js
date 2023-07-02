const express = require("express");

const app = express();

app.get("/mean", function (req, res) {
  let sum = 0;
  const nums = req.query["nums"].split(",").map((n) => Number(n));

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  mean = sum / arr.length;
  let result = {
    operation: "mean",
    value: mean,
  };
  res.send(result);
});

app.get("/median", function (req, res) {
  const nums = req.query["nums"].split(",").map((n) => Number(n));
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
  res.send(result);
});

app.get("/mode", function (req, res) {
  const nums = req.query["nums"].split(",").map((n) => Number(n));
  console.log(nums);
  let number = 0;
  let obj = {};
  let count = 0;
  for (let num of nums) {
    console.log(num);
    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
    if (obj[num] > count) {
      count = obj[num];
    }
  }

  for (let key in obj) {
    if (obj[key] === count) {
      number = key;
    }
  }
  let result = {
    operation: "mode",
    value: number,
  };
  console.log(result);
});

app.listen(3000, () => {
  console.log("Connected to port 3000");
});
