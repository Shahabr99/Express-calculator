const express = require("express");
const ExpressError = require("./error");
const { findMean, findMedian, findMode } = require("./methods");

const app = express();

app.get("/mean", function (req, res, next) {
  const str = req.query["nums"];
  const nums = str.split(",").map((n) => Number(n));
  if (!str) throw new ExpressError("Bad Request", 404);

  const result = findMean(nums);
  res.send(result);
});

app.get("/median", function (req, res, next) {
  const str = req.query["nums"];
  const nums = str.split(",").map((n) => Number(n));
  if (!str) throw new ExpressError("Bad Request", 404);
  const result = findMedian(nums);
  res.send(result);
});

app.get("/mode", function (req, res) {
  const str = req.query["nums"];
  const nums = str.split(",").map((n) => Number(n));

  const result = findMode(nums);
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
