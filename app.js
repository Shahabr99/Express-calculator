const express = require("express");

const app = express();

app.get("/mean", function (req, res) {
  let sum = 0;
  const nums = req.query["nums"];
  const arr = nums.split(",").map((n) => Number(n));
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  mean = sum / arr.length;
  let result = {
    operation: "mean",
    value: mean,
  };
  res.send(result);
});

app.listen(3000, () => {
  console.log("Connected to port 3000");
});
