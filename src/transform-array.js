const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arrCopy = arr.map((x) => x);

  let discardNextIndex = arr.indexOf("--discard-next");
  let discardPrevIndex = arr.indexOf("--discard-prev");
  let doubleNextIndex = arr.indexOf("--double-next");
  let doublePrevIndex = arr.indexOf("--double-prev");
    switch (true) {
      case discardNextIndex >= 0:
        if (discardNextIndex === arr.length - 1) {
          arrCopy.splice(discardNextIndex, 1);
        } else {
          arrCopy.splice(discardNextIndex, 2);
        }
        break;
      case discardPrevIndex >= 0:
        if (discardPrevIndex === 0) {
          arrCopy.splice(discardPrevIndex, 1);
        } else {
          arrCopy.splice(discardPrevIndex - 1, 2);
        }
        break;
      case doubleNextIndex >= 0:
        if (doubleNextIndex === arr.length - 1) {
          arrCopy.splice(doubleNextIndex, 1);
        } else {
          arrCopy[doubleNextIndex] = arrCopy[doubleNextIndex + 1];
        }
        break;
      case doublePrevIndex >= 0:
        if (doublePrevIndex === 0) {
          arrCopy.splice(doublePrevIndex, 1);
        } else {
          arrCopy[doublePrevIndex] = arrCopy[doublePrevIndex - 1];
        }
        break;
      default:
        arrCopy = arr
    }
  return arrCopy;
};
