// rest "...name"
// 1st example
const log = function (a, b, ...args) {
  console.log(a, b, args);
};

log("basic", "rest", "operator", "usage");
// 2nd example
function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
}
calcOrDouble(3);
