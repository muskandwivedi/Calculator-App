"use strict mode";
// Selecting the elements =>
const timeEl = document.getElementById("time");
const areaEl = document.querySelector(".area");
// 1. Setting the Time
const today = new Date();
const time = `${today.getHours()}:${String(today.getMinutes()).padStart(2, 0)}`;
timeEl.innerHTML = time;
console.log(time);
// 2. Calculating the numbers
const calcNumbers = function (result) {
  areaEl.value += result;
};
// 3.Making the numbers negative and positive(+/-)
const makeNegativeAndPostive = function (result) {
  if (result.charAt(0) === "-") return (areaEl.value = result.replace("-", ""));
  areaEl.value = "-" + result;
};
// 4. Calculating the percentage of given numbers
const calcPercentage = function (result) {
  const result1 = String(result);
  if (result1.includes("%")) {
    let a, b, percent;
    let splitNum = [];
    splitNum = result1.split("%");
    a = Number(splitNum[0]);
    b = Number(splitNum[1]);
    percent = (a * 100) / b;
    areaEl.value = percent;
  }
};
