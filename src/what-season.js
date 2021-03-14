const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  var options = {
    month: "long",
  };
  const spring = {
    monthMarch: "March",
    monthApril: "April",
    monthMay: "May",
    seasons: "spring",
  };

  const summer = {
    monthJune: "June",
    monthJuly: "July",
    monthAugust: "August",
    seasons: "summer",
  };
  const autumn = {
    monthSeptember: "September",
    monthOctober: "October",
    monthNovember: "November",
    seasons: "autumn",
  };
  const winter = {
    monthDecember: "December",
    monthJanuary: "January",
    monthFebruary: "February",
    seasons: "winter",
  };

  if (typeof date === "undefined") {
    return "Unable to determine the time of year!";
  }

  let month = date.toLocaleDateString("en-US", options);

  switch (true) {
    case month === spring.monthMarch ||
      month === spring.monthApril ||
      month === spring.monthMay:
      return spring.seasons;

    case month === summer.monthJune ||
      month === summer.monthJuly ||
      month === summer.monthAugust:
      return summer.seasons;

    case month === autumn.monthSeptember ||
      month === autumn.monthOctober ||
      month === autumn.monthNovember:
      return autumn.seasons;

    case month === winter.monthDecember ||
      month === winter.monthJanuary ||
      month === winter.monthFebruary:
      return winter.seasons;

      defaul: return "Unable to determine the time of year!";
  }
};
