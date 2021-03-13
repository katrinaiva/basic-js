const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else if (members.length === 0) {
    return null;
  }
  let teams = [];

  members.forEach((element) => {
    if (typeof element === "string") {
      teams.push(element.split(" ").join("")[0].toUpperCase());
    }
  });
  return teams.length > 0 ? teams.sort().join("") : false;
};
