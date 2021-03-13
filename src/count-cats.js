const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix = []) {
  let newCats = matrix.flat(Infinity);
  let sum = 0;
  newCats.forEach((element) => {
    if (element === "^^") {
      sum++;
    }
  });

  return sum;
};
