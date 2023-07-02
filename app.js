const express = require("express");
const ExpressError = require("./error");

const app = express();

app.get("/mean", function (req, res, next) {
  let sum = 0;
  const str = req.query["nums"];
  console.log(str);
  if (!str) throw new ExpressError("Bad Request", 404);
  const nums = str.split(",").map((n) => Number(n));

  try {
    for (let i = 0; i < nums.length; i++) {
      console.log(isNaN(nums[i]));
      if (isNaN(nums[i])) throw new ExpressError("foo is not a number", 400);
      sum += nums[i];
    }

    mean = sum / nums.length;
    let result = {
      operation: "mean",
      value: mean,
    };
    res.send(result);
  } catch (e) {
    next(e);
  }
});

app.get("/median", function (req, res, next) {
  const nums = req.query["nums"].split(",").map((n) => Number(n));
  if (!nums) throw new ExpressError("Bad Request", 404);
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
  res.send(result);
});

app.use((req, res, next) => {
  const e = new ExpressError("Page not found", 404);
  next(e);
});

app.use(function (err, req, res, next) {
  let message = err.message;
  let status = err.status || 500;

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log("Connected to port 3000");
});
